//====================================================
//模块功能：个人信息页面 控制器
//模块日期：2017-01-20
//模块作者：关宇
//====================================================
var _id=unescape(getQueryString("id"));

var _cookierId =""; // 登录的id

var $btnUpdatePhoneInfo;
var $btnUpdatePasswordInfo;
var $btnUpdateNickname;// 修改按钮
var $btnUpdateQQ;
var $btnUpdateCn;
var $btnUpdateQiye;
var $btnUpdateDepartment;


/**
 * 入口
 */
$(document).ready(function() {
	jQuery('input[placeholder]').placeholder(); // 2016/12/29
	main();
});

/**
 * 主函数
 */
function main() {
	_cookierId = getCookieValue("id");
	http_select_myinfo_forId();
	getElement();
	setEvent();
	g_validate_updateNicknameForm();
	g_validate_updateQQForm();
	g_validate_updateCnForm();
	g_validate_updateQiyeForm();
	g_validate_updateDepartmentForm();
}

/**
 * 获取元素
 */
function getElement(){
	$btnUpdatePasswordInfo=$('#btnUpdatePasswordInfo');
	$btnUpdatePhoneInfo = $('#btnUpdatePhoneInfo');
	$btnUpdateNickname = $('#btnUpdateNickname');
	$btnUpdateQQ = $('#btnUpdateQQ');
	$btnUpdateCn = $('#btnUpdateCn');
	$btnUpdateQiye = $('#btnUpdateQiye');
	$btnUpdateDepartment = $('#btnUpdateDepartment');
}

/**
 * 事件绑定
 */
function setEvent(){
	$btnUpdatePasswordInfo.click(function(){
		btnUpdatePasswordInfo_click();
	});
	$btnUpdatePhoneInfo.click(function(){
		btnUpdatePhoneInfo_click();
	});
	$btnUpdateNickname.click(function(){
		btnUpdateNickname_click();
	});
	$btnUpdateQQ.click(function(){
		btnUpdateQQ_click();
	});
	$btnUpdateCn.click(function(){
		btnUpdateCn_click();
	});
	$btnUpdateQiye.click(function(){
		btnUpdateQiye_click();
	});
	$btnUpdateDepartment.click(function(){
		btnUpdateDepartment_click();
	});
}

// 跳转到修改密码页面
function btnUpdatePasswordInfo_click() {
	window.location.href="eyt_my_info_update_password";
}
//跳转到修改手机页面
function btnUpdatePhoneInfo_click() {
	window.location.href="eyt_my_info_update_phone";
}

// 显示修改昵称按钮
function btnUpdateNickname_click() {
	$('#newNickname').modal('show');
}
//显示修改QQ按钮
function btnUpdateQQ_click() {
	$('#newQQ').modal('show');
}

//显示修改姓名按钮
function btnUpdateCn_click() {
	$('#newCn').modal('show');
}

//显示修改企业按钮
function btnUpdateQiye_click() {
	$('#newQiye').modal('show');
}

//显示修改部门按钮
function btnUpdateDepartment_click() {
	$('#newDepartment').modal('show');
}










