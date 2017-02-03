//====================================================
//模块功能：执行页面-邀请-载入 初始化功能
//模块日期：2017-01-20
//====================================================
/**
 * 获取内部联系人
 * @param p
 * @param async
 */
function http_searchInUsers(p,async){
	$.ajax({
		async: async,
		url: "../esoa_user",
		datatype: 'json',
		type: "post",
		data: {
			fun:"select_eyt_concat_in_p",
			p1:1,
			p2:999999999,//为了不分页
			p3:_userId_v
		},
		success: function (data1) {
			if (data1 != null) {
				
				var jsonData = JSON.parse(data1);
				var totalData = jsonData.total;
				_inUsers = jsonData.rows;// 暂时保存内部或者外部联系人
				//console.log("searchInUsers",inUsers);
				$.each(_inUsers, function(index, user){
					var rsEmialAndNickName = (user.email ? user.email : "匿名")+ "---" + (user.nickname ? user.nickname : "匿名");
					var rsLi = "<li id="+"InLi"+ user.uid+"><a id="+ user.uid +" onclick=liaClick('"+user.email+"');>"+rsEmialAndNickName+"</a></li>";
					$("#allInPeople").append(rsLi);//新版邀请里面的待选的内部协同者 ， 弹出窗口的下拉框
				});
				
				//drawInUsers();
				getIsPostFinish(4);
			}
		}
	});
}

/**
 * 获取外部联系人
 * @param p
 * @param async
 */
function http_searchOutUsers(p,async){
	$.ajax({
		async: async,
		url: "../esoa_user",
		datatype: 'json',
		type: "post",
		data: {
			fun:"select_eyt_concat_out_p",
			p1:1,
			p2:999999999,//为了不分页
			p3:_userId_v
		},
		success: function (data1) {
			
			if (data1 != null) {
				var jsonData = JSON.parse(data1);
				var totalData = jsonData.total;
				_outUsers = jsonData.rows;
				//console.log("searchOutUsers",outUsers);
				$.each(_outUsers, function(index, user){
					var rsEmialAndNickName = (user.email ? user.email : "匿名")+ "---" + (user.nickname ? user.nickname : "匿名");
					var rsLi = "<li id="+"InLi"+ user.uid+"><a id="+ user.uid +" onclick=liaClick_out('"+user.email+"');>"+rsEmialAndNickName+"</a></li>";
					$("#allOutPeople").append(rsLi);//新版邀请里面的待选的外部协同者 ， 弹出窗口的下拉框
				});
				//drawOutUsersFollower();
				getIsPostFinish(5);
			}
		}
	});
}

/**
 * 一次性查询得到任务相关的协同者 （区分编辑 只读权限）   ，然后按照先只读编辑，再内部外部，来添加
 */
function http_select_task_workfollo(){
	$.ajax({
		url : '../soa_order',
		type : 'post',
		data : {
			fun : 'select_task_workfollo',
			p1 : _taskid
		},
		async : true,
		timeout : 10000,
		dataType : 'text',
		contentType : 'application/x-www-form-urlencoded; charset=utf-8',
		beforeSend : function() {
		},
		success : function(data) {
			//console.log(data);
			var json = str2json(data);
			if (json.status == "200") {
				var rs = json.rs;
				//console.log("http_select_task_workfollo:",rs[0].taskworker);
				showInAndOutUser(rs[0].taskworker,rs[0].follower);	//数据格式为uid组成的逗号字符串，taskworker编辑 	follower只读			
				//jx_drawInUsers();
				//console.log("pre_jx_drawOutUsers");
				//jx_drawOutUsers();
				//console.log("pre_finish");
			} else if (json.status == "404") {
				//console.log(" select_task_info 失败！");
			}
		},
		error : function() {
			//console.log(" select_task_info 失败！");

		},
		complete : function(XMLHttpRequest, status) {
		}
	});
}
//=========================================本文件以上面的3个方法作为主函数=====================================================================================

/**
 * 刚进入页面的时候，显示内外部协同者
 * @param taskworker
 * @param follower
 */
