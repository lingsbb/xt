
/**
 * 获取元素
 */
function getElement() {
	$taskConfig = $("#taskConfig");
	$btnReload = $('#btnReload');// 刷新按钮
	$btnQuery = $("#btnQuery");// 任务查询按钮
	$txtTaskCn = $("#txtTaskCn");// 查询条件的任务名称
	$btnCommitFile = $("#btnCommitFile");
}
/**
 * 设置元素
 */
function setElement() {
	// http_select_task_config_combox();
	http_select_task_by_orderid();
	//文件上传初始化
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
	$("#uploadify2").uploadifive({
		// 'swf' : 'plugin/uploadify/uploadify.swf',
		// 'uploader' : 'UploadServlet',
		// 'folder' : '/upload',
		'queueID' : 'fileQueue2',
		// 'cancelImg' : 'plugin/uploadify/uploadify-cancel.png',
		'buttonText' : '上传文件',
		auto : true,
		'multi' : true,
		'wmode' : 'transparent',
		'simUploadLimit' : 999,
		'fileTypeExts' : '*.*',
		'fileTypeDesc' : 'All Files',
		'onUploadComplete' : function(file, data) {
			append_file_info1(data);
		}
	});
}

/**
 * 任务列表
 */
function setFormTaskText(index,formid) {
	var childs = $taskConfig[0].children;
	//重绘所有模板
	$.each(childs,function(currIndex){
		if(currIndex == index){
			$(childs[currIndex]).attr("class","btn btn-primary2");
			return;
		}
		$(childs[currIndex]).attr("class","btn btn-primary1");
	});
	selectTask = formid;
}
// 储存文件对象
function append_file_info(filejson) {
	var data = eval('(' + filejson + ')');
	filelist += filelist ? "#" + data.filename + "|" + data.realname : data.filename + "|" + data.realname; 
	console.log(filelist);
}
function append_file_info1(filejson) {
	var data = eval('(' + filejson + ')');
	filelist1 += filelist1 ? "#" + data.filename + "|" + data.realname : data.filename + "|" + data.realname; 
	//console.log('append_file_info:',filelist);
}

// 存储file
function sendFile(files, taskid) {
	$.ajax({
		url : '../sendFile',
		type : 'get',
		data : {
			p1 : files,
			p2 : taskid
		},
		async : true,
		timeout : 10000,
		dataType : 'text',
		contentType : 'application/x-www-form-urlencoded; charset=utf-8',
		beforeSend : function() {
		},
		success : function(data) {
			console.log("保存file返回:", data);

		},
		error : function() {
			console.log(" sendFile 失败！");

		},
		complete : function(XMLHttpRequest, status) {
		}
	});
}

/**
 * 上传文件提交
 * @param orderId
 * @param createUser
 */
function insertFileInfo() {
	$.ajax({
		url : '../soa_order',
		type : 'get',
		data : {
			fun : 'insert_task_file_info',
			p1 : selectTask, // 任务id
			p2 : filelist1	//文件内容
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
				taskid = rs[0].task_id;
				if (rs[0].result == "1") {
					$('#fileQueue2').html("");
					select_mydesktop();
					// btnReload_click();
				//	resetAllTaskInput();
			   //	resetBothSelect();
					filelist1 = "";
					$("#uploadFilePanels").modal("hide");
					$("button[name='btn_delete_hidden_status']").each(function(index,item){
							$(this).hide();				 
					});
					("上传或修改文件成功");
					
				}
			} else if (json.status == "404") {
				console.log(" insert_task_info 失败！");
			}
		},
		error : function() {
			console.log(" insert_task_info 失败！");

		},
		complete : function(XMLHttpRequest, status) {
		}
	});
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
 * 获取我的桌面数据
 */
