<!--
	模块作者：金鑫
	创建日期：2017-01-16
	模块功能：执行任务
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
		<link href="../css/font-awesome.min.css" rel="stylesheet">
		<link href="../css/plugins/summernote/summernote.css" rel="stylesheet">
		<link href="../css/plugins/summernote/summernote-bs3.css" rel="stylesheet">
		<link href="../css/style.min.css?v=4.0.0" rel="stylesheet">
		<base target="_blank">

		<script language="javascript" type="text/javascript" src="../js/My97DatePicker/WdatePicker.js"></script>
		<style type="text/css">
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
			
			.wenzi {
				height: 30px;
				width: 30px;
				font-size: 20px;
				font-family: '微软雅黑';
				color: white;
			}
			
			.wenzi1 {
				height: 35px;
				width: 65px;
				font-size: 15px;
				font-family: '微软雅黑';
			}
			
			.Wdate1 {
				border: #ddd 1px solid;
				height: 30px;
				background: #fff url(datePicker.gif) no-repeat right;
			}
		</style>

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
                    <div class="ibox-content" style="padding-bottom: 0px;">
                        <div class="panel-body">
                            <div class="panel-group" id="accordion">
                                    <div class="form-horizontal m-t" id="signupForm1">
					                       
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
												
					                           
					                          
					                            
					                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
		</div>
			<div class="row">

				<div class="col-sm-10" id="contact-1" name="contact-1">
					<div class="ibox">
						<div class="ibox-content">

							<div class="row">
								<div class="col-sm-12">
									<div class="m-b-md nav nav-second-level">
										<!-- <a href="eyt_order_index.html" target="_self" class="btn btn-xs pull-right btn-danger"><i class="fa fa-times"></i></a>  -->
										<!-- <a href="eyt_order_task_index.html" target="_self" data-index="0" class=" btn btn-white btn-xs pull-right ">编辑任务</a>-->

										<h2 id="orderName">Loading...

									</h2>
										<div>
											<ul class="nav navbar-top-links navbar-right" aria-expanded="false">
													<button class="btn btn-warning" type="button" id="btnAdopt" style="margin-left:10px;DISPLAY:none">结束任务</button>
													
												<li id="fenxiangdropdownli" class="dropdown">
													<div id="fenxiangdropdown" class="dropdown-toggle count-info" onclick="http_select_ttet_byTaskIdAndUserId();" style="display: none;">
														<!--data-toggle="dropdown"-->
														<button class="btn btn-primary" style="font:bold"><img src="../img/share-variant.png" style="width:18px"/>&nbsp;分享</button>
													</div>
													
													<div id="fenxiangdropdownNO" class="dropdown-toggle count-info" style="display: none;">
														<!--data-toggle="dropdown"-->
														<button class="btn btn-inverse" style="font:bold">&nbsp;请稍后</button>
													</div>
													<ul class="dropdown-menu dropdown-messages">
														<li class="m-t-xs">
															<div class="dropdown-messages-box">
																<div class="media-body">
																	<i id="iimageicon" class="fa fa-2x fa-lock">&nbsp;<span id="spantext" style="font-size: 14px;">私有表格,只有成员可以访问</span>
