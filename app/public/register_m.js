//====================================================
//模块功能：注册-废弃 逻辑层
//模块日期：2017-01-20
//模块作者：刘霄
//====================================================
//查询所有企业的http请求（未使用）
function http_select_qiye_cn_All(){
	$.ajax({
		url: '../soa_user',
		type: 'post',
		data: {
	        fun: 'select_qiye_cn_All'
		},
		async: true,
		timeout : 5000, 
		dataType:'text', 
		contentType: 'application/x-www-form-urlencoded; charset=utf-8', 
		success: function(data) {
			var json=str2json(data);			
			if (json.status=="200"){
				for(var i=0;i<json.rs.length;i++)
				{
					var obj = new Object(); 
					var name = json.rs[i].cn;
					obj.title=name;
					arr.push(obj);				
				}	
				//alert(JSON.stringify(arr));
				//startComplate();
			}
			else if (json.status=="404"){
				alert("请检查网络连接！");
			}
		},
		error: function() {
			alert("请检查网络连接！");
		}
	});
}


function startComplate(){
	$("#txtQiye").bigAutocomplete({
		width:543,
		data:arr,
		callback:function(data){
			//alert(data.title);
			$("#txtQiye").val(data.title);
		}
	});
}

//添加新用户
function http_insert_user_xt(_txtEmail_v,_txtTel_v,_txtPassword_v,_txtQiye_v,_txtNickname_v){
	_txtQiye_v=(!_txtQiye_v?'*':_txtQiye_v);
	$.ajax({
		url: '../soa_user',
		type: 'post',
		data: {
	        fun: 'insert_user_xt',
	        p1:_txtEmail_v,
	        p2:_txtTel_v,
	        p3:_txtPassword_v,
	        p4:_txtQiye_v,
	        p5:_txtNickname_v
		},
		async: true,
		timeout : 5000, 
		dataType:'text', 
		contentType: 'application/x-www-form-urlencoded; charset=utf-8', 
		success: function(data) {
			var json=str2json(data);			
			if (json.status=="200"){
				for(var i=0;i<json.rs.length;i++)
				{					
					var result = json.rs[i].result;
					if(result=="1"){
						_emailcode=json.rs[i].emailcode;
						addCookie1("id",json.rs[i].uid,"/");
						addCookie1("useremail",_txtEmail_v,"/"); 
						addCookie1("phone",_txtTel_v,"/");
						addCookie1("username",_txtNickname_v,"/");
						//var content = "尊敬的运易达用户，欢迎您使用本系统，您的激活链接是" +
								//"<a href='http://"+g_msg_url+":8080/eyt_xt/reg/"+json.rs[i].uid+"/"+_emailcode+"'>" +
								//"http://"+g_msg_url+":8080/eyt_xt/reg/"+json.rs[i].uid+"/"+_emailcode+"</a>请直接点击该链接或将链接地址复制到浏览器地址栏中并敲回车，使用运易达！";
						var content = "尊敬的运易达用户，欢迎您使用本系统，您的激活链接是http://"+g_webserver_ip+"/eyt_xt/reg/"+json.rs[i].uid+"/"+_emailcode+"请直接点击该链接或将链接地址复制到浏览器地址栏中并敲回车，使用运易达！";
						//alert(_txtEmail_v+"-------"+content);
						http_post_email(_txtEmail_v,content);
						
					}
								
				}					
			}
			else if (json.status=="404"){
				alert("请检查网络连接！");
			}
		},
		error: function() {
			alert("请检查网络连接！");
		}
	});
}
//校验用户输入的验证码是否正确
function http_login_xt_reg_sms(_txtTel_v,_txtCode_v){
	$.ajax({
		url: '../soa_user',
		type: 'post',
		data: {
	        fun: 'login_xt_reg_sms',
	        p1:_txtTel_v,
	        p2:_txtCode_v
		},
		async: false,
		timeout : 5000, 
		dataType:'text', 
		contentType: 'application/x-www-form-urlencoded; charset=utf-8', 
		success: function(data) {
			var json=str2json(data);			
			if (json.status=="200"){
				for(var i=0;i<json.rs.length;i++)
				{					
					var result = json.rs[i].result;
					if(result=="1"){
						codeReg="T";
						
						//$('#btnRegister').removeAttr("disabled");
						$("#txtCode-error1").hide();
						//return "T";
					}else{						
						$("#txtCode-error1").show();
						//return "F";
					}			
				}					
			}
			else if (json.status=="404"){
				
				alert("请检查网络连接！");
				//return "F";
			}
		},
		error: function() {
			
			alert("请检查网络连接！");
			//return "F";
		}
	});
}
//发送短信验证码请求
function http_post_sms_reg(_txtTel_v,_smscode){
	$.ajax({
		url: '../sendMsgRegister',
		type: 'post',
		data: {		        
	        p1:_txtTel_v,
	        p2:_smscode	       
		},
		async: true,
		timeout : 50000, 
		dataType:'text', 
		contentType: 'application/x-www-form-urlencoded; charset=utf-8', 
		success: function(data) {
			var json=str2json(data);			
			if (json.status=="200"){
				for(var i=0;i<json.rs.length;i++)
				{					
					var result = json.status;
					if(result=="0"){
						//alert(result);
						
					}
								
				}					
			}
			else if (json.status=="404"){
				alert("请检查网络连接！");
			}
		},
		error: function() {
			alert("请检查网络连接！");
		}
	});

}
//发送邮件请求
function http_post_email(useremail,content){
	//alert(_userId_v);
	$.ajax({
			url : '../sendEmail',
			type : 'get',
			data : {
				p1 : useremail, 
				p2 : "俄运通激活通知", 
				p3 : content 
		},
		async: true,
		timeout : 10000, 
		dataType:'text', 
		contentType: 'application/x-www-form-urlencoded; charset=utf-8',
		beforeSend: function(){ 
   		}, 
		success: function(data) {
			window.location.href='reg_email';	
			var json=str2json(data);
			if (json.status=="200"){				
			
			}
			else if (json.status=="404"){
				alert("请求网络超时");
			}
		},
		error: function() {
			window.location.href='reg_email';
			/*alert("请求网络超时");*/
		},
		complete : function(XMLHttpRequest,status){
			window.location.href='reg_email';
		}
	});
}


