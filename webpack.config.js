var path = require('path')

module.exports = {
  context: __dirname + '/app',
  entry: {
    javascript: './index.js',
    html: './index.html',
  },

  output: {
    filename: 'app.js',
    path: __dirname + '/dist',
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015'],
      include: path.join(__dirname, 'app')
    },{
      test: /\.html$/,
      loader: 'file?name=[name].[ext]',
    }]
  }
}
