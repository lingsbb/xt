//====================================================
//模块功能：创建新运单 视图层
//模块日期：2017-01-20
//模块作者：莫胜男
//====================================================
/**
 * 订单表格的每一行
 */
function addTableRows (index, item) { //遍历返回的json
	
	var orderid = item.orderid;
	var cn = item.cn;
	var xiangid = item.xiangid;
	var yewuid = item.yewuid;
	//alert(yewuid);
	var cn1 = item.cn1;
	var createtime = item.createtime;
	var iscreate=item.iscreate;
	var status=item.status;//当查询全部时，显示订单状态
	//alert(item.activetime);
	var customer=item.customer;//客户名称

	///////////////////////////////////////闪烁的
	var isnewtask=item.isnewtask;//闪烁 0闪
	var stime=item.stime;//修改时间
	
	if(yewuid==""||yewuid==null){
		yewuid="无";
	}
	if(customer==""||customer==null){
		customer="无";
	}
	if(xiangid==""||xiangid==null){
		xiangid=" ";
	}
	var startname=item.startname;//起运地
	var endname=item.endname;//目的地
	var bgname=item.bgname;//报关地
	
	if(startname==""||startname==null){
		startname=" 无";
	}
	if(endname==""||endname==null){
		endname="无 ";
	}
	if(xiangid==""||xiangid==null){
		xiangid=" ";
	}
	if(bgname==""||bgname==null){
		bgname="未知 ";
	}
	//var typename=item.typename;//运输方式

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
		// '<td >'+typename+'</td>'+
	    '<td >'+createtime+'</td>';
		
		// //状态为全部，则显示订单状态
		// if(_status=="1020"||_status=="1030"||_status=="1040"){
		// 	s +=  '<td >'+status+'</td>';
		// }else{
			
		// }

		//添加任务按钮  有时间，悬停显示时间
		//没有时间 ，或没修改则不显示时间                   闪烁才显示时间
		if(isnewtask=="0"){//如果闪烁
			if(stime!=null&&stime!=undefined){//时间不为空
				console.log("时间不为空");
				s += '<td style="text-align:center">';
				s +=	'<a data-toggle="tooltip" title="'+stime+'">';
				
				s +=	'<button name="renwubutton" class="btn btn-info imgboxshadow" onclick="btn_DetailsNew(\''+orderid	+'\');">任务</button>';
				s +=	'</a>';
			}else{
				s += '<td style="text-align:center">';
				s +=	'<button name="renwubutton" class="btn btn-info imgboxshadow" onclick="btn_DetailsNew(\''+orderid	+'\');">任务</button>';
			}
		}else{
				s += '<td style="text-align:center">';
				s +=	'<button name="renwubutton" class="btn btn-info " onclick="btn_DetailsNew(\''+orderid	+'\');">任务</button>';
				
		}

	



		// s+= '<td style="text-align:center">	<button  class="btn btn-primary " onclick="btn_Details(\''+orderid	+'\');">进度</button>';
		//如果订单是发起人,显示归档按钮
		if(iscreate=="1"){
			s += '	<button class="btn btn-primary" onclick="btn_File(\''+orderid	+'\');">归档</button>';
		}else{
				
		}

	
	
		s +='</td>'+'</tr>';
	
		/*$("#tbody-"+_status).append(s);*/
		$("#tbody-1").append(s);
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
/**
 * 设置各状态数量(对应上次状态，对应从数据库查出的数量)
 */
function v_set_statusCount(state,row){
	//先拼id
	var pdid = 'count' + state;
	$("#" + pdid + "").html(row);
}


/*选项卡 ****************** 只加载一次*/
//查询的选项卡(活的),同时查询该订单的数量 

/**
 * 选项卡 ****************** 只加载一次
 * 查询的选项卡(活的),同时查询该订单的数量 
 */
function addRowTab(id1,state){
	/*class="active"*/
	 var r=" <li><a data-toggle=\"tab\" data='"+ JSON.stringify({"index":id1,"state":id1}) +"' onclick=\"query(this,false)\">"+
	 "<i class=\"fa fa-user\"></i> "+state+"(<span id=\"count"+id1+"\"></span>)</a>"+
     "</li>";
	 
	 $("#ulStatus").append(r);
	 
	 //查询该订单状态的数量(用户id,状态值)
	 http_select_statusCount(_userId,id1);
	 
	 
}

/**
 * 固定不动的选项卡
 */
function addRowTabGuding(){
	var guding=" <li><a data-toggle=\"tab\" data='"+ JSON.stringify({"index":1011,"state":1011}) +"' onclick=\"query(this,false)\">"+
	 "<i class=\"fa fa-user\"></i> 我指派的运单</a>"+
     "</li>"+
     " <li><a data-toggle=\"tab\" data='"+ JSON.stringify({"index":1012,"state":1012}) +"' onclick=\"query(this,false)\">"+
	 "<i class=\"fa fa-user\"></i> 我执行的运单</a>"+
     "</li>"+
     " <li><a data-toggle=\"tab\" data='"+ JSON.stringify({"index":1013,"state":1013}) +"' onclick=\"query(this,false)\">"+
	 "<i class=\"fa fa-user\"></i> 我关注的运单</a>"+
     "</li>";
    /* " <li><a data-toggle=\"tab\" data='"+ JSON.stringify({"index":1014,"state":1014}) +"' onclick=\"query(this,false)\">"+
	 "<i class=\"fa fa-user\"></i> 全部</a>"+
     "</li>";*/
				
	$("#ulStatus").append(guding);
}