</i>
																	<p></p>
																</div>
															</div>
														</li>
														<li class="divider"></li>
														<li>
															<div class="dropdown-messages-box" style="font-weight: 100;color: #999;font-size: 12px;">分享链接
																<a style="font-size: 12px;" id="clickCloseAndOpen">点击开启</a>
																<!---->
																<label style="font-size: 12px; display:none;" id="clickCloseAndOpenNO">请稍候</label>
																<div class="input-group" style="margin-top: 10px;margin-bottom: 10px; ">

																	<input id="inputCopyLink" class="form-control col-sm-5" style="font-size: 12px;max-width: 300px" readonly="readonly">
																	<span class="input-group-btn">
																				<button id="btnCopyLink" type="button" class="btn btn-primary disabled" data-clipboard-action="copy" data-clipboard-target="#inputCopyLink">
																					<span style="font-size: 12px;">复制链接</span>
																	</button>
																	</span>
																</div>

																<div id="linkPermissions" style=" display: none;">
																	<span style="color: #666;">链接权限：</span>
																	<span id="myArea"></span>
																	<a style="font-size: 12px;" id="disNone"></a>
																	<div style="margin-top: 20px; display: none;" id="dis">
																		<div class="radio" style="margin-top: 0px;">
																			<label>
                                                    								<input type="radio" id="checkRadio1" name="toasts" value="只读" checked="" style="margin-top: 0px;">
                                                                                    <span style="margin-bottom: 15px;">只读&nbsp;&nbsp;&nbsp;&nbsp;获得链接的人可以查看</span>
                                                                                    </input>
                                                                                    </label>
																		</div>
																		<div class="radio">
																			<label class="radio">
                                                    								<input type="radio" id="checkRadio2" name="toasts" value="可写" style="margin-top: 0px;">
                                                                                    <span>可写&nbsp;&nbsp;&nbsp;&nbsp;获得链接的人可以查看和编辑</span>
                                                                                    </input>
                                                                                    </label>
																		</div>
																	</div>
																</div>
															</div>
														</li>
													</ul>
												</li>

												<button class="btn btn-danger" type="button"  onclick="goback()" >返&nbsp;回</button>


											</ul>
											</h2>
										</div>
									</div>
									<form class="form-horizontal m-t" id="signupForm">
										<div class="form-group">
											<label class="col-sm-3 control-label">任务内容</label>
											<div class="col-sm-8">
												<input type="search" class="form-control input-sm" readonly="readonly" id="txtTaskContent">
											</div>
										</div>
										<div class="form-group" >
											<label class="col-sm-3 control-label">业务号</label>
											<div class="col-sm-8">
												<input type="search" class="form-control input-sm" id="txtYwNum">
											</div>
										</div>
										<div class="form-group" >
											<label class="col-sm-3 control-label">客户</label>
											<div class="col-sm-8">
												<input type="search" class="form-control input-sm" id="txtKhNum">
											</div>
										</div>
										<div class="form-group">
											<label class="col-sm-3 control-label">状态</label>
											<div class="col-sm-8">
												<input type="search" class="form-control input-sm" id="txtTaskDstatus" readonly="readonly">
												
											</div>
										</div>
										<div class="form-group" id="divContainer" style="display:none">
											<label class="col-sm-3 control-label">集装箱号</label>
											<div class="col-sm-8">
												<input type="search" class="form-control input-sm" readonly="readonly" id="txtContainer">
											</div>
										</div>
										<!--<div class="form-group">
					                                <label class="col-sm-3 control-label">表单模板：</label>
					                                <div class="col-sm-8">
					                                    <input type="search" class="form-control input-sm" >
					                                   
					                                </div>
					                            </div>-->
										<div class="form-group">
											<label class="col-sm-3 control-label">发起人</label>
											<div class="col-sm-8" id="divLaunch">
												<span class="btn btn-info " id="txtTaskLaunch"></span>
											</div>
										</div>
										<div class="form-group">
											<label class="col-sm-3 control-label">内部协同者</label>
											<div class="col-sm-8">
												<button id="btnInsideAdd" type="button" class="btn btn-success btn-sm"  style="display:none">邀请</button>
												<!--<button id="btnInsideAdd" type="button" class="btn btn-success btn-sm" data-toggle="modal" data-target="#modJoinTaskWorker" style="display:none">邀请</button>-->
												<span id="spanTaskWorker"></span>
											</div>
										</div>
										<div class="form-group">
											<label class="col-sm-3 control-label">外部协同者</label>
											<div class="col-sm-8">
												<button id="btnExternalAdd" type="button" class="btn btn-success btn-sm"  style="DISPLAY:none">邀请</button>
												<span id="spanFollower"></span>
											</div>
										</div>
										<!--  <div class="form-group">
					                                <label class="col-sm-3 control-label">内部协同者</label>
					                                <div class="col-sm-8" id="divTaskPerson" >
					                                     <span class="btn btn-default" id="txtTaskPerson"></span> 					                                   
					                                </div>
					                            </div>
					                            <div class="form-group">
					                                <label class="col-sm-3 control-label">外部协同者</label>
					                                <div class="col-sm-8">
					                                  <span id="txtSpan"></span>
					                                   
					                                </div>
					                            </div> -->
										<div class="form-group">
											<label class="col-sm-3 control-label">附件</label>
											<div class="col-sm-8">
												<span id="txtFile"></span>
												<div id="fileQueue"></div>
												<input type="file" name="uploadify" id="uploadify" />
												<a href="javascript:$('#uploadify').uploadifive('upload')"></a>
											</div>
										</div>
										<span id="txtForm"></span>
<!--Start============================================================================================================================-->
									<div class="modal inmodal fade" id="modJoinTaskWorker" tabindex="-1" role="dialog" aria-hidden="true">



											


											<div class="modal-dialog modal-lg">
												<div class="modal-content">
													<div class="modal-header" style="height: 40px;padding-top: 10px;">
														<button type="button" class="close" onclick="closeInAndOut('1');">
																<span aria-hidden="true">&times;</span><span class="sr-only">Close</span>
															</button>
														<span class="modal-title" style="font-size: 17px;font-weight: bold;">选择内部协同者</span>
													</div>




													<div class="ibox-content">



