//====================================================
//模块功能：修改我的个人信息--密码 控制器
//模块日期：2017-01-20
//模块作者：关宇
//====================================================
var _cookierId =""; // 登录的id
/**
 * 入口
 */
$(document).ready(function() {
	jQuery('input[placeholder]').placeholder(); // 2016/12/29
	main();
});
/**
 * 主函数
 */
function main() {
	_cookierId = getCookieValue("id"); 
	g_validate_updatePasswordForm();
}