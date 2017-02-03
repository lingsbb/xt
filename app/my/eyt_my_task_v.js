//====================================================
//模块功能：我的任务 视图层
//模块日期：2017-01-20
//模块作者：关宇
//====================================================
/**
 * 添加行
 */
function addTableRows (index, item) { //遍历返回的json

	var taskid = item.taskid;
	var status = item.status;
	var cn = item.cn;
	var createtime = item.createtime;
	var createuser = item.createuser;
	var taskworkuser = item.taskworkuser;
	var followuser = item.followuser;
	
	/*alert(taskworkuser);*/
	
	var statusStr="";
	//如果状态为0
	if(status=="0"){
		statusStr='<span class="label label-default">进行中</span>';
	}else if(status=="2"){
		statusStr='<span class="label label-danger">返工</span>';
	}else if(status=="1"){
		statusStr='<span class="label label-primary">已完成</span>';
	}
	var newcreateuser = createuser.substring(0, 1); 
// 
	var s='<tr>'+ '<td>'+(index+1)+'</td>'+
		'<td class="project-status">'+statusStr+'</td>'+
			'<td class="project-title">'+
			'<a target="_self" onclick="gotoTaskView('+index+',\''+taskid+'\')">'+cn+'</a>'+
			//'<a target="_self" href="../order/eyt_order_task_index2?taskid='+taskid+'">'+cn+'</a>'+
			' <br/>'+
   ' <small>创建于'+ createtime+'</small></td>'+
   '<td class="project-people" id="people'+index+'">发起人：<a  data-toggle="tooltip" title="'+createuser+'"><span class="btn1  wenzi" style="background-color: #ed5565;margin-left:5px"><p style="margin-left: -8px;margin-top: -1px;">'+newcreateuser+'</p></span></a></td>'+
   '</tr>';
	
	$("#tab").append(s);
//	alert(index);
//	if(taskworkuser!=null&&taskworkuser!=undefined&&taskworkuser!=""){
//		var taskStr="";
//		var taskArray=taskworkuser.split(',');
////		alert(taskArray);
//		for(var i =0 ;i<taskArray.length;i++)
//		{
//		    if(taskArray[i] != null && taskArray[i].length > 0)    //去掉空的
//		    {               
//		      /* alert(taskworkuser[i]);*/
//		    	var b=addPerson(taskArray[i]);
//		    	taskStr+=b;
//		    }
//		}
//		$("#people"+index+"").append("</br>执行人："+taskStr);
//	} else {
////		alert("ssss");
//	}
	
//if(followuser!=null&&followuser!=undefined&&followuser!=""){
//		var followStr="";
//		var followArray=followuser.split(',');
//		for(var i =0 ;i<followArray.length;i++)
//		{
//		    if(followArray[i] != null && followArray[i].length > 0)    //去掉空的
//		    {               
////		       alert(taskworkuser[i]);
//		    	var b=addPerson2(followArray[i]);
//		    	followStr+=b;
//		    }
//		}
//		$("#people"+index+"").append("</br>参与人："+followStr);
//	}
}
/**
 * 添加 执行人
 */
function addPerson(person1){
	var a="";
	if(person1!=""){
		var newperson1 = person1.substring(0, 1); 
		a='<a data-toggle="tooltip"'+' title="'+person1+'"><span class="btn1  wenzi" style="background-color: #f8ac59;margin-left:5px;margin-top:5px"><p style="margin-left: -8px;margin-top: -1px;">'+newperson1+'</p></span></a>';
			
	}
	return a;
}

/**
 * 添加参与人
 */
function addPerson2(person1){
	var b="";
	if(person1!=""){
		var newperson1 = person1.substring(0, 1); 
		b='<a  data-toggle="tooltip"'+' title="'+person1+'"><span class="btn1  wenzi" style="background-color: #1c84c6;margin-left:5px;margin-top:5px"><p style="margin-left: -8px;margin-top: -1px;">'+newperson1+'</p></span></a>';
			
	}
	return b;
}

/**
 * 重置搜索条件
 */
function v_reload(){
	$('#searchRenWu').val("");	
}

