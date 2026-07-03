server {
    server_name dev.agungaryansyah.com;

    root /var/www/dev.agungaryansyah.com;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
