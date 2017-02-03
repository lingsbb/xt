//==========================================
//模块功能：执行页面-分享
//模块日期：2017-01-20
//==========================================
var rgfn = ""; //随机生成的4位数字
var rgsn = ""; //随机生成的6位数字
var allurl = ""; //全路径
var noallurl = ""; //?后面的

$(document).ready(function() {
	//randomlyGeneratedFourNumbers();
	var l = getQueryString("l");
	var T = isl_a(l);
	if(!_userId_v){

	} else {
		if(T == "T"){

		} else {
			$('#fenxiangdropdown').show();
		}	
	}

	// $('#fenxiangdropdown').on("click",function(e){
	// 	http_select_ttet_byTaskIdAndUserId();
	// }); 


	


	//点击开启关闭按钮的点时间 静态
	// $('#clickCloseAndOpen').click(function(e){
	// 	e.stopPropagation();
	// 	var status_clickCloseAndOpen = $('#clickCloseAndOpen').text();
    //     if(status_clickCloseAndOpen == "点击开启"){// 如果是开启 执行方法
	// 		//iimage spantext
	// 		$("#iimageicon").attr("class", "fa fa-2x fa-user");
	// 		$("#spantext").html("此任务已分享");
	// 		// 把文字改成点击关闭
	// 		$('#clickCloseAndOpen').html("点击关闭");    
	// 		// 启用赋值连接按钮
	// 		$("#btnCopyLink").attr("class","btn btn-primary");
	// 		// 显示下面
	// 		$('#linkPermissions').show();
    //     } else if (status_clickCloseAndOpen=="点击关闭") { // 如果是关闭 执行方法
	// 		$("#iimageicon").attr("class", "fa fa-2x fa-lock");
	// 		$("#spantext").html("私有表格,只有成员可以访问");
	// 		// 把文字改成点击开启
	// 		$('#clickCloseAndOpen').html("点击开启");
	// 		// 禁用赋值连接按钮
	// 		$("#btnCopyLink").attr("class","btn btn-primary disabled");
	// 		// 隐藏下面的
    //         $('#linkPermissions').hide();	
    //     }
	// });

		//点击开启关闭按钮的点时间
	$('#clickCloseAndOpen').click(function(e){
		e.stopPropagation();
		$('#clickCloseAndOpen').hide();	
		$('#clickCloseAndOpenNO').show();	
		http_update_ttet_isclose();
	});



	// 让页面默认显示只读
	// var a=$('input[id="checkRadio1"]').val();	
	// $('#myArea').html(a);



	// 只读可写的事件（只读）
	$("#checkRadio1").change(function (){ // 触发只读事件
		$("#checkRadio1").attr("disabled",true);
		$("#checkRadio2").attr("disabled", true);
		http_update_ttet_ab();
		// // 获得已选中的单选的值
		// var a=$('input[id="checkRadio1"]').filter(':checked').val();
		// // 赋值过去
		// $('#myArea').html(a);
	});



	// 只读可写的事件（可写）
	$("#checkRadio2").change(function (){ //拨通
		$("#checkRadio1").attr("disabled",true);
		$("#checkRadio2").attr("disabled", true);
		http_update_ttet_ab();
		// // 获得已选中的单选的值
		// var b=$('input[id="checkRadio2"]').filter(':checked').val();
		// // 赋值过去
		// $('#myArea').html(b);
	});


					
	// 设置默认是更改
	// $('#disNone').html("更改");
					


	// 改收起和更改的文字转换
	$('#disNone').click(function(e){
		e.stopPropagation();
		// 获取页面上的目前状态额值
		var status_disNone = $('#disNone').text();
        if(status_disNone == "更改"){
			// 显示单选框
			 $('#dis').show();
			// 修改状态值
			 $('#disNone').html("收起"); 
		} else if (status_disNone == "收起"){
			// 隐藏单选框
			 $('#dis').hide();
			// 修改状态值
			 $('#disNone').html("更改");
		}
	});



});
			


