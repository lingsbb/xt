//====================================================
//模块功能：修改我的个人信息--密码 逻辑层
//模块日期：2017-01-20
//模块作者：关宇
//====================================================
/**
 * 修改用户密码
 */
function http_updatePassword(oldPasswordE, qrPasswordE) {
	$('#gloadingForm').modal('show');
	$.ajax({
		url: "../soa_user",
		datatype: 'json',
		type: "post",
		data: {
			fun:"update_userxt_password_for_id",
			p1:_cookierId, // 登录的id 用于关联用
			p2:oldPasswordE, // 输入的email
			p3:qrPasswordE // 输入的email
		},
		success: function (data) {
			if(!data){
				$('#gloadingForm').modal('hide');
				alert("修改密码失败");
				return;
			}
			$('#gloadingForm').modal('hide');
			var jsonData = JSON.parse(data);
			var rsData = jsonData.rs[0].result;
			if (rsData=="1"){
				alert("修改密码成功！");
				// 用改cookie 吗？
				window.location.href="eyt_my_info";
			} else if  (rsData=="2"){ 
				alert("修改密码失败，原密码错误！");
			}else if  (rsData=="0"){
				alert("修改密码失败！");
			}
		},
		error: function() {
			$('#gloadingForm').modal('hide');
			alert("修改密码失败");
		}
	});
}