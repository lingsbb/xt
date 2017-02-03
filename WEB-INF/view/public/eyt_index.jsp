<!--
	模块作者：刘霄
	创建日期：2017-01-16
	模块功能：网站工作台总页
-->
<%@page pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>

<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="renderer" content="webkit">
<meta http-equiv="Cache-Control" content="no-siteapp" />
<title>运易达跨境货代协同服务平台</title>


<meta name="description"
	content="H+是一个完全响应式，基于Bootstrap3最新版本开发的扁平化主题，她采用了主流的左右两栏式布局，使用了Html5+CSS3等现代技术">

<!--[if lt IE 8]>
    <meta http-equiv="refresh" content="0;ie.html" />
    <![endif]-->

<link rel="shortcut icon" href="favicon.ico">
<link href="../css/bootstrap.min.css?v=3.3.5" rel="stylesheet">
<link href="../css/font-awesome.min.css?v=4.4.0" rel="stylesheet">
<link href="../css/animate.min.css" rel="stylesheet">
<link href="../css/style.min.css?v=4.0.0" rel="stylesheet">
<link href="../css/toastr.min.css" rel="stylesheet">
<base target="_blank">
</head>

<body class="fixed-sidebar full-height-layout gray-bg"
	style="overflow:hidden">
	<div id="wrapper">
		<!--左侧导航开始-->
		<nav class="navbar-default navbar-static-side" role="navigation">
			<div class="nav-close">
				<i class="fa fa-times-circle"></i>
			</div>
			<div class="sidebar-collapse" id="returnclose">
				<ul class="nav" id="side-menu">
					<li class="nav-header">
						<div class="dropdown profile-element">
							<!--请悬停在我的上面-->
							<!--class="img-circle"  -->

							<a class="J_menuItem" href="../my/eyt_my_info">
								<!-- 2016.12.05 gy --> <span class="clear"
								style="text-align:center;margin-left:-70px;"> <img
									alt="image" src="../img/logo_bai.png" style="width:100px" /> <span
									class="block m-t-xs" id="userName"
									style="font-weight: bold;text-align:center;"></span>

							</span>
							</a>
							<!--data-toggle="dropdown" class="dropdown-toggle"-->
						</div>
						<div class="logo-element"></div>
					</li>
					<!--
                    <li>
                        <a class="J_menuItem" href="eyt_my_index.html"><i class="fa fa-columns"></i> <span class="nav-label">我的</span></a>
                    </li>
                    -->

					<!--<li>
                        <a href="#">
                            <i class="fa fa fa-bar-chart-o"></i>
                            <span class="nav-label">我的</span>
                            <span class="fa arrow"></span>
                        </a>
                        <ul class="nav nav-second-level">
                        	<li>
                                <a class="J_menuItem" href="eyt_my_task.html">我的任务</a>
                            </li>
                            <li>
                                <a class="J_menuItem" href="eyt_concat_in.html">内部联系人</a>
                            </li>
                            <li>
                                <a class="J_menuItem" href="eyt_concat_out.html">外部联系人</a>
                            </li>
                            
                        </ul>
                    </li>-->
					<li><a class="J_menuItem" href="../my/eyt_my_task"> <i
							class="fa fa-tasks"></i> <span class="nav-label">我的任务</span>

					</a></li>
					<li><a class="J_menuItem" href="../my/eyt_concat_in"> <i
							class="fa fa-user"></i> <span class="nav-label">内部联系人</span>

					</a></li>
					<li><a class="J_menuItem" href="../my/eyt_concat_out"
						id="test"> <i class="fa fa-male"></i> <span class="nav-label">外部联系人</span>

					</a></li>
					<li><a class="J_menuItem" href="../order/eyt_order_index2">
							<i class="fa fa-home"></i> <span class="nav-label">协同订单</span><span
							class="label label-warning pull-right" id="orderSumCount"></span>

					</a> <!--<ul class="nav nav-second-level collapse in" aria-expanded="true">
                            <li>
                                <a class="J_menuItem" href="eyt_order_index1.html" data-index="0">货代订单1</a>
                            </li>
                            <li>
                                <a class="J_menuItem" href="eyt_order_index2.html">货代订单2</a>
                            </li>
                            <li>
                                <a class="J_menuItem" href="eyt_order_task_index.html">货代订单3</a>
                            </li>
                            <li>
                                <a class="J_menuItem" href="eyt_order_task_index2.html">货代订单4</a>
                            </li>
                            <li>
