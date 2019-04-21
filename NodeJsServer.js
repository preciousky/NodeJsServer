var http = require('http');


var testStr = '{"source":"come from localhost:8080","name": "test_name","id": "test_id","logup_date": "9999-99-99","total_value":"99999","rank":"1","account": "00000",	"tel": "010-12345678",	"email": "my@test.com",	"address": "The ONE Street, 12-922"}';
var jsonData, responseData;


var srv = http.createServer(function (request, response) {
    var url = request.url;
    console.log('url: ' + url);
    /* //GET
    var obj = urlLib.parse(request.url,true);
    var url = obj.pathname;
    var GET = obj.query; */

    //POST
    var bufferData = '';
    request.on('data', function (data) {
        bufferData += data;
    });
    request.on('end', function () {
        console.log('buffer接收完成得到的数据:' + bufferData);
        data = decodeURI(bufferData);
            console.log(bufferData);
        jsonData = JSON.parse(bufferData);
        console.log('json化之后的数据： ');
        console.log(jsonData);

        if (url == '/user/getMyInfo') {
            var userId = jsonData.userId;
            responseData = {
                "name": "test_name",
                "id": userId,
                "logup_date": "9999-99-99",
                "total_value": "99999",
                "rank": "1",
                "account": "00000",
                "tel": "010-12345678",
                "email": "my@test.com",
                "address": "the TWO Street"
            };
            console.log('response数据： ' + responseData);
            console.log('test    数据： ' + testStr);
            ///为了解决跨域访问的问题复制进来的，里面具体对头的设定，我没有具体查
            response.setHeader('Access-Control-Allow-Origin', '*');
            response.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE');
            response.setHeader('Access-Control-Max-Age', '3600');
            response.setHeader('Access-Control-Allow-Headers', 'Content-Type,XFILENAME,XFILECATEGORY,XFILESIZE,x-requested-with,Authorization');
            response.setHeader('Access-Control-Allow-Credentials', 'true');
            response.writeHead(200, { 'Content-Type': 'application/json;charset=UTF-8' });
            console.log(responseData);
            response.end(JSON.stringify(responseData));
            //res.end(JSON.stringify(data));
        }
    })




    /* ///为了解决跨域访问的问题复制进来的，里面具体对头的设定，我没有具体查
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE');
    response.setHeader('Access-Control-Max-Age', '3600');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type,XFILENAME,XFILECATEGORY,XFILESIZE,x-requested-with,Authorization');
    response.setHeader('Access-Control-Allow-Credentials', 'true');
    response.writeHead(200, { 'Content-Type': 'application/json;charset=UTF-8' });
    console.log(responseData);
    response.end(responseData); 
    //res.end(JSON.stringify(data)); */
});


srv.listen(8080, function () {
    console.log('listening on localhost:8080');
});