//读取cookie值获得用户名
function getUserNameByCookie(){
	if(getCookieValue('username')!= "" ||getCookieValue('username')!= null){
		_userName_v=getCookieValue('username');
	}else{
		_userName_v=getCookieValue('useremail');
	}
	
	
	v_setUserName(_userName_v);
}
//读取cookie值获取用户id
function getUserIdByCookie(){
	_userId_v=getCookieValue('id');
	http_select_task_push_message(_userId_v);
}
//查询消息通知
function http_select_task_push_message(_userId_v){
	//alert(_userId_v);
	$.ajax({
		url: '../soa_order',
		type: 'post',
		data: {
	        fun: 'select_task_push_message',
	        p1: _userId_v
		},
		async: true,
		timeout : 10000, 
		dataType:'text', 
		contentType: 'application/x-www-form-urlencoded; charset=utf-8',
		beforeSend: function(){ 
   		}, 
		success: function(data) {
			//alert(data);	
			var json=str2json(data);
			if (json.status=="200"){
				var result=json.rs[0].result;
				for(var i=0;i<json.rs.length;i++){
					var createtime = json.rs[i].createtime;
					var info = json.rs[i].info;
					var cn = json.rs[i].cn;
					var push_type = json.rs[i].push_type;
					var taskid = json.rs[i].taskid;
					addRow(createtime,info,cn,push_type,taskid);
				}
			}
			else if (json.status=="404"){
				//alert("请求网络超时");
				//$.messager.alert("提示信息", "请求网络超时","error"); 
			}
		},
		error: function() {
			/*alert("请求网络超时");*/
		},
		complete : function(XMLHttpRequest,status){
		}
	});
}


//查询协同订单数量（修改，订舱，报关，运输  状态四个订单数量）
function http_select_orderCount(id1){
	$.ajax({
		async: false,
		url: "../soa_order",
		datatype: 'json',
		type: "post",
		data: {
			fun:"select_order_xt_byStatus_newSumCount",
			p1:id1
			
		},
		success: function (data1) {
			if (data1 != null) {
				var jsonData = JSON.parse(data1);
				var totalData = jsonData.total;
				if(totalData!=0){
					var rowsData = jsonData.rs[0];
					if(rowsData){
						var count=rowsData.count;
					
						v_set_sumCount(count);
					}else{
						v_set_sumCount("");
					}
				}else{
					v_set_sumCount("");
				}
				
			}
		}
	});
}

//获取所有userid 的任务 id
function http_select_my_all_dingyue_tesk() {

	$.ajax({
		type:"POST",//提交数据的类型 POST GET
	    url:"../soa_order", //提交的网址
	    data:{//提交的数据
	    	fun:"select_my_all_dingyue_tesk",
	    	p1:_userId_v // 登录的id 用于关联用
	    },
	    datatype: "json",//"xml", "html", "script", "json", "jsonp", "text".  //返回数据的格式
	    timeout : 30000, 
	    contentType: 'application/x-www-form-urlencoded; charset=utf-8',
	    async: false,
	    beforeSend:function(){//在请求之前调用的函数
	            	//$("#msg").html("logining");
	    },
	    success:function(data){ //成功返回之后调用的函数   
	    	if(!data){
	    		return;
	        }
	    	var successDataJson = JSON.parse(data);
	        var rsData = successDataJson.rs;
	        $.each(rsData,function(index,value) {
	        	var topic =  "/topic/"+value.taskid;
	        	window.dingyueMap[value.taskid]=topic;
	         });
	     },
	     complete: function(XMLHttpRequest, textStatus){//调用执行后调用的函数
	      },
	      error: function(){  //调用出错执行的函数
	    	  //请求出错处理
	      }         
	 });
}
