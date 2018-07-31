require('babel-register')
const matcher = require('./src/matcher').default

matcher(process.argv.slice(2).pop())
