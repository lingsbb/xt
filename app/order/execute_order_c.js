//====================================================
//模块功能：执行页面-返工 结束任务等 控制器
//模块日期：2017-01-20
//====================================================

/**
 * 入口函数
 */
$(document).ready(function() {
	main();
});

/**
 * 主函数
 */
function main() {
	
	getElement();
	setEvent();
	post();
}

/**
 * 获取全部jquery元素
 */
function getElement() {
	$txtTaskContent = $("#txtTaskContent"); // 任务内容
	$txtTaskLaunch = $("#txtTaskLaunch"); // 发起人
	$txtFile = $("#txtFile"); // 拼接file
	$txtForm = $("#txtForm"); // 拼接表单
	$btnCommit = $("#btnCommit"); // 提交按钮
	$btnRework = $("#btnRework"); // 返工按钮
	$btnSend = $("#btnSend");// 发送按钮
	$btnAdopt = $("#btnAdopt"); // 确认通过按钮
	$txtTaskDstatus = $("#txtTaskDstatus");// 任务状态
	$spanFollower = $("#spanFollower");//外部协同者面板
	$spanTaskWorker = $("#spanTaskWorker");//内部协同者面板
	$btnInsideAdd = $('#btnInsideAdd');//邀请内部协同者按钮
	$btnExternalAdd = $('#btnExternalAdd');//邀请外部协同者按钮
	$txtKhNum= $('#txtKhNum'); // 客户
	$txtYwNum= $('#txtYwNum'); // 业务号
}

/**
 * 发起post
 */
function post() {
	// 6层 比较复杂 查询人物对应的任务角色
	http_select_task_role();
	//下面比较单一化
	http_select_task_cnuser();// 查询任务名称、发起人姓名、执行人姓名
	http_searchInUsers(1, false);// 内部联系人 新版邀请里面的待选的内部协同者 ， 弹出窗口的下拉框
	http_searchOutUsers(1, false);// 外部联系人 新版邀请里面的待选的外部协同者 ， 弹出窗口的下拉框
	http_select_task_workfollo();//查询任务相关的协同者 （区分编辑 只读权限）
	http_select_task_files();//查询附件
	http_select_task_push_team();// 查询团队信息
}

/**
 * 设置绑定的事件
 */
function setEvent() {
	new Clipboard('#btnCopyLink'); // 分享用到
	// 提交按钮
	$btnCommit.click(function() {
		change_record_commit_click();
		btnCommit_click();
	});
	// 返工按钮
	$btnRework.click(function() {
		btnRework_click();
	});
	// 问题反馈发送按钮
	$btnSend.click(function() {
		btnSend_click();
	});
	// 确认通过按钮
	$btnAdopt.click(function() {
		btnAdopt_click();
	});
	// 点击添加内部协同者按钮 弹出对话框 20170119 gy
	$("#btnInsideAdd").click(function(){
		btnInsideAdd_Click();
	});

	// 点击添加外部协同者按钮 弹出对话框 20170119 gy
	$("#btnExternalAdd").click(function(){
		btnExternalAdd_Click();
	});
	
	// 文件上传初始化
	$("#uploadify").uploadifive({
		// 'swf' : 'plugin/uploadify/uploadify.swf',
		// 'uploader' : 'UploadServlet',
		// 'folder' : '/upload',
		'queueID' : 'fileQueue',
		// 'cancelImg' : 'plugin/uploadify/uploadify-cancel.png',
		'buttonText' : '上传文件',
		auto : true,
		'multi' : true,
		'wmode' : 'transparent',
		'simUploadLimit' : 999,
		'fileTypeExts' : '*.*',
		'fileTypeDesc' : 'All Files',
		'onUploadComplete' : function(file, data) {
			append_file_info(data);
		}
	});


}

/**
 * 根据编辑只读角色 任务状态 是否需要确认 我是否已经确认 四个值 来设置四个按钮显示性
 * 按角色状态显示按钮及按钮作用
 */
