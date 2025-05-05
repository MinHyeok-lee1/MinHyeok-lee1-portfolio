# 1단계: 기본 이미지 설정
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat python3 make g++
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

# 🔥 pnpm 최신 버전 설치 🔥
RUN npm install -g pnpm@8 && \
export PATH="$PATH:/usr/local/bin" && \
if [ -f pnpm-lock.yaml ]; then pnpm install --frozen-lockfile; \
elif [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
elif [ -f package-lock.json ]; then npm ci; \
else echo "Lockfile not found. Installing..." && pnpm install; \
fi


# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# 🔥 pnpm 버전 고정 후 빌드 실행 🔥
RUN npm install -g pnpm@latest && \
  export PATH="$PATH:/usr/local/bin" && \
  if [ -f pnpm-lock.yaml ]; then pnpm install --force; \
  elif [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  else echo "Lockfile not found. Installing anyway..." && pnpm install --no-frozen-lockfile; \
  fi

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]