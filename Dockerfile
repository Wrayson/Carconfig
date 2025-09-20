# Stage 1: Build frontend
FROM node:20-alpine AS frontend-builder

WORKDIR /app

COPY ./svelte/package*.json ./
RUN npm ci --legacy-peer-deps

COPY ./svelte .
RUN npm run build   # generates /app/build

# Stage 2: Build backend + runtime deps
FROM node:20-alpine

WORKDIR /usr/src/app

# Install backend deps
COPY ./node/package*.json ./
RUN npm ci --legacy-peer-deps

# Copy backend source
COPY ./node .

# Copy built frontend output
COPY --from=frontend-builder /app/build ./build

# Install frontend runtime deps (important for SSR imports like "three")
COPY ./svelte/package*.json ./svelte/
RUN cd svelte && npm install --omit=dev --legacy-peer-deps

EXPOSE 80

CMD ["npm", "start"]
