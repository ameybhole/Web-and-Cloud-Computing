The respository contains code for the course project "Web and cloud computing"

# Back-end

# Setup server
go to Backend/laradock folder
1. docker-compose build

# Start Server
go to Backend/laradock folder
1. docker-compose up -d mongodb-primary mongodb-secondary 
2. docker-compose up -d --scale nginx=3 --scale apache2=3 --scale php-fpm=3 --scale workspace=3 --scale mongodb-secondary=2

# Enable Hyper-V 

	docker volume create --name=mongodata


	# Start Server
	go to Backend/laradock folder
	1. docker-compose up -d mongodb-primary mongodb-secondary 
	2. docker-compose up -d --scale nginx=3 --scale apache2=3 --scale php-fpm=3 --scale workspace=3 --scale mongodb-secondary=2 --scale queue-default=2 --scale queue-sentiment=2
	
# Front-end

	# Install dependencies using NPM
	go to Front-end folder
	npm install
	
	# Run program
	ng serve
