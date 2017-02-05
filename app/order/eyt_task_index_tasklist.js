
//====================================================
//模块功能：任务列表
//模块日期：2017-01-20
//模块作者：关宇
//====================================================
var _currentTaskDetailId = 0;//当前任务详情id   -> by zqx

/**
 * 按订单查询个订单下的任务
 */
function search(p,async){
	//清空数量
	$('#sumTask').html("");
	v_get();
	//获取界面输入
	$.ajax({
		async: async,
		url: "../esoa_order",
		datatype: 'json',
		type: "post",
		data: {
			fun:'select_task_xt_byorder',
			p1:p,
			p2:g_numberOfPages,
			p3:_txtTaskCn_v,//任务名称
			p4:_orderid,//订单号
			p5:_userId
			
		},
		success: function (data1) {
			//alert('11');
			if (data1 != null) {
				var jsonData = JSON.parse(data1);
				var totalData = jsonData.total;
				/*alert(totalData);*/
				if(totalData!=0){
					var rowsData = jsonData.rows;
					g_all=totalData;
					//显示任务数量
					$('#sumTask').html(totalData+'个任务正在进行');
					$("#tab").empty();
					//首先清空表格
					//显示分页
					$("#div_page_count").show();
					$("#div_paginator").show();
					
					for (var i =0; i<rowsData.length; i++ ){
						//添加每行
						addTableRows (i, rowsData[i]) ;
					}
				}else{
					$("#tab").empty();
					//隐藏分页
					$("#div_page_count").hide();
					$("#div_paginator").hide();
				}
				
			}
		}
	});
}

/**
 * 添加每行
 */
function addTableRows (index, item) { //遍历返回的json
	
	var taskid = item.taskid;//任务id
	// //第一个任务
	// if(!index){
	// 	selectDetailByTaskid(taskid);
	// }
	var status = item.status;//状态
	var cn = item.cn;//任务名称
	var createtime = item.createtime;//创建时间
	var createuser = item.createuser;//发起人
	var shifoukedu = "1"; // 是否只读
	var isstart = item.isstart; // 1-开始工作  0-没开始工作
	//alert(item.isRead);
	shifoukedu = item.isRead; // 是否只读
/*	var taskworkuser = item.taskworkuser;//执行人(串)
	var followuser = item.followuser;//参与人(串)
*/	
	//创建人
	var newcreateuser = createuser.substring(0, 1); 
	var statusStr="";
	//如果状态为0，1,2
	if(status=="0"){
		statusStr='<span class="label label-default">进行中</span>';
	}else if(status=="1"){
		statusStr='<span class="label label-primary">已完成</span>';
	}else{
		statusStr='<span class="label label-danger">返工</span>';
	}
	


	//添加基础数据
	var s = "";
	if (isstart == "0") {
	//  s='<tr>'+ '<td>'+(index+1)+'</td>'+
	// '<td class="project-status">'+statusStr+'</td>'+
	// 	'<td class="project-title">'+
	// 	'<a target="_self" onclick="gotoZhiXingYeMian('+taskid+','+shifoukedu+')">'+cn+'</a>'+

	// 	// '<a target="_self" onclick="toExecute('+taskid+')">'+cn+'</a>'+ //20170124 又不打开心页了
	// 	//'<a target="_self" onclick="selectDetailByTaskid('+taskid+')">'+cn+'</a>'+ // 20170110改动 改成跳转
	// 	' <br/>'+
	// ' <small>创建于'+ createtime+'</small></td>'+
	// '<td class="project-people" id="people'+index+'">发&nbsp;&nbsp;起&nbsp;&nbsp;人&nbsp;&nbsp;&nbsp;：<a data-toggle="tooltip" title="'+createuser+'"><span class="btn1  wenzi" style="background-color: #ed5565;margin-left:5px"><p style="margin-left: -8px;margin-top: -1px;">'+newcreateuser
	// +'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onclick="deleteAllTaskDANGER('+taskid+');" class="btn btn-danger " style="height:30px;padding-top:2px;margin-top:-3px;"><span style="font-size:16px">删除<span></button>'+
	// +'</p></span></a></td>'+
	// '</tr>';

	s='<tr>'+ '<td>'+(index+1)+'</td>'+
	'<td class="project-status">'+statusStr+'</td>'+
		'<td class="project-title">'+
		'<a target="_self" onclick="gotoZhiXingYeMian('+taskid+','+shifoukedu+')">'+cn+'</a>'+

		// '<a target="_self" onclick="toExecute('+taskid+')">'+cn+'</a>'+ //20170124 又不打开心页了
		//'<a target="_self" onclick="selectDetailByTaskid('+taskid+')">'+cn+'</a>'+ // 20170110改动 改成跳转
		' <br/>'+
	' <small>创建于'+ createtime+'</small></td>'+
	'<td class="project-people" id="people'+index+'">发&nbsp;&nbsp;起&nbsp;&nbsp;人&nbsp;&nbsp;&nbsp;：<a data-toggle="tooltip" title="'+createuser+'"><span class="btn1  wenzi" style="background-color: #ed5565;margin-left:5px"><p style="margin-left: -8px;margin-top: -1px;">'+newcreateuser+'</p></td>'
	+'<td><button onclick="deleteAllTaskDANGER('+taskid+');" class="btn btn-danger " style="height:30px;padding-top:2px;margin-top:-3px;"><span style="font-size:16px">删除<span></button>'+
	'</span></a></td>'+
	'</tr>';



	} else {
		 s='<tr>'+ '<td>'+(index+1)+'</td>'+
	'<td class="project-status">'+statusStr+'</td>'+
		'<td class="project-title">'+
		'<a target="_self" onclick="gotoZhiXingYeMian('+taskid+','+shifoukedu+')">'+cn+'</a>'+
		' <br/>'+
	' <small>创建于'+ createtime+'</small></td>'+
	'<td class="project-people" id="people'+index+'">发&nbsp;&nbsp;起&nbsp;&nbsp;人&nbsp;&nbsp;&nbsp;：<a data-toggle="tooltip" title="'+createuser+'"><span class="btn1  wenzi" style="background-color: #ed5565;margin-left:5px"><p style="margin-left: -8px;margin-top: -1px;">'+newcreateuser
	+'</p></span></a></td>'+
	'</tr>';
	}
	$("#tab").append(s);
}

