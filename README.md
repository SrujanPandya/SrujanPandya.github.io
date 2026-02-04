# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

3. **Build for production:**
   ```bash
   npm run build
   ```

## 📦 Deployment to GitHub Pages

### Option 1: Using GitHub Actions (Recommended)

1. **Create a GitHub repository** (e.g., `portfolio-website`)

2. **Update the `base` path in `vite.config.js`** to match your repository name:
   ```javascript
   base: '/your-repo-name/',
   ```

3. **Create `.github/workflows/deploy.yml`** in your project:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       
       steps:
       - uses: actions/checkout@v3
       
       - name: Setup Node.js
         uses: actions/setup-node@v3
         with:
           node-version: '18'
           
       - name: Install dependencies
         run: npm install
         
       - name: Build
         run: npm run build
         
       - name: Deploy to GitHub Pages
         uses: peaceiris/actions-gh-pages@v3
         with:
           github_token: ${{ secrets.GITHUB_TOKEN }}
           publish_dir: ./dist
   ```

4. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
   git push -u origin main
   ```

5. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select `gh-pages` branch as source
   - Your site will be live at `https://YOUR_USERNAME.github.io/portfolio-website/`

### Option 2: Manual Deployment

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy using gh-pages:**
   ```bash
   npm run deploy
   ```

## 📁 Files to Upload to GitHub

Upload **ALL** of these files and folders to your GitHub repository:

```
portfolio-website/
├── .github/                 # GitHub Actions workflow (if using Option 1)
│   └── workflows/
│       └── deploy.yml
├── src/                     # Source code
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore              # Git ignore file
├── index.html              # HTML entry point
├── package.json            # Dependencies and scripts
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.js          # Vite configuration
└── README.md               # This file
```

**DO NOT upload:**
- `node_modules/` (dependencies - will be installed automatically)
- `dist/` (build output - generated during deployment)

## 🛠️ Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **gh-pages** - GitHub Pages deployment tool

## ✨ Features

- Responsive design
- Dark mode support
- Smooth animations
- SEO optimized
- Fast loading with Vite

## 📝 Customization

1. **Update personal information** in `src/App.jsx`:
   - Education history
   - Work experience
   - Projects
   - Research details
   - Contact links

2. **Change colors** in `tailwind.config.js`

3. **Modify fonts** in `index.html` (Google Fonts imports)

## 🐛 Troubleshooting

- **CSS not working?** Make sure `postcss.config.js` and `tailwind.config.js` are properly configured
- **Icons not showing?** Verify `lucide-react` is installed: `npm install lucide-react`
- **Build errors?** Clear cache and reinstall: `rm -rf node_modules package-lock.json && npm install`

## 📄 License

MIT License - feel free to use this template for your own portfolio!
