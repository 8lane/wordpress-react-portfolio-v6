const path = require('path');

const rootDir = './';
const appDir = rootDir + 'app/';

console.log(path.resolve(__dirname, 'app/dist'))

module.exports = {
  entry: path.resolve(__dirname, 'app/src/js/app.js'),
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'app/dist')
  }
};