function select_mydesktop(){
	$.ajax({
		url : '../soa_order',
		type : 'post',
		data : {
		//	fun : 'select_mydesktop',
			fun : 'select_mydesk',
			p1 : _orderid,
			p2 : _userId
		},
		async : true,
		timeout : 10000,
		dataType : 'text',
		contentType : 'application/x-www-form-urlencoded; charset=utf-8',
		success : function(data) {
			var json = "";
			try{
				json = str2json(data);
				if (json.status == "200") {
					var files = json.rs;
					var fileDatas = resetDesktopData(files);
					showMyDesktop(fileDatas);
				}else if (json.rows =="0"){
					$("#mydesktop").html("");
				}else if (json.status == "404") {
					console.log(" select_mydesktop 失败！");
				}
			}catch(e){

			}
		},
		error : function() {
			console.log(" select_mydesktop 失败！");

		}
	});
}

/*-----------------------------------------------------我的桌面 开始-------------------------------------------------------*/
/**
 * 重排我的桌面数据
 */
function resetDesktopData(files){
	var fileDatas = {};
		for(var fileitem of files){
			if(fileitem.taskname==""||fileitem.taskname == null){
			}
		if(!fileDatas.hasOwnProperty(fileitem.taskname)){
			fileDatas[fileitem.taskname] = {"taskid":fileitem.taskid,"formcn":fileitem.formid,"formcn":fileitem.formcn,"fileArray":[fileitem],"isRead":fileitem.isRead,"taskname":fileitem.taskname};
		}else{
			fileDatas[fileitem.taskname]["fileArray"].push(fileitem);
		}
	}
	return fileDatas;
}

/**
 * 显示我的桌面
 */
function showMyDesktop(fileDatas){
	var mydesktopHtml = "";
	if(!fileDatas) return;
　  $.each(fileDatas, function(i, item){ 
		mydesktopHtml += getFileDesktopPanel(item);
　　}); 
	$("#mydesktop").html(mydesktopHtml);
}
/**
 * 上传
 * @param p
 * @param async
 */
function upload_file(){
	filelist1 = "";
	$('#fileQueue2').html("");
	$.ajax({
		async: false,
		url: "../soa_user",
		datatype: 'json',
		type: "post",
		data: {
			fun: "select_is_hasqiye",
			p1 : _userId
		},
		success: function (data) {
		 	$('#uploadFilePanels').modal({backdrop:"static"});
		}
	});
}
/**
 * 获取我的桌面
 */
function getFileDesktopPanel(fileData){//fileData["taskid"] taskid
	var formcn = fileData["formcn"];//模版名称
	var taskid = fileData["taskid"];//任务id
		var taskname = fileData["taskname"];//任务名称
	var fileArray = fileData["fileArray"];//文件列表
	var isRead = parseInt(fileData["isRead"]);//只读or编辑

	var readPanel = '<div class="row">'+
						'<div class="col-sm-12">'+
							'<div class="ibox float-e-margins">'+
								'<div class="ibox-title">'+
									'<h5><i class="fa fa-money"> </i>';
										//readPanel += formcn + 
										readPanel += taskname + 
									'</h5>'+
								'</div>'+
								'<div class="ibox-content icons-box"><div class="bs-glyphicons"><ul class="bs-glyphicons-list">';	

	$.each(fileArray,function(index,fileitem){
		console.log(fileitem);
		readPanel += getEditFileDesktopPanel(fileitem);
	});
	readPanel += '</ul></div></div></div></div></div>';
	return readPanel;							
}

/**
 * 获取我的桌面只读权限的桌面item
 */
function getReadFileDesktopItem(fileitem){
	var filename = fileitem.filename;
	var filepath = fileitem.filepath;
	var filedate = fileitem.filedate;
	var itemHtml = "";
	if(filename==null ||filename==""){

	}else{
		var many_filename = filename.split(",");
		var many_filepath = filepath.split(",");
		var many_filedate = filedate.split(",");
		for(i=0;i<many_filename.length;i++){
				var showFileName = many_filename[i].substring(0,3)+"..";
				var ext = filename.substring(many_filename[i].lastIndexOf("."),many_filename[i].length);			
			itemHtml += '<li>'+ getDesktopItemFileIcon(ext,many_filename[i],many_filepath[i],may,many_filedate[i]) + 
			'<a class="" style="font-size: 14px;">'+showFileName+'<i class="fa fa-download" style="color: #00458A;margin-top: -8px;" '+
					'onclick="openOrDownloadFile(\''+many_filepath[i]+'\',true);" ></i></a></li>';		
		}
	}


	
			
	return itemHtml;																	
}

