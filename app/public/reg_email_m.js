//====================================================
//模块功能：注册以后的去邮箱激活帐号的提示页 逻辑层
//模块日期：2017-01-20
//模块作者：刘霄
//====================================================

function http_select_email_url(smtp_in){
	$.ajax({
		url: '../soa_user',
		type: 'post',
		data: {
	        fun: 'select_email_url',
	        p1:smtp_in
		},
		async: true,
		timeout : 5000, 
		dataType:'text', 
		contentType: 'application/x-www-form-urlencoded; charset=utf-8', 
		success: function(data) {
			var json=str2json(data);			
			if (json.status=="200"){
					var rows = json.rs[0].rows;
					var url = json.rs[0].url;
					v_set_urlinfo(rows,url)
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