# Use a lightweight Node.js image (Alpine) as the base for the container
# Node.js is required to run npm commands and build the React app
FROM node:18-alpine

# Set the working directory inside the container
# All subsequent commands will be executed from this folder
# This satisfies the assignment requirement for WORKDIR naming
WORKDIR /simran_simran_ui_garden

# Copy package.json and package-lock.json to the container
# This is done first so that npm install can run without copying all source files
COPY package*.json ./

# Install all project dependencies inside the container
# This allows the container to build and run the React app
RUN npm install

# Copy the rest of the project files (source code, public folder, etc.) into the container
COPY . .

# Build the React app for production
# This creates the optimized 'build/' folder, ready to be served
ENV DISABLE_ESLINT_PLUGIN=true
RUN npm run build

# Install a lightweight static server globally in the container
# This server will serve the production build on port 8083
RUN npm install -g serve

# Expose port 8083 so that it can be accessed from the host machine
EXPOSE 8083

# Start the static server to serve the production build
# -s serves the 'build' folder
# -l specifies the port (8083)
CMD ["serve", "-s", "build", "-l", "8083"]