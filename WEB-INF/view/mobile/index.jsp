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
	<!--下面的导航条tabbar-->
	<nav class="mui-bar mui-bar-tab">
		<a class="mui-tab-item mui-active" href="#tabbar"> 
			<span class="mui-icon mui-icon-home"></span>
			<span class="mui-tab-label">商城</span>
		</a>
		<a class="mui-tab-item" href="#tabbar-with-type">
			<span class="mui-icon mui-icon-bars"></span>
			<span class="mui-tab-label">分类</span>
		</a>
		<a class="mui-tab-item" href="#tabbar-with-chart">
			<span class="mui-icon mui-icon-bars"></span>
			<span class="mui-tab-label">购物车</span>
		</a>
		<a class="mui-tab-item" href="#tabbar-with-my">
			<span class="mui-icon mui-icon-gear"></span>
			<span class="mui-tab-label">我</span>
		</a>
	</nav>

	<div class="mui-content">

		<div id="tabbar" class="mui-control-content mui-active">
			<!--自家宣传-->
			<div id="slider" class="mui-slider">
				<div class="mui-slider-group mui-slider-loop">
					<!-- 额外增加的一个节点(循环轮播：第一个节点是最后一张轮播) -->
					<div class="mui-slider-item mui-slider-item-duplicate">
						<a href="#">
							<img src="front/images/slider/slider_bottom3.jpg">
							<p class="mui-slider-title">
								奶酪饼干
							</p>
						</a>
					</div>
					
					<div class="mui-slider-item">
						<a href="#">
							<img src="front/images/slider/slider_bottom1.jpg">
							<p class="mui-slider-title">
								团购优惠活动开始啦
							</p>
						</a>
					</div>
					<div class="mui-slider-item">
						<a href="#">
							<img src="front/images/slider/slider_bottom2.jpg">
							<p class="mui-slider-title">
								品牌运营上线折扣大优惠
							</p>
						</a>
					</div>
					<div class="mui-slider-item">
						<a href="#">
							<img src="front/images/slider/slider_bottom3.jpg">
							<p class="mui-slider-title">
								奶酪饼干
							</p>
						</a>
					</div>
					
					
					<!-- 额外增加的一个节点(循环轮播：最后一个节点是第一张轮播) -->
					<div class="mui-slider-item mui-slider-item-duplicate">
						<a href="#">
							<img src="front/images/slider/slider_bottom1.jpg">
							<p class="mui-slider-title">
								团购优惠活动开始啦
							</p>
						</a>
					</div>
				</div>
				<!--幻灯片的小点-->
				<div class="mui-slider-indicator mui-text-right">
					<div class="mui-indicator mui-active"></div>
					<div class="mui-indicator"></div>
					<div class="mui-indicator"></div>
				</div>
			</div>

			<!--公告栏
			<div style="background-color:#EDF5AD;padding: 6px;">
				<h5>公告：食六计绿色食品直通车上线</h5>
			</div>-->

			<!--搜索框-->
			<div style="margin-top: 10px;" class="mui-input-row mui-search">
				<input id="txt_search" type="search" onkeydown="javascript:if (event.keyCode==13) txt_search_enterEvent();" class="mui-input-clear" placeholder="商品搜索：请输入商品关键字">
			</div>
			<div id="showLogoutBtn" >
				<ul id="logoutBtn" class="mui-table-view"
					style="margin-top: 0px;margin-bottom: 0px;">
					<li class="mui-table-view-cell" style="text-align: center;"><span
						style="color: indianred;" onclick="txt_search_enterEvent();">搜索商品</span></li>
				</ul>
			</div>
			
			<!--发红包-->
			<div id="slider" class="mui-slider">
				<div class="mui-slider-group mui-slider-loop">
					<!-- 额外增加的一个节点(循环轮播：第一个节点是最后一张轮播) -->
					<div class="mui-slider-item mui-slider-item-duplicate">
						<a href="redbag">
							<img height="100px" src="front/images/red.jpg">
						</a>
					</div>

					<div class="mui-slider-item">
						<a href="redbag">
							<img height="100px" src="front/images/red.jpg">
						</a>
					</div>
					<div class="mui-slider-item">
						<a href="redbag">
							<img height="100px" src="front/images/red.jpg">
						</a>
					</div>

					<!-- 额外增加的一个节点(循环轮播：最后一个节点是第一张轮播) -->
					<div class="mui-slider-item mui-slider-item-duplicate">
						<a href="redbag">
							<img height="100px" src="front/images/red.jpg">
						</a>
					</div>
				</div>

			</div>
			
			<h5 style="font-weight: bold;">国内有机</h5>
			<!--商品分类-->
			<ul class="mui-table-view mui-grid-view">
				<li class="mui-table-view-cell mui-media mui-col-xs-3">
					<a href="#" id="type1" onclick="type1_click();">
						<img class="mui-media-object" src="front/images/type/ShanTe2.png">
						<div class="mui-media-body">
							山特产品
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media mui-col-xs-3">
					<a href="#" id="type2" onclick="type2_click();">
						<img class="mui-media-object" src="front/images/type/WuGu.png">
						<div class="mui-media-body">
							五谷杂粮
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media mui-col-xs-3">
					<a href="#" id="type3" onclick="type3_click();">
						<img class="mui-media-object" src="front/images/type/GuoShu.png">
						<div class="mui-media-body">
							有机果蔬
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media mui-col-xs-3">
					<a href="#" id="type4 onclick="type4_click();">
						<img class="mui-media-object" src="front/images/type/WuGuJiuShui.png">
						<div class="mui-media-body">
							订单种植
						</div>
					</a>
				</li>
			</ul>

			<h5 style="font-weight: bold;">进口商品</h5>
			<!--商品分类-->
			<ul class="mui-table-view mui-grid-view">
				<li class="mui-table-view-cell mui-media mui-col-xs-2">
					<a href="#" id="type5" onclick="type5_click();">
						<img class="mui-media-object" src="front/images/type/MeiShi2.png">
						<div class="mui-media-body">
							美食
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media mui-col-xs-2">
					<a href="#" id="type6" onclick="type6_click();">
						<img class="mui-media-object" src="front/images/type/JiuShui2.png">
						<div class="mui-media-body">
							酒水
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media mui-col-xs-2">
					<a href="#" id="type7" onclick="type7_click();">
						<img class="mui-media-object" src="front/images/type/MeiZhuang2.png">
						<div class="mui-media-body">
							美妆
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media mui-col-xs-2">
					<a href="#" id="type8" onclick="type8_click();">
						<img class="mui-media-object" src="front/images/type/MuYing.png">
						<div class="mui-media-body">
							母婴
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media mui-col-xs-2">
					<a href="#" id="type9" onclick="type9_click();">
						<img class="mui-media-object" src="front/images/type/BaiHuo.png">
						<div class="mui-media-body">
							百货
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media mui-col-xs-2">
					<a href="#" id="type10" onclick="type10_click();">
						<img class="mui-media-object" src="front/images/type/TuanGou.png">
						<div class="mui-media-body">
							团购
						</div>
					</a>
				</li>
			</ul>

			<h5>&nbsp;</h5>
			<div align="center">
				<span class="mui-badge mui-badge-success">山特产品</span>
			</div>

			<ul class="mui-table-view mui-grid-view" style="background-color: #efeff4;">

				<li id="li1"   name=""   onclick="li_click(this)" class="mui-table-view-cell mui-media mui-col-xs-6">
					<a >
						<div class="bgDiv">
							<img style="height: 172px;" id="picture1" class="mui-media-object" src="front/images/product/log.png">
							<div class="mui-media-body">
								<p id="name1" class="mui-ellipsis-2" style="font-family: '微软雅黑';" align="left">
									
								</p>
								<p id="nowPrice1" class="price-one">¥11&nbsp<span id="price1" style="text-decoration:line-through;font-size: small;"></span></p>
								<div class="price-two">
									<span id="discount1" class="mui-badge mui-badge-danger"></span>
								</div>
							</div>
						</div>
					</a>
				</li>

				<li id="li2"    name=""  onclick="li_click(this)" class="mui-table-view-cell mui-media mui-col-xs-6">
					<a href="#">
						<div class="bgDiv">
							<img style="height: 172px;" id="picture2" class="mui-media-object" src="front/images/product/log.png">
							<div class="mui-media-body">
								<p id="name2" class="mui-ellipsis-2" style="font-family: '微软雅黑';" align="left">
									
								</p>
								<p id="nowPrice2" class="price-one">¥11&nbsp;<span id="price2" style="text-decoration:line-through;font-size: small;">/span></p>
								<div class="price-two">
									<span id="discount2" class="mui-badge mui-badge-danger"></span>
								</div>
							</div>
						</div>
					</a>
				</li>

			</ul>
			
			<div align="center">
				<span class="mui-badge mui-badge-success">五谷杂粮</span>
			</div>

			<ul class="mui-table-view mui-grid-view" style="background-color: #efeff4;">

				<li id="li3"   name=""   onclick="li_click(this)" class="mui-table-view-cell mui-media mui-col-xs-6">
					<a >
						<div class="bgDiv">
							<img style="height: 172px;" id="picture3" class="mui-media-object" src="front/images/product/log.png">
							<div class="mui-media-body">
								<p id="name3" class="mui-ellipsis-2" style="font-family: '微软雅黑';" align="left">
									
								</p>
								<p id="nowPrice3" class="price-one">¥11&nbsp;<span id="price3" style="text-decoration:line-through;font-size: small;"></span></p>
								<div class="price-two">
									<span id="discount3" class="mui-badge mui-badge-danger"></span>
								</div>
							</div>
						</div>
					</a>
				</li>

				<li id="li4"    name=""  onclick="li_click(this)" class="mui-table-view-cell mui-media mui-col-xs-6">
					<a href="#">
						<div class="bgDiv">
							<img style="height: 172px;" id="picture4" class="mui-media-object" src="front/images/product/log.png">
							<div class="mui-media-body">
								<p id="name4" class="mui-ellipsis-2" style="font-family: '微软雅黑';" align="left">
									
								</p>
								<p id="nowPrice4" class="price-one">¥11&nbsp;<span id="price4" style="text-decoration:line-through;font-size: small;">/span></p>
								<div class="price-two">
									<span id="discount4" class="mui-badge mui-badge-danger"></span>
								</div>
							</div>
						</div>
					</a>
				</li>

			</ul>
			
			<div align="center">
				<span class="mui-badge mui-badge-success">有机果蔬</span>
			</div>

			<ul class="mui-table-view mui-grid-view" style="background-color: #efeff4;">

				<li id="li5"   name=""   onclick="li_click(this)" class="mui-table-view-cell mui-media mui-col-xs-6">
					<a >
						<div class="bgDiv">
							<img style="height: 172px;" id="picture5" class="mui-media-object" src="front/images/product/log.png">
							<div class="mui-media-body">
								<p id="name5" class="mui-ellipsis-2" style="font-family: '微软雅黑';" align="left">
									
								</p>
								<p id="nowPrice5" class="price-one">¥11&nbsp;<span id="price5" style="text-decoration:line-through;font-size: small;"></span></p>
								<div class="price-two">
									<span id="discount5" class="mui-badge mui-badge-danger"></span>
								</div>
							</div>
						</div>
					</a>
				</li>

				<li id="li6"    name=""  onclick="li_click(this)" class="mui-table-view-cell mui-media mui-col-xs-6">
					<a href="#">
						<div class="bgDiv">
							<img style="height: 172px;" id="picture6" class="mui-media-object" src="front/images/product/log.png">
							<div class="mui-media-body">
								<p id="name6" class="mui-ellipsis-2" style="font-family: '微软雅黑';" align="left">
									
								</p>
								<p id="nowPrice6" class="price-one">¥11&nbsp;<span id="price6" style="text-decoration:line-through;font-size: small;">/span></p>
								<div class="price-two">
									<span id="discount6" class="mui-badge mui-badge-danger"></span>
								</div>
							</div>
						</div>
					</a>
				</li>

			</ul>
			
			<div align="center">
				<span class="mui-badge mui-badge-success">休闲美食</span>
			</div>

			<ul class="mui-table-view mui-grid-view" style="background-color: #efeff4;">

				<li id="li7"   name=""   onclick="li_click(this)" class="mui-table-view-cell mui-media mui-col-xs-6">
					<a >
						<div class="bgDiv">
							<img style="height: 172px;" id="picture7" class="mui-media-object" src="front/images/product/log.png">
							<div class="mui-media-body">
								<p id="name7" class="mui-ellipsis-2" style="font-family: '微软雅黑';" align="left">
									
								</p>
								<p id="nowPrice7" class="price-one">¥11&nbsp;<span id="price7" style="text-decoration:line-through;font-size: small;"></span></p>
								<div class="price-two">
									<span id="discount7" class="mui-badge mui-badge-danger"></span>
								</div>
							</div>
						</div>
					</a>
				</li>

				<li id="li8"    name=""  onclick="li_click(this)" class="mui-table-view-cell mui-media mui-col-xs-6">
					<a href="#">
						<div class="bgDiv">
							<img style="height: 172px;" id="picture8" class="mui-media-object" src="front/images/product/log.png">
							<div class="mui-media-body">
								<p id="name8" class="mui-ellipsis-2" style="font-family: '微软雅黑';" align="left">
									
								</p>
								<p id="nowPrice8" class="price-one">¥11&nbsp;<span id="price8" style="text-decoration:line-through;font-size: small;">/span></p>
								<div class="price-two">
									<span id="discount8" class="mui-badge mui-badge-danger"></span>
								</div>
							</div>
						</div>
					</a>
				</li>

			</ul>

			<div align="center">
				<span class="mui-badge mui-badge-success">酒水饮料</span>
			</div>

			<ul class="mui-table-view mui-grid-view" style="background-color: #efeff4;">

				<li id="li9"    name=""  onclick="li_click(this)" class="mui-table-view-cell mui-media mui-col-xs-6">
					<a href="#">
						<div class="bgDiv">
							<img style="height: 172px;" id="picture9" class="mui-media-object" src="front/images/product/log.png">
							<div class="mui-media-body">
								<p id="name9" class="mui-ellipsis-2" style="font-family: '微软雅黑';" align="left">
									
								</p>
								<p id="nowPrice9" class="price-one">¥11&nbsp;<span id="price9" style="text-decoration:line-through;font-size: small;"></span></p>
								<div class="price-two">
									<span id="discount9" class="mui-badge mui-badge-danger"></span>
								</div>
							</div>
						</div>
					</a>
				</li>

				<li id="li10"    name=""   onclick="li_click(this)" class="mui-table-view-cell mui-media mui-col-xs-6">
					<a href="#">
						<div class="bgDiv">
							<img style="height: 172px;" id="picture10" class="mui-media-object" src="front/images/product/log.png">
							<div class="mui-media-body">
								<p id="name10" class="mui-ellipsis-2" style="font-family: '微软雅黑';" align="left">
									
								</p>
								<p id="nowPrice10" class="price-one">¥11&nbsp;<span id="price10" style="text-decoration:line-through;font-size: small;"></span></p>
								<div class="price-two">
									<span id="discount10" class="mui-badge mui-badge-danger"></span>
								</div>
							</div>
						</div>
					</a>
				</li>

			</ul>

			<div align="center">
				<span class="mui-badge mui-badge-success">美妆日护</span>
			</div>

			<ul class="mui-table-view mui-grid-view" style="background-color: #efeff4;">

				<li id="li11"     name=""   onclick="li_click(this)" class="mui-table-view-cell mui-media mui-col-xs-6">
					<a href="#">
						<div class="bgDiv">
							<img style="height: 172px;" id="picture11" class="mui-media-object" src="front/images/product/log.png">
							<div class="mui-media-body">
								<p id="name11" class="mui-ellipsis-2" style="font-family: '微软雅黑';" align="left">
									
								</p>
								<p id="nowPrice11" class="price-one">¥11&nbsp;<span id="price11" style="text-decoration:line-through;font-size: small;"></span></p>
								<div class="price-two">
									<span id="discount11" class="mui-badge mui-badge-danger"></span>
								</div>
							</div>
						</div>
					</a>
				</li>

				<li id="li12"    name=""  onclick="li_click(this)" class="mui-table-view-cell mui-media mui-col-xs-6">
					<a href="#">
						<div class="bgDiv">
							<img style="height: 172px;" id="picture12" class="mui-media-object" src="front/images/product/log.png">
							<div class="mui-media-body">
								<p id="name12" class="mui-ellipsis-2" style="font-family: '微软雅黑';" align="left">
									
								</p>
								<p id="nowPrice12" class="price-one">¥11&nbsp;<span id="price12" style="text-decoration:line-through;font-size: small;"></span></p>
								<div class="price-two">
									<span id="discount12" class="mui-badge mui-badge-danger"></span>
								</div>
							</div>
						</div>
					</a>
				</li>

			</ul>

			<div align="center">
				<span class="mui-badge mui-badge-success">母婴用品</span>
			</div>

			<ul class="mui-table-view mui-grid-view" style="background-color: #efeff4;">

				<li id="li13"     name=""   onclick="li_click(this)" class="mui-table-view-cell mui-media mui-col-xs-6">
					<a href="#">
						<div class="bgDiv">
							<img style="height: 172px;" id="picture13" class="mui-media-object" src="front/images/product/log.png">
							<div class="mui-media-body">
								<p id="name13" class="mui-ellipsis-2" style="font-family: '微软雅黑';" align="left">
									
								</p>
								<p id="nowPrice13" class="price-one">¥11&nbsp;<span id="price13" style="text-decoration:line-through;font-size: small;"></span></p>
								<div class="price-two">
									<span id="discount13" class="mui-badge mui-badge-danger"></span>
								</div>
							</div>
						</div>
					</a>
				</li>

				<li id="li14"     name=""   onclick="li_click(this)" class="mui-table-view-cell mui-media mui-col-xs-6">
					<a href="#">
						<div class="bgDiv">
							<img style="height: 172px;" id="picture14" class="mui-media-object" src="front/images/product/log.png">
							<div class="mui-media-body">
								<p id="name14" class="mui-ellipsis-2" style="font-family: '微软雅黑';" align="left">
									
								</p>
								<p id="nowPrice14" class="price-one">¥11&nbsp;<span id="price14" style="text-decoration:line-through;font-size: small;"></span></p>
								<div class="price-two">
									<span id="discount14" class="mui-badge mui-badge-danger"></span>
								</div>
							</div>
						</div>
					</a>
				</li>

			</ul>

			<div align="center">
				<span class="mui-badge mui-badge-success">日用百货</span>
			</div>

			<ul class="mui-table-view mui-grid-view" style="background-color: #efeff4;">

				<li id="li15"     name=""   onclick="li_click(this)" class="mui-table-view-cell mui-media mui-col-xs-6">
					<a href="#">
						<div class="bgDiv">
							<img style="height: 172px;" id="picture15" class="mui-media-object" src="front/images/product/log.png">
							<div class="mui-media-body">
								<p id="name15" class="mui-ellipsis-2" style="font-family: '微软雅黑';" align="left">
									
								</p>
								<p id="nowPrice15" class="price-one">¥11&nbsp;<span id="price15" style="text-decoration:line-through;font-size: small;"></span></p>
								<div class="price-two">
									<span id="discount15" class="mui-badge mui-badge-danger"></span>
								</div>
							</div>
						</div>
					</a>
				</li>

				<li id="li16"     name=""   onclick="li_click(this)" class="mui-table-view-cell mui-media mui-col-xs-6">
					<a href="#">
						<div class="bgDiv">
							<img style="height: 172px;" id="picture16" class="mui-media-object" src="front/images/product/log.png">
							<div class="mui-media-body">
								<p id="name16" class="mui-ellipsis-2" style="font-family: '微软雅黑';" align="left">
									
								</p>
								<p id="nowPrice16" class="price-one">¥11&nbsp;<span id="price16" style="text-decoration:line-through;font-size: small;"></span></p>
								<div class="price-two">
									<span id="discount16" class="mui-badge mui-badge-danger"></span>
								</div>
							</div>
						</div>
					</a>
				</li>

			</ul>

			
				
			<!--页脚-->
			<p style="padding: 3px 5px;margin-bottom: 2px;">
				<h5 style="text-align: center;">Copyright@ 黑龙江食六计商贸有限公司</h5>
			</p>		
			<h5 style="text-align: center;">Allright Reserved Powered By 食六计</h5>


		</div>

		<!--tab2 分类-->
		<div id="tabbar-with-type" class="mui-control-content">	
		</div>
		
		<!--tab3 我的-->
		<div id="tabbar-with-chart" class="mui-control-content">			
		</div>

		<!--tab4我的-->
		<div id="tabbar-with-my" class="mui-control-content">
		</div>
	</div>
	
	
	<!--以下是脚本-->
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