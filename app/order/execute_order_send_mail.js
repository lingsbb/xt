//====================================================
//模块功能：执行页面-发送邮件部分
//模块日期：2017-01-20
//====================================================
/**
 * 发送邮件 是不是给提交按钮使用 0-不是给提交按钮用 1-给提交按钮用
 */
var _is_btnCommit='0';

/**
 * 查询到该任务所有协同者，发送邮件的入口函数
 */
function http_select_task_email(content){
	$.ajax({
		url: '../soa_order',
		type: 'post',
		data: {
	        fun: 'select_task_email',
	        p1: _taskid
		},
		async: true,
		timeout : 60000, 
		dataType:'text', 
		contentType: 'application/x-www-form-urlencoded; charset=utf-8', 
		success: function(data) {
			//alert(data);
			var json = str2json(data);
			if (json.status == "200") {
				var femail = json.rs[0].femail;
				var zemail = json.rs[0].zemail;
				var gemail = json.rs[0].gemail;
				// var taskuser = json.rs[0].taskuser;
				// var followuser = json.rs[0].followuser;
				// _followtask = taskuser+","+followuser+"";
				_email=femail+","+zemail+","+gemail+"";
				//zq去除登录人邮箱
				var l = isl(_l);
				if(l == "F"){
					var useremail = getCookieValue("useremail");
					email = _email.replace(useremail+",","");//感觉是个 bug
					sendEmailAndContentJ(email,content);
				}else{
					sendEmailAndContentJ(_email,content);
					
				}
			} else if (json.status == "404") {
				//console.log(" select_task_email 失败！");
			}
		},
		error: function() {
			console.log("请求网络超时");			
		},
		complete : function(XMLHttpRequest,status){
		}
	});
}

/**
 * 最终调用发送邮件函数之前 制定规则
 */
function sendEmailAndContentJ(email,content){
	var userId = getCookieValue("id");
	if (!userId){
		// window.opener=null;
		// window.close();
		// open(location, '_self').close();
		return;
	}
	var rgfn_2='';
	var rgsn_2='';
	$.ajax({
		url: '../soa_order',
		type: 'post',
		data: {
	        fun: 'select_followuserAndTaskWorkuser',
	        p1: userId,
			p2: _taskid
		},
		async: true,
		timeout : 10000, 
		dataType:'text', 
		contentType: 'application/x-www-form-urlencoded; charset=utf-8',
		beforeSend: function(){ 
			
   		}, 
		success: function(data) {
			
			if(!data){
				alert("网络异常");
				return;
			}
			var jsonData = JSON.parse(data);
			if (jsonData.status=="200"){
				var zzzz = jsonData.rs[0];
				var aaaa = zzzz.result;
				if (aaaa == "1") {
					rgfn_2=randomlyGeneratedFourNumbers_2();
					rgsn_2=randomlyGeneratedSixEnglish_2();
					var timestamp = (new Date()).valueOf() +"";
					var urlstr =content+" ，协同地址："+g_http_webserver_ip+g_virtual_dir+"/public/eyt_index?u="+userId +"&amp;t="+_taskid + "&amp;p="+ rgfn_2 +"a" + "&amp;l="+rgsn_2;
					http_post_email(email,urlstr);
				} else {
					rgfn_2=randomlyGeneratedFourNumbers_2();
					var timestamp = (new Date()).valueOf() +"";
					rgsn_2=randomlyGeneratedSixEnglish_2();
					var urlstr =content+" ，协同地址："+g_http_webserver_ip+g_virtual_dir+"/public/eyt_index?u="+userId +"&amp;t="+_taskid + "&amp;p="+ rgfn_2 +"b" + "&amp;l="+rgsn_2;
					http_post_email(email,urlstr);
				}

			} else {
				 alert("网络异常");
			}
	
		},
		error: function() {

			alert("网络异常");
		}
		,
		complete : function(XMLHttpRequest,status){
		}
	});
}
/**
 * 关闭页面
 */
function closewin(){
	
	var l = isl(_l);
	if(l == "T"){
		window.opener = null; 
		window.open('', '_self'); 
		window.close() 
		// var browserName=navigator.appName; //获取浏览器名称  
		// if (browserName=="Netscape") {   
		// 	// window.open('','_self','');   
		// 	// window.close(); 
		// 	window.opener = null;
   		// 	//window.open("", "_self");
		// 	window.open('', '_self', '');
   		// 	window.close();
		// }
		// else
		// {   
		// 	if (browserName=="Microsoft Internet Explorer") {     
		// 		window.opener = "test";   
		// 		window.close();   
		// 	}   
		// }
	}
	else{
		// if (_taskid){
		// 	window.parent.closeTaskTabAndFrame(_taskid);
		// }
		// else{
		// 	window.location.href="../order/eyt_order_task_index?orderid="+_ordid;
		// }
		window.location.href="../order/eyt_order_task_index?orderid="+_ordid;
	}
	
}
/**
 * 最终实际发送邮件请求 _email,_content
 */
function http_post_email(_email,urlstr){
	$.ajax({
		url: '../sendEmail',
		type: 'get',
		data: {		        
	        p1: _email,
			p2: "任务通知",
	        p3: urlstr
		},
		async: true,
		timeout : 10000, 
		dataType:'text', 
		contentType: 'application/x-www-form-urlencoded; charset=utf-8',
		beforeSend: function(){ 
   		}, 
		success: function(data) {	
			if (_is_btnCommit=='1')//给提交按钮使用
			{
				_is_btnCommit='0';
				closewin();
				// var l = isl(_l);
				// if(l == "T"){
				// 	window.opener=null;
				// 	window.close();
				// }else{
				// 	window.location.href="../order/eyt_order_task_index?orderid="+_ordid;
				// }
			}		
		},		
		error: function() {
			if (_is_btnCommit=='1')//给提交按钮使用
			{
				_is_btnCommit='0';
				closewin();
				// var l = isl(_l);
				// if(l == "T"){
				// 	window.opener=null;
				// 	window.close();
				// }else{
				// 	window.location.href="../order/eyt_order_task_index?orderid="+_ordid;
				// }
			}
		},
		complete : function(XMLHttpRequest,status){
		}
	});
}

// 随机生成4个数字
function randomlyGeneratedFourNumbers_2() {
	var rgfn_2 = ""; // 把值制空
	var charactors="1234567890";
	var value='',i;
	for(j=1;j<=4;j++){
		i = parseInt(10*Math.random()); 　
		value = value + charactors.charAt(i);
	}
	rgfn_2 = value;// 把随机出来的数字赋值过去
	return rgfn_2;
}

// 随机生成6个数字
function randomlyGeneratedSixEnglish_2() {
	var rgsn_2 = ""; // 把值制空
	var charactors="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var value='',i;
	for(j=1;j<=6;j++){
		i = parseInt(26*Math.random()); 　
		value = value + charactors.charAt(i);
	}
	rgsn_2 = value;// 把随机出来的数字赋值过去
	return rgsn_2;
}

