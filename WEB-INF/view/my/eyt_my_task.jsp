<!--
	模块作者：关宇
	创建日期：2017-01-16
	模块功能：我的任务
-->
<%@page pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>

	<head>

		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">

		<title>运易达跨境货代协同服务平台</title>

		<link rel="shortcut icon" href="favicon.ico">
		<link href="../css/bootstrap.min.css?v=3.3.5" rel="stylesheet">
		<link href="../css/font-awesome.min.css?v=4.4.0" rel="stylesheet">

		<link href="../css/animate.min.css" rel="stylesheet">
		<link href="../css/style.min.css?v=4.0.0" rel="stylesheet">
		<base target="_blank">
		<style>
			.project-people {
				text-align: left;
			}
			
			.btn1 {
				display: inline-block;
				padding: 0px 12px 4px 12px;
				margin-bottom: 0;
				font-size: 14px;
				font-weight: 400;
				line-height: 1.42857143;
				text-align: center;
				white-space: nowrap;
				vertical-align: middle;
				-ms-touch-action: manipulation;
				touch-action: manipulation;
				cursor: pointer;
				-webkit-user-select: none;
				-moz-user-select: none;
				-ms-user-select: none;
				user-select: none;
				background-image: none;
				border: 1px solid transparent;
				border-radius: 5px
			}
			
			.wenzi {
				height: 30px;
				width: 30px;
				font-size: 20px;
				font-family: '微软雅黑';
				color: white;
			}
		</style>

	</head>

	<body class="gray-bg">
		<div class="wrapper wrapper-content  animated fadeInRight">
			<div class="row">
				<div class="col-sm-12">
					<div class="ibox" style="height: 1300px;">
						<div class="ibox-content" style="height: 1300px;">
							<div class="clients-list" style="height: 1300px;">
								<ul class="nav nav-tabs">
									<span class="pull-right small text-muted"></span>
									<li class="active">
										<a data-toggle="tab" data='{"index":1,"state":1}' onclick="query(this,false)">
											<i class="fa fa-user"></i>我指派的任务
											<!-- (<span id="count2"></span>) -->
										</a>
									</li>
									<li class="">
										<a data-toggle="tab" data='{"index":2,"state":2}' onclick="query(this,false)">
											<i class="fa fa-briefcase"></i>我执行的任务
											<!--(<span id="count3"></span>)-->
										</a>
									</li>
									<li class="">
										<a data-toggle="tab" data='{"index":3,"state":3}' onclick="query(this,false)">
											<i class="fa fa-briefcase"></i>我关注的任务
											<!--(<span id="count4"></span>)-->
										</a>
									</li>
								</ul>
								<div class="tab-content">
									<div id="tab-1" class="tab-pane active">
										<div class="ibox">
											<div class="ibox-title">
												<!--  <h5>所有任务</h5>-->
												<div class="ibox-tools">

												</div>
											</div>
											<div class="ibox-content">
												<div class="row m-b-sm m-t-sm">
													<div class="col-md-1">
														<button type="button" id="btnRefreshRenWu" name="btnRefreshRenWu" class="btn btn-white btn-sm"><i class="fa fa-refresh"></i> 刷新</button>
													</div>
													<div class="col-md-11">
														<div class="input-group">
															<input id="searchRenWu" name="searchRenWu" type="text" placeholder="请输入任务名称" class="input-sm form-control">
															<span class="input-group-btn">
																<button id="btnSearchRenWu"       name="btnSearchRenWu"     type="button" class="btn btn-sm btn-primary"> 搜索</button>
															</span>
														</div>
													</div>
												</div>
												<div class="project-list">
													<table class="table table-hover">
														<tbody id="tab">

														</tbody>
													</table>
													<div class="row " style="margin-top: -20px">
														<div id="div_page_count" class="col-sm-6" style="padding-top:15px; display:none;">
															显示 0 到 0 项，共 0 项
														</div>
														<div class="col-sm-6 pull-right" style="float:right;padding-right:0px;">
															<!-- 分页控件 -->
															<ul id='div_paginator' style="cursor:hand;float:right;padding-right:15px; display:none;"></ul>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<script src="../js/jquery.min.js"></script>
		<script src="../ie_compatibility/placeholderfriend.js"></script>
		<script src="../js/bootstrap.min.js?v=3.3.5"></script>
		<script src="../js/plugins/slimscroll/jquery.slimscroll.min.js"></script>
		<script src="../js/content.min.js?v=1.0.0"></script>
		<script type="text/javascript" src="../app/my/jquery-validation-1.15.1/dist/jquery.validate.js"></script>
		<script src="../js/plugins/validate/messages_zh.min.js"></script>
		<script type="text/javascript" src="../app/common/common.js"></script>
		<script src="../app/common/cookies.js" charset="utf-8"></script>
		<script src="../js/plugins/bootstrap-paginator/bootstrap-paginator.js"></script>
		<script src="../js/plugins/bootstrap-paginator/bootstrap-paginator-common.js"></script>

		<script type="text/javascript" src="../app/my/eyt_my_task_c.js"></script>
		<script type="text/javascript" src="../app/my/eyt_my_task_check.js"></script>
		<script type="text/javascript" src="../app/my/eyt_my_task_m.js"></script>
		<script type="text/javascript" src="../app/my/eyt_my_task_v.js"></script>

	</body>

</html>