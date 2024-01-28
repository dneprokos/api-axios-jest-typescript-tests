# Use the official Node.js 16 image as a base
FROM node:20

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Install Allure command line
RUN npm install -g allure-commandline

# Copy the rest of your app's source code
COPY . .

# Clear the allure-results directory (remove cached test results)
RUN rm -rf allure-results

# Run the build script
RUN npm run build

# Run tests
RUN npm run test || true

# Install a simple HTTP server to serve the Allure report
RUN npm install -g http-server

# Expose port 8080
EXPOSE 8080

# Generate Allure reports from the raw results
RUN allure generate ./allure-results --clean -o ./allure-report || true

# Serve the Allure report on container start
CMD ["http-server", "allure-report", "-p", "8080", "-c-1"]