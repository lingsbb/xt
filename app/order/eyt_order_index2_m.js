//====================================================
//模块功能：创建新运单 逻辑层
//模块日期：2017-01-20
//模块作者：莫胜男
//====================================================
/**
 * 根据状态发起查询订单的请求
 */
function search(p,async){
	var functionStr="";
	//1020未处理，1030已处理
	if(_status=="1020"||_status=="1030"||_status=="1040"){
		//全部     未处理，已处理
		functionStr="select_order_xt_byStatus_unsolved";
	}else if(_status=="1011"||_status=="1012"||_status=="1013"){
		//我指派，我执行，我关注
		functionStr="select_order_xt_byStatus_power";
	}else{
		//订单的1到6个状态
		functionStr="select_order_xt_byStatus_NewChoose";
	}
	
	v_get_choose();
	//获取界面输入
	$.ajax({
		async: async,
		timeout : 60000,
		url: "../esoa_order",
		datatype: 'json',
		type: "post",
		data: {
			fun:functionStr,
			p1:p,
			p2:g_numberOfPages,
			p3:_userId,
			p4:_status,//状态
			p5:_txtyewu_v,//业务号
			p6:_txtxianghao_v,//箱号
			p7:_txtstart_v,//开始时间
			p8:_txtend_v//结束时间
		},
		success: function (data1) {
			//alert('11');
			if (data1 != null) {
				var jsonData = JSON.parse(data1);
				var totalData = jsonData.total;
				if(totalData!=0){
					var rowsData = jsonData.rows;
					g_all=totalData;
					$("#tbody-1").empty();
					//显示分页
					$("#div_page_count").show();
					$("#div_paginator").show();
					for (var i =0; i<rowsData.length; i++ ){
						//添加每行
						addTableRows (i, rowsData[i]) ;
					}
				}else{
					$("#tbody-1").empty();
					//隐藏分页
					$("#div_page_count").hide();
					$("#div_paginator").hide();
				}
				
			}
		}
	});
}

// /*按各个状态查询各订单数量
//  * 参数：用户id
//  *      状态值
//  * */

// function http_select_statusCount(id1,state){
// 	$.ajax({
// 		async: false,
// 		timeout : 60000,
// 		url: "../soa_order",
// 		datatype: 'json',
// 		type: "post",
// 		data: {
// 			fun:"select_order_xt_byStatus_NewCount",
// 			p1:id1,
// 			p2:state
			
// 		},
// 		success: function (data1) {
// 			if (data1 != null) {
// 				var jsonData = JSON.parse(data1);
// 				var totalData = jsonData.total;
// 				if(totalData!=0){
// 					var rowsData = jsonData.rs[0];
// 					if(rowsData){
// 						var a_rows=rowsData.rows;
// 						/*状态值写数值 */
// 						v_set_statusCount(state,a_rows);
// 					}else{
// 						/*状态值写数值0 */
// 						v_set_statusCount(state,0);
// 					}
// 				}else{
// 					/*状态值写数值 0*/
// 					v_set_statusCount(state,0);
// 				}
				
// 			}
// 		}
// 	});
// }

/**
 * 查询是用户否有企业，有企业的话则弹出，
 */
function http_select_qiye_byuser(id1){
	$.ajax({
		async: false,
		timeout : 60000,
		url: "../soa_user",
		datatype: 'json',
		type: "post",
		data: {
			fun:"select_qiye_byuser",
			p1:id1
			
		},
		success: function (data1) {
			if (data1 != null) {
				var jsonData = JSON.parse(data1);
				var rows = jsonData.rs[0].rows;
				if(rows!="0"){
					//获得 添加对话框的控件
					getElement_create();
					//addNewOrder(); 
					//显示添加的对话框
					$('#modForm').modal('show');
				}else{
					//没有企业提示，并跳转完善信息页
						alert( "对不起，你不是企业用户，请完善个人企业信息！");
						enterMy();
						
				}
				
			}
		}
	});
}



// //按各个状态查询各订单数量
// function http_select_dic_status(){
// 	if(_status=="1014"){
// 		$('#orderState').show();
// 	}else{
// 		$('#orderState').hide();
// 	}
// 	$.ajax({
// 		async: true,
// 		timeout : 60000,
// 		url: "../soa_order",
// 		datatype: 'json',
// 		type: "post",
// 		data: {
// 			fun:"select_dic_order_status_xt"
// 		},
// 		success: function (data1) {
// 			if (data1 != null) {
// 				var jsonData = JSON.parse(data1);
// 				var rows = jsonData.rows;
// 				if(rows!=0){
// 					var rs = jsonData.rs;
// 					if(rs){
// 						/*************默认查询的第一个状态值*************************/
// 						/*_status=rs[0].id;*/
// 						for(var i=0;i<rs.length;i++){
						
// 							//每个状态值与其对应的中文
// 							var id=rs[i].id;
// 							var state=rs[i].status;
// 							//添加一个选项卡
// 							addRowTab(id,state);
// 						}
// 						//添加固定选项卡
// 						addRowTabGuding();
						
// 						/*************发起默认第一次查询*************************/
// 						//第一次默认查询
// 						search(p,false);
// 						//调用分页
// 						startPagebar();
// 					}else{
// 					
// 					}
// 				}else{
					
// 				}
				
// 			}
// 		}
// 	});
// }


/**
 * 按各个状态查询各订单数量
 */
function http_change_orderToguidang(orderid){
	$.ajax({
		async: true,
		timeout : 60000,
		url: "../soa_order",
		datatype: 'json',
		type: "post",
		data: {
			fun:"change_order_togd_xt",
			p1:orderid
		},
		success: function (data1) {
			if (data1 != null) {
				var jsonData = JSON.parse(data1);
				var rows = jsonData.rs;
				if(rows!=0){
					var result = jsonData.rs[0].result;
					if(result=="1"){
						alert("订单归档成功");
						//订单归档成功后，刷新订单列表 和左侧数量
						window.parent.location.href="../public/eyt_index";
					}else if(result=="0"){
						alert("订单归档失败");
					}
					
				
				}else{
				}
		}
	}
	});
}





/**
 * 查询用户是否是首次进入系统，是的话则修改用户状态
 */
function http_select_user_iswelcome(userid){
	$.ajax({
		async: false,
		timeout : 60000,
		url: "../soa_user",
		datatype: 'json',
		type: "post",
		data: {
			fun:"select_user_isFirst",
			p1:userid
		},
		success: function (data1) {
			if (data1 != null) {
				var jsonData = JSON.parse(data1);
				var rows = jsonData.rs;
				if(rows!=0){
					var result = jsonData.rs[0].result;
					//返回1或0都是第一次进入系统，2不是
					if(result=="1"){
						isFirstEnter='1';
						//alert("修改成功");
					}else if(result=="0"){
						isFirstEnter='1';
						//alert("修改失败");
					}else{
						isFirstEnter='0';
						//alert("已经进入过系统");
					}
					
				
				}else{
				}
		}
	}
	});
}