//======================文本框验证逻辑========================
function txtEmail_validate(){
	hideElement();
	var _txtNickname_v=$("#txtNickname").val();
	isNicknameRep(_txtNickname_v);
	
	if (isNickname(_txtNickname_v) == "T" && nicknameReg == "T"){
		return "T";
		//nickname="T";
	}else {
		return "F";
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
	}
}
function txtTel_validate(){
	hideElement();
	//$('#btnSend').attr('disabled',"true");
	var _txtTel_v=$("#txtTel").val();
	isTelRep(_txtTel_v);
	
	if (isTel(_txtTel_v) == "T" && telReg == "T"){
		document.getElementById ('btnSend').removeAttribute ('disabled');
		//$('#btnSend').removeAttr("disabled");
		//tel="T";
		return "T";
	}else {
		document.getElementById ('btnSend').disabled = "disabled";
		return "F";
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
}
function txtCode_validate(){
	hideElement();
//	if(txtTel_validate()=="T"){
//		http_login_xt_reg_sms(_txtTel_v,$("#txtCode").val());			
//		if(codeReg=="T"){
//			return "T";
//		}else{
//			return "F";
//		}
//	}
	if($("#txtCode").val()==""||$("#txtCode").val()==null||$("#txtCode").val()==undefined){
		$("#txtCode-error1").show();
		return "F";
	}else{
		if(isCode($("#txtCode").val())=="T"){
			if(tel=="T"){
				http_login_xt_reg_sms(_txtTel_v,$("#txtCode").val());	
				if(codeReg=="T"){
					return "T";
				}else{
					return "F";
				 }
			}	
		}else{
			$("#txtCode-error1").show();
			return "F";
		}
	}

}
function txtNickname_validate(){
	hideElement();
	var _txtNickname_v=$("#txtNickname").val();
	isNicknameRep(_txtNickname_v);
	if(_txtNickname_v==""||_txtNickname_v==null||_txtNickname_v==undefined){
		return "F";
		$("#txtNickname-error1").show();
	}else{
	if (isNickname(_txtNickname_v) == "T" && nicknameReg == "T"){
		return "T";
		//nickname="T";
	}else {
		return "F";
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
	}
	}
}
function txtPassword_validate(){
	hideElement();
	var _txtPassword_v=$("#txtPassword").val();
	if(isPassword(_txtPassword_v)=="F"){
		return "F";
		$("#txtPassword-error1").show();
	}else{
		//password="T";
		return "T";
	}
}
function txtRepassword_validate(){
	hideElement();
	var _txtRepassword_v=$("#txtRepassword").val();
	if(_txtRepassword_v!=$("#txtPassword").val()){
		$("#txtRepassword-error1").show();
		return "F";
	}else{
		return "T";
	}
}
function txtQiye_validate(){
	hideElement();
	var _txtQiye_v=$("#txtQiye").val();
	if(isSql(_txtQiye_v)=="F"){
		if(_txtQiye_v==""||_txtQiye_v==null||_txtQiye_v==undefined){
			return "T";
		}else{
			return "F";
			$("#txtQiye-error1").show();
		}

	}else{
		//password="T";
		return "T";
	}
}