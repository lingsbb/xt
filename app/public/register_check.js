//====================================================
//模块功能：注册-废弃 校验
//模块日期：2017-01-20
//模块作者：刘霄
//====================================================

//验证码格式校验
function isCode(code) {
	var reg = /^[0-9]*$/ ;
	if (reg.test(code)){
		return "T";
	} else{
		return "F";
	} 
}


//邮箱格式校验
function isEmail(Email) {
	var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (reg.test(Email)){
		return "T";
	} else{
		return "F";
	} 
}
//邮箱是否注册校验
function isEmailRep(Email) {	 
	$.ajax({
		url: '../soa_user',
		type: 'post',
		async:false,
		data: {
	        fun: 'register_user_xt_email',
			p1:Email
		},
		timeout:5000,
		dataType:'text', 
		contentType: 'application/x-www-form-urlencoded; charset=utf-8',	
		success: function(data) {					
			var json=str2json(data);
			var data= json.rs[0].result;
			if (data=="1") {			
				emailReg = "T";
				
//				return true;
			}else{
//				return false;
				emailReg = "F";
			}			
		},
		error:function(data){
			//alert("1123444");
		}
		
	});
	//return false;
}
//手机号规则校验
function isTel(Tel) {
	var reg = /^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/i;
	if (reg.test(Tel)){
		return "T";
	} else{
		return "F";
	}
}
//手机号是否注册校验
function isTelRep(Tel) {	 
	$.ajax({
		url: '../soa_user',
		type: 'post',
		async:false,
		data: {
	        fun: 'register_user_xt_tel',
			p1:Tel
		},
		timeout:5000,
		dataType:'text', 
		contentType: 'application/x-www-form-urlencoded; charset=utf-8',	
		success: function(data) {					
			var json=str2json(data);
			var data= json.rs[0].result;
			if (data=="1") {			
				telReg = "T";
				_smscode=json.rs[0].smscode;
				$("#txtTel-error1").hide();
//				return true;
			}else{
//				return false;
				telReg = "F";
				$("#txtTel-error1").show();
			}			
		},
		error:function(data){
			//alert("1123444");
		
		}
		
	});
	//return false;
}
//昵称中文校验
function isNickname(Nickname) {
	var reg = /^[\u4E00-\u9FA5A-Za-z]+$/;
	if (reg.test(Nickname)){
		return "T";
	} else{
		return "F";
	}
}
//密码校验
function isPassword(Nickname) {
	var reg = /^[A-Za-z0-9]{6,6}$/;
	if (reg.test(Nickname)){
		return "T";
	} else{
		return "F";
	}
}
//昵称是否注册校验
function isNicknameRep(Nickname) {	 
	$.ajax({
		url: '../soa_user',
		type: 'post',
		async:false,
		data: {
	        fun: 'register_user_xt_nickname',
			p1:Nickname
		},
		timeout:5000,
		dataType:'text', 
		contentType: 'application/x-www-form-urlencoded; charset=utf-8',	
		success: function(data) {					
			var json=str2json(data);
			var data= json.rs[0].result;
			if (data=="1") {			
				nicknameReg = "T";				
//				return true;
			}else{
//				return false;
				nicknameReg = "F";
			}			
		},
		error:function(data){
			//alert("1123444");
		
		}
		
	});
	//return false;
}
//防SQL注入
function isSql(sql){
	var reg= /select|update|delete|exec|count|'|"|=|;|>|<|%/i;
	if (reg.test(sql)){
		return "T";
	} else{
		return "F";
	}
}