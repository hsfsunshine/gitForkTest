var util = require("./util.js");
var url = require('url');
var MockRoute = function (request, response) {
    var urlPath = url.parse(request.url).pathname;
    var reqParams = url.parse(request.url, true).query;
    console.log('pathname :' + urlPath);
    console.log('query :' + JSON.stringify(reqParams));
    switch (urlPath) {
        // 查询用户
        case "/meiya/getMember":
            util.fRestApi(response,'{"failed":false,"message":null,"data":{"phone":"15291650751","o2o":"online","gift_type":"A","joined":false,"joined_time":"xxxxx"}}');
            // util.fRestApi(response,'{"failed":false,"message":null,"data":{"phone":"15291650751","o2o":"online","gift_type":"A","joined":true,"joined_time":"xxxxx","tickets":[{"code":"123123123123","tick_name":"咖啡券","num":1,"ticket_amount":"30"}]}}');
            break;
        // 奖品列表
        case "/meiya/getGifts":
            util.fRestApi(response,'{"failed":false,"message":null,"data":[{"id":1,"gift_type":"","tick_name":"咖啡券","ticket_amount":"优惠券面值" ,"num":"数量","sort":"排序1","meiyoule":true},{"id":2,"gift_type":"","tick_name":"电影券","ticket_amount":"优惠券面值","num":"数量","sort":"排序2","meiyoule":false},{"id":3,"gift_type":"","tick_name":"滴滴券","ticket_amount":"优惠券面值","num":"数量","sort":"排序3","meiyoule":false}]}');
            break;
        // 奖品列表
        case "/meiya/rewardGifts":
            util.fRestApi(response,'{"failed": false,"message": "恭喜领取成功","data" :[{"code":"123123123123","tick_name":"咖啡券","num":1,"ticket_amount":"30"}]}');
            break;
        // 校验手机号是否是线下会员
        case "/customer-bind/checkMobileExist":
            util.fRestApi(response,'{"msg": "success"}');
            break;
        // 发送验证码
        case "/customer-bind/sendCode":
            util.fRestApi(response,'{"msg": "success"}');
            break;
        // 登录判断
        case "/customer-bind/checkCodeIsRight":
            util.fRestApi(response,'{"msg": true}');
            break;
        // 登录判断
        case "/customer-bind/checkBindInfo":
            util.fRestApi(response,'[{"plat_code":"taobao","customerno":"123123"},{"plat_code":"JD","customerno":"456456"}]');
            break;
        // 判断是否可以进行绑定
        case "/customer-bind/checkMobileIsBind":
            util.fRestApi(response,'{"msg":"手机号与淘宝账号匹配"}');
            break;
        // 判断是否可以进行绑定
        case "/customer-bind/mobileBind":
            util.fRestApi(response,'{"msg":"success"}');
            break;
        case "/customer-bind/logout":
            util.fRestApi(response,'{"msg":"退出登录成功"}');
            break;
        // 用户核销接口
        case "/alicrad/saveCancelCode":
            util.fRestApi(response,'{"msg":"success"}');
            break;
        // 八马领取优惠券
        case "/alicrad/rewardGifts":
            util.fRestApi(response,'{"msg":"success"}');
            break;
        // 根据手机号查询是否领取过券
        case "/alicrad/getGifts":
            util.fRestApi(response,'{"msg":"success"}');
            break;
        default:
            console.log('{"msg":"该方法尚未实现，请补充","path":"' + urlPath + '"}');
            util.fRestApi(response, '{"msg":"该方法尚未实现，请补充","path":"' + urlPath + '"}');
            break;
    }
}
module.exports = MockRoute;