<!--Input Start-->
	

<!---->
                                   <div class="col-sm-12" style="padding: 0px">
                                    <div class="input-group m-b">
                                        <label class=" control-label" style="font-size: 12px;margin-top:10px;float:left;margin-right:6px">请输入:</label>
                                        <div class="input-group-btn">
                                            <button data-toggle="dropdown" class="btn btn-white dropdown-toggle" type="button" style="background-color: #a4a4a4;color:#fff">常用联系人<span class="caret"></span>
                                            </button>
                                            <ul class="dropdown-menu" id="allInPeople">                                            
                                            </ul>
                                        </div>   
                                        <input type="text" class="form-control" id="oneInPeople"> 
										<span class="input-group-btn"> 
										<button id="addContactInUserByJx" type="button" class="btn btn-info" data-toggle="dropdown" >添加</button>
											<ul class="dropdown-menu" role="menu" aria-labelledby="addContactInUserByJx">
										       <li role="presentation">
											   <a role="menuitem" tabindex="-1" onclick="addContactWithPower(1,0)">编辑</a>
										       </li>
										       <li role="presentation">
											   <a role="menuitem" tabindex="-1" onclick="addContactWithPower(0,0)">只读</a>
										       </li>
									       </ul>
                                     </span>
                                    </div>
                                    </div>
<!---->					
<!--Input End-->

<!--Table Start===================================================================================================-->
<div>
<table class="table table-striped table-bordered table-hover dataTables-example">
								<thead>
									<tr>
										<!--<th>序号</th>-->
										<th style="display:none;">inid</th>
										<th style="display:none;">uid</th>
										<th>昵称</th>
										<th>权限</th>
										<th style="display: none;">电话</th>
										<th>邮箱</th>
										<th>操作</th>
									</tr>
								</thead>
								<tbody id="tabInPeople">

								</tbody>

							</table>
							<!--<div class="row " style="margin-top: -20px">
								<div id="div_page_count" class="col-sm-6" style="padding-top:15px">
									显示 0 到 0 项，共 0 项
								</div>
								<div class="col-sm-6 pull-right" style="float:right;padding-right:0px;">
									<!-- 分页控件 -->
									<!--<ul id='div_paginator' style="cursor:hand;float:right;padding-right:15px"></ul>
								</div>
							</div>-->
						</div>
				</div>
<!--Table END===================================================================================================-->

													<!--<div class="modal-body" id="selectOverTaskWorker"></div>
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
																<button id="btnAddConcatIn" type="button" class="btn btn-info" style="float:right">添加</button>
															</div>
														</div>

													</div>
													<div class="modal-footer">
														<button type="button" class="btn btn-white" data-dismiss="modal">关闭</button>
														<button id="btnSaveTaskWorker" type="button" class="btn btn-primary" data-dismiss="modal">确定</button>
													</div>-->
												</div>
											</div>



<!-- 内部 end=====================================================================================================-->
<!-- 外部 end=====================================================================================================-->

											<div class="modal inmodal fade" id="modFollower" tabindex="-1" role="dialog" aria-hidden="true">
												<div class="modal-dialog modal-lg">
													<div class="modal-content">
														<div class="modal-header" style="height: 40px;padding-top: 10px;">
															<button type="button" class="close" onclick="closeInAndOut('2');">
																	<span aria-hidden="true">&times;</span><span class="sr-only">Close</span>
															</button>
															<span class="modal-title" style="font-size: 17px;font-weight: bold;">选择外部协同者</span>
														</div>


														<div class="ibox-content">

<!---->
                                   <div class="col-sm-12" style="padding: 0px">
                                    <div class="input-group m-b">
                                        <label class=" control-label" style="font-size: 12px;margin-top:10px;float:left;margin-right:6px">请输入:</label>
                                        <div class="input-group-btn">
                                            <button data-toggle="dropdown" class="btn btn-white dropdown-toggle" type="button" style="background-color: #a4a4a4;color:#fff">常用联系人<span class="caret"></span>
                                            </button>
                                            <ul class="dropdown-menu" id="allOutPeople">                                            
                                            </ul>
                                        </div>   
                                        <input type="text" class="form-control" id="oneOutPeople"> 
										<span class="input-group-btn"> 
										<button id="addContactInUserByJx" type="button" class="btn btn-info" data-toggle="dropdown" >添加</button>
											<ul class="dropdown-menu" role="menu" aria-labelledby="addContactOutUserByJx">
										       <li role="presentation">
											   <a role="menuitem" tabindex="-1" onclick="addContactWithPower(1,1)">编辑</a>
										       </li>
										       <li role="presentation">
											   <a role="menuitem" tabindex="-1" onclick="addContactWithPower(0,1)">只读</a>
										       </li>
									       </ul>
                                     </span>
                                    </div>
                                    </div>
