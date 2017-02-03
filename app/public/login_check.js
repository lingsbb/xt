//====================================================
//模块功能：登陆 校验
//模块日期：2017-01-20
//模块作者：刘霄
//====================================================

/**
 * 校验是否符合邮箱规则
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
 * 新账号验证规则
 */
function isSql(sql){
	var reg= /select|update|delete|exec|count|'|"|=|;|>|<|%/i;
	if (reg.test(sql)){
		return "T";
	} else{
		return "F";
	}
}