const path = require("path");

module.exports = {
  entry: { index: path.resolve(__dirname, "js", "main.js") },
  output: {
    path: path.resolve(__dirname, "build")
  }
};