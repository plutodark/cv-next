FROM node:18-alpine AS runner
ENV NEXT_TELEMETRY_DISABLED 1
RUN apk add --no-cache libc6-compat python3 make g++
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --no-progress && yarn cache clean

COPY . .
RUN yarn run build

EXPOSE 3000
CMD yarn run start
