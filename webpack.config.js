var path = require('path');
var webpack = require('webpack');
// const globals = [
//     path.resolve('./node_modules/react-weui/build/dist/react-weui.css'), // any NPM module
// ];

// const cssModules = [
//     path.resolve('./layout'), // CSS modules
// ];
module.exports = {
    devtool: "source-map",
    entry: './app.js',
    // entry:{
    //     app:'./app.js',
    // },
    output: {
        filename: 'bundle.js',
        // filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            // {
            //     test: /\.css$/,
            //     use: [
            //         'style-loader',
            //         'css-loader',
            //     ]
            // },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[path][name]__[local]--[hash:base64:5]',
                            // getLocalIdent: (context, localIdentName, localName, options) => {
                            //     console.log("context",options)
                            //     if (localName.indexOf('weui') >= 0) {
                            //         console.log("weui",localName);
                            //         return localName;
                            //     } else {
                            //         console.log("not",localName)
                            //         return '[path][name]__[local]--[hash:base64:5]';
                            //     }
                            // }
                            // includePaths: [
                            //    cssModules
                            // ]
                        }
                    }]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                // use: [
                //     'file-loader'//加载图片
                // ]
                use: "file-loader?name=[name].[ext]&outputPath=dist/images/"//将图片打包到单独的文件夹
                // use: "file-loader?name=[name].[ext]&publicPath=assets/foo/&outputPath=dist/images/"//将图片打包到单独的文件夹,publicPath没打包之前所有图片放的位置
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {

                    loader: 'babel-loader',
                    // exclude: /(node_modules|bower_components)/,
                    options: {
                        presets: ['env', 'es2015', 'react', 'stage-0'],
                        plugins: [
                            
                            ["import", { libraryName: "weui", style: "css" }]
                            ]
                    }
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    devServer: {
        port: "9019",
        host: "192.168.0.25",
        contentBase: "./dist",
        historyApiFallback: true, //不跳转
        inline: true //实时刷新
    }
}