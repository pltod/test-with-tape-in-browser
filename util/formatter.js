var ripple = require('ripplejs');
var each = require('ripplejs-each');
var template = require('./template.html');

var Table = ripple(template)
              .use(each);

module.exports = {
  formatAsTable: function (testResults) {
    var formattedResults = new Table({data: {testResults: testResults}});
    formattedResults.appendTo(document.body);
  }
}