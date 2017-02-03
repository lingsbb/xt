//====================================================
//模块功能：注册-第二版-废弃 控制器
//模块日期：2017-01-20
//模块作者：刘霄
//====================================================

/*
 * 按钮btnXX  文本框txtXXX  表格gridXX  下拉框cboXXX  树treXXX  链接lnkXX  DIV:divXXX  弹出对话框：dlgXXX  ListBox:lst  复选框:chkXX
 * 
 */


/**
 * 邮件控件
 */
var $txtEmail;
/**
 * 密码控件
 */
var $txtPassword;
/**
 * 电话控件
 */
var $txtTel;
/**
 * 注册控件
 */
var $btnRegister;
/**
 * 邮件控件值
 */
var _txtEmail_v;
/**
 * 密码控件值
 */
var _txtPassword_v;
/**
 * 电话控件值
 */
var _txtTel_v;
/**
 * getQueryString 邮件值
 */
var _urlEmail=getQueryString("email"); 
/**
 * 邮箱http是否成功 临时变量
 */
var _httpEmail="F";
/**
 * 电话http是否成功 临时变量
 */
var _httpTel="F";
/**
 * 邮箱是否正确 临时变量
 */
var _regEmail="";
/**
 * 电话是否正确 临时变量
 */
var _regTel="";
/**
 * 密码是否正确 临时变量
 */
var _regPassword="";


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
	getElement();
	setEvent();
}
/**
 * 获取元素
 */
function getElement(){
	$txtEmail=$('#txtEmail');
	$txtPassword=$('#txtPassword');
	$txtTel=$('#txtTel');
    $btnRegister=$("#btnRegister");
    
}
/**
 * 设置事件
 */
function setEvent()
{   
    console.log("_urlEmail====="+_urlEmail);
	if(!_urlEmail){
		
	}else{
		$txtEmail.val(_urlEmail);
		$txtEmail.attr("readonly","readonly");
	}

	//v_get_userinfo();
	_txtEmail_v=$('#txtEmail').val();
	_txtTel_v = $('#txtTel').val();
	_txtPassword_v = $('#txtPassword').val();

	$btnRegister.click(function(){
		btnRegister_click();		
	});

	$txtEmail.bind('input propertychange',function(){	
		txtEmail_validation(_txtEmail_v);//邮箱文本框change事件
	});	


	$txtTel.bind('input propertychange',function(){	
		txtTel_validation(_txtTel_v);//手机号文本框change事件
	});	


	$txtPassword.bind('input propertychange',function(){	
		txtPassword_validation(_txtPassword_v);//密码文本框change事件
	});	
}

/**
 * 点击注册事件
 */
function btnRegister_click(){
	$("#txtEmail").removeAttr("readonly");
	if(_regEmail=="T" && _regTel=="T" && _regPassword=="T"){
		if($('input[name="chkLogin"]').prop("checked")) {
				btnRegister_click();					
				console.log("注册成功！");
			}
	}else{
		console.log("邮箱："+_regEmail);
		console.log("手机号："+_regTel);
		console.log("密码："+_regPassword);
		//
		txtEmail_validation(_txtEmail_v);
			if(_regEmail=="T"){
				txtTel_validation(_txtTel_v);
				if(_regTel=="T"){
					txtPassword_validation(_txtPassword_v);
					if(_regPassword=="T"){
						btnRegister_click();
						console.log("注册成功！");
					}else{
						alert("请再次确认您的注册信息，确保无误后再点击注册按钮！");
					}
				}else{
					alert("请再次确认您的注册信息，确保无误后再点击注册按钮！");
				}
			}else{
				alert("请再次确认您的注册信息，确保无误后再点击注册按钮！");
			}
	}
}

/*
*	注册按钮点击事件逻辑
*/ 
function btnRegister_click(){	
	http_insert_user_xt_new(_txtEmail_v,_txtTel_v,_txtPassword_v);
}



/*
*	邮箱验证逻辑
*/ 
function txtEmail_validation(){
	_txtEmail_v=$('#txtEmail').val();
	console.log(_txtEmail_v);
	hideElement();
	if(isEmail(_txtEmail_v)=="F"){
		$("#txtEmail-error1").show();
		_regEmail="F";
	}else{
		http_register_user_xt_email_new(_txtEmail_v);
		if(_httpEmail=="F"){
			$("#txtEmail-error2").show();
			_regEmail="F";	
		}else{
			_regEmail="T";
		}
	}
	console.log(isEmail(_txtEmail_v)+","+_httpEmail);
}



/*
*	手机号验证逻辑
*/ 
function txtTel_validation(){
	_txtTel_v = $('#txtTel').val();
	console.log(_txtTel_v);
	hideElement();
	if(isTel(_txtTel_v)=="F"){
		$("#txtTel-error1").show();
		_regTel="F";
	}else{
		http_register_user_xt_tel_new(_txtTel_v);
		if(_httpTel=="F"){
			$("#txtTel-error2").show();
			_regTel="F";	
		}else{
			_regTel="T";
		}
	}
}



/*
*	密码验证逻辑
*/ 
function txtPassword_validation(){
	_txtPassword_v = $('#txtPassword').val();
	console.log(_txtPassword_v);
	hideElement();
	if(isPassword(_txtPassword_v)=="F"){
		$("#txtPassword-error1").show();
		_regPassword="F";
	}else{
		_regPassword="T";
	}
}


/*
*	隐藏所有报错信息
*/ 
function hideElement(){
	$('#divCheck *').hide();
}