<!---->
								<!--<input  style="width: 50%;float:left;"  type="text" class="form-control input-sm " placeholder="请输入邮箱" required/>-->

									




							<div>
<table class="table table-striped table-bordered table-hover dataTables-example">
								<thead>
									<tr>
										<!--<th>序号</th>-->
										<th style="display:none;">inid</th>
										<th style="display:none;">uid</th>
										<th>昵称</th>
										<th>权限</th>
										<th style="display: none;">电话</th>
										<th>邮箱</th>
										<th>操作</th>
									</tr>
								</thead>
								<tbody id="tabOutPeople">

								</tbody>

							</table>
							<!--<div class="row " style="margin-top: -20px">
								<div id="div_page_count" class="col-sm-6" style="padding-top:15px">
									显示 0 到 0 项，共 0 项
								</div>
								<div class="col-sm-6 pull-right" style="float:right;padding-right:0px;">
									<!-- 分页控件 -->
									<!--<ul id='div_paginator' style="cursor:hand;float:right;padding-right:15px"></ul>
								</div>
							</div>-->
						</div>

							


														</div>


														<!--<div class="modal-body" id="selectOverFollower"></div>
														<div class="modal-body">
															<div class="panel panel-info">
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
																	<button id="btnAddConcatOut" type="button" class="btn btn-info" style="float:right">添加</button>
																</div>
															</div>

														</div>
														<div class="modal-footer">
															<button type="button" class="btn btn-white" data-dismiss="modal">关闭</button>
															<button id="btnSaveFollower" type="button" class="btn btn-primary" data-dismiss="modal">确定</button>
														</div>-->
													</div>
												</div>
											</div>
										</div>
