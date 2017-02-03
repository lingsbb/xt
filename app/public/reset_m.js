//====================================================
//模块功能：密码重置 逻辑层
//模块日期：2017-01-20
//模块作者：刘霄
//====================================================

/**
 * 修改密码http请求
 */
function http_update_password (_userId_v,_txtPassword_v){
	//alert(_txtPassword_v);
	//addCookie1("id",4,"/");
	$.ajax({
		url: '../soa_user',
		type: 'post',
		data: {
	        fun: 'update_password',
	        p1: _userId_v,
	        p2: _txtPassword_v
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
						alert("修改成功");
						http_select_usernameByEmail();
						window.location.href="../public/eyt_index";
					}else{
						alert("修改失败！");
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
/**
 * 获取用户昵称的http请求
 */
function http_select_usernameByEmail (){
	var _userEmail_v=getCookieValue("useremail");
	$.ajax({
		url: '../soa_user',
		type: 'post',
		data: {
	        fun: 'select_usernameByEmail',
	        p1: _userEmail_v
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
					var nickname = json.rs[i].nickname;
					addCookie1("username",nickname,"/");
				
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