function showInAndOutUser(taskworker,follower){
	var taskworkers = taskworker ?  taskworker.split(",") : "";
	var followers = follower ? follower.split(",") : "";
	
	if(taskworker){//编辑权限
		$.each(taskworkers, function(i, userid) {
			//console.log('showInAndOutUser11:',userid);
			showNewInOrOutBtn(userid,"edit");//编辑权限
		});
	}
	if(followers){//只读权限
		$.each(followers, function(i, userid) {
			//console.log('showInAndOutUser22:',userid);
			showNewInOrOutBtn(userid,"read");//只读权限
		});
	}
}


/**
 * 刚进入页面的时候，显示内外部协同者。具体显示过程。
 * 显示新的内部或外部btn
 * @param userid
 * @param type -- edit read
 */
function showNewInOrOutBtn(userid,type){
	//console.log('showNewInOrOutBtn:',userid);
	var contact=inOrOut(userid);//内部还是外部联系人
	
	if(!contact){
		return;
	}

	var newBtn = "";
	var name = "";
	//console.log('showNewInOrOutBtn22:',userid);
	var jsonObj = JSON.parse(contact);
	
	//console.log("showNewInOrOutBtn jsonObj.type ",jsonObj.type);
	if (jsonObj.type=="self"){	//后增加的 防止保存按钮把自己从协同者里面去掉	
		// _user_ziji_id=_userId_v;
		//select_user_inout();//_user_ziji_in_out
		name=jsonObj.data.nickname ? jsonObj.data.nickname : jsonObj.data.email;
		newBtn = '<span style="display:none" class="btn btn-green" disabled="disabled" style="margin:2px">'+name+'</span>&nbsp;';//隐藏  看不见自己
		//console.log("showNewInOrOutBtn newBtn ",newBtn);
		$spanTaskWorker.append(newBtn);//当前页面  随便找个地方就行 不管内外了 找内部   加了newBtn隐藏按钮  这样保证 点击提交按钮的时候 不会把自己弄丢了
		//onSelect(_userId_v,"edit");//随便找个地方就行 不管内外了  找内部
	}
	else{
		name=jsonObj.data.nickname ? jsonObj.data.nickname : jsonObj.data.email;
	}
	
	switch(type){
		case "edit":
			newBtn = '<span id="selectedUser'+jsonObj.data.uid+'" class="btn btn-green" disabled="disabled" style="margin:2px">'+name+'</span>&nbsp;';	
			break;
		case "read":
			newBtn = '<span id="selectedUser'+jsonObj.data.uid+'" class="btn btn-red" disabled="disabled" style="margin:2px">'+name+'</span>&nbsp;';
			break;
	}
	jsonObj.data.power=type=="edit" ? 1 : 0;
	//判断是内部还是外部联系人
	switch(jsonObj.type){
		case "in":
			$spanTaskWorker.append(newBtn);//当前页面  
			addTableRows_selcet_task_people_p(jsonObj.data);//弹出的对话框的表格 按照内部和外部，初始化显示内部协同表格的（弹出的对话框） 
			break;
		case "out":
			$spanFollower.append(newBtn);
			addTableRows_selcet_task_people_p_out(jsonObj.data);//弹出的对话框的表格 按照内部和外部，初始化显示外部协同表格的（弹出的对话框） 
			break;
	}	
	
}


/**
 * 判断用户是内部联系人还是外部联系人
 * @param userid
 * @returns {String}
 */
function inOrOut(userid){
	var len=_inUsers.length;
	
	for(var i = 0;i < len ;i++){
		if(_inUsers[i]){
			
			if (_inUsers[i].uid==userid){
				var s= "{\"type\":\"in\",\"data\":"+JSON.stringify(_inUsers[i])+"}";
				//console.log(s);
				return s;
			}	

		}
	}
	len=_outUsers.length;
	
	for(var i = 0;i < len ;i++){
		if(_outUsers[i]){
			
			if (_outUsers[i].uid==userid){
				var s= "{\"type\":\"out\",\"data\":"+JSON.stringify(_outUsers[i])+"}";
				//console.log(s);
				return s;
			}	

		}
	}
	//如果在_inUsers 、_outUsers都搜索不到 就是自己
	var s= '{"type":"self","data":{"nickname":"'+_userNickname_v+'","email":"'+_userEmail_v+'"}}';
	//console.log(s);
	return s;
}