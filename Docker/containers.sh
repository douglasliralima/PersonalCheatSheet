echo "\n\nEsse é o comando que nos faz visualizar os containers que estão rodando\n";
docker ps;

echo "\n\nNos permite ver todos os containers, mesmo os que não estão rodando:\n"
docker ps -a;

echo "como sempre, se quiser ver mais opções, use:"
docker ps --help;

echo "Se quisermos criar algum container, alocamos a ela um container e depois a executamos com:";
docker run hello-world; # Se você não tiver a imagem local, ele vai buscar em docker-hub

echo "Esse comando no entanto, aloca o container, dá o run e para, se quisermos que ele fique";
echo "executando, realizamos o comando -it"
# docker run -it ubuntu;

echo "Se quisermos apenas alocar o container, mas executa-lo em outro momento fazemos"
docker run -it -d ubuntu; #Assim ele entra no modo detachado, que é como se fosse em stand by

echo "Podemos então executa-lo depois com:";
# docker exec -it [nome container] bash

echo "Para parar qualquer container em execução, usamos o comando";
# docker stop [id do container]

echo "Caso um container seja parado, para reinicializa-lo, usamos:"
# docker start [nome container] #Ele já entra em modo detachado