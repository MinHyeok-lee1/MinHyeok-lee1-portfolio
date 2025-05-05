# 1단계: 기본 Node 이미지
FROM node:18-alpine AS base

# 2단계: 의존성 설치
FROM base AS deps
RUN apk add --no-cache libc6-compat python3 make g++
WORKDIR /app

# 의존성 설치용 파일만 복사
COPY package.json pnpm-lock.yaml* ./  
RUN npm install -g pnpm@8 && pnpm install --frozen-lockfile

# 3단계: 빌드
FROM base AS builder
WORKDIR /app

# 소스 및 의존성 복사
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# 정적 HTML 빌드 (next.config.js에서 output: 'export' 필요)
RUN npm install -g pnpm@8 && pnpm build

# 4단계: 정적 서버용 경량 이미지 (S3 호스팅 또는 테스트용)
FROM nginx:alpine AS runner
COPY --from=builder /app/out /usr/share/nginx/html

# 웹 서버 포트 노출
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
