
//====================================================
//模块功能：执行页面-返工 结束任务等 视图层
//模块日期：2017-01-20
//====================================================

/**
 * 动态往jsp插入一行
 */
function addformrow(formid,key,value,type) {
	//根据角色和任务状态判断是否只读
	var str = _p.charAt(_p.length-1);//a-只读  b编辑
		//console.log(str);
		//alert(str);
	if(_role_result=="1" || _role_result=="0"){	//0是发起人	 1是执行人（后来编辑权限） 2是参与人(后来只读权限) 
		if(_status=="1"){
			_display_none_unbind="readonly='readonly'";
			_display_unbind="disabled='true'";
		}
	}else if(_role_result=="2"){
		_display_none_unbind="readonly='readonly'";
		_display_unbind="disabled='true'";
	}
	if(str == "a"){
		_display_none_unbind="readonly='readonly'";
		_display_unbind="disabled='true'";
	}
	var s=make_input(formid,key,value,type);
	$txtForm.append(s);
}

/**
 * 具体生成一行的逻辑
 * 表单类型：日期1、文本框0、下拉框2
 */
function make_input(formid,key,value,type){
	//console.log(formid,key,value,type);
	var s="";
	if(type==0){//文本框
		s=""+
		"<div class='form-group'><label class='col-sm-3 control-label' "+_display_none_unbind+" id='formitemid1' name='formitemid1'>"+ key + "</label><div class='col-sm-8'>"+
		//  "<input type='search' class='form-control input-sm' style='display:none' id='formid1' value='"+formid+ "'/>"+
		 "<input type='search' class='form-control input-sm' "+_display_none_unbind+" name='formitemvalue1' value='"+ value+ "'/>" +
		 "</div></div>";
	}else if(type==1){//日期
		//value=value.pattern("yyyy-MM-dd hh:mm:ss");
		s=""+
		"<div class='form-group'><label class='col-sm-3 control-label' "+_display_none_unbind+" id='formitemid1' name='formitemid1'>"+ key + "</label><div class='col-sm-8'>"+
		//  "<input type='search' class='form-control input-sm' style='display:none' id='formid1' value='"+formid+ "'/>"+
		 "<input type='search' class='form-control input-sm Wdate1' readonly='true' name='formitemvalue1' onfocus='WdatePicker({dateFmt:&quot;yyyy-MM-dd HH:mm:ss&quot;})' value='"+ value+ "'/>" +
		 "</div></div>";
	}else if(type==2){//下拉框	
		ss=""+
			"<div class='form-group'><label class='col-sm-3 control-label' "+_display_none_unbind+" id='formitemid1' name='formitemid1'>"+ key + "</label><div class='col-sm-8'>"+
			//  "<input type='search' class='form-control input-sm' style='display:none' id='formid1' value='"+formid+ "'/>"+
			 "<select class='form-control combobox' name='formitemvalue1' "+_display_unbind+" mytag='select'>";
		var rs_list=[];
		var json=http_select_task_option(formid,key,type,function(rs){
			rs_list=rs;
			for(var i=0;i<rs_list.length;i++)
			{	
				//console.log(rs_list);
			}
		});
		for(var i=0;i<rs_list.length;i++)
		{				
			var item_str=rs_list[i].cboitem;
			//console.log(item_str);
			if (item_str==value){
				//console.log("相同：",value,item_str);
				ss=ss+"<option value='"+item_str+"' selected='selected'>"+item_str+"</option>";
			}
			else{
				//console.log("不相同：",value,item_str);
				ss=ss+"<option value='"+item_str+"'>"+item_str+"</option>";
			}
			
		}
		ss=ss+"</select>"+
		 "</div></div>";
		s=ss;
		//console.log(s);
	}
	return s;
}