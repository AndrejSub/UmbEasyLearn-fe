# Step 1: Use an official nginx image as the base
FROM nginx

COPY nginx.conf /etc/nginx/conf.d/default.conf
# Step 2: Copy the built Angular app from the dist folder to nginx's html folder
COPY ./dist/easy-learn-fe/browser /usr/share/nginx/html

# Step 3: Expose port 80
EXPOSE 80

# Step 4: Start nginx server
CMD ["nginx", "-g", "daemon off;"]
