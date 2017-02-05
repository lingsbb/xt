//====================================================
//模块功能：个人信息页面 逻辑层
//模块日期：2017-01-20
//模块作者：关宇
//====================================================
/**
 * 查询根据id查询出个人信息
 */
function http_select_myinfo_forId(){
	$.ajax({
		url: '../soa_user',
		type: 'post',
		data: {
	        fun: 'select_myinfo_id',
	        p1: _cookierId
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

				load_success = "1";

				var rsData = jsonData.rs[0];
				//alert(rsData); info_cn info_nickname info_email info_phone info_qiye info_department info_QQ
//				if(!rsData.name){
//					$("#info_name").val("无");
//				} else {
//					$("#info_name").val(rsData.name);
//				}
// 				var load_over_cn = "无"; 
// var load_over_nickname = "无"; 
// var load_over_qiye = "无"; 
// var load_over_department = "无";
// var load_over_QQ = "无";



				if(!rsData.cn){
					$("#info_cn").val("无");
					load_over_cn = "无";
				} else {
					$("#info_cn").val(rsData.cn);
					load_over_cn = rsData.cn;
				}
				if(!rsData.nickname){
					$("#info_nickname").val("无");
					load_over_nickname = "无";
				} else {
					$("#info_nickname").val(rsData.nickname);
					load_over_nickname = rsData.nickname;
				}
				if(!rsData.email){
					$("#info_email").val("无");
				} else {
					$("#info_email").val(rsData.email);
				}
				if(!rsData.phone){
					$("#info_phone").val("无");
				} else {
					$("#info_phone").val(rsData.phone);
				}
				if(!rsData.qiye){
					$("#info_qiye").val("无");
					load_over_qiye = "无";
				} else {
					$("#info_qiye").val(rsData.qiye);
					load_over_qiye = rsData.qiye;
				}
				if(!rsData.qq){
					$("#info_QQ").val("无");
					load_over_QQ = "无";
				} else {
					$("#info_QQ").val(rsData.qq);
					load_over_QQ = rsData.qq;
				}
				if(!rsData.department){
					$("#info_department").val("无");
					load_over_department = "无";
				} else {
					$("#info_department").val(rsData.department);
					load_over_department = rsData.department;
				}

			}
			else if (json.status=="404"){
				alert("获取详细信息失败");
			}
		},
		error: function() {
			alert("获取详细信息失败");
			
		},
		complete : function(XMLHttpRequest,status){
		}
	});
}


/**
 * 修改个人信息
 */
function http_updateMyInfo(new_cn, new_nickname, new_qiye, new_department, new_QQ) {
		// $("#btnUpdateNewNickname").attr("disabled", true);
		// $("#btnUpdateNewNickname").text("正在修改中。。。");
		$.ajax({
		url: "../soa_user",
		datatype: 'json',
		type: "post",
		data: {
			fun:"update_userxt_myinfo",
			p1:_cookierId, // 登录的id 用于关联用
			p2:new_cn, // 输入的email
			p3:new_nickname,
			p4:new_qiye,
			p5:new_department,
			p6:new_QQ
		},
		success: function (data) {
			// $("#btnUpdateNewMyInfo").text("修改");
			// $("#btnUpdateNewMyInfo").removeAttr("disabled");
			if(!data){
				alert("修改个人信息失败!");
				return;
			}
			// alert(data);
			var jsonData = JSON.parse(data);
			var rsData = jsonData.rs[0].result;
			if (rsData=="1"){
				var rsqiyeid = jsonData.rs[0].qiyeid;
				// addCookie1("id",json.rs[0].id,"/");
				addCookie1("username",new_nickname,"/");
				addCookie1("qiye",rsqiyeid,"/");
				// addCookie1("useremail",username,"/");  
				// addCookie1("password",pwd,"/");  
				// addCookie1("id",id,"/");
				// addCookie1("phone",phone,"/");
				// addCookie1("qiye",qiye,"/"); 
				// addCookie1("username",nickname,"/");
				window.parent.v_setUserName(new_nickname);
		
				alert("修改个人信息成功！");

				// var statusaaa= "1";
				var statusaaa = getQueryString("iscreatefail"); 
				if (statusaaa == "a"){// 陌生男的夜调过来是a
					window.parent.closeTaskTabAndFrame(_cookierId);
				} else {
					window.location.reload();//刷新当前页面.
				}


				// window.location.reload();//刷新当前页面.
				// //window.location.href="eyt_concat_in";
			} else if  (rsData=="0"){ 
				alert("修改个人信息失败！");
			}else if  (rsData=="2"){ 
				alert("修改个人信息[昵称]已存在，请换一个！");
			}
		},
		error: function() {
			// $("#btnUpdateNewMyInfo").text("修改");
			// $("#btnUpdateNewMyInfo").removeAttr("disabled");
			alert("修改个人信息失败!");
		}
	});
}




