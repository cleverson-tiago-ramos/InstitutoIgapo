FROM php:8.4-cli

# Diretório da aplicação
WORKDIR /var/www

# Instalar dependências do sistema
RUN apt-get update && apt-get install -y \
    libpq-dev \
    zip \
    unzip \
    git \
    curl \
    && docker-php-ext-install pdo pdo_pgsql

# Copiar arquivos do projeto
COPY . .

# Instalar Composer
RUN curl -sS https://getcomposer.org/installer | php

# Instalar dependências do Laravel
RUN php composer.phar install --no-dev --optimize-autoloader

# (REMOVIDO artisan aqui ❌)

# Porta
EXPOSE 8000

# Start (AQUI SIM pode rodar artisan ✅)
CMD php artisan migrate --force && php artisan serve --host=0.0.0.0 --port=8000