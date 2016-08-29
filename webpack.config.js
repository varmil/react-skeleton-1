module.exports = [
  {
    name: 'client',
    entry: __dirname + "/src/js/index.js",
    output: {
      path: __dirname + '/public/',
      filename: 'app.bundle.js',
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
          loader: 'style!css?modules',
        }
      ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    }
  }
];
