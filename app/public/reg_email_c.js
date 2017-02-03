//====================================================
//模块功能：注册以后的去邮箱激活帐号的提示页 控制器
//模块日期：2017-01-20
//模块作者：刘霄
//====================================================

var $spnUserName;//用户昵称
var $divEmailUrl;//邮箱url div
var $aEmailUrl;//a标签


var _spnUserName_v=getCookieValue("username");//用户昵称
var _aEmailUrl_v;
var _userEmail_v=getCookieValue("useremail");//用户邮箱


/**
 * 入口
 */
$(document).ready(function(){	
	main();
});
/**
 * 主函数
 */
function main(){
	getElement();
	setEvent();
}
//获取
function getElement(){
	$spnUserName = $("#spnUserName");	
	$divEmailUrl = $("#divEmailUrl");		
	$aEmailUrl = $("#aEmailUrl");	
}

//事件
function setEvent()
{	
	var smtp_in="@"+_userEmail_v.split('@')[1];
	console.log(smtp_in);
	http_select_email_url(smtp_in);
}