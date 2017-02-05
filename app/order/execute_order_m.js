//====================================================
//模块功能：执行页面-返工 结束任务等 模型层
//模块日期：2017-01-20
//====================================================

/**
 * 插入任务模版到tab_task_form_value表里
 * --作者：金鑫
 * --参数：_taskid
 * --时间: 2017002.05
 */
function insertDesCity(){
	$.ajax({
		url: '../soa_order',
		type: 'post',
		data: {
	        fun: 'insert_task_fromstart',
	        p1: _taskid
		},
		async: false,
		timeout : 10000, 
		dataType:'text', 
		contentType: 'application/x-www-form-urlencoded; charset=utf-8',
		beforeSend: function(){ 
   		}, 
		success: function(data) {
				console.log("添加成功");
		},
		error: function() {
			console.log("请求网络超时");			
		}
		,
		complete : function(XMLHttpRequest,status){
		}
	});
}


/**
 * 查询任务名称、发起人姓名、执行人姓名
 * -- 过程功能：查询任务名称、发起人名称、执行人名称
 * -- 作者：金鑫
 * -- 参数：taskid1 任务id
 */
function http_select_task_cnuser(){
	$.ajax({
		url: '../soa_order',
		type: 'post',
		data: {
	        fun: 'select_task_cnuser',
	        p1: _taskid
		},
		async: true,
		timeout : 60000, 
		dataType:'text', 
		contentType: 'application/x-www-form-urlencoded; charset=utf-8',
		beforeSend: function(){ 
   		}, 
		success: function(data) {
			var json=str2json(data);
			if (json.status=="200"){
				//getIsPostFinish(3);
				var rs=json.rs;
				$txtTaskContent.val(rs[0].rname);//input 任务内容
				$txtTaskLaunch.html(rs[0].fname);//span 发起人
				_txtFormcn=rs[0].mcn;//form的cn 表单cn
				// $txtTaskStatus.val(rs[0].mcn);//form的cn 表单cn
				$("#orderName").html(rs[0].ordername);
				var statusContent = "";
				switch(rs[0].dstatus){
					case "0":
						//修改中
						statusContent = "进行中";
						break;
					case "1":
						//已完成
						statusContent = "已完成";
						break;
					case "2":
						//返工
						statusContent = "返工";
						break;
				}
				$txtTaskDstatus.val(statusContent); // 状态显示
				_ordid=json.rs[0].ordid;
				getOrderInfoJ();
			}
			getIsPostFinish(3);	
			http_select_task_ywAndKh_num();
											
		},
		error: function() {
			console.log("请求网络超时");
			
		}
		,
		complete : function(XMLHttpRequest,status){
		}
	});
}

/**
 * 查询附件
 */
function http_select_task_files(){
	$.ajax({
		url: '../soa_order',
		type: 'post',
		data: {
	        fun: 'select_task_files',
	        p1: _taskid
		},
		async: true,
		timeout : 60000, 
		dataType:'text', 
		contentType: 'application/x-www-form-urlencoded; charset=utf-8',
		beforeSend: function(){ 
   		}, 
		success: function(data) {
			var json = str2json(data);
			if (json.status == "200") {
				var rs = json.rs;
				//console.log(rs);
				$.each(rs, function(i, obj) {
					if(obj && obj.realname){
						filelist += filelist ? "#" + obj.filepath + "|" + obj.realname : obj.filepath + "|" + obj.realname; 
						//console.log('http_select_task_files:',filelist);
						$txtFile.append(
								"<p>" +
								"<span class=\"btn btn-danger \" style=\"margin:2px\" id='filesName' onclick='openOrDownloadFile(\""+obj.filepath+"\",false);' >"+ obj.realname + "</span>" +
								"<a style=\"margin:2px\" id='filesDownload' onclick='openOrDownloadFile(\""+obj.filepath+"\",true);' >下载</span>"+
								"</p>");
					}
				});
			}

		},
		error: function() {
			console.log("请求网络超时");			
		}
		,
		complete : function(XMLHttpRequest,status){
		}
	});
}
/**
 * 查询任务模版
 */
