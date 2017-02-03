<%@page pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
    <title>添加收货地址</title>
    
    <link rel="stylesheet" type="text/css" href="front/css/mui.min.css"/>
    <link rel="stylesheet" type="text/css" href="front/css/own.css"/>
    <link rel="stylesheet" type="text/css" href="front/css/iconfont.css"/>
    <link rel="stylesheet" type="text/css" href="front/css/mui.picker.min.css"/>
    
    <!--标准mui.css-->
	<link rel="stylesheet" href="front/css/mui.min.css">
	<link rel="stylesheet" href="front/css/iconfont.css">

	<!--App自定义的css-->
	<link rel="stylesheet" type="text/css" href="front/css/app.css" />
	<link rel="stylesheet" type="text/css" href="front/css/iconfont.css" />
	<link rel="stylesheet" type="text/css" href="front/css/own.css" />
	<link rel="stylesheet" type="text/css" href="front/css/main.css" />
		
    <style type="text/css">
		.mui-input-row label {
			width: 100%;
		}
    </style>
</head>
<body>
	<header class="mui-bar mui-bar-nav">
		<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left own-left-nav-color"></a>
		<h1 class="mui-title own-left-nav-color">添加收货地址</h1>
		<a class="mui-icon iconfont icon-iconfont53 mui-pull-right own-left-nav-color"></a>
	</header>
	
	<div class="mui-content" >
		<form class="mui-input-group">
			<div class="mui-input-row">
				<input id="s_name"  type="text" class="mui-input-clear" placeholder="收货人姓名" />
			</div>
			<div class="mui-input-row">
				<input id="s_phone" type="text" class="mui-input-clear" placeholder="手机号码" />
			</div>
			<div class="mui-input-row">
				<input id="s_zip" type="text"  maxlength='6' class="mui-input-clear" placeholder="邮编" />
			</div>
			<div id="city"> 
				<select id="s_province" name="s_province" class="m-wrap small"></select>
				<select id="s_city" name="s_city" class="m-wrap small"></select>
				<select id="s_county" name="s_county" class="m-wrap small"></select> 
			</div>
			
			<div  class="mui-input-row" style="height: 4em; padding-top: 2px;">
				<textarea id="s_address" placeholder="详细地址"></textarea>
			</div>
			
			</br>
			
			<div class="mui-table">
				<span align="right">							
					<span style="padding-right: 200px;"></span>
						<button onclick="save();" type="button" class="mui-btn mui-btn-danger">
							添加保存
						</button>
					<span style="padding-right: 200px;"></span>
				</span>
			</div>
			</br>
			
		</form>
	</div>

	<script src="front/js/jquery-1.4.2.min.js" charset="UTF-8" type="text/javascript"></script>
	<script src="front/front/common.js" charset="UTF-8"></script>
	<script src="front/js/mui.min.js" charset="UTF-8"></script>
	<script src="front/js/mui.picker.min.js" charset="UTF-8"></script>
	<script src="front/js/own.js" charset="UTF-8"></script>
	<script src="front/front/area.js" charset="UTF-8"></script>	
	<script src="front/mobile/address.js" charset="UTF-8"></script>	
	
	<script type="text/javascript" charset="UTF-8">

	</script>
	
</body>
</html>