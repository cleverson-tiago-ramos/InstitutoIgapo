#!/bin/sh

echo "Aguardando banco..."

sleep 5

php artisan migrate

php-fpm