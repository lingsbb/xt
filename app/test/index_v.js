/**
 * 获取数据
 */
function v_get_userinfo(){
	_txtUser_v = $txtUser.val();
	_txtPassword_v = $txtPassword.val();
}

/**
 * 设置数据
 */
function v_set_userinfo(user,password){
	$txtUser.val(user);
	$txtPassword.val(password);
}