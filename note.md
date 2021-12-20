version: "3.7"
services:
  db:
    image: mongo:latest
    ports:
        - 27017:27017

  server:
    build:
      context: ./
      dockerfile: Dockerfile
    ports:
      - '5000:5000'
    links:
      - db
    restart: on-failure



docker run -d -p 27888:27017 mongo