//====================================================
//模块功能：登陆 模型层
//模块日期：2017-01-20
//模块作者：刘霄
//====================================================

/**
 * 登录http请求
 */
function http_eyt_user_login(username,pwd,ifchk,md5){
	hideElement();
	$.ajax({
		url: '../soa_user',
		type: 'post',
		data: {
	        fun: 'login_xt',
	        p1: username,
	        p2: pwd
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
					var count = json.rs[i].count;
					var email = json.rs[i].email;
					var phone = json.rs[i].phone;
					var qiye = json.rs[i].qiye;
					var id = json.rs[i].id;
					var isclose = json.rs[i].isclose;
					var isout = json.rs[i].isout;
					var activetime = json.rs[i].activetime;	
					var nickname = json.rs[i].nickname;	
					if(count>=1){
						if(isclose==1){
							$txtClose[0].style.display = "";
						}else{
							if(isout==1){
								$txtOut[0].style.display = "";
							}else{
								if(activetime=="1900-01-01 00:00:00"){
									$txtActive[0].style.display = "";
								}else{
									
									if($chkLogin.is(':checked')){
										addCookie("useremail",username,365,"/");  
										addCookie("password",pwd,365,"/");  
										addCookie("id",id,365,"/");
										addCookie("phone",phone,365,"/");
										addCookie("qiye",qiye,365,"/");
										addCookie("username",nickname,365,"/");
									}else{
										addCookie1("useremail",username,"/");  
										addCookie1("password",pwd,"/");  
										addCookie1("id",id,"/");
										addCookie1("phone",phone,"/");
										addCookie1("qiye",qiye,"/"); 
										addCookie1("username",nickname,"/");
									}									  								
									window.location='../public/enter'; 
									//alert(getCookieValue("username"));
								}
							}
							
						}
					
					}else{
						
						$txtError[0].style.display = "";					
					}
				}

			}
			else if (json.status=="404"){
				$txtError[0].style.display = "";
			}
		},
		error: function() {
			$txtError[0].style.display = "";
		}
	});
}
/**
 * 发送邮件请求
 */
function http_post_email(useremail,content){
	//alert(useremail+"===="+content);
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
			parent.location.href='http://www.hao123.com/mail';
		},
		error: function() {
			/*alert("请求网络超时");*/
			parent.location.href='http://www.hao123.com/mail';
		},
		complete : function(XMLHttpRequest,status){
			parent.location.href='http://www.hao123.com/mail';
		}
	});
}
/**
 * 忘记密码获取邮箱验证码
 */
function http_select_email_code(useremail){
	$.ajax({
		url: '../soa_user',
		type: 'post',
		data: {
	        fun: 'select_email_code',
	        p1: useremail
		},
		async: true,
		timeout : 5000, 
		dataType:'text', 
		contentType: 'application/x-www-form-urlencoded; charset=utf-8', 
		success: function(data) {	
			var json=str2json(data);
			if (json.status=="200"){
				var result = json.rs[0].result;
				if (result=="0"){
					//alert("邮箱未注册！");					
				}else{
					var id = json.rs[0].uid;
					addCookie1("id",id,"/");
					addCookie1("useremail",useremail,"/");
					var ecode = json.rs[0].ecode;
					var content = "尊敬的运易达用户，欢迎您使用本系统，您的修改密码链接是http://"+g_webserver_ip+"/eyt_xt/reset/"+id+"/"+ecode;
					// var content = "尊敬的运易达用户，欢迎您使用本系统，您的修改密码链接是" +
					// 			"<a href='http://"+g_msg_url+":8080/eyt_xt/reset/"+id+"/"+_ecode+"'>" +
					// 			"http://"+g_msg_url+":8080/eyt_xt/reset/"+id+"/"+_ecode+"</a>请直接点击该链接或将链接地址复制到浏览器地址栏中并敲回车，使用运易达！";					
					//alert("123"+useremail+"===="+content);
					http_post_email(useremail,content);
					
				}
			}
			else if (json.status=="404"){
				alert("请求网络超时");
			}
		},
		error: function() {
			/*alert("请求网络超时");*/
		}
	});
}

