var http = require('http');
var querystring = require('querystring');
var util = require('util');

http.createServer(function (req, res) {
    console.log(req.url);
    // 定义了一个post变量，用于暂存请求体的信息
    var post = ''

    // 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
    req.on('data', function (chunk) {
        post += chunk;
    });

    // 在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
    req.on('end', function () {
        console.log(post);
        // console.log(JSON.parse(post));
        // console.log(receiveData_json);
        // console.log(receiveData_json.userId);
        // //console.log(JSON.parse(util.inspect(post)));
        // post = querystring.parse(post);
        console.log(post);
        console.log(typeof (post));

        var responseData_json;
        var receiveData_json=JSON.parse(post);
        // for (var key in post) {
        //     //if(arr.hasOwnProperty(key))
        //     console.log(key);        //键名
        //     receiveData_json = JSON.parse(key);
        // }

        if (true) {
            console.log(receiveData_json);
            console.log(receiveData_json.userId);
            console.log(receiveData_json.userName);
            responseData_json = {
                "name": "test_name",
                "id": "userId",
                "logup_date": "9999-99-99",
                "total_value": "99999",
                "rank": "1",
                "account": "00000",
                "tel": "010-12345678",
                "email": "my@test.com",
                "address": "the TWO Street"
            }
        }

        // post = util.inspect(post);
        // console.log(post);
        // console.log(typeof(post));

        // var responseData_str=receiveData_json.userId;
        // var responseData_str="11111111111111";

        // if(true){
        //     responseData_str=receiveData_json.userId+" success";
        // }

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE');
        res.setHeader('Access-Control-Max-Age', '3600');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type,XFILENAME,XFILECATEGORY,XFILESIZE,x-requested-with,Authorization');
        res.setHeader('Access-Control-Allow-Credentials', 'true');
        res.writeHead(200, { 'Content-Type': 'application/json;charset=UTF-8' });
        // res.writeHead(200, {'Content-Type': 'text/plain'});
        //console.log(util.inspect(post));
        // res.end(JSON.stringify(JSON.parse(post)));
        // console.log(responseData_str);
        // res.end(responseData_str);

        //不能直接传json对象
        //不能传不符合json格式的字符串，否则angular在解释的时候会报错
        //下面是传了一个符合json格式的字符串，目前没有报错
        res.end(JSON.stringify(responseData_json));
        // res.end();
        console.log("===finish===")
    });
}).listen(8080);