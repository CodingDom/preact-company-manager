const { environment } = require('@rails/webpacker')

// Configure the node property
environment.config.merge({
    node: {
        fs: 'empty',  // For resolving node-fs issues
        net: 'empty', // For resolving node-net issues
        tls: 'empty', // For resolving node-tls issues
    },
});

module.exports = environment
