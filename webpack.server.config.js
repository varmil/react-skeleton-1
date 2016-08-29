var nodeExternals = require('webpack-node-externals');

module.exports = {
    name: 'server',
    entry: __dirname + "/src/js/server.js",
    target: 'node',
    externals: [nodeExternals()],
    output: {
      path: __dirname,
      filename: 'server.bundle.js',
    },
    node: {
      __filename: true,
      __dirname: true
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query:{
            presets: ['es2015', 'react']
          }
        },
        {
          test: /\.json$/,
          loader: 'json-loader',
        },
        {
          test: /\.css$/,
          loader: 'css/locals?modules',
        }
      ]

    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
}
