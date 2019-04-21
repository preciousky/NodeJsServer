var http = require("http");
var querystring = require('querystring');

var server = http.createServer(function (req, res) {
	var str = "";//接收数据用
	//data有一段数据到达（重复很多次）
	req.on('data', function (data) {
		console.log('有数据');
		str += data;
	});
	//数据全部到达（一次）
	req.on('end', function () {
		console.log('最后的数据：' + str);
		// console.log(typeof (str));
		console.log(JSON.parse(str));
		// console.log('{"domain":"sojson.com","author":"soso"}');
		// console.log(JSON.parse('{"domain":"sojson.com","author":"soso"}'));
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE');
		res.setHeader('Access-Control-Max-Age', '3600');
		res.setHeader('Access-Control-Allow-Headers', 'Content-Type,XFILENAME,XFILECATEGORY,XFILESIZE,x-requested-with,Authorization');
		res.setHeader('Access-Control-Allow-Credentials', 'true');
		res.writeHead(200, { 'Content-Type': 'application/json;charset=UTF-8' });
		res.end('{"response":"responseTest"}');
	});
});

server.listen(8080, function () {
	console.log('listening on localhost:8080');
});