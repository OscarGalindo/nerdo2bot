var webpack = require('webpack');

module.exports = {
    entry: './src/app.ts',
    target: 'node',
    devtool: 'sourcemap',
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js', '.node']
    },
    module: {
        exprContextRegExp: /$^/,
        exprContextCritical: false,
        noParse: /node_modules\/json-schema\/lib\/validate\.js/,
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                query: {
                    'ignoreDiagnostics': [
                        2403, // 2403 -> Subsequent variable declarations
                        2300, // 2300 -> Duplicate identifier
                        2374, // 2374 -> Duplicate number index signature
                        2375, // 2375 -> Duplicate string index signature
                        2502  // 2502 -> Referenced directly or indirectly
                    ]
                }
            },
            {test: /\.node$/, loader: 'node-loader'},
            {test: /\.json(\?.*)?$/, loader: "json-loader"}
        ]
    },
    plugins: [
        new webpack.NormalModuleReplacementPlugin(/\/iconv-loader$/, 'node-noop'),
        new webpack.IgnorePlugin(/\/iconv/)
    ]
};
