# 1단계: Node 베이스 이미지
FROM node:18-alpine AS base

# 2단계: 종속성 설치
FROM base AS deps
RUN apk add --no-cache libc6-compat python3 make g++
WORKDIR /app

COPY package.json pnpm-lock.yaml* ./
RUN npm install -g pnpm@8 && pnpm install --frozen-lockfile

# 3단계: 빌드 및 정적 export
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# 🔥 빌드 및 export 수행 → /app/out 생성
RUN pnpm build && pnpm export

# 4단계: S3 또는 정적 웹 호스팅용 NGINX 경량 이미지
FROM nginx:alpine AS runner
COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
