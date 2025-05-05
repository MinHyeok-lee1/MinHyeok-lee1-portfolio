# 1단계: 의존성 설치
FROM node:18-alpine AS deps

RUN npm install -g pnpm@8.15.5

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# 2단계: 빌드
FROM node:18-alpine AS builder

RUN npm install -g pnpm@8.15.5

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

RUN pnpm build && ls -al /app/out
