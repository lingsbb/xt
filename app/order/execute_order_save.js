//====================================================
//模块功能：执行页面-提交按钮
//模块日期：2017-01-20
//====================================================
/**
 * 提交按钮 提交模块的入口函数
 */
function btnCommit_click() {

	//console.log('change_list: ', _formList3);
	var len=_formList3.length;
	var result=0;//正常发消息
	// alert(i);
	if (len==1 || len==2) {
		for (var i=0;i<len;i++){
			var item=_formList3[i];
			if (item=="业务号" || item=="客户"){
				result=result+1;
			}
		}
	}
	console.log('result',result);

	_is_btnCommit="1";
	_content=get_email_content();
	get_value();// 获取页面值
	if (_txtFormId){
		http_insert_task_from_new(_txtFormId,_taskid,_txtFormcn,_txtFormitemId,_txtFormitemValue);//保存执行任务 金鑫新写
	}
	http_insert_task_files();// 添加上传文件
	http_insert_task_ywAndKh_num();//添加客户与业务号
	http_update_baoguandi();//修改报关地	
	http_insert_task_push_execute(_content);//添加执行任务信息 给JMS服务器 0-状态通知 1-操作日志 2-工作流通知 3-讨论
	if (result==1 || result==2){//只修改了业务和客户
		closewin();
	}
	else{//走以前金鑫的过程
		http_select_task_email(_content);//发送邮件
	}
}

var _baoguandi="";
/**
 * 获得页面的值 为了提交按钮做准备
 */
function get_value(){
	_txtTaskcn=$txtTaskContent.val();//任务内容
	// _txtFormcn=$txtTaskStatus.val();//隐藏域
	_txtKhNum_v = $txtKhNum.val();
	_txtYwNum_v = $txtYwNum.val();
	_txtFormitemValue='';
	_txtFormitemId='';
	var baoguandi_key=0;//搜索
	var i=0;
	//表单项目id
	$("label[name^='formitemid']").each(function(){
		var ss= $(this).html();
		//console.log('mytag_ss5:',ss);
		if(ss!=null ||ss!=""){
			_txtFormitemId+=ss+",";
			if (ss=="报关地"){
				baoguandi_key=i;
			}
			i=i+1;
		}
	});	

	//表单input value值
	var j=0;
	$("#signupForm").find("[name='formitemvalue1']").each(function(){		
		var mytag=$(this).attr("mytag");
		//console.log('mytag'+i,$(this).attr("name"),'----',mytag);
		if (mytag=='select'){
			var $option=$("option:selected",this);
			var it=$option.text();
			_txtFormitemValue+=it+",";
			if (j==baoguandi_key){
				if (it){
					_baoguandi=it;
				}				
			}
		}
		else{
			var txt=$(this).val();
////////////////////////////////////////////////////////////////////目的地截取中文
			var id=$(this).attr('id');//获取控件id，id找目的地
			if(id=="txtIn"){
				var end=txt.split("---");//将串切成数组
				txt=end[1];
			}
////////////////////////////////////////////////////////////////////			
			_txtFormitemValue+=txt+",";
			//console.log(_txtFormitemValue);
			if (j==baoguandi_key){
				_baoguandi=txt;
			}
		}
		j=j+1;
	});
}

/**
 * 保存执行任务 金鑫新写
 */
function http_insert_task_from_new(_txtFormId,_taskid,_txtFormcn,_txtFormitemId,_txtFormitemValue){
	//console.log("http_insert_task_from_value");
	//console.log("http_insert_task_from_value",_txtFormId,_txtTaskcn,_txtFormcn,_txtFormitemId,_txtFormitemValue);
		$.ajax({
		url: '../soa_order',
		type: 'post',
		data: {
	        fun: 'insert_task_from_new',
	        p1: _txtFormId,
	        p2: _taskid,
	        p3: _txtFormcn,
	        p4: _txtFormitemId,
	        p5: _txtFormitemValue
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
				//console.log(_ismuilty);
				var ismuilty = Object.keys(_ismuilty);
				// http_update_task_order_xiangid();
				for(var i=0;i<ismuilty.length;i++){
					console.log(ismuilty[i]);
					http_update_alltask_same_value(ismuilty[i]);//覆盖重写其他任务相同的item（原来的功能是修改集装箱，但是集装箱号和中俄方车号都覆盖）
				}
			}
			else if (json.status=="2"){
				//console.log("提交失败");
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
 * 向数据库插入任务的文件信息
 */
function http_insert_task_files(){
	if (!filelist){
		filelist='*';
	}
	//console.log('http_insert_task_workfollow:',taskworkerids,followerids);
	$.ajax({
		url: '../soa_order',
		type: 'post',
		data: {
	        fun: 'insert_task_workfollow',
	        p1 : _taskid,
//			p2 : taskworkerids, // 多个执行人id
//			p3 : followerids,
			p2 : filelist
		},
		async: false,
		timeout : 5000, 
		dataType:'text', 
		contentType: 'application/x-www-form-urlencoded; charset=utf-8', 
		success: function(data) {
			var json=str2json(data);
			if (json.status=="200"){
				//console.log("内外协同者修改成功及文件上传成功");
				
			}else{
				//alert("集装箱号修改失败");
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
 * 添加客户与业务号
 */
function http_insert_task_ywAndKh_num(){
	var userId=_userId_v;
	var l = isl(_l);
	if(l == "T"){
		userId='600';
	}
	if (!_txtKhNum_v){
		_txtKhNum_v='*';
	}
	if (!_txtYwNum_v){
		_txtYwNum_v='*';
	}
	$.ajax({
		url: '../soa_order',
		type: 'post',
		data: {
	        fun: 'insert_task_ywAndKh_num',
			p1: userId,
			p2: _ordid,
			p3: _txtKhNum_v,
			p4: _txtYwNum_v
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

/**
 * 修改保存报关地-张琦
 */
function http_update_baoguandi(){
		$.ajax({
		url: '../soa_order',
		type: 'post',
		data: {
	        fun: 'update_baoguandi',
	        p1: _taskid,
			p2: _baoguandi//_txtFormitemValue.split(",")[0]//有bug
		},
		async: true,
		timeout : 60000, 
		dataType:'text', 
		contentType: 'application/x-www-form-urlencoded; charset=utf-8', 
		success: function(data) {
			//console.log(data);
			var json = str2json(data);
			if (json.status=="200"){	
				console.log("修改报关地成功");
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
 * 覆盖重写其他任务相同的item（原来的功能是修改集装箱，但是集装箱号和中俄方车号都覆盖）
 */
function http_update_alltask_same_value(cn){
	if(cn == null || cn == " " || cn == undefined){
		cn == "*";
	}
	$.ajax({
		url: '../soa_order',
		type: 'post',
		data: {
	        fun: 'update_task_order_xiangid_new',
	        p1: _taskid,
			p2: cn
		},
		async: true,
		timeout : 5000, 
		dataType:'text', 
		contentType: 'application/x-www-form-urlencoded; charset=utf-8', 
		success: function(data) {
			var json=str2json(data);
			if (json.status=="200"){
				//alert("集装箱修改成功");
				//console.log("集装箱修改成功");
			}else{
				//alert("集装箱号修改失败");
				//console.log("集装箱号修改失败");
			}			
		},
		error: function() {
			console.log("请求网络超时");			
		},
		complete : function(XMLHttpRequest,status){
		}
	});
}