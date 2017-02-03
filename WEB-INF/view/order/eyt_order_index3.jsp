<!--
	模块作者：莫胜男
	创建日期：2017-01-16
	模块功能：归档订单
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
		<!--<link href="../css/font-awesome.min.css?v=4.4.0" rel="stylesheet">-->

		<link href="../css/animate.min.css" rel="stylesheet">
		<link href="../css/style.min.css?v=4.0.0" rel="stylesheet">
		<base target="_blank">

		<script language="javascript" type="text/javascript" src="../js/My97DatePicker/WdatePicker.js"></script>
		<style type="text/css">
			.tabs {
				width: 99%;
				float: none;
				list-style: none;
				position: relative;
				margin: 10px 0 0 0px;
				text-align: left;
			}
			
			.tabs li {
				float: left;
				display: block;
			}
			
			.tabs input[type="radio"] {
				position: absolute;
				top: -9999px;
				left: -9999px;
			}
			
			.tabs label {
				display: block;
				padding: 14px 21px;
				border-radius: 2px 2px 0 0;
				font-size: 12px;
				font-weight: normal;
				text-transform: uppercase;
				background: #f3f3f4;
				cursor: pointer;
				position: relative;
				top: 4px;
				-webkit-transition: all 0.2s ease-in-out;
				-moz-transition: all 0.2s ease-in-out;
				-o-transition: all 0.2s ease-in-out;
				transition: all 0.2s ease-in-out;
			}
			
			.tabs label:hover {
				background: #eee;
			}
			
			.tabs .tab-content {
				z-index: 2;
				display: none;
				overflow: hidden;
				width: 100%;
				font-size: 17px;
				line-height: 25px;
				padding: 25px;
				margin-top: 0;
				position: absolute;
				left: 0;
				background: #fff;
			}
			
			.tabs [id^="tab"]:checked+ label {
				top: 0;
				padding-top: 17px;
				background: #fff;
			}
			
			.tabs [id^="tab"]:checked~ [id^="tab-content"] {
				display: block;
			}
		</style>
	</head>

	<body class="gray-bg">

		<!-- loading 窗口 -->
		<div class="modal fade" id="gloadingForm" tabindex="-1" role="dialog">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<!-- 
			        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
			       	 -->
						<h4 class="modal-title text-center">请稍后</h4>
					</div>
					<div class="modal-body">
						<!--  
			        <p>One fine body&hellip;</p>
			        -->
						<div class="loader text-center">
							<div class="loader-inner line-scale-pulse-out-rapid">
								<div></div>
								<div></div>
								<div></div>
								<div></div>
								<div></div>
							</div>
						</div>
					</div>
					<!--  
		      <div class="modal-footer">
		        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
		        <button type="button" class="btn btn-primary">Save changes</button>
		      </div>
		      -->
				</div>
				<!-- /.modal-content -->
			</div>
			<!-- /.modal-dialog -->
		</div>
		<!-- /.modal -->

		<div class="wrapper  animated fadeInRight">
			<div class="row">
				<div class="col-sm-12">
					<div class="ibox" style="height: 1300px;">
						<div class="ibox-content" style="height: 1300px;">
							<div class="clients-list" style="height: 1300px;">
								<ul class="nav nav-tabs">
									<span class="pull-right small text-muted"></span>
									<ul class="nav nav-tabs">
										<span class="pull-right small text-muted"></span>
										<li class="active">
											<a data-toggle="tab" data='{"index":1,"state":6}' onclick="query()"><i class="fa fa-user"></i> 全部归档订单
												<!-- (<span id="count2"></span>) --></a>
										</li>
										<!--   <li class=""><a data-toggle="tab" data='{"index":2,"state":3}' onclick="query(this,false)" ><i class="fa fa-briefcase"></i> 订舱(<span id="count3"></span>)</a>
                                	 
                                </li>
                                <li class=""><a data-toggle="tab" data='{"index":3,"state":4}' onclick="query(this,false)" ><i class="fa fa-briefcase"></i>  报关中(<span id="count4"></span>)</a>
                                	
                                </li>
                                 <li class=""><a data-toggle="tab" data='{"index":4,"state":5}' onclick="query(this,false)" ><i class="fa fa-user"></i> 运输中(<span id="count5"></span>)</a>
                                </li>
                                <li class=""><a data-toggle="tab" data='{"index":5,"state":6}' onclick="query(this,false)" ><i class="fa fa-briefcase"></i> 已完结(<span id="count6"></span>)</a>
                                	
                            
                                 <li class=""><a data-toggle="tab" data='{"index":6,"state":7}' onclick="query(this,false)" ><i class="fa fa-user"></i> 我执行的订单</a>
                                </li>
                                <li class=""><a data-toggle="tab" data='{"index":7,"state":8}' onclick="query(this,false)" ><i class="fa fa-briefcase"></i> 我指派的订单</a>
                                	
                                </li>
                                <li class=""><a data-toggle="tab" data='{"index":8,"state":9}' onclick="query(this,false)" ><i class="fa fa-briefcase"></i> 我关注的订单</a>
                                	
                                </li>
                                </li>
                                <li class=""><a data-toggle="tab" data='{"index":9,"state":1}' onclick="query(this,false)" ><i class="fa fa-briefcase"></i> 全部</a>
                                	
                                </li> -->
									</ul>
								</ul>
								<div class="tab-content">

									<div id="tab-1" class="tab-pane active">
										<div class="ibox">
											<div class="ibox-title">

												<div class=" tab-content ">
													<p>
														<label>业务号：<input id="txtyewu" type="search" class="form-control input-sm" /></label>&nbsp;&nbsp;
														<label>箱号：<input id="txtxianghao" type="search" class="form-control input-sm" /></label>&nbsp;&nbsp;
														<label>发起开始时间：<input id="txtstart" type="search" class="form-control input-sm Wdate" aria-controls="DataTables_Table_0" readonly="true" style="height: 30px;background-color: white;border-color: #EEEEEE;" onfocus="WdatePicker({skin:'whyGreen'})"/></label>&nbsp;&nbsp;
														<label>发起结束时间：<input id="txtend" type="search" class="form-control input-sm Wdate" aria-controls="DataTables_Table_0" readonly="true" style="height: 30px;background-color: white;border-color: #EEEEEE;" onfocus="WdatePicker({skin:'whyGreen'})"/></label>
														<button id="btnQuery" class="btn btn-success pull-right">查询</button>
													</p>
												</div>
											</div>
											<div class="ibox-content">

												<div class="project-list">

													<!-- <table class="table table-hover">-->
													<table class="table table-striped table-bordered table-hover dataTables-example">
														<thead>
															<tr>
																<th></th>
																<th>订单编号</th>
																<th>订单名称</th>
																<th>客户名称</th>
																<th>运输方式</th>
																<th>业务号</th>
																<th>创建人</th>
																<th>起运地</th>
																<th>目的地</th>
																<th>报关地</th>
																<th>创建时间</th>
																<!--   <th>详情</th> -->
															</tr>
														</thead>
														<tbody id="tbody-1">

														</tbody>
													</table>

													<div class="row " style="margin-top: -20px">
														<div id="div_page_count" class="col-sm-6" style="padding-top:15px"> 显示 01 到 05 项，共 07 项
														</div>
														<div class="col-sm-6 pull-right" style="float:right;padding-right:0px;">
															<!-- 分页控件 -->
															<ul id='div_paginator' style="cursor:hand;float:right;padding-right:15px"></ul>
														</div>

													</div>
												</div>
											</div>
										</div>
									</div>

									<!--       <div id="tab-1" class="tab-pane active">
		                                    <div class="ibox">
							                    <div class="ibox-title">
							                        
							                        <div class=" tab-content ">
									                        <p>
									                        <label>业务号1：<input id="txtyewu" type="search" class="form-control input-sm" /></label>&nbsp;&nbsp;
							                        	    <label >箱号：<input id="txtxianghao" type="search" class="form-control input-sm" /></label>&nbsp;&nbsp;
							                        	     <label>发起开始时间：<input id="txtstart" type="search" class="form-control input-sm Wdate" aria-controls="DataTables_Table_0" readonly="true" style="height: 30px;background-color: white;border-color: #EEEEEE;" onfocus="WdatePicker({skin:'whyGreen'})"/></label>&nbsp;&nbsp;
															<label>发起结束时间：<input id="txtend" type="search" class="form-control input-sm Wdate" aria-controls="DataTables_Table_0" readonly="true" style="height: 30px;background-color: white;border-color: #EEEEEE;" onfocus="WdatePicker({skin:'whyGreen'})"/></label>
							                               <button id="btnQuery" class="btn btn-success pull-right" >查询</button>
									                       </p>							                       
							                        </div>
							                    </div>
							                    <div class="ibox-content">							             
							
							                        <div class="project-list">
							
							                       <table class="table table-hover">
							                       <table class="table table-striped table-bordered table-hover dataTables-example">
                            <thead>
                                <tr>
                                	 <th></th>
                                    <th>订单编号</th>
                                    <th>订单名称</th>
                                    <th>集装箱号</th>
                                    <th>业务号</th>
                                    <th>创建人</th>
                                    <th>创建时间</th>
                                    <th>详情</th>
                                </tr>
                            </thead>
                            <tbody id="tbody-1">
                             
                            </tbody>
                        </table>
                        
                         <div class="row "  style="margin-top: -20px">
						<div  id="div_page_count"   class="col-sm-6" style="padding-top:15px">
							显示 01 到 05 项，共 07 项
						</div>
						<div class="col-sm-6 pull-right"  style="float:right;padding-right:0px;">
							分页控件
							<ul id='div_paginator' 	style="cursor:hand;float:right;padding-right:15px"></ul>
						</div>
						
						</div>
							                </div>
							            </div>
							        </div>
		                        </div>  
		            
		            	 -->
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<script src="../js/jquery.min.js"></script>
		<script src="../js/bootstrap.min.js?v=3.3.5"></script>
		<script src="../js/plugins/slimscroll/jquery.slimscroll.min.js"></script>
		<script src="../js/content.min.js?v=1.0.0"></script>
		<script src="../js/plugins/bootstrap-paginator/bootstrap-paginator.js"></script>
		<script src="../js/plugins/bootstrap-paginator/bootstrap-paginator-common.js"></script>
		<script src="../app/common/common.js" type="text/javascript"></script>
		<script src="../app/common/cookies.js" type="text/javascript"></script>
		<script src="../app/order/eyt_order_index3_c.js" charset="utf-8"></script>
		<script src="../app/order/eyt_order_index3_m.js" charset="utf-8"></script>
		<script src="../app/order/eyt_order_index3_v.js" charset="utf-8"></script>

		<!-- <script type="text/javascript" src="http://tajs.qq.com/stats?sId=9051096" charset="UTF-8"></script> -->
	</body>

</html>