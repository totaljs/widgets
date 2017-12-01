const options = {};

// options.ip = '127.0.0.1';
// options.port = parseInt(process.argv[2]);

require('total.js').http('debug', options);
ON('ready', () => INSTALL('package', 'maker.package'));