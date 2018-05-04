const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlPlugin({
    template: "./src/index.html",
    filename: "./index.html"
})
module.exports = {
    entry: "./src/index.jsx",
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "bundle.js",
    },
    resolve:{
        extensions:['.js','.jsx']
    },
    module: {
        rules: [{
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        htmlPlugin
    ]
}