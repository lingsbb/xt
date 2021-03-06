//====================================================
//模块功能：外部联系人列表页面 控制器
//模块日期：2017-01-20
//模块作者：关宇
//====================================================
var _delete_id=""; //删除ID
var _cookierId =""; // 获取
var p = "1";// 默认起始页

var $btnAddConcatOut;// 跳转到添加页面
var $btnSaveForm; // 弹出删除对话框的删除按钮

/**
 * 入口函数
 */
$(document).ready(function(){
	jQuery('input[placeholder]').placeholder(); // 2016/12/29
	main();
});

/**
 * main 函数
 */
function main(){
	_cookierId = getCookieValue("id"); 
	getElement();
	setEvent();
	search('1',false);
	startPagebar();
	
}
/**
 * 获取元素
 */
function getElement(){
	$btnAddConcatOut=$('#btnAddConcatOut');
	$btnSaveForm = $('#btnSaveForm');
}
/**
 * 事件绑定
 */
function setEvent(){
	$btnAddConcatOut.click(function(){
		btnAddConcatOut_click();
	});
	$btnSaveForm.click(function(){
		btnSaveForm_click();
	});
}
/**
 * 跳转到添加页面
 */
function btnAddConcatOut_click(){
	window.location.href="eyt_concat_out_add";
}

/**
 * 跳转到详情页
 */
function btn_Details(uid){
	window.location.href="eyt_concat_out_details?id="+uid;
}

/**
 * 删除的确认提示框
 */
function btn_Delete_Alert(cn,outid){
	//alert(cn + "=====" + inid);
	_delete_id = outid;
	$('#span_cn').html(cn);
	$('#modForm').modal('show');
}
/**
 * 删除确定按钮
 */
function btnSaveForm_click() {
	if (!_delete_id){
		
	} else {
		http_delete_eyt_concat_Out_byid(_delete_id);
	}
}

/**
 * 张琦的随机规则 好像没用
 */
function randomWord(randomFlag, min, max){
    var str = "",
        range = min,
        arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
 
    // 随机产生
    if(randomFlag){
        range = Math.round(Math.random() * (max-min)) + min;
    }
    for(var i=0; i<range; i++){
        pos = Math.round(Math.random() * (arr.length-1));
        str += arr[pos];
    }
    return str;
}