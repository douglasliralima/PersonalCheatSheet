const path = require('path')


// Por default, o webpack considera como ponto de entrada (entry point) o arquivo src/index.js e como arquivo de saída (output) dist/main.js

// Entry - É o nosso ponto de entrada.

// Output - Onde o webpack vai salvar o bundle gerado. 
// Esta configuração pede o caminho da pasta (path) e o nome do arquivo (filename) separados.
// O caminho da pasta deve ser absoluto, por isso usamos a função path.resolve do Node para gerar um caminho absoluto a partir de um relativo.

module.exports = {
    resolve: {
        fallback : {
            "path": require.resolve("path-browserify"),
            "os": require.resolve("os-browserify/browser")
        }
    },
    entry: './src/index.js',

    output: {
        path: path.resolve('dist'),
        filename: 'main.js',
    },
}

