var zmq = require('../');
var a = zmq.socket('pub');
a.on('message', function() {
  console.log('message');
});
a.bind('tcp://127.0.0.1:5555', function() {
  console.log('bound');
});

setTimeout(function() {
  gc();
}, 1000);

setTimeout(function() {
  gc();
}, 10000);