const path = require('path')


// css-loader, lê o conteúdo do CSS guarda em uma variável dentro do JS (como string). Isso é o suficiente para o webpack aceitar um import de 
// CSS

// style-loader, que pega a saída do primeiro e cria um script que injeta o CSS dinamicamente na página, usando tags <style> no header.


module.exports = {
    resolve: {
        fallback: {
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
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
        ],
    },
}