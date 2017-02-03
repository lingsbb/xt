//====================================================
//模块功能：注册-第二版-废弃 验证层
//模块日期：2017-01-20
//模块作者：刘霄
//====================================================

/**
 * 邮箱格式校验
 */
function isEmail(Email) {
	var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (reg.test(Email)){
		return "T";
	} else{
		return "F";
	} 
}

/**
 * 手机号规则校验
 */
function isTel(Tel) {
	var reg = /^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/i;
	if (reg.test(Tel)){
		return "T";
	} else{
		return "F";
	}
}

//密码校验
function isPassword(pwd) {
	var reg = /^[A-Za-z0-9]{6,6}$/;
	if (reg.test(pwd)){
		return "T";
	} else{
		return "F";
	}
}