//====================================================
//模块功能：密码重置 控制器
//模块日期：2017-01-20
//模块作者：刘霄
//====================================================
/*
 * 按钮btnXX  文本框txtXXX  表格gridXX  下拉框cboXXX  树treXXX  链接lnkXX  DIV:divXXX  弹出对话框：dlgXXX  ListBox:lst  复选框:chkXX
 * 
 */

/**
 * 用户密码
 */
var $txtPassword;//用户密码
/**
 * 重输密码
 */
var $txtRepeat;//重输密码
/**
 * 确定按钮
 */
var $btnOK;//确定按钮
/**
 * 用户密码
 */
var _txtPassword_v;
/**
 * 重输密码
 */
var _txtRepeat_v;
/**
 * 当前登录用户（这个没有重复用 大家自己使自己的 不好#########）
 */
var _userId_v;
/**
 * 第二次输入密码是否标记  临时变量
 */
var repassword="F";
/**
 * 第一次输入密码是否标记  临时变量
 */
var password="F";

/**
 * 入口
 */
$(document).ready(function(){	
	jQuery('input[placeholder]').placeholder();
	main();
});
/**
 * 主函数
 */
function main(){
	getElement();
	setEvent();
}
/**
 * 获取元素
 */
function getElement(){
	$txtPassword = $("#txtPassword");	
	$txtRepassword = $("#txtRepassword");		
	$btnOK = $("#btnOK");	
	// v_set_userinfo();
}
/**
 * 确认按钮 点击事件 
 */
function btnOK_click(){
	//alert(_userId_v+"======"+_txtPassword_v);
	if(repassword=="T"  && password=="T" ){
		//alert('123');
		http_update_password (_userId_v,$("#txtPassword").val());
	}else{
		//$('#btnLogin').attr('disabled',"true");
	}
}
/**
 * 密码离开焦点事件
 */
function txtPassword_blur(){
	//$("#txtPassword-error1").hide();
	hideElement();
	var _txtPassword_v=$("#txtPassword").val();
	if(_txtPassword_v.length<6){
		$("#txtPassword-error1").show();
		password="F";
	}else{
		password="T";
	}
	//isBtnEnable();
}
/**
 * 第二次输入密码离开焦点事件
 */
function txtRepassword_blur(){
	hideElement();
	//alert(123);
	var _txtRepassword_v=$("#txtRepassword").val();
	//alert(_txtRepassword_v+"===="+$("#txtPassword").val());
	if(_txtRepassword_v!=$("#txtPassword").val()){
		$("#txtRepassword-error1").show();
	}else{
		repassword="T";
	}
	//isBtnEnable();
}

/**
 * 事件
 */
function setEvent()
{
//	g_validate();
//	$.validator.setDefaults( {
//		submitHandler: function () {
//			http_update_password (_userId_v,_txtPassword_v);
//		}
//	} );
	v_get_userinfo();//获取用户输入信息
	//确定按钮点击事件
	$("#btnOK").click(function(){
		btnOK_click();
	});
	//密码文本框离开焦点
	$txtPassword.blur(function(){
		txtPassword_blur();
	});
	//重新输入密码文本框离开焦点
	$("#txtRepassword").blur(function(){

	});
}

/**
 * 隐藏文本框报错信息
 */
function hideElement(){
	$('#divCheck *').hide(); 
}

