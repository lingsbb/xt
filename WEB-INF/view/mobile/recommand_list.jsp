<%@page pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="apple-mobile-web-app-capable" content="yes">
		<meta name="apple-touch-fullscreen" content="yes">
		<meta name="format-detection" content="telephone=no">
		<meta name="apple-mobile-web-app-status-bar-style" content="black">
		<meta name="format-detection" content="telephone=no">
		<meta name="msapplication-tap-highlight" content="no">
		<meta name="viewport" content="initial-scale=1,maximum-scale=1,minimum-scale=1">
		<title>被推荐人列表</title>
		<link rel="stylesheet" type="text/css" href="front/css1/base.css">
		<link rel="stylesheet" type="text/css" href="front/css1/nctouch_common.css">
		<link rel="stylesheet" type="text/css" href="front/css1/nctouch_cart1.css">

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
					<h1>被推荐人列表</h1>
				</div>
				<div class="header-r">
					<a id="header-nav" href="javascript:void(0);"><i class="more"></i><sup></sup></a>
				</div>
			</div>
		</header>

		<div class="nctouch-main-layout">
			<div id="cart-list-wp">


				<div class="nctouch-cart-container">
					<dl class="nctouch-cart-store">
					</dl>
					<div id="tab">
					
				   </div>
					
				</div>

				<div style="display:none" class="nctouch-cart-bottom">
					<div class="check-out ok">
						<a href="javascript:void(0)" onclick="add();">添加</a>
					</div>
				</div>

			</div>
		</div>

		<footer id="footer" class="bottom"></footer>
		<script src="front/js/jquery-1.4.2.min.js" charset="UTF-8" type="text/javascript"></script>
		<script src="front/front/common.js" charset="UTF-8"></script>
		<script src="front/js/mui.min.js"></script>
		<script src="front/mobile/recommand_list.js" charset="UTF-8"></script>
		
		<script type="text/javascript" charset="UTF-8">
		</script>
	
	</body>

</html>