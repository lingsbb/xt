//====================================================
//模块功能：执行页面-邀请-添加功能
//模块日期：2017-01-20
//====================================================
/**
 * 点击添加内部协同者按钮 弹出对话框
 */
function btnInsideAdd_Click(){
	// search_status= "1";
	// // $('#modJoinTaskWorker').modal('show');
	// // http_selcet_user_in_or_out("2");
	// http_selcet_user_in_or_out("1");
	// search('1',false);
	//startPagebar();
	$("#oneOutPeople").val("");
	$("#oneInPeople").val("");
	_changed_invitate = "";// 点击按钮就制成空
	console.log("_changed_invitate====================="+_changed_invitate);
	$('#modJoinTaskWorker').modal({backdrop: 'static', keyboard: false});//显示对话框
	// $('#modJoinTaskWorker').modal('show');
	// 先发送请求 在show出来
}

/**
 * 点击添加外部协同者按钮 弹出对话框
 */
function btnExternalAdd_Click(){
	// search_status= "1";
	// // $('#modJoinTaskWorker').modal('show');
	// // http_selcet_user_in_or_out("2");
	// http_selcet_user_in_or_out("1");
	// search('1',false);
	//startPagebar();
	$("#oneOutPeople").val("");
	$("#oneInPeople").val("");
	_changed_invitate = "";// 点击按钮就制成空
	console.log("_changed_invitate====================="+_changed_invitate);
	$('#modFollower').modal({backdrop: 'static', keyboard: false});//显示对话框
	// $('#modJoinTaskWorker').modal('show');
	// 先发送请求 在show出来
}

/**
 * 点击下拉框某个item给文本框赋值（内部）
 */
function liaClick(email) {
	// alert(email);
	$("#oneInPeople").val(email);
	// 
}

/**
 * 点击下拉框某个item给文本框赋值（外部）
 */
function liaClick_out(email) {
	// alert(email);
	$("#oneOutPeople").val(email);
	// 
}


/**
 *  添加内部或者外部协同者的按钮点击事件
 *  @param power 权限 编辑 1 只读 0
 * 	@param inOrOut 外部 1 内部 0
 */
function addContactWithPower(power, inOrOut) {
	 
	if(!inOrOut){ // 内部
		var email = $("#oneInPeople").val();
		if (!isEmail(email)) {
			alert("邮箱格式不正确!");
			return;
		}
	} else {
		var email = $("#oneOutPeople").val();
		if (!isEmail(email)) {
			alert("邮箱格式不正确!");
			return;
		}
	}

	$.ajax({
		url: '../soa_order',
		type: 'post',
		data: {
			fun: 'addContactWithPower',
			p1: _userId_v,
			p2: email,
			p3: _taskid,
			p4: power,
			p5: inOrOut
		},
		async: false,
		timeout: 10000,
		dataType: 'text',
		contentType: 'application/x-www-form-urlencoded; charset=utf-8',
		success: function (data) {
			var jsonData = "";
			try{

				jsonData = JSON.parse(data).rs[0];
				var result = jsonData.result;
				var state = parseInt(jsonData.state);
				switch(result){
					case 1:// 添加协同人成功
						
						_changed_invitate += "," + jsonData.uid;
						var is_need_contact = jsonData.isNeedContact;
						var newBtn = "";
						var name=jsonData.nickname ? jsonData.nickname : jsonData.email;
						switch(jsonData.power){
								case 1://拼装编辑按钮
									newBtn = '<span id="selectedUser'+jsonData.uid+'" class="btn btn-green" disabled="disabled" style="margin:2px">'+name+'</span>&nbsp;';	
									break;
								case 0://拼装只读按钮
									newBtn = '<span id="selectedUser'+jsonData.uid+'" class="btn btn-red" disabled="disabled" style="margin:2px">'+name+'</span>&nbsp;';
									break;
							}
						if(!inOrOut){ // 内部协同人表格添加一条数据
							addTableRows_selcet_task_people_p(jsonData);
							$spanTaskWorker.append(newBtn);
							$("#oneInPeople").val("");
							if(is_need_contact){
								_inUsers[jsonData.uid] = jsonData;
								var rsEmialAndNickName = (jsonData.email ? jsonData.email : "匿名")+ "---" + (jsonData.nickname ? jsonData.nickname : "匿名");
								var rsLi = "<li id="+"InLi"+jsonData.uid+"><a id="+ jsonData.uid +" onclick=liaClick('"+jsonData.email+"');>"+rsEmialAndNickName+"</a></li>";
								$("#allInPeople").prepend(rsLi);//新版邀请里面的待选的内部协同者 ， 弹出窗口的下拉框
							}

						}else {//外部协同人表格添加一条数据
							addTableRows_selcet_task_people_p_out(jsonData);
							$spanFollower.append(newBtn);
							$("#oneOutPeople").val("");
							if(is_need_contact){
								_outUsers[jsonData.uid] = jsonData;
								var rsEmialAndNickName = (jsonData.email ? jsonData.email : "匿名")+ "---" + (jsonData.nickname ? jsonData.nickname : "匿名");
								var rsLi = "<li id="+"InLi"+ jsonData.uid+"><a id="+ jsonData.uid +" onclick=liaClick_out('"+jsonData.email+"');>"+rsEmialAndNickName+"</a></li>";
								$("#allOutPeople").prepend(rsLi);//新版邀请里面的待选的外部协同者 ， 弹出窗口的下拉框
							}

							
						}



						
						//===============发送短信邮件JMS============================
						_is_btnCommit='0';
						var content= '有个新事项需要'+name+'协助!';
						var phone=jsonData.phone;
						var email_add=jsonData.email;
						if (!phone){
							
						}else {
							sendMsg(_taskid,_txtFormcn,phone);
						}
						http_insert_task_push_execute(content);//JMS
						_is_btnCommit="0";
						sendEmailAndContentJ(email_add,content);

						//=========================================================
						break;
					case 0://失败
						switch (state){
							case 0:
								alert("添加协同人失败!");
								break;
							case 3:
								alert("不能添加自己为协同人!");
								break;
							case 4:
								if(inOrOut){
									alert("该用户已经是您的内部联系人!");
								} else{
									alert("该用户已经是您的外部联系人!");
								}
								break;																
						}
						break;
					case -1://已经添加过
						alert("该协同人已经存在,请不要重复添加!");
						break;
				}
			}catch(e){

			}
			
		},
		error: function (e) {
			console.log(e);
		}
	});
}



