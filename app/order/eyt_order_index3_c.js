//====================================================
//模块功能：归档订单 视图层
//模块日期：2017-01-20
//模块作者：莫胜男
//====================================================
//id
var _userId;
var p="1";
var _status="6";//默认为1

_userId=getCookieValue("id");

//界面查询控件
var $txtyewu;//业务号
var $txtxianghao;//箱号
var $txtstart;//开始时间
var $txtend;//结束时间

var $count2;//修改中数量
/*var $count3;//订舱数量
var $count4;//报关数量
var $count5;//运输数量
var $count6;//完结数量
*/
var _txtyewu_v;//业务号
var _txtxianghao_v;//箱号
var _txtstart_v;//开始时间
var _txtend_v;//结束时间


var flag="0";

/**
 * 入口
 */
$(function(){
	getElement();
	
	setEvent();
/*	//查询各状态数量
	selectStatusCount(_userId);*/
	//第一次默认查询
	search(p,false);
	startPagebar();
});

/**
 * 初始化控件
 */
function getElement(){
	$txtyewu = $('#txtyewu');
	$txtxianghao= $('#txtxianghao');
	$txtstart = $('#txtstart');
	$txtend = $('#txtend');
	
	$btnQuery=$("#btnQuery");
	
	$count2 = $('#count2');
	
	
	
}


//给按钮添加事件
function setEvent(){
	$btnQuery.click(function(){
		//第一次默认设置为状态为2，
		query(_status);
	});
	
}

/**
 * 进入任务列表
 */
function btn_Details(orderid){
	window.location.href="eyt_order_task_index?orderid="+orderid;

	 //alert(id);
}
當前
var currentTab=1;

/**
 * 查询过程
 */
function query(){
	/*//如果切換选项卡，则取选项卡的状态值
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
	}*/
	//异步请求
	search(p,true);
	//重新设置分页
	startPagebar();
} 


/*//显示各状态订单的数量
function selectStatusCount(id1){
	http_select_statusCount(id1);
}*/