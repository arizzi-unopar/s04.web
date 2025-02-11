# Use the smallest PHP image with Apache
FROM php:8.1-apache

# Copy project files to the Apache web root
COPY . /var/www/html

# Set permissions for the web root
RUN chown -R www-data:www-data /var/www/html

# Enable Apache mod_rewrite (optional if needed later)
RUN a2enmod rewrite
