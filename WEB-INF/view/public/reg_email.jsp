<!--
	模块作者：刘霄
	创建日期：2017-01-16
	模块功能：注册以后的去邮箱激活帐号的提示页
-->
<%@page pageEncoding="utf-8"%>
<!DOCTYPE html>
<!-- saved from url=(0027)https://yiqixie.com/e/login -->
<html lang="zh">

	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title> 登录邮箱</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="author" content="Beijing Qingyun Technology Co., Ltd">
		<meta name="description" content="一起写OFFICE是一款让你耳目一新的协作OFFICE,包含云端文字、云端表格、云端演示， PC端和移动端全覆盖,支持多人同时对office文档编辑和评论,让你与他人轻松完成协作撰稿、方案讨论...">
		<meta name="keywords" content="在线word,在线excel,在线ppt,office,word,excel,ppt,文档,表格,演示,表单,协作,协作文档,协作表格,协作演示,协作办公,SAAS,协同,协同办公,协同office,协作office,办公,office下载,office破解,office注册码,office2016下载">
		<link rel="shortcut icon" href="https://yiqixie.com/static/yiqixie/images/favicon.ico" type="image/x-icon">
		<link href="../app/public/登录_files/nv_bootstrap.css" rel="stylesheet">
		<link href="../app/public/登录_files/style.min.css" rel="stylesheet">
		<link rel="stylesheet" href="../app/public/登录_files/nv_font-awesome.min.css">
		<link href="../app/public/登录_files/homeagra.css" rel="stylesheet">
		<link href="../app/public/登录_files/homebeta.css" rel="stylesheet">
		<link href="../app/public/登录_files/bottom_float.css" rel="stylesheet">
		<link href="../app/public/登录_files/switch0731.css" rel="stylesheet">
		<link rel="stylesheet" href="../app/public/登录_files/business_prod-2115764180.css">
		<link href="../css/plugins/sweetalert/sweetalert.css" rel="stylesheet">
		<style type="text/css">
			.help-block1 {
				display: block;
				margin-top: 5px;
				margin-bottom: 10px;
				color: red;
			}
			
			.help-block2 {
				padding-left: 25px;
				margin-bottom: 15px;
			}
		</style>
		<script>
			(function(i, s, o, g, r, a, m) {
				i['GoogleAnalyticsObject'] = r;
				i[r] = i[r] || function() {
					(i[r].q = i[r].q || []).push(arguments)
				}, i[r].l = 1 * new Date();
				a = s.createElement(o),
					m = s.getElementsByTagName(o)[0];
				a.async = 1;
				a.src = g;
				m.parentNode.insertBefore(a, m)
			})(window, document, 'script', 'https://yiqixie.com/static/yiqixie/cdn/analytics.js', 'ga');

			ga('create', 'UA-78771453-1', 'auto');
			ga('send', 'pageview');
		</script>
		<script type="text/javascript">
			function scrollFunction() {
				var hearderDiv = document.getElementById('landing-header-id');
				if(hearderDiv.scrollTop == 0) {
					$('.landing-header').addClass('transparent-header');
					$('.header-item-nav-right').removeClass('nav-item-general');
					$('.header-item-nav-right').addClass('nav-item-transparent');
					$('.landing-header .title').removeClass('generalTitle');
					$('.landing-header .title').addClass('transparentTitle');
					$('.header-item-nav .logo').removeClass('logo-black-name');
					$('.header-item-nav .logo').addClass('logo-white-name');
					$('.header-item-nav-right .menuBtn').removeClass('header-item-nav-right-phoneMenuBtn-transparent');
					$('.header-item-nav-right .menuBtn').addClass('phoneMenuBtn');

				} else {
					$('.landing-header').removeClass('transparent-header');
					$('.header-item-nav-right').removeClass('nav-item-transparent');
					$('.header-item-nav-right').addClass('nav-item-general');
					$('.landing-header .title').removeClass('transparentTitle');
					$('.landing-header .title').addClass('generalTitle');
					$('.header-item-nav .logo').removeClass('logo-white-name');
					$('.header-item-nav .logo').addClass('logo-black-name');
					$('.header-item-nav-right .menuBtn').removeClass('phoneMenuBtn');
					$('.header-item-nav-right .menuBtn').addClass('header-item-nav-right-phoneMenuBtn-transparent')
				}
				return false;
			}
		</script><noscript>&lt;iframe src="//www.googletagmanager.com/ns.html?id=GTM-WXQ9PK" height="0" width="0" style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;</noscript>
		<script type="text/javascript">
			(function(w, d, s, l, i) {
				w[l] = w[l] || [];
				w[l].push({
					'gtm.start': new Date().getTime(),
					event: 'gtm.js'
				});
				var f = d.getElementsByTagName(s)[0],
					j = d.createElement(s),
					dl = l != 'dataLayer' ? '&l=' + l : '';
				j.async = true;
				j.src = '//www.googletagmanager.com/gtm.js?id=' + i + dl;
				f.parentNode.insertBefore(j, f);
			})
			(window, document, 'script', 'dataLayer', 'GTM-TCNQMR');
		</script>
	</head>

	<body class="account-body">
		<script>
			_yiqixie_initdata = {
				"x_s_p": {},
				"e-ob": false,
				"base-server": "https:\/\/yiqixie.com",
				"partner-id": "",
				"partner-secret": "",
				"sub": false
			};
		</script>
		<div id="landing-header-id" class="landing-body" onscroll="scrollFunction()">
			<div class="account-page-wrapper">
				<div class="account-page-logo-bar"></div>
				<div class="account-container">
					<div class="account-pannel">
						<div id="content">
							<div data-reactroot="" class="d-ai-ho">

								<div style="padding-top:150px">
									<div style="text-align:center;font-size:24px;font-weight:800;"><span style="color:#FF6600" id="spnUserName">用户</span>，您已注册成功！</div>
									<div style="text-align:center;padding-top:30px;font-size:20px;font-weight:600">本网站已向您的注册邮箱发出激活邮件，请在15分钟内点击激活链接，完成注册。</div>
									<div id="divEmailUrl" style="text-align:center;padding-top:20px;font-size:20px;font-weight:600;display:none;">去收邮件&nbsp;<span><a id="aEmailUrl" href="#">http:mail.qq.com</a></span></div>
								</div>

							</div>
						</div>
					</div>
				</div>

			</div>
			<script type="text/javascript" async="" src="../app/public/登录_files/analytics.js.下载"></script>
			<script async="" src="../app/public/登录_files/gtm.js.下载"></script>
			<script async="" src="../app/public/登录_files/analytics.js(1).下载"></script>
			<script src="../js/jquery.min.js"></script>
			<script src="../ie_compatibility/placeholderfriend.js"></script>
			<script src="../app/public/登录_files/Chart.js.下载"></script>
			<script src="../js/plugins/iCheck/icheck.min.js"></script>
			<script src="../app/common/common.js" charset="utf-8"></script>
			<script src="../app/common/cookies.js" charset="utf-8"></script>
			<script src="../app/common/md5.js" charset="utf-8"></script>
			<script src="../app/public/reg_email_c.js" charset="utf-8"></script>
			<script src="../app/public/reg_email_m.js" charset="utf-8"></script>
			<script src="../app/public/reg_email_v.js" charset="utf-8"></script>
			<script src="../js/plugins/sweetalert/sweetalert.min.js"></script>
			<!--<script type="text/javascript" src="../app/my/jquery-validation-1.15.1/dist/jquery.validate.js"></script>-->
			<script src="../js/plugins/validate/messages_zh.min.js"></script>

	</body>

</html>