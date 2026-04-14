FROM php:8.4-cli

WORKDIR /var/www

RUN apt-get update && apt-get install -y \
    libpq-dev zip unzip git curl \
    && docker-php-ext-install pdo pdo_pgsql

COPY . .

# instalar composer
RUN curl -sS https://getcomposer.org/installer | php
RUN php composer.phar install

# limpar cache
RUN php artisan config:clear

CMD php artisan serve --host=0.0.0.0 --port=8000