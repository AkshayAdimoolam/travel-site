const path = require('path');
const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
]

module.exports = {
    entry: './app/assets/scripts/App.js',
    output: {
        filename: 'bundles.js',
        path: path.resolve(__dirname, 'app')
    },
    devServer: {
        contentBase: path.join(__dirname, 'app'),
        hot: true,
        port: 3000,
        host: '0.0.0.0',
        before: function(app, server) {
            server._watch('./app/**/*.html')
        },
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', {loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                        {loader: 'file-loader',},
                ],
            }
        ]
    }
}