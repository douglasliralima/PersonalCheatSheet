echo "Você pode checar o status de gasto de memória, inclusive quanto de dados estão passando entre o I/O com:";
docker stats;

echo "Podemos ver o custo direto no disco com esse comando, mas eu acho melhor o anterior";
docker system df;

echo "Podemos limpar o disco de todos os dados de docker, ele limpa TUDO, até os container pausados, então cuidado:";
docker system prune;

echo "Isso aqui limpa EVERYTHING, até as imagens, tudo"
docker system prune -a;

echo "Podemos também parar de executar o docker em nosso pc por completo>"
sudo service docker stop