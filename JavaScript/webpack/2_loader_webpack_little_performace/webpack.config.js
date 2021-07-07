const path = require('path')


// Por default o webpack apenas faz o bundle com JS, logo precisamos de loaders para uma etapa intermediária de compilação para transformar em
// js tudo aquilo que esteja fora do padrão

// Isso inclui arquivos acima do ES5,que é o formato js padrão usado pelos navegadores, para isso vamos usar o babel para transpilar o nosso
// arquivo

// Dentro do modules nos passamos as informações dos arquivos que caso sejam testados em um match positivo pela regex passada, serão transpilados
// Pelo babel-loader em JS simples, antes do webpack executar

// Podemos excluir certos arquivos para isso não ficar lendo

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

    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader : 'babel-loader',
                options: {
                    cacheDirectory: true
                  }
            }
          },
        ],
      },
}