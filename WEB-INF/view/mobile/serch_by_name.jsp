<%@page pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<title>按照名称搜索商品</title>
		<meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1,user-scalable=no">
		<meta name="apple-mobile-web-app-capable" content="yes">
		<meta name="apple-mobile-web-app-status-bar-style" content="black">

		<!--标准mui.css-->
		<link rel="stylesheet" href="front/css/mui.min.css">
		<link rel="stylesheet" href="front/css/iconfont.css">
	
		<!--App自定义的css-->
		<link rel="stylesheet" type="text/css" href="front/css/app.css" />
		<link rel="stylesheet" type="text/css" href="front/css/iconfont.css" />
		<link rel="stylesheet" type="text/css" href="front/css/own.css" />

		<!--扩展样式-->
		<style type="text/css">
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
		</style>
	</head>

	<body>
		<header class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">搜索商品</h1>
			<a id="info" class="mui-action-back mui-icon mui-icon-home mui-pull-right" style="color: #999;"></a>
		</header>
		<div class="mui-content">
			<!--搜索框-->
			<div class="mui-input-row mui-search">
				<input id="txt_search" type="search" onkeydown="javascript:if (event.keyCode==13) txt_search_enterEvent();" class="mui-input-clear" placeholder="商品搜索：请输入商品关键字">
			</div>

			<div align="center">
				<span id='search_name' class="mui-badge mui-badge-success">休闲美食</span>
			</div>

			<h5>&nbsp;</h5>

			<ul id="tab" class="mui-table-view mui-grid-view" style="background-color: #efeff4;">

			</ul>

			<!--页脚-->
			<p style="padding: 3px 5px;margin-bottom: 2px;">
				<h5 style="text-align: center;">Copyright@ 黑龙江食六计商贸有限公司</h5>
			</p>		
			<h5 style="text-align: center;">Allright Reserved Powered By 食六计</h5>
		</div>

	</body>

	<!--以下是脚本-->
	<script src="front/js/jquery-1.4.2.min.js" charset="UTF-8" type="text/javascript"></script>
	<script src="front/front/common.js" charset="UTF-8"></script>
	<script src="front/js/mui.min.js" charset="UTF-8"></script>
	<script src="front/js/own.js" charset="UTF-8"></script>
	<script src="front/js/ajax.js" charset="UTF-8"></script>
	<script src="front/mobile/serch_by_name.js" charset="UTF-8"></script>
	<script>
		

		
	</script>

</html>