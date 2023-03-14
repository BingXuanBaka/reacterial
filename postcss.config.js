module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-nested'),
        require('postcss-css-variables')({
            preserve:false
        })
    ]
}