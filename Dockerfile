# Node.js 베이스 이미지
FROM node:20-alpine AS builder

# 작업 디렉토리 설정 (루트 경로에 바로 설정)
WORKDIR /usr/src/app

# package.json 및 package-lock.json 복사
COPY package*.json ./

# 의존성 설치
RUN npm install

# 소스 코드 복사
COPY . .

# Next.js 앱 빌드
RUN npm run build

# 운영용 이미지 (빌드된 파일만 사용)
FROM node:20-alpine AS runner

# 작업 디렉토리 설정
WORKDIR /usr/src/app

# 빌드 파일만 복사
COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/node_modules ./node_modules

# 포트 노출
EXPOSE 3000

# Next.js 앱 시작 명령어
CMD ["npm", "start"]