//====================================================
//模块功能：注册-废弃 控制器
//模块日期：2017-01-20
//模块作者：刘霄
//====================================================

/*
 * 按钮btnXX  文本框txtXXX  表格gridXX  下拉框cboXXX  树treXXX  链接lnkXX  DIV:divXXX  弹出对话框：dlgXXX  ListBox:lst  复选框:chkXX
 * 
 */
var $txtQiye;	//企业名称
var $txtEmail; //用户邮箱
var $txtPassword;//用户密码
var $txtRepassword;//重输密码
var $txtTel;//用户电话
var $txtCode;//短信验证码
var $btnCheck;//校验按钮
var $btnSend;//发送按钮
var $btnResend;//重新发送按钮
var $chkAgree;//同意协议
var $txtNickname;//昵称

var arr=[];
var _txtPassword_v;
var _chkAgree_v;
var _txtEmail_v;
var _txtQiye_v;//企业
var _txtTel_v;
var _txtNickname_v;
var _smscode="";
var sleep = 60, interval = null;
var _clickCount=1;
var _emailcode="";
var emailReg="F";
var telReg="F";
var passwordReg="F";
var codeReg="F";
var repasswordReg="F";
var nicknameReg="F";

var email="F";
var tel="F";
var password="F";
var code="F";
var repassword="F";
var nickname="F";


var _email;
var _tel;
var _password;
var _code;
var _repassword;
var _nickname;
var _qiye;







$(document).ready(function(){	
	var _urlEmail=getQueryString("email");
	//alert(_urlEmail);
	$("#txtEmail").val(_urlEmail);
	$("#txtEmail").focus();
	jQuery('input[placeholder]').placeholder();
	main();
});

function main(){
	getElement();
	setEvent();
}
//获取
function getElement(){
	$txtQiye = $("#txtQiye");	
	$txtEmail = $("#txtEmail");	
	$txtPassword = $("#txtPassword");	
	$txtRepassword = $("#txtRepassword");	
	$txtTel = $("#txtTel");	
	$txtCode = $("#txtCode");
	$txtNickname = $("#txtNickname");
	$btnCheck = $("#btnCheck");	
	$btnSend = $("#btnSend");		
	$chkAgree = $("#chkAgree");	
	//v_set_userinfo();
}

