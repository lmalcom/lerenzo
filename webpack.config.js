var Webpack = require('webpack');
var BabelLoader = require('babel-loader'); 
var ImportsLoader = require('imports-loader'); 

var config = {

  // Makes sure errors in console map to the correct file
  // and line number
  cache: true, 
  //devtool: 'eval',
  entry: './src/js/main.js',
  output: {
    path: './src/js',
    filename: 'main-bundle.js'
  },
  module: {
    // postloaders:[
      
    // ],
    loaders: [
        {
            test: require.resolve("d3"),
            loader: "imports?this=>window"
        },
        {
            test: /\.js$/,
            loader: 'babel'
        },
        {
            test: /\.less$/,
            loader: "style!css!less"
        }, 
        {   
            test: /\.hbs$/, 
            loader: "handlebars-loader" 
        }     
    ]
  }, 
  plugins: []
};

module.exports = config;