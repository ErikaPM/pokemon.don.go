const path = require('path'); //Nos permite acceder a donde estámos en las carpetas. Ya sea en local o en la nube.
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/index.js', //Punto de entrada 
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js' //Donde se envía el proyecto estructurado y compilado listo para producción.
  },
  resolve: {
    extensions: ['.js'], //Extensiones que vamos a utilizar.
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', //Utilizar un loader como configuración establecida.
        }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        inject: true,
        template: './public/index.html', //Dirección donde se encuentra el template principal
        filename: './index.html',
      }
    ),
    new MiniCssExtractPlugin({ filename: 'assets/[name].css' })
  ]
}