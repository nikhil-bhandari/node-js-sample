var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send('Hello World!');
});

process.on( "SIGINT", function() {
  console.log('CLOSING [SIGINT]');
  process.exit();
} );

process.on( "SIGTERM", function() {
  console.log('CLOSING [SIGTERM]');
  process.exit();
} );

process.on( "SIGKILL", function() {
  console.log('CLOSING [SIGKILL]');
  process.exit();
} );

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