/**
 * 验证邮箱
 */
function isEmail(email) {
	var pattern = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; 
	return pattern.test(email); 
}

/**
 * 验证手机号
 */
function isEmail_out(email) {
	var pattern = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; 
	return pattern.test(email); 
}

/**
 * 按照内部和外部，初始化显示内部协同表格的（弹出的对话框） 
 */
function addTableRows_selcet_task_people_p (/*index,*/ item) { //遍历返回的json
	//var inid = item.inid;
	//var cn = item.cn;
	var phone = "";
	var email = item.email;
	var uid = item.uid;
	var activetime = item.activetime;
	var nickname = item.nickname;
	//var power = !item.power ? "只读" : "编辑";
	var power = !item.power ? "只读" : "编辑";
	// if (!cn) {
	// 	cn = "未激活";
	// }
	
	if (!nickname) {
		nickname = "未激活";
	}
	// if (!phone) {
	// 	phone = "未激活";
	// }
	if (!email) {
		email = "";
	}
	var s='<tr class="gradeX" id="DeleteStatus'+uid+'">'+
	   // '<td>'+(index+1)+'</td>'+
	//    '<td>'+(++inTableIndex)+'</td>'+
	    '<td style="display:none;">' + uid + '</td>'+
	    '<td style="display:none;">' + uid + '</td>'+
	    '<td>'+nickname+'</td>'+
		'<td>'+ power +'</td>'+
	    '<td style="display: none;">'+phone+'</td>'+
	    '<td >'+email+'</td>'+
	    '<td style="text-align:center">';
		if (activetime == "1900-01-01 00:00:00"){
			s += '	<button   id="btnActivation'+uid+'"  name="btnActivation'+uid+'" class="btn btn-warning" onclick="btn_Activation_in_out(\''+item.email+'\',\''+uid+'\',this);">激活</button>';
		 } else {
		// 	s += '	<button class="btn btn-info" onclick="btn_Details(\'' + item.uid + '\');">详情</button>';
		 }
		s +='	<button type="button" class="btn btn-danger "  data-toggle="modal" onclick="btn_Delete_Alert_in_out('+uid+','+item.power+');">删除</button>';
		//s +='	<button class="btn btn-danger" onclick="btn_Delete(' + item.inid + ' );">删除</button>';
		s +='</td>'+'</tr>';
	$('#tabInPeople').prepend(s);
}


