<!--
	模块作者：莫胜男
	创建日期：2017-01-16
	模块功能：官网第二个页面
-->
<%@page pageEncoding="utf-8"%>
<!DOCTYPE html>
<!-- saved from url=(0047)https://effevo.com/app/index/html/products.html -->
<html class="js"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9"/>
    <meta name="viewport" content="width=device-width,initial-scale=1,  minimum-scale=1, maximum-scale=1,	 user-scalable=no">
    <title>运易达跨境货代协同服务平台</title>
    <meta name="keywords" content="运易达跨境货代协同服务平台">
    <meta name="Description" content="运易达跨境货代协同服务平台">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="renderer" content="webkit|ie-comp|ie-stand">
    <meta name="robots" content="index,follow">
    <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no">

    <link rel="shortcut icon" href="https://effevo.com/app/index/img/logo/fav_qian.png" type="image/x-icon">
    <link type="text/css" rel="stylesheet" href="./css/index_files/index3_files/bootstrap.min.css">
    <link type="text/css" rel="stylesheet" href="./css/index_files/index3_files/index.css">
    <link type="text/css" rel="stylesheet" href="./css/index_files/index3_files/styles.css">
    <link type="text/css" rel="stylesheet" href="./css/index_files/index3_files/index_new.css">
	<link href="//netdna.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">	

</head>

<body class="home_area" style="zoom: 1;">

<!-- 内容区块-->
<div class="section_group" id="functions">
<!-- 介绍及登录区 -->
<section class="area-first" data-title="首屏移动">
    <div class="fix-area">
        <header class="top-nav">
            <a href="#" class="index-logo" data-scroll=""><img src="./css/index_files/index3_files/logo_bai.png"></a>
            <a href="#" class="nav-toggle" aria-hidden="true">Menu</a><nav class="nav-collapse nav-collapse-0 closed" aria-hidden="false" style="transition: max-height 284ms; position: relative;">
                <div class="pull-left">
                    <ul>
                        <li class="menu-item"><a href="index" data-scroll="">首页</a></li>
                        <li class="menu-item"><a class="active" href="#" data-scroll="">功能</a></li>
                    
                    </ul>
                </div>
                <div class="split pull-left"></div>
                <div class="pull-left">
                    <ul>
                        <li  id="enterDiv" class="menu-btn"></li>
                        <li class="menu-btn register"><a class="login-in" href="./public/eyt_register">免费注册</a></li>
                        <li class="menu-btn login-show"><a class="login-in" href="#">返回项目</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    </div>

    <div class="row content">
        <div class="col-md-2"></div>
        <div class="col-md-8">
            <div class="col-md-6">
                <p class="col-header color-white" style="text-align: justify">您会是第&nbsp;<span class="import-color">89975</span>&nbsp;个协同订单吗？</p>
                <div class="text" style="text-align: justify">
                    便捷高效的物流协同作业订单管理、灵活专业的物流协同追踪，即可组合使用也可相互独立，强大而不繁重，易用而不简单。物流协同作业整合，文件共享，讨论沟通一切尽在运易达，而这一切只为专注物流协作订单管理并且免费。
                </div>
                <div class="mail mail-center">
                    <div class="pull-left input-mail-out">
                        <input id="registerEmail" class="input-mail" id="registerEmail" placeholder="请输入邮箱地址"><!-- <span class="ee-icon-e-mail"></span> -->
                    </div>
                    <div class="free-icon">
                        <a class="btn-free" onclick="goRegister()">免费使用</a>
                    </div>
                   <!--  <div class="mail-error-info" style="visibility: hidden;">邮箱错误信息</div> -->
                </div>
            </div>
            <div class="col-md-6">
                <img style="width: 100%" src="./css/index_files/index3_files/fun-all.png">
            </div>
        </div>
        <div class="col-md-2"></div>
    </div>
</section>

<!-- 效果展示区 -->
<section class="area-second bg-gray pad-area" data-title="内容">
    <div class="col-md-2"></div>
    <div class="col-md-8">
        <div class="pro-infos row">
            <div class="col-md-4 sg">
                <!--<p class="ee-icon ee-icon-task-list-line"></p>-->
                <p class="fa fa-truck fa-5x" style="color:#F06C4F;font-size: 55px;"></p>
                <p class="title">订单求助</p>
                <div class="desc">发起跨境物流协同求助
