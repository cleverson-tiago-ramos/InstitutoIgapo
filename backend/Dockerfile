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

# Limpar cache (boa prática)
RUN php artisan config:clear && php artisan cache:clear

# Expor porta (opcional, Railway ignora mas é boa prática)
EXPOSE 8000

# Comando de inicialização (IMPORTANTE)
CMD sh -c "php artisan migrate --force && php artisan serve --host=0.0.0.0 --port=$PORT"