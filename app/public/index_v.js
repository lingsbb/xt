var rgfn_2 = "";
var rgsn_2 = "";
//设置用户名
function v_setUserName(name1){
	
	$userName.html('欢迎  '+name1);

}
//给页面消息通知赋值
function addRow(createtime,info,cn,push_type,taskid){
	//alert(rows);
	if(push_type==2){
		var s=''+
		 '<div class="sidebar-message">'+
	     ' <a   class="J_menuItem" onclick="onMessageClick('+taskid+',\''+createtime+'\')">'+
	     '  <div class="media-body">'+info+' '+   
	     '     <br>'+
	     '     <small class="text-muted">'+createtime+'</small>'+
	     '   </div>'+
	     '  </a>'+
	     ' </div>';
		//$('#tab-1').append(s);
		$('#tab-2').prepend(s);
	}else if(push_type==1 || push_type==0){
		// var s=''+
		//  '<div class="sidebar-message">'+
	    //  '  <div class="media-body">'+info+' '+   
	    //  '     <br>'+
	    //  '     <small class="text-muted">'+createtime+'</small>'+
	    //  '   </div>'+
	    //  ' </div>';
		// //$('#tab-1').append(s);
		// $('#tab-3').prepend(s);
		var s=''+
		 '<div class="sidebar-message">'+
	     ' <a   class="J_menuItem" onclick="onMessageClick('+taskid+',\''+createtime+'\')">'+
	     '  <div class="media-body">'+info+' '+   
	     '     <br>'+
	     '     <small class="text-muted">'+createtime+'</small>'+
	     '   </div>'+
	     '  </a>'+
	     ' </div>';
		$('#tab-3').prepend(s);
	}
	else if(push_type==3 || push_type == -1){
		var s=''+
		 '<div class="sidebar-message">'+
	     ' <a   class="J_menuItem" onclick="onMessageClick('+taskid+',\''+createtime+'\')">'+
	     '  <div class="media-body">'+info+' '+   
	     '     <br>'+
	     '     <small class="text-muted">'+createtime+'</small>'+
	     '   </div>'+
	     '  </a>'+
	     ' </div>';
		$('#tab-1').prepend(s);
	}
}


//设置左侧菜单  协同订单 的数量(除去已完结,包含修改、订舱、报关、运输)
function v_set_sumCount(count){
	$orderSumCount.html(count);
}

// 据说一个参数的没有用了
function onMessageClick(taskid,createtime){ // 点击消息
	
	if(createtime && _all_new_msg_list.hasOwnProperty(createtime)){
			delete _all_new_msg_list[createtime];
			refreshNotifyNum();
	}
	//update 2017-01-03 by jx
	if(isTabExist(taskid)){
		return;
	}
	isRead_a(taskid);
	// var url ="../order/eyt_order_task_index2?taskid="+taskid;
	// var newTab = getNewTab(taskid,url);
	// resetTab(newTab);
	// showPushFrame(url, taskid);
}


function isRead_a(taskid) {
	var _userId = getCookieValue("id");
	$.ajax({
		url: '../soa_order',
		type: 'post',
		data: {
	        fun: 'select_followuserAndTaskWorkuser',
	        p1: _userId,
			p2:taskid
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
				if (aaaa == "1") {
					randomlyGeneratedFourNumbers_2();
					randomlyGeneratedSixEnglish_2();
					var timestamp = (new Date()).valueOf() +"";

					// var url ="../order/eyt_order_task_index2?u="+_userId +"&t="+taskid + "&p="+ rgfn_2 +"a" + "&l="+timestamp;
					var url ="../order/eyt_order_task_index2?u="+_userId +"&t="+taskid + "&p="+ rgfn_2 +"a" + "&l="+rgsn_2;
					console.log("==================a============"+url);
					var newTab = getNewTab(taskid,url);
					resetTab(newTab);
					showPushFrame(url, taskid);
				} else {
					randomlyGeneratedFourNumbers_2();
					var timestamp = (new Date()).valueOf() +"";
					randomlyGeneratedSixEnglish_2();
					var url ="../order/eyt_order_task_index2?u="+_userId +"&t="+taskid + "&p="+ rgfn_2 +"b" + "&l="+rgsn_2;
					console.log("==================b============"+url);
					// var url ="../order/eyt_order_task_index2?u="+_userId +"&t="+taskid + "&p="+ rgfn_2 +"b" + "&l="+timestamp;
					var newTab = getNewTab(taskid,url);
					resetTab(newTab);
					showPushFrame(url, taskid);
				}

			} else {
				 alert("网络异常");
			}
	
		},
		error: function() {

			alert("网络异常");
		}
		,
		complete : function(XMLHttpRequest,status){
		}
	});
}