function set_role_status() {
	var str = _p.charAt(_p.length-1);
	var l = isl(_l);
	if(_status == "0"){//任务进行中0
		if(_role_result == "0"){//发起人0
			if(_is_form_need_confirm == "1"){//需要确认1
				if(_is_my_confirmed == "0"){//未确认0
					$btnCommit.show();//提交按钮
					$btnAdopt.show();//确认通过按钮
					$btnInsideAdd.show();//邀请内部协同者按钮
					$btnExternalAdd.show();//邀请外部协同者按钮
				}else{
					$("#uploadifive-uploadify").hide();
				}
			}else if(_is_form_need_confirm == "0"){
					$btnCommit.show();//提交按钮
					$btnAdopt.show();//确认通过按钮
					$btnInsideAdd.show();//邀请内部协同者按钮
					$btnExternalAdd.show();//邀请外部协同者按钮
			}
		}else if(_role_result == "1"){//编辑
			if(_is_form_need_confirm == "1"){//需要确认1
				if(_is_my_confirmed == "0"){//未确认0
					$btnCommit.show();//提交按钮
					$btnAdopt.show();//确认通过按钮
					$btnInsideAdd.show();//邀请内部协同者按钮
					$btnExternalAdd.show();//邀请外部协同者按钮
				}else{
					$("#uploadifive-uploadify").hide();
				}
			}else if(_is_form_need_confirm == "0"){//不需要确认0
					$btnCommit.show();//提交按钮
					$btnInsideAdd.show();//邀请内部协同者按钮
					$btnExternalAdd.show();//邀请外部协同者按钮
			}
		}else if(_role_result == "2"){//只读
			$("#uploadifive-uploadify").hide();
		}
		if(l == "T"){
			if(str == "b"){
				$btnCommit.show();//提交按钮
			}else{
				$("#uploadifive-uploadify").hide();
			}
		}
	}else if(_status == "1"){//任务完成1
		$btnRework.show();//返工按钮
		$("#uploadifive-uploadify").hide();
	}else if(_status == "2"){//任务返工
		if(_role_result == "0"){//发起人
			if(_is_form_need_confirm == "1"){//需要确认1
				if(_is_my_confirmed == "0"){//未确认0
					$btnCommit.show();//提交按钮
					$btnAdopt.show();//确认通过按钮
					$btnInsideAdd.show();//邀请内部协同者按钮
					$btnExternalAdd.show();//邀请外部协同者按钮
				}else{
					$("#uploadifive-uploadify").hide();
				}
			}else if(_is_form_need_confirm == "0"){
					$btnCommit.show();//提交按钮
					$btnAdopt.show();//确认通过按钮
					$btnInsideAdd.show();//邀请内部协同者按钮
					$btnExternalAdd.show();//邀请外部协同者按钮
			}
		}else if(_role_result == "1"){//编辑
			if(_is_form_need_confirm == "1"){//需要确认1
				if(_is_my_confirmed == "0"){//未确认0
					$btnCommit.show();//提交按钮
					$btnAdopt.show();//确认通过按钮
					$btnInsideAdd.show();//邀请内部协同者按钮
					$btnExternalAdd.show();//邀请外部协同者按钮
				}else{
					$("#uploadifive-uploadify").hide();
				}
			}else{
				$btnCommit.show();//提交按钮
				$btnInsideAdd.show();//邀请内部协同者按钮
				$btnExternalAdd.show();//邀请外部协同者按钮
			}		
		}else if(_role_result == "2"){//只读
			$("#uploadifive-uploadify").hide();
		}
		if(l == "T"){
			if(str == "b"){
				$btnCommit.show();//提交按钮
			}else{
				$("#uploadifive-uploadify").hide();
			}
		}
	}
	if(l == "T"){//临时用户 根本不需要返工  返工按钮隐藏了
		$btnRework.hide();//临时用户 根本不需要返工  返工按钮隐藏了
		if (_status=="1"){
			$("#txtForm").find("[name='formitemvalue1']").each(function(){
				var mytag=$(this).attr("mytag");
				// //console.log('mytag'+i,$(this).attr("name"),'----',mytag);
				if (mytag=='select'){
					var x=$(this).children();
					for(var i=0;i<x.length;i++){
						$(x[i]).attr("disabled",true);
					}
				} 
				else{
					var txt=$(this).val();
					$(this).attr("disabled",true);
					console.log('aa=====txt: ', txt);					
				}
			});
		}
	}

}



/**
 * 生成发送邮件或者短信的内容
 */
