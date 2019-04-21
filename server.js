var http = require('http');

var server = http.createServer(function (req, res) {
    console.log('=====start=======================================================');
    var URL = req.url;
    console.log(URL);
    console.log('=================================================================');
    // 定义了一个post变量，用于暂存请求体的信息
    var post = "";

    // 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
    req.on('data', function (chunk) {
        post += chunk;
    });

    // 在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
    req.on('end', function () {
        console.log('====接收数据完成=================================================');
        console.log(post);
        var responseData_json;
        var receiveData_json = JSON.parse(post);
        // var receiveData_json = {
        //     userId: 'userIdMock',
        //     userName: 'userNameMocl'
        // }
        
        if (URL=='/user/getMyInfo') {
            console.log('==========-url:/user/getMyInfo开始处理数据=======================');
            var userId = receiveData_json.userId;
            console.log(userId);
            var userName = receiveData_json.userName;
            console.log(userName);

            responseData_json = {
                "name": "pass",
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
        console.log('====处理结束，开始组装response的头部=============================');
        console.log('··· ···');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE');
        res.setHeader('Access-Control-Max-Age', '3600');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type,XFILENAME,XFILECATEGORY,XFILESIZE,x-requested-with,Authorization');
        res.setHeader('Access-Control-Allow-Credentials', 'true');
        res.writeHead(200, { 'Content-Type': 'application/json;charset=UTF-8' });
        console.log('====开始装载response数据==========================================');
        console.log('====即将返回的json为==============================================');
        console.log(responseData_json);
        var str = JSON.stringify(responseData_json);
        console.log('====即将返回的字符串为=============================================')
        console.log(str);
        console.log('===================================================================')
        console.log('······························')
        console.log('··········responsing··········')
        console.log('······························')
        res.end(str);
        console.log("#####finish########################################################")
    });
});

server.listen(8080, function () {
    console.log('listening on localhost:8080');
});