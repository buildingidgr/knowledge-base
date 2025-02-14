FROM node:18-alpine

WORKDIR /app

# Add dependencies for node-gyp and other build tools
RUN apk add --no-cache python3 make g++ git

# Copy package files
COPY package*.json ./

# Install dependencies with npm install instead of npm ci
RUN npm install

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Set production environment
ENV NODE_ENV=production

# Expose the port
EXPOSE 1337

# Start the application
CMD ["npm", "start"] 