const { checkAndGenerate } = require('./util');

//Veja que aqui estamos testando uma função que é fruto de outras duas funções
//O interessante aqui é que estamos validando essas funções no utilUnit, logo se eles passaram lá
//Eles não serão o resultado de algum erro no output da testagem da função abaixo
test('should generate a valid text output', () => {
  const text = checkAndGenerate('Max', 29);
  expect(text).toBe('Max (29 years old)')
});