/**
 * 获取我的桌面编辑权限的桌面
 */
function getEditFileDesktopPanel(fileitem){
	var filename = fileitem.filename;
	var filepath = fileitem.filepath;
	var filedate = fileitem.filedate;
	var itemHtml = "";
	if(filename==null ||filename==""){

	}else{
		var many_filename = filename.split(",");
		var many_filepath = filepath.split(",");
		var many_filedate = filedate.split(",");
		for(i=0;i<many_filename.length;i++){
			var showFileName = many_filename[i].substring(0,3)+"..";
			//itemHtml = "";
			var ext = many_filename[i].substring(many_filename[i].lastIndexOf("."),many_filename[i].length);			
			itemHtml += '<li>'+	getDesktopItemFileIcon(ext,many_filename[i],many_filepath[i],many_filedate[i]) + 
			'<a class="" style="font-size: 14px;">'+showFileName+'<i class="fa fa-download" style="color: #00458A;margin-top: -8px;" '+
					'onclick="openOrDownloadFile(\''+many_filepath[i]+'\',true);" ></i><i class="fa fa-close" style="color: #00458A;margin-top: -8px;" '+
					'onclick="deleteFile(\''+many_filepath[i]+'\');" ></i></a></li>';	
 		}							
	}
	return itemHtml;
}

/**
 * 根据文件后缀名获取文件图标
 */
function getDesktopItemFileIcon(ext,filename,filepath,filedate){
	var itemIcon = "";
	switch(ext){
		case ".xls":
			itemIcon = '<img class="imgscale" title="'+filename+ "&nbsp;上传时间："+filedate+'"  src="../img/mydesktop/xls.png" style="width:100%;" onclick="openOrDownloadFile(\''+filepath+'\',false);" />';
			break;
		case ".xlsx":
			itemIcon = '<img class="imgscale" title="'+filename+ "&nbsp;上传时间："+filedate+'"  src="../img/mydesktop/xls.png" style="width:100%;" onclick="openOrDownloadFile(\''+filepath+'\',false);" />';
			break;
		case ".xlsb":
			itemIcon = '<img class="imgscale" title="'+filename+ "&nbsp;上传时间："+filedate+'"  src="../img/mydesktop/xls.png" style="width:100%;" onclick="openOrDownloadFile(\''+filepath+'\',false);" />';
			break;
		case ".xlsm":
			itemIcon = '<img class="imgscale" title="'+filename+ "&nbsp;上传时间："+filedate+'" src="../img/mydesktop/xls.png" style="width:100%;" onclick="openOrDownloadFile(\''+filepath+'\',false);" />';
			break;
		case ".doc" :
			itemIcon = '<img class="imgscale" title="'+filename+ "&nbsp;上传时间："+filedate+'"  src="../img/mydesktop/word.png" style="width:100%;" onclick="openOrDownloadFile(\''+filepath+'\',false);" />';
			break;
		case ".docx" :
			itemIcon = '<img class="imgscale" title="'+filename+ "&nbsp;上传时间："+filedate+'"  src="../img/mydesktop/word.png" style="width:100%;" onclick="openOrDownloadFile(\''+filepath+'\',false);" />';
			break;
		case ".pdf" :
			itemIcon = '<img class="imgscale" title="'+filename+ "&nbsp;上传时间："+filedate+'"  src="../img/mydesktop/pdf.png" style="width:100%;" onclick="openOrDownloadFile(\''+filepath+'\',false);" />';
			break;	
		case ".png" :
			itemIcon = '<img class="imgscale" title="'+filename+ "&nbsp;上传时间："+filedate+'"  src="../img/mydesktop/png.png" style="width:100%;" onclick="openOrDownloadFile(\''+filepath+'\',false);" />';
			break;
		case ".jpg" :
			itemIcon = '<img class="imgscale" title="'+filename+ "&nbsp;上传时间："+filedate+'"  src="../img/mydesktop/jpg.png" style="width:100%;" onclick="openOrDownloadFile(\''+filepath+'\',false);" />';
			break;
		case ".txt" :
			itemIcon = '<img class="imgscale" title="'+filename+ "&nbsp;上传时间："+filedate+'"  src="../img/mydesktop/txt.png" style="width:100%;" onclick="openOrDownloadFile(\''+filepath+'\',false);" />';
			break;
		default:
			itemIcon = '<img class="imgscale" title="'+filename+ "&nbsp;上传时间："+filedate+'"  src="../img/mydesktop/default.png" style="width:100%;" onclick="openOrDownloadFile(\''+filepath+'\',false);" />';
			break;
	}	
	return itemIcon;
}

