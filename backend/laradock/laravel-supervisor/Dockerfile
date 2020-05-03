FROM serkin/php7-fpm-mongodb

## Install APP
#COPY requirements.txt .
#RUN pip install -r requirements.txt
#COPY . /app
#WORKDIR /app

# Install Cron
RUN apt-get update && apt-get install -y cron

# Setup Cron
RUN touch /var/log/cron.log
RUN echo '* * * * * root env - php /var/www/artisan schedule:run >> /var/log/cron.log 2>&1' > /etc/cron.d/my-cron
RUN echo '' >> /etc/cron.d/my-cron
RUN chmod 0644 /etc/cron.d/my-cron

# Configure Supervisord
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

CMD env > /docker-env && /usr/bin/supervisord
