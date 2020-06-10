echo "Esse comando mostra as versões do cli e do daemon instalados na máquina para lidar com docker\n";
docker version;

echo "Esse comando é de fato para ver a versão do docker em si que está instalada na máquina\n";
docker -v;
# Também pode usar o comando docker --version, dá no mesmo

echo "Esse comando é muito bom, ele te dá um resumo de como está o seu ambiente docker";
echo "fala quantos containers, rodando, pausados ou paradas, por exemplo";
docker info;

echo "Esse é o comando de help padrão";
docker help;