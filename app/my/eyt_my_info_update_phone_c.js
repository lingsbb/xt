//====================================================
//模块功能：修改我的个人信息--手机号码 控制器
//模块日期：2017-01-20
//模块作者：关宇
//====================================================
var _cookierId =""; // 登录的id
var sleep = 60, interval = null; // 设置点击发送验证码倒计时的参数
var $btnUpdatePhone; //点击修改手机的按钮
/**
 * 入口
 */
$(document).ready(function() {
	jQuery('input[placeholder]').placeholder(); // 2016/12/29
	main();
	getElement();
	setEvent();
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
	$btnUpdatePhone=$('#btnUpdatePhone');
}
/**
 * 绑定事件
 */
function setEvent(){
	$btnUpdatePhone.click(function(){
		btnUpdatePhone_click();
	});
}

/**
 * 修改按钮
 */
function btnUpdatePhone_click(){
	var phone = $('#newPhone').val();
	var zzz =  isPhoneNo(phone);
	var code = $('#vcode').val();
	var www =  isYanZhengMa(code);
	if(zzz){
		if(www){
			http_UpdatePhone(phone, code);
		}else {
			alert("请输入正确的验证码");
		}
		
	} else {
		alert("请输入正确的手机号");
	}
	
	
}

/**
 * 获得验证码的倒计时方法
 */
function sendVCode() {
	var phone = $('#newPhone').val();
	var zzz =  isPhoneNo(phone);
	if(zzz) {
		// 发请求
		http_send_validateCode_For_updatePhone();
		if (!interval){
			//document.getElementById ('btnSend').style.backgroundColor = 'rgb(243, 182, 182)';
			document.getElementById ('btnSend').className = 'btn btn-default';
			document.getElementById ('btnSend').disabled = "disabled";
			document.getElementById ('btnSend').style.cursor = "wait";
			document.getElementById ('btnSend').value = "重新发送 (" + sleep-- + ")";
	        interval = setInterval (function ()
	        {
	            if (sleep == 0)
	            {
	                if (!!interval)
	                {
	                    clearInterval (interval);
	                    interval = null;
	                    sleep = 60;
	                    document.getElementById ('btnSend').style.cursor = "pointer";
	                    document.getElementById ('btnSend').removeAttribute ('disabled');
	                    document.getElementById ('btnSend').value = "获得手机验证码";
	                    //document.getElementById ('btnSend').style.backgroundColor = '';
	                    document.getElementById ('btnSend').className = 'btn btn-primary';
	                }
	                return false;
	            }
	            document.getElementById ('btnSend').value = "重新发送 (" + sleep-- + ")";
	        }, 1000);
	    }
	}else {
		alert("请输入正确的手机号");
	}

}



/**
 * 验证手机号
 */
function isPhoneNo(phone) {
	var pattern = /^1[3|4|5|7|8]\d{9}$/; 
	return pattern.test(phone); 
}

/**
 * 验证验证码
 */
function isYanZhengMa(code) {
	var pattern = /^[0-9]*$/; 
	return pattern.test(code); 
}