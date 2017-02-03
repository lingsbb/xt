<%@ page language="java" contentType="text/html" pageEncoding="utf-8"%>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

	<head id="Head1">
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title></title>
		<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/js/easyui-1.4.4/themes/default/easyui.css">
		<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/js/easyui-1.4.4/themes/icon.css">
		<script type="text/javascript" src="<%=request.getContextPath()%>/js/easyui-1.4.4/jquery.min.js"></script>
		<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/js/easyui-1.4.4/demo/demo.css">
		<script type="text/javascript" src="<%=request.getContextPath()%>/js/easyui-1.4.4/jquery.easyui.min.js"></script>
		<style type="text/css">
			/* 标签居右  */
			th{
				text-align: right;
			}
		</style>
		<script type="text/javascript">
			// 获取项目的URL
			function getCurProjPath() {
				var curWwwPath = window.document.location.href;
				var pathName = window.document.location.pathname;
				var pos = curWwwPath.indexOf(pathName);
				var localhostPath = curWwwPath.substring(0, pos);
				var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
				return (localhostPath + projectName);
			}
			//console.info(getCurProjPath());
		</script>
		<script type="text/javascript" charset="UTF-8">
			var loginAndRegDialog;
		
			$(function() {
				loginAndRegDialog = $("#loginAndRegDialog");
				// 将div渲染程dialog
				loginAndRegDialog.dialog({
					closable : false,
					modal : true,
					buttons : [ 
						{
							text : '登录',
							handler : function() {
								document.getElementById("loginInputForm").submit();
							}
						}, 
						{
							text : '关闭',
							handler : function() {
								if (confirm("您确定要关闭本页吗？")){
									window.opener=null;
									window.open('','_self');
									window.close();
								}
							}
						}
					]
				});
			});
		</script>
	</head>

	<body>
		<div id="loginAndRegDialog" title="食六计绿色食品直通车配送端" style="width:360px;height:210px;">
			<form id="loginInputForm" method="post" action="loginOk">
				<table>
					<tr>
						<th></th>
						<td></td>
					</tr>
					<tr>
						<th></th>
						<td></td>
					</tr>
					<tr>
						<th></th>
						<td></td>
					</tr>
					<tr>
						<th></th>
						<td></td>
					</tr>

					<tr>
						<th>用户名</th>
						<td>
							<input style="width: 220px; height: 29px; padding: 10px 20px;" class="easyui-textbox" name="name" value="" type="text" />
						</td>
					</tr>
					<tr>
						<th>密码</th>
						<td>
							<input style="width: 220px; height: 29px; padding: 10px 20px;" class="easyui-textbox" name="password" value="" type="password" />
						</td>
					</tr>
				</table>
			</form>
		</div>

	</body>

</html>