/**
 * 修改昵称
 */
// function http_updateNickname () {
// //	$('#gloadingForm').modal('show');
// 	$("#btnUpdateNewNickname").attr("disabled", true);
// 	$("#btnUpdateNewNickname").text("正在修改中。。。");
// 	//alert("http_updateNickname");
// 	var nicknameValue = $('#textNewNickname').val();
// 	$.ajax({
// 		url: "../soa_user",
// 		datatype: 'json',
// 		type: "post",
// 		data: {
// 			fun:"update_userxt_nickname",
// 			p1:_cookierId, // 登录的id 用于关联用
// 			p2:nicknameValue // 输入的email
// 		},
// 		success: function (data) {
// 			$("#btnUpdateNewNickname").text("确定");
// 			$("#btnUpdateNewNickname").removeAttr("disabled");
// //			$('#gloadingForm').modal('hide');
// 			var jsonData = JSON.parse(data);
// 			var rsData = jsonData.rs[0].result;
// 			if (rsData=="1"){
// 				alert("修改昵称成功！");
// 				window.location.reload();//刷新当前页面.
// 				//window.location.href="eyt_concat_in";
// 			} else if  (rsData=="0"){ 
// 				alert("修改昵称失败！");
// 			}else if  (rsData=="1"){ 
// 				alert("修改昵称已存在，请换一个！");
// 			}
// 		},
// 		error: function() {
// 			$("#btnUpdateNewNickname").text("确定");
// 			$("#btnUpdateNewNickname").removeAttr("disabled");
// //			$('#gloadingForm').modal('hide');
// 			alert("修改昵称失败!");
// 		}
// 	});
// }

/**
 * 修改手机
 */
// function http_updateQQ () {
// 	//alert("http_updateQQ"); btnUpdateNewQQ
// 	$("#btnUpdateNewQQ").attr("disabled", true);
// 	$("#btnUpdateNewQQ").text("正在修改中。。。");
// 	var qqValue = $('#textNewQQ').val();
// 	$.ajax({
// 		url: "../soa_user",
// 		datatype: 'json',
// 		type: "post",
// 		data: {
// 			fun:"update_userxt_qq",
// 			p1:_cookierId, // 登录的id 用于关联用
// 			p2:qqValue // 输入的email
// 		},
// 		success: function (data) {
// 			$("#textNewQQ").text("确定");
// 			$("#textNewQQ").removeAttr("disabled");
// 			var jsonData = JSON.parse(data);
// 			var rsData = jsonData.rs[0].result;
// 			if (rsData=="1"){
// 				alert("修改QQ成功！");
// 				 window.location.reload();//刷新当前页面.
// 				//window.location.href="eyt_concat_in";
// 			} else if  (rsData=="0"){ 
// 				alert("修改QQ失败！");
// 			}
// 		},
// 		error: function() {
// 			$("#textNewQQ").text("确定");
// 			$("#textNewQQ").removeAttr("disabled");
// 			alert("修改QQ失败!");
// 		}
// 	});
// }

/**
 * 修改昵称
 */
