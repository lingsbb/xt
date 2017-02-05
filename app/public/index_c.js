//====================================================
//模块功能：工作台首页 模型层
//模块日期：2017-01-20
//模块作者：莫胜男
//====================================================

/**
 * 全局的订阅map
 */
window.dingyueMap = {};
/**
 * MQTT全部的全部消息的数组
 */
var _all_new_msg_list={};
/**
 * 用户名
 */
var $userName;//用户名
/**
 * 协同订单数量(不包含已完结)
 */
var $orderSumCount;//
/**
 * 收藏按钮
 */
var $btnShoucang;
/**
 * 点击左侧可以随时返回？？？？
 */
var $returnclose;
/**
 * 用户名
 */
var _userName_v;
/**
 * 用户id
 */
var _userId_v;

/**
 * 入口函数
 */
$(document).ready(function(){
	if((window.location.search).length==0){//window.location.search方法是截取当前url中“?”后面的字符串  ？？？为啥要这样
		main();
	}else{
		main2();//是不是给张琦用的啊？？？？
	}	
});

/**
 * main函数
 */
function main(){
/*	setValidate();*/
	getElement();
	setEvent();
	//================================初始化调用服务================================
	getUserNameByCookie();
	getUserIdByCookie();	
	//显示协同订单数量
	http_select_orderCount(_userId_v);
	http_select_my_all_dingyue_tesk();
	//连接推送服务器
	connectMQTT();
}

/**
 * main2函数  张琦 跳转执行页面
 */
function main2(){
	getElement();
	getUserNameByCookie();
	getUserIdByCookie();
	//显示协同订单数量
	http_select_orderCount(_userId_v);
	var search = window.location.search;
	//var taskid = search.split("%3D")[1];
	//var url ="../order/eyt_order_task_index2?taskid="+taskid;
	// console.log("search前"+search);
	// search = search.replace(/%26/g,'&');
	// search = search.replace(/%3D/g,'=');
	// console.log("search后"+search);
	var url ="../order/eyt_order_task_index2" +search;
	$('#linkZx').attr('href',url);
//		console.log(url);
	document.getElementById("linkZx").click();
	//	window.location.href="../order/eyt_order_task_index2?taskid="+taskid;
}

/**
 * 获取元素
 */
function getElement(){
	//用户名
	$userName=$('#userName');
	$btnShoucang=$('#btnShoucang');
	
	$orderSumCount=$('#orderSumCount');//协同订单数量
	$returnclose=$('#returnclose');
}


/**
 * 给按钮添加事件
 */
function setEvent(){
	$btnShoucang.click(function(){
		btnShoucang_click();
	});
	$returnclose.click(function(){//点击左侧可以随时返回？？？？
		$('#right-sidebar').removeClass('sidebar-open');
	});
}

/**
 * 收藏按钮 点击事件
 */
function btnShoucang_click(){
	var ctrl = (navigator.userAgent.toLowerCase()).indexOf('mac') != -1 ? 'Command/Cmd' : 'CTRL';  
	if (document.all) {  
        window.external.addFavorite(g_index_collection, '运易达跨境货代协同服务平台')  ;
        alert('成功添加到收藏夹')  ;
    } else if (window.sidebar) {  
        window.sidebar.addPanel('运易达跨境货代协同服务平台', g_index_collection, "")  ;
        alert('成功添加到收藏夹')  ;
    } else {　　　　//添加收藏的快捷键  
        alert('添加失败\n您可以尝试通过快捷键' + ctrl + ' + D 加入到收藏夹~')  ;
    }  
}


/**
 * 首页任务跳转 （为执行页面提供的开放接口）
 */
function enterMyDesktopWithNewTab(orderid){ 
	if(isTabExist(orderid)){
		changePageById(orderid);
		return;
	}
	var url ="../order/eyt_order_task_index?orderid="+orderid;
	var newTab = getNewTabindex(orderid,url);
	resetTab(newTab);
	showPushFrame(url, orderid);
}

/**
 * 曾庆欣修复消息的时候增加的开放接口
 */
function closeTaskTabAndFrame(taskid){
	$("#tab_"+taskid).remove();
	$("#iframe"+taskid).remove();
}


/**
 * 创建订单 没有企业 跳转 （完善个人信息页）
 */
function enterMyInfo(){ 
	if(isTabExist(_userId_v)){
		return;
	}
	var url ="../my/eyt_my_info?iscreatefail=a";
	var newTab = getNewTabPerson(_userId_v,url);
	resetTab(newTab);
	showPushFrame(url, _userId_v);
}
