//====================================================
//模块功能：注册-第二版-废弃 逻辑层
//模块日期：2017-01-20
//模块作者：刘霄
//====================================================

/**
 * 插入账号
 */
function http_insert_user_xt_new(_txtEmail_v,_txtTel_v,_txtPassword_v){
    	$.ajax({
		url: '../soa_user',
		type: 'post',
		data: {
	        fun: 'insert_user_xt_new',
	        p1:_txtEmail_v,
	        p2:_txtTel_v,
	        p3:_txtPassword_v
		},
		async: true,
		timeout : 5000, 
		dataType:'text', 
		contentType: 'application/x-www-form-urlencoded; charset=utf-8', 
		success: function(data) {
			var json=str2json(data);			
			if (json.status=="200"){									
					var result = json.rs[0].result;
					if(result=="1"){
						console.log('id:'+json.rs[0].id);
						console.log('username:'+json.rs[0].nickname);						
						addCookie1("id",json.rs[0].id,"/");
						addCookie1("username",json.rs[0].nickname,"/");
						addCookie1("useremail",_txtEmail_v,"/"); 
						addCookie1("phone",_txtTel_v,"/");	
						alert("尊敬的运易达用户，建议您完善您的个人信息，这样才可以使用发起运单功能！");
						window.location.href='eyt_index';	
									
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
/**
 * 插入邮箱
 */
function http_register_user_xt_email_new(_txtEmail_v){
    	$.ajax({
		url: '../soa_user',
		type: 'post',
		data: {
	        fun: 'register_user_xt_email_new',
	        p1:_txtEmail_v
		},
		async: false,
		timeout : 5000, 
		dataType:'text', 
		contentType: 'application/x-www-form-urlencoded; charset=utf-8', 
		success: function(data) {			
			var json=str2json(data);			
			if (json.status=="200"){									
					var result = json.rs[0].result;
					console.log("http_register_user_xt_email_new======"+result);
					if(result=="1"){						
						_httpEmail="T";			
					}else{
						_httpEmail="F";
					}
									
			}
			else if (json.status=="404"){
				console.log("http_register_user_xt_email_new======404");
				_httpEmail="F";
			}
		},
		error: function() {
			console.log("http_register_user_xt_email_new======error");
			_httpEmail="F";
		}
	});
}
/**
 * 插入电话
 */
function http_register_user_xt_tel_new(_txtTel_v){
    	$.ajax({
		url: '../soa_user',
		type: 'post',
		data: {
	        fun: 'register_user_xt_tel_new',
	        p1:_txtTel_v
		},
		async: false,
		timeout : 5000, 
		dataType:'text', 
		contentType: 'application/x-www-form-urlencoded; charset=utf-8', 
		success: function(data) {			
			var json=str2json(data);			
			if (json.status=="200"){									
					var result = json.rs[0].result;
					console.log("http_register_user_xt_tel_new======"+result);
					if(result=="1"){						
						_httpTel="T";			
					}else{
						_httpTel="F";
					}
									
			}
			else if (json.status=="404"){
				console.log("http_register_user_xt_tel_new======404");
				_httpTel="F";
			}
		},
		error: function() {
			console.log("http_register_user_xt_tel_new======error");
			_httpTel="F";
		}
	});
}