<%@page pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport"
	content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
<title>我的</title>
<link rel="stylesheet" type="text/css" href="front/css/mui.min.css" />
<link rel="stylesheet" type="text/css" href="front/css/iconfont.css" />
<link rel="stylesheet" type="text/css" href="front/css/own.css" />

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
</style>
</head>
<body>

	<div class="mui-content">

		<div>
			<header class="header-wrap" style="padding: 10px;">
				<div class="header-l">
					<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
					<a href="javascript:history.go(-1)"> <img src="">
					</a>
				</div>
			</header>
			<!--<span id="touxiang" class="mui-btn mui-btn-link mui-icon iconfont icon-zhanghao"></span>-->
			<div class="touxiang" style="background-color:#C70000" onclick="login();">
				<div>
					<span id="touxiangimg" class="mui-icon mui-icon-person"
						style="font-size: 3.8em; color: white;"></span>
				</div>
				<span id="touxiangword" style="color:#ffffff" >请登录</span>
				<br>
				<span id="touxiangword1" style="color:#ccc"></span>
				<br>
				<span id="touxiangword2" style="color:#ccc"></span>
			</div>
		</div>

		<ul class="mui-table-view" style="margin-top: 10px;">
			<li class="mui-table-view-cell"><a class="mui-navigate-right"
				onclick="toOrderListWFKDD();"> <span
					class="mui-icon iconfont icon-wodedingdan"></span> 未付款订单
			</a></li>
			<li class="mui-table-view-cell"><a class="mui-navigate-right"
				onclick="toOrderListDFHDD();"> <span
					class="mui-icon iconfont icon-wodedingdan"></span> 待发货订单
			</a></li>

			<li class="mui-table-view-cell"><a class="mui-navigate-right"
				onclick="toOrderListWCDD();"> <span
					class="mui-icon iconfont icon-wodedingdan"></span> 完成订单
			</a></li>
			<!--
			<li class="mui-table-view-cell"><a class="mui-navigate-right"
				onclick="toOrderListDSHDD();"> <span
					class="mui-icon iconfont icon-wodedingdan"></span> 待收货订单
			</a></li>
			<li class="mui-table-view-cell"><a class="mui-navigate-right"
				onclick="addRecommand();"> <span
					class="mui-icon iconfont icon-wodedingdan"></span> 添加被推荐人
			</a></li>
			-->

		</ul>
		<ul class="mui-table-view" style="margin-top: 20px;">

			<!--<li class="mui-table-view-cell">
				<a id="changeaddress" class="mui-navigate-right" href="address">
					<span class="mui-icon mui-icon-location"></span>
					修改地址
				</a>
			</li>-->
			<li class="mui-table-view-cell"><a class="mui-navigate-right"
				onclick="window.location.href='redbag';"> <span
					class="mui-icon mui-icon-info"></span> 购买红包
			</a></li>
			<li class="mui-table-view-cell"><a class="mui-navigate-right"
				onclick="window.location.href='redbag_gift';"> <span
					class="mui-icon mui-icon-info"></span> 派发红包
			</a></li>
			<li class="mui-table-view-cell"><a class="mui-navigate-right"
				onclick="window.location.href='redbag_gift_list';"> <span
					class="mui-icon mui-icon-info"></span> 已派发红包
			</a></li>
			<li class="mui-table-view-cell"><a class="mui-navigate-right"
				onclick="window.location.href='redbag_get_list';"> <span
					class="mui-icon mui-icon-info"></span> 领取红包
			</a></li>
			<li class="mui-table-view-cell"><a class="mui-navigate-right"
				onclick="addRecommand();"> <span
					class="mui-icon mui-icon-info"></span> 被推荐人列表
			</a></li>
		</ul>
		
		
		<ul class="mui-table-view" style="margin-top: 20px;">

			<!--<li class="mui-table-view-cell">
				<a id="changeaddress" class="mui-navigate-right" href="address">
					<span class="mui-icon mui-icon-location"></span>
					修改地址
				</a>
			</li>-->
			<li class="mui-table-view-cell"><a class="mui-navigate-right"
				onclick="updateAccount();"> <span
					class="mui-icon mui-icon-locked"></span> 修改帐号
			</a></li>
			<li class="mui-table-view-cell"><a class="mui-navigate-right"
				onclick="updatePassword();"> <span
					class="mui-icon mui-icon-locked"></span> 修改密码
			</a></li>
			<li class="mui-table-view-cell"><a class="mui-navigate-right"
				onclick="updateNickName();"> <span
					class="mui-icon mui-icon-locked"></span> 修改昵称
			</a></li>
			<li class="mui-table-view-cell"><a class="mui-navigate-right"
				onclick="window.location.href='help';"> <span
					class="mui-icon  mui-icon-help"></span> 晋升规则
			</a></li>
		</ul>
		
		<div id="showLogoutBtn" >
			<ul id="logoutBtn" class="mui-table-view"
				style="margin-top: 20px;margin-bottom: 20px;">
				<li class="mui-table-view-cell" style="text-align: center;"><span
					style="color: indianred;" onclick="ExitLogin();">退出登录</span></li>
			</ul>
		</div>
	</div>
	<script src="front/js/jquery-1.4.2.min.js" charset="UTF-8"
		type="text/javascript"></script>
	<script src="front/front/common.js" charset="UTF-8"></script>
	<script src="front/js/mui.min.js" charset="UTF-8"></script>
	<script src="front/js/own.js" charset="UTF-8"></script>
	<script src="front/js/ajax.js" charset="UTF-8"></script>
	<script src="front/mobile/my.js" charset="UTF-8"></script>
	<script type="text/javascript" charset="UTF-8">

	</script>

</body>
</html>