<!-- 外部 end=====================================================================================================-->
										<!--</div>-->
										<!--</div>-->

										<!--<div class="container">
		                     	   
		                     	   	<div class="row">
									
		               			
										
										<div class="col-sm-12" style="height:130px ;">
											<div class="ibox float-e-margins">
						
												<div class="" style="">
													 <label class="col-sm-3 control-label">任务内容：</label>

												</div>
												<div class="ibox-content form-horizontal m-t">
													<a href="javascript:void(0)" class="btn btn-success btn-sm" onclick="$('#baodan').window('open')">请选择</a>
													&nbsp;&nbsp;&nbsp;
														<span class="btn btn-default" href="buttons.html#">模板一</span>

												</div>

											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-sm-12" style="height:130px ;">
											<div class="ibox float-e-margins">
												<div class="" style="">
													<h5>执行人</h5>

												</div>
												<div class="ibox-content">
													<a href="javascript:void(0)" class="btn btn-success btn-sm" onclick="$('#w').window('open')">请选择</a>
													&nbsp;&nbsp;&nbsp;
													<span class="btn btn-default " href="buttons.html#">王林</span>

												</div>

											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-sm-12" style="height: 180px;">
											<div class="ibox float-e-margins">
												<div class="" style="">
													<h5>参与人</h5>

												</div>
												<div class="ibox-content" style="height:130px ;">
													<a href="javascript:void(0)" class="btn btn-success btn-sm" onclick="$('#w').window('open')">添加
														<a>
															<p>
																<span class="btn btn-info " href="buttons.html#">张三</span>
																<span class="btn btn-danger " href="buttons.html#">张三</span>
																<span class="btn btn-success" href="buttons.html#">张三</span>
																<span class="btn btn-primary " href="buttons.html#">张三</span>
																<span class="btn btn-warning " href="buttons.html#">张三</span>
																<span class="btn btn-default " href="buttons.html#">张三</span>
																<span class="btn btn-info" href="buttons.html#">张三</span>
																<br>
																<br>

															</p>
												</div>

											</div>
										</div>
									</div>

								</div>-->

										<!--<div class="row">
									<div class="ibox-content">
										<form class="form-horizontal m-t" id="signupForm">-->
										<!-- <div class="form-group">
												<label class="col-sm-3 control-label">托运人姓名：</label>
												<div class="col-sm-8">
													<input id="firstname" name="firstname" class="form-control" type="text">
											
												</div>
											</div>
											<div class="form-group">
												<label class="col-sm-3 control-label">地址：</label>
												<div class="col-sm-8">
													<input id="lastname" name="lastname" class="form-control" type="text" aria-required="true" aria-invalid="false" class="valid">
												</div>
											</div>
											<div class="form-group">
												<label class="col-sm-3 control-label">电话：</label>
												<div class="col-sm-8">
													<input id="username" name="username" class="form-control" type="text" aria-required="true" aria-invalid="true" class="error">
												</div>
											</div>
											<div class="form-group">
												<label class="col-sm-3 control-label">收货人姓名：</label>
												<div class="col-sm-8">
													<input id="password" name="password" class="form-control" type="password">
												</div>
											</div>
											<div class="form-group">
												<label class="col-sm-3 control-label">地址：</label>
												<div class="col-sm-8">
													<input id="confirm_password" name="confirm_password" class="form-control" type="password">
												
												</div>
											</div>
											<div class="form-group">
												<label class="col-sm-3 control-label">电话：</label>
												<div class="col-sm-8">
													<input id="email" name="email" class="form-control" type="email">
												</div>
											</div>

											<div class="form-group">
												<label class="col-sm-3 control-label">始发地：</label>
												<div class="col-sm-8">
													<input id="firstname" name="firstname" class="form-control" type="text">
												
												</div>
											</div>
											<div class="form-group">
												<label class="col-sm-3 control-label">目的地：</label>
												<div class="col-sm-8">
													<input id="lastname" name="lastname" class="form-control" type="text" aria-required="true" aria-invalid="false" class="valid">
												</div>
											</div>
											<div class="form-group">
												<label class="col-sm-3 control-label">始发站站编：</label>
												<div class="col-sm-8">
													<input id="username" name="username" class="form-control" type="text" aria-required="true" aria-invalid="true" class="error">
												</div>
											</div>
											<div class="form-group">
												<label class="col-sm-3 control-label">目的地站编：</label>
												<div class="col-sm-8">
													<input id="password" name="password" class="form-control" type="password">
												</div>
											</div>
											<div class="form-group">
												<label class="col-sm-3 control-label">过境站：</label>
												<div class="col-sm-8">
													<input id="confirm_password" name="confirm_password" class="form-control" type="password">
											
												</div>
											</div>
											<div class="form-group">
												<label class="col-sm-3 control-label">过境站站编：</label>
												<div class="col-sm-8">
													<input id="email" name="email" class="form-control" type="email">
												</div>
											</div>

											<div class="form-group">
												<label class="col-sm-3 control-label">成交方式：</label>
												<div class="col-sm-8">
													<input id="firstname" name="firstname" class="form-control" type="text">
												
												</div>
											</div>
											<div class="form-group">
												<label class="col-sm-3 control-label">车型：</label>
												<div class="col-sm-8">
													<input id="lastname" name="lastname" class="form-control" type="text" aria-required="true" aria-invalid="false" class="valid">
												</div>
											</div>
											<div class="form-group">
												<label class="col-sm-3 control-label">数量：</label>
												<div class="col-sm-8">
													<input id="username" name="username" class="form-control" type="text" aria-required="true" aria-invalid="true" class="error">
												</div>
											</div>
											<div class="form-group">
												<label class="col-sm-3 control-label">报关随车单据：</label>
												<div class="col-sm-8">
													<input id="password" name="password" class="form-control" type="password">
												</div>
											</div>
											<div class="form-group">
												<label class="col-sm-3 control-label">货物品名：</label>
												<div class="col-sm-8">
													<input id="confirm_password" name="confirm_password" class="form-control" type="password">
											
												</div>
											</div>
											<div class="form-group">
												<label class="col-sm-3 control-label">海关编码：</label>
												<div class="col-sm-8">
													<input id="email" name="email" class="form-control" type="email">
												</div>
											</div>
											<div class="form-group">
												<label class="col-sm-3 control-label">毛重：</label>
												<div class="col-sm-8">
													<input id="confirm_password" name="confirm_password" class="form-control" type="password">
										
												</div>
											</div>
											<div class="form-group">
												<label class="col-sm-3 control-label">体积：</label>
												<div class="col-sm-8">
													<input id="email" name="email" class="form-control" type="email">
												</div>
											</div>
											<div class="form-group">
												<label class="col-sm-3 control-label">包装：</label>
												<div class="col-sm-8">
													<input id="confirm_password" name="confirm_password" class="form-control" type="password">
											
												</div>
											</div>
											<div class="form-group">
												<label class="col-sm-3 control-label">件数：</label>
												<div class="col-sm-8">
													<input id="email" name="email" class="form-control" type="email">
												</div>
											</div>
											<div class="form-group">
												<label class="col-sm-3 control-label">运价：</label>
												<div class="col-sm-8">
													<input id="email" name="email" class="form-control" type="email">
												</div>
											</div>
											 -->
										<div class="form-group">
											<div class="col-sm-8 col-sm-offset-5">
												<button class="btn btn-primary" type="button" id="btnCommit" style="DISPLAY:none">提 交</button>
												<button class="btn btn-danger" type="button" id="btnRework" style="margin-left:10px;DISPLAY:none">返 工</button>
										</div>
								</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!--<div class="col-sm-4" id="contact-1" name="contact-1" style="background-color: #fff;">
	<div class="wrapper">
	<div class="row m-t-sm">
		<div class="col-sm-12">
			<div class="panel blank-panel">
				<div class="panel-heading">
					<div class="panel-options">
						<ul class="nav nav-tabs">
							<li><h2>反馈问题</h2>
							</li>-->
							<!--  <li class=""><a href="project_detail.html#tab-2" data-toggle="tab">最后更新</a>
		                                                </li>-->
						<!--</ul>
					</div>
				</div>

				<div class="panel-body" style="border:0px;">

					<div class="tab-content">
						<div class="tab-pane active" id="tab-1">
								<div class="feed-activity-list" id="divSend" style="border:0px;overflow: auto;height: 400px;" >-->

