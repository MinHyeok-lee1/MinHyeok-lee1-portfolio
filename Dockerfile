# 1단계: Node.js + pnpm 설치
FROM node:18-alpine AS deps

# pnpm 설치 (추가)
RUN npm install -g pnpm

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# 2단계: 빌드
FROM node:18-alpine AS builder

# pnpm 설치 (또 추가)
RUN npm install -g pnpm

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN pnpm build  # 이제 실행 가능

# 3단계: S3 업로드 또는 nginx 테스트용
FROM nginx:alpine AS runner
COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
