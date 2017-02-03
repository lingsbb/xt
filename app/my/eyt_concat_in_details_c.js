//====================================================
//模块功能：内部联系人详情 控制器
//模块日期：2017-01-20
//模块作者：关宇
//====================================================

var _id=unescape(getQueryString("id"));

/**
 * 入口函数
 */
$(document).ready(function(){
	jQuery('input[placeholder]').placeholder(); // 2016/12/29
	main();
});
/**
 * main 函数
 */
function main(){
	//alert(_id);
	http_select_user_xt_byid();
}


