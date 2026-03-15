# Setup React App

1. Open the project folder
2. Create Vite: `npm create vite@latest frontend`
   - Framework: React
   - Variant: TypeScript
   - Install with npm and start now
     - `npm install`
     - `npm run dev`
3. Install Prettier: `npm install prettier --save-dev`
   - Check that VSCode extention is installed
   - Create: `.prettierrc.json`
   - Update Prettier settings:
   ```json
   {
     "semi": true,
     "singleQuote": true,
     "jsxSingleQuote": false,
     "trailingComma": "es5",
     "printWidth": 80,
     "tabWidth": 2,
     "endOfLine": "auto"
   }
   ```

   - Run: `npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier`

## Publish to GitHub

1. Initialize the repo locally:
   - `git init`
   - `git add .`
   - `git commit -m "Initial commit"`
2. Create a new repo on GitHub:
   - Go to github.com → New repository
   - Name it whatever you want (doesn't have to match your local folder name)
   - Leave it empty (no README, .gitignore, or license)
3. Connect and push:
   - `git remote add origin https://github.com/your-username/your-repo-name.git`
   - `git branch -M main`
   - `git push -u origin main`
