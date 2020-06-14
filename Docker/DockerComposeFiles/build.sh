#Importante sempre estar na raiz para esses comandos

echo "Para checar se o seu docker-compose está certinho, use o comando:";
docker-compose config;

echo "Para executar o seu docker compose, só usar o comando:";
docker-compose up -d;

# docker-compose up -d --scale database=4 caso quisessemos criar 4 containers para o service database

echo "Para dar o kill nesse compose, só usar o comando:";
docker-compose down;
