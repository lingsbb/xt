<!--
	模块作者：刘霄
	创建日期：2017-01-16
	模块功能：注册
-->
<%@page pageEncoding="utf-8"%>
<!DOCTYPE html>
<!-- saved from url=(0027)https://yiqixie.com/e/login -->
<html lang="zh">

	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title> 注册</title>
		<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9"/>
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
		.phcolor{ color:#999;}
		
		.help-block1 {
    	   	display: block;
		    margin-top: 5px;
		    margin-bottom: 10px;
		    color: red;
			}
		.help-block2 {
    	   	padding-left:25px;
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
								<div class="d-ai-lr">
									<div class="d-ai-zu-gw-td">
										<!--<div class="d-ai-zu-vd-h d-ai-zu-vd-h-ke">账号</div>-->
										<!--<div class="d-ai-zu-vd-h ">
											<div class="jw kw"></div>
											weixin
										</div>-->
										<!--<div class="d-ai-zu-vd-h d-ai-zu-vd-h-ke ">注册</div>-->
									</div>
									<div  class="cr-ai-ld-td">
										<div id="divCheck" class="cr-ai-ld-ls-lt">
							                <label id="txtEmail-error1"  style="display:none">请输入一个有效的邮箱地址！</label>
							                <label id="txtEmail-error2"  style="display:none">邮箱已注册！</label>
							                <label id="txtTel-error1" style="display:none" >请输入一个有效的手机号！</label>
               								<label id="txtTel-error2" style="display:none" >手机号已注册！</label>              								
               								<label id="txtPassword-error1" style="display:none" >密码6位且只能是英文和数字！</label>
											<label id="txtCode-error1" style="display:none" >验证码错误！</label>
										</div>
										<div class="cr-ai-ld-ho"><input id="txtEmail" name="txtEmail" placeholder="请输入邮箱" type="text"  class="cr-ai-ld"></div>
										
										<div class="cr-ai-ld-ho"><input id="txtTel" name="txtTel" type="text" class="cr-ai-ld" placeholder="请输入手机号" /></div>
											
										<div class="cr-ai-ld-ho">
											<input id="txtCode" name="txtCode" type="text" class="cr-ai-ld" style="width:76%;" placeholder="请输入短信验证码" />
                							<input class="btn btn-primary" disabled="disabled" style="background-color:#428bca;border-color: #428bca; " type="button" id="btnSend" value="发送" />	
                						</div>																			
										
										<div class="cr-ai-ld-ho"><input id="txtPassword" name="txtPassword" type="password" class="cr-ai-ld" placeholder="请输入密码" ></div>																			

										<div style="background-color:white;padding-left:26px" class="form-group " >
                						 <label><input type="checkbox" name="chkLogin" checked id="chkLogin"></label><a id="Agree" class="text-success">我同意协议</a>
                						</div>
										<div id="btnRegister" class="d-ai-rt">注册</div><input type="text" name="fakeusernameremembered" style="display: none;"><input type="password" name="fakepasswordremembered" style="display: none;"></div>
										<div class="cr-ai-dr-xj">
										<span id="resetPassword" class="" >已经有账户了？</span>
										<a target="_self" href="../public/eyt_login" class="cr-ai-dr-xj-h" >点此登录</a>
									</div>
								</div>
							</div>
						</div>
						<!--<script type="text/javascript" src="./登录_files/business_prod_core-1472751493.js.下载"></script>
						<script src="./登录_files/ddLogin.js.下载"></script>
						<script type="text/javascript">
							_renderLogin(false, "/?jumpToDoclist=true", "dingoa7vtstparijumfam1", null, "0", false, null, "桌面");
						</script>-->
					</div>
				</div>
			</div>
			<div class="copyright">
				<div class="container">Copyright © 2016-2050 哈尔滨俄运通科贸有限公司</div>
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
			<script src="../app/public/eyt_register_new_new_check.js" charset="utf-8"></script>
		    <script src="../app/public/eyt_register_new_new_c.js" charset="utf-8"></script>
			<script src="../app/public/eyt_register_new_new_m.js" charset="utf-8"></script>  
			<script src="../app/public/eyt_register_new_new_v.js" charset="utf-8"></script>
			
			<script src="../js/plugins/sweetalert/sweetalert.min.js"></script>
			<script type="text/javascript" src="../app/my/jquery-validation-1.15.1/dist/jquery.validate.js"></script>
			<script src="../js/plugins/validate/messages_zh.min.js"></script>
			<script>
        
    	$("#Agree").click(function () {            
			window.location.href="privacy";
        }); 
    </script>
	</body>
</html>