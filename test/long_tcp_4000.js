var zmq = require('../');
(function() {
  var a = zmq.socket('dealer');
  a.on('message', function() {});
  a.bind('tcp://127.0.0.1:5555', function() {
    console.log('bound');
  });
})();

for (var i = 0; i <= 24000; i += 4000) {
  setTimeout(console.log.bind(null, i), i);
}