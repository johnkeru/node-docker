<!-- RUN IMAGE FOR -->

docker run -d --network server-network --name mongodb -e MONGO_INITDB_ROOT_USERNAME=keru -e MONGO_INITDB_ROOT_PASSWORD=keru -p 27017:27017 mongo

<!-- RUN IMAGE FOR MONGO-EXPRESS -->

docker run --network server-network -p 8081:8081 --name mongoexpress -e ME_CONFIG_MONGODB_SERVER=mongodb -e ME_CONFIG_MONGODB_ADMINUSERNAME=keru -e ME_CONFIG_MONGODB_ADMINPASSWORD=keru -d mongo-express