<!-- 			 <div class="feed-element" style="margin-right: 30px;" >
																 <span class="btn1  wenzi" style="background-color: #1ab394;">
																	<p style="margin-left: -8px;margin-top: -1px;">李煜</p>
																</span>
																<div class="media-body ">
																	<strong></strong> 
																	<br>
																	<small class="text-muted">54分钟前 </small>
																	<div class="well">
																		我已经完成报关
																	</div></div> 
															</div>  -->

<!-- 											<div class="feed-element" style="margin-right: 30px;">
																<a href="profile.html#" class="pull-left">
																	<img alt="image" class="img-circle" src="../img/a2.jpg">
																</a>
																<div class="media-body ">
																	<small class="pull-right">5分钟前</small>
																	<strong>张亮</strong> 
																	<br>
																	<small class="text-muted">今天 10:20</small>
																	<div class="well">
																		我已经完成拖书。
																	</div></div>
																</div>
															

															<div class="feed-element" style="margin-right: 30px;">
																<a href="profile.html#" class="pull-left">
																	<img alt="image" class="img-circle" src="../img/a3.jpg">
																</a>
																<div class="media-body ">
																	<small class="pull-right">2小时前</small>
																	<strong>崔成浩</strong>
																	<br>
																	<small class="text-muted">今天 09:27 </small>
																	<div class="well">
																		我等待确认拖书。
																	</div>
															
																</div>
															</div>
															<div class="feed-element" style="margin-right: 30px;">
																<a href="profile.html#" class="pull-left">
																	<img alt="image" class="img-circle" src="../img/a4.jpg">
																</a>
																<div class="media-body ">
																	<small class="pull-right">2天前</small>
																	<strong>华商</strong> 
																	<br>
																	<small class="text-muted">11月7日 11:56 </small>
																	<div class="well">
																		我等待确认拖书。
																	</div>
																</div>
															</div>
															<div class="feed-element" style="margin-right: 30px;">
																<a href="profile.html#" class="pull-left">
																	<img alt="image" class="img-circle" src="../img/a5.jpg">
																</a>
																<div class="media-body ">
																	<small class="pull-right text-navy">5小时前</small>
																	<strong>香山</strong> 
																	<br>
																	<small class="text-muted">今天 10:39 </small>
																	<div class="well">
																		我等待确认拖书。
																	</div>
																</div>
															</div>  -->
<!--</div>
</div>
</div>

													<form role="form">
						<div class="form-group" style="position:absulote;bottom:0px;padding:10px;">
