<!--
	模块作者：莫胜男
	创建日期：2017-01-16
	模块功能：官网页面
-->
<%@page pageEncoding="utf-8"%>
<!DOCTYPE html>
<!-- saved from url=(0019)https://effevo.com/ -->
<html class="js"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="renderer" content="webkit|ie-comp|ie-stand">
<meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no">
<meta name="robots" content="index,follow">
<meta name="keywords" content="运易达跨境货代协同服务平台">
<meta name="Description" content="运易达跨境货代协同服务平台">
<title>运易达跨境货代协同服务平台</title>
<!--<base href="/app/index/">--><base href=".">
<link rel="shortcut icon" href="#" type="image/x-icon">
<link type="text/css" rel="stylesheet" href="./css/index_files/eyt_files/bootstrap.min.css">
<link type="text/css" rel="stylesheet" href="./css/index_files/eyt_files/index_new.css">
<link type="text/css" rel="stylesheet" href="./css/index_files/eyt_files/styles.css">
<!--<link type="text/css" rel="stylesheet" href="./Font-Awesome-master/src/3.2.1/assets/font-awesome/css/font-awesome.min.css">-->
<link href="//netdna.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">	
<style>
        .video-mask {
            background-color: rgba(189, 189, 189, 0.1) !important
        }
    </style>
<!--[if IE]>
<script type="text/javascript" src="/public/lib/html5shiv/3.7.2/html5shiv.js"></script>
<style>
    article, aside, dialog, figure, footer, header, menu, nav, section { display: block; }
</style>
<![endif]-->
<!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script> <![endif]-->
<!--[if lt IE 9]>
<script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>
<![endif]-->
<script src="./css/index_files/eyt_files/jquery.min.js"></script>
<!--[if lt IE 9]>
<script type="text/javascript" src="/app/index/js/PIE.js?v=3d5c90150cdc7488b076778aead3fc7a"></script>
<![endif]-->
<script type="text/javascript" src="./css/index_files/eyt_files/responsive-nav.min.js"></script>
<link href="./css/index_files/eyt_files/main.78.e791eec5033b6a123141.css" rel="stylesheet"></head>
<body class="home_area" style="zoom: 1;" >
<h1>effevo,WorkYun,工作云,搜狗工作云</h1>
<div class="fixed-banner">
<div class="inner">
<div class="header">
<div class="bar">
<a href="#" class="index-logo" data-scroll="">
<img alt="effevo,WorkYun,工作云,搜狗工作云" src="./css/index_files/eyt_files/logo_blue.png"></a>
</div>
<div class="mail row">
<div class="col-md-4">
</div>
<div class="col-md-4">
<div class="col-md-8 input-mail-out">
<input class="input-mail" id="registerEmail" placeholder="请输入邮箱/手机号"><span class="ee-icon-e-mail"></span>
</div>
<div class="free-icon col-md-4">
<button class="btn-free" onclick="goRegister()">免费使用</button>
</div>
<div class="mail-error-info" style="visibility: hidden;">
邮箱错误信息</div>
</div>
<div class="col-md-4">
</div>
</div>
</div>
</div>
</div>
<div class="section_group">
<section class="area-first" data-title="首屏移动" id="home">
<div class="video-container">
<div class="video-player">
<video id="main-video" loop="loop" class="video" style="position: absolute; left: 0px; top: 0px; width: 1914px; height: 1076.63px;"  autoplay="autoplay">
<source src="./css/index_files/eyt_files/effevo_v2.mp4" type="video/mp4">
</video>
</div>
<div class="fix-area">
<header class="top-nav">
<a  class="index-logo" data-scroll=""><img src="./css/index_files/eyt_files/logo_bai.png"></a>
<a class="nav-toggle" aria-hidden="true">Menu</a>
<nav class="nav-collapse nav-collapse-0 closed" aria-hidden="false" style="transition: max-height 284ms; position: relative;">
<div class="pull-left">
<ul>
<li class="menu-item"><a class="active" data-scroll="">首页</a></li>
<li class="menu-item"><a href="../eyt_xt/eyt" data-scroll="">功能</a></li>

