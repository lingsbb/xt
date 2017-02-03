<%@page pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport"
	content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
<title>注册</title>
<link rel="stylesheet" type="text/css" href="front/css/mui.min.css" />
<link rel="stylesheet" type="text/css" href="front/css/own.css" />
<link rel="stylesheet" type="text/css" href="front/css/iconfont.css" />
<style type="text/css">
/*下面两项是重置muicss的输入框label和input之间的宽比率*/
.mui-input-row label {
	width: 20%;
}

.mui-input-row label ~input {
	width: 80%;
}
</style>
</head>
<body>

	<header class="mui-bar mui-bar-nav own-header-hidden">
		<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
		<h1 class="mui-title">注册</h1>
	</header>

	<div class="mui-content own-content-padding">
		<div class="mui-card" style="margin-top: 30px;">
			<form class="mui-input-group">
				<div class="mui-input-row">
					<label><span class="mui-icon iconfont icon-zhanghao"></span>
					</label> <input id="account" value="" class="mui-input-clear" type="text"
						placeholder="帐号（数字字母，不许汉字）" />
				</div>
				
				<div class="mui-input-row">
					<label><span class="mui-icon iconfont icon-zhanghao"></span>
					</label> <input id="tel" value="" class="mui-input-clear" type="text"
						placeholder="手机号（可选）" />
				</div>
				<div class="mui-input-row">
					<label><span class="mui-icon iconfont icon-zhanghao"></span>
					</label> <input id="nickname" value="" class="mui-input-clear" type="text"
						placeholder="昵称" />
				</div>
				<div class="mui-input-row">
					<label><span class="mui-icon iconfont icon-mimaxiugai"></span>
					</label> <input id="password" value="" class="mui-input-clear" type="password"
						placeholder="密码" />
				</div>
				<div class="mui-input-row">
					<label><span class="mui-icon iconfont icon-queren"></span>
					</label> <input id="re_password" value="" class="mui-input-clear" type="password"
						placeholder="确认密码" />
				</div>
			</form>
		</div>
		<div class="mui-button-row" style="margin: 10px 15px;">
			<button  id="btn_register" type="button"
				class="mui-btn mui-btn-danger"
				style="padding: 5px 0px;width: 100%;height: 40px;">注册</button>
		</div>
	</div>

	<script src="front/js/jquery-1.4.2.min.js" charset="UTF-8"
		type="text/javascript"></script>
	<script src="front/front/common.js" charset="UTF-8"></script>
	<script src="front/js/mui.min.js" charset="UTF-8"></script>
	<script src="front/mobile/register.js" charset="UTF-8"></script>
	<script type="text/javascript" charset="UTF-8">

	</script>

</body>
</html>