function get_email_content(){
	var l = isl(_l);
	var content='';
	if(l == "T"){
		content = "匿名对任务" + $txtTaskContent.val()+"进行提交";
	}else{
		content = _userNickname_v+"对任务" + $txtTaskContent.val()+"进行提交";
	}
	if(_formList3.length > 0){
		content += ", 修改了";
		for (var i = 0; i<_formList3.length; i++){
			if(i == 0){
				content += _formList3[i];
			} else {
				content += ", " +_formList3[i];
			}
		}
	}
	return content;
}

/**
 * 返工按钮
 */
function btnRework_click() {
	_is_btnCommit="1";
	//console.log(_role_result);
	_content = _userNickname_v+"对任务" + $txtTaskContent.val()+"进行返工";
	// 修改确认、任务状态
	if(_role_result == "0"){// 发起人
		if(_is_form_need_confirm=="1"){//任务需要确认
			http_update_task_insertconfirm();//修改任务确认  确认表数据由1回0
			send_email_push(_content);
		}
		else
		{
			//console.log('返工按钮http_update_task_statusrework');
			http_update_task_statusrework();//修改任务状态   如果该任务不需要确认  直接修改任务状态为由1回0
			send_email_push(_content);
		}
	}
	else//不是发起人，只需通知其他协同者  由发起人改变确认表和任务表的状态
	{
		send_email_push(_content);
	}
	
}
/**
 * 确认通过按钮
 */
function btnAdopt_click() {
	_is_btnCommit="1";
	// _content = "您有邮件请查收：运易达" + $txtTaskContent.val() + "任务通过确认。";
	_content = _userNickname_v+"对任务" + $txtTaskContent.val()+"进行通过确认";
	http_select_task_confirm_new();
	send_email_push(_content);
}

/**
 * 发送邮件和JMS的通用过程
 */
function send_email_push(content){
	http_insert_task_push_execute(content);//JMS
	http_select_task_email(content);// 邮件	
}
/**
 * 获取office文件在线编辑链接
 * @param filename
 * @returns {String}
 */
function getOfficeLink(filename) {
	var result = "";
	$.ajax({
		url : '../get_excelLink/'+filename+'/',
		type : 'get',
		async : false,
		timeout : 10000,
		dataType : 'text',
		contentType : 'application/x-www-form-urlencoded; charset=utf-8',
		beforeSend : function() {
		},
		success : function(data) {
			try{
				var urlData = JSON.parse(data);
				if(urlData){
					result = urlData.Url;
				}
			}catch(e){
				console.log("office url获取失败!");
			}
		},
		error : function(e) {
			console.log(" excel 失败！");
		}
		
	});
	return result;
}
/**
 * 点击下载链接产生的事件  动态生成的时候形成的
 * 下载或查看编辑 office or 普通文件
 * 
 * @param filepath
 *            文件路径或office 文件名
 * @param isDownload
 *            true 下载 false 查看编辑
 */
function openOrDownloadFile(filepath, isDownload) {
	var reg = /^.*\.(?:ods|xls|xlsb|xlsm|xlsx|odp|pot|potm|potx|pps|ppsm|ppsx|ppt|pptm|pptx|doc|docx)$/;
	if (filepath.match(reg)) {
		console.log("wwwwwwwwwwwwwwwwweeeeeeeeeeeeeeeeee");
		var url = "";
		if (!isDownload) {
			// 获取office文件在线编辑 连接
			url = getOfficeLink(filepath);
			if (!url) {
				alert("打开文件失败!");
				return;
			}
		} else {
			console.log("wwwwwwwwwwwwwwwwweeeeeeeeeeeeeeeeee"+isDownload);
			// 获取下载连接
			//url = g_downfile_url + filepath;
				url = g_downfile_url_new+filepath;
				console.log("wwwwwwwwwwwwwwwwweeeeeeeeeeeeeeeeee"+url);
		}
	} else {
		// 下载普通文件
		url = g_downfile_url + filepath;
	}
	window.open(url);
}

/**
 * 是否是临时用户  T--临时用户   F--注册用户
 */
function isl(_l) {
	var reg = /^[0-9]*$/;
	if (reg.test(_l)){
		return "T";	
	} else{
		return "F";
	}
}
/**
 *  返回上一页
 */
function goback(){
	window.location.href="eyt_order_task_index?orderid="+_ordid;
}

/**
 * 特殊字符  感觉没用
 */
jQuery.validator.addMethod("oredr", function(value, element) {
    return this.optional(element) || /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/.test(value);
}, "用户名必须在5-10个字符之间"); 