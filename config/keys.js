if (process.env.NODE_ENV === 'production') {
    // in production send production appropriate data
    module.exports = require('./prod');
} else {
    // in development send development appropriate data
    module.exports = require('./dev');
}