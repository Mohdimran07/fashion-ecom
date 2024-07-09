# Use a lightweight Node.js image
FROM node:alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the build folder from the host machine
COPY build .

# Switch to a minimal runtime image
FROM node:alpine

# Set working directory
WORKDIR /app

# Copy the build folder from the builder stage
COPY --from=builder /app/build .

# Expose the port where the React app runs (usually 3000)
EXPOSE 3000

# Start the React app (modify command if you use a different script)
CMD [ "npm", "start" ]
