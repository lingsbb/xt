//====================================================
//模块功能：内部联系人列表页面 逻辑层
//模块日期：2017-01-20
//模块作者：关宇
//====================================================
// 查询内部联系人
/**
 * 查询内部联系人
 */
function search(p,async){
	$.ajax({
		async: async,
		url: "../esoa_user",
		datatype: 'json',
		type: "post",
		data: {
			fun:"select_eyt_concat_in_p",
			p1:p,
			p2:g_numberOfPages,
			p3:_cookierId
		},
		success: function (data1) {
			if(!data1){
				return;
			}
			var jsonData = JSON.parse(data1);
			var totalData = jsonData.total;
			var rowsData = jsonData.rows;
			//alert(rsData);
			g_all=totalData;
			//默认g_numberOfPages=5  可以根据自己模块需要自行该值 如果5可以 就不需要修改
			//g_totalPages=Math.ceil(data1.rows/g_numberOfPages);
			//alert(data1.rows);
			$("#tab").empty();
			for (var i =0; i<rowsData.length; i++ ){
				addTableRows (i, rowsData[i]) ;
			}
			
		},error: function() {
			//alert("添加联系人失败！");
		}
	});
}
// 根据id删除联系人
/**
 * 根据id删除联系人
 */
function http_delete_eyt_concat_in_byid(id){
	//btnSaveForm
	$("#btnSaveForm").attr("disabled", true);
	$("#btnSaveForm").text("正在删除中。。。");
	$.ajax({
		url: "../soa_user",
		datatype: 'json',
		type: "post",
		data: {
			fun:"delete_eyt_concat_in_byid",
			p1:id
		},
		success: function (data) {
			if(!data){
				$("#btnSaveForm").text("确定");
				$("#btnSaveForm").removeAttr("disabled");
				alert("删除联系人失败！");
				return;
			}
			$("#btnSaveForm").text("确定");
			$("#btnSaveForm").removeAttr("disabled");
			var jsonData = JSON.parse(data);
			var rsData = jsonData.rs[0].result;
			if (rsData=="1"){
				alert("删除联系人成功！");
				location.reload(); 
			}  else if  (rsData=="0"){
				alert("删除联系人失败！");
				location.reload(); 
			}
		},error: function() {
			$("#btnSaveForm").text("确定");
			$("#btnSaveForm").removeAttr("disabled");
			alert("删除联系人失败！");
		}
	});
}


/**
 * 发送激活连接 动态append出来的
 */
function btn_Activation(email, inid, btn){
//http://"+g_msg_url+":8080/eyt_xt/reg/"+json.rs[i].uid+"/"+_emailcode;
//	alert(email);
//	alert(inid);
//	var idd = "btnActivation"+inid;
	$(btn).attr("disabled", true);
	$(btn).text("正在发送邮件中。。。");
	//var dizhi = "http://192.168.31.233:8081/eyt_xt/inviter/"+randomWord(false,6);
	// var dizhi = g_invite_url+randomWord(false,6);
	var dizhi = g_invite_url+email;
	$.ajax({
		url: '../sendEmail',
		type: 'get',//get post
		data: {
	        p1: email,
			p2: "激活",
	        p3: dizhi
		},
		async: true,
		timeout : 10000, 
		dataType:'text', 
		contentType: 'application/x-www-form-urlencoded; charset=utf-8',
		beforeSend: function(){ 
   		}, 
		success: function(data) {
			if(!data){
				$(btn).text("激活");
				$(btn).removeAttr("disabled");
				alert("请求网络超时");
				return
			}
			$(btn).text("激活");
			$(btn).removeAttr("disabled");
//			alert(data);
			//alert(data);
			var json=str2json(data);
			var rsData = json.status;
			if (rsData==0){
				alert("发送成功!");
			}else {
				alert("请求网络超时");
			}
		},
		error: function() {
			$(btn).text("激活");
			$(btn).removeAttr("disabled");
			alert("请求网络超时");
			
		},
		complete : function(XMLHttpRequest,status){
		}
	});
}