// function http_updateCn() {
// 	$("#btnUpdateNewCn").attr("disabled", true);
// 	$("#btnUpdateNewCn").text("正在修改中。。。");
// 	var cnValue = $('#textNewCn').val();
// 	$.ajax({
// 		url: "../soa_user",
// 		datatype: 'json',
// 		type: "post",
// 		data: {
// 			fun:"update_userxt_cn",
// 			p1:_cookierId, // 登录的id 用于关联用   btnUpdateNewCn
// 			p2:cnValue // 输入的email
// 		},
// 		success: function (data) {
// 			$("#btnUpdateNewCn").text("确定");
// 			$("#btnUpdateNewCn").removeAttr("disabled");
// 			var jsonData = JSON.parse(data);
// 			var rsData = jsonData.rs[0].result;
// 			if (rsData=="1"){
// 				alert("修改姓名成功！");
// 				 window.location.reload();//刷新当前页面.
// 				//window.location.href="eyt_concat_in";
// 			} else if  (rsData=="0"){ 
// 				alert("修改姓名失败！");
// 			}
// 		},
// 		error: function() {
// 			$("#btnUpdateNewCn").text("确定");
// 			$("#btnUpdateNewCn").removeAttr("disabled");
// 			alert("修改姓名失败!");
// 		}
// 	});
// }

/**
 * 修改企业
 */
// function http_updateQiye() {
// 	$("#btnUpdateNewQiye").attr("disabled", true);
// 	$("#btnUpdateNewQiye").text("正在修改中。。。");
// 	var qiyeValue = $('#textNewQiye').val();
// 	$.ajax({
// 		url: "../soa_user",
// 		datatype: 'json',
// 		type: "post",
// 		data: {
// 			fun:"update_userxt_qiye",
// 			p1:_cookierId, // 登录的id 用于关联用   btnUpdateNewQiye
// 			p2:qiyeValue // 输入的email
// 		},
// 		success: function (data) {
// 			$("#btnUpdateNewQiye").text("确定");
// 			$("#btnUpdateNewQiye").removeAttr("disabled");
// 			var jsonData = JSON.parse(data);
// 			var rsData = jsonData.rs[0].result;
// 			if (rsData=="1"){
// 				alert("修改企业成功！");
// 				 window.location.reload();//刷新当前页面.
// 				//window.location.href="eyt_concat_in";
// 			} else if  (rsData=="0"){ 
// 				alert("修改企业失败！");
// 			}
// 		},
// 		error: function() {
// 			$("#btnUpdateNewQiye").text("确定");
// 			$("#btnUpdateNewQiye").removeAttr("disabled");
// 			alert("修改企业失败!");
// 		}
// 	});
// }

/**
 * 修改部门
 */
// function http_updateDepartment() {
// 	$("#btnUpdateNewDepartment").attr("disabled", true);
// 	$("#btnUpdateNewDepartment").text("正在修改中。。。");
// 	var departmentValue = $('#textNewDepartment').val();
// 	$.ajax({
// 		url: "../soa_user",
// 		datatype: 'json',
// 		type: "post",
// 		data: {
// 			fun:"update_userxt_department",
// 			p1:_cookierId, // 登录的id 用于关联用 btnUpdateNewDepartment
// 			p2:departmentValue // 输入的email
// 		},
// 		success: function (data) {
// 			$("#btnUpdateNewDepartment").text("确定");
// 			$("#btnUpdateNewDepartment").removeAttr("disabled");
// 			var jsonData = JSON.parse(data);
// 			var rsData = jsonData.rs[0].result;
// 			if (rsData=="1"){
// 				alert("修改部门成功！");
// 				 window.location.reload();//刷新当前页面.
// 				//window.location.href="eyt_concat_in";
// 			} else if  (rsData=="0"){ 
// 				alert("修改部门失败！");
// 			}
// 		},
// 		error: function() {
// 			$("#btnUpdateNewDepartment").text("确定");
// 			$("#btnUpdateNewDepartment").removeAttr("disabled");
// 			alert("修改部门失败!");
// 		}
// 	});
// }
// 