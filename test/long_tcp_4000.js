var zmq = require('../');
(function() {
  var a = zmq.socket('dealer');
  a.on('message', function() {});
  a.bind('tcp://127.0.0.1:5555', function() {
    console.log('bound');
  });
})();

/*var i = 0;
var interval = setInterval(function() {
  i += 1000;
  console.log(i);
  if (i >= 12000) clearInterval(interval);
}, 1000);*/

for (var i = 0; i < 20000; i += 6000) {
  setTimeout(console.log.bind(null, i), i);
}