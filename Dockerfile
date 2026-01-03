# Build a small, production-ready image for Cloud Run
FROM node:24-slim

# Create app directory
WORKDIR /usr/src/app

# Install dependencies first (better layer caching)
COPY package*.json ./

# Use npm ci for reproducible installs; omit dev deps
RUN npm ci --omit=dev

# Copy the rest of the app
COPY . .

# Cloud Run expects the container to listen on $PORT (default 8080)
ENV PORT=8080
EXPOSE 8080

CMD ["npm", "start"]
