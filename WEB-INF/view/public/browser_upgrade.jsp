<!--
	模块作者：刘霄
	创建日期：2017-01-16
	模块功能：谷歌等浏览器下载
-->
<%@page pageEncoding="utf-8"%>

<!DOCTYPE html>
<html>

	<head>
		<title>升级浏览器</title>
		<meta charset="utf-8">
		<meta name="robots" content="noindex, nofollow">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
		<!-- <link id="favicon-link" rel="shortcut icon" href="https://dn-shimo-assets.qbox.me/favicon.ico"> -->
		<style>
			body {
				margin: 0;
				padding: 0;
				font-family: Helvetica, Tahoma, Arial, STXihei, "华文细黑", "Microsoft YaHei", "微软雅黑", SimSun, "宋体", Heiti, "黑体", sans-serif;
			}
			
			.browser-wrap {
				width: 580px;
				margin: 0 auto;
			}
			
			.browser-logo {
				text-align: center;
				margin: 100px 0 80px 0;
				height: 20px;
			}
			
			.browser-logo img {
				height: 20px;
				border: none;
			}
			
			.browser-title {
				font-size: 30px;
				color: #333;
				margin-bottom: 40px;
				text-align: center;
			}
			
			.browser-desc {
				padding: 0;
				margin: 0 0 40px 0;
				text-align: center;
				font-size: 14px;
				line-height: 28px;
				color: #333;
			}
			
			.browser-suggestion {
				padding: 0;
				margin-top: 40px;
				width: 359px;
				margin: 0 auto;
				list-style: none;
			}
			
			.browser-suggestion li {
				float: left;
				margin-left: 40px;
				height: 93px;
				width: 93px;
				background: url(https://assets-cdn.shimo.im/assets/images/browser_1x-ed70173a62.png) no-repeat 0px 0px;
			}
			
			.browser-suggestion a {
				float: left;
				padding-top: 103px;
				width: 93px;
				text-align: center;
				text-decoration: none;
				color: #333;
			}
			
			.browser-suggestion li:hover {
				cursor: pointer;
			}
			
			.browser-suggestion li:first-child {
				margin-left: 0;
			}
			
			#chrome {
				background-position: -13px -12px;
			}
			
			#ie {
				background-position: -282px -12px;
			}
			
			#firefox {
				background-position: -414px -12px;
			}
			
			#chrome:hover {
				background-position: -13px -119px;
			}
			
			#ie:hover {
				background-position: -282px -119px;
			}
			
			#firefox:hover {
				background-position: -414px -119px;
			}
		</style>
	</head>

	<body>
		<div class="browser-wrap">
			<div style="text-align: center;padding-top:70px;"> <img src="../app/public/登录_files/header_logo.png"> </div>
			<div class="browser-title" style="padding-top:120px;">欲穷千里目，更上一层楼</div>
			<p class="browser-desc">您的浏览器不能完美支持运易达的各项功能，如果您使用的是360等双核浏览器，<br>请切换到极速模式浏览。您也可以升级到以下浏览器使用：</p>
			<ul class="browser-suggestion">
				<li id="chrome">
					<a href="http://shimo-static.oss-cn-beijing.aliyuncs.com/ChromeStandaloneSetup.exe">Chrome</a>
				</li>
				<li id="firefox">
					<a href="http://www.firefox.com.cn/download/" target="_blank">Firefox</a>
				</li>
				<li id="ie">
					<a href="http://windows.microsoft.com/zh-cn/internet-explorer/download-ie" target="_blank">IE10+</a>
				</li>
			</ul>
		</div>
	</body>

</html>