//====================================================
//模块功能：创建新运单-创建部分 逻辑层
//模块日期：2017-01-20
//模块作者：莫胜男
//====================================================
/**
 * 创建新订单
 */
function  http_insert_order_xt(id1){
//	alert('aaa');
	v_get();
	//当起始地和目的地都为空时，则提示用户，否则插入数据库
	if(_txtstartcity_v=='*'){
		alert('起运地必须选择!');
	}else if(_txtendcity_v=='*'){
		alert('目的地必须选择!');
	}else{

		_txtendcity_v=_txtendcity_v.substring(0,_txtendcity_v.indexOf("-"));
		//正常情况执行插入操作
		$.ajax({
			url: "../soa_order",
			datatype: 'json',
			type: "post",
			data: {
				fun:"insert_order_xt_new",
				p1:id1,
				p2:_txtnewname_v, 
				p3:_txtnewyewu_v,
				p4:_txtcustomername_v,
				p5:_txtstartcity_v,
				p6:_txtendcity_v,
				p7:_txtbgcity_v,
				p8:_txttransporttype_v
		},
			success: function (data) {
				var jsonData = JSON.parse(data);
				var rsData = jsonData.rs[0].result;
				if (rsData=="1"){
					//alert("添加新协同成功！");
					alert("添加协同成功！任务已创建完毕！");
					//刷新父窗口
					window.parent.location.href="../public/eyt_index";
				} else if  (rsData=="2"){ 
					alert("在订单号中已存在业务号！");
					window.location.href="eyt_order_index2";
				}else if  (rsData=="0"){
					alert("创建新协同订单失败！");
				}
			}
		});
	}
	
}

/**
 * 查询报关下拉框
 */
function  http_select_bgcity(){
		$.ajax({
			url: "../soa_user",
			datatype: 'json',
			type: "post",
			data: {
				fun:"select_dic_bgcity"
		},
			success: function (data) {
				var jsonData = JSON.parse(data);
				var rows=data.rows;
				if(rows!=0){
					var rs = jsonData.rs;
					if(rs){
							for(var i=0;i<rs.length;i++){	
								//添加下拉框
								var id=rs[i].id;
								var name=rs[i].name;
								addSelectOption('txtbgcity',id,name);
							}
						 http_select_dic_transport_type();
					}else{
						
					}
				}else{
					
				}
			}
	});
					
}

/**
 * 查询运输方式下拉框
 */
function  http_select_dic_transport_type(){
		$.ajax({
			url: "../soa_order",
			datatype: 'json',
			type: "post",
			data: {
				fun:"select_dic_transport_type"
		},
			success: function (data) {
				var jsonData = JSON.parse(data);
				var rows=data.rows;
				if(rows!=0){
					var rs = jsonData.rs;
					if(rs){
							for(var i=0;i<rs.length;i++){	
								//添加下拉框
								var id=rs[i].id;
								var name=rs[i].name;
								addSelectOption('txttransporttype',id,name);
							}
						isFirstCreate='0';
					}else{
						
					}
				}else{
					
				}
			}
	});
					
}