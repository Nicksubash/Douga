# Use the official Node.js image
FROM node:18

# Create and set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Compile TypeScript files
RUN npm run build

# Expose the port your app runs on
EXPOSE 3000

# Command to run the app
CMD ["node", "dist/index.js"]
