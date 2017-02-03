//====================================================
//模块功能：添加外部联系人 逻辑层
//模块日期：2017-01-20
//模块作者：关宇
//====================================================
// 发送post请求 向tab_user_xt表中
/**
 * 添加外部联系人
 */
function  http_insert_userxt_userhelpout (){
	var emailValue = $('#email').val();
	$.ajax({
		url: "../soa_user",
		datatype: 'json',
		type: "post",
		data: {
			fun:"insert_userxt_userhelpout",
			p1:_cookierId, // 登录的id 用于关联用
			p2:emailValue // 输入的email
		},
		success: function (data) {
			if(!data){
				$('#gloadingForm').modal('hide');
				alert("添加联系人失败！");
				return;
			}
			$('#gloadingForm').modal('hide');
			var jsonData = JSON.parse(data);
			var rsData = jsonData.rs[0].result;
			if (rsData=="1"){
				alert("添加联系人成功！");
				window.location.href="eyt_concat_out";
			} else if  (rsData=="2"){ 
				alert("已经是您的联系人了！");
				window.location.href="eyt_concat_out";
			}else if  (rsData=="0"){
				alert("添加联系人失败！");
			}else if  (rsData=="3"){
		
				alert("不能添加自己为联系人！");
			}
		},error: function() {
			$('#gloadingForm').modal('hide');
			alert("添加联系人失败！");
		}
	});
}