# Git Reference Guide for Portfolio Website

## Quick Start Commands

### Daily Workflow
```powershell
# 1. Navigate to your project
cd C:\Users\sruja\Downloads\portfolio-website

# 2. Check what changed
git status

# 3. Add changes
git add .                    # Add all files
git add index.html          # Add specific file

# 4. Commit with message
git commit -m "Brief description of changes"

# 5. Push to GitHub
git push
```

---

## Essential Git Commands

### Checking Status
| Command | Description |
|---------|-------------|
| `git status` | See which files have changed |
| `git log --oneline` | View commit history (brief) |
| `git log` | View detailed commit history |
| `git diff` | See unstaged changes |
| `git diff --staged` | See staged changes |

### Making Changes
| Command | Description |
|---------|-------------|
| `git add .` | Stage all changes |
| `git add filename` | Stage specific file |
| `git add *.html` | Stage all HTML files |
| `git commit -m "message"` | Commit staged changes |
| `git commit -am "message"` | Stage and commit (tracked files only) |

### Syncing with GitHub
| Command | Description |
|---------|-------------|
| `git push` | Upload commits to GitHub |
| `git pull` | Download and merge changes from GitHub |
| `git fetch` | Download changes without merging |

### Undoing Changes
| Command | Description |
|---------|-------------|
| `git checkout -- filename` | Discard changes to file (before staging) |
| `git reset HEAD filename` | Unstage a file |
| `git reset --soft HEAD~1` | Undo last commit (keep changes) |
| `git reset --hard HEAD~1` | ⚠️ Undo last commit (DELETE changes) |

### Branches
| Command | Description |
|---------|-------------|
| `git branch` | List all branches |
| `git branch feature-name` | Create new branch |
| `git checkout branch-name` | Switch to branch |
| `git checkout -b new-branch` | Create and switch to branch |
| `git merge branch-name` | Merge branch into current branch |
| `git branch -d branch-name` | Delete branch |

### Repository Info
| Command | Description |
|---------|-------------|
| `git remote -v` | Show remote repository URL |
| `git config --list` | Show configuration |
| `git config user.name` | Show your configured name |
| `git config user.email` | Show your configured email |

---

## Common Scenarios

### Scenario 1: Update a file and push to GitHub
```powershell
# Edit your files (e.g., index.html, App.jsx)
git status                           # See what changed
git add .                            # Stage all changes
git commit -m "Update homepage hero section"
git push                             # Push to GitHub
```

### Scenario 2: Pull latest changes from GitHub
```powershell
git pull                             # Download and merge changes
```

### Scenario 3: Accidentally staged wrong files
```powershell
git reset HEAD filename              # Unstage specific file
git reset HEAD .                     # Unstage everything
```

### Scenario 4: Made a mistake in last commit message
```powershell
git commit --amend -m "Corrected commit message"
git push --force                     # ⚠️ Only if not pushed yet
```

### Scenario 5: Discard all local changes
```powershell
git checkout -- .                    # ⚠️ Discards all unstaged changes
```

### Scenario 6: See what changed in a specific file
```powershell
git diff index.html                  # See unstaged changes
git diff --staged index.html         # See staged changes
```

---

## .gitignore Guide

Your `.gitignore` file tells Git which files to ignore. Common entries for your project:

```gitignore
# Dependencies
node_modules/
package-lock.json

# Build outputs
dist/
build/
*.log

# Environment variables
.env
.env.local

# OS files
.DS_Store
Thumbs.db

# IDE files
.vscode/
.idea/
*.swp
```

---

## Git Configuration

### View current configuration
```powershell
git config --list
```

### Update your information
```powershell
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Set default branch name
```powershell
git config --global init.defaultBranch main
```

### Set default editor
```powershell
git config --global core.editor "code --wait"  # VS Code
git config --global core.editor "notepad"      # Notepad
```

---

## GitHub Authentication

### Using Personal Access Token (PAT)
1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token → Select `repo` scope
3. Copy the token
4. Use token as password when Git prompts for credentials

### Cache credentials (avoid re-entering)
```powershell
git config --global credential.helper manager-core
```

---

## Troubleshooting

### Problem: "failed to push some refs"
**Solution:**
```powershell
git pull origin main --allow-unrelated-histories
git push
```

### Problem: Merge conflict
**Solution:**
1. Git will mark conflicts in files with `<<<<<<<`, `=======`, `>>>>>>>`
2. Open the file and manually resolve conflicts
3. Remove the conflict markers
4. Stage and commit:
```powershell
git add .
git commit -m "Resolve merge conflict"
git push
```

### Problem: Accidentally committed to wrong branch
**Solution:**
```powershell
git log                              # Find commit hash
git checkout correct-branch
git cherry-pick <commit-hash>        # Apply commit to correct branch
git checkout wrong-branch
git reset --hard HEAD~1              # Remove commit from wrong branch
```

### Problem: Want to undo everything and start fresh
**Solution:**
```powershell
git fetch origin
git reset --hard origin/main         # ⚠️ Deletes all local changes
```

---

## Best Practices

### Commit Messages
- ✅ **Good**: "Add contact form validation"
- ✅ **Good**: "Fix navigation menu mobile responsiveness"
- ✅ **Good**: "Update hero section background image"
- ❌ **Bad**: "updates"
- ❌ **Bad**: "fixed stuff"
- ❌ **Bad**: "asdf"

### Commit Frequency
- Commit often (after each logical change)
- Don't wait until end of day to commit everything
- Each commit should represent one logical change

### Before Pushing
1. Run `git status` to see what you're committing
2. Review your changes with `git diff`
3. Test your code locally
4. Write a clear commit message

---

## GitHub Pages Deployment

Your repository (`SrujanPandya.github.io`) is a GitHub Pages site!

### Website URL
Your live site will be at: **https://srujanpandya.github.io**

### Deployment
- Every time you push to `main` branch, GitHub automatically deploys
- Changes appear live within 1-2 minutes
- Check workflow in GitHub → Actions tab

---

## Quick Reference Chart

```
Working Directory → Staging Area → Local Repository → Remote Repository
    (modify)          (git add)      (git commit)        (git push)
                    
                    ← (git checkout) ← (git reset) ← (git pull)
```

---

## Need Help?

- **Git Documentation**: https://git-scm.com/doc
- **GitHub Guides**: https://guides.github.com
- **Check your repo on GitHub**: https://github.com/SrujanPandya/SrujanPandya.github.io

---

**Created:** 2026-02-04  
**For:** Portfolio Website Project  
**Location:** `C:\Users\sruja\Downloads\portfolio-website\GIT_GUIDE.md`
