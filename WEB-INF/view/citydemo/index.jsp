
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="/decorators/path.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>漫画分享省市地区三级联动弹出层Jquery特效</title>

<style type="text/css">
html,body,p,th,td,input,select,textarea,button,div {padding:0; margin:0;font-family: "microsoft yahei",Tahoma, sans-serif ; font-size:12px; line-height:180%;}
html,body{background:#F6F6F6;}
dl,ol,dt,dd,ul,li,form,h1,h2,h3,h4,h5,h6 {margin:0; padding:0;list-style:none; }
input,select,textarea,button{vertical-align:middle;resize:none;}
.clear{clear:both;overflow:hidden; height:1px;}
.clearfix{overflow:auto;height:1%}
img{border:0; vertical-align:middle}
body,a,a:visited{font-size:12px;color:#000;text-decoration:none;}
a:hover{ text-decoration:underline;color:#333}
a,a:hover{text-decoration:none}img{border:0}ul{list-style:none;margin:0;}label{color:#6CBD45;font-size:14px;font-weight:bold;padding-bottom:0.5em;margin:0;}



.city_input{border:1px solid #d6d6d6;width:180px;height:30px;background:url(<%=path%>/common/image/ts-indexcity.png) no-repeat;line-height:30px;margin-top:5px;text-indent:5px;}
</style> 

<link href="<%=path%>/common/css/cityLayout.css" type="text/css" rel="stylesheet">

</head>
<body>
	  

<div align="left" style="width:180px;">
	<input input style="width:180px;" name="" id="start1" 
		autocomplete="off" type="text" value="请选择/输入城市名称" 
		class="city_input  inputFocus proCityQueryAll proCitySelAll" ov="请选择/输入城市名称">
</div>

<!--弹出省省市-->
<div class="provinceCityAll" >

	<div class="tabs clearfix">
		<ul>
		
			<li><a href="javascript:" class="current" tb="provinceAll">国际港澳台</a></li>
			<li><a href="javascript:" tb="cityAll" id="cityAll">省/州</a></li>
			<li><a href="javascript:" tb="countyAll" id="countyAll">城市</a></li>
			<li><a href="javascript:" tb="townAll" id="townAll">区/县</a></li>
		</ul>
	</div>
	
	<div class="con">
		
		<div class="provinceAll invis">
			<div class="pre"><a></a></div>
			<div class="list">
				<ul></ul>
			</div>
			<div class="next"><a class="can"></a></div>
		</div>
		<div class="cityAll invis">
			<div class="pre"><a></a></div>
			<div class="list">
				<ul></ul>
			</div>
			<div class="next"><a class="can"></a></div>
		</div>
		<div class="countyAll invis">
			<div class="pre"><a></a></div>
			<div class="list">
				<ul></ul>
			</div>
			<div class="next"><a class="can"></a></div>
		</div>
		<div class="townAll invis">
			<div class="pre"><a></a></div>
			<div class="list">
				<ul></ul>
			</div>
			<div class="next"><a class="can"></a></div>
		</div>
	</div>
	
</div>

<script src="../js/city/jquery-1.6.2.min.js" charset="UTF-8"></script>
<script src="../js/city/public.js" charset="UTF-8"></script>
</body>
</html>
