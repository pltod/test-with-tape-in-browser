var path = require('path');
var test = require('tape');
var formatter = require('../util/formatter.js');

var currentTestName;
var testResults = [];

test.createStream({ objectMode: true })
  .on('data', function (row) {
    if (row.type === "test") {
      currentTestName = row.name;
    }
    if (row.type === "assert") {
      testResults.push({
        "id": currentTestName + " - " + ++row.id,
        "name": row.name,
        "ok": row.ok ? "pass" : "fail",
        "color": row.ok ? "success" : "danger",
        "actual": row.actual === undefined ? 'undefined' : row.actual,
        "expected": row.expected
      });
    }
  })
  .on('end', function () {
    formatter.formatAsTable(testResults);
  });

var suites = [
  require('./suite1.js'),
  require('./suite2.js')
];
