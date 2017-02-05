<!--
	模块作者：莫胜男
	创建日期：2017-01-16
	模块功能：任务列表
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
		<link href="../css/animate.min.css" rel="stylesheet">
		<link href="../css/style.min.css?v=4.0.0" rel="stylesheet">
		<link href="../css/font-awesome.min.css" rel="stylesheet">
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
			
			.btn-red {
				background-color: #e3403b;
				border-color: #e3403b;
				color: #FFF;
			}
			
			.btn-green {
				background-color: #42a644;
				border-color: #42a644;
				color: #FFF;
			}
		</style>
		<style>
			.btn-primary2 {
				background-color: #1a7bb9;
				border-color: #1a7bb9;
				color: #fff
			}
			
			.btn-primary2.active,
			.btn-primary2:active,
			.btn-primary2:focus,
			.btn-primary2:hover,
			.open .dropdown-toggle.btn-primary {
				background-color: #1a7bb9;
				border-color: #1a7bb9;
				color: #FFF
			}
			
			.btn-primary2.active,
			.btn-primary2:active,
			.open .dropdown-toggle.btn-primary {
				background-image: none
			}
			
			.btn-primary2.active[disabled],
			.btn-primary2.disabled,
			.btn-primary2.disabled.active,
			.btn-primary2.disabled:active,
			.btn-primary2.disabled:focus,
			.btn-primary2.disabled:hover,
			.btn-primary2[disabled],
			.btn-primary2[disabled]:active,
			.btn-primary2[disabled]:focus,
			.btn-primary2[disabled]:hover,
			fieldset[disabled] .btn-primary2,
			fieldset[disabled] .btn-primary2.active,
			fieldset[disabled] .btn-primary2:active,
			fieldset[disabled] .btn-primary2:focus,
			fieldset[disabled] .btn-primary2:hover {
				background-color: #1a7bb9;
				border-color: #1a7bb9;
			}
			
			.btn-primary1 {
				background-color: #81c2f5;
				border-color: #81c2f5;
				color: #fff
			}
			
			.btn-primary1.active,
			.btn-primary1:active,
			.btn-primary1:focus,
			.btn-primary1:hover,
			.open .dropdown-toggle.btn-primary {
				background-color: #3a9ce8;
				border-color: #3a9ce8;
				color: #FFF
			}
			
			.btn-primary1.active,
			.btn-primary1:active,
			.open .dropdown-toggle.btn-primary {
				background-image: none
			}
			
			.btn-primary1.active[disabled],
			.btn-primary1.disabled,
			.btn-primary1.disabled.active,
			.btn-primary1.disabled:active,
			.btn-primary1.disabled:focus,
			.btn-primary1.disabled:hover,
			.btn-primary1[disabled],
			.btn-primary1[disabled]:active,
			.btn-primary1[disabled]:focus,
			.btn-primary1[disabled]:hover,
			fieldset[disabled] .btn-primary1,
			fieldset[disabled] .btn-primary1.active,
			fieldset[disabled] .btn-primary1:active,
			fieldset[disabled] .btn-primary1:focus,
			fieldset[disabled] .btn-primary1:hover {
				background-color: #3a9ce8;
				border-color: #3a9ce8
			}
		</style>

		<style>
			.imgscale {
				-webkit-animation: all 2s linear;
			}
			
			.imgscale:hover {
				-webkit-transform: scale(1.1);
			}
		</style>
		<base target="_blank">

	</head>

	<body class="gray-bg">
		
		<div class="wrapper wrapper-content  animated fadeInRight">
			<div class="row">
            <div class="col-sm-12">
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5 id="txtOrderInfo">基本信息</h5>
                        <div class="ibox-tools">
                            <a class="collapse-link">
                                <i class="fa fa-chevron-up">收起</i>
                            </a>
                            
                        </div>
                    </div>
                    <div class="ibox-content"  style="padding-bottom: 0px;">
                        <div class="panel-body">
                            <div class="panel-group" id="accordion">
                                    <form class="form-horizontal m-t" id="">
					                       
					                            <div class="form-group">
					                                			                         					                            
					                                <label class="col-sm-1 control-label">起运地</label>
					                                <div class="col-sm-2">
					                                    <input type="search" id="txtStartCity" class="form-control input-sm" readonly> 
					                                </div>
					                                <label class="col-sm-1 control-label">目的地</label>
					                                <div class="col-sm-2">
					                                    <input type="search" id="txtEndCity" class="form-control input-sm" readonly> 
					                                </div>					                         					                            
					                                <label class="col-sm-1 control-label">报关地</label>
					                                <div class="col-sm-2">
					                                    <input type="search" id="txtBgCity" class="form-control input-sm" readonly> 
					                                </div>
													<label class="col-sm-1 control-label">运输方式</label>
					                                <div class="col-sm-2">
					                                    <input type="search"  id="txtTranstype" class="form-control input-sm" readonly> 
					                                </div>
					                            </div>
												<div  class="form-group" id="tranDiv"></div>
												
					                           
					                          
					                            
					                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
			<div class="row">
				<div class="col-sm-6">
					<div class="ibox" style="height: 1000px;">
						<div class="ibox-content" style="height: 1000px;">
							<div class="clients-list" style="height: 1000px;">
								<ul class="nav nav-tabs">
								<!--	<span id="sumTask" class="pull-right small text-muted"></span>-->
								<!--<button onclick="goback()" style="margin-left: 10px;" class="btn btn-primary pull-right">返回</button><span style="width: 10px;">&nbsp;&nbsp;&nbsp;&nbsp;</span>-->
								<!--<button onclick="upload_file()" class="btn btn-primary pull-right">上传</button>-->
									<li class="active">
										<a data-toggle="tab" href=""><i class="fa fa-user"></i> 任务</a>
									</li>
								</ul>
								<div class="tab-content">
									<div id="tab-1" class="tab-pane active">
										<div class="ibox">
											<div class="ibox-title">
												<h5>所有任务</h5>
												<div class="ibox-tools">
													<!--href="eyt_projects.html"
													<a id="newTaskBtn" class="btn btn-primary btn-xs">创建新任务</a>-->
												</div>
											</div>
											<div class="ibox-content">
												<div class="row m-b-sm m-t-sm">
													<div class="col-md-2">
														<button type="button" id="btnReload" class="btn btn-white btn-sm">
																					<i class="fa fa-refresh"></i> 刷新
																				</button>
													</div>
													<div class="col-md-10">
														<div class="input-group">
															<input id="txtTaskCn" type="text" placeholder="请输入任务名称" class="input-sm form-control"> <span class="input-group-btn">
																						<button type="button" id="btnQuery"
																							class="btn btn-sm btn-primary">搜索</button>
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
														<div id="div_page_count" class="col-sm-6" style="padding-top:15px;display:none;">显示 01 到 05 项，共 07 项</div>
														<div class="col-sm-6 pull-right" style="float:right;padding-right:0px;">
															<!-- 分页控件 -->
															<ul id='div_paginator' style="cursor:hand;float:right;padding-right:15px;display:none;"></ul>
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

				<div class="col-sm-6" id="contact-1" name="contact-1">
					<div>
						<div class="row">
							<div id="mydesktop" class="col-sm-12">

							</div>
						</div>
					</div>

				</div>

			</div>

			<!-- 模态框（Modal） -->
			<div id="newTaskPanels" class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
							<h4 class="modal-title" id="myModalLabel">创建新任务</h4>
						</div>
						<div class="modal-body">
							<div class="row">
								<div class="col-sm-12">
									<form class="form-horizontal m-t" id="signupForm">
										<div class="form-group">
											<label class="col-sm-3 control-label">任务内容：</label>
											<div class="col-sm-8">
												<input type="text" id="txtTaskContent" name="txtTaskContent" class="form-control input-sm">

											</div>
										</div>
										<div class="form-group">
											<label class="col-sm-3 control-label">表单模板：</label>
											<div id="cbxConfig" class="col-sm-8 modal-body"></div>
										</div>

										<div class="form-group">
											<label class="col-sm-3 control-label">内部协同者：</label>
											<div class="col-sm-8">
												<button type="button" class="btn btn-success btn-sm" data-toggle="modal" data-target="#modJoinTaskWorker">添加</button>
												<span id="spanTaskWorker">&nbsp;&nbsp;&nbsp;</span>
											</div>
										</div>

										<div class="form-group">
											<label class="col-sm-3 control-label">外部协同者：</label>
											<div class="col-sm-8">
												<button type="button" class="btn btn-success btn-sm" data-toggle="modal" data-target="#modFollower">添加</button>
												<span id="spanFollower">&nbsp;&nbsp;&nbsp;</span>
											</div>
										</div>

										<div class="form-group">
											<label class="col-sm-3 control-label">附件：</label>
											<div id="fileQueue"></div>
											<input type="file" name="uploadify" id="uploadify" />
											<a href="javascript:$('#uploadify').uploadifive('upload')"></a>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-primary" id="btnCommit">提交</button>
							<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
						</div>
					</div>
				</div>
			</div>

			<div id="uploadFilePanels" class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
							<h4 class="modal-title" id="myModalLabel">上传文件</h4>
						</div>
						<div class="modal-body">
							<div class="row">
								<div class="col-sm-12">
									<form class="form-horizontal m-t" id="signupForm">
										<!--<div class="form-group">
											<label class="col-sm-3 control-label">选择任务：</label>
											<div id="taskConfig" class="col-sm-8 modal-body"></div>
										</div>-->

										<div class="form-group">
											<label class="col-sm-3 control-label">附件：</label>
											<div id="fileQueue2"></div>
											<input type="file" name="uploadify2" id="uploadify2" />
											<a href="javascript:$('#uploadify2').uploadifive('upload')"></a>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-primary" id="btnCommitFile">提交</button>
							<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
						</div>
					</div>
					<!-- /.modal-content -->
				</div>
				<!-- /.modal-dialog -->
			</div>
			<!-- /.modal -->

			<div class="modal inmodal fade" id="modJoinTaskWorker" tabindex="-1" role="dialog" aria-hidden="true">
				<div class="modal-dialog modal-lg">
					<div class="modal-content">
						<div class="modal-header" style="height: 40px;padding-top: 10px;">
							<button type="button" class="close" data-dismiss="modal">
							<span aria-hidden="true">&times;</span><span class="sr-only">Close</span>
						</button>
							<span class="modal-title" style="font-size: 17px;font-weight: bold;">选择内部协同者</span>
						</div>

						<div class="modal-body" id="selectOverTaskWorker"></div>
						<div class="modal-body">
							<div class="panel panel-success">
								<div class="panel-heading" id="title_taskworker2">
									<h4 class="panel-title">
				<span> 内部协同者</span>
			</h4>
								</div>
								<div class="panel-body center-block" id="inTaskworkerUsersPanel"></div>
							</div>

							<div class="panel panel-success">
								<div class="panel-heading">
									<h4 class="panel-title">
				<span> 添加内部协同者</span>
			</h4>
								</div>
								<div class="panel-body center-block">
									<input type="email" class="form-control" id="in_email" name="in_email" placeholder="请输入邮箱" style="float:left ;width:85%;" required/>
									<button id="btnAddConcatIn" type="button" class="btn btn-primary" style="float:right">添加</button>
								</div>
							</div>

						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-white" data-dismiss="modal">关闭</button>
							<button id="btnSaveTaskWorker" type="button" class="btn btn-primary" data-dismiss="modal">确定</button>
						</div>
					</div>
				</div>

				<div class="modal inmodal fade" id="modFollower" tabindex="-1" role="dialog" aria-hidden="true">
					<div class="modal-dialog modal-lg">
						<div class="modal-content">
							<div class="modal-header" style="height: 40px;padding-top: 10px;">
								<button type="button" class="close" data-dismiss="modal">
									<span aria-hidden="true">&times;</span><span class="sr-only">Close</span>
								</button>
								<span class="modal-title" style="font-size: 17px;font-weight: bold;">选择外部协同者</span>
							</div>

							<div class="modal-body" id="selectOverFollower"></div>
							<div class="modal-body">
								<div class="panel panel-success">
									<div class="panel-heading" id="title_follower3">
										<h4 class="panel-title">
				<span> 外部协同者 </span>
			</h4>
									</div>
									<div class="panel-body center-block" id="outFollowerUsersPanel"></div>
								</div>

								<div class="panel panel-success">
									<div class="panel-heading">
										<h4 class="panel-title">
				<span> 添加外部协同者</span>
			</h4>
									</div>
									<div class="panel-body center-block">
										<input type="email" class="form-control" id="out_email" name="out_email" placeholder="请输入邮箱" style="float:left ;width:85%;" required/>
										<button id="btnAddConcatOut" type="button" class="btn btn-primary" style="float:right">添加</button>
									</div>
								</div>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-white" data-dismiss="modal">关闭</button>
								<button id="btnSaveFollower" type="button" class="btn btn-primary" data-dismiss="modal">确定</button>
							</div>
						</div>
					</div>
					<script type="text/javascript" src="../js/zclipboard.min.js"></script>
					<script type="text/javascript" src="../js/jquery.min.js"></script>
					<script src="../js/bootstrap.min.js"></script>
					<script src="../js/jquery.uploadifive.min.js" type="text/javascript"></script>
					<script src="../js/plugins/slimscroll/jquery.slimscroll.min.js"></script>
					<script src="../js/content.min.js"></script>

					<script src="../js/plugins/bootstrap-paginator/bootstrap-paginator.js"></script>
					<script src="../js/plugins/bootstrap-paginator/bootstrap-paginator-common.js"></script>
					<script src="../js/plugins/layer/layer.min.js"></script>
					<script src="../app/common/common.js" type="text/javascript"></script>
					<script src="../app/common/cookies.js" type="text/javascript"></script>

					<!--<script type="text/javascript" src="../app/order/eyt_task_index_c.js"></script>
					<script type="text/javascript" src="../app/order/eyt_task_index_m.js"></script>
					<script type="text/javascript" src="../app/order/eyt_task_index_v.js"></script>-->



					<script type="text/javascript" src="../app/order/create_order_c.js"></script>
					<script type="text/javascript" src="../app/order/create_order_mydescktop.js"></script>
					<!--<script type="text/javascript" src="../app/order/create_order_m.js"></script>
					<script type="text/javascript" src="../app/order/create_order_v.js"></script>-->
					<!--<script type="text/javascript" src="../app/order/create_order_addLianXiRen.js"></script>-->

					<script type="text/javascript" src="../app/order/eyt_task_index_tasklist.js"></script>
					<script type="text/javascript" src="../app/order/eyt_task_index_orderinfo.js"></script>

	</body>

</html>