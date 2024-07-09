# Stage 1: Build the React app
FROM node:18-alpine as build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Set NODE_OPTIONS to use the legacy OpenSSL provider
ENV NODE_OPTIONS=--openssl-legacy-provider

# Build the React app
RUN npm run build

# Stage 2: Serve the React app with nginx
FROM nginx:1.21.0-alpine

# Remove the default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Environment variable for work directory
ENV WORK_DIR=/var/web/hpfrontend

# Create the work directory
RUN mkdir -p ${WORK_DIR}

# Copy the built React app from the previous stage to the nginx html directory
COPY --from=build /app/build ${WORK_DIR}/

# Copy custom nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Set permissions
RUN touch /var/run/nginx.pid
RUN chown -R nginx:nginx /var/run/nginx.pid ${WORK_DIR} /var/cache/nginx /var/log/nginx /etc/nginx/conf.d

# Expose port 80 to the outside world
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
