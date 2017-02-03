<%@page pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
    <title>登录</title>
    <link rel="stylesheet" type="text/css" href="front/css/mui.min.css"/>
    <link rel="stylesheet" type="text/css" href="front/css/own.css"/>
    <link rel="stylesheet" type="text/css" href="front/css/iconfont.css"/>
    
    <style type="text/css">
		/*下面两项是重置muicss的输入框label和input之间的宽比率*/
		.mui-input-row label {
			width: 20%;
		}
		.mui-input-row label~input {
			width: 80%;
		}
    		
    </style>
</head>
<body>
	
	<header class="mui-bar mui-bar-nav">
		<h1 class="mui-title">登录</h1>
	</header>
	
	<div class="mui-content">
		<div style="margin-top: 30px; text-align: center;">
			<span class="mui-icon mui-icon-person" style="font-size: 4em; border: 2px solid gray; border-radius: 50%; color: gray;"></span>
		</div>
		<div class="mui-card" style="margin-top: 20px;">
			<form id="frm" class="mui-input-group">
				<div class="mui-input-row">
					<label><span class="mui-icon iconfont icon-zhanghao"></span></label>
					<input id="account" type="text" class="mui-input-clear" value="" placeholder="请输入帐号" />
				</div>
				<div class="mui-input-row">
					<label><span class="mui-icon iconfont icon-mimaxiugai"></span></label>
					<input id="password" type="password" class="mui-input-clear" value="" placeholder="请输入密码" />
				</div>
			</form>
		</div>
		<div class="mui-button-row" style="margin: 10px 15px;">
			<button id="btn_login" type="button" class="mui-btn mui-btn-danger mui-btn-block " style="padding: 5px 0px;">登录</button>
		</div>
		<div class="mui-button-row" style="padding-top: 0px;">
			<button id="btn_register" type="button" class="mui-btn mui-btn-link own-main-color own-font-size" style="padding-top: 0px; margin-right: 60px; ">快速注册</button>
		</div>
		
		
	</div>
	<script src="front/js/jquery-1.4.2.min.js" charset="UTF-8" type="text/javascript"></script>
	<script src="front/front/common.js" charset="UTF-8"></script>
	<script src="front/js/mui.min.js" charset="UTF-8"></script>
	<script src="front/js/own.js" charset="UTF-8"></script>
	<script src="front/js/ajax.js" charset="UTF-8"></script>
	<script src="front/mobile/login.js" charset="UTF-8"></script>
	<script type="text/javascript" charset="UTF-8">


	</script>
</body>
</html>