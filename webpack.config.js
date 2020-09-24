<<<<<<< HEAD
const path = require("path");

module.exports = {
  entry: { index: path.resolve(__dirname, "js", "main.js") },
  output: {
    path: path.resolve(__dirname, "build")
  }
};
=======

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


 }
>>>>>>> 89bf6221eb36ab2cbbb91c477745724cbb0ada62