//事件
function setEvent()
{

	//查询所有企业（未完成）
	//http_select_qiye_cn_All();
	//注册按钮点击事件

   	$("#btnRegister").click(function () {  
	   		//alert("邮箱："+email+"---电话："+tel+"---短信验证码："+codeReg+"---密码："+password+"---重密码："+repassword+"---昵称："+nickname);
			if(email=="T" && tel=="T" && codeReg=="T" && repassword=="T" && password=="T" && nickname=="T" ){//文本框验证全部统统
				//$('#btnRegister').removeAttr("disabled");
			   	 if($('input[name="chkLogin"]').prop("checked"))//如果checkbox被选中
			     {
			         //alert("选中");
			   		 swal({
			 			title: "感谢您选择运易达",
			 			text: "激活邮件已经发送到您的邮箱，请您前往邮箱点击激活链接完成注册。",
			 			showCancelButton: false,
			 			confirmButtonColor: "#DD6B55",
			 			confirmButtonText: "现在前往",
			 			closeOnConfirm: false
			 		},
			 		function(){			
			 			//swal("提示信息", "注册成功，正在进入平台......", "success");
			 			btnRegister_click();
			 			//parent.location.href='http://www.hao123.com/mail';
			 				
			 			}); 
			     }
			     else{//如果checkbox未被选中
			         alert('同意协议才可以完成注册！');
			      }
			}
			else{//文本框验证有未通过的
				//alert("请填写好正确的注册信息！");
				hideElement();
				_email=txtEmail_validate();
				if(_email=="T"){
					_tel=txtTel_validate();
					if(_tel=="T"){
						_code=txtCode_validate();
						if(_code=="T"){
							_nickname=txtNickname_validate();
							if(_nickname=="T"){
								_password=txtPassword_validate();
								if(_password=="T"){
									_repassword=txtRepassword_validate();
									if(_repassword=="T"){
									   	 if($('input[name="chkLogin"]').prop("checked"))
									     {
									         //alert("选中");
									   		 swal({
									 			title: "感谢您选择运易达",
									 			text: "激活邮件已经发送到您的邮箱，请您前往邮箱点击激活链接完成注册。",
									 			showCancelButton: false,
									 			confirmButtonColor: "#DD6B55",
									 			confirmButtonText: "现在前往",
									 			closeOnConfirm: false
									 		},
									 		function(){			
									 			//swal("提示信息", "注册成功，正在进入平台......", "success");
									 			btnRegister_click();
									 			parent.location.href='http://www.hao123.com/mail';
									 				
									 			}); 
									     }
									     else{
									         alert('同意协议才可以完成注册！');
									      }
									}else{
										//alert("邮箱："+_email+"---电话："+_tel+"---短信验证码："+_code+"---密码："+_repassword+"---重密码："+repassword+"---昵称："+_nickname);
							
										
									}
								}else{
									
								}
							}else{
								
							}
						}else{
							
						}
					}else{
						
					}
				}else{
					
				}
			 }					   		     
   });
  //邮箱文本框离开焦点
	$txtEmail.blur(function(){	
		hideElement();
		var _isEmail="";
		var _txtEmail_v=$("#txtEmail").val();
		var isEmail = "F";
		var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if (reg.test(_txtEmail_v)){
			isEmail= "T";
		} 
		isEmailRep(_txtEmail_v);
		if (isEmail=="T") {
			_isEmail = "T";
		} else {
			_isEmail = "F";
		}	
		if (_isEmail == "T" && emailReg == "T"){
			email="T";
		}else {
			if(_isEmail == "F" && emailReg == "F"){
				$("#txtEmail-error1").show();					
			}else if(_isEmail == "T" && emailReg == "F"){
				$("#txtEmail-error2").show();				
			}else{
				$("#txtEmail-error1").show();
			}
		}
		//txtEmail_validate();
	});
	
	//手机号文本框离开焦点
/*	$txtTel.blur(function(){	
		hideElement();
		//$('#btnSend').attr('disabled',"true");
		var _txtTel_v=$("#txtTel").val();
		isTelRep(_txtTel_v);
		
		if (isTel(_txtTel_v) == "T" && telReg == "T"){
			//$('#btnSend').removeAttr("disabled");
			document.getElementById ('btnSend').removeAttribute ('disabled');
			tel="T";
		}else {
			document.getElementById ('btnSend').disabled = "disabled";
			if(isTel(_txtTel_v)== "F" && telReg == "F"){
				
				$("#txtTel-error2").hide();
				$("#txtTel-error1").show();					
			}else if(isTel(_txtTel_v) == "T" && telReg== "F"){
			
				$("#txtTel-error2").show();	
				$("#txtTel-error1").hide();
			}else{
			
				$("#txtTel-error1").show();
				$("#txtTel-error2").hide();
			}
		}
		//isBtnEnable();
	});*/
	
	
	//手机号文本框离开焦点
	$txtTel.bind('input propertychange',function(){	
		hideElement();
		//$('#btnSend').attr('disabled',"true");
		var _txtTel_v=$("#txtTel").val();		
		if(isTel(_txtTel_v) == "F" ){
			document.getElementById ('btnSend').disabled = "disabled";
			$("#txtTel-error2").hide();
			$("#txtTel-error1").show();	
		}else{
			isTelRep(_txtTel_v);
			if(telReg == "T"){
				document.getElementById ('btnSend').removeAttribute ('disabled');
				tel="T";
			}else{
				document.getElementById ('btnSend').disabled = "disabled";
				$("#txtTel-error2").show();	
				$("#txtTel-error1").hide();
			}
		}
		
/*		
		if (isTel(_txtTel_v) == "T" && telReg == "T"){
			//$('#btnSend').removeAttr("disabled");
			document.getElementById ('btnSend').removeAttribute ('disabled');
			tel="T";
		}else {
			document.getElementById ('btnSend').disabled = "disabled";
			if(isTel(_txtTel_v)== "F" && telReg == "F"){
				
				$("#txtTel-error2").hide();
				$("#txtTel-error1").show();					
			}else if(isTel(_txtTel_v) == "T" && telReg== "F"){
			
				$("#txtTel-error2").show();	
				$("#txtTel-error1").hide();
			}else{
			
				$("#txtTel-error1").show();
				$("#txtTel-error2").hide();
			}
		}*/
		//isBtnEnable();
	});
	
//手机验证码文本框离开焦点
	$txtCode.blur(function(){
		hideElement();
		if($("#txtCode").val()==""||$("#txtCode").val()==null||$("#txtCode").val()==undefined){
			$("#txtCode-error1").show();
		}else{
			if(isCode($("#txtCode").val())=="T"){
				if(tel=="T"){
					http_login_xt_reg_sms(_txtTel_v,$("#txtCode").val());			
				}	
			}else{
				$("#txtCode-error1").show();
			}
			
		}
			
	});
	/*	//昵称文本框离开焦点
	$txtNickname.blur(function(){
		$("#txtNickname-error1").hide();
		var _txtNickname_v=$("#txtNickname").val();
		//http_login_xt_reg_sms(_txtTel_v,$("#txtCode").val());
		if(isNickname(_txtNickname_v)=="T"){
			nickname="T";
		}else{
			$("#txtNickname-error1").show();
		}
		//isBtnEnable();
	});*/
	//昵称文本框离开焦点
	$txtNickname.blur(function(){	
		hideElement();
		var _txtNickname_v=$("#txtNickname").val();
		
		if(_txtNickname_v==""||_txtNickname_v==null||_txtNickname_v==undefined){
			nickname="F";
			$("#txtNickname-error1").show();
		}else{
			
			if(isNickname(_txtNickname_v) == "F"){
				nickname="F";
				$("#txtNickname-error1").show();
			}else{
				isNicknameRep(_txtNickname_v);
				if(nicknameReg == "T"){
					nickname="T";
				}else{
					nickname="F";
					$("#txtNickname-error2").show();	
					$("#txtNickname-error1").hide();
				}
			}
			
			
/*		if (isNickname(_txtNickname_v) == "T" && nicknameReg == "T"){
			
			nickname="T";
		}else {
			if(isNickname(_txtNickname_v) == "F" && nicknameReg == "F"){
				
				$("#txtNickname-error2").hide();
				$("#txtNickname-error1").show();					
			}else if(isNickname(_txtNickname_v)  == "T" && nicknameReg== "F"){
			
				$("#txtNickname-error2").show();	
				$("#txtNickname-error1").hide();
			}else{
			
				$("#txtNickname-error1").show();
				$("#txtNickname-error2").hide();
			}
		}*/
		}//isBtnEnable();
	});
	//密码文本框离开焦点
	$txtPassword.blur(function(){
		hideElement();
		var _txtPassword_v=$("#txtPassword").val();
		if(isPassword(_txtPassword_v)=="F"){
			$("#txtPassword-error1").show();
		}else{
			password="T";
		}
		//isBtnEnable();
	});
	//企业文本框离开焦点
	$txtQiye.blur(function(){
		hideElement();
		var _txtQiye_v=$("#txtQiye").val();
		//alert(isSql(_txtQiye_v));
		if(isSql(_txtQiye_v)=="T"){
			//_qiye= "T";
			_qiye= "F";
			$("#txtQiye-error1").show();
		}else{
			//password="T";
			
				_qiye= "T";
			
		}
		//isBtnEnable();
	});
	//重输密码文本框离开焦点
	$("#txtRepassword").blur(function(){
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
	});
	//发送按钮点击事件
	$btnSend.click(function(){
		changeStyle();//改变按钮样式+定时器
		btnSend_click();
	});
	
	
}
//发送按钮点击事件逻辑
	function btnSend_click(){
		//changeStyle();
		v_get_userinfo();	
		//alert(_txtTel_v+"===="+_smscode);
		http_post_sms_reg(_txtTel_v,_smscode);
	}
//注册按钮点击事件逻辑
	function btnRegister_click(){
		v_get_userinfo();	
		http_insert_user_xt(_txtEmail_v,_txtTel_v,_txtPassword_v,_txtQiye_v,_txtNickname_v);
		//地址：http://localhost:8080/eyt_xt/uid/
	}
	//改变发送按钮样式
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
/*	function isBtnEnable(){
		if(email=="T" && tel=="T" && codeReg=="T" && repassword=="T" && password=="T" && nickname=="T"){
			$('#btnRegister').removeAttr("disabled");
		}else{
			$('#btnRegister').attr('disabled',"true");
		}
	}*/


