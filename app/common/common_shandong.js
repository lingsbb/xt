//====================================================
//模块功能：全局变量定义
//模块日期：2017-01-20
//模块作者：莫胜男
//====================================================

// 修改order_ex表  moshengnan
// 即修改任务闪动状况
// 任务id，用户集合，flag (1,2,3)
// flag:1邀请环节，flag:3返工环节 修改为0 ，flag:2执行任务  修改为1
/**
 * 修改order_ex表  moshengnan
 * 即修改任务闪动状况
 * 任务id，用户集合，flag (1,2,3)
 * flag:1邀请环节，flag:3返工环节 修改为0 ，flag:2执行任务  修改为1
 */
function http_change_order_shanshuo(taskid,userlist,flag){
    $.ajax({
		async: false,
		timeout : 60000,
		url: "../soa_order",
		datatype: 'json',
		type: "post",
		data: {
			fun:"update_orderex_isnewwork",
			p1:taskid,
            p2:userlist,
            p3:flag
		},
		success: function (data1) {
			if (data1 != null) {
				var jsonData = JSON.parse(data1);
				var rows = jsonData.rs;
				if(rows!=0){
					var result = jsonData.rs[0].result;
					if(result=="1"){
						console.log("修改order_ex成功");
						return;

					}else if(result=="0"){
						console.log("修改order_ex失败");
						return;

					}else{
						
					}
					
				
				}else{
				}
		}
	}
	});
}