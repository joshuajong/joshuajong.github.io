#!/bin/bash

# Build the React app
npm run build

# Switch to the deployment branch
git checkout deploy

# Remove all existing files in the deployment branch
git rm -rf .

# Copy the contents of the "build" directory from the main branch to the root of deploy
git checkout main -- build/*
git checkout main -- build/.*

# Commit and push the changes
git add .
git commit -m "Deploy latest build"
git push

# Switch back to the main branch
git checkout main