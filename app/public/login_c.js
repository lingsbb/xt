//====================================================
//模块功能：登陆 控制器
//模块日期：2017-01-20
//模块作者：刘霄
//====================================================

/*
 * 按钮btnXX  文本框txtXXX  表格gridXX  下拉框cboXXX  树treXXX  链接lnkXX  DIV:divXXX  弹出对话框：dlgXXX  ListBox:lst  复选框:chkXX
 * 
 */
var $txtAccount;	//用户名
var $txtPassword;	//密码
var $chkLogin;	//是否自动登录
var $btnLogin;	//登录 
var $txtError;	//账号密码错误
var $txtClose; //账号封停
var $txtOut; //用户离职
var $txtActive; //账号未激活
var _md5_password;	//md5密码


var _txtAccount_v;
var _txtPassword_v;
var _chkLogin_v;

var email="T";
var password="T";

$(document).ready(function(){
	jQuery('input[placeholder]').placeholder();
	main();
});

function main(){
	getElement();
	setEvent();
}



//获取
function getElement(){
	$txtAccount = $("#txtAccount");	
	$txtPassword = $("#txtPassword");		//密码
	$chkLogin = $("#Account");	
	$btnLogin = $("#btnLogin");	
	$txtError = $("#txtError");
	$txtClose = $("#txtClose");
	$txtOut = $("#txtOut");
	$txtActive = $("#txtActive")
	v_set_userinfo();
}

//事件
function setEvent()
{	
	$txtPassword.blur(function(){
		//$("#txtPassword-error1").hide();
		hideElement();
		var _txtPassword_v=$("#txtPassword").val();
		if (isSql(_txtPassword_v)=="T"){
			password="F";
		} else{
			password="T";
		}
		console.log(password);
		//isBtnEnable();
	});
	$txtAccount.blur(function(){
		//$("#txtEmail-error1").hide();
		hideElement();
		var _txtAccount_v=$("#txtAccount").val();
		//http_login_xt_reg_sms(_txtTel_v,$("#txtCode").val());
		if(isSql(_txtAccount_v)=="F"){
			email="T";
		}else{
			$("#txtEmail-error1").show();
			email="F";
		}
		//isBtnEnable();
	});

	$btnLogin.click(function(){
		//hideElement();
		if(email=="T"  && password=="T" ){
			btnLogin_click();
		}else{
			//$('#btnLogin').attr('disabled',"true");
		}		
	});

	$("body").keydown(function() {
		if (event.keyCode == "13") {//keyCode=13是回车键
			$btnLogin.click();
		}
    });

}
//登录按钮点击事件
function btnLogin_click(){
	
	v_get_userinfo();
	hideElement();
	_md5_password = hex_md5(_txtPassword_v);
	http_eyt_user_login(_txtAccount_v,_txtPassword_v,_chkLogin_v,_md5_password);
	
}
/*function isBtnEnable(){
	if(email=="T"  && password=="T" ){
		$('#btnLogin').removeAttr("disabled");
	}else{
		$('#btnLogin').attr('disabled',"true");
	}
}*/
//隐藏报错信息
function hideElement(){
	$('#divCheck *').hide(); 
}