/**
 * 下载或查看编辑 office or 普通文件
 * @param filepath 文件路径或office 文件名
 * @param isDownload true 下载 false 查看编辑
 */
function openOrDownloadFile(filepath,isDownload){
	var reg = /^.*\.(?:ods|xls|xlsb|xlsm|xlsx|odp|pot|potm|potx|pps|ppsm|ppsx|ppt|pptm|pptx|doc|docx)$/;
	if(filepath.match(reg)){
		var url = "";
		if(!isDownload){
			//获取office文件在线编辑 连接
			url = getOfficeLink(filepath);
			if(!url){
				alert("打开文件失败!");
				return ;
			}
		}else{
			//获取下载连接
			//url = g_downfile_url+filepath;
			url = g_downfile_url_new+filepath;
			
		}
	}else{
		//下载普通文件
		url = g_downfile_url+filepath;
	}
	window.open(url);
}

//删除文件
function deleteFile(filepath){
	funDeleteFile(filepath);
}

/**
 * 添加执行任务信息 给JMS服务器 0-状态通知 1-操作日志 2-工作流通知 3-讨论
 */
function http_insert_msg_push_create(content){		
	$.ajax({
		url: '../soa_order',
		type: 'post',
		data: {
	        fun: 'insert_task_push_team',
	        p1: selectTask,
	        p2: "1",
	        p3: content,
	        p4: _userId
		},
		async: true,
		timeout : 5000, 
		dataType:'text', 
		contentType: 'application/x-www-form-urlencoded; charset=utf-8', 
		success: function(data) {
			var json=str2json(data);
			if (json.status=="200"){
				console.log("操作文件成功日志");
				
			}else{
				console.log("失败");		
			}			
		},
		error: function() {
			console.log("请求网络超时");			
		},
		complete : function(XMLHttpRequest,status){
		}
	});
}

//删除服务器的实际文件
function funDeleteFile(filepath) {
	if(!filepath) return;
	$.ajax({
		url : 'http://59.110.160.193:8090/address/order/DeleteFile',
		type : 'get',
		data : {
			filepath: filepath,
			filename: "nothing"
		},
		async : true,
		timeout : 10000,
		dataType : 'text',
		contentType : 'application/x-www-form-urlencoded; charset=utf-8',
		beforeSend : function() {
		},
		success : function(data) {
			var json = "";
			try{
				json = str2json(data);
				if (json.isDel == "true") {
					console.log("file is delete,db will be del");
					delFileDB(filepath);
				}
			}catch(e){

			}
		},
		error : function() {
		},
		complete : function(XMLHttpRequest, status) {
		}
	});
}
//删除数据库中的文件信息
function delFileDB(filepath){
		if(!filepath) return;
		$.ajax({
		url : '../soa_order',
		type : 'post',
		data : {
			fun : 'delete_file_db',
			p1 : filepath
		},
		async : true,
		timeout : 10000,
		dataType : 'text',
		contentType : 'application/x-www-form-urlencoded; charset=utf-8',
		success : function(data) {
			var json = "";
			try{
				json = str2json(data);
				if (json.rs[0].result == "1") {
					console.log("file is delete ok");
					//刷新
					select_mydesktop();
					http_insert_msg_push_create("删除了" + filepath);

				}else{
					console.log("file is delete fail");
				}
			}catch(e){

			}
		},
		error : function() {
			console.log(" select_mydesktop 失败！");

		}
	});
}
/*-----------------------------------------------------我的桌面 结束-------------------------------------------------------*/