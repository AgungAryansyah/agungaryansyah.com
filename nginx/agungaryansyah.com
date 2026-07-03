server {
    server_name agungaryansyah.com www.agungaryansyah.com;

    root /var/www/agungaryansyah.com;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    listen 443 ssl;
    ssl_certificate /etc/letsencrypt/live/agungaryansyah.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/agungaryansyah.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
}

server {
    if ($host = www.agungaryansyah.com) {
        return 301 https://$host$request_uri;
    }

    if ($host = agungaryansyah.com) {
        return 301 https://$host$request_uri;
    }

    listen 80;
    server_name agungaryansyah.com www.agungaryansyah.com;
    return 404;
}
