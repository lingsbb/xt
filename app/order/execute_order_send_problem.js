//====================================================
//模块功能：执行页面-发送团队消息 反馈问题
//模块日期：2017-01-20
//====================================================
/**
 * 发送团队消息按钮
 */
function btnSend_click() {
	_txtTeam = $("#txtTeam").val();
	if (_txtTeam == "" || _txtTeam == null || _txtTeam == undefined) {
		alert("发送消息不能为空！");
	} else {
		checkBtnSend(_txtTeam);
		//http_insert_task_push_team();
	}
}

/**
 * 实际发生消息的过程
 */
function checkBtnSend(txtTeam){
	var regs = [/[^\u4E00-\u9FA5A-Za-z0-9,.，。]+$/,/\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/, /0?(13|14|15|18)[0-9]{9}/];
	for(var i = 0; i < regs.length; i++){
		if (regs[i].test(txtTeam)) {
			alert("对不起，您发送了平台禁止的非法信息，请重新发送！");
			return false;
		}
	}
	http_insert_task_push_team();
//	return true;
}

/**
 * 调用JMS超过后插入日志  0-状态通知 1-操作日志 2-工作流通知 3-讨论
 */
function http_insert_task_push_team(){
	var newUserID = "";
	if(!_userId_v){
		newUserID = "600";
	} else {
		newUserID = _userId_v;
	}
	$.ajax({
		url: '../soa_order',
		type: 'post',
		data: {
	        fun: 'insert_task_push_team',
	        p1: _taskid,
	        p2: "3",
	        p3: _txtTeam,
	        p4: newUserID
		},
		async: true,
		timeout : 5000, 
		dataType:'text', 
		contentType: 'application/x-www-form-urlencoded; charset=utf-8', 
		success: function(data) {
			var json=str2json(data);
			if (json.status=="200"){
				
				var ctime = json.rs[0].createtime;
				var str = createTeamMessage(_taskid,_txtTeam,ctime);
				try
 				 {
 				 //adddlert("Welcome guest!");
				  var toptic = window.parent.dingyueMap[_taskid];
				  window.parent.publish(toptic,str);
 				 }
				catch(err)
  				{
  				txt="There was an error on this page.\n\n";
  				txt+="Error description: " + err.message + "\n\n";
  				txt+="Click OK to continue.\n\n";
  				//alert(txt);
 				 }
				
				//var toptic = window.parent.dingyueMap[_taskid];
				//var str = "{\"taskid\":\"1482714581\",\"type\":\"-1\",\"msgtext\":\"444444444\",\"createtime\":\"2016-12-26 09:38:46\",\"nickname\":\"刘霄\"}"
				//window.parent.publish(toptic,str);
				$("#txtTeam").val("");
				$("#divSend").html("");
				http_select_task_push_team();
			}else{
				console.log("发送push失败");		
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
 * 查询团队信息
 */
function http_select_task_push_team(){
	$.ajax({
		url: '../soa_order',
		type: 'post',
		data: {
	        fun: 'select_task_push_team',
	        p1: _taskid
		},
		async: true,
		timeout : 60000, 
		dataType:'text', 
		contentType: 'application/x-www-form-urlencoded; charset=utf-8', 
		success: function(data) {
			var json=str2json(data);
//			alert(data);
			if (json.status=="200"){
				$("#divSend").html("");
				var jsonData = json.rs;
				for(var i=0;i<jsonData.length;i++)
				{	
					//  不知道为什么要赋值给全局变量
					var info =  json.rs[i].info;
					var createtime = json.rs[i].createtime;
					var nickname =  json.rs[i].nickname;
					addRow(createtime,info,nickname);

//					_info = json.rs[i].info;
//					_createtime = json.rs[i].createtime;
//					_nickname = json.rs[i].nickname;
//					addRow(_createtime,_info,_nickname);

				}
//				addRow(_createtime,_info,_nickname);
				
			}else {
//				alert("发送失败");		
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
 * 添加执行任务信息 给JMS服务器 0-状态通知 1-操作日志 2-工作流通知 3-讨论
 */
function http_insert_task_push_execute(content){
	var userId=_userId_v;
	var l = isl(_l);
	if(l == "T"){
		userId='600';
	}			
	$.ajax({
		url: '../soa_order',
		type: 'post',
		data: {
	        fun: 'insert_task_push_team',
	        p1: _taskid,
	        p2: "1",
	        p3: content,
	        p4: userId
		},
		async: true,
		timeout : 5000, 
		dataType:'text', 
		contentType: 'application/x-www-form-urlencoded; charset=utf-8', 
		success: function(data) {
			var json=str2json(data);
			if (json.status=="200"){
				
				var ctime = json.rs[0].createtime;
				var str = createTeamMessage_execute(_taskid,content,ctime);
				try
 				 {
					//adddlert("Welcome guest!");
					var toptic = window.parent.dingyueMap[_taskid];
					$("#txtTeam").val("");
					// http_insert_task_push_team(content);
					//var str = "{\"taskid\":\"1482714581\",\"type\":\"-1\",\"msgtext\":\"444444444\",\"createtime\":\"2016-12-26 09:38:46\",\"nickname\":\"刘霄\"}"
					window.parent.publish(toptic,str);
					//$("#txtTeam").val("");
 				 }
				catch(err)
  				{
					txt="There was an error on this page.\n\n";
					txt+="Error description: " + err.message + "\n\n";
					txt+="Click OK to continue.\n\n";
					//alert(txt);
 				 }
			}else{
				console.log("发送push失败");		
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
 * 生成发送消息结构体（反馈问题） 
 */
function createTeamMessage(task_id,msgbody,dbcreatetime){
	var TeamMessage = {
		taskid: task_id,
		type: "-1",//mqtt.js 团队消息和右上角同时通知
		msgtext: msgbody,
		createtime: dbcreatetime,
		nickname: _nickname
	};
	return JSON.stringify(TeamMessage);
}
/**
 * 生成发送消息结构体（点击提交按钮等操作）
 */
function createTeamMessage_execute(task_id,msgbody,dbcreatetime){
	var TeamMessage = {
		taskid: task_id,
		type: "1",//mqtt.js 操作日志，只在右上角的通知，在系统
		msgtext: msgbody,
		createtime: dbcreatetime,
		nickname: _nickname
	};
	return JSON.stringify(TeamMessage);
}

/**
 * 团队消息
 */
function addRow(createtime,info,nickname){
	var newnickname = nickname.substring(0, 1);
	var s=''+
	  '<div class="feed-element" style="margin-right: 30px;" >'+
	  '<a  data-toggle="tooltip" title="'+nickname+'">'+
	  '<span class="btn1  wenzi" style="background-color: #1ab394;">'+
		'<p style="margin-left: -8px;margin-top: -1px;">'+newnickname+'</p>'+
	  '</span></a>'+
		'<div class="media-body ">'+
			'<strong></strong> '+
			'<br>'+
			'<small class="text-muted">'+createtime+' </small>'+
		'<div class="well">'+info+''+
	 '</div></div>'+
	 '</div>';
	// var s=''+
	// 	'<div class="author-name">'+
	// 		''+nickname+'<small class="chat-date">'+
	// 		''+createtime+''+
	// 	'</small>'+
	// 	'</div>'+
	// 	'<div class="chat-message active">'+
	// 		''+info+''+
	// 	'</div>';
   	$('#divSend').prepend(s);
}