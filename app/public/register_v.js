//====================================================
//模块功能：注册-废弃 视图层
//模块日期：2017-01-20
//模块作者：刘霄
//====================================================
function v_get_userinfo(){
	_txtEmail_v = $txtEmail.val();
	_txtPassword_v = $txtPassword.val();
	_txtQiye_v=$txtQiye.val();
	_txtTel_v=$txtTel.val();
	_txtCode_v=$txtCode.val();
	_txtNickname_v=$txtNickname.val();
	_chkAgree_v = $chkAgree.is(':checked');
}


//隐藏报错提示信息
function hideElement(){
	$('#divCheck *').hide(); 
}