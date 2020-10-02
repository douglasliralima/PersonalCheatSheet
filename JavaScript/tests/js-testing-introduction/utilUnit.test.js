//Uma coisa importante é que o jest não dá suporte ao import usando es6, logo a gente precisa fazer assim ainda
const { generateText } = require('./util');

//O teste unitário é o mais fácil, apenas precisamos utilizar o test nativo do jest
test('should output name and age', () => {
    const text = generateText('Max', 29);
    //O jest nos dá um monte de callbacks para verificarmos se o nosso retorno está correto
    expect(text).toBe('Max (29 years old)');
    //Podemos ter mais de um teste em uma mesma função, para diminuir FP
    const text = generateText('Ana', 28);
    expect(text).toBe('Ana (28 years old)');
});

//temos sempre que ter cuidado com falsos positivos, por isos é bom dar casos mais esdruxulos para uma função
test("should output less-data text", () => {
    const text = generateText();
    expect(text).toBe('undefined (undefined years old)')
})