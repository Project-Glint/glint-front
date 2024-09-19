# Node.js 베이스 이미지
FROM node:20-alpine AS builder

# 작업 디렉토리 설정
WORKDIR /usr/src/app

# package.json 및 package-lock.json 복사
COPY package*.json ./

# devDependencies 포함한 의존성 설치
RUN npm install --production=false

# 소스 코드 복사
COPY . .

# Next.js 앱 빌드 (NODE_ENV=production 일 때만 빌드)
RUN if [ "$NODE_ENV" = "production" ]; \
    then npm run build; \
    else echo "Skipping build in development"; \
    fi

# 운영용 이미지
FROM node:20-alpine AS runner

# 작업 디렉토리 설정
WORKDIR /usr/src/app

# 빌드 파일 및 의존성 복사
COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/node_modules ./node_modules

# NODE_ENV가 production일 경우에만 .next 복사
RUN if [ "$NODE_ENV" = "production" ]; \
    then cp -r /usr/src/app/.next ./.next; \
    else echo "Skipping copying .next in development"; \
    fi

# 포트 노출
EXPOSE 3000

# 환경 변수에 따른 명령어 실행
CMD if [ "$NODE_ENV" = "production" ]; \
    then npm run start; \
    else npm run dev; \
    fi
