/**
 * 获取用户输入信息
 */
function v_get_userinfo(){
	_txtPassword_v = $txtPassword.val();
	_txtRepeat_v = $("#txtRepassword").val();
	_userId_v = getCookieValue("id");
}
