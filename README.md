# lab-testing

Visualise tape test suite in the browser with ripple.

Open build/index.html inside the browser:

![](https://github.com/pltod/lab-testing/blob/master/images/test-results-browser.png)



# Notes

* tape is may be the simplest way IMO for writing tests for the node and the browser (in the browser case not considering user interactions :) but only pure javascript functions)

> https://github.com/substack/tape

* tape suites could be executed in the browser if browserified but the output is logged in the browser console

* however tape allows to create an object stream so we can capture the test output and format it in the way we want

* for formatting purpose is used ripple - small lib for building reactive views

> https://github.com/ripplejs/ripple

 
* styling is made with bootstrap but it could be used anything


# How it works?

* all tests are in the test folder

* index.js in test folder

> aggregates all the scripts

> capture the test output via the object stream created with tape

> format it with ripple formater (util/formatter.js)

* formater has only one method formatAsTable but we could format it in the best visual component for our use case



# Packaging

In order to work in the browser the test suite must be browserified.

* install with ```npm install```

* package with ```npm run build```

> this produce build/build.js that is consumed by index.html

> packaging is in watch mode so any changes in our tests will rebuild automatically

> we need just to manually reload the browser to see the results (automation of this reloading could be achieved with tools like browser-sync or live-reload)