// 随机生成4个数字
function randomlyGeneratedFourNumbers_2() {
	rgfn_2 = ""; // 把值制空
	var charactors="1234567890";
	var value='',i;
	for(j=1;j<=4;j++){
		i = parseInt(10*Math.random()); 　
		value = value + charactors.charAt(i);
	}
	rgfn_2 = value;// 把随机出来的数字赋值过去
}

// 随机生成6个数字
function randomlyGeneratedSixEnglish_2() {
	rgsn_2 = ""; // 把值制空
	var charactors="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var value='',i;
	for(j=1;j<=6;j++){
		i = parseInt(26*Math.random()); 　
		value = value + charactors.charAt(i);
	}
	rgsn_2 = value;// 把随机出来的数字赋值过去
}



function isTabExist(taskid){
	 var tabs = $(".page-tabs-content > a");
	 for(var i = 0; i < tabs.length; i++){
		 if($(tabs[i]).attr('data') == taskid){
			 return true;
		 }
	 }
	 return false;
}
/**
 * 获取新的tab
 * @param taskid
 * @param url
 * @returns
 */
function getNewTab(taskid,url){
	return newTab = $("<a href=\"javascript:;\" id='tab_"+taskid+"'  class=\"active J_menuTab\" data=\""+taskid+"\" data-id=\""+url+"\">任务"+taskid+"<i class=\"fa fa-times-circle\"></i></a>");
}
/**
 * 重置tab
 */
function resetTab($currTab){
	var tabDiv = $(".page-tabs-content");
	var tabs = $(".page-tabs-content > a");
	for(var i = 0;i<tabs.length;i++){
		$(tabs[i]).attr("class"," J_menuTab");
	}
	tabDiv.append($currTab);
}

function showPushFrame(url,taskid){
	var msgFrame = $('<iframe class="J_iframe" id="iframe'+taskid+'" width="100%" height="100%" src="'+url+'" frameborder="0" data-id="'+url+'" seamless target="_blank"></iframe>');
	$("#content-main").prepend(msgFrame);
}


/**
 * 根据id切换tab 和 iframe zqx
 * @param id tabid
 */
function changePageById(id){
	var tabs = $(".page-tabs-content > a");
	var iframes = $("#content-main > iframe");
	var realTab;
	for(var i = 0;i<tabs.length;i++){
		var tabid = $(tabs[i]).attr("data")
		$(tabs[i]).attr("class"," J_menuTab");
		$(iframes[i]).css("display","none");
		if(tabid && tabid == id){
			realTab = tabs[i];
		}
	}
	if(realTab){
		$(realTab).attr("class"," J_menuTab active");
		$("#iframe"+id).css("display","inline");
	}
}

/**
 * 获取新的tab 首页任务
 * @param taskid
 * @param url
 * @returns
 */
function getNewTabindex(taskid,url){
	return newTab = $("<a href=\"javascript:;\" class=\"active J_menuTab\" data=\""+taskid+"\" data-id=\""+url+"\">我的桌面"+taskid+"<i  class=\"fa fa-times-circle\"></i></a>");
}


/**
 * 创建新订单 没有企业 获取新的 个人信息页
 * @param taskid
 * @param url
 * @returns
 */
function getNewTabPerson(userid,url){
	return newTab = $("<a href=\"javascript:;\" class=\"active J_menuTab\" data=\""+userid+"\" data-id=\""+url+"\">完善个人信息"+''+"<i  class=\"fa fa-times-circle\"></i></a>");
}
