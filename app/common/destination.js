/**
 * 模块日期：2017/2/4
 * 模块功能：创建目的地数据控件
 * 模块作者：莫胜男
 */
var _desCity=new Array();
var _desCities;

/**
 * 创建目的地控件
 */
function create_des_ctl($input){
	////////////////////////////目的地start//////////////////////////////////////////////////////////
	http_select_station_code();
	console.log(_desCity.length);
    // $("#" + idStr + "").attr('data-source',JSON.stringify(_desCity));
	//$("#txtIn").attr('data-source',_desCity);
    $input.typeahead({source: _desCity}) 
	////////////////////////////目的地end//////////////////////////////////////////////////////////
}

/**
 * 查询站编
 */
function http_select_station_code(){

	$.ajax({
		url: '../soa_user',
		type: 'post',
		data: {
	           fun: 'select_station_code'
		},
		async: false,
		timeout : 5000, 
		dataType:'text', 
		contentType: 'application/x-www-form-urlencoded; charset=utf-8', 
		success: function(data) {
			var json=str2json(data);
			if (json.status=="200"){
				_desCities=json.rs;
				for(var i=0;i<json.rs.length;i++)
				{
				    var result = json.rs[i].result;
				    _desCity.push(result);
				}
				// console.log(json.rs.length);
				// console.log(_desCity);
			}
			else if (json.status=="404"){

			}
	},
		error: function() {

		}
	});
}



