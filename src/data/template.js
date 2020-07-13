const imports = require.context("./templates", false, /\.js$/)
const data = imports.keys().reduce((acc, curr) => (acc[curr.slice(2, -3)] = imports(curr).default, acc), {});

module.exports = data;