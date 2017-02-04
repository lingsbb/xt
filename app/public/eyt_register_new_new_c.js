//====================================================
//模块功能：注册-第三版-增加手机号和邮箱的验证
//模块日期：2017-02-04
//模块作者：刘霄
//====================================================
/*
 * 按钮btnXX  文本框txtXXX  表格gridXX  下拉框cboXXX  树treXXX  链接lnkXX  DIV:divXXX  弹出对话框：dlgXXX  ListBox:lst  复选框:chkXX
 * 
 */

/**
 * 注册邮箱
 */
var $txtEmail;
/**
 * 注册密码
 */
var $txtPassword;
/**
 * 注册手机号
 */
var $txtTel;
/**
 * 注册按钮
 */
var $btnRegister;
/**
 * 发送按钮
 */
var $btnSend;
/**
 * 验证码
 */
var $txtCode;



/**
 * 注册邮箱
 */
var _txtEmail_v;
/**
 * 注册密码
 */
var _txtPassword_v;
/**
 * 注册手机号
 */
var _txtTel_v;
/**
 * 手机验证码
 */
var _txtCode_v;
/**
 * 从其他页面传来的邮箱 
 */
var _urlEmail=getQueryString("email");


/**
 * 定时器
 */
var sleep = 60, interval = null;


/**
 * 邮箱是否已注册
 */
var _httpEmail="F";
/**
 * 手机号是否已注册
 */
var _httpTel="F";
/**
 * 验证码是否匹配
 */
var _httpCode="F";
/**
 * 邮箱验证结果
 */
var _regEmail="";
/**
 * 手机验证结果 
 */
var _regTel="";
/**
 * 密码验证结果
 */
var _regPassword="";
/**
 * 验证码验证结果
 */
var _regCode="";



/**
 * 手机验证码
 */
var _smsCode="";
/**
 * 邮箱验证码
 */
var _emailCode="";




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
 * 获取dom元素
 */
function getElement(){
	$txtEmail=$('#txtEmail');
	$txtPassword=$('#txtPassword');
	$txtTel=$('#txtTel');
    $btnRegister=$("#btnRegister");
    $btnSend=$("#btnSend");
	$txtCode=$('#txtCode');
}
/**
 * 设置绑定事件
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
	_txtCode_v=$('#txtCode').val();
/*
*	发送按钮点击事件
*/ 
	$btnSend.click(function(){
		btnSend_click();		
	});	
/*
*	注册按钮点击事件
*/ 
	$btnRegister.click(function(){
		btnRegister_click();		
	});

/*
*	邮箱文本框change事件
*/ 
	$txtEmail.bind('input propertychange',function(){	
		txtEmail_validation();
	});	

/*
*	手机号文本框change事件
*/ 
	$txtTel.bind('input propertychange',function(){	
		txtTel_validation();
	});	


/*
*	密码文本框change事件
*/ 
	$txtPassword.bind('input propertychange',function(){	
		txtPassword_validation();
	});	

/*
*	验证码文本框change事件
*/ 
	$txtCode.bind('input propertychange',function(){	
		txtCode_validation();
	});	
}


/*
*	注册按钮点击事件逻辑
*/ 
function btnRegister_click(){	
	if(!_urlEmail){
		$("#txtEmail").removeAttr("readonly");
	}else{

	}	
	if(_regEmail=="T" && _regTel=="T" && _regPassword=="T"){
		if($('input[name="chkLogin"]').prop("checked")) {
				http_insert_user_xt_new(_txtEmail_v,_txtTel_v,_txtPassword_v);					
				console.log("注册成功！");
			}
	}else{
		console.log("邮箱："+_regEmail);
		console.log("手机号："+_regTel);
		console.log("密码："+_regPassword);
		//
		txtEmail_validation(_txtEmail_v);
		if(_regCode=="T"){
			if(_regEmail=="T"){
				txtTel_validation(_txtTel_v);
				if(_regTel=="T"){
					txtPassword_validation(_txtPassword_v);
					if(_regPassword=="T"){
						http_insert_user_xt_new(_txtEmail_v,_txtTel_v,_txtPassword_v);
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
		}else{
			alert("请再次确认您的注册信息，确保无误后再点击注册按钮！");
		}
	}
}


/*
*	发送按钮点击事件逻辑
*/ 
function btnSend_click(){	
	changeStyle();
	http_post_sms_reg(_txtTel_v,_smscode);
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
			document.getElementById ('btnSend').removeAttribute ('disabled');
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
*	短信验证码验证逻辑
*/ 
function txtCode_validation(){
	_txtCode_v = $('#txtCode').val();
	_txtTel_v = $('#txtTel').val();
	console.log(_txtCode_v);
	hideElement();
	if(isCode(_txtCode_v)=="F"){
		$("#txtCode-error1").show();
		_regCode="F";
	}else{
		http_login_xt_reg_sms(_txtTel_v,_txtCode_v);
		if(_httpCode=="F"){
			$("#txtCode-error1").show();
			_regCode="F";	
		}else{
			_regCode="T";
		}
	}
}

/*
*	隐藏所有报错信息
*/ 
function hideElement(){
	$('#divCheck *').hide();
}

/** 
 * 改变发送按钮样式
*/
function changeStyle(){
	if (!interval)
	{
		
		//document.getElementById ('btnSend').style.backgroundColor = 'rgb(243, 182, 182)';
		document.getElementById ('btnSend').className = 'btn btn-default';
		document.getElementById ('btnSend').disabled = "disabled";
		document.getElementById ('btnSend').style.cursor = "wait";
		document.getElementById ('btnSend').value = "重新发送 (" + sleep-- + ")";
		document.getElementById ('txtCode').style.width="62%";
		interval = setInterval (function ()
		{
			if (sleep == 0)
			{
				if (!!interval)
				{
					clearInterval (interval);
					interval = null;
					sleep = 60;
					document.getElementById ('btnSend').style.cursor = "pointer";
					document.getElementById ('btnSend').removeAttribute ('disabled');
					document.getElementById ('btnSend').value = "发送";
					document.getElementById ('btnSend').style.backgroundColor = '#428bca';
					document.getElementById ('btnSend').className = 'btn btn-primary';
					document.getElementById ('txtCode').style.width="76%";
				}
				return false;
			}
			document.getElementById ('btnSend').value = "重新发送 (" + sleep-- + ")";
		}, 1000);
	}
}