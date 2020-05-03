#FROM serkin/php7-fpm-mongodb
#MAINTAINER gaillafr François Gaillard <gailla.fr@gmail.com>
#
## Install Python.
#RUN apt-get update && \
#    apt-get install -y \
#    python3 python3-numpy python3-nose python3-pandas \
#    python python-numpy python-nose python-pandas \
#    pep8 python-pip python3-pip python-wheel \
#    python-sphinx && \
#    pip install --upgrade setuptools
#
#RUN pip install textblob
#
#ENV QUEUE_CONNECTION=redis
#ENV QUEUE_NAME=default
#ENV QUEUE_TRIES=3
#
## Copy scripts
#COPY init.sh /usr/local/bin/init.sh
#
#VOLUME /var/www
#
## Run script
#ENTRYPOINT ["/bin/sh", "/usr/local/bin/init.sh"]

FROM php:7-alpine

RUN apk --update add wget \
    curl \
    git \
    build-base \
    libmemcached-dev \
    libmcrypt-dev \
    libxml2-dev \
    zlib-dev \
    autoconf \
    cyrus-sasl-dev \
    libgsasl-dev \
    python \
    python-dev \
    py-pip \
    build-base \
    supervisor


RUN docker-php-ext-install mysqli mbstring pdo pdo_mysql mcrypt tokenizer xml
RUN pecl channel-update pecl.php.net && pecl install memcached && docker-php-ext-enable memcached

RUN apk add --update --virtual build_deps bash gcc g++ autoconf make openssl-dev pcre-dev
RUN pecl install mongodb \
    && docker-php-ext-enable mongodb

RUN rm /var/cache/apk/* \
    && mkdir -p /var/www

COPY supervisord.conf /etc/supervisord.conf

ENTRYPOINT ["/usr/bin/supervisord", "-n", "-c",  "/etc/supervisord.conf"]