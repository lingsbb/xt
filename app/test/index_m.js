

/**
 * 样例代码 执行登录逻辑
 */
function http_eyt_user_login(user,password)
{

}

/**
 * 样例代码 执行价格查询逻辑
 */
function http_eyt_index_price(startCity,
		endCity,
		weight,
		volume){
	
	$.ajax({
		url: '../soa',
		type: 'post',
		data: {
	        fun: 'eyt_index_price',
	        p1: startCity,
	        p2: endCity,
	        p3: weight,
	        p4: volume
		},
		async: true,
		timeout : 5000, 
		dataType:'text', 
		contentType: 'application/x-www-form-urlencoded; charset=utf-8',
		beforeSend: function(){ 
   		}, 
		success: function(data) {
			var json=str2json(data);
			if (json.status=="200"){
				for(var i=0;i<json.rs.length;i++)
				{	
					var startCityNull = json.rs[i].startCityNull;
					var endCityNull = json.rs[i].endCityNull;
					if(startCityNull=="1" || endCityNull =="2" ){
						$("#index_totalPrice").html("0");
						alert("暂不支持该城市查询！");
					}else{
						var zhipinZong = json.rs[i].zhipinZong;
						$("#index_totalPrice").html(zhipinZong);
					}				
				}
			}
			else if (json.status=="404"){
				$("#index_totalPrice").html("0");
				alert("核算失败！");
			}
		},
		error: function() {
			$("#index_totalPrice").html("0");
			alert("请求网络超时，请重新核算");
			
		}
		,
		complete : function(XMLHttpRequest,status){
		}
	});
	
}
