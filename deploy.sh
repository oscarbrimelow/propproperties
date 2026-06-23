#!/bin/bash

# Exit on any error
set -e

echo "=== Northeast Ohio Real Estate Portal - Deployment Script ==="

# 1. Clean previous build
echo "Cleaning old build files..."
rm -rf dist

# 2. Install dependencies
echo "Installing project dependencies..."
npm install

# 3. Compile the React + Vite application
echo "Building production bundles..."
npm run build

echo ""
echo "=== Build Complete ==="
echo "The production files have been compiled into the 'dist/' folder."
echo "You can host this directly on GitHub Pages by:"
echo "1. Initializing git: git init"
echo "2. Adding remote: git remote add origin <your-github-repo-url>"
echo "3. Committing files: git add . && git commit -m 'Initial commit'"
echo "4. Pushing code: git push -u origin main"
echo ""
echo "Or, if you want to deploy to GitHub Pages manually using the gh-pages package:"
echo "Run 'npx gh-pages -d dist'"
echo ""
echo "Your repository is also configured with a GitHub Actions workflow in .github/workflows/deploy.yml"
echo "that will automatically build and deploy your site whenever you push to main/master."
