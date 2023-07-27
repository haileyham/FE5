const path = require('path');


module.exports = {
    target: 'node',

    entry: path.resolve('./src/client.js'),

    output: {
        filename: 'bundle.js',
        path: path.resolve('./public') //public으로 옮겨준다
    },

    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', { target: { browsers: ['last 2 versions'] } }]
                    ]
                }
            }
        ]
    }
}