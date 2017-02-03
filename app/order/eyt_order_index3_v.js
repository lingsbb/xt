//====================================================
//模块功能：归档订单 视图层
//模块日期：2017-01-20
//模块作者：莫胜男
//====================================================

/**
 * 添加一行
 */
function addTableRows (index, item) { //遍历返回的json
	
	var orderid = item.orderid;
	var cn = item.cn;
	var xiangid = item.xiangid;
	var yewuid = item.yewuid;
	var cn1 = item.cn1;
	var createtime = item.createtime;
	var customer=item.customer;//客户名称
	
	var istask=item.istask;//用订单号查询是否有任务
	
	//alert(item.activetime);
	var startname=item.startname;//起运地
	var endname=item.endname;//目的地
	var bgname=item.bgname;//报关地

	if(yewuid==""||yewuid==null){
		yewuid="无";
	}
	if(customer==""||customer==null){
		customer="无";
	}
	if(xiangid==""||xiangid==null){
		xiangid=" ";
	}
	var s='<tr class="gradeX">'+
	    '<td>'+(index+1)+'</td>'+
	    '<td>' + orderid + '</td>'+
	    '<td>' + cn + '</td>'+
		'<td>' + customer + '</td>'+
	    '<td>'+xiangid+'</td>'+
	    '<td>'+yewuid+'</td>'+
	    '<td >'+cn1+'</td>'+
		'<td >'+startname+'</td>'+
		'<td >'+endname+'</td>'+
		'<td >'+bgname+'</td>'+
	    '<td >'+createtime+'</td>';
	  /*  '<td style="text-align:center">';
			s += '	<button id="details" class="btn btn-info" onclick="btn_Details(' + orderid + ' );" style="display:none;">详情</button>';
		s +='</td>'+'</tr>';*/
		/*$("#tbody-"+_status).append(s);*/
		$("#tbody-1").append(s);
		//如果有任务
		if(istask=="1"){
			$('#detail').show();
		}
}

/**
 * 获得查询条件的值
 */
function v_get_choose(){
	_txtyewu_v =!$txtyewu.val()?"*":$txtyewu.val();
	_txtxianghao_v =!$txtxianghao.val()?"*":$txtxianghao.val();

	_txtstart_v =!$txtstart.val()?"2016-01-01 12:00:00":$txtstart.val()+" 00:00:00";
	_txtend_v =!$txtend.val()?"2030-01-01 12:00:00":$txtend.val()+" 23:00:00";
	
}

/**
 * 重置搜索条件
 */
function v_reload(){
	$txtyewu.val("");
	$txtxianghao.val("");
	$txtstart.val("");
	$txtend.val("");
	
}
/*//设置各状态数量
function v_set_statusCount(count2,count3,count4,count5,count6){
	$count2.html(count2);
	$count3.html(count3);
	$count4.html(count4);
	$count5.html(count5);
	$count6.html(count6);
}*/