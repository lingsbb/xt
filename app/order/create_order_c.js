

var _orderid;//上个页面传的订单号
_orderid = unescape(getQueryString("orderid"));
// 用户id 
var _userId = getCookieValue("id");
var p = "1";
var $btnQuery;// 查询按钮
var $txtTaskCn;// 查询条件的任务名称
var _txtTaskCn_v;// 查询任务名的值
var $btnReload;// 刷新按钮
var valiEmailArr = [];
var taskid = ""; // 任务id
var filelist = ""; // 存储filename
var filelist1 = ""; // 存储filename
var rowEmailId = 0;
var rowTaskWokerId = 0;

var $btnCommitFile; //提交文件
var $taskConfig; // 任务名称
var selectTask = "";//已选择的任务

var rgfn_a= ""; // 4位随机数字
var rgsn_a=""; // 6位随机英文

/**
 * 入口函数
 */
$(document).ready(function() {
	$(".full-height-scroll").slimScroll({
		height : "100%"
	});
	$("[data-toggle='tooltip']").tooltip();
	main();
});

/**
 * 主函数
 */
function main() {
	getElement();
	setElement();
	setEvent();
	search(p, false);
	startPagebar();
	select_mydesktop();
	getOrderInfo();
}

/**
 * 返回上一页
 */
function goback(){
	window.location.href="eyt_order_index2";
}

function setEvent() {	
	//刷新页按钮
	$btnReload.click(function() {
		btnReload_click();
	});
	//提交上传文件信息
	$btnCommitFile.click(function() {
		if($('#fileQueue2').html()==""){
			alert("文件上传后才可提交!");
		}else{
			insertFileInfo();
	}
	});
	// msn 任务查询按钮
	$btnQuery.click(function() {
		search(p, false);
		startPagebar();
	});
}

/**
 * 任务详情点击执行
 */
function toExecute(taskid){
	window.parent.onMessageClick(taskid,null);
}
/**
 * 创建新任务或任务详情点击右上图标 返回订单页
 */
// function previous(){
// 	window.location.href = "../order/eyt_order_index2";
// }

function btnReload_click(){
	// 刷新任务表格
	search(p, false);
	startPagebar();
}
