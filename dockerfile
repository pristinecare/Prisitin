FROM node:24-alpine

WORKDIR /app

# Install all dependencies (needed for build)
COPY package*.json ./
RUN npm ci

# Copy source code and build
COPY . .
RUN npm run build

# Remove devDependencies to save space
RUN npm prune --production

EXPOSE 3000

# Run in production mode
CMD ["npm", "start"]