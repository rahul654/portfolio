npm install gh-pages --save-dev


package.json changes
-->
"homepage": "https://github.com/rahul654/portfolio",

-->script
"predeploy": "npm run build",
"deploy": "gh-pages -d build"



git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/rahul654/portfolio.git
git push -u origin main



npm run deploy



Enable GitHub Pages 
Go to your GitHub repository.
Navigate to Settings --> Pages.
Under Branch, select gh-pages and save.