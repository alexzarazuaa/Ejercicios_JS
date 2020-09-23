
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './js/main.js',
    output: {
        path: path.resolve(__dirname, "dist"),
       filename: 'bundle.js'
    },
   devServer: {
     host: '0.0.0.0',
     port: 3000,
     inline: true
   },
//    module: {
//     loaders: [
//        { 
//           test: /\.css$/, 
//           loader: 'style!css' 
//        }
//     ]
//  }

 }