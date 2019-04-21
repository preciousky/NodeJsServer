var http = require("http");

var req = http.get("http://www.baidu.com", function(res) {
  console.log("STATUS: " + res.statusCode);

  var bodyChunks = []; 
  res.on('data', function (chunk) {
    bodyChunks.push(chunk);
  })  
  .on('end', function() {
    var body = Buffer.concat(bodyChunks);
    console.log("Response BODY: " + body);
    console.log('The request end...')  
  }); 
});

req.on('error', function(e) {
    console.log("ERROR: " + e.message);
});