function http_select_task_form(){	
	$("#txtForm").empty();
	$.ajax({
		url : '../soa_order',
		type : 'post',
		data : {
			fun : 'select_task_formnew',
			p1 : _taskid
		},
		async : true,
		timeout : 60000,
		dataType : 'text',
		contentType : 'application/x-www-form-urlencoded; charset=utf-8',
		beforeSend : function() {
		},
		success : function(data) {
			//getIsPostFinish(6);
			var json = str2json(data);
			if (json.status == "200") {	
				_fromj = json.rs.length > 0;				
				for(var i=0;i<json.rs.length;i++){
					var formid=json.rs[i].formid;
					_txtFormId=formid;
					var key=json.rs[i].item_cn;
					var value=json.rs[i].valueStr;
					var value1=json.rs[i].valueStr1;
					var type=json.rs[i].type;
					var ismuilty=json.rs[i].ismuilty;
					if(ismuilty=="1"){
						_ismuilty[key]=key;//顺手牵羊法
						//console.log("11",_ismuilty);
					}
					if (value){
						addformrow(formid,key,value,type);
					}
					else{
						if (!value1){
							value1='';
						}
						addformrow(formid,key,value1,type);
					}
					
				}
			}
			getIsPostFinish(6); 
			/*else if (json.status == "404") {
				console.log(" select_task_form 失败！");
			}*/
		},
		error : function() {
			//console.log(" select_task_form 失败！");

		},
		complete : function(XMLHttpRequest, status) {
		}
	});
}

/**
 * 查询任务状态 、表单模版（包括重复item）、 是否需要确认、 是否我确认了
 */
