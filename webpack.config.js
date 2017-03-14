module.exports = {
  devtool:'source-map',
  entry: {
    app: ['./src/index.js']
  },
  output: {
    path: __dirname + '/target/',
    filename: 'jar.js',
    publicPath:'target',

  },
  devServer: {
    contentBase:".",
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    inline: true,
    historyApiFallback: true,
    port: 8888,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-class-properties']
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"         
      }      
    ]
  }
}
