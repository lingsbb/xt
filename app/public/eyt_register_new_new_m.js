/**
 * http请求添加新用户
 */
function http_insert_user_xt_new(_txtEmail_v,_txtTel_v,_txtPassword_v){
    	$.ajax({
		url: '../soa_user',
		type: 'post',
		data: {
	        fun: 'insert_user_xt_new_new',
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
						_emailCode=json.rs[0].emailcode;	
						//alert("尊敬的运易达用户，建议您完善您的个人信息，这样才可以使用发起运单功能！");
						//window.location.href='eyt_index';	
						var content = "尊敬的运易达用户，欢迎您使用本系统，您的激活链接是" +
									"<a href='http://"+g_webserver_ip+g_virtual_dir+"/reg/"+json.rs[0].id+"/"+_emailCode+"'>" +
									"http://"+g_webserver_ip+g_virtual_dir+"/reg/"+json.rs[0].id+"/"+_emailCode+"</a>，请直接点击该链接或将链接地址复制到浏览器地址栏中并敲回车，使用运易达！";
						http_post_email(_txtEmail_v,content);			
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
 * http请求验证邮箱是否被注册
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
 * http请求验证手机号是否被注册  若未注册返回手机验证码
 */
function http_register_user_xt_tel_new(_txtTel_v){
    	$.ajax({
		url: '../soa_user',
		type: 'post',
		data: {
	        fun: 'register_user_xt_tel',
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
						_smscode=json.rs[0].smscode;			
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
/**
 * 发送手机验证码
 */
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
				console.log("http_post_sms_reg=====success");				
			}
			else if (json.status=="404"){
				//alert("请检查网络连接！");
				console.log("http_post_sms_reg=====404");
			}
		},
		error: function() {
			//alert("请检查网络连接！");
			console.log("http_post_sms_reg=====error");
		}
	});

}
/**
 * 校验用户输入的验证码是否正确
 */
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
						_httpCode="T";
					
					}else{						
						
					}			
				}					
			}
			else if (json.status=="404"){
				console.log("http_login_xt_reg_sms===404");
				//alert("请检查网络连接！");
				//return "F";
			}
		},
		error: function() {
			console.log("http_login_xt_reg_sms===error");
			//alert("请检查网络连接！");
			//return "F";
		}
	});
}
/**
 * 发送激活邮件请求
 */
function http_post_email(useremail,content){
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
				window.location.href='reg_email';
			}
			else if (json.status=="404"){
				//alert("请求网络超时");
				window.location.href='reg_email';
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