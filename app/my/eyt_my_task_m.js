//====================================================
//模块功能：我的任务 逻辑层
//模块日期：2017-01-20
//模块作者：关宇
//====================================================
/**
 * 查询过程
 */
function search(p,async){  //要改的
	var sousuo =!$('#searchRenWu').val()?"*":$('#searchRenWu').val();
	//获取界面输入
	$.ajax({
		async: async,
		url: "../esoa_order",
		datatype: 'json',
		type: "post",
		data: {
			fun:"select_my_task_p",
			p1:p,
			p2:g_numberOfPages,
			p3:sousuo,
			p4:_status,
			p5:_cookierId
		},
		success: function (data1) {
			if(!data1){
				$("#tab").empty();
				$("#div_page_count").hide();
				$("#div_paginator").hide();
				return;
			}
			//alert('11');

				var jsonData = JSON.parse(data1);
				var totalData = jsonData.total;
				/*alert(totalData);*/
				if(totalData!=0){
					var rowsData = jsonData.rows;
					g_all=totalData;
					/*$("#tbody-"+_status).empty();*/
					$("#tab").empty();
					for (var i =0; i<rowsData.length; i++ ){
						addTableRows (i, rowsData[i]) ;
					}
					$("#div_page_count").show();
					$("#div_paginator").show();
				}else{
					$("#tab").empty();
					$("#div_page_count").hide();
					$("#div_paginator").hide();
				}
		
		},error: function() {
			$("#tab").empty();
			$("#div_page_count").hide();
			$("#div_paginator").hide();
			//alert("添加联系人失败！");
		}
	});
}