</ul>
</div>
<div class="split pull-left"></div>
<div class="pull-left">
<ul>
<li id="enterDiv" class="menu-btn"></li>
<li class="menu-btn register"><a class="login-in" href="../eyt_xt/public/eyt_register">免费注册</a></li>
<li class="menu-btn login-show"><a class="login-in" href="#">返回项目</a></li>
</ul>
</div>
</nav>
</header>
<div class="index-main">
<div class="slogan row">
<div class="col-md-1"></div>
<div class="col-md-8">
<div class="text slogan-cloud"></div>
<div class="text slogan-text"></div>
</div>
<div class="col-md-2"></div>
</div>
<div class="mail mail-center row">
<div class="col-md-1"></div>
<div class="col-md-4">
<div class="col-md-8 input-mail-out">
<input class="input-mail" id="registerEmail" placeholder="请输入邮箱地址"><span class="ee-icon-e-mail"></span>
</div>
<div class="free-icon col-md-4">
<button class="btn-free" onclick="goRegister()">免费使用</button>
</div>
<!--<div class="mail-error-info" style="visibility: hidden;">邮箱错误信息</div>-->
</div>
<div class="col-md-4"></div>
</div>
</div>
</div>
</div>
</section>
<section data-title="内容" id="products">
<div class="split-block">
<h2>跨境物流协同工作从此改变</h2>
<img class="line" src="./css/index_files/eyt_files/split.png">
<p>真正改变你跨境物流协同的方式</p>
</div>
<div class="row">
<div class="col-md-1"></div>
<!--<div class="col-md-10" style="overflow: hidden;">-->
<div class="col-md-2 main-pro">
<img src="./css/index_files/eyt_files/1_20.png">
<h2>订单求助</h2>
<p>发起跨境物流协同求助</p>
</div>
<div class="col-md-2 main-pro">
<img src="./css/index_files/eyt_files/1_23.png">
<h2>任务管理</h2>
<p>根据订单发起协同任务，邀请协同者，执行协同作业</p>
</div>
<div class="col-md-2 main-pro">
<img src="./css/index_files/eyt_files/1_26.png">
<h2>在线文档</h2>
<p>共同在线编辑报关单等跨境物流文档</p>
</div>
<div class="col-md-2 main-pro">
<img src="./css/index_files/eyt_files/1_19.png">
<h2>消息通知</h2>
<p>通知协同消息、协同状态</p>
</div>
<div class="col-md-2 main-pro">
<img src="./css/index_files/eyt_files/1_17.png">
<h2>邀请协同</h2>
<p>随时添加平台用户、临时用户参与协助</p>
</div>
<div class="col-md-1"></div>
<div class="col-md-1"></div>
</div>
<a class="more">更多功能</a>
<div class="infos containers">
<div class="line line-1" data-scroll-reveal="enter 0.10s" data-scroll-reveal-id="1" style="-webkit-transform: translateundefined(50px);transform: translateundefined(50px);opacity: 0;-webkit-transition: -webkit-transform 0.66s ease-in-out 0s,  opacity 0.66s ease-in-out 0s;transition: transform 0.66s ease-in-out 0s,  opacity 0.66s ease-in-out 0s;-webkit-perspective: 1000;-webkit-backface-visibility: hidden;" data-scroll-reveal-initialized="true">
<ul class="feature-list row">
<div class="col-md-1"></div>
<div class="col-md-10">
<div class="col-md-1"></div>
<div class="col-md-2">
<li class="pro-text pro-1-1 active" >
<!--<span class="ee-icon ee-icon-news"></span>-->
<span class="fa fa-truck "></span>
<span class="text">订单求助</span>
</li>
</div>
<div class="col-md-2">
<li class="pro-text pro-1-2">
<!--<span class="ee-icon ee-icon-gantt-chart"></span>-->
<span class="fa fa-cubes "></span>
<span class="text">任务管理</span>
</li>
</div>
<div class="col-md-2">
<li class="pro-text pro-1-3">
<!--<span class="ee-icon ee-icon-table"></span>-->
<span class="fa fa-file "></span>
<span class="text">在线文档</span>
</li>
</div>
<div class="col-md-2">
<li class="pro-text pro-1-4">
<!--<span class="ee-icon ee-icon-bug-line"></span>-->
<span class="fa fa-volume-up "></span>
<span class="text">消息通知</span>
</li>
</div>
<div class="col-md-2">
<li class="pro-text pro-1-5" style="border-right: none">
<!--<span class="ee-icon ee-icon-chart-line"></span>-->
<span class="fa fa-info"></span>
<span class="text">邀请协同</span>
</li>
</div>
<div class="col-md-1"></div>
</div>
<div class="col-md-1"></div>
</ul>
<div class="row">
<div class="col-md-12 no-margin-bottom">
<div class="pro-img">
<div class="img img-1-1 active">
<img src="./css/index_files/eyt_files/pro-1-1.jpg">
</div>
<div class="img img-1-2">
<img src="./css/index_files/eyt_files/pro-1-2.jpg">
</div>
<div class="img img-1-3">
<img src="./css/index_files/eyt_files/pro-1-3.jpg">
</div>
<div class="img img-1-4">
<img src="./css/index_files/eyt_files/pro-1-4.jpg">
</div>
<div class="img img-1-5">
<img src="./css/index_files/eyt_files/pro-1-5.jpg">
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!--<section data-title="用户声音" id="voice" data-scroll-reveal="enter 0.10s" data-scroll-reveal-id="2" style="-webkit-transform: translateundefined(50px);transform: translateundefined(50px);opacity: 0;-webkit-transition: -webkit-transform 0.66s ease-in-out 0s,  opacity 0.66s ease-in-out 0s;transition: transform 0.66s ease-in-out 0s,  opacity 0.66s ease-in-out 0s;-webkit-perspective: 1000;-webkit-backface-visibility: hidden;" data-scroll-reveal-initialized="true">
<div class="split-block">
<h2>适合哪些行业</h2>
<img class="line" src="./css/index_files/eyt_files/split.png">
<p>在互联网、建筑、制造业、教育、广告、事业机构等行业effevo被广泛使用，并获得很好的评价。</p>
</div>
<div class="row">
<div class="col-md-2"></div>
<div class="col-md-8 listen ">
<a class="prev"></a>
<div id="wrapper">
<ul id="scroller" class="user-fit" style="margin-left: 0px;">
<li>
<img src="./css/index_files/eyt_files/1.png">
<p class="tip">电商</p>
</li>
<li>
<img src="./css/index_files/eyt_files/2.png">
<p class="tip">互联网</p>
</li>
<li>
<img src="./css/index_files/eyt_files/3.png">
<p class="tip">制造业</p>
</li>
<li>
<img src="./css/index_files/eyt_files/4.png">
<p class="tip">客服</p>
</li>
<li>
<img src="./css/index_files/eyt_files/5.png">
<p class="tip">建筑业</p>
</li>
<li>
<img src="./css/index_files/eyt_files/6.png">
<p class="tip">教育业</p>
</li>
<li>
<img src="./css/index_files/eyt_files/7.png">
<p class="tip">广告传媒</p>
</li>
<li>
<img src="./css/index_files/eyt_files/more.png">
<p class="tip">更多行业</p>
</li>
</ul>
</div>
<a class="next"></a>
</div>
<div class="col-md-2"></div>
</div>
</section>-->
<section data-title="使用列表" id="contact">
<div class="users" data-scroll-reveal="enter 0.15s" data-scroll-reveal-id="3" style="-webkit-transform: translateundefined(50px);transform: translateundefined(50px);opacity: 0;-webkit-transition: -webkit-transform 0.66s ease-in-out 0s,  opacity 0.66s ease-in-out 0s;transition: transform 0.66s ease-in-out 0s,  opacity 0.66s ease-in-out 0s;-webkit-perspective: 1000;-webkit-backface-visibility: hidden;" data-scroll-reveal-initialized="true">
<div class="col-md-2"></div>
<div class="col-md-8">
<header>合作品牌</header>
<ul>
<li class="col-md-2 user-li">
<a rel="nofollow">
<img src="./css/index_files/eyt_files/1_56.png">
</a>
</li>
<li class="col-md-2 user-li">
<a rel="nofollow" >
<img src="./css/index_files/eyt_files/1_58.png">
</a>
</li>
<li class="col-md-2 user-li">
<a rel="nofollow" >
<img src="./css/index_files/eyt_files/1_60.png">
</a>
</li>
<li class="col-md-2 user-li">
<a rel="nofollow">
<img src="./css/index_files/eyt_files/1_62.png">
</a>
</li>
<li class="col-md-2 user-li">
<a rel="nofollow" >
<img src="./css/index_files/eyt_files/1_64.png">
</a>
</li>
<!--<li class="col-md-2 user-li">
<a rel="nofollow" href="http://www.cofco.com/cn/index.html" target="_blank">
<img src="./css/index_files/eyt_files/1_66.png">
</a>
</li>-->
<li class="col-md-2 user-li">
<a rel="nofollow" >
<img src="./css/index_files/eyt_files/1_74.png">
</a>
</li>
<li class="col-md-2 user-li">
<a rel="nofollow">
<img src="./css/index_files/eyt_files/1_75.png">
</a>
</li>
<li class="col-md-2 user-li">
<a rel="nofollow" >
<img src="./css/index_files/eyt_files/1_76.png">
</a>
</li>
<li class="col-md-2 user-li">
<a rel="nofollow" >
<img src="./css/index_files/eyt_files/1_77.png">
</a>
</li>
<li class="col-md-2 user-li">
<a rel="nofollow">
<img src="./css/index_files/eyt_files/1_78.png">
</a>
</li>
<li class="col-md-2 user-li">
<a rel="nofollow">
<img src="./css/index_files/eyt_files/1_79.png">
</a>
</li>
</ul>
</div>
<div class="col-md-2"></div>
</div>
<footer class="footer">
<div class="col-md-2"></div>
<div class="col-md-8 block">
<div class="col-md-4 block"></div>
<div class="col-md-3 block">
<header>企业成长</header>
<ol>
<li><a rel="nofollow">公司介绍</a></li>
<li><a rel="nofollow">成长历程</a></li>
<li><a rel="nofollow">企业文化</a></li>
<li><a rel="nofollow">公司新闻</a></li>
<li><a rel="nofollow">加入我们</a></li>
</ol>
</div>

