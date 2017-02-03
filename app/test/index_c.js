/*
 * 按钮btnXX  文本框txtXXX  表格gridXX  下拉框cboXXX  树treXXX  链接lnkXX  DIV:divXXX  弹出对话框：dlgXXX  ListBox:lst  复选框:chkXX
 * 
 */

/**
 * 用户文本框
 */
var $txtUser;
/**
 * 密码文本框
 */
var $txtPassword;
/**
 * 确定按钮
 */
var $btnOK;
/**
 * 用户文本框值
 */
var _txtUser_v;
/**
 * 密码文本框值
 */
var _txtPassword_v;

/**
 * 入口函数
 */
$(document).ready(function(){
	main();
});

/**
 * 主函数
 */
function main(){
	setValidate();
	getElement();
	setEvent();
}

/**
 * 获取元素
 */
function getElement(){
	$txtUser=$('#txtUser');
	$txtPassword=$('#txtPassword');
	$btnOK=$('#btnOK');
}

/**
 * 绑定事件
 */
function setEvent()
{
	$txtUser.click(function(){
		btnOK_click();
	});
}

/**
 * 登录过程
 */
function btnOK_click(){
	v_get_userinfo();
	//实际逻辑传入
	var bln=check1(_txtUser_v,_txtPassword_v);
	if (bln){//验证成功
		http_eyt_user_login(_txtUser_v,_txtPassword_v);
	}
}


