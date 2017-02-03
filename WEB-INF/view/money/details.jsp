<%@page pageEncoding="utf-8"%>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<!DOCTYPE html>
<html>
<head>
	<title>订单收支明细</title>
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
    	var _fmt="yyyy-MM-dd"; 
    	var _ks="";
    	var _js="";
        var _account="";
        
		//程序的入口
    	$(document).ready(function() {
    		
    		
    		/*_js=getNowFormatDate();
			var aa=getNextDay(_js);
			$('#js').val(aa);
			$('#ks').val(decreaseMonth(aa,1));
    		query();*/
    		
    		submitForm_month();
    	});
    	
    	 //查询按钮 （按照某个年月进行统计）
    	function submitForm(){
    		$('#tab').empty();
    		//_ks=$('#ks').val();//开始时间
    		//_js=$('#js').val();//开始时间
			
			query();

    		
    	}
    	
    	function submitForm_month(){
    	    _js=getNowFormatDate();
			var aa=getNextDay(_js);
			$('#js').val(aa);
			$('#ks').val(decreaseMonth(aa));
			query();
    	}
    	
    	function submitForm_day(){
    	    _js=getNowFormatDate();
			var aa=getNextDay(_js);
			$('#js').val(aa);
			var ks=decreaseDay(aa);
			//alert(ks);
			$('#ks').val(ks);	
			query();
    	}
    	
		function getNextDay(d){
		    d = new Date(d);
		    d = +d + 1000*60*60*24;
		    d = new Date(d);
		    var month = d.getMonth() + 1;
		    var strDate = d.getDate();
		    if (month >= 1 && month <= 9) {
		        month = "0" + month;
		    }
		    if (strDate >= 0 && strDate <= 9) {
		        strDate = "0" + strDate;
		    }
		    return d.getFullYear()+"-"+month+"-"+strDate;
		}
		
    	
    	//显示时间控件
	    function showdate(){
        	if (_fmt=='yyyy-MM-dd'){
        		WdatePicker({dateFmt:'yyyy-MM-dd',firstDayOfWeek:1,readOnly:true});
        	}
        }
    	
    	//获取当前日期时间“yyyy-MM-dd HH:MM:SS”
        function getNowFormatDate() {
		    var date = new Date();
		    var seperator1 = "-";
		    var seperator2 = ":";
		    var month = date.getMonth() + 1;
		    var strDate = date.getDate();
		    if (month >= 1 && month <= 9) {
		        month = "0" + month;
		    }
		    if (strDate >= 0 && strDate <= 9) {
		        strDate = "0" + strDate;
		    }
		    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;
		    return currentdate;
		}
		
		function query(){
		    _ks=$('#ks').val();//开始时间
    		_js=$('#js').val();//开始时间
    		//alert(_ks+" "+_js);
    		//这个框架的控件自己发送的请求
    		var jsonHeader = {"nowrap":true,"pageSize":10,"singleSelect":true,"pagination":true,"rownumbers":false,
    		          "collapsible":[true,true],"url":"details_find"};
    		//请求地址
    		var dad = {};
			dad["ks"] = _ks;
			dad["js"] =_js;
			jsonHeader.queryParams=dad;
    		//alert(json2str(jsonHeader));
    		$('#tab').datagrid(jsonHeader);//提交
    	}
		
		//减少一个月
    	function decreaseMonth(js){
    		var d = new Date(js);
			d.setMonth(d.getMonth() + 1 - 1);//加一个月，同理，可以加一天：getDate()+1，加一年：getYear()+1
			//alert(d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate());
			var month = d.getMonth();
		    var strDate = d.getDate();
			if (month >= 1 && month <= 9) {
		        month = "0" + month;
		    }
		    if (strDate >= 0 && strDate <= 9) {
		        strDate = "0" + strDate;
		    }
			var ks=d.getFullYear()+"-"+month+"-"+strDate;
			return ks;
    	}
    	
    	//减少一个天
    	function decreaseDay(js){
			var myDate = new Date(js);

			var date = myDate.getDate();
			date = date - 1;
			myDate.setDate(date);
			//var ks1=myDate.getFullYear()+"-"+(myDate.getMonth()+1)+"-"+myDate.getDate();
			//alert(ks1);
			
			//var d=myDate;
			var month = myDate.getMonth()+1;
		    var strDate = myDate.getDate();
			if (month >= 1 && month <= 9) {
		        month = "0" + month;
		    }
		    if (strDate >= 0 && strDate <= 9) {
		        strDate = "0" + strDate;
		    }
			var ks=myDate.getFullYear()+"-"+month+"-"+strDate;
			//alert(ks);
			return ks;
    	}
    	
    	function exportxls(){
    		_ks=$('#ks').val();//开始时间
    		_js=$('#js').val();//开始时间
			// 创建Form  
		    var form = $('<form></form>');  
		    form.attr('action', "export_details");  
		    form.attr('method', 'post');
		    form.attr('target', '_self');  
		    // 创建Input1
		    var my_input1 = $('<input type="text" name="ks" />');  
		    my_input1.attr('value', _ks);
		    form.append(my_input1);
		    // 创建Input2
		    var my_input2 = $('<input type="text" name="js" />');  
		    my_input2.attr('value', _js);
		    form.append(my_input2);
		    // 创建Input3
		    //var my_input3 = $('<input type="text" name="js" />');  
		    //my_input3.attr('value', _account);
		    //form.append(my_input3);		    
		    form.appendTo($("body"));    
		    form.submit();
    	}
    	

    </SCRIPT>
</head>

<body>
	<h2>订单收支明细</h2>
	<div style="margin:10px 0;">
		选择开始年月<input id="ks" name="ks" class="Wdate" type="text" onClick="showdate();">
		选择结束年月<input id="js" name="js" class="Wdate" type="text" onClick="showdate();">
		<a href="javascript:void(0)" class="easyui-linkbutton" onclick="submitForm();">查询</a>
		<a href="javascript:void(0)" class="easyui-linkbutton" onclick="submitForm_day();">查一日</a>
		<a href="javascript:void(0)" class="easyui-linkbutton" onclick="submitForm_month();">查一月</a>
		<a href="javascript:void(0);" class="easyui-linkbutton" onclick="exportxls();">导出excel</a> 
	</div>
	<table id="tab"  class="easyui-datagrid" title="用户月详单" style="width:890px;height:490px"
			data-options="singleSelect:true,collapsible:true">
		<thead> 
			<tr> 
				<th data-options="field:'id',width:100,align:'center'">订单号</th>
				<th data-options="field:'allsum',width:100,align:'right'">合计（元）</th>
				<th data-options="field:'createdate',width:150,align:'center'">订单提交时间</th>
				<th data-options="field:'account',width:120,align:'left'">买家账号</th>
				<th data-options="field:'nickname',width:60,align:'left'">买家昵称</th>
				<th data-options="field:'amount',width:100,align:'right'">收入（元）</th>
				<th data-options="field:'outpay',width:100,align:'right'">支出（元）</th>
			</tr>
		</thead>
	</table>
</body>
</html>