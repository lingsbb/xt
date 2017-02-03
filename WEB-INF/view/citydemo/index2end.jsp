<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">

<head>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<title>选择配送城市</title>



<link type="text/css" rel="stylesheet" href="../js/city1/css/css.css" />
<link type="text/css" rel="stylesheet" href="../js/city1/css/zqx.css" />
<script src="../js/city1/js/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/js/common/jsonutil.js"></script>
</head>

<body>


<ul id="list1" style="width:620px;margin:40px auto 0 auto;">

	<li id="summary-stock">

		<div class="dt">配&nbsp;送&nbsp;至：</div>

		<div class="dd">

			<div id="store-selector">

				<div class="selevent">
					<div>
						<input id="wlname" list="wlnames" oninput="OnInput()" onpropchange="OnPropChanged()"  />
						<datalist id="wlnames">
				  
						</datalist>
						
					</div>
					<b></b>
				</div> 
				
				<div onclick="locationPanelToggle(false)" class="close"></div>
				<div class="zqx-search-fdiv">
					<div id="zqx-search-sdiv">
						   <!--ul class="zqx-area-list">
								<li><a href='#none'>test</a></li>
								<li><a href='#none'>test</a></li>
								<li><a href='#none'>test</a></li>
								<li><a href='#none'>test</a></li>
								<li><a href='#none'>test</a></li>
								<li><a href='#none'>test</a></li>
								<li><a href='#none'>test</a></li>
								<li><a href='#none'>test</a></li>
								<li><a href='#none'>test</a></li>
						   </ul-->					
					</div>
					<input type="button" value="关闭" onclick="searchViewToggle(false)"/>
				</div>
			</div>
			
			<div id="store-prompt"><strong></strong></div><!--store-prompt end--->
			
		</div>

	</li>

</ul>



<script src="../js/city1/js/start2.js"></script>
<script src="../js/city1/js/location.js"></script>
<script src="../js/city1/js/search.js"></script>


</body>

</html>

    