//获取任务名称内容
function v_get(){
	_txtTaskCn_v=!$txtTaskCn.val()?"*":$txtTaskCn.val();
}

/**
 * 删除任务
 */
function deleteAllTaskDANGER(taskid) {
	var msg = "您真的确定要删除吗？\n\n删除不可恢复！！！\n\n请确认！！！";
	if (confirm(msg)==true){
		http_delete_AllTask_DANGER(taskid);
	}else{
		// alert("不删除");
	}
}

/**
 * 执行删除的后台
 */
function http_delete_AllTask_DANGER(taskid) {
	var orderid = unescape(getQueryString("orderid"));
	$.ajax({
		url: '../soa_order',
		type: 'post',//get post
		data: {
			fun:'delete_AllTask_DANGER',
	        p1: taskid,
			p2:orderid
		},
		async: true,
		timeout : 10000, 
		dataType:'text', 
		contentType: 'application/x-www-form-urlencoded; charset=utf-8',
		beforeSend: function(){ 
   		}, 
		success: function(data) {
			// alert(data);
			if(!data){
				alert("请求网络超时(error:DAD00001)");
				return
			}
			var json=str2json(data);
			var rsStatus = json.status;
			if (rsStatus == "200") {
				var rsRs = json.rs[0];
				// alert("rsRs============="+rsRs);
				var rsS = rsRs.result;
				// alert("rsS============="+rsS);
				if (rsS == "1") {
					// alert("成功！");
					refreshPage_DAD();
					// window.parent.document.getElementById("#tab-1").html("");
					// window.parent.document.getElementById("#tab-2").html("");
					// window.parent.document.getElementById("#tab-3").html("");

				}else if(rsS == "2"){
					alert("任务已经开始，不能删除");
				} else {
					alert("删除失败!(error:DAD00003)");
				}

			} else {
				alert("删除失败!(error:DAD00004)");
			}
		},
		error: function() {
			alert("请求网络超时(error:DAD00002)");
		},
		complete : function(XMLHttpRequest,status){
		}
	});
}

/**
 * 刷新左侧任务列表
 */
