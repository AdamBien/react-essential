module.exports = {
  devtool:'source-map',
  entry: {
    app: ['./src/index.js']
  },
  output: {
    path: './target/',
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
    watch: true,
    port: 8888,
    progress:true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
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
