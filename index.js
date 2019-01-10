#!/usr/bin/env node

var fs = require('fs');
var file = process.argv.pop();

fs.readFile(file, function (err, data) {
  if (err) {
    console.error('invalid file ' + file);
    process.exit(1);
  }
  var content = data.toString('utf8')
    .replace(/function _typeof\([^\1]+?(return\s+_typeof\([^}]+\})/g, '')
    .replace(/\b_typeof\(/g, 'typeof(');
  fs.writeFile(file, content, function (err) {
    if (err) {
      console.error('unable to write ' + file);
      process.exit(1);
    }
  });
});
