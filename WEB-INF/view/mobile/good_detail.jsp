<%@page pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<title>商品详情</title>
		<meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1,user-scalable=no">
		<meta name="apple-mobile-web-app-capable" content="yes">
		<meta name="apple-mobile-web-app-status-bar-style" content="black">

		<!--标准mui.css-->
		<link rel="stylesheet" href="front/css/mui.min.css">

		<!--App自定义的css-->
		<link rel="stylesheet" type="text/css" href="front/css/app.css" />
		<link rel="stylesheet" type="text/css" href="front/css/iconfont.css" />
		<link rel="stylesheet" type="text/css" href="front/css/own.css" />

		<style>
			.mui-table-view-cell:after {
				left: 0px;
			}
			
			.mui-table-view .mui-table-view-cell {
				background-color: white;
			}
			
			.mui-slider-indicator .mui-active.mui-indicator {
				/*background-color: #41CEA9;*/
			}
			
			#headul:after {
				height: 0px;
			}
			
			#headul .mui-table-view-cell {
				padding-bottom: 0px;
				padding-top: 0px;
				margin-top: 0px;
				background-color: white;
			}
			
			#headul {
				margin-top: 10px;
				margin-bottom: 8px;
			}
			
			#headul .mui-table-view-cell:after {
				height: 0px;
			}
			
			.mui-table-cell .borderleft {
				height: 40%;
				border-left: 1px solid gray;
				margin-left: 5px;
			}
			
			.mui-icon.iconfont {
				font-size: 1em;
				color: #ff0000;
			}
			
			#headul .mui-table-view-cell.setbg {
				background-color: #f3fcfb;
			}
			
			#headul .mui-table-view-cell.setbg div {
				font-size: 0.7em;
				color: gray;
			}
			
			.mui-table-view-cell p.evaluateTitle {
				color: black;
				font-size: 1em;
			}
			
			.mui-table-view {
				margin-bottom: 10px;
			}
			
			span.evaluate {
				font-size: 0.68em;
				color: darkgray;
				border: 1px solid darkgray;
				word-break: nowrap;
				word-wrap: nowrap;
				border-radius: 2px;
				text-align: center;
			}
			
			.mui-table-view-cell .evaluaterHead img {
				background-color: darkgray;
				width: 2.5em;
				max-width: 2.5em;
				height: 2.5em;
				border: 1px solid gray;
				border-radius: 50%;
			}
			
			.mui-table-view-cell .evaluaterHead span {
				font-size: 0.9em;
				vertical-align: super;
			}
			
			.mui-table-view-cell .evaluteContent {
				font-size: 0.7em;
				line-height: 1.2em;
			}
			
			.mui-table-view-cell .evaluteMsg {
				font-size: 0.5em;
			}
			
			.mui-table-view-cell.moreEvaluate {
				text-align: center;
				padding-top: 8px;
				padding-bottom: 8px;
			}
			
			.mui-table-view-cell.moreEvaluate a {
				color: darkgray;
			}
			
			.mui-table .mui-col-xs-4 {
				font-size: 0.68em;
				color: darkgray;
			}
			
			.mui-table .mui-col-xs-6 {
				line-height: 1.1em;
				font-size: 0.8em;
			}
			
			.mui-table .mui-col-xs-6 .stroemsg {
				font-size: 0.5em;
				color: darkgray;
			}
			
			.mui-table .mui-col-xs-6 .lingBtn {
				font-size: 1em;
			}
			
			.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
				margin-top: 2px;
				margin-bottom: 5px;
				height: auto;
			}
			
			.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body p.mui-ellipsis-2 {
				font-size: 0.5em;
				line-height: 1.2em;
				white-space: pre;
				height: 2.3em;
			}
			
			.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body p.price {
				font-size: 0.8em;
				color: #ff0000;
			}
		</style>

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
			<title>商品详情</title>
			<link rel="stylesheet" type="text/css" href="front/css1/base.css">
			<link rel="stylesheet" type="text/css" href="front/css1/nctouch_common.css">
			<link rel="stylesheet" type="text/css" href="front/css1/nctouch_products_detail.css">
		</head>
	</head>

	<body>
		<div class="mui-content">
			<!--商品幻灯片-->
			<div id="slider" class="mui-slider">
				<div id="ppt" class="mui-slider-group mui-slider-loop">
				
					 <!--支持循环，需要重复图片节点-->
					 <!--
					<div class="mui-slider-item mui-slider-item-duplicate"><a href="#"><img src="front/images/slider/slider_bottom1.jpg"><p class="mui-slider-title">销量3</p></a></div>
					<div class="mui-slider-item"><a href="#"><img src="front/images/slider/slider1.jpg"><p class="mui-slider-title">销量1</p></a></div>
					<div class="mui-slider-item"><a href="#"><img src="front/images/slider/slider2.jpg"><p class="mui-slider-title">销量2</p></a></div>
					<div class="mui-slider-item"><a href="#"><img src="front/images/slider/slider_bottom1.jpg"><p class="mui-slider-title">销量3</p></a></div>
					 
					<div class="mui-slider-item mui-slider-item-duplicate"><a href="#"><img src="front/images/slider/slider1.jpg"><p class="mui-slider-title">销量1</p></a></div>
					-->
				</div>
				<div id="point"  class="mui-slider-indicator mui-text-right">
					<!--
					<div class="mui-indicator mui-active"></div>
					<div class="mui-indicator"></div>
					<div class="mui-indicator"></div>
					-->
				</div>
			</div>
			<div id="jiu" style="display:none;">0</div>
			<div id="score" style="display:none;">0</div>
			<!--商品简介-->
			<ul class="mui-table-view">
				<li class="mui-table-view-cell">
					<div class="mui-table">
						<div class="mui-table-cell mui-col-xs-10">
							<h5 id="product_name"  class="own-black-color1 mui-ellipsis-2">Goods</h5>
							<h5 id="product_nowPrice" class="own-main-color">¥0</h5>
							<h6 id="product_price" class="own-text-through">¥0</h6>
						</div>
						<!--<div class="mui-table-cell mui-col-xs-2 mui-text-right">
							<div class="borderleft">
								<button type="button" class="mui-btn" >
									收藏
								</button>
							</div>
						</div>-->
					</div>
				</li>

				<li class="mui-table-view-cell">
					<div class="mui-table">
						<div class="mui-table-cell mui-col-xs-10">
							<h5 class="own-black-color">单位</h5>
						</div>
						<div class="mui-table-cell mui-col-xs-2 mui-text-right">
							<h5 id="product_unit" class="own-black-color">件</h5>
						</div>
					</div>
				</li>
			</ul>

			<!--商品信息-->
			<ul id="list" class="mui-table-view mui-table-view-chevron">
				<li class="mui-table-view-cell">
					<div class="mui-table">
						<div class="mui-table-cell mui-col-xs-10">
							<h5 class="own-black-color1 mui-ellipsis-2">商品信息</h5>
						</div>
					</div>
				</li>

				<li class="mui-table-view-cell">
					<div class="mui-table">
						<div class="mui-table-cell mui-col-xs-10">
							<h5 class="own-black-color">库存</h5>
						</div>
						<div class="mui-table-cell mui-col-xs-2 mui-text-right">
							<h5 id="product_stockAndUnit" class="own-black-color">0</h5>
						</div>
					</div>
				</li>
				
			</ul>

			<!--店家服务和促销-->
			<ul class="mui-table-view">
				<li class="mui-table-view-cell">
					<div class="mui-table">
						<div class="mui-table-cell mui-col-xs-10">
							<h5 class="own-black-color1 mui-ellipsis-2">服务促销</h5>
						</div>
					</div>
				</li>
				<li class="mui-table-view-cell setbg">
					<div>
						<span class="mui-icon iconfont icon-queren"></span>
						<span style="font-size: 14px;">本店新开业，商品打折销售，欲购从速。</span>
					</div>
				</li>

				<li class="mui-table-view-cell">
					<a style="font-size: 14px;" class="mui-navigate-right" >
						店铺名称：食六计绿色食品直通车
					</a>
				</li>

			</ul>

			<!--商品规格-->
			<ul id="list" class="mui-table-view mui-table-view-chevron">
				<li class="mui-table-view-cell">
					<div class="mui-table">
						<div class="mui-table-cell mui-col-xs-10">
							<h5 class="own-black-color1 mui-ellipsis-2">商品简介</h5>
						</div>
					</div>
				</li>
				<li class="mui-table-view-cell">
					<div class="mui-table">
						<div class="mui-table-cell mui-col-xs-10">
							<h5 id="product_introduce" class="own-black-color">商品简介</h5>
						</div>
					</div>
				</li>
			</ul>

			<!--图文详情-->
			<ul id="list" class="mui-table-view mui-table-view-chevron">
				<li class="mui-table-view-cell">
					<div class="mui-table">
						<div class="mui-table-cell mui-col-xs-10">
							<h5 class="own-black-color1 mui-ellipsis-2">图文详情</h5>
						</div>
					</div>
				</li>
				<div id="product_detail">
					
				</div>
			</ul>

			<!--<div id="product_detail_spec_html" class="nctouch-bottom-mask down">
				<div class="nctouch-bottom-mask-bg"></div>
				<div class="nctouch-bottom-mask-block">
					<div class="nctouch-bottom-mask-tip"><i></i>点击此处返回</div>
					<div class="nctouch-bottom-mask-top goods-options-info">
						<div class="goods-pic">s
							<img src="http://b2b2c.shopnctest.com/dema/data/upload/shop/store/goods/1/1_04624764463835920_360.png">
						</div>
						<dl>
							<dt>Skyworth/创维49E7BRE 49吋天赐系统IPS硬屏智能偏光3D 液晶电视 香槟金色 官方</dt>
							<dd class="goods-price">

								￥<em>3299.00</em>

								<span class="goods-storage">库存：500件</span>
							</dd>
						</dl>
						<a href="javascript:void(0);" class="nctouch-bottom-mask-close"><i></i></a>
					</div>
					<div class="nctouch-bottom-mask-rolling" id="product_roll">
						<div class="goods-options-stock" style="-webkit-transition: 0ms cubic-bezier(0.1, 0.57, 0.1, 1); transition: 0ms cubic-bezier(0.1, 0.57, 0.1, 1); -webkit-transform: translate(0px, 0px) translateZ(0px);">

							<dl class="spec">
								<dt spec_id="">
				颜色：
			</dt>
								<dd>

									<a href="javascript:void(0);" class="current" specs_value_id="1">
						香槟金色
					</a>

								</dd>
							</dl>

							<dl class="spec">
								<dt spec_id="">
				套餐类型：
			</dt>
								<dd>

									<a href="javascript:void(0);" class="current" specs_value_id="2">
						官方标配
					</a>

								</dd>
							</dl>

						</div>
					</div>
					<div class="goods-option-value">购买数量
						<div class="value-box">
							<span class="minus">
			<a href="javascript:void(0);">&nbsp;</a>
		</span>
							<span>
			<input type="text" pattern="[0-9]*" class="buy-num" id="buynum" value="1">
		</span>
							<span class="add">
			<a href="javascript:void(0);">&nbsp;</a>
		</span>
						</div>
					</div>
				</div>
			</div>-->
			<!--position:absolute;bottom:0px;-->
			<!-- position:fixed; position:fixed;bottom:0;-->
			<div style="border:grey; background-color:#EFEFF4 ;">
				<!--商品简介"-->
				<ul class="mui-table-view">
					<li class="mui-table-view-cell">
						<div class="mui-table" >
							<span align="left">	
								<button id="btn_login" type="button" class="mui-btn">
								 	购物车
								</button>
							</span>	
							<span align="right">							
								<span style="padding-right: 10px;"></span>
								<button id="btn_add_carts" type="button" class="mui-btn mui-btn-warning">
									加入购物车
								</button>
								<span style="padding-right: 2px;"></span>
								<button id="btn_order" type="button" class="mui-btn mui-btn-danger">
									立即购买
								</button>
								<span style="padding-right: 2px;"></span>
							</span>
						</div>
					</li>
				</ul>
			</div>

		</div>

	</body>

	<!--以下是脚本-->
	<script src="front/js/jquery-1.4.2.min.js" charset="UTF-8" type="text/javascript"></script>
	<script src="front/front/common.js" charset="UTF-8"></script>
	<script src="front/js/mui.min.js"></script>
	<script src="front/mobile/good_detail.js" charset="UTF-8"></script>
	<script>
	
	</script>

</html>