<div class="col-md-3 block">
<header>联系方式</header>
<ol>
<li>
<p>电话：400-0453-199</p>
</li>
<li>
<p>邮件：eyt@rueyt.com</p>
</li>
<li>
<p>公司地址：

哈尔滨开发区南岗集中区赣水路12-11号</p>
</li>
</ol>
</div>
<div class="copyright">
2016&nbsp;
<a>yiyuntong.com</a>&nbsp;
<a rel="nofollow" target="_blank" >哈ICP备14345562号</a>&nbsp;

</div>
</div>
<div class="col-md-2"></div>
</footer>
</section>
</div>
<script>
        //避免搜索引擎搜出effevo.mt.sogou.com，把用户引到此域名
        if ('effevo.mt.sogou.com' === location.hostname && window.navigator.userAgent && window.navigator.userAgent !== 'test') { location.href = '#'; }
        var ratio = 1920 / 1080;
        var windowRatio = document.body.clientWidth / document.body.clientHeight;
        if(windowRatio < ratio) {
            document.getElementById('main-video').style.width = document.body.clientHeight * ratio;
            document.getElementById('main-video').style.height = document.body.clientHeight;
        } else {
            document.getElementById('main-video').style.width = document.body.clientWidth;
            document.getElementById('main-video').style.height = document.body.clientWidth / ratio;
        }
    </script>
<script src="./css/index_files/eyt_files/main.e791eec5033b6a123141.js"></script>
<script src="../eyt_xt/app/common/common.js" type="text/javascript"></script>
<script src="../eyt_xt/app/common/cookies.js" type="text/javascript"></script>
<script type="text/javascript" src="../eyt_xt/app/public/firstPage.js"></script>
</body></html>