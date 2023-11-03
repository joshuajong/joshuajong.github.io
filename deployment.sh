#!/bin/bash

# Build the React app
npm run build

# Switch to the deployment branch
git checkout deploy

# Copy the "build" directory from the main branch
git checkout main -- build

# Commit and push the changes
git add .
git commit -m "Deploy latest build"
git push

# Switch back to the main branch
git checkout main