function http_select_taskstatus_form_formneedconfirm_myconfirmed(){
	//console.log('http_select_task_xiangid',_taskid);
	$.ajax({
		url: '../soa_order',
		type: 'post',
		data: {
	        fun: 'select_task_xiangid',
	        p1: _taskid
		},
		async: true,
		timeout : 60000, 
		dataType:'text', 
		contentType: 'application/x-www-form-urlencoded; charset=utf-8', 
		success: function(data) {
			//console.log(data);
			var json = str2json(data);
			if (json.status=="200"){	
				//getIsPostFinish(1);
				//console.log('200http_select_task_xiangid');
				// for(var i=0;i<json.rs.length;i++)
				// {
					
					//  _xiangid = json.rs[0].xiangid;
					//  console.log("_status=========================================================="+_status);
					 _status = json.rs[0].status;//任务状态 0进行 1完成
					 console.log("_status=========================================================="+_status);
					 _is_form_need_confirm = json.rs[0].is_confirm;//1所有人确认才可以结束任务  0发起人结束任务即可
					 console.log('json.rs[0].is_confirm: ', json.rs[0].is_confirm);
					//  console.log();
				// }
				http_select_task_form();//调用一个http_select_task_option  为了增加下拉框  ，保存了_ismuilty
				http_select_task_confirmnew();//我是否已经确认过
				// $txtContainer.val(_xiangid);
				getIsPostFinish(1);
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
 * 我是否已经确认过
 */
function http_select_task_confirmnew(){
	//console.log('http_select_task_confirmnew',_taskid,'************',_userId_v);
	var userId=_userId_v;
	var l = isl(_l);
	if(l == "T"){
		userId='600';
	}
	$.ajax({
		url: '../soa_order',
		type: 'post',
		data: {
	        fun: 'select_task_confirmnew',
	        p1: _taskid,
	        p2: userId
		},
		async: true,
		timeout : 60000, 
		dataType:'text', 
		contentType: 'application/x-www-form-urlencoded; charset=utf-8', 
		success: function(data) {
			//console.log(data);
			//getIsPostFinish(2);
			var json = str2json(data);
			if (json.status=="200"){	
				//console.log('200 http_select_task_confirmnew:',json.rs[i].confirm);
				_is_my_confirmed=json.rs[0].confirm;	
			}
			else {	//if (json.status=="404")
				//console.log('200 http_select_task_confirmnew:',json.rs[i].confirm);
				_is_my_confirmed="0";
			}
			set_role_status();
			getIsPostFinish(2);
		},
		error: function() {
			console.log("请求网络超时");			
		},
		complete : function(XMLHttpRequest,status){
		}
	});
}


/**
 * 查询人物对应的任务角色
 */
function http_select_task_role(){
	var userId=_userId_v;
	var l = isl(_l);//是否是临时用户  T--临时用户   F--注册用户
	if(l == "T"){// T--临时用户
		userId='600';
	}
	$.ajax({
		url: '../soa_order',
		type: 'post',
		data: {
	        fun: 'select_task_role',
	        p1: userId,
	        p2: _taskid
		},
		async: true,
		timeout : 60000, 
		dataType:'text', 
		contentType: 'application/x-www-form-urlencoded; charset=utf-8', 
		success: function(data) {
			
			var json=str2json(data);
			if (json.status=="200"){
				//getIsPostFinish(0);			
				_role_result = json.rs[0].result;//1是执行人（后来编辑权限） 2是参与人(后来只读权限) 0是发起人
				if(_role_result=="2"||userId=='600'){//只读权限
					$("#txtKhNum").attr("readOnly","true");//客户
					$("#txtYwNum").attr("readOnly","true");//业务
				}
			}
			//查询任务状态 、表单模版（包括重复item）、 是否需要确认、 是否我确认了
			http_select_taskstatus_form_formneedconfirm_myconfirmed();
			getIsPostFinish(0);
		},
		error: function() {
			console.log("请求网络超时");			
		},
		complete : function(XMLHttpRequest,status){
		}
	});
}




/**
 * 修改任务确认
 */
function http_update_task_insertconfirm(){
	$.ajax({
		url: '../soa_order',
		type: 'post',
		data: {
	        fun: 'update_task_insertconfirm',
	        p1: _taskid,
	        p2: _userId_v,
	        p3: '0'
		},
		async: true,
		timeout : 5000, 
		dataType:'text', 
		contentType: 'application/x-www-form-urlencoded; charset=utf-8', 
		success: function(data) {
			var json=str2json(data);
			if (json.status=="200"){
				var rs=json.rs;
				if(rs[0].result == "1"){
					//console.log("成功");
					http_update_task_statusrework();//修改任务状态为由1回0
				}else{
					//console.log("任务确认修改失败");
				}				
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
 * 修改任务状态
 */
function http_update_task_statusrework(){
	console.log("http_update_task_statusrework");
	$.ajax({
		url: '../soa_order',
		type: 'post',
		data: {
	        fun: 'update_task_statusrework',
	        p1: _taskid
		},
		async: true,
		timeout : 5000, 
		dataType:'text', 
		contentType: 'application/x-www-form-urlencoded; charset=utf-8', 
		success: function(data) {
			console.log(data);
			var json=str2json(data);
			if (json.status=="200"){
				//console.log("修改任务状态成功");
			}else{
				//console.log("修改任务状态失败");
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
 * 修改任务状态
 */
function http_update_task_status_new(){
	$.ajax({
		url: '../soa_order',
		type: 'post',
		data: {
	        fun: 'update_task_status_new',
	        p1: _taskid,
	        p2:_userId_v//msn修改，添加本人id
		},
		async: true,
		timeout : 5000, 
		dataType:'text', 
		contentType: 'application/x-www-form-urlencoded; charset=utf-8', 
		success: function(data) {
			var json=str2json(data);
			if (json.status=="200"){
				//console.log("关闭任务成功");
				var l=isl(_l);
				if(l == "T"){
				window.close();
			}else{
				window.location.href="../order/eyt_order_task_index?orderid="+_ordid;
			}
			}else{
				console.log("任务关闭失败");
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
 * （确认通过主要功能都在存储过程select_task_confirm_new）查询任务通过
 * 不需要确认，判断自己是否是发起人，是的话直接关闭任务，否则把自己状态改为已提交
 * 1直接关闭任务
 * 否则是2（成功）或者3（失败）
 * 4需要确认  查询在任务里还需要多少人有确认通过的权限
 * 4如果只有一个人，就剩他自己了  或者所有人都通过了，就直接执行修改任务状态操作
 * 否则是5（成功）或者6（失败）

 */
function http_select_task_confirm_new(){
	$.ajax({
		url: '../soa_order',
		type: 'post',
		data: {
	        fun: 'select_task_confirm_new',
	        p1: _taskid,
	        p2: _userId_v
		},
		async: true,
		timeout : 5000, 
		dataType:'text', 
		contentType: 'application/x-www-form-urlencoded; charset=utf-8', 
		success: function(data) {
			var json=str2json(data);
			if (json.status=="200")
			{
				if(json.rs[0].result==1)
				{
					var conf=confirm("是否强制关闭任务？");//最后一个 就剩自己了
					if(conf==true)
					{
						http_update_task_status_new();
					}
				}
				else if(json.rs[0].result==4)
				{
					var conf=confirm("是否关闭任务？");//最后一个 就剩自己了
					if(conf==true){
						http_update_task_status_new();
					}
				}
				else if(json.rs[0].result==2 || json.rs[0].result==5)
				{
					var l=isl(_l);
					if(l == "T")
					{
						window.close();
					}
					else
					{
						window.location.href="../order/eyt_order_task_index?orderid="+_ordid;
					}
				}
				else
				{
					//console.log("任务提交失败");
				}					
			}
			else
			{
				alert("任务关闭失败");
			}	
		},
		error: function() {
			alert("请求网络超时");			
		},
		complete : function(XMLHttpRequest,status){
		}
	});
}





/**
 * 储存文件对象
 */
function append_file_info(filejson) {
	var data = eval('(' + filejson + ')');
	filelist += filelist ? "#" + data.filename + "|" + data.realname : data.filename + "|" + data.realname; 
	//console.log('append_file_info:',filelist);
}

/**
 * 查询某个具体的下拉框
 */
function http_select_task_option(formid1,item_cn1,type1,callback){
	$.ajax({
		url: '../soa_order',
		type: 'post',
		data: {
	        fun: 'select_task_option',
	        p1: formid1,
	        p2: item_cn1,
	        p3: type1
		},
		async: false,
		timeout : 10000, 
		dataType:'text', 
		contentType: 'application/x-www-form-urlencoded; charset=utf-8',
		beforeSend: function(){ 
   		}, 
		success: function(data) {
			var json=str2json(data);
			if (json.status=="200"){
				callback(json.rs);
			}
		},
		error: function() {
			alert("请求网络超时");			
		}
		,
		complete : function(XMLHttpRequest,status){
		}
	});
}


/**
 * 根据用户id与orderid查询业务号与客户
 */
function http_select_task_ywAndKh_num(){
	if (!_userId_v){
		return;
	}
	$.ajax({
		url: '../soa_order',
		type: 'post',
		data: {
	        fun: 'select_task_ywAndKh_num',
	        //p1: "54",
	        //p2: "01041483517161"
			p1: _userId_v,
			p2: _ordid
		},
		async: false,
		timeout : 10000, 
		dataType:'text', 
		contentType: 'application/x-www-form-urlencoded; charset=utf-8',
		beforeSend: function(){ 
   		}, 
		success: function(data) {
			var json=str2json(data);
			if (json.status=="200"){
				var KhNum = json.rs[0].customer_name;
				var YwNum  =json.rs[0].businessid;
				if(KhNum!=""){
					$("#txtKhNum").attr("readOnly","true");
					$txtKhNum.val(KhNum);
				}
				else{
						
				}
				if(YwNum!=""){
					$("#txtYwNum").attr("readOnly","true");
					$txtYwNum.val(YwNum);
				}else{

				}
			}else{
	
			}
		},
		error: function() {
			alert("请求网络超时");			
		}
		,
		complete : function(XMLHttpRequest,status){
		}
	});
}





