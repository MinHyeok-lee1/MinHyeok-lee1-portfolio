# 1단계: Node.js + pnpm 설치
FROM node:18-alpine AS deps

# pnpm 버전 고정 (lockfile 호환용)
RUN npm install -g pnpm@8.15.5

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# 2단계: 빌드
FROM node:18-alpine AS builder

# 동일한 pnpm 버전 사용
RUN npm install -g pnpm@8.15.5

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# 이미지 최적화 비활성화 설정 (next export용)
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production

RUN pnpm build && pnpm export

# 3단계: nginx에 정적 파일 복사
FROM nginx:alpine AS runner

COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