<<<<<<< .mine
                                <a class="J_menuItem" href="eyt_order_task_index.html"  >货代订单5</a>
=======
                                <a class="J_menuItem" href="../order/eyt_order_task"  >货代订单5</a>
>>>>>>> .r388
                            </li>
                        </ul>--></li>
					<li><a class="J_menuItem" href="../order/eyt_order_index3">
							<i class="fa fa-folder-open"></i> <span class="nav-label">归档订单</span>

					</a></li>
					<li style="visibility: hidden;"><a class="J_menuItem" href="../my/eyt_concat_in"
						id="linkZx"> <i class="fa fa-male"></i> <span
							class="nav-label">执行任务</span>

					</a></li>
					<!--                     <li>
                        <a class="J_menuItem" href="../order/eyt_order_task_index">
                            <i class="fa fa-home"></i>
                            <span class="nav-label">订单任务</span>
                            
                        </a>
                    </li>      
                    <li>
                        <a class="J_menuItem" href="../order/eyt_order_task_index2">
                            <i class="fa fa-home"></i>
                            <span class="nav-label">执行任务</span>
                            
                        </a>
                    </li> -->
					<!--<li>
                        <a href="#">
                            <i class="fa fa-home"></i>
                            <span class="nav-label">归档订单</span>
                            
                        </a>
                        <ul class="nav nav-second-level">
                            <li>
                                <a class="J_menuItem" href="eyt_order_task_index.html" data-index="0">货代订单x</a>
                            </li>
                            <li>
                                <a class="J_menuItem" href="eyt_order_task_index2.html">货代订单y</a>
                            </li>
                        </ul>

                    </li>-->
				</ul>
			</div>
		</nav>
		<!--左侧导航结束-->
		<!--右侧部分开始-->
		<div id="page-wrapper" class="gray-bg dashbard-1">
			<div class="row border-bottom">
				<nav class="navbar navbar-static-top" role="navigation"
					style="margin-bottom: 0">
					<div class="navbar-header">
						<a class="navbar-minimalize minimalize-styl-2 btn btn-primary "><i
							class="fa fa-bars"></i> </a>

					</div>
					<ul class="nav navbar-top-links navbar-right">
						<li class="hidden-xs"><a id="btnShoucang" name="btnShoucang"
							class="J_menuItem" data-index="0"><i class="fa fa-heart"></i>
								收藏</a></li>
						<li class="dropdown hidden-xs"><a
							class="right-sidebar-toggle count-info" aria-expanded="false">
								<i class="fa fa-bell"></i> <span class="label label-primary"
								id="number"></span>
						</a></li>
						<!--                         <li style="margin-left: -10px;">
                        	<a class="right-sidebar-toggle count-info" aria-expanded="false">
                            <span>通知</span> 
                           </a>
                       </li> -->
					</ul>

				</nav>
			</div>
			<div class="row content-tabs">
				<button class="roll-nav roll-left J_tabLeft">
					<i class="fa fa-backward"></i>
				</button>
				<nav class="page-tabs J_menuTabs">
					<div class="page-tabs-content">
						<a href="javascript:;" class="active J_menuTab"
							data-id="../order/eyt_order_index2">首页</a>
					</div>
				</nav>
				<button class="roll-nav roll-right  J_tabRight"
					style="margin-right:-80px">
					<i class="fa fa-forward"></i>
				</button>
				<div id="_del"></div>


				<!-- 
                <button class="roll-nav roll-right J_tabRight"><i class="fa fa-forward"></i>
                </button>
                <div class="btn-group roll-nav roll-right">
                    <button class="dropdown J_tabClose" data-toggle="dropdown">关闭操作<span class="caret"></span>

                    </button>
                    <ul role="menu" class="dropdown-menu dropdown-menu-right">
                        <li class="J_tabShowActive"><a>定位当前选项卡</a>
                        </li>
                        <li class="divider"></li>
                        <li class="J_tabCloseAll"><a>关闭全部选项卡</a>
                        </li>
                        <li class="J_tabCloseOther"><a>关闭其他选项卡</a>
                        </li>
                    </ul>
                </div> -->

				<button
					onclick="javascript:window.open('../public/eyt_login','_parent','');window.close();"
					class="roll-nav roll-right J_tabExit">
					<i class="fa fa fa-sign-out"></i> 退出
				</button>
			</div>
			<div class="row J_mainContent" id="content-main">

				<iframe class="J_iframe" id="frame0" name="iframe0" width="100%"
					height="100%" src="../order/eyt_order_index2" frameborder="0"
					data-id="../order/eyt_order_index2" seamless target="_blank"></iframe>



			</div>
			<div class="footer">
				<div class="pull-right">
					&copy; 2016-2026 <a>Copyright&copy;龙运哈尔滨俄运通科贸有限公司</a>
				</div>
			</div>
		</div>
		<!--右侧部分结束-->
		<!--右侧边栏开始-->
		<div id="right-sidebar">
			<div class="sidebar-container">

				<ul class="nav nav-tabs navs-3">

					<li class="active"><a data-toggle="tab" href="#tab-1"> <i
							class="fa fa-gear"></i> 讨论
					</a></li>
					<li class=""><a data-toggle="tab" href="#tab-2"> 任务 </a></li>
					<li><a data-toggle="tab" href="#tab-3"> 系统 </a></li>
				</ul>

				<div class="tab-content">
					<div id="tab-1" class="tab-pane active">
						<!-- <div class="sidebar-title">
                            <h3> <i class="fa fa-comments-o"></i> 最新通知</h3>
                            <small><i class="fa fa-tim"></i> 您当前有10条未读信息</small>
                        </div> -->



						<!--       <div class="sidebar-message">
                                <a href="#">
                                   <div class="pull-left text-center">
                                        <img alt="image" class="img-circle message-avatar" src="../img/a1.jpg">

                                        <div class="m-t-xs">
                                            <i class="fa fa-star text-warning"></i>
                                            <i class="fa fa-star text-warning"></i>
                                        </div>
                                    </div> 
                                    <div class="media-body" id="info">    
                                        <br>
                                        <small class="text-muted" id="createtime"></small>
                                    </div>
                                </a>
                            </div> -->
						<!--                        <div class="sidebar-message">
                                <a href="#">
                                    <div class="pull-left text-center">
                                        <img alt="image" class="img-circle message-avatar" src="../img/a2.jpg">
                                    </div>
                                    <div class="media-body">
                                        HCY48之音乐大魔王会员专属皮肤已上线，快来一键换装拥有他，宣告你对华晨宇的爱吧！
                                        <br>
                                        <small class="text-muted">昨天 2:45</small>
                                    </div>
                                </a>
                            </div>
                            <div class="sidebar-message">
                                <a href="#">
                                    <div class="pull-left text-center">
                                        <img alt="image" class="img-circle message-avatar" src="../img/a3.jpg">

                                        <div class="m-t-xs">
                                            <i class="fa fa-star text-warning"></i>
                                            <i class="fa fa-star text-warning"></i>
                                            <i class="fa fa-star text-warning"></i>
                                        </div>
                                    </div>
                                    <div class="media-body">
                                        写的好！与您分享
                                        <br>
                                        <small class="text-muted">昨天 1:10</small>
                                    </div>
                                </a>
                            </div>
                            <div class="sidebar-message">
                                <a href="#">
                                    <div class="pull-left text-center">
                                        <img alt="image" class="img-circle message-avatar" src="../img/a4.jpg">
                                    </div>

                                    <div class="media-body">
                                        国外极限小子的炼成！这还是亲生的吗！！
                                        <br>
                                        <small class="text-muted">昨天 8:37</small>
                                    </div>
                                </a>
                            </div>
                            <div class="sidebar-message">
                                <a href="#">
                                    <div class="pull-left text-center">
                                        <img alt="image" class="img-circle message-avatar" src="../img/a8.jpg">
                                    </div>
                                    <div class="media-body">

                                        一只流浪狗被收留后，为了减轻主人的负担，坚持自己觅食，甚至......有些东西，可能她比我们更懂。
                                        <br>
                                        <small class="text-muted">今天 4:21</small>
                                    </div>
                                </a>
                            </div>
                            <div class="sidebar-message">
                                <a href="#">
                                    <div class="pull-left text-center">
                                        <img alt="image" class="img-circle message-avatar" src="../img/a7.jpg">
                                    </div>
                                    <div class="media-body">
                                        这哥们的新视频又来了，创意杠杠滴，帅炸了！
                                        <br>
                                        <small class="text-muted">昨天 2:45</small>
                                    </div>
                                </a>
                            </div>
                            <div class="sidebar-message">
                                <a href="#">
                                    <div class="pull-left text-center">
                                        <img alt="image" class="img-circle message-avatar" src="../img/a3.jpg">

                                        <div class="m-t-xs">
                                            <i class="fa fa-star text-warning"></i>
                                            <i class="fa fa-star text-warning"></i>
                                            <i class="fa fa-star text-warning"></i>
                                        </div>
                                    </div>
                                    <div class="media-body">
                                        最近在补追此剧，特别喜欢这段表白。
                                        <br>
                                        <small class="text-muted">昨天 1:10</small>
                                    </div>
                                </a>
                            </div>
                            <div class="sidebar-message">
                                <a href="#">
                                    <div class="pull-left text-center">
                                        <img alt="image" class="img-circle message-avatar" src="../img/a4.jpg">
                                    </div>
                                    <div class="media-body">
                                        我发起了一个投票 【你认为下午大盘会翻红吗？】
                                        <br>
                                        <small class="text-muted">星期一 8:37</small>
                                    </div>
                                </a>
                            </div> -->

					</div>
					<div id="tab-2" class="tab-pane">

						<!-- <div class="sidebar-title">
                            <h3> <i class="fa fa-comments-o"></i> 最新通知</h3>
                            <small><i class="fa fa-tim"></i> 您当前有10条未读信息</small>
                        </div>

                        <div>

                            <div class="sidebar-message">
                                <a href="#">
                                    <div class="pull-left text-center">
                                        <img alt="image" class="img-circle message-avatar" src="../img/a1.jpg">

                                        <div class="m-t-xs">
                                            <i class="fa fa-star text-warning"></i>
                                            <i class="fa fa-star text-warning"></i>
                                        </div>
                                    </div>
                                    <div class="media-body">

                                        据天津日报报道：瑞海公司董事长于学伟，副董事长董社轩等10人在13日上午已被控制11。
                                        <br>
                                        <small class="text-muted">今天 4:21</small>
                                    </div>
                                </a>
                            </div> -->
						<!--                             <div class="sidebar-message">
                                <a href="#">
                                    <div class="pull-left text-center">
                                        <img alt="image" class="img-circle message-avatar" src="../img/a2.jpg">
                                    </div>
                                    <div class="media-body">
                                        HCY48之音乐大魔王会员专属皮肤已上线，快来一键换装拥有他，宣告你对华晨宇的爱吧！
                                        <br>
                                        <small class="text-muted">昨天 2:45</small>
                                    </div>
                                </a>
                            </div>
                            <div class="sidebar-message">
                                <a href="#">
                                    <div class="pull-left text-center">
                                        <img alt="image" class="img-circle message-avatar" src="../img/a3.jpg">

                                        <div class="m-t-xs">
                                            <i class="fa fa-star text-warning"></i>
                                            <i class="fa fa-star text-warning"></i>
                                            <i class="fa fa-star text-warning"></i>
                                        </div>
                                    </div>
                                    <div class="media-body">
                                        写的好！与您分享
                                        <br>
                                        <small class="text-muted">昨天 1:10</small>
                                    </div>
                                </a>
                            </div>
                            <div class="sidebar-message">
                                <a href="#">
                                    <div class="pull-left text-center">
                                        <img alt="image" class="img-circle message-avatar" src="../img/a4.jpg">
                                    </div>

                                    <div class="media-body">
                                        国外极限小子的炼成！这还是亲生的吗！！
                                        <br>
                                        <small class="text-muted">昨天 8:37</small>
                                    </div>
                                </a>
                            </div>
                            <div class="sidebar-message">
                                <a href="#">
                                    <div class="pull-left text-center">
                                        <img alt="image" class="img-circle message-avatar" src="../img/a8.jpg">
                                    </div>
                                    <div class="media-body">

                                        一只流浪狗被收留后，为了减轻主人的负担，坚持自己觅食，甚至......有些东西，可能她比我们更懂。
                                        <br>
                                        <small class="text-muted">今天 4:21</small>
                                    </div>
                                </a>
                            </div>
                            <div class="sidebar-message">
                                <a href="#">
                                    <div class="pull-left text-center">
                                        <img alt="image" class="img-circle message-avatar" src="../img/a7.jpg">
                                    </div>
                                    <div class="media-body">
                                        这哥们的新视频又来了，创意杠杠滴，帅炸了！
                                        <br>
                                        <small class="text-muted">昨天 2:45</small>
                                    </div>
                                </a>
                            </div>
                            <div class="sidebar-message">
                                <a href="#">
                                    <div class="pull-left text-center">
                                        <img alt="image" class="img-circle message-avatar" src="../img/a3.jpg">

                                        <div class="m-t-xs">
                                            <i class="fa fa-star text-warning"></i>
                                            <i class="fa fa-star text-warning"></i>
                                            <i class="fa fa-star text-warning"></i>
                                        </div>
                                    </div>
                                    <div class="media-body">
                                        最近在补追此剧，特别喜欢这段表白。
                                        <br>
                                        <small class="text-muted">昨天 1:10</small>
                                    </div>
                                </a>
                            </div>
                            <div class="sidebar-message">
                                <a href="#">
                                    <div class="pull-left text-center">
                                        <img alt="image" class="img-circle message-avatar" src="../img/a4.jpg">
                                    </div>
                                    <div class="media-body">
                                        我发起了一个投票 【你认为下午大盘会翻红吗？】
                                        <br>
                                        <small class="text-muted">星期一 8:37</small>
                                    </div>
                                </a>
                            </div> -->
						<!--   </div> -->

					</div>
					<div id="tab-3" class="tab-pane">

						<!--  <div class="sidebar-title">
                            <h3> <i class="fa fa-comments-o"></i> 最新通知</h3>
                            <small><i class="fa fa-tim"></i> 您当前有10条未读信息</small>
                        </div>

                        <div>

                            <div class="sidebar-message">
                                <a href="#">
                                    <div class="pull-left text-center">
                                        <img alt="image" class="img-circle message-avatar" src="../img/a1.jpg">

                                        <div class="m-t-xs">
                                            <i class="fa fa-star text-warning"></i>
                                            <i class="fa fa-star text-warning"></i>
                                        </div>
                                    </div>
                                    <div class="media-body">

                                        据天津日报报道：瑞海公司董事长于学伟，副董事长董社轩等10人在13日上午已被控制33。
                                        <br>
                                        <small class="text-muted">今天 4:21</small>
                                    </div>
                                </a>
                            </div> -->
						<!--  <div class="sidebar-message">
                                <a href="#">
                                    <div class="pull-left text-center">
                                        <img alt="image" class="img-circle message-avatar" src="../img/a2.jpg">
                                    </div>
                                    <div class="media-body">
                                        HCY48之音乐大魔王会员专属皮肤已上线，快来一键换装拥有他，宣告你对华晨宇的爱吧！
                                        <br>
                                        <small class="text-muted">昨天 2:45</small>
                                    </div>
                                </a>
                            </div>
                            <div class="sidebar-message">
                                <a href="#">
                                    <div class="pull-left text-center">
                                        <img alt="image" class="img-circle message-avatar" src="../img/a3.jpg">

                                        <div class="m-t-xs">
                                            <i class="fa fa-star text-warning"></i>
                                            <i class="fa fa-star text-warning"></i>
                                            <i class="fa fa-star text-warning"></i>
                                        </div>
                                    </div>
                                    <div class="media-body">
                                        写的好！与您分享
                                        <br>
                                        <small class="text-muted">昨天 1:10</small>
                                    </div>
                                </a>
                            </div>
                            <div class="sidebar-message">
                                <a href="#">
                                    <div class="pull-left text-center">
                                        <img alt="image" class="img-circle message-avatar" src="../img/a4.jpg">
                                    </div>

                                    <div class="media-body">
                                        国外极限小子的炼成！这还是亲生的吗！！
                                        <br>
                                        <small class="text-muted">昨天 8:37</small>
                                    </div>
                                </a>
                            </div>
                            <div class="sidebar-message">
                                <a href="#">
                                    <div class="pull-left text-center">
                                        <img alt="image" class="img-circle message-avatar" src="../img/a8.jpg">
                                    </div>
                                    <div class="media-body">

                                        一只流浪狗被收留后，为了减轻主人的负担，坚持自己觅食，甚至......有些东西，可能她比我们更懂。
                                        <br>
                                        <small class="text-muted">今天 4:21</small>
                                    </div>
                                </a>
                            </div>
                            <div class="sidebar-message">
                                <a href="#">
                                    <div class="pull-left text-center">
                                        <img alt="image" class="img-circle message-avatar" src="../img/a7.jpg">
                                    </div>
                                    <div class="media-body">
                                        这哥们的新视频又来了，创意杠杠滴，帅炸了！
                                        <br>
                                        <small class="text-muted">昨天 2:45</small>
                                    </div>
                                </a>
                            </div>
                            <div class="sidebar-message">
                                <a href="#">
                                    <div class="pull-left text-center">
                                        <img alt="image" class="img-circle message-avatar" src="../img/a3.jpg">

                                        <div class="m-t-xs">
                                            <i class="fa fa-star text-warning"></i>
                                            <i class="fa fa-star text-warning"></i>
                                            <i class="fa fa-star text-warning"></i>
                                        </div>
                                    </div>
                                    <div class="media-body">
                                        最近在补追此剧，特别喜欢这段表白。
                                        <br>
                                        <small class="text-muted">昨天 1:10</small>
                                    </div>
                                </a>
                            </div>
                            <div class="sidebar-message">
                                <a href="#">
                                    <div class="pull-left text-center">
                                        <img alt="image" class="img-circle message-avatar" src="../img/a4.jpg">
                                    </div>
                                    <div class="media-body">
                                        我发起了一个投票 【你认为下午大盘会翻红吗？】
                                        <br>
                                        <small class="text-muted">星期一 8:37</small>
                                    </div>
                                </a>
                            </div> -->
						<!-- </div> -->
					</div>

				</div>
			</div>
			<!--右侧边栏结束-->

		</div>

		<script src="../js/jquery.min.js"></script>
		<script src="../js/bootstrap.min.js?v=3.3.5"></script>
		<script src="../js/plugins/metisMenu/jquery.metisMenu.js"></script>
		<script src="../js/plugins/slimscroll/jquery.slimscroll.min.js"></script>
		<script src="../js/plugins/layer/layer.min.js"></script>
		<script src="../js/hplus.min.js?v=4.0.0"></script>
		<script type="text/javascript" src="../js/contabs.min.js"></script>
		<script src="../js/plugins/pace/pace.min.js"></script>
		<script src="../app/common/toastr.min.js" type="text/javascript"></script>
		<script src="../app/common/common.js" type="text/javascript"></script>
		<script src="../app/common/cookies.js" type="text/javascript"></script>
		<script src="../app/common/mqttws31.js" type="text/javascript"></script>
		<script src="../app/common/mqtt_client.js" type="text/javascript"></script>
		<script src="../app/public/index_c.js" type="text/javascript"></script>
		<script src="../app/public/index_m.js" type="text/javascript"></script>
		<script src="../app/public/index_v.js" type="text/javascript"></script>


    </div>
    <!-- -
    <script src="https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.1/mqttws31.min.js" type="text/javascript"></script>
    
   <script src="../js/jquery.min.js"></script>
    <script src="../js/bootstrap.min.js?v=3.3.5"></script>
    <script src="../js/plugins/metisMenu/jquery.metisMenu.js"></script>
    <script src="../js/plugins/slimscroll/jquery.slimscroll.min.js"></script>
    <script src="../js/plugins/layer/layer.min.js"></script>
    <script src="../js/hplus.min.js?v=4.0.0"></script>
    <script type="text/javascript" src="../js/contabs.min.js"></script>
    <script src="../js/plugins/pace/pace.min.js"></script>
    <script src="../app/common/common.js" type="text/javascript"></script>
     <script src="../app/common/cookies.js" type="text/javascript"></script>
    <script src="../app/public/index_c.js" type="text/javascript"></script>
    <script src="../app/public/index_m.js" type="text/javascript"></script>
    <script src="../app/public/index_v.js" type="text/javascript"></script> -->



		<script>
			$(function() {

				$("[data-toggle='tooltip']").tooltip();
			});
		</script>
</body>

</html>