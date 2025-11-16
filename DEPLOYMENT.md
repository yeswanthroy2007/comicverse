# GitHub Pages Deployment Guide

This guide will walk you through deploying your ComicVerse project to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your computer
- Node.js and npm installed

## Step-by-Step Deployment Process

### Method 1: Automatic Deployment with GitHub Actions (Recommended)

This method automatically deploys your site whenever you push to the main branch.

#### Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Name your repository (e.g., `COMIC_VERSE` or `comicverse`)
5. Choose **Public** (required for free GitHub Pages)
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click **"Create repository"**

#### Step 2: Initialize Git and Push to GitHub

Open your terminal in the project directory and run:

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: ComicVerse project"

# Add your GitHub repository as remote (replace YOUR_USERNAME and YOUR_REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to main branch
git branch -M main
git push -u origin main
```

**Important:** Replace `YOUR_USERNAME` with your GitHub username and `YOUR_REPO_NAME` with your repository name.

#### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **"Settings"** tab
3. Scroll down to **"Pages"** in the left sidebar
4. Under **"Source"**, select:
   - **"Deploy from a branch"**
   - Branch: **"gh-pages"** (or **"main"** if using GitHub Actions)
   - Folder: **"/ (root)"**
5. Click **"Save"**

#### Step 4: Enable GitHub Actions

1. In your repository, go to **"Settings"**
2. Click **"Actions"** → **"General"**
3. Under **"Workflow permissions"**, select:
   - **"Read and write permissions"**
   - Check **"Allow GitHub Actions to create and approve pull requests"**
4. Click **"Save"**

#### Step 5: Update Base Path (Important!)

If your repository name is NOT `COMIC_VERSE-main`, you need to update the base path in `vite.config.js`:

1. Open `vite.config.js`
2. Find this line:
   ```javascript
   base: process.env.GITHUB_PAGES === 'true' ? '/COMIC_VERSE-main/' : '/',
   ```
3. Replace `'/COMIC_VERSE-main/'` with `'/YOUR_REPO_NAME/'` (include the slashes)
4. Save the file
5. Commit and push:
   ```bash
   git add vite.config.js
   git commit -m "Update base path for GitHub Pages"
   git push
   ```

#### Step 6: Trigger Deployment

1. The GitHub Action will automatically run when you push to the main branch
2. Go to **"Actions"** tab in your repository to see the deployment progress
3. Wait for the workflow to complete (usually 1-2 minutes)
4. Once complete, your site will be available at:
   ```
   https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
   ```

### Method 2: Manual Deployment (Alternative)

If you prefer to deploy manually:

#### Step 1: Install gh-pages

```bash
npm install
```

#### Step 2: Build and Deploy

```bash
npm run deploy
```

This will:
- Build your project with the correct base path
- Deploy the `dist` folder to the `gh-pages` branch

#### Step 3: Configure GitHub Pages

1. Go to repository **Settings** → **Pages**
2. Select source: **"Deploy from a branch"**
3. Branch: **"gh-pages"**
4. Folder: **"/ (root)"**
5. Click **"Save"**

Your site will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

## Updating Your Site

### With GitHub Actions (Automatic)

Simply push your changes to the main branch:

```bash
git add .
git commit -m "Update site"
git push
```

The site will automatically rebuild and deploy.

### Manual Deployment

Run the deploy command again:

```bash
npm run deploy
```

## Troubleshooting

### Issue: Site shows 404 or blank page

**Solution:** Check that the base path in `vite.config.js` matches your repository name exactly (case-sensitive).

### Issue: Assets (images, CSS) not loading

**Solution:** 
1. Ensure the base path is correct
2. Make sure all assets are in the `public` folder
3. Check browser console for 404 errors

### Issue: GitHub Actions workflow fails

**Solution:**
1. Check the **Actions** tab for error messages
2. Ensure GitHub Pages is enabled in repository settings
3. Verify workflow permissions are set correctly

### Issue: Changes not appearing

**Solution:**
1. Wait a few minutes (GitHub Pages can take 1-5 minutes to update)
2. Clear your browser cache
3. Check the Actions tab to ensure deployment completed successfully

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file in the `public` folder with your domain:
   ```
   yourdomain.com
   ```
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings to use your custom domain

## Repository Structure After Deployment

```
COMIC_VERSE-main/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Auto-deployment workflow
├── assets/                      # Your assets
├── public/                      # Public files (images, etc.)
├── .gitignore                   # Git ignore rules
├── package.json                 # Dependencies and scripts
├── vite.config.js               # Vite configuration
└── index.html                   # Main HTML file
```

## Quick Reference Commands

```bash
# Development
npm run dev                      # Start dev server

# Build
npm run build                    # Build for production
npm run build:gh-pages          # Build for GitHub Pages

# Deploy
npm run deploy                   # Manual deployment

# Preview
npm run preview                  # Preview production build
```

## Support

If you encounter any issues:
1. Check the GitHub Actions logs
2. Verify all configuration files are correct
3. Ensure your repository name matches the base path

---

**Your site URL will be:**
`https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual values.

