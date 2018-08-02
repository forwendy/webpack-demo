const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    //配置webpack开发服务功能
    devServer: {
        host: 'localhost',
        port: 9000,
        //服务器代理配置项
        proxy: {
            '/help':{
                target:'http://10.153.29.39:9036',
                secure:true,
                changeOrigin:true
                /*
                //不显示/help
                pathRewrite: {
                    '^/help': ''
                }
                */
            }
        }
    }
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }, {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            }, {
                test: /\.(csv|tsv)$/,
                use: ['csv-loader']
            }, {
                test: /\.xml$/,
                use: ['xml-loader']
            }
        ]
    }
};
