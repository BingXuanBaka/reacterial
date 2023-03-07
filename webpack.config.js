const path = require('path')

module.exports = {
    entry : "./src/index.ts",

    output : {
        path : path.resolve(__dirname,"dist"),
        filename:"index.js"
    },

    module:{
        rules : [
            {
                test : /\.ts$/,
                use:['ts-loader'],
                exclude: /node_modules/
            },
            {
                test : /\.tsx$/,
                use:['ts-loader'],
                exclude: /node_modules/
            }
        ]
    },

    resolve:{
        "extensions" : [".ts",".tsx",".js",".json"]
    },

    mode: "development"
}