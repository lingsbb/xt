//====================================================
//模块功能：内部联系人详情 逻辑层
//模块日期：2017-01-20
//模块作者：关宇
//====================================================
/**
 * 用户详情
 */
function http_select_user_xt_byid(){
	$.ajax({
		url: '../soa_user',
		type: 'post',
		data: {
	        fun: 'select_user_xt_byid',
	        p1: _id
		},
		async: true,
		timeout : 10000, 
		dataType:'text', 
		contentType: 'application/x-www-form-urlencoded; charset=utf-8',
		beforeSend: function(){ 
			
   		}, 
		success: function(data) {
			if(!data){
				alert("获取详细信息失败");
				return;
			}
			var jsonData = JSON.parse(data);
			if (jsonData.status=="200"){
				var rsData = jsonData.rs[0];
				//alert(rsData);
				 $('#in_cn').html( rsData.cn);
				 $('#in_nickname').html(rsData.nickname);
				 $('#in_email').html(rsData.email);
				 $('#in_phone').html(rsData.phone);
				 $('#in_qiye').html(rsData.qiye);
				 $('#in_department').html(rsData.department);
				 $('#in_QQ').html(rsData.qq);
				 var isout = "在职";
				 if(rsData.isout == 0) {
					 isout = "在职";
				 } else {
					 isout = "离职"
				 }
				 $('#in_isout').html(isout);
			}
			else if (json.status=="404"){
				alert("获取详细信息失败");
			}
		},
		error: function() {
			alert("获取详细信息失败");
			
		}
		,
		complete : function(XMLHttpRequest,status){
		}
	});
}