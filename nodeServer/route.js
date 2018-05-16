var util = require("./util.js");
var url = require('url');
var MockRoute = function (request, response) {
    var urlPath = url.parse(request.url).pathname;
    var reqParams = url.parse(request.url, true).query;
    console.log('pathname :' + urlPath);
    console.log('query :' + JSON.stringify(reqParams));
    switch (urlPath) {
        // 用户核销接口
        case "/alicrad/saveCancelCode":
            util.fRestApi(response,'{"failed": true, "message": "核销成功", "data": null}');
            break;
        // 八马领取优惠券
        case "/alicrad/rewardGifts":
                util.fRestApi(response,'{"failed": true, "message": "该手机号已领取过奖励", "data":{"id": null, "tick_name": "新人30元优惠券", "tick_code": "0", "ticket_amount": "30", "check_code": null,"tick_name":"新人30元优惠券","ticket_amount":"30"}}');
            break;
        // 根据手机号查询是否领取过券
        case "/alicrad/getGifts":
            util.fRestApi(response,'{"failed": true, "message": "查询成功", "data":{"id": null, "tick_name": "新人50元优惠券", "tick_code": "0", "ticket_amount": "30", "check_code": null,"tick_name":"新人30元优惠券","ticket_amount":"30"}}');
            break;
        default:
            console.log('{"msg":"该方法尚未实现，请补充","path":"' + urlPath + '"}');
            util.fRestApi(response, '{"msg":"该 方法尚未实现，请补充","path":"' + urlPath + '"}');
            break;
    }
}
module.exports = MockRoute;