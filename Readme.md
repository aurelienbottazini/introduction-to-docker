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

  + `cd hello_world_demo`
  + Build your image and name it *hello_world_image* `docker build -t hello_world_image .`
  + Run it `docker run -p 3000:3000 -v $(pwd):/my_app hello_world_image node /my_app/index.js`

# db_demo

  Taking avantage of docker-compose for cleaner/shorter commands

  + `cd db_demo`
  + `docker-compose build`
  + `docker-compose up`

# Cleanup

* Delete all docker containers

  `docker rm $(docker ps -a -q)`

* Delete all docker images

  `docker rmi $(docker images -q)`

# Storage backend

+ AUFS: recommended one. However was never accepted in main linux kernel so alternatives are appearing.
+ DeviceMapper: default one on centos before centos7. Perfomance is reasonable but is reasonable but not _speedy_ when using the loopback mode (default)
+ BTRFS: a copy on write filesystem so good fit  for docker image model. Pretty stable in production and good performer.
+ VFS: simple and slow. Does not support copy-on-write. Intead it makes a new directory and copies over all existing data. Not recommended by docker in production and fill up your disk space really quickly
+ overlayfs: supported in the mainline linux kernel as of version 3.18. Very good performance, active development. This is the *future*.

 So as of today for me. AUFS > BTRFS > Overlayfs.


# What docker is not

+ Virtual Machine (VMware)
  Containers share the kernel.
  Containers use less ressource but must be based on the same underlying OS (linux for docker)
+ Cloud platform (cloudstack)
  Docker handles deployment and management of containers on docker hosts. It can't create a new docker host system automatically.
+ Configuration management (Puppet)
  Docker simplify the process (dependencies) but does not replace a more complete tool like Puppet or Chef. Docker can't manage the docker host system.
+ Deployment framework (capistrano)
  A container encapsulate all dependencies but can't automate a complex deployment process
+ Dev env (Vagrant, otto)
  boot2docker and docker machine are good for most workflows. But things like vagrant give much more features.


This being said. Using docker *with* those tools will simplify and add robustness to your environment.