function http_select_ttet_byTaskIdAndUserId() {
	$('#fenxiangdropdown').hide();
	$('#fenxiangdropdownNO').show();
	if (!_taskid) {
		$('#fenxiangdropdownNO').hide();
		$('#fenxiangdropdown').show();
		
		alert("任务异常");
		return;
	}
	if (!_userId_v){
		$('#fenxiangdropdownNO').hide();
		$('#fenxiangdropdown').show();
		return;
		// alert("");
	}

	// 生成url
	shengchengtempurl();
		// $('#fenxiangdropdown').click(function(e){
		// 	// 请求网络
		// 		if($('#fenxiangdropdownli').attr("class")=="dropdown"){
		// 			$('#fenxiangdropdownli').attr("class","dropdown open");
		// 		} else {
		// 			$('#fenxiangdropdownli').attr("class","dropdown");
		// 		}
		// 	}); 
	$.ajax({
		url: '../soa_order',
		type: 'post',
		data: {
	        fun: 'select_ttet_byTaskIdAndUserId',
	        p1: _userId_v,
			p2:_taskid,
			// p2: _taskid,
			p3: noallurl
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
				if (aaaa == "1") { // 1是已经有了 就返回结构
					console.log("http_select_ttet_byTaskIdAndUserId======================1");
					// 界面一上来有Onclick 然后移除 
			 		$('#fenxiangdropdown').removeAttr("onclick");
					// 再添加展示点击事件
					$('#fenxiangdropdown').on("click",function(e){
						// 如果当前是隐藏状态 就显示 否则就隐藏
						if($('#fenxiangdropdownli').attr("class")=="dropdown"){
							$('#fenxiangdropdownli').attr("class","dropdown open");
						} else { 
							$('#fenxiangdropdownli').attr("class","dropdown");
						}
					});
					showFenxiang(zzzz);

				
				} else if(aaaa == "2") { // 2是现在插入一条 然后返回数据显示 默认是关闭 1是关闭
					console.log("http_select_ttet_byTaskIdAndUserId======================2");
					// 界面一上来有Onclick 然后移除 
			 		$('#fenxiangdropdown').removeAttr("onclick");
					// 再添加展示点击事件
					$('#fenxiangdropdown').on("click",function(e){
						// 如果当前是隐藏状态 就显示 否则就隐藏
						if($('#fenxiangdropdownli').attr("class")=="dropdown"){
							$('#fenxiangdropdownli').attr("class","dropdown open");
						} else { 
							$('#fenxiangdropdownli').attr("class","dropdown");
						}
					});
					showFenxiang(zzzz);
				} else if (aaaa == "3") {
					alert("网络异常显示分享失败");
				}
			
				// var rsData = jsonData.rs[0];
				// //alert(rsData);
				//  $('#in_cn').html( rsData.cn);
				//  $('#in_nickname').html(rsData.nickname);
				//  $('#in_email').html(rsData.email);
				//  $('#in_phone').html(rsData.phone);
				//  $('#in_qiye').html(rsData.qiye);
				//  $('#in_department').html(rsData.department);
				//  $('#in_QQ').html(rsData.qq);
				//  var isout = "在职";
				//  if(rsData.isout == 0) {
				// 	 isout = "在职";
				//  } else {
				// 	 isout = "离职"
				//  }
				//  $('#in_isout').html(isout);
			} else {
				 alert("网络异常");
			}
			$('#fenxiangdropdownNO').hide();
			$('#fenxiangdropdown').show();
		},
		error: function() {
			$('#fenxiangdropdownNO').hide();
			$('#fenxiangdropdown').show();
			alert("网络异常");
		}
		,
		complete : function(XMLHttpRequest,status){
		}
	});

}						



function showFenxiang(data) {
	// 请求成功展示出来  需要改====================================
	var a = g_shared_address;//g_serverip+":8080"+"/eyt_xt/order/eyt_order_task_index2?";
	var b = data.tempurl;
	var c = a + b ;
	$('#inputCopyLink').val(c);
	// 获取这个是否已经关闭
	var bbbb = data.isclose+"";
	if (bbbb == "1"){
		$("#iimageicon").attr("class", "fa fa-2x fa-lock");
		$("#spantext").html("私有表格,只有成员可以访问");
		// 把文字改成点击关闭
		$('#clickCloseAndOpen').html("点击开启");  
		// 禁用赋值连接按钮
		$("#btnCopyLink").attr("class","btn btn-primary disabled");
		// 赋值 链接权限 右面的字
		$('#disNone').html("更改"); 
		// 显示链接权限
		$('#linkPermissions').hide();				
		if(b.indexOf("a&l") > 0 ) {
			$('#checkRadio2').removeAttr("checked");
			$("#checkRadio1").attr("checked","checked");
			// $("#rdo1").removeAttr("checked");
   			// alert('b中包含a&l字符串');
			var a=$('input[id="checkRadio1"]').filter(':checked').val();
			$('#myArea').html(a);
		} else {
			// alert('b中不包含a&l字符串');
			$('#checkRadio1').removeAttr("checked");
			$("#checkRadio2").attr("checked","checked");
			// 赋值 链接权限 右面的字
			var b=$('input[id="checkRadio2"]').filter(':checked').val();
		 	$('#myArea').html(b);
		}
		// 显示下面的单选
		$('#dis').hide();
	} else{
		$("#iimageicon").attr("class", "fa fa-2x fa-user");
		$("#spantext").html("此任务已分享");
		// 把文字改成点击关闭
		$('#clickCloseAndOpen').html("点击关闭");  
		// 禁用赋值连接按钮
		$("#btnCopyLink").attr("class","btn btn-primary"); 
		// 赋值 链接权限 右面的字
		$('#disNone').html("收起"); 
		// 显示链接权限
		$('#linkPermissions').show();
		if(b.indexOf("a&l") > 0 ) {
			$('#checkRadio2').removeAttr("checked");
			$("#checkRadio1").attr("checked","checked");
			
   			// 赋值 链接权限 右面的字
			var a=$('input[id="checkRadio1"]').filter(':checked').val();	
			$('#myArea').html(a);
		} else {
			$('#checkRadio1').removeAttr("checked");
			$("#checkRadio2").attr("checked","checked");
			
			// alert('b中不包含a&l字符串');
			// 赋值 链接权限 右面的字
			var b=$('input[id="checkRadio2"]').filter(':checked').val();
		 	$('#myArea').html(b);
		}
		// 显示下面的单选
		$('#dis').show();
	}
	$('#fenxiangdropdownli').attr("class","dropdown open");
}


