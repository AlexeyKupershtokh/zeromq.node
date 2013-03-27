var zmq = require('../');
var a = zmq.socket('dealer');
a.on('message', function() {});
a.bind('tcp://127.0.0.1:5555', function() {
  console.log('bound');
});

for (var i = 0; i <= 24000; i += 6000) {
  setTimeout(function(i) {
    console.log(i);
  }.bind(null, i), i);
}