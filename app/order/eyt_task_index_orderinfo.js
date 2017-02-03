//====================================================
//模块功能：任务列表 获取基本信息
//模块日期：2017-01-20
//模块作者：张琦
//====================================================

/**
 * 获取基本信息  张琦
 */
function getOrderInfo(){
    $.ajax({
		async: true,
		timeout : 60000,
		url: "../soa_order",
		datatype: 'json',
		type: "post",
		data: {
			fun:"select_order_details",
			p1:_orderid,
            p2:_userId
			
		},
		success: function (data1) {
			if (data1 != null) {
				var jsonData = JSON.parse(data1);
				var rows = jsonData.rs[0].rows;
				if(rows!="0"){
                    var bgcity = jsonData.rs[0].bgcity;
                    var startcity = jsonData.rs[0].startcity;
                    var endcity = jsonData.rs[0].endcity;
                    var orderid = jsonData.rs[0].orderid;
					var transname =  jsonData.rs[0].transname;
					var cn = jsonData.rs[0].cn;
                    var txtTranstype = jsonData.rs[0].transtype;
					var htmlStr = "";
					$("#txtStartCity").val(startcity);
                    $("#txtEndCity").val(endcity);
                    $("#txtBgCity").val(bgcity);
                    $("#txtTranstype").val(txtTranstype);
                    $("#txtOrderInfo").html(orderid +"           " +cn);


					var sss = transname.split(",");
					//htmlStr += '<label style="margin-bottom:15px;" class="col-sm-1 control-label">运输方式</label><div class="col-sm-2" id= "">'+
					//' <input type="search"  id="txtTranstype" style="margin-bottom:15px;" class="form-control input-sm" readonly value="'+txtTranstype+'"> </div> ';
					for(var  i=0;i<sss.length-1;i++){
						var name_value = sss[i].split("#");
						if(name_value[0]=="起运地"&&name_value[1]!=""){
							$("#txtStartCity").val(name_value[1]);
						}
						else if(name_value[0]=="目的地"&&name_value[1]!=""){
							$("#txtEndCity").val(name_value[1]);
						}
						else if(name_value[0]=="报关地"&&name_value[1]!=""){
							$("#txtBgCity").val(name_value[1]);
						}
						else if(name_value[0]=="运输方式"&&name_value[1]!=""){
							$("#txtTranstype").val(name_value[1]);
						}
						else {
						htmlStr += '<label class="col-sm-1 control-label"  style="margin-bottom:15px;">'+name_value[0]+'</label>' +
						'<div class="col-sm-2">'+
							'<input type="search"  class="form-control  input-sm" style="margin-bottom:15px;" readonly value="'+name_value[1]+'"></div>';}
					
					}
				
                    
                    
					$('#tranDiv').append(htmlStr);
				}else{
				
				}
				
			}
		}
	});
}