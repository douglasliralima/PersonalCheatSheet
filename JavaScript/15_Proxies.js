// Proxies é uma classe que permite criar objetos com comportamentos customizados, mas que age igual
// qualquer outro objeto

//Objetos tem algumas terminologias comuns, são elas:
// Handlers - Funções que vão executar a partir das traps(Armandilhas em comportamentos base) do json
// target - Objeto que estamos manipulando o comportamento de suas funções

var handler = {
    // O get recebe uma função com o target e com o nome da propriedade
    get: function(target, prop) {
        //Aqui vamos retornar 42 sempre que tentarmos acessar um campo não presente no objeto
        return prop in target ? target[prop] : 42;
    }
};

var p;

p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;

console.log(p.a, p.b, p.c); // 1, undefined, 42

// Podemos fazer uma verificação de tipos com a trap set que é invocada na hora de atribuir algum valor
let validator = {
    set: function(target, prop, value) {
      if (prop === 'age') {
        if (!Number.isInteger(value)) {
          throw new TypeError('The age is not an integer');
        }
        if (value > 200) {
          throw new RangeError('The age seems invalid');
        }
      }
  
      //O comportamento padrão para armazenar o valor
      target[prop] = value;
  
      // Indique o sucesso
      return true;
    }
  };
  
  let person = new Proxy({}, validator);