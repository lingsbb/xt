//====================================================
//模块功能：添加外部联系人 控制器
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
	//$.validator.methods.zh = function( value, element ) {
	  //return this.optional( element ) || /^[\u4e00-\u9fa5]+/.test( value );
	//}
	//事件
	$.validator.setDefaults( {
		submitHandler: function () {
			$('#gloadingForm').modal('show');
			http_insert_userxt_userhelpout ();
		}
	} );
	g_validate();
}

