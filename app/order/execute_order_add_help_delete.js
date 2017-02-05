//====================================================
//模块功能：执行页面-邀请-删除功能
//模块日期：2017-01-20
//====================================================

/**
 * 删除已选协同者
 * @param uid  用户id 
 * @param power 根据权限判断去哪个表删除协同者 
 */
function btn_Delete_Alert_in_out (uid, power) {
	
	var msg = "您真的确定要删除吗？\n\n删除不可恢复！！！\n\n请确认！！！";
	if (confirm(msg)==true){
		// alert(taskid);
		// http_delete_AllTask_DANGER(taskid);
		// var s=parent.window.document.body.innerHTML;
		http_delete_xt_people_in_out(uid, power);

	}else{
		// alert("不删除");
	}
}	

/**
 * 发送激活连接 点击事件
 */
// function btn_Activation_in_out(email, inid, btn){
// 	//http://"+g_msg_url+":8080/eyt_xt/reg/"+json.rs[i].uid+"/"+_emailcode;
// 	//	alert(email);
// 	//	alert(inid);
// 	//	var idd = "btnActivation"+inid;
// 	// $(btn).attr("disabled", true);
// 	// $(btn).text("正在发送邮件中。。。");
// 	//var dizhi = "http://192.168.31.233:8081/eyt_xt/inviter/"+randomWord(false,6);
// 	// var dizhi = g_invite_url+"?email="+email;
// 	var dizhi = g_invite_url+email;
// 	$.ajax({
// 		url: '../sendEmail',
// 		type: 'post',//get post
// 		data: {
// 	        p1: email,
// 			p2: "激活",
// 	        p3: dizhi
// 		},
// 		async: true,
// 		timeout : 10000, 
// 		dataType:'text', 
// 		contentType: 'application/x-www-form-urlencoded; charset=utf-8',
// 		beforeSend: function(){ 
//    		}, 
// 		success: function(data) {
// 			if(!data){
// 				// $(btn).text("激活");
// 				// $(btn).removeAttr("disabled");
// 				alert("请求网络超时");
// 				return
// 			}
// 			// $(btn).text("激活");
// 			// $(btn).removeAttr("disabled");
// //			alert(data);
// 			//alert(data);
// 			var json=str2json(data);
// 			var rsData = json.status;
// 			if (rsData==0){
// 				alert("发送成功!");
// 			}else {
// 				alert("请求网络超时");
// 			}
// 		},
// 		error: function() {
// 			// $(btn).text("激活");
// 			// $(btn).removeAttr("disabled");
// 			alert("请求网络超时");
			
// 		},
// 		complete : function(XMLHttpRequest,status){
// 		}
// 	});
// }




/**
 * 发送激活连接 点击事件
 */
function btn_Activation_in_out(email, inid, btn){
	//http://"+g_msg_url+":8080/eyt_xt/reg/"+json.rs[i].uid+"/"+_emailcode;
	//	alert(email);
	//	alert(inid);
	//	var idd = "btnActivation"+inid;
	// $(btn).attr("disabled", true);
	// $(btn).text("正在发送邮件中。。。");
	//var dizhi = "http://192.168.31.233:8081/eyt_xt/inviter/"+randomWord(false,6);
	// var dizhi = g_invite_url+"?email="+email;
	var dizhi = g_invite_url+email;
	var htmlval = "";
	htmlval += "<div>你好，您的帐号已经被成功创建！账号为本邮箱！</div>";
	htmlval += "<br /><br /><br />";
	htmlval	+= "<div>运易达将为您提供国际物流云协同系统、云文件存储、企业跨境支付、运踪实时查询等服务您的账户已经开通点击链接<a href="+dizhi+
			">激活</a>即可进入 ，云易达将为您提供最便捷的国际物流体验或者复制链接到您的浏览器</div>";
	htmlval += "<br /><br /><br />";
	htmlval += "<div style="+"color: rgb(66,66,66);"+">为了提升您的用户体验, 我们的开发团队将定期发布新的功能, 敬请期待!</div>";
	htmlval += "<div style="+"color: rgb(66,66,66);"+">如有任何问题，请访问我们的客服中心，或直接客户服务团队： EMAIL:eyt@rueyt.com</div>";
	htmlval += "<div style="+"color: rgb(66,66,66);"+">我们非常期待与您的合作！</div>";
	htmlval += "<br /><br /><br />";
	htmlval += "<div style="+"text-align: right;"+">谨致问候</div>";
	htmlval += "<br /><br /><br />";

	$.ajax({
		url: '../sendEmail',
		type: 'post',//get post
		data: {
	        p1: email,
			p2: "激活",
	        p3: htmlval
		},
		async: true,
		timeout : 10000, 
		dataType:'text', 
		contentType: 'application/x-www-form-urlencoded; charset=utf-8',
		beforeSend: function(){ 
   		}, 
		success: function(data) {
			if(!data){
				// $(btn).text("激活");
				// $(btn).removeAttr("disabled");
				alert("请求网络超时");
				return
			}
			// $(btn).text("激活");
			// $(btn).removeAttr("disabled");
//			alert(data);
			//alert(data);
			var json=str2json(data);
			var rsData = json.status;
			if (rsData==0){
				alert("邮件发送成功!");
			}else {
				alert("请求网络超时");
			}
		},
		error: function() {
			// $(btn).text("激活");
			// $(btn).removeAttr("disabled");
			alert("请求网络超时");
			
		},
		complete : function(XMLHttpRequest,status){
		}
	});
}




/**
 * 根据权限判断去哪个表删除协同者 
 */
function http_delete_xt_people_in_out(uid, power){
	$.ajax({
		url: "../soa_order",
		datatype: 'json',
		type: "post",
		data: {
			fun:"delete_xt_people_in_out",
			p1:uid,
			p2:_taskid,
			p3:power
		},
		success: function (data) {
			if(!data){

				alert("删除协同人失败！");
				return;
			}
			try {
				var jsonData = JSON.parse(data);
				var rsData = jsonData.rs[0].result;
				if (rsData){

			
					var zzz = ","+uid;
					_changed_invitate = _changed_invitate.replace(zzz,"");
					console.log("_changed_invitate====================="+_changed_invitate);
			
					alert("删除协同人成功！");
					$("#DeleteStatus"+uid).remove();//DeleteStatus 是新增加的表格的行id
					$("#selectedUser"+uid).remove();//selectedUser 是以前当前页面的按钮的id
				}  else{
					alert("删除协同人失败！");
				}
			} catch (error) {
				
			}
		},error: function() {
			alert("删除协同人失败！");
		}
	});
}
