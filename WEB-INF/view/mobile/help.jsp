<%@page pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<title>食六计绿色食品直通车</title>
	<meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1,user-scalable=no">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="black">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="apple-touch-fullscreen" content="yes">
	<meta name="format-detection" content="telephone=no">
	<meta name="msapplication-tap-highlight" content="no">
	<meta name="viewport" content="initial-scale=1,maximum-scale=1,minimum-scale=1">
			
	<!--标准mui.css-->
	<link rel="stylesheet" href="front/css/mui.min.css">
	<link rel="stylesheet" href="front/css/iconfont.css">

	<!--App自定义的css-->
	<link rel="stylesheet" type="text/css" href="front/css/app.css" />
	<link rel="stylesheet" type="text/css" href="front/css/iconfont.css" />
	<link rel="stylesheet" type="text/css" href="front/css/own.css" />

	<!--扩展样式-->
	<style type="text/css">
		.headImg {
			padding: 8% 0px 13% 0px;
			background: url(front/img/bg.jpeg);
			background-position: center center; 
			background-size: 100% auto;
		}
		
		.touxiang {
			text-align: center;
		}
		.touxiang div {
			width: 4em;
			height: 4em;
			padding: 0px;
			border-radius: 50%;
			border: 2px solid white;
			color: gray;
			margin: 0px auto;
			margin-bottom: 5px;
		}
		/*my的结束*/
		.mui-table-view:after {
			height: 0px;
		}
		/*图片显示的时候设置为自动 因为 从服务器来的图片大小相同*/
		
		.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-object {
			line-height: auto;
			max-width: auto;
			height: auto;
			border-top-right-radius: 4px;
			border-top-left-radius: 4px;
		}
		
		.mui-table-view-cell {
			margin-bottom: 10px;
		}
		
		.bgDiv {
			border: 1px solid rgba(204, 204, 204, 0.7);
			border-radius: 5px;
			background-color: white;
			width: 100%;
		}
		
		.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
			margin-top: 2px;
			margin-bottom: 5px;
			height: auto;
		}
		
		.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body p {
			white-space: pre;
			color: black;
		}
		
		.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body p.mui-ellipsis-2 {
			height: 30px;
		}
		
		.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body .price-one {
			margin-top: 12px;
			float: left;
			font-size: 1.1em;
			margin-left: 7%;
			color: red;
			margin-bottom: 10px;
		}
		
		.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body .price-two {
			margin-top: 12px;
			float: right;
			font-size: 1.1em;
			margin-right: 7%;
			text-decoration: line-through;
		}
		
		#touch {
			position: fixed;
			width: 20px;
			height: 20px;
			position: absolute;
			left: 0px;
			bottom:70px;
			z-index: 999999;
			filter:alpha(opacity=30);
			opacity:.5;
		}
	</style>

</head>

<body>


	<div class="mui-content">	
	
		<!--页脚-->
		<p style="padding: 3px 5px;margin-bottom: 2px;">
			<h5 style="text-align: center;">会员晋升规则</h5>
		</p>		
		<h5 style="text-align: left;">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp零售客户：如果推荐10人以上到网上采购商品，可以直接升至代理商。</h5>
		<h5 style="text-align: left;">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp一年内累计消费金额超过1000元晋升为一星级会员。</h5>
		<h5 style="text-align: left;">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp一年内累计消费金额超过2000元晋升为二星级会员。</h5>
		<h5 style="text-align: left;">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp一年内累计消费金额超过5000元晋升为三星级会员。</h5>
		<h5 style="text-align: left;">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp一年内累计消费金额超过10000元晋升为四星级会员。</h5>
		<h5 style="text-align: left;">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp一年内累计消费金额超过20000元晋升为五星级会员。</h5>
		<h5 style="text-align: left;">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp一年内累计消费金额超过50000元晋升为VIP会员。VIP会员可以通过跟客服申请成为代理商。</h5>
		<h5 style="text-align: left;">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp代理商特权：可以推荐一到三星级别会员，被推荐者的差价盈余归代理商所有。</h5>
		<h5 style="text-align: left;">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp总公司特权：可以推荐一到五星级别会员、VIP会员、代理商会员，被推荐者的差价盈余归区域代理所有。</h5>
	</div>
	
	
	<!--以下是脚本 一年内累计消费金额超过1000元晋升为一级会员。-->
	<script src="front/js/jquery-1.4.2.min.js" charset="UTF-8" type="text/javascript"></script>
	<script src="front/front/common.js" charset="UTF-8"></script>
	<script src="front/js/mui.min.js" charset="UTF-8"></script>
	<script src="front/js/own.js" charset="UTF-8"></script>
	<script src="front/js/ajax.js" charset="UTF-8"></script>
	<script src="front/mobile/index.js" charset="UTF-8"></script>
	<script src="front/mobile/index_cart.js" charset="UTF-8"></script>
	
	<script type="text/javascript" charset="utf-8">

	</script>
</body>
</html>