#!/usr/bin/env bash

# install project packages using pnpm
echo "Installing packages..."
pnpm i

# Build the project using pnpm
echo "Building the project..."
pnpm build

# Check if build was successful
if [ $? -ne 0 ]; then
    echo "Build failed! Exiting..."
    exit 1
fi

echo "Build completed successfully!"

# Start or reload the application with PM2
echo "Starting/reloading application with PM2..."

# Check if the app is already running
if pm2 describe codefotech-client > /dev/null 2>&1; then
    echo "Application is already running. Reloading..."
    pm2 reload codefotech-client
else
    echo "Starting new application..."
    pm2 start pnpm --name "codefotech-client" -- preview
fi

# Save PM2 configuration for startup
echo "Saving PM2 configuration..."
pm2 save

echo "Application is now running with PM2!"
echo "Use 'pm2 logs codefotech-client' to view logs"
echo "Use 'pm2 stop codefotech-client' to stop the application"