</div>
            </div>
            <div class="col-md-4 sg">
                <!--<p class="ee-icon ee-icon-bug-line"></p>-->
                <p class="fa fa-cubes fa-5x" style="color:#F06C4F;font-size: 55px;"></p>
                <p class="title">任务管理</p>
                <div class="desc">根据订单邀请协同者，执行协同作业</div>
            </div>
            <div class="col-md-4 sg">
                <!--<p class="ee-icon ee-icon-chart-line"></p>-->
                <p class="fa fa-file fa-5x" style="color:#F06C4F;font-size: 55px;"></p>
                <p class="title">在线文档</p>
                <div class="desc">共同在线编辑报关单等跨境物流文档
			</div>
            </div>
            <div class="col-md-4 sg">
                <!--<p class="ee-icon ee-icon-safe-line"></p>-->
                <p class="fa fa-volume-up fa-5x" style="color:#F06C4F;font-size: 55px;"></p>
                <p class="title">消息通知</p>
                <div class="desc">通知协同消息、协同状态</div>
            </div>

            <div class="col-md-4 sg">
                <!--<p class="ee-icon ee-icon-file-storage-line"></p>-->
                <p class="fa fa-info fa-5x" style="color:#F06C4F;font-size: 55px;"></p>
                <p class="title">邀请协同</p>
                <div class="desc">随时添加平台用户、临时用户参与协助</div>
            </div>
            <div class="col-md-4 sg">
                <!--<p class="ee-icon ee-icon-message-line"></p>-->
                <p class="fa fa-table fa-5x" style="color:#F06C4F;font-size: 55px;"></p>
                <p class="title">数据安全</p>
                <div class="desc">数据安全是我们立足的根基，请放心使用 </div>
            </div>
        </div>
    </div>
    <div class="col-md-2"></div>
</section>

<!-- 详细描述区 -->
<section class="area-third pad-area">
    <div class="col-md-12">
        <div class="pro-detail row pro-center">
            <div class="col-md-12">
                <p class="title header" style="color:#E2CE8F"><span class="header-icon ee-icon-documents-line"></span><span class="text">多视图的物流协同订单管理</span></p>
                <div class="desc">在运易达中协同订单管理多视图，可以满足物流业务协同过程中，不同用户的需求，订单列表、任务列表、视图可以直观的查看任务详情。一键原地切换视图，易用而不简单。

                </div>
            </div>
            <div class="col-md-12">
                <img style="width: 100%" src="./css/index_files/index3_files/1_03_03.png">
            </div>
        </div>

        <div class="pro-detail pro-center row" style="background-image: url(./css/index_files/index3_files/4_02.jpg);    background-size: cover;">
            <div class="col-md-12">
                <p class="title header" style="color:#57CCD5"><span class="header-icon ee-icon-chart-line"></span><span class="text">专业的协同订单跟踪</span></p>
                <div class="desc" style="color:#fff">运易达中内置了多种常用订单跟踪视图，包括我发起的、我执行的、我关注的任务等，每个界面都带有简易的统计表格，非常直观，后期会让用户自定义统计维度来满足不同的统计需求。
                </div>
            </div>
            <div class="col-md-12" style="text-align: center">
                <img src="./css/index_files/index3_files/5_03.png" style="width: 60%; text-align: center; margin-bottom: -45px;margin-top: 50px;">
            </div>
        </div>

        <!--<div class="pro-detail pro-center row">
            <div class="col-md-12">
                <p class="title header color-green"><span class="header-icon ee-icon-bug-line"></span><span class="text">灵活、专业的缺陷追踪</span></p>
                <div class="desc">缺陷管理与任务管理即可组合使用，也可相互独立。在缺陷管理中用户可以根据自己团队的缺陷跟踪流程来自定义处理流程，还支持自定义字段，来满足每个团队对缺陷记录全方位要求。强大而不繁重。</div>
            </div>
            <div class="col-md-12">
                <img style="width: 100%" src="./css/index_files/index3_files/1_06.png">
            </div>
        </div>-->
    </div>
</section>

