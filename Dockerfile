FROM php:8.1.0-fpm-alpine

LABEL Maintainer="HakamRaza <ismatcd@yahoo.com>"
LABEL Description="Alpine PHP 8.1 Nginx for Laravel"

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime \
    && echo $TZ > /etc/timezone

RUN apk add --no-cache \
        zip \
        unzip \
        libzip-dev \
        libpng \
        libpng-dev \
        libjpeg \
        icu \
        icu-dev \
        libxml2 \
        libxml2-dev \
        oniguruma-dev \
        curl-dev \
        supervisor \
        nginx \
    && docker-php-ext-install mbstring \
        pdo_mysql \
        mysqli \
        gd \
        intl \
        xml \
        opcache \
        pcntl \
        bcmath \
        # imagick \
        # xdebug \
        curl \
        zip \
	&& curl -sLS https://getcomposer.org/installer | php -- --install-dir=/usr/bin/ --filename=composer \
	&& rm -rf /tmp/* /var/tmp/*

ENV COMPOSER_ALLOW_SUPERUSER=1

# Set project directory
WORKDIR /var/www/app

# Configure application
COPY . .

# Configure supervisord

RUN mkdir -p /etc/supervisor/conf.d \
    && mv ./.docker/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Configure nginx
RUN mv ./.docker/nginx/nginx.conf /etc/nginx/nginx.conf
RUN mkdir -p /etc/nginx/conf.d \
    && mv ./.docker/nginx/default.conf /etc/nginx/conf.d/default.conf

# Configure php
RUN mv ./.docker/php/php.ini /usr/local/etc/php/php.ini
RUN mv ./.docker/php/www.conf /usr/local/etc/php-fpm.d/app.conf

RUN composer install --no-interaction \
    && chown -R :www-data /var/www/app \
    && chmod -R 775 /var/www/app/storage /var/www/app/bootstrap/cache \
    && php artisan key:generate \
    && php artisan optimize \
    && php artisan route:cache \
    && php artisan config:cache
    && apk add --update nodejs npm \
    && npm install \
    && npm run build

EXPOSE 8000

CMD ["supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]

