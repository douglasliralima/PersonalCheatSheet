# Temos 3 principais comandos aqui, FROM, RUN e CMD

# O FROM vai pegar uma imagem que já existe para ser a nossa base de construção
# Caso queira do 0 absoluto, use o FROM SCRATCH, que ele vai pegar uma imagem vazia, sem nada
FROM ubuntu

#O comando RUN executa um comando daquela imagem, por exemplo:
RUN apt-get update

#O comando CMD é como se ele executasse algo no command line da imagem, no caso do ubuntu
#É o nosso bom e velho bash
CMD ["echo", "hello world!"]

#A diferença entre o cmd e o run é que o run é executado durante a construção da imagem, já
#o CMD é executado quando rodamos a imagem em um container