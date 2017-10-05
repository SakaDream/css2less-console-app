var fs = require('fs'),
  css2less = require('css2less'),
  argv = process.argv.slice(2),
  input = argv[0],
  output = argv[1],
  options = {},
  cssString= fs.readFileSync(input,'utf8');

cssString = cssString.replace('/\r?\n|\r/g', ' ');

var lessString = css2less(cssString, options);

fs.writeFile(output, lessString, function (err) {
  if (err) {
    return console.log(err);
  }

  console.log("The file was saved!");
}); 
