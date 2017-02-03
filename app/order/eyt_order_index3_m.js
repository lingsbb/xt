//====================================================
//模块功能：归档订单 逻辑层
//模块日期：2017-01-20
//模块作者：莫胜男
//====================================================
/**
 * 按用户查询归档订单
 */
function search(p,async){
	//显示等待
	$('#gloadingForm').modal('show');
	v_get_choose();
	//获取界面输入
	$.ajax({
		async: async,
		url: "../esoa_order",
		datatype: 'json',
		type: "post",
		data: {
			fun:"select_order_xt_gd_byuser",
			p1:p,
			p2:g_numberOfPages,
			p3:_userId,
			p4:_status,
			p5:_txtyewu_v,
			p6:_txtxianghao_v,
			p7:_txtstart_v,
			p8:_txtend_v
		},
		success: function (data1) {
			//关闭等待
			$('#gloadingForm').modal('hide');
			if (data1 != null) {
				var jsonData = JSON.parse(data1);
				var totalData = jsonData.total;
				/*alert(totalData);*/
				if(totalData!=0){
					var rowsData = jsonData.rows;
					//设置总行数
					g_all=totalData;
					/*$("#tbody-"+_status).empty();*/
					//清空表格
					$("#tbody-1").empty();
					for (var i =0; i<rowsData.length; i++ ){
						addTableRows (i, rowsData[i]) ;
					}
				}else{
					$("#tbody-1").empty();
				}
				
			}
		},error: function() {
			//关闭等待
			$('#gloadingForm').modal('hide');
			
		}
	});
}

/*function http_select_statusCount(id1){
	$.ajax({
		async: false,
		url: "../soa_order",
		datatype: 'json',
		type: "post",
		data: {
			fun:"select_order_xt_byStatus_Count",
			p1:id1
			
		},
		success: function (data1) {
			if (data1 != null) {
				var jsonData = JSON.parse(data1);
				var totalData = jsonData.total;
				if(totalData!=0){
					var rowsData = jsonData.rs[0];
					if(rowsData){
						var a_rows=rowsData.a_rows;
						var b_rows=rowsData.b_rows;
						var c_rows=rowsData.c_rows;
						var d_rows=rowsData.d_rows;
						var e_rows=rowsData.e_rows;
						v_set_statusCount(a_rows,b_rows,c_rows,d_rows,e_rows);
					}else{
						v_set_statusCount("0","0","0","0","0");
					}
				}else{
					v_set_statusCount("0","0","0","0","0");
				}
				
			}
		}
	});
}*/