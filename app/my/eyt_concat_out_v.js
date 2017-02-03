//====================================================
//模块功能：外部联系人列表页面 视图层
//模块日期：2017-01-20
//模块作者：关宇
//====================================================
/**
 * 添加一行
 */
function addTableRows (index, item) { //遍历返回的json
	
	var outid = item.outid;
	var cn = item.cn;
	var phone = item.phone;
	var email = item.email;
	var uid = item.uid;
	var activetime = item.activetime;
	var nickname = item.nickname;
	
	if (!cn) {
		cn = "未激活";
	}
	if (!nickname) {
		nickname = "未激活";
	}
	if (!phone) {
		phone = "未激活";
	}
	if (!email) {
		email = "";
	}
	
	//alert(item.activetime);
	
	var s='<tr class="gradeX">'+
	    '<td>'+(index+1)+'</td>'+
	    '<td style="display:none;">' + item.outid + '</td>'+
	    '<td style="display:none;">' + item.uid + '</td>'+
	    '<td>'+nickname+'</td>'+
	    '<td>'+phone+'</td>'+
	    '<td >'+email+'</td>'+
	    '<td style="text-align:center">';
		if (activetime == "1900-01-01 00:00:00"){
			s += '	<button  id="btnActivation'+item.outid+'"  name="btnActivation'+item.outid+'" class="btn btn-warning" onclick="btn_Activation(\''+item.email+'\',\''+item.outid+'\',this);">激活</button>';
		} else {
			s += '	<button class="btn btn-info" onclick="btn_Details(\'' + item.uid + '\');">详情</button>';
		}
		s +='	<button type="button" class="btn btn-danger "  data-toggle="modal" onclick="btn_Delete_Alert(\''+nickname+'\',\''+item.outid+'\');">删除</button>';
		//s +='	<button class="btn btn-danger" onclick="btn_Delete(' + item.inid + ' );">删除</button>';
		s +='</td>'+'</tr>';
	$('#tab').append(s);
}