
//====================================================
//模块功能：官网首页公共js
//模块日期：2017-01-20
//模块作者：莫胜男
//====================================================

/**
 * 入口函数
 */
$(document).ready(function(){
	main();
});

/**
 * main函数
 */
function main(){
	//先清空
	$('#enterDiv').empty();
	var enterWay="";
	
	//如果cookie中的id有值，则显示进入首页，否则显示登录
	if(getCookieValue("id")){
		enterWay='<a class="login-in" href="../eyt_xt/public/enter">进入首页</a>';
		$('#enterDiv').append(enterWay);
	}else{
		enterWay='<a class="login-in" href="../eyt_xt/public/eyt_login">登录</a>';
		$('#enterDiv').append(enterWay);
	}
}


/**
 * 跳转注册
 */
function goRegister(){
	var emailStr="";
	emailStr=!$('#registerEmail').val()?"":$('#registerEmail').val();
	window.location.href="../eyt_xt/public/eyt_register_new?email="+emailStr;
}