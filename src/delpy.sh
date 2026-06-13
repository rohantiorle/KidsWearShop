echo "pulloing changes from origin/main..."
git pull origin main
echo "changes pulled successfully." 
npm install
echo "dependencies installed successfully." 
npm run build
echo "build completed successfully."
echo "starting the server..."
 cp -r dist/* /var/www/html/
 systemctl restart nginx
echo "server restarted successfully. Your changes are now live!"