function refreshPage_DAD() {
	// 刷新左侧任务列表
	search("1",true); // eyt_task_index_m.js
	startPagebar();

	// 刷新右侧我的桌面
	http_select_task_by_orderid();	//刷新任务选项
	select_mydesktop(); // create_order_m.js
	// 调用父窗口的方法,刷新右上角
	var userId_DAD = getCookieValue("id");
	// 先清空在插入
	parent.window.document.getElementById('tab-1').innerHTML="";
	parent.window.document.getElementById('tab-2').innerHTML="";
	parent.window.document.getElementById('tab-3').innerHTML="";
	// $('#tab-1').prepend(s);
	window.parent.http_select_task_push_message(userId_DAD); // index_m.js
}

// 20170110 跳转到执行页面
function gotoZhiXingYeMian(taskid, isRead) {
	console.log("isRead=================="+isRead);
	randomlyGeneratedFourNumbers_a();
	randomlyGeneratedSixEnglish_a()
	var a = "";
	a = isRead;
	if(a == "1"){
		a = "a";
	}else {
		a = "b";
	}
	var dizhi = "eyt_order_task_index2?";
	var canshu_u = "u="+_userId+"&";
	var canshu_t = "t=" + taskid +"&";
	var canshu_p = "p="+ rgfn_a + a + "&";
	var canshu_l = "l=" + rgsn_a;
	var all = dizhi + canshu_u+canshu_t+canshu_p+canshu_l;

	console.log(all);

	window.location.href=all;
}

// 随机生成4个数字
function randomlyGeneratedFourNumbers_a() {
	rgfn_a = ""; // 把值制空
	var charactors="1234567890";
	var value='',i;
	for(j=1;j<=4;j++){
		i = parseInt(10*Math.random()); 　
		value = value + charactors.charAt(i);
	}
	rgfn_a = value;// 把随机出来的数字赋值过去
}

// 随机生成6个数字
function randomlyGeneratedSixEnglish_a() {
	rgsn_a = ""; // 把值制空
	var charactors="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var value='',i;
	for(j=1;j<=6;j++){
		i = parseInt(26*Math.random()); 　
		value = value + charactors.charAt(i);
	}
	rgsn_a = value;// 把随机出来的数字赋值过去
}

/**
 * 订单任务查询  因为需求改变  在点击上传按钮弹出的时候 需要查询它  现在不用了
 */
function http_select_task_by_orderid() {

	$.ajax({
		url : '../soa_order',
		type : 'post',
		data : {
			fun : 'select_task_by_orderid',
			p1:_orderid,
			p2:_userId
		},
		async : true,
		timeout : 10000,
		dataType : 'text',
		contentType : 'application/x-www-form-urlencoded; charset=utf-8',
		beforeSend : function() {
		},
		success : function(data) {
			var json = str2json(data);
			if (json.status == "200") {
				var rs = json.rs;
				$taskConfig.html("");
				$.each(rs, function(i, obj) {
					var currForm = "";
					if(i==0){
						currForm ='<span class="btn btn-primary2" style="margin: 2px;" onclick="setFormTaskText('+i+','+obj.id+')" >'+obj.cn+'</span>';//<i class="fa fa-remove"></i>
						selectTask = obj.id;					
					}else{
						currForm = '<span class="btn btn-primary1" style="margin: 2px;" onclick="setFormTaskText('+i+','+obj.id+')" >'+obj.cn+'</span>';//<i class="fa fa-check"></i>
					}
					$taskConfig.append(currForm);
				});
			} else if (json.status == "404") {
				console.log(" http_select_task_by_orderid 失败！");
			}
		},
		error : function() {
			console.log(" http_select_task_by_orderid 失败！");

		},
		complete : function(XMLHttpRequest, status) {
		}
	});
}

/**
 * 生成邀请随机码
 * @param randomFlag
 * @param min
 * @param max
 * @returns {String}
 */
function randomWord(randomFlag, min, max) {
	var str = "", range = min, arr = [ '0', '1', '2', '3', '4', '5', '6', '7',
			'8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
			'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
			'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
			'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
			'Y', 'Z' ];

	// 随机产生
	if (randomFlag) {
		range = Math.round(Math.random() * (max - min)) + min;
	}
	for (var i = 0; i < range; i++) {
		pos = Math.round(Math.random() * (arr.length - 1));
		str += arr[pos];
	}
	return str;
}