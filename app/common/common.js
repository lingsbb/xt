//====================================================
//模块功能：全局变量定义
//模块日期：2017-01-20
//====================================================
/**
 * 虚拟目录名称
 */
var g_virtual_dir="/eyt_xt";//""
//nginx文件服务器ip
// var g_webserver_ip = "59.110.160.193:8080";
/**
 * 不带http的web容器地址
 */
var g_webserver_ip = "192.168.1.10:8080";//"192.168.99.231:8080";
/**
 * 带http的web容器地址
 */
var g_http_webserver_ip = "http://"+g_webserver_ip;
/**
 * nginx服务器地址
 */
var g_nginx_ip = "http://59.110.160.193";
/**
 * mqtt服务器地址
 */
var g_mqtt_ip ="59.110.160.193";// "http://192.168.1.18";
// 测试svn
//zqx 文件下载地址 nginx服务器详细的地址
/**
 * 文件下载地址（不包括excel word ptt pdf等文件）
 */
var g_downfile_url=g_nginx_ip+":5555/";//不包括excel word ptt pdf等文件
/**
 * 文件下载地址（包括excel word ptt等文件）
 */
var g_downfile_url_new =g_nginx_ip+":5555/App_Data/";//excel word ptt等文件
//zqx 创建任务 发送邮件或短信内容地址连接
//var g_create_order_sendEmailAndSmsUrl = g_serverip+":8080/eyt_xt/order/eyt_order_task_index2?taskid=";
/**
 * zqx 创建任务 发送邮件或短信内容地址连接 已经废弃
 */
var g_create_order_sendEmailAndSmsUrl = g_http_webserver_ip+g_virtual_dir+"/public/eyt_index?taskid"+encodeURIComponent("=");
/**
 * 邀请协同人的时候 给这个人邮件里面的链接地址
 */
// var g_invite_url = g_http_webserver_ip+g_virtual_dir+"/invite/"
/**
 * 邀请协同人的时候 给这个人邮件里面的链接地址
 */
var g_invite_url = g_http_webserver_ip+g_virtual_dir+"/public/eyt_register_new_new?email=";

//var g_task_url = g_http_webserver_ip+"/public/eyt_register_new/"
//消息服务器地址
// http://"+g_msg_url+":8080/eyt_xt/reg/"+
/**
 * 分享用的地址
 */
var g_shared_address =g_http_webserver_ip+g_virtual_dir+"/order/eyt_order_task_index2?";
//登录页地址
/**
 * 添加到收藏夹需要用的地址
 */
var g_index_collection = g_webserver_ip+g_virtual_dir+"/index";

/*var data1 = [ {
	name : '111',
	email : '111@gmail.com'
}, {
	name : '222',
	email : '222@gmail.com'
}, {
	name : '333',
	email : '333@gmail.com'
} ];*/

/**
 * 从浏览器下载文件 
 */
function downloadBrowser(){
	var os=getOSInfo();
	var isIE=getBrowserInfo();
	var browser=getBrowserInfoDetailed();
	var verinfo = (browser+"").replace(/[^0-9.]/ig,"");
	var v_info=parseFloat(verinfo);
	//alert("你的操作系统是:"+os+",你的浏览器是:"+v_info);
	//if(os=="Win7"){
		if(isIE=="IE"&&v_info<=8.0){
			//alert("您的浏览器是:"+browser+"。建议您使用谷歌或者火狐浏览器!");
			window.location.href="../public/browser_upgrade" ;
		}else{
			window.location.href="../public/eyt_index" ;
		}
	//}
	//alert("你的操作系统是："+os+"；你的浏览器是："+isIE);
}
/**
 * 获取浏览器一般信息
 */
function getBrowserInfo(){
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1;
    if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
        return "IE";
    } //判断是否IE浏览器
    else return "Other";
}
/**
 * 获取浏览器详细信息
 */
function getBrowserInfoDetailed(){
	var agent = navigator.userAgent.toLowerCase() ;

	var regStr_ie = /msie [\d.]+;/gi ;
	var regStr_ff = /firefox\/[\d.]+/gi
	var regStr_chrome = /chrome\/[\d.]+/gi ;
	var regStr_saf = /safari\/[\d.]+/gi ;
	//IE
	if(agent.indexOf("msie") > 0)
	{
	return agent.match(regStr_ie) ;
	}

	//firefox
	if(agent.indexOf("firefox") > 0)
	{
	return agent.match(regStr_ff) ;
	}
	
	//Safari
	if(agent.indexOf("safari") > 0 && agent.indexOf("chrome") < 0)
	{
	return agent.match(regStr_saf) ;
	}
	
	//Chrome
	if(agent.indexOf("chrome") > 0)
	{
	return agent.match(regStr_chrome) ;
	}

}
/**
 * 获取OS版本
 */
function getOSInfo(){
	 var sUserAgent = navigator.userAgent;
	 var isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows");
	 var isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel");          if (isMac)
	 return "Mac";
	var isUnix = (navigator.platform == "X11") && !isWin && !isMac;
	if (isUnix) return "Unix";
	var isLinux = (String(navigator.platform).indexOf("Linux") > -1);
	if (isLinux) return "Linux";
	if (isWin) {
	var isWin2K = sUserAgent.indexOf("Windows NT 5.0") > -1 || sUserAgent.indexOf("Windows 2000") > -1;
	if (isWin2K) return "Win2000";
	var isWinXP = sUserAgent.indexOf("Windows NT 5.1") > -1 || sUserAgent.indexOf("Windows XP") > -1;
	if (isWinXP) return "WinXP";
	var isWin2003 = sUserAgent.indexOf("Windows NT 5.2") > -1 || sUserAgent.indexOf("Windows 2003") > -1;
	if (isWin2003) return "Win2003";
	var isWin2003 = sUserAgent.indexOf("Windows NT 6.0") > -1 || sUserAgent.indexOf("Windows Vista") > -1;
	if (isWin2003) return "WinVista";
	var isWin2003 = sUserAgent.indexOf("Windows NT 6.1") > -1 || sUserAgent.indexOf("Windows 7") > -1;
	if (isWin2003) return "Win7";
	}
	return "other";
}
/**
 * 查询get请求的参数
 */
function getQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}
/**
 * json对象变字符串
 */
function json2str(json) {
	var str = JSON.stringify(json);
	return str;
}
/**
 * 字符串变json对象
 */
function str2json(str) {
	try
	{
		var json = JSON.parse(str);
		return json;
	}
	catch(err)
	{
		// txt="此页面存在一个错误。\n\n"
		// txt+="错误描述: " + err.description + "\n\n"
		// txt+="点击OK继续。\n\n"
		// alert(txt)
	}
}
/**
 * 删除json对象
 */
function delJson(index, dataArray){
    var len=dataArray.length;
    for(var i=0;i<len;i=i+1){
        if(i==(index-1)){
            for(var j=i+1;j<len;j=j+1){
                
                dataArray[j-1]=dataArray[j];
            }
            dataArray.length--;
        }
    }
}
/**
 * 添加json对象
 */
function addJson(json, newJsonObj) {
	json.push(newJsonObj);
}

/**
 * /去除左右空格
 */
function trim(s){
    return s.replace(/(^\s*)|(\s*$)/g, "");
}