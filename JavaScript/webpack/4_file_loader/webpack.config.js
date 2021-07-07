const path = require('path')


// A ordem que repassamos dos loaders é a ordem em que eles são executados, da direita para a esquerda, devido a isso chamamos primeiro o loader
// de sass e depois o de css e por fim o de style 

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
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg)$/,
                use: 'file-loader'
            }
        ],
    },
}