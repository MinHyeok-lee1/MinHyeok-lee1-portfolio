# 1단계: Node 베이스 이미지
FROM node:18-alpine AS base

# 2단계: 종속성 설치
FROM base AS deps
RUN apk add --no-cache libc6-compat python3 make g++
WORKDIR /app

COPY package.json pnpm-lock.yaml* ./
RUN npm install -g pnpm@8 && pnpm install --frozen-lockfile

# 3단계: 빌드 및 정적 HTML 생성
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN pnpm build  # ✅ next.config.js의 output: 'export'가 /out 생성

# 4단계: S3 업로드 또는 테스트용 nginx 서버
FROM nginx:alpine AS runner
COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
