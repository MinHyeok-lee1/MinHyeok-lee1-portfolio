# 1단계: 기본 이미지 설정
FROM node:18-alpine AS base

# 2단계: 종속성 설치
FROM base AS deps
RUN apk add --no-cache libc6-compat python3 make g++
WORKDIR /app

# 필요한 파일만 복사 (의존성 설치용)
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

# 🔥 pnpm 설치 및 의존성 설치
RUN npm install -g pnpm@8 && \
  export PATH="$PATH:/usr/local/bin" && \
  if [ -f pnpm-lock.yaml ]; then pnpm install --frozen-lockfile; \
  elif [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  else echo "Lockfile not found. Installing..." && pnpm install; \
  fi

# 3단계: 빌드 및 정적 export
FROM base AS builder
WORKDIR /app

# node_modules 복사 + 소스 복사
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# 🔥 정적 HTML 빌드 (out 디렉터리 생성)
RUN npm install -g pnpm@8 && \
  pnpm build && \
  pnpm export

# 4단계: 최종 산출물만 포함한 경량 이미지
FROM nginx:alpine AS runner
COPY --from=builder /app/out /usr/share/nginx/html

# 기본 웹 포트 노출
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
