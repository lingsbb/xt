<%@page pageEncoding="utf-8"%>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<!DOCTYPE html>
<html>
<head>
	<title>食六计绿色食品直通车代理商月对账单</title>
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
    	var _fmt="";   
    	var _ks="";
    	var _js="";
        var _account="";
        
        //程序的入口
    	$(document).ready(function() {
    		_fmt="yyyyMM";
    		_ks=getNowFormatDate();    		
			$('#ks').val(_ks);
			addMonth($('#ks').val());//根据开始时间自动确定结束时间
			//alert(_ks+'-01');
    		//alert(_js);
    		
    		query();
    		
    	});
    	
    	//查询按钮 （按照某个年月进行统计）
    	function submitForm(){
    		$('#tab1').empty();
    		$('#tab2').empty();
    		_ks=$('#ks').val();//开始时间
			addMonth($('#ks').val());//根据开始时间自动确定结束时间
			//alert(_ks+'-01');
			//alert(_js);
			query();

    		
    	}
    	
    	function query(){
    		
    		//这个框架的控件自己发送的请求
    		var jsonHeader = {"nowrap":true,"pageSize":10,"singleSelect":true,"pagination":true,"rownumbers":false,
    		          "collapsible":[true,true],"url":"find"};
    		//请求地址
    		var dad = {};
			dad["ks"] = _ks+'-01';
			dad["js"] =_js;
			jsonHeader.queryParams=dad;
    		//alert(json2str(jsonHeader));
    		$('#tab1').datagrid(jsonHeader);//提交
    	}

	    //显示时间控件
	    function showdate(){
        	if (_fmt=='yyyy'){
        		WdatePicker({dateFmt:'yyyy',firstDayOfWeek:1,readOnly:true});
        	}
        	if (_fmt=='yyyyMM'){
        		WdatePicker({dateFmt:'yyyy-MM',firstDayOfWeek:1,readOnly:true});
        	}
        }
        
        //获取当前日期时间“yyyy-MM-dd HH:MM:SS”
        function getNowFormatDate1() {
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
		    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
		            + " " + date.getHours() + seperator2 + date.getMinutes()
		            + seperator2 + date.getSeconds();
		    return currentdate;
		}
		
		//获取当前时间，格式YYYY-MM-DD
	    function getNowFormatDate() {
	        var date = new Date();
	        var seperator1 = "-";
	        var year = date.getFullYear();
	        var month = date.getMonth() + 1;
	        var strDate = date.getDate();
	        if (month >= 1 && month <= 9) {
	            month = "0" + month;
	        }
	        if (strDate >= 0 && strDate <= 9) {
	            strDate = "0" + strDate;
	        }
	        //var currentdate = year + seperator1 + month + seperator1 + strDate;
	        var currentdate = year + seperator1 + month;// + seperator1 + '01';
	        return currentdate;
	    }
	    
	    //增加一个月
    	function addMonth(ks){
    		var d = new Date(ks+"-01");
			d.setMonth(d.getMonth() + 1 + 1);//加一个月，同理，可以加一天：getDate()+1，加一年：getYear()+1
			//alert(d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate());
			var month = d.getMonth();
		    var strDate = d.getDate();
			if (month >= 1 && month <= 9) {
		        month = "0" + month;
		    }
		    if (strDate >= 0 && strDate <= 9) {
		        strDate = "0" + strDate;
		    }
			_js=d.getFullYear()+"-"+month+"-"+strDate;
    	}
    	//点击上面表格某一行
		function getDetail(index, data) {
			//alert(index);
			//alert(json2str(data));
			query2(data);
        }
        
        function query2(data){
    		//这个框架的控件自己发送的请求
    		var jsonHeader = {"nowrap":true,"pageSize":10,"singleSelect":true,"pagination":true,"rownumbers":false,
    		          "collapsible":[true,true],"url":"find2"};
    		//请求地址
    		var dad = {};
			dad["ks"] = _ks+'-01';
			dad["js"] =_js;
			dad["account"] = data.account_super;
			_account=data.account_super;
			jsonHeader.queryParams=dad;
    		//alert(json2str(jsonHeader));
    		$('#tab2').datagrid(jsonHeader);//提交
    	}
    	
    	function export1(){
    		_ks=$('#ks').val();//开始时间
			addMonth($('#ks').val());//根据开始时间自动确定结束时间
			// 创建Form  
		    var form = $('<form></form>');  
		    form.attr('action', "export1");  
		    form.attr('method', 'post');
		    form.attr('target', '_self');  
		    // 创建Input1
		    var my_input1 = $('<input type="text" name="ks" />');  
		    my_input1.attr('value', _ks+'-01');
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
    	
    	function export2(){
    		alert('2');
    		_ks=$('#ks').val();//开始时间
			addMonth($('#ks').val());//根据开始时间自动确定结束时间
			// 创建Form  
		    var form = $('<form></form>');  
		    form.attr('action', "export2");  
		    form.attr('method', 'post');
		    form.attr('target', '_self');  
		    // 创建Input1
		    var my_input1 = $('<input type="text" name="ks" />');  
		    my_input1.attr('value', _ks+'-01');
		    form.append(my_input1);
		    // 创建Input2
		    var my_input2 = $('<input type="text" name="js" />');  
		    my_input2.attr('value', _js);
		    form.append(my_input2);
		    // 创建Input3
		    var my_input3 = $('<input type="text" name="account" />');  
		    my_input3.attr('value', _account);
		    form.append(my_input3);
		    	    
		    form.appendTo($("body"));    
		    form.submit();
    	}

    </SCRIPT>
</head>

<body>
	<h2>食六计绿色食品直通车代理商月对账单</h2>
	<div style="margin:10px 0;">
		选择年月<input id="ks" name="ks" class="Wdate" type="text" onClick="showdate();">
		<a href="javascript:void(0)" class="easyui-linkbutton" onclick="submitForm();">查询</a>
		<a href="javascript:void(0);" class="easyui-linkbutton" onclick="export1();">导出1</a> 
		<a href="javascript:void(0);" class="easyui-linkbutton" onclick="export2();">导出2</a> 
	</div>
	<!-- 账号|返利金额            开始时间|结束时间 -->
	<!-- 订单号|时间|产品名称|数量|返利            开始时间|结束时间|账号-->
	<table id="tab1" class="easyui-datagrid" title="代理商月对账单" style="width:890px;height:390px"
			data-options="singleSelect:true,collapsible:true,onClickRow:getDetail">
		<thead>
			<tr>
				<th data-options="field:'account_super',width:260,align:'left'">账号</th>
				<th data-options="field:'backMoney',width:260,align:'right'">返利金额（元）</th>
			</tr>
		</thead>
	</table>
	<div style="margin:10px 0;"></div>
	<div class="demo-info">
		<div class="demo-tip icon-tip"></div>
		<div></div>
	</div>
	<table id="tab2"  class="easyui-datagrid" title="用户月详单" style="width:890px;height:390px"
			data-options="singleSelect:true,collapsible:true">
		<thead> 
			<tr> 
				<th data-options="field:'order_id',width:130,align:'center'">订单号</th>
				<th data-options="field:'sum',width:130,align:'right'">合计（元）</th>
				<th data-options="field:'order_time',width:190,align:'center'">订单提交时间</th>
				<th data-options="field:'product_name',width:130,align:'center'">商品名称</th>
				<th data-options="field:'product_num',width:50,align:'center'">商品数量</th>
				<th data-options="field:'backMoney',width:130,align:'right'">返利金额（元）</th>
				<th data-options="field:'nowPrice',width:90,align:'right'">原价（元）</th>				
				<th data-options="field:'nowPrice_zk',width:90,align:'right'">折扣价格（元）</th>
				<th data-options="field:'nowPrice_vip',width:90,align:'right'">批发价格（元）</th>
			</tr>
		</thead>
	</table>
</body>
</html>