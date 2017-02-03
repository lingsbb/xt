//====================================================
//模块功能：创建新运单-创建部分 控制器
//模块日期：2017-01-20
//模块作者：莫胜男
//====================================================

//界面查询控件
var $txtnewname;//订单名称
var $txtnewyewu;//业务号
var $txtcustomername;//客户名称
var $txtbgcity;//目的地
var $txttransporttype;//运输方式

var _txtnewname_v;//业务号
var _txtnewyewu_v;//业务号
var _txtcustomername_v;//客户名称
var _txtbgcity_v;//报关地
var _txttransporttype_v;//运输方式
//创建新订单下拉框   必须在一开始就获取控件，所以放在首页中
var $txtstartcity;//起运地
var $txtendcity;//目的地

var _txtstartcity_v;//起运地
var _txtendcity_v;//目的地

var $btnQuery;//查询按钮
var $btnCreate;//创建按钮

/**
 * 创建新运单
 */
function addNewOrder() {
//	alert(_userId);
	http_insert_order_xt(_userId);
}

/**
 * 创建新运单的元素获取
 */
function getElement_create(){
	 $txtnewname= $('#txtnewname');//订单名称
	 $txtnewyewu= $('#txtnewyewu');//业务号
	 $txtcustomername= $('#txtcustomername');//客户名称
	 
	 $txtbgcity= $('#txtbgcity');//报关城市

	 // $txttransporttype= $('#txttransporttype');//运输方式
	 // //起运地，目的地特殊
	 $txtstartcity =  $('#wlname1');
	 $txtendcity= $('#txtIn');
}


/**
 * 运输方式点击后显示在下拉框中
 */
function getTranstype(childControl){
	// 运输方式id
	_txttransporttype_v=childControl.attributes["data"].value;
	//alert(_txttransporttype_v);
	// 显示子控件
	// alert(childControl.innerHTML);
	$('#dLabel').html($(childControl).parent().parent().prev().text()+" - "+childControl.innerHTML);


}