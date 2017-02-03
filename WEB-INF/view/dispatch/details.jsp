<%@page pageEncoding="utf-8"%>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<!DOCTYPE html>
<html>
<head>
	<title>配送商品设置（食分送达模块）</title>
	<meta http-equiv="content-type" content="text/html; charset=UTF-8">
	<!-- easyui -->
	<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/js/easyui-1.4.4/themes/default/easyui.css">
	<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/js/easyui-1.4.4/themes/icon.css">
	<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/js/easyui-1.4.4/demo/demo.css">
	<script type="text/javascript" src="<%=request.getContextPath()%>/js/easyui-1.4.4/jquery.min.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/js/easyui-1.4.4/jquery.easyui.min.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/js/easyui-1.4.4/locale/easyui-lang-zh_CN.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/js/My97DatePicker/WdatePicker.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/js/json2.js"></script>
    <script type="text/javascript" src="<%=request.getContextPath()%>/js/common/jsonutil.js"></script>
    <script charset="utf-8" type="text/javascript" src="<%=request.getContextPath()%>/js/common/validat.js"></script>

    
    <SCRIPT type="text/javascript">
		//程序的入口
    	$(document).ready(function() {
    		query("all");
    	});
    	
		function query(type)
		{
    		var jsonHeader = {"nowrap":true,"pageSize":20,"singleSelect":false,"pagination":true,"rownumbers":false,
    		          "collapsible":[true,true],"url":"find"};
    		//请求地址
    		var dad = {};
			dad["type"] = type;
			jsonHeader.queryParams=dad;
    		$('#tab').datagrid(jsonHeader);//提交
    		$('#tab').datagrid({  
			    onLoadSuccess : function (data) {
			    	//alert(json2str(data));
			    	if(data){
						$.each(data.rows, function(index, item){
							//alert(json2str(item));
							if(item.ischk=="1"){
								$('#tab').datagrid('checkRow', index);
							}
						});
					}
				}
			});
			
			$('#tab').datagrid({  
				onClickRow : function(rowIndex,rowData){
					alert(rowIndex);
					var is_select=isCheck(rowIndex,rowData.id);
					update(rowData.id,is_select);
					//alert(is_select);
					//alert(json2str(rowData));
					//alert('11111111111');
					//var rows = $('#userInfo_datagrid').datagrid('getChecked');
					//var flag = true;
					//for(var i = 0; i < rows.length; i++) {
						//if(rowData.id == rows[i].id){
						//	flag = false;
						//	break;
						//}
						//alert(json2str(rowData.name));
					//}
					//if(flag)
					//	$('#userInfo_datagrid').datagrid('checkRow',rowIndex);
					//else
					//	$('#userInfo_datagrid').datagrid('uncheckRow',rowIndex);
				}
			});
			
		}
		

		
		function update(id,is_select)
		{
			$.post("update", 
			{   
				id : id,
				is_select:is_select
			},function(data) {
				alert(data);	
			});
		}
		
		function isCheck(index,id)
		{
			var b=false;
			var rows = $('#tab').datagrid('getChecked');
			//var flag = true;
			for(var i = 0; i < rows.length; i++) {
				if (rows[i].id==id)
				{
					b=true;
				}
			};
			return b;
		}
    </SCRIPT>
</head>

<body>
	<h2>配送商品设置（食分送达模块）</h2>
	<div style="margin:10px 0;">
		<a href="javascript:void(0)" class="easyui-linkbutton" onclick="query('y');">可配送</a>
		<a href="javascript:void(0)" class="easyui-linkbutton" onclick="query('n');">不可配送</a>
		<a href="javascript:void(0);" class="easyui-linkbutton" onclick="query('all');">全部</a> 
	</div>
	<table id="tab"  class="easyui-datagrid" title="配送商品设置" style="width:890px;height:590px"
			data-options="singleSelect:true,collapsible:true">
		<thead> 
			<tr> 
				<th data-options="field:'ischk',checkbox:true"></th>
				<th data-options="field:'id',width:70,align:'center'">商品编号</th>
				<th data-options="field:'name',width:290,align:'left'">商品名称</th>
			</tr>
		</thead>
	</table>
</body>
</html>