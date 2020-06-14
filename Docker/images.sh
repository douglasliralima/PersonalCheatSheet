echo "Podemos puxar uma imagem do pronta do dockerhub para a nossa máquina com o comando:";
docker pull hello-world;
 # docker pull <image-name:tag> para alguma versão especifica de imagem

echo "Esse é o comando que permite nos visualizarmos as nossas imagens\n";
docker images;

echo "Com o q ela nos dá apenas o id das imagens"
docker images -q;

echo "Esse retorna tooodas as imagens, até alguma oculta\n";
docker images -a;

echo "Você pode rever qualquer opção do docker com:";
docker images --help;

echo "Para remover alguma imagem, usamos o comando:";
docker rmi $(docker images -q); # Esse $(docker images -q) vai trazer a lista de todos os ids, você só precisa passar 1 se quiser deletar uma imagem especifica