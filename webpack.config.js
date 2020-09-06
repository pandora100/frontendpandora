module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
           plugins: [require('babel-plugin-transform-object-rest-spread')]
        },
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
            test: /\.css$/
          },
          {
            loader: "css-loader",
            test: /\.css$/
             
          },
          {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              query: {
                name:'assets/[name].[ext]'
              }
            }
          },
          {
            loader: 'image-webpack-loader',
            
            }   
          }
        ]
      }
    ]
  }
};
