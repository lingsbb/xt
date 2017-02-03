<%@page pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<title>分类</title>
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
	</head>

	<body>
		<header class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">分类</h1>
			<a id="info" class="mui-action-back mui-icon mui-icon-home mui-pull-right" style="color: #999;"></a>
		</header>
		<div class="mui-content">
			<ul id="list" class="mui-table-view mui-table-view-chevron">
				<li class="mui-table-view-divider" style="font-weight: bold;text-align: left;">国内有机</li>
				<li class="mui-table-view-cell mui-collapse">
					<a class="mui-navigate-right" href="#">山特产品</a>
					<ul class="mui-table-view mui-table-view-chevron">
						<li class="mui-table-view-cell"><a class="mui-navigate-right"  id=“select_Id_MuEr”  onclick="selectForName(this);">木耳</a></li>
						<li class="mui-table-view-cell"><a class="mui-navigate-right"  id=“select_Id_YuZhu”  onclick="selectForName(this);">玉竹</a></li>
						<li class="mui-table-view-cell"><a class="mui-navigate-right"  id=“select_Id_GanDouJiao”  onclick="selectForName(this);">干豆角</a></li>
						<li class="mui-table-view-cell"><a class="mui-navigate-right"  id=“select_Id_ZhenMo”  onclick="selectForName(this);">榛蘑</a></li>
					</ul>
				</li>
				<li class="mui-table-view-cell mui-collapse">
					<a class="mui-navigate-right" href="#">五谷杂粮</a>
					<ul class="mui-table-view mui-table-view-chevron">
						<li class="mui-table-view-cell"><a class="mui-navigate-right"  id=“select_Id_MiLei”  onclick="selectForName(this);">米类</a></li>
						<li class="mui-table-view-cell"><a class="mui-navigate-right"  id=“select_Id_DouLei”  onclick="selectForName(this);">豆类</a></li>
					</ul>
				</li>
				<li class="mui-table-view-cell mui-collapse">
					<a class="mui-navigate-right" href="#">有机果蔬</a>
					<ul class="mui-table-view mui-table-view-chevron">
						<li class="mui-table-view-cell"><a class="mui-navigate-right"  id=“select_Id_TuDou”  onclick="selectForName(this);">土豆</a></li>
					</ul>
				</li>
				<li class="mui-table-view-cell mui-collapse">
					<a class="mui-navigate-right" href="#">订单种植</a>
					<ul class="mui-table-view mui-table-view-chevron">
					</ul>
				</li>

				<li class="mui-table-view-divider" style="font-weight: bold;text-align: left;">进口商品</li>
				<li class="mui-table-view-cell mui-collapse">
					<a class="mui-navigate-right" href="#">休闲美食</a>
					<ul class="mui-table-view mui-table-view-chevron">
						<li class="mui-table-view-cell"><a class="mui-navigate-right"  id=“select_Id_HaiTai”  onclick="selectForName(this);">海苔</a></li>
						<li class="mui-table-view-cell"><a class="mui-navigate-right"  id=“select_Id_PengHua”  onclick="selectForName(this);">膨化</a></li>
						<li class="mui-table-view-cell"><a class="mui-navigate-right"  id=“select_Id_DanGao”  onclick="selectForName(this);">糕点</a></li>
						<li class="mui-table-view-cell"><a class="mui-navigate-right"  id=“select_Id_BingGan”  onclick="selectForName(this);">饼干</a></li>
						<li class="mui-table-view-cell"><a class="mui-navigate-right"  id=“select_Id_FangBianMian”  onclick="selectForName(this);">方便面</a></li>
						<li class="mui-table-view-cell"><a class="mui-navigate-right"  id=“select_Id_TangGuo”  onclick="selectForName(this);">糖果</a></li>
						<li class="mui-table-view-cell"><a class="mui-navigate-right"  id=“select_Id_TiaoWeiPin”  onclick="selectForName(this);">调味品</a></li>
						<li class="mui-table-view-cell"><a class="mui-navigate-right"  id=“select_Id_GuoDong”  onclick="selectForName(this);">果冻</a></li>
						<li class="mui-table-view-cell"><a class="mui-navigate-right"  id=“select_Id_GuanTou”  onclick="selectForName(this);">罐头</a></li>
					</ul>
				</li>
				<li class="mui-table-view-cell mui-collapse">
					<a class="mui-navigate-right" href="#">酒水饮料</a>
					<ul class="mui-table-view mui-table-view-chevron">
						<li class="mui-table-view-cell"><a class="mui-navigate-right"  id=“select_Id_YinLiao”  onclick="selectForName(this);">饮料</a></li>
						<li class="mui-table-view-cell"><a class="mui-navigate-right"  id=“select_Id_BiLiShiPiJiu”  onclick="selectForName(this);">比利时啤酒</a></li>
						<li class="mui-table-view-cell"><a class="mui-navigate-right"  id=“select_Id_DeGuoPiJiu  onclick="selectForName(this);">德国啤酒</a></li>
						<li class="mui-table-view-cell"><a class="mui-navigate-right"  id=“select_Id_FaGuoPiJiu”  onclick="selectForName(this);">法国啤酒</a></li>
						<li class="mui-table-view-cell"><a class="mui-navigate-right"  id=“select_Id_HeLanPiJiu”  onclick="selectForName(this);">荷兰啤酒</a></li>
						<li class="mui-table-view-cell"><a class="mui-navigate-right"  id=“select_Id_MoXiGePiJiu”  onclick="selectForName(this);">墨西哥啤酒</a></li>
					</ul>
				</li>
				<li class="mui-table-view-cell mui-collapse">
					<a class="mui-navigate-right" href="#">美妆日护</a>
					<ul class="mui-table-view mui-table-view-chevron">
						<li class="mui-table-view-cell"><a class="mui-navigate-right"  id=“select_Id_HuaZhuangPin”  onclick="selectForName(this);">化妆品</a></li>
						<li class="mui-table-view-cell"><a class="mui-navigate-right"  id=“select_Id_MianMo”  onclick="selectForName(this);">面膜</a></li>
						<li class="mui-table-view-cell"><a class="mui-navigate-right"  id=“select_Id_WeiShengJin”  onclick="selectForName(this);">卫生巾</a></li>
						<li class="mui-table-view-cell"><a class="mui-navigate-right"  id=“select_Id_MeiZhuangGongJu”  onclick="selectForName(this);">美妆工具</a></li>
					</ul>
				</li>
				<li class="mui-table-view-cell mui-collapse">
					<a class="mui-navigate-right" href="#">母婴用品</a>
					<ul class="mui-table-view mui-table-view-chevron">
						<li class="mui-table-view-cell"><a class="mui-navigate-right"  id=“select_Id_XiFaMuYu”  onclick="selectForName(this);">洗发沐浴</a></li>
						<li class="mui-table-view-cell"><a class="mui-navigate-right"  id=“select_Id_MianShuang  onclick="selectForName(this);">面霜</a></li>
						<li class="mui-table-view-cell"><a class="mui-navigate-right"  id=“select_Id_ShenTiRu”  onclick="selectForName(this);">身体乳</a></li>
						<li class="mui-table-view-cell"><a class="mui-navigate-right"  id=“select_Id_YaGaoYaShua”  onclick="selectForName(this);">牙膏牙刷</a></li>
						<li class="mui-table-view-cell"><a class="mui-navigate-right"  id=“select_Id_QuWenLei”  onclick="selectForName(this);">去蚊类</a></li>
						<li class="mui-table-view-cell"><a class="mui-navigate-right"  id=“select_Id_BBZao”  onclick="selectForName(this);">BB皂</a></li>
						<li class="mui-table-view-cell"><a class="mui-navigate-right"  id=“select_Id_ErTongCanJu”  onclick="selectForName(this);">儿童餐具</a></li>
						<li class="mui-table-view-cell"><a class="mui-navigate-right"  id=“select_Id_NaiFen”  onclick="selectForName(this);">奶粉</a></li>
						<li class="mui-table-view-cell"><a class="mui-navigate-right"  id=“select_Id_ZhiNiaoKu”  onclick="selectForName(this);">纸尿裤</a></li>
					
					</ul>
				</li>
				<li class="mui-table-view-cell mui-collapse">
					<a class="mui-navigate-right" href="#">日用百货</a>
					<ul class="mui-table-view mui-table-view-chevron">
						<li class="mui-table-view-cell"><a class="mui-navigate-right"  id=“select_Id_YaShua”  onclick="selectForName(this);">牙刷</a></li>
						<li class="mui-table-view-cell"><a class="mui-navigate-right"  id=“select_Id_WeiShengZhi”  onclick="selectForName(this);">卫生纸</a></li>
						<li class="mui-table-view-cell"><a class="mui-navigate-right"  id=“select_Id_YaGao”  onclick="selectForName(this);">牙膏</a></li>
						<li class="mui-table-view-cell"><a class="mui-navigate-right"  id=“select_Id_XiangZao”  onclick="selectForName(this);">香皂</a></li>
						<li class="mui-table-view-cell"><a class="mui-navigate-right"  id=“select_Id_HuFuPing”  onclick="selectForName(this);">护肤品</a></li>
						<li class="mui-table-view-cell"><a class="mui-navigate-right"  id=“select_Id_MaoJin”  onclick="selectForName(this);">毛巾</a></li>
						<li class="mui-table-view-cell"><a class="mui-navigate-right"  id=“select_Id_WaZi”  onclick="selectForName(this);">袜子</a></li>
						<li class="mui-table-view-cell"><a class="mui-navigate-right"  id=“select_Id_WeiYuYongPin”  onclick="selectForName(this);">卫浴用品</a></li>
					</ul>
				</li>
				<li class="mui-table-view-cell mui-collapse">
					<a class="mui-navigate-right" href="#">名品团购</a>
					<ul class="mui-table-view mui-table-view-chevron">
					</ul>
				</li>
			</ul>
		</div>
	</body>

	<!--以下是脚本-->
	<script src="front/js/jquery-1.4.2.min.js" charset="UTF-8" type="text/javascript"></script>
	<script src="front/front/common.js" charset="UTF-8"></script>
	<script src="front/js/mui.min.js"></script>
	<script src="front/mobile/type.js" charset="UTF-8"></script>
	<script type="text/javascript" charset="utf-8">

	</script>

</html>