<input placeholder="发送消息" class="form-control" type="text" style="margin-top: 8px;width:93%;float: left;" id="txtTeam">
<button class="btn btn-default btn-sm" type="button" style="margin-left:470px ;margin-top:5px ;">取消<tton>
<button class="btn btn-primary btn-sm" type="button" style="margin-top:5px ;margin-top: 9px;margin-left: 10px;" id="btnSend">发送</button>
											</div>-->
											<!--  </form>-->
											<!--<div>

											</div>
										</div>

								</div>
							</div>
						</div>
					</div>
				</div>-->
						
					</div>
				</div>
			</div>

		</div>
		</div>
		<!-- 			 <div id="w" class="easyui-window" title="请选择" data-options="iconCls:'icon-save'" style="width:500px;height:370px;padding:10px;display:none;" collapsible="false" minimizable="false" maximizable="false" modal="true" closed="true">
				<div class="easyui-tabs">
					<div title="帐号邀请" style="padding:10px">
						<br> 邀请人邮箱&nbsp
						<input type="text" style="width:350px;">
						<br><br> 邀请人邮箱&nbsp
						<input type="text" style="width:350px;">
						<br><br> 邀请人邮箱&nbsp
						<input type="text" style="width:350px;">
						<br><br> 邀请人邮箱&nbsp
						<input type="text" style="width:350px;">
						<br><br> 邀请人邮箱&nbsp
						<input type="text" style="width:350px;">
						<br><br>
						<br><br>

						<div style="text-align:right;">
							<button class="btn btn-info">取消</button>&nbsp&nbsp&nbsp&nbsp<button class="btn btn-danger">确定</button>
						</div>
					</div>
					<div title="离线邀请" style="padding:10px">
						<p style="font-size:14px">当成员添加完毕后，建议您关闭邀请连接</p>
						<br><br>
						<div>
							http://www.qq.com
						</div>
						<br><br>
						<div style="text-align:right;">
							<button class="btn btn-info">关闭连接</button>&nbsp&nbsp&nbsp&nbsp<button class="btn btn-danger">复制连接</button>
						</div>
					</div>

				</div>
			</div> -->

		<!-- <div id="baodan" class="easyui-window" title="请选择报单模板" data-options="iconCls:'icon-save'" style="width:500px;height:370px;padding:10px;display:none;" collapsible="false" minimizable="false" maximizable="false" modal="true" closed="true">

				<div title="添加保单模板" style="padding:10px;">

					请选择&nbsp
					<select id="cc" class="easyui-combobox" name="dept" style="width:200px;" editable="false">
						<option value="aa">报关单1</option>
						<option>报关单2</option>
						<option>报关单3</option>
						<option>报关单4</option>
						<option>报关单5</option>
					</select>
					<br><br>
					<div style="text-align:right;position: absolute;bottom:30px;padding-left: 300px;">
						<button class="btn btn-info">取消</button>&nbsp&nbsp&nbsp&nbsp<button class="btn btn-danger">确定</button>
					</div>
				</div>

			</div> -->

		<!-- <div id="CreatProject" class="easyui-window" title="创建新任务" data-options="iconCls:'icon-save'" style="width:300px;height:175px;display:none;" collapsible="false" minimizable="false" maximizable="false" modal="true" closed="true">

				<div title="添加保单模板" style="margin-left: 19px;margin-top:25px ;">

					新建任务:
					<input placeholder="请输入任务名称" style="margin-top: 20px;margin-left: 9px;width=accelerator: 00px;">
					<select id="cc" class="easyui-combobox" name="dept" style="width:200px;" editable="false">
						<option value="aa">报关单1</option>
						<option>报关单2</option>
						<option>报关单3</option>
						<option>报关单4</option>
						<option>报关单5</option>
					</select>
					<br><br>
					<div style="text-align:right;margin-top: 5px;margin-right: 35px;">
						<button class="btn btn-default btn-sm"id="btnCancelCreate">取消</button>&nbsp&nbsp&nbsp&nbsp<button class="btn btn-primary btn-sm">确定</button>
					</div>
				</div>

			</div> -->
			<!--   -->
		<div class="small-chat-box fadeInRight animated" style="height:400px;right:50px;bottom:100px">

            <div class="heading" draggable="true">
                <small class="chat-date pull-right">
                </small> 反馈问题
            </div>

            <div class="slimScrollDiv" style="position: relative; width: auto; height:350px;"><div class="content" style="width: auto; height: 350px;overflow:auto" >

                <div class="left" id="divSend" style="height:300px;">
                    <!--<div class="author-name">
                        Beau-zihan <small class="chat-date">
                        10:02
                    </small>
                    </div>
                    <div class="chat-message active">
                        你好
                    </div>-->

                </div>
                <!--<div class="right">
                    <div class="author-name">
                        游客
                        <small class="chat-date">
                            11:24
                        </small>
                    </div>
                    <div class="chat-message">
                        你好，请问H+有帮助文档吗？
                    </div>
                </div>-->
                <!--<div class="left">
                    <div class="author-name">
                        Beau-zihan
                        <small class="chat-date">
                            08:45
                        </small>
                    </div>
                    <div class="chat-message active">
                        有，购买的H+源码包中有帮助文档，位于docs文件夹下
                    </div>
                </div>-->
                <!--<div class="right">
                    <div class="author-name">
                        游客
                        <small class="chat-date">
                            11:24
                        </small>
                    </div>
                    <div class="chat-message">
                        那除了帮助文档还提供什么样的服务？
                    </div>
                </div>-->
                <!--<div class="left">
                    <div class="author-name">
                        Beau-zihan
                        <small class="chat-date">
                            08:45
                        </small>
                    </div>
                    <div class="chat-message active">
                        1.所有源码(未压缩、带注释版本)；
                        <br> 2.说明文档；
                        <br> 3.终身免费升级服务；
                        <br> 4.必要的技术支持；
                        <br> 5.付费二次开发服务；
                        <br> 6.授权许可；
                        <br> ……
                        <br>
                    </div>
                </div>-->


            </div><div class="slimScrollBar" style="background: rgb(0, 0, 0); width: 4px; position: absolute; top: 0px; opacity: 0.4; display: none; border-radius: 7px; z-index: 99; right: 1px; height: 120.608px;"></div><div class="slimScrollRail" style="width: 4px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.4; z-index: 90; right: 1px;"></div></div>
            <div class="form-chat" style="padding: 12px 0px">
                <div class="input-group input-group-sm">
                    <input type="text" class="form-control" id="txtTeam"> <span class="input-group-btn"> <button class="btn btn-primary" type="button" id="btnSend">发送
                </button> </span>
                </div>
            </div>

        </div>
			<div id="small-chat" style=" bottom: 50px;right: 26px;">
            <span class="badge badge-warning pull-right"></span>
            <a class="open-small-chat" >
                <i class="fa fa-comments" ></i>

            </a>
        </div>
			
		<script type="text/javascript" src="../js/clipboard.min.js"></script>
		<script type="text/javascript" src="../js/jquery.min.js"></script>

		<!--<script src="../js/bootstrap3-typeahead.js"></script>-->
		<!--<script type="text/javascript" src="../app/order/jquery.select.js"></script>-->


		<script src="../js/plugins/bootstrap-paginator/bootstrap-paginator.js"></script>
		<script src="../js/plugins/bootstrap-paginator/bootstrap-paginator-common.js"></script>
		<script src="../js/plugins/metisMenu/jquery.metisMenu.js"></script>
		<script src="../js/plugins/layer/layer.min.js"></script>
		<script src="../js/hplus.min.js"></script>
		<script type="text/javascript" src="../js/contabs.min.js"></script>

		<script type="text/javascript" src="../js/zclipboard.min.js"></script>
		<!-- <script type="text/javascript" src="../js/jquery.easyui.min.js"></script> -->
		<script src="../js/bootstrap.min.js"></script>
		<script src="../js/jquery.uploadifive.min.js" type="text/javascript"></script>
		<script src="../js/plugins/slimscroll/jquery.slimscroll.min.js"></script>
		<script src="../js/content.min.js"></script>
		<!--<script type="text/javascript" src="../app/my/jquery-validation-1.15.1/dist/jquery.validate.js"></script>-->
		<script type="text/javascript" src="../app/common/common.js"></script>
		<script type="text/javascript" src="../app/common/common_shandong.js"></script>
		<script type="text/javascript" src="../app/common/cookies.js"></script>

		<script type="text/javascript" src="../app/order/execute_order_m.js"></script>
		<script type="text/javascript" src="../app/order/execute_order_c.js"></script>
		<script type="text/javascript" src="../app/order/execute_order_v.js"></script>
		<!--<script type="text/javascript" src="../app/order/execute_order_check.js"></script>-->
		<script type="text/javascript" src="../app/order/execute_order_fenxiang.js"></script>
		<script type="text/javascript" src="../app/order/execute_order_change_record.js"></script>
		<script type="text/javascript" src="../app/order/exectue_const.js"></script>
		<script type="text/javascript" src="../app/order/execute_order_add_help_add.js"></script>
		<script type="text/javascript" src="../app/order/execute_order_add_help_delete.js"></script>
		<script type="text/javascript" src="../app/order/execute_order_add_help_init.js"></script>
		<script type="text/javascript" src="../app/order/execute_order_add_help_msn.js"></script>
		<script type="text/javascript" src="../app/order/execute_order_orderinfo.js"></script>
		<script type="text/javascript" src="../app/order/execute_order_save.js"></script>
		<script type="text/javascript" src="../app/order/execute_order_send_mail.js"></script>
		<script type="text/javascript" src="../app/order/execute_order_send_problem.js"></script>
		
		<script src="../js/bootstrap3-typeahead.js"></script><!--目的地-->
		<script src="../app/order/destination.js" charset="utf-8"></script><!--目的地-->
		<script src="../js/plugins/pace/pace.min.js"></script>


	</body>

</html>