/**
 * 按照内部和外部，初始化显示外部协同表格的（弹出的对话框） 
 */
function addTableRows_selcet_task_people_p_out ( item) { //遍历返回的json
	//var inid = item.inid;
	//var cn = item.cn;
	var phone = "";
	var email = item.email;
	var uid = item.uid;
	var activetime = item.activetime;
	var nickname = item.nickname;
	//var power = !item.power ? "只读" : "编辑";
	var power = !item.power ? "只读" : "编辑";
	// if (!cn) {
	// 	cn = "未激活";
	// }
	
	if (!nickname) {
		nickname = "未激活";
	}
	// if (!phone) {
	// 	phone = "未激活";
	// }
	if (!email) {
		email = "";
	}
	var s='<tr class="gradeX" id="DeleteStatus'+uid+'">'+
	   // '<td>'+(index+1)+'</td>'+
	//    '<td>'+(++inTableIndex)+'</td>'+
	    '<td style="display:none;">' + uid + '</td>'+
	    '<td style="display:none;">' + uid + '</td>'+
	    '<td>'+nickname+'</td>'+
		'<td>'+ power +'</td>'+
	    '<td style="display: none;">'+phone+'</td>'+
	    '<td >'+email+'</td>'+
	    '<td style="text-align:center">';
		if (activetime == "1900-01-01 00:00:00"){
			s += '	<button   id="btnActivation'+uid+'"  name="btnActivation'+uid+'" class="btn btn-warning" onclick="btn_Activation_in_out(\''+item.email+'\',\''+uid+'\',this);">激活</button>';
		 } else {
		// 	s += '	<button class="btn btn-info" onclick="btn_Details(\'' + item.uid + '\');">详情</button>';
		 }
		s +='	<button type="button" class="btn btn-danger "  data-toggle="modal" onclick="btn_Delete_Alert_in_out('+uid+','+item.power+');">删除</button>';
		//s +='	<button class="btn btn-danger" onclick="btn_Delete(' + item.inid + ' );">删除</button>';
		s +='</td>'+'</tr>';
	$('#tabOutPeople').prepend(s);
}


/**
 * 发送短信
 */
function sendMsg(orderid,taskContent,smsUsers) {
	if(!smsUsers) return;
	$.ajax({
		url : '../sendTaskSms',
		type : 'get',
		data : {
			p1 : smsUsers,
			p2 : orderid,
			p3 : taskContent
		},
		async : true,
		timeout : 30000,
		dataType : 'text',
		contentType : 'application/x-www-form-urlencoded; charset=utf-8',
		beforeSend : function() {
		},
		success : function(data) {
			
			switch(data.status){
				case 0://成功
					console.log("发送短信成功:", smsUsers,"  ",taskContent);
					break;
				case -1://1分钟内重复发送
					break;
				case -2://发送失败
					break;
				case -3://到达每日发送上限
					break;
				case -4://手机号不正确
					break;
			}
			
		},
		error : function() {
			console.log(" sendMsg 失败！");

		},
		complete : function(XMLHttpRequest, status) {
		}
	});
}

// /**
//  * 插入日志
//  */
// function http_insert_task_push_execute(content){
// 	var userId=_userId_v;
// 	var l = isl(_l);
// 	if(l == "T"){
// 		userId='600';//数据库里面有个id=600的用户 ，昵称叫匿名
// 	}
// 	$.ajax({
// 		url: '../soa_order',
// 		type: 'post',
// 		data: {
// 	        fun: 'insert_task_push_team',
// 	        p1: _taskid,
// 	        p2: "1",
// 	        p3: content,
// 	        p4: userId
// 		},
// 		async: true,
// 		timeout : 5000, 
// 		dataType:'text', 
// 		contentType: 'application/x-www-form-urlencoded; charset=utf-8', 
// 		success: function(data) {
// 			var json=str2json(data);
// 			if (json.status=="200"){
// 				console.log("邀请协同者，发送短信成功");
// 			}
// 			else{
// 				console.log("邀请协同者，发送短信失败");
// 			}			
// 		},
// 		error: function() {
// 			console.log("请求网络超时");			
// 		},
// 		complete : function(XMLHttpRequest,status){
// 		}
// 	});
// }