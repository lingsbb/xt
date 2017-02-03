<%@ page language="java" contentType="text/html" pageEncoding="utf-8"%>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>食六计绿色食品直通车财务端</title>
    <link href="Css/default.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/js/outlook/css/default.css" />
    <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/js/outlook/js/themes/default/easyui.css" />
    <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/js/outlook/js/themes/icon.css" />
    <script type="text/javascript" src="<%=request.getContextPath()%>/js/outlook/js/jquery-1.4.2.min.js"></script>
    <script type="text/javascript" src="<%=request.getContextPath()%>/js/outlook/js/jquery.easyui.js"></script>
	<script type="text/javascript" src='<%=request.getContextPath()%>/js/outlook/js/outlook2.js'> </script>

    <script type="text/javascript">

		var _menus = {
		                 "menus":[
		                 		{"menuid":"1","icon":"icon-sys","menuname":"财务管理",
							      	"menus":[
									{"menuid":"11","menuname":"订单收支明细","icon":"icon-page","url":"../money/details"},
									{"menuid":"12","menuname":"代理商对账单","icon":"icon-page","url":"../money/index"}	
								    ]}
				]};

        $(function() {
            $('#loginOut').click(function() {
                $.messager.confirm('系统提示', '您确定要退出本次登录吗?', function(r) {

                    if (r) {
                    	
                        location.href = 'login';
                    }
                });

            })
			
			
			
        });
		
		

    </script>

</head>
<body class="easyui-layout" style="overflow-y: hidden"  scroll="no">
<noscript>
<div style=" position:absolute; z-index:100000; height:2046px;top:0px;left:0px; width:100%; background:white; text-align:center;">
    <img src="images/noscript.gif" alt='抱歉，请开启脚本支持！' />
</div></noscript>
    <div region="north" split="true" border="false" style="overflow: hidden; height: 30px;
        background: url(images/layout-browser-hd-bg.gif) #7f99be repeat-x center 50%;
        line-height: 20px;color: #fff; font-family: Verdana, 微软雅黑,黑体">
        <span style="float:right; padding-right:20px;" class="head">欢迎您，<a href="#" id="loginOut">安全退出</a></span>
        <span style="padding-left:10px; font-size: 16px; ">食六计绿色食品直通车财务端 </span>
    </div>
    <div region="south" split="true" style="height: 30px; background: #D2E0F2; ">
        <div class="footer">版权所有，翻版必究</div>
    </div>
    <div region="west" split="true" title="导航菜单" style="width:180px;" id="west">
<div class="easyui-accordion" fit="true" border="false">
		<!--  导航内容 -->
				
			</div>

    </div>
    <div id="mainPanle" region="center" style="background: #eee; overflow-y:hidden">
        <div id="tabs" class="easyui-tabs"  fit="true" border="false" >
			<div title="欢迎使用" style="padding:20px;overflow:hidden;" id="home">
				
			<h1>欢迎使用食六计绿色食品直通车财务端</h1>
				</br>
			</div>
		</div>
    </div>


	<div id="mm" class="easyui-menu" style="width:150px;">
		<div id="mm-tabclose">关闭</div>
		<div id="mm-tabcloseall">全部关闭</div>
		<div id="mm-tabcloseother">除此之外全部关闭</div>
		<div class="menu-sep"></div>
		<div id="mm-tabcloseright">当前页右侧全部关闭</div>
		<div id="mm-tabcloseleft">当前页左侧全部关闭</div>
		<div class="menu-sep"></div>
		<div id="mm-exit">退出</div>
	</div>


</body>
</html>