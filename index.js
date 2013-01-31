var fs = require('fs');

if(fs.existsSync('build/release/EventLog.node')) {
  module.exports = require('./build/release/EventLog.node');
} else {
  module.exports = require('./prebuild/' + process.arch + '/EventLog.node');
}