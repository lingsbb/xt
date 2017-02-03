<%@page pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
    <title>我的订单</title>
    
    <link rel="stylesheet" type="text/css" href="front/css/mui.min.css"/>
    <link rel="stylesheet" type="text/css" href="front/css/own.css"/>
    
    <style type="text/css">
    	.mui-table-view .mui-media-object {
			line-height: 75px;
			max-width: 75px;
			height: 75px;
		}
		.itemName {
			color: black;
			font-size: 0.9em;
		}
		
		.price {
			margin-top: 10px;
			font-size: 1em;
		}
		
		.curprice {
			color: #41CEA9;
		}
		.preprice {
			color: black;
			text-decoration:line-through
		}
    </style>
</head>
<body>
	<header class="mui-bar mui-bar-nav">
		
		<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
		<h1 class="mui-title" id="titleNamesA">未付款订单</h1>
		<a id="info" class="mui-action-back mui-icon mui-icon-home mui-pull-right" style="color: #999;"></a>
	</header>
	
	<!--<div id="pullrefresh" class="mui-content mui-scroll-wrapper">-->
		<div class="mui-scroll">
			<ul id="tab" class="mui-table-view" style="margin-top: 44px;">
	
			</ul>
		</div>
	<!--</div>-->
	
	<script src="front/js/jquery-1.4.2.min.js" charset="UTF-8" type="text/javascript"></script>
	<script src="front/front/common.js" charset="UTF-8"></script>
	<script src="front/js/mui.min.js" charset="UTF-8"></script>
	<script src="front/js/own.js" charset="UTF-8"></script>
	<script src="front/js/ajax.js" charset="UTF-8"></script>
	<script src="front/js/arttmpl.js" charset="UTF-8"></script>
	<script src="front/mobile/order_list_wfkdd.js" charset="UTF-8"></script>
	<script type="text/javascript" charset="UTF-8">
		
		

		
	</script>
	
</body>
</html>