# website

This module contains the user interface for querying the api endpoints

# Getting started

This module enforces the use of `npm` as a node package manager, as it is the most widespread in developer systems
There are a number of commands in this module that enable you to get up and running quickly:

- `install`

The exact details on each of these can be found in the [package.json](package.json)

# Testing

You can run all tests (currently just 2) using:

```
npm test
```

Test suites are only indicative of unit tests, and is neither complete nor comprehensive.

# Notes

- It would be easier to implement the entire project contained within this repo into a single nodeJS project using a hyper-framework such as NextJS. This would remove the need for a python server entirely and allow everything to be hosted on one domain.
  Alternatively, as the web application is relatively simplistic, the use of vite could be replaced by a second simple python server, although this would mean we would lose the developer environment benefits such as HMR that vite provides.
