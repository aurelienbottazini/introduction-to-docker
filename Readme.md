# Install

  + Linux: install [Docker](https://docs.docker.com/linux/step_one/) then [docker-compose](https://docs.docker.com/compose/install/)
  + [Mac](https://docs.docker.com/mac/step_one/)
  + [Windows](https://docs.docker.com/windows/step_one/)

# Commands

* Download a docker image with `docker pull`

  Ex:
  + `docker pull haskell`
  + `docker pull node`

* Run a docker container `docker run`

  Ex:
  + `docker run -it haskell`
  + `docker run -it node`

* List running containers `docker ps`

* Kill a container `docker kill container_id`. You get the container id with `docker ps`

* Get help on a command `docker command --help`

  Ex:
  + `docker pull --help`
  + `docker run --help`

# hello_world_demo 

  Using only docker

  + Build your image `docker build -t hello_world_image .`
  + Run it `docker run -p 3000:3000 -v $(pwd):/my_app hello_world node /my_app/index.js`  

# db_demo

  Taking advantage of docker-compose for cleaner/shorter commands

  + `docker-compose build`
  + `docker-compose up`

# Cleanup

* Delete all docker containers

  `docker rm $(docker ps -a -q)`

* Delete all docker images

  `docker rmi $(docker images -q)`

