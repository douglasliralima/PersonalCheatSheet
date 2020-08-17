const express = require('express');

const server = express();

server.use(express.json());

/**
 * A variável `pessoas` pode ser `const` porque um `array`
 * pode receber adições ou exclusões mesmo sendo uma constante.
 */
const pessoas = [];

/**
 * Route Params: nome
 * pega todos que estiverem salvos 
 */
server.get('/pessoas/', (req, res) => {

  return res.send(pessoas);
})


/**
 * Route params: nome;
 * Adiciona uma nova tarefa no projeto escolhido via nome; 
 */
server.post('/pessoas/', (req, res) => {
  const { name } = req.body;
  console.log(req.body);

  pessoas.push(name);


  return res.status(200).send(`Usuario ${name} cadastrado:\n${pessoas}`);
});

/**
 * Route params: nome
 * Request body: title
 * Altera o título do projeto com o nome presente nos parâmetros da rota.
 */
server.put('/pessoas/:id', (req, res) => {
  const { id } = req.params;
  const { pessoa } = req.body;

  pessoas[id] = pessoa;
  ;
  return res.status(200).send(`Usuario ${pessoa.nome} atualizado:\n${pessoas}`);
});

/**
 * Route params: nome
 * Deleta o projeto associado ao nome presente nos parâmetros da rota.
 */
server.delete('/pessoas/:name', (req, res) => {
  const { name } = req.params;

  const pessoaIndex = pessoas.findIndex(p => p == name);

  //O splite recorta o numero de itens do segundo paramatro a partir de um index no primeiro parametro
  pessoas.splice(pessoaIndex, 1);

  return res.status(200).send(`Usuario ${nome} removido:\n${pessoas}`);
});

server.listen(3001);
