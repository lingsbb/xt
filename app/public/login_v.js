//====================================================
//模块功能：登陆 视图层
//模块日期：2017-01-20
//模块作者：刘霄
//====================================================
/**
 * 获取用户信息
 */
function v_get_userinfo(){
	_txtAccount_v = $txtAccount.val();
	_txtPassword_v = $txtPassword.val();
	_chkLogin_v = $chkLogin.is(':checked');
}
/**
 * 设置用户信息
 */
function v_set_userinfo(){	
	var cookierUsername = getCookieValue("useremail");  
	var cookierUserpwd = getCookieValue("password");
	if(getCookieValue("ifcheck")=="true"){
		$txtAccount.val(cookierUsername);
		$txtPassword.val(cookierUserpwd);
	}
}