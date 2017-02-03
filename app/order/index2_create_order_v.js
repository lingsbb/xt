//====================================================
//模块功能：创建新运单-创建部分 视图层
//模块日期：2017-01-20
//模块作者：莫胜男
//====================================================
/**
 * 获得输入
 */
function v_get(){
	_txtnewname_v =!$txtnewname.val()?"*":$txtnewname.val();//订单名称
	/*_txtnewxianghao_v =$txtnewxianghao.val();*/
	_txtnewyewu_v =!$txtnewyewu.val()?"0":$txtnewyewu.val();//业务号
	_txtcustomername_v=!$txtcustomername.val()?"*":$txtcustomername.val();//客户名称

	_txtstartcity_v=!$txtstartcity.val()?"*":$txtstartcity.val();//起运地
	_txtendcity_v=!$txtendcity.val()?"*":$txtendcity.val();//目的地
	_txtbgcity_v=!$txtbgcity.val()?"*":$txtbgcity.val();//报关地
	// _txttransporttype_v=!$txttransporttype.val()?"*":$txttransporttype.val();//运输方式

//	alert(_txtstartcity_v,_txtendcity_v);
}


/**
 * 向下拉框中添加
 */
function addSelectOption(selectName,id,name){
	//var ss="<option tag='"+id+"' value='"+name+"' ></option>";
	var ss="<option value='"+id+"' >"+name+"</option>";
	$("#" + selectName + "").append(ss);	

}