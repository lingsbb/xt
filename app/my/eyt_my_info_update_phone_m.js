//====================================================
//模块功能：修改我的个人信息--手机号码 逻辑层
//模块日期：2017-01-20
//模块作者：关宇
//====================================================
/**
 * 向数据库存入验证码
 */
function http_send_validateCode_For_updatePhone(){
	$('#gloadingForm').modal('show');
	var phone = $('#newPhone').val();
	$.ajax({
		url: "../soa_user",
		datatype: 'json',
		type
		: "post",
		data: {
			fun:"send_validateCode_For_updatePhone",
			p1:phone // 输入的手机
		},
		success: function (data) {
			if(!data){
				$('#gloadingForm').modal('hide');
				alert("发送验证码失败!");
				return;
			}
			var jsonData = JSON.parse(data);
			var rsData = jsonData.rs[0].result;
			//alert(jsonData);
			if (rsData=="1"){
				var smscode = jsonData.rs[0].smscode;
				http_send_code_Phone(phone, smscode);
			} else if  (rsData=="0"){ 
				$('#gloadingForm').modal('hide');
				alert("发送验证码失败！");
			}
		},
		error: function() {
			$('#gloadingForm').modal('hide');
			alert("发送验证码失败!");
		}
	});
}

/**
 * 向手机发送
 */
function http_send_code_Phone(phone, code) {
	//alert(phone);
	//alert(code);
	$.ajax({
		url: '../sendMsgUpdatePhone',
		type: 'post',
		data: {		        
	        p1:phone,
	        p2:code	       
		},
		async: true,
		timeout : 50000, 
		dataType:'text', 
		contentType: 'application/x-www-form-urlencoded; charset=utf-8', 
		success: function(data) {
	
			$('#gloadingForm').modal('hide');
			if(!data){ // 这个判断是因为  Read timed out 报错
				alert("发送验证码失败！");
			}
			var json=str2json(data);
			if(json.status == "0"){
				alert("发送验证码成功！");
			} else {
				alert("发送验证码失败！");
			}
		
		},
		error: function() {
			$('#gloadingForm').modal('hide');
			alert("发送验证码失败！");
		}
	});

}


/**
 * 提交修改
 */
function http_UpdatePhone(phone,code){

	$('#gloadingForm').modal('show');
//	var phone = $('#newPhone').val();
//	var  vcode = $('#vcode').val();
	$.ajax({
		url: "../soa_user",
		datatype: 'json',
		type: "post",
		data: {
			fun:"update_userxt_phone",
			p1:_cookierId, // 登录的用户id
			p2:phone, // 输入的手机
			p3:code // 输入的验证吗
		},
		success: function (data) {
			$('#gloadingForm').modal('hide');
			var jsonData = JSON.parse(data);
			var rsData = jsonData.rs[0].result;
			//alert(jsonData);
			if (rsData=="1"){
				alert("修改手机成功!");
				window.location.href="eyt_my_info";
			} else if  (rsData=="0"){ 
				alert("修改手机失败!");
			} else if (rsData=="2") {
				alert("修改手机失败,验证码错误");
			}else if (rsData=="3") {
				alert("修改手机号重复");
			}
		},
		error: function() {
			$('#gloadingForm').modal('hide');
			alert("修改手机失败!");
			
		}
	});
}