<section class="area-four pad-area bg-gray" style="background-image: url(/app/index/img/functions/v2/2_02.jpg);    background-size: cover;">
    <div class="col-md-2"></div>
    <div class="col-md-8">
        <p class="header">数据安全策略</p>
        <h4>数据安全是我们立足的根基，请放心使用。</h4>

        <div class="block row">
            <div class="col-md-3">
                <p class="ee-icon ee-icon-lock-line color-blue"></p>
                <div class="desc">网站采用https协议，加密数据传输，防止第三方窃听</div>
            </div>
            <div class="col-md-1">
                <p class="ee-icon-add"></p>
            </div>
            <div class="col-md-4">
                <p class="ee-icon ee-icon-cloud-line color-red"></p>
                <div class="desc">用户保存数据采用实时备份加定时全盘备份，双保险应对数据意外损坏</div>
            </div>
            <div class="col-md-1">
                <p class="ee-icon-add"></p>
            </div>
            <div class="col-md-3">
                <p class="ee-icon ee-icon-umbrella-line color-green "></p>
                <div class="desc">网站有入侵检测和防御机制，防止用户数据被非授权用户访问或窃取。</div>
            </div>
        </div>
    </div>
    <div class="col-md-2"></div>
</section>

<!-- 详细描述区 -->
<section class="area-third pad-area">
    <div class="col-md-12">
        <div class="pro-detail row pro-center">
            <div class="col-md-12">
                <p class="title header" style="color:#FCA90D"><span class="header-icon ee-icon-file-storage-line"></span><span class="text">文件共享</span></p>
                <div class="desc">在物流协同作业过程中，文件共享是必不可少的，在这里你可以把它作为一个文件的中转站，来查阅、下载、储存工作当中所涉及到的文件。</div>
            </div>
            <div class="col-md-12">
                <img style="width: 100%" src="./css/index_files/index3_files/1_08.png">
            </div>
        </div>

        <div class="pro-detail row pro-center">
            <div class="col-md-12">
                <p class="title header" style="color:#4FB0FF"><span class="header-icon ee-icon-message-line"></span><span class="text">讨论、沟通</span></p>
                <div class="desc">沟通，讨论可以在某个协同任务中进行，针对协同订单和任务，可以发起任何你需要告知或讨论的内容，可以是一个任务，一个讨论消息等。可接收与发送邮件，也可作为发送临时讨论的用途。
                </div>
            </div>
            <div class="col-md-12">
                <img style="width: 100%" src="./css/index_files/index3_files/1_10.png">
            </div>
        </div>
    </div>
</section>

<!-- 使用公司陈列区 -->
<section data-title="使用列表" id="contact">
    <div class="choose-focus">
        <div class="choose-inner"></div>
        <!--<img src="/app/index/img/choose-bottom.png">-->
    </div>

    <!-- copyright -->
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
<a href="#">yiyuntong.com</a>&nbsp;
<a rel="nofollow" target="_blank" href="http://www.miibeian.gov.cn/">哈ICP备14345562号</a>&nbsp;

</div>
</div>
<div class="col-md-2"></div>
</footer>
</section>
</div>


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

<script src="./css/index_files/index3_files/jquery.min.js"></script>
<!--[if lt IE 9]>
<script type="text/javascript" src="/app/index/js/PIE.js"></script>
<![endif]-->


<!--<script src='js/jquery.corners.js'></script>-->
<!--<script src='js/newExcanvas.js'></script>-->
<script type="text/javascript" src="./css/index_files/index3_files/index.js"></script>

<script src="./css/index_files/index3_files/unslider.min.js"></script>
<script src="./css/index_files/index3_files/scrollReveal.min.js"></script>
<script src="./css/index_files/index3_files/responsive-nav.min.js"></script>
<script src="./css/index_files/index3_files/fastclick.js"></script>
<script src="./css/index_files/index3_files/scroll.js"></script>
<script src="./app/common/common.js" type="text/javascript"></script>
<script src="./app/common/cookies.js" type="text/javascript"></script>
<script type="text/javascript" src="./app/public/firstPage.js"></script>
    <script>
        //避免搜索引擎搜出effevo.mt.sogou.com，把用户引到此域名
        if ('effevo.mt.sogou.com' === location.hostname && window.navigator.userAgent && window.navigator.userAgent !== 'test') { location.href = 'https://effevo.com'; }
    </script>
</body></html>