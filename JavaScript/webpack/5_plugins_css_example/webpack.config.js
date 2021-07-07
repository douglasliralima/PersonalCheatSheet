const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")


// Podemos definir plugins em nosso projeto, eles acessam hooks no processo de bundler e modificação o resultado final
// Vamos adicionar esse plugin de css que faz o bundler final com o css em arquivos separados do js final

// Nos definimos os nossos plugins em um array de plugins, no final do bundler

// Adicionamos um loader que vem junto ao plugin que será usado no lugar do style-loader

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
                use: [
                    { loader: MiniCssExtractPlugin.loader }, 'css-loader'
                ]
            },
        ],
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].css"
        }),
    ]
}