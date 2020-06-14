echo "Para executar um dockerfile, basta executar o comando:"
# docker build .

# Caso ele esteja em outra pasta é só passar o caminho de onde o dockerfile está

echo "Podemos inclusive na hora de buildar esse dockerfile, dar um nome e uma tag para ele"
docker build -t myImage1:1.0 .

# Você pode achar a documetnação melhor aqui: https://github.com/wsargent/docker-cheat-sheet#dockerfile
