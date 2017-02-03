//====================================================
//模块功能：我的任务 控制器
//模块日期：2017-01-20
//模块作者：关宇
//====================================================
var _cookierId =""; // 登录的id
var currentTab=1;//當前
var _status="1";//默认为1
var p = "1"; // 默认起始页
var $btnSearchRenWu; // 查询任务按钮
var $btnRefreshRenWu; // 重置按钮
//张琦生成链接规则用的
var rgfn_3 = "";
var rgsn_3 = "";

/**
 * 入口
 */
$(document).ready(function() {
	jQuery('input[placeholder]').placeholder(); // 2016/12/29
	main();
	getElement();
	setEvent();
	//第一次默认查询
	search(p,false);
	startPagebar();
});
/**
 * 主函数
 */
function main() {
	_cookierId = getCookieValue("id");
}
/**
 * 获取元素
 */
function getElement(){
	$btnSearchRenWu = $('#btnSearchRenWu');
	$btnRefreshRenWu = $('#btnRefreshRenWu');
}
/**
 * 事件绑定
 */
function setEvent(){
	$btnSearchRenWu.click(function(){
		var sousuo =$('#searchRenWu').val();
		if (sousuo){
			var a = isTeShuZiFu(sousuo);
//			alert(a);
			if (!a){
				alert("不能输入特殊字符，只能输入中文，数字，英文");
				return;
			} 
		}
		query(_status,true);

	});
	$btnRefreshRenWu.click(function(){
		btnRefreshRenWu_click();
	});
}
/**
 * 刷新当前页面.
 */
function btnRefreshRenWu_click(){
	window.location.reload();//刷新当前页面.
}

/**
 * 查询
 */
function query(tab,isSearch){
	//如果切換选项卡，则取选项卡的状态值
	if(!isSearch){
		var data=tab.attributes["data"].value;
		 if(!data)return ;
		 if(data.index && data.index==currentTab)return ;
		 //重置选项卡
		 v_reload();	
		 //赋值状态
		 _status=JSON.parse(data).state;
	}
	else{
		//只点击按钮时
		_status=tab;
	}
	
	search(p,false);
	//重新设置分页
	startPagebar();
} 



/**
 * 验证不能输入特殊字符
 */
function isTeShuZiFu(a) {
	var pattern = /^[\u4E00-\u9FA5A-Za-z0-9]+$/; 
	return pattern.test(a); 
}


/**
 * 新规则，新的任务链接规则
 */
function gotoTaskView(index, taskid) {
	//var taskid_3= item.taskid;
	//alert(taskid);
	console.log("==============button====taskid============"+taskid);
	isRead_a(taskid);
	//window.location.href = "../order/eyt_order_task_index2?taskid="+item.taskid;
}

/**
 * 生成跳转的链接 执行跳转
 */
function isRead_a(taskid) {
	var userId = getCookieValue("id");
	$.ajax({
		url: '../soa_order',
		type: 'post',
		data: {
	        fun: 'select_followuserAndTaskWorkuser',
	        p1: userId,
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
					randomlyGeneratedFourNumbers_3();
					randomlyGeneratedSixEnglish_3();
					//var timestamp = (new Date()).valueOf() +"";

					// var url ="../order/eyt_order_task_index2?u="+_userId +"&t="+taskid + "&p="+ rgfn_2 +"a" + "&l="+timestamp;
					var url ="../order/eyt_order_task_index2?u="+userId +"&t="+taskid + "&p="+ rgfn_3 +"a" + "&l="+rgsn_3;
					console.log("==================a============"+url);
					window.location.href = url;
					// var newTab = getNewTab(taskid,url);
					// resetTab(newTab);
					// showPushFrame(url, taskid);
				} else {
					randomlyGeneratedFourNumbers_3();
					//var timestamp = (new Date()).valueOf() +"";
					randomlyGeneratedSixEnglish_3();
					var url ="../order/eyt_order_task_index2?u="+userId +"&t="+taskid + "&p="+ rgfn_3 +"b" + "&l="+rgsn_3;
					console.log("==================b============"+url);
					window.location.href = url;
					// var url ="../order/eyt_order_task_index2?u="+_userId +"&t="+taskid + "&p="+ rgfn_2 +"b" + "&l="+timestamp;
					// var newTab = getNewTab(taskid,url);
					// resetTab(newTab);
					// showPushFrame(url, taskid);
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


/**
 * 随机生成4个数字
 */
function randomlyGeneratedFourNumbers_3() {
	rgfn_3 = ""; // 把值制空
	var charactors="1234567890";
	var value='',i;
	for(j=1;j<=4;j++){
		i = parseInt(10*Math.random()); 　
		value = value + charactors.charAt(i);
	}
	rgfn_3 = value;// 把随机出来的数字赋值过去
}

/**
 * 随机生成6个数字
 */
function randomlyGeneratedSixEnglish_3() {
	rgsn_3 = ""; // 把值制空
	var charactors="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var value='',i;
	for(j=1;j<=6;j++){
		i = parseInt(26*Math.random()); 　
		value = value + charactors.charAt(i);
	}
	rgsn_3 = value;// 把随机出来的数字赋值过去
}