// 生成url
function shengchengtempurl() {
	allurl ="";
	noallurl = "";
	randomlyGeneratedFourNumbers();

	//https://59.110.162.124:8443/svn
	// 59.110.160.193:8080
	//var ip = "https://59.110.160.193:8080"
	// var ip = "http://localhost:8080"; //需要改=======================
	// var ip = g_serverip+":8080";
	var dizhi = "/eyt_xt/order/eyt_order_task_index2?";
	var canshu_u = "u@"+_userId_v+"*";
	var canshu_t = "t@" + _taskid +"*";
	var canshu_p = "p@"+ rgfn +"a" + "*";
	var timestamp = (new Date()).valueOf() +"";
	var canshu_l = "l@" + timestamp;
	//_taskid
	//_userId_v
	//allurl = "http://localhost:8080/eyt_xt/order/eyt_order_task_index2?t=1482904195&p=1234a&l=4234234";
	//noalluel = "t=1482904195&p=1234a&l=4234234";
	// allurl = ip + dizhi + canshu_u + canshu_t + canshu_p + canshu_l;
	noallurl = canshu_u + canshu_t + canshu_p + canshu_l;
}			




// 随机生成4个数字
function randomlyGeneratedFourNumbers() {
	rgfn = ""; // 把值制空
	var charactors="1234567890";
	var value='',i;
	for(j=1;j<=4;j++){
		i = parseInt(10*Math.random()); 　
		value = value + charactors.charAt(i);
	}
	rgfn = value;// 把随机出来的数字赋值过去
}

// 随机生成6个数字
// function randomlyGeneratedSixNumbers() {
// 	rgsn = ""; // 把值制空
// 	var charactors="1234567890";
// 	var value='',i;
// 	for(j=1;j<=6;j++){
// 		i = parseInt(10*Math.random()); 　
// 		value = value + charactors.charAt(i);
// 	}
// 	rgsn = value;// 把随机出来的数字赋值过去
// }


// 打开和关闭post
function http_update_ttet_isclose() {
	$.ajax({
		url: '../soa_order',
		type: 'post',
		data: {
	        fun: 'update_ttet_isclose',
	        p1: _userId_v,
			p2:_taskid
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
				showFenxiang(zzzz);
			} else {
				 alert("网络异常");
			}
			$('#clickCloseAndOpenNO').hide();	
			$('#clickCloseAndOpen').show();	
			
		},
		error: function() {
			$('#clickCloseAndOpenNO').hide();	
			$('#clickCloseAndOpen').show();
			alert("网络异常");
		},
		complete : function(XMLHttpRequest,status){
		}
	});
}


// 只读和可写post
function http_update_ttet_ab() {
	$.ajax({
		url: '../soa_order',
		type: 'post',
		data: {
	        fun: 'update_ttet_ab',
	        p1: _userId_v,
			p2:_taskid
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
				showFenxiang(zzzz);
				//var aaaa = zzzz.result;
				
			
				// var rsData = jsonData.rs[0];
				// //alert(rsData);
				//  $('#in_cn').html( rsData.cn);
				//  $('#in_nickname').html(rsData.nickname);
				//  $('#in_email').html(rsData.email);
				//  $('#in_phone').html(rsData.phone);
				//  $('#in_qiye').html(rsData.qiye);
				//  $('#in_department').html(rsData.department);
				//  $('#in_QQ').html(rsData.qq);
				//  var isout = "在职";
				//  if(rsData.isout == 0) {
				// 	 isout = "在职";
				//  } else {
				// 	 isout = "离职"
				//  }
				//  $('#in_isout').html(isout);
			} else {
				 alert("网络异常");
			}
			$("#checkRadio1").removeAttr("disabled");
			$("#checkRadio2").removeAttr("disabled");
		},
		error: function() {
			$("#checkRadio1").removeAttr("disabled");
			$("#checkRadio2").removeAttr("disabled");
			alert("网络异常");
		}
		,
		complete : function(XMLHttpRequest,status){
		}
	});
}



function isl_a(value) {
	var reg = /^[0-9]*$/;
	if (reg.test(value)){
		// _userId_v='600';
		return "T";	// T 是全是数字
	} else{
		return "F";
	}
}