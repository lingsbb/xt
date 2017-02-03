<%@page pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8">
		<!--标准mui.css-->
		
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="apple-mobile-web-app-capable" content="yes">
		<meta name="apple-touch-fullscreen" content="yes">
		<meta name="format-detection" content="telephone=no">
		<meta name="apple-mobile-web-app-status-bar-style" content="black">
		<meta name="format-detection" content="telephone=no">
		<meta name="msapplication-tap-highlight" content="no">
		<meta name="viewport" content="initial-scale=1,maximum-scale=1,minimum-scale=1">
		<title>购物车</title>
		<link rel="stylesheet" type="text/css" href="front/css1/base.css">
		<link rel="stylesheet" type="text/css" href="front/css1/nctouch_common.css">
		<link rel="stylesheet" type="text/css" href="front/css1/nctouch_cart.css">

	</head>

	<body>
		<header id="header" class="fixed">
			<div class="header-wrap">
				<div class="header-l" >
					<a href="javascript:history.go(-1)" class="mui-icon-left-nav">
						<img src="front/images/back.png">
						<i class="back"></i>						
					</a>
				</div>
				<div class="header-title">
					<h1>购物车</h1>
				</div>
				<div class="header-r">
					<a id="header-nav" href="javascript:void(0);"><i class="more"></i><sup></sup></a>
				</div>
			</div>
		</header>

		<div class="nctouch-main-layout">
		  <div id="cart-list-wp">
		            <div class="nctouch-norecord cart">
						<div class="norecord-ico"><i></i></div>
						<dl>
							<dt>您的购物车还是空的</dt>
							<dd>去挑一些中意的商品吧</dd>
						</dl>
						<a href="index" class="btn">随便逛逛</a>
					</div>
		            </div>
		</div>
		<footer id="footer" class="bottom"></footer>

		<script type="text/javascript" src="front/css/zepto.min.js"></script>
		<script type="text/javascript" src="front/css/config.js"></script>
		<script type="text/javascript" src="front/css/template.js"></script>
		<script type="text/javascript" src="front/css/common.js"></script>
		<script type="text/javascript" src="front/css/simple-plugin.js"></script>
		<script type="text/javascript" src="front/css/tmpl/cart-list.js"></script>
	
	</body>
	<!--以下是脚本-->
	<script src="front/js/jquery-1.4.2.min.js" charset="UTF-8" type="text/javascript"></script>
	<script src="front/front/common.js" charset="UTF-8"></script>
	<script src="front/js/mui.min.js"></script>
	<script>

		
	</script>
</html>