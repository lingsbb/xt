//====================================================
//模块功能：执行页面-邀请-跟莫胜男模块对接的部分
//模块日期：2017-01-20
//====================================================
function closeInAndOut(status) {
	$("#oneOutPeople").val("");
	$("#oneInPeople").val("");

	if(status=="1"){
		$('#modJoinTaskWorker').modal('hide');
	}else {
		$('#modFollower').modal('hide');
	}
	
	if (!_changed_invitate){
		console.log("_changed_invitate====================="+_changed_invitate);
	} else {
		_changed_invitate = _changed_invitate.substring(1,_changed_invitate.length);
		console.log("_changed_invitate====================="+_changed_invitate);
		
		var taskid_1 = getQueryString("t");
		http_change_order_shanshuo(taskid_1,_changed_invitate,"1");
	}
	_changed_invitate = "";
	console.log("_changed_invitate====================="+_changed_invitate);
}