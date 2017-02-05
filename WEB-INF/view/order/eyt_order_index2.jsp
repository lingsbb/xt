<!--
	模块作者：莫胜男
	创建日期：2017-01-16
	模块功能：协同运单
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
		<link href="../css/style.min.css" rel="stylesheet">
		<base target="_blank">
		<link type="text/css" rel="stylesheet" href="../citys/css/start.css" />
		<link type="text/css" rel="stylesheet" href="../citys/css/css1.css" />
		<!--<link type="text/css" rel="stylesheet" href="../citys/css/css2.css" />-->
		<link type="text/css" rel="stylesheet" href="../citys/css/css3.css" />
		<!-- Allard -->
		<!--进度css-->
		<link rel="stylesheet" href="../css/fishBone.css" />
		<!--弹出框-->
		<link href="../css/core.css" type="text/css" rel="stylesheet"/>
		


		<script language="javascript" type="text/javascript" src="../js/My97DatePicker/WdatePicker.js"></script>

		<link type="text/css" rel="stylesheet" href="../css/order_index/css/jquery.pagewalkthrough.css" />
		<style type="text/css">
			#walkthrough-content {
				display: none
			}
			
			#walkthrough-content h3 {
				height: 30px;
				line-height: 30px
			}
			
			#walkthrough-content p {
				line-height: 28px
			}
			
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
			
			.error {
				color: #a94442;
				font-weight: 400;
				/*font-style: italic;*/
			}

			.imgboxshadow{
    				-webkit-animation:myani 1s infinite ease;
      

  			 }
			@-webkit-keyframes myani{
				0%{
					opacity: 0.1;
					-webkit-box-shadow: 0 0 22px rgba(0, 0, 255, 1);
				
				}

			
				100%{
			opacity: 1;
				}
			}
			.firefoxbutton{
				margin-top:43px;
				overflow:hidden;
			}
			.dropdown-submenu {
            position: relative;
        }
        .dropdown-submenu > .dropdown-menu {
            top: 0;
            left: 100%;
            margin-top: -6px;
            margin-left: -1px;
            -webkit-border-radius: 0 6px 6px 6px;
            -moz-border-radius: 0 6px 6px;
            border-radius: 0 6px 6px 6px;
        }
        .dropdown-submenu:hover > .dropdown-menu {
            display: block;
        }
        .dropdown-submenu > a:after {
            display: block;
            content: " ";
            float: right;
            width: 0;
            height: 0;
            border-color: transparent;
            border-style: solid;
            border-width: 5px 0 5px 5px;
            border-left-color: #ccc;
            margin-top: 5px;
            margin-right: -10px;
        }
        .dropdown-submenu:hover > a:after {
            border-left-color: #fff;
        }
        .dropdown-submenu.pull-left {
            float: none;
        }
        .dropdown-submenu.pull-left > .dropdown-menu {
            left: -100%;
            margin-left: 10px;
            -webkit-border-radius: 6px 0 6px 6px;
            -moz-border-radius: 6px 0 6px 6px;
            border-radius: 6px 0 6px 6px;
        }

		</style>
	</head>

	<body class="gray-bg">
		<div class="wrapper  animated fadeInRight">
			<div class="row">
				<div class="col-sm-12">
					<div class="ibox" style="height: 1300px;">
						<div class="ibox-content" style="height: 1300px;">
							<div class="clients-list" style="height: 1300px;">
								<ul class="nav nav-tabs">
									<span class="pull-right small text-muted"></span>
									<ul id="ulStatus" class="nav nav-tabs">
										<span class="pull-right small text-muted"></span>

										<!--固定代码，我执行，我指派，我关注，全部  -->
										<!--    <li class=""><a data-toggle="tab" data='{"index":1011,"state":1011}' onclick="query(this,false)" ><i class="fa fa-user"></i> 我执行的运单</a>
	                                </li>
	                          
	                                <li class=""><a data-toggle="tab" data='{"index":1012,"state":1012}' onclick="query(this,false)" ><i class="fa fa-briefcase"></i> 我指派的运单</a>
	                                	
	                                </li>
	                                <li class=""><a data-toggle="tab" data='{"index":1013,"state":1013}' onclick="query(this,false)" ><i class="fa fa-briefcase"></i> 我关注的运单</a>
	                                	
	                                </li>
	                                </li>-->
										  <li class=""><a data-toggle="tab" data='{"index":1040,"state":1040}' onclick="query(this,false)" ><i class="fa fa-briefcase"></i> 全部</a>
	                                	
	                                	</li> 
										<li class="">
											<a data-toggle="tab" data='{"index":1020,"state":1020}' onclick="query(this,false)"><i class="fa fa-briefcase"></i> 全部(未处理)</a>

										</li>
										<li class="">
											<a data-toggle="tab" data='{"index":1030,"state":1030}' onclick="query(this,false)"><i class="fa fa-briefcase"></i> 全部(已处理)</a>

										</li>
									</ul>
								</ul>
								<div class="tab-content">

									<div id="tab-1" class="tab-pane active">
										<div class="ibox">
											<div class="ibox-title">

												<div class=" tab-content ">
													<p>
														<!--<label>业务号：<input id="txtyewu" type="search" class="form-control input-sm" /></label>&nbsp;&nbsp;
														<label>箱号：<input id="txtxianghao" type="search" class="form-control input-sm" /></label>&nbsp;&nbsp;-->
														<label>发起开始时间：<input id="txtstart" type="search" class="form-control input-sm Wdate" aria-controls="DataTables_Table_0" readonly="true" style="height: 30px;background-color: white;border-color: #EEEEEE;" onfocus="WdatePicker({skin:'whyGreen'})"/></label>&nbsp;&nbsp;
														<label>发起结束时间：<input id="txtend" type="search" class="form-control input-sm Wdate" aria-controls="DataTables_Table_0" readonly="true" style="height: 30px;background-color: white;border-color: #EEEEEE;" onfocus="WdatePicker({skin:'whyGreen'})"/></label>
														<button id="btnQuery" class="btn btn-success "  style="-moz-margin:120px" >查询</button>
														<label style="width:3px;"></label>
														<!-- 	 <div id="DivCreate" style="width:140px;height:70px;"> -->
														<!-- <button  id="jia" style="width:100px;height:45px;">	</button> -->
														<label><button id="btnCreate" class="btn btn-warning">发起新协同</button></label>

														<!--     	</div> -->
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
																<th>系统编号</th>
																<th>运单名称</th>
																<th>客户名称</th>
																<th>运输方式</th>
																<th>业务号</th>
																<th>创建人</th>
																<th>起运地</th>
																<th>目的地</th>
																<th>报关地</th>
																<th>创建时间</th>
																<!--<th id="orderState" style="display:none;">运单状态</th>-->
																<th>详情</th>
															</tr>
														</thead>
														<tbody id="tbody-1">

														</tbody>
													</table>

													<div class="row " style="margin-top: -20px">
														<div id="div_page_count" class="col-sm-6" style="padding-top:15px;display:none;"> 显示 01 到 05 项，共 07 项
														</div>
														<div class="col-sm-6 pull-right" style="float:right;padding-right:0px;">
															<!-- 分页控件 -->
															<ul id='div_paginator' style="cursor:hand;float:right;padding-right:15px;display:none;"></ul>
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
                                    <th>运单编号</th>
                                    <th>运单名称</th>
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
<!--
						 	<div class="container">
			<div class="fishBone" />
		</div>

-->

								</div>

							</div>
						</div>
					</div>
				</div>
			</div>


			



		</div>
		


		<div class="modal inmodal fade" id="modForm" tabindex="-1" role="dialog" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content" style="width:540px">
					<div class="modal-header" style="height: 40px;padding-top: 10px;">
						<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
						<span class="modal-title" style="font-size: 17px;font-weight: bold;">请填写运单信息</span>
					</div>
					<div class="modal-body" style="padding:20px 100px 10px 60px">
						<!--     <form  id="signupForm" method="post" class="form-horizontal" action="">
									    <div class="form-group">
						            		<div class="row">
									    		<label  class="col-sm-3" style="margin-left:-9px;"><font color=red>*</font>运单名称:</label>
									    		<div class="col-sm-9"><input id="txtnewname" name="notnull"  class="form-control" type="notnull" name="notnull" placeholder="请输入名称"  required></input>
									    		</div>
									    	</div>
									    	<div class="row">
									    		<label class="col-sm-3" style="text-align: right;padding-top: 5px"><font color=red>*</font>箱号:</label>
									    		<div class="col-sm-9"><input id="txtnewxianghao" name="notnull"  class="form-control" type="notnull" name="notnull" placeholder="请输入箱号"  required></input>
									    		</div>
									    	</div>
									    	
									    	<div class="row">
									    		<label class="col-sm-3" style="text-align: right;padding-top: 5px">业务号:</label>
									    		<div class="col-sm-9"><input id="txtnewyewu" name="txtnewyewu"  class="form-control" type="text"  placeholder="请输入业务号"></input>
									    		</div>
									    	</div>
									    </div>
									    	
		    							<div class="form-group">
											<div class="col-sm-9 col-sm-offset-4">
												<button type="submit" class="btn btn-info" name="signup" value="提交">添加</button>
												<a class="btn btn-primary"  href="eyt_concat_in.html" target="_self">返回</a>
											</div>
								
										</div>
										</form>  -->
						<!--<form  id="signupForm" method="post" class="form-horizontal" action="">
							<div class="form-group">
								<label class="col-sm-4 control-label" style="width:100px;margin-top:5px;" for="zzz"> <font color="red">*</font> 运单名称</label>
								<!--<div class="col-sm-6" style="width:250px;margin-top:12px;">	
									<input type="text" class="form-control" id="txtnewname" placeholder="请输入名称" />
								</div>-->
						<!--<label class="col-sm-4 control-label" style="width:100px;margin-top:5px;" for="zzz"> <font color="red">*</font> 客户名称</label>
								<!--<div class="col-sm-6" style="width:250px;margin-top:12px;">	
									<input type="text" class="form-control" id="txtcustomername" placeholder="请输入客户名称" />
								</div>-->
						<!--<label class="col-sm-4 control-label" style="width:100px;margin-top:5px;"  for="email">业务号</label>
								<div class="col-sm-6" style="width:250px;margin-top:12px;">	
									<input  class="form-control" id="txtnewyewu" name="txtnewyewu" placeholder="请输入业务号" />-->
						<!--</div>-->

						<!--</div>-->

						<!--</form> -->
						<form id="signupForm" method="post" class="form-horizontal" action="">
							<div class="form-group">
								<label class="col-sm-4 control-label" for="txtnewname"><font color="red">*</font>运单名称</label>
								<div class="col-sm-8">
									<input type="text" class="form-control" placeholder="请输入好记的名称" id="txtnewname" name="txtnewname" />
									<!--id="txtnewname" name="txtnewname"-->
								</div>
							</div>
							<div class="form-group">
								<label class="col-sm-4 control-label">客户名称(可选)</label>
								<div class="col-sm-8">
									<input type="text" id="txtcustomername" class="form-control" placeholder="请输入客户名称">
								</div>
							</div>
							<div class="form-group">
								<label class="col-sm-4 control-label">业务号(可选)</label>
								<div class="col-sm-8">
									<input type="text" id="txtnewyewu" class="form-control" placeholder="请输入业务号">
								</div>
							</div>
							<div class="form-group">
								<ul id="list1">
									<li id="summary-stock1">
										<div class="dd">
											<div id="store-selector1" style="z-index:9999">
												<div class="selevent1">
													<div class="form-group" style="margin-left: 14px;margin-top: 0px ">
														<!--Allard-->
														<label class="col-sm-4 control-label"><font color="red">*</font>起运地</label>
														<div class="col-sm-8">
															<!--style="margin-left: 10px;width:215px "-->
															<input id="wlname1" style="margin-left: 5px;width:242px; " type="search" oninput="OnInput()" class="form-control" onpropchange="OnPropChanged()" />
														</div>
													</div>
													<b></b>
												</div>
												<div onclick="locationPanelToggle1(false)" class="close"></div>
											</div>
										</div>
									</li>
								</ul>
							</div>

							<div class="form-group">		<!--//style="top: 10px;"	-->
								<label class="col-sm-4 control-label" style="margin-top:10px;"><font color="red">*</font>目的地</label>
								<input id="txtIn" type="search" style="margin-left: 150px;width:242px; margin-top: 10px;" class="form-control input-sm" data-provide="typeahead" data-items="4" onpropchange="OnPropChanged()"  />												
							</div>
							<div class="form-group" style="margin-top: 18px;">
								<label for="firstname" class="col-sm-4 control-label"><font color="red">*</font>报关地&nbsp;</label>
								<div class="col-sm-8">
									<select class="form-control" id="txtbgcity" name="txtbgcity">
									</select>
								</div>
							</div>

							<div class="form-group">
								<label for="firstname" class="col-sm-4 control-label"><font color="red">*</font>运输方式</label>
								<div class="col-sm-8">
									<a id="dLabel" role="button" data-toggle="dropdown" class="form-control" data-target="#"
										>
											请选择 
										
									<span class="caret pull-right" style="margin-top:7px; "></span>									</a>
										<ul class="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu" style="margin-left: 15px;">
											<li class="dropdown-submenu">
												<a  tabindex="-1" >全铁运输</a>
												<ul class="dropdown-menu">
													<li><a tabindex="-1"  data="1" onclick="getTranstype(this)">集装箱</a></li>
													<li><a tabindex="-1" data="2" onclick="getTranstype(this)">车 皮</a></li>
												</ul>
											</li>
											<li class="dropdown-submenu">
												<a  tabindex="-1" >公路汽运</a>
												<ul class="dropdown-menu">
													<li id="11"><a tabindex="-1"  data="3" onclick="getTranstype(this)">整车</a></li>
													<li><a tabindex="-1" data="4" onclick="getTranstype(this)">拼车</a></li>
												</ul>
											</li>
											<li class="dropdown-submenu">
												<a tabindex="-1" >多式联运</a>
												<ul class="dropdown-menu">
													<li><a tabindex="-1"  data="5" onclick="getTranstype(this)">海运转铁路</a></li>
													<li><a tabindex="-1"  data="6" onclick="getTranstype(this)">公路转铁路</a></li>
													<li><a tabindex="-1"  data="7" onclick="getTranstype(this)">汽运转空运</a></li>
													<li><a tabindex="-1"  data="8" onclick="getTranstype(this)">海运转汽运</a></li>
													<li><a tabindex="-1"  data="9" onclick="getTranstype(this)">海铁汽联运</a></li>
													
												</ul>
											</li>
										</ul>



								</div>
							</div>
							<div class="col-sm-9 col-sm-offset-4" style="margin-top:30px;margin-left:95px"> &nbsp;&nbsp;
								<button type="submit" class="btn btn-info" name="signup" value="提交">添加</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								<a class="btn btn-primary" href="eyt_order_index2" target="_self">返回</a>
							</div>

						</form>
					</div>
					<div class="modal-footer" style="padding:10px">

					</div>
				</div>
			</div>
		</div>

		<div id="walkthrough-content">
			<div id="walkthrough-1">
				<h3>欢迎首次来到运易达 跨境协同服务平台</h3>

				<p>welcome</p>
				<p>点击下一步了解更多...</p>
			</div>

			<div id="walkthrough-2">
				点击这里<br>可以发起新协同！
			</div>
			<!-- 
    <div id="walkthrough-3"> 
        点击这里可以直接看插件的使用教程。 
    </div> 
 
    <div id="walkthrough-4"> 
        点击这里去下载源码，免费的哦。。 
    </div> 
 
    <div id="walkthrough-5"> 
        这是页脚和版权信息。 
    </div>  -->
		</div>





		<!--进度条-->
	<!--<div class="form-group">
			<label class="col-sm-3 control-label">QQ：</label>
				<div class="col-sm-8">
				<input id="info_QQ" name="info_QQ" class="form-control" readonly="readonly" value="无" />
				</div>
			<a id="btnUpdateQQ" name="btnUpdateQQ" class="btn btn-info" onclick="btnUpdateQQ_click()">修改</a>

	</div>-->

	<!-- 模态框（Modal） -->
	<!--<div class="modal fade" id="newQQ" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog" style="width:90%">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
					<span class="modal-title" style="font-size: 17px;font-weight: bold;">运单进度</span>
				</div>
				<div class="modal-body" ><div class="fishBone" ></div></div>
			</div><!-- /.modal-content -->
		</div><!-- /.modal -->
	</div>-->

 



		<script src="../js/jquery.min.js"></script>

		<script type="text/javascript" src="../js/jquery.pagewalkthrough.min.js"></script>
		<script src="../js/bootstrap.min.js?v=3.3.5"></script>
		<script src="../js/plugins/slimscroll/jquery.slimscroll.min.js"></script>
		<script src="../js/content.min.js?v=1.0.0"></script>
		<script src="../js/plugins/bootstrap-paginator/bootstrap-paginator.js"></script>
		<script src="../js/plugins/bootstrap-paginator/bootstrap-paginator-common.js"></script>
		<!--鱼骨线-->
		<!--<script type="text/javascript" src="../js/fishBone.js"></script>
		<script type="text/javascript" src="../js/jquery.SuperSlide.2.1.1.js"></script>-->
		
		<script src="../app/common/common.js" type="text/javascript"></script>
		<script src="../app/common/cookies.js" type="text/javascript"></script>
		<script src="../app/order/eyt_order_index2_c.js" charset="utf-8"></script>
		<script src="../app/order/eyt_order_index2_m.js" charset="utf-8"></script>
		<script src="../app/order/eyt_order_index2_v.js" charset="utf-8"></script>
		<script src="../app/order/destination.js" charset="utf-8"></script><!--目的地-->
		<script type="text/javascript" src="../app/my/jquery-validation-1.15.1/dist/jquery.validate.js"></script>
		<script src="../app/order/index2_create_order_check.js" charset="utf-8"></script>
		<script src="../app/order/index2_create_order_c.js" charset="utf-8"></script>
		<script src="../app/order/index2_create_order_m.js" charset="utf-8"></script>
		<script src="../app/order/index2_create_order_v.js" charset="utf-8"></script>

		<script src="../js/bootstrap3-typeahead.js"></script>
		<!--<script src="../js/bootstrap3-typeahead.js"></script>-->
		<script src="../citys/js/location1.js" charset="utf-8"></script>
		<!--<script src="../citys/js/location2.js" charset="utf-8"></script>-->
		<script src="../citys/js/location3.js" charset="utf-8"></script>
		<!-- Allard -->

		<script>
			$(function() {

				$("#example_left").popover({placement:'left'});
				$(".full-height-scroll").slimScroll({
					height: "100%"
				})
			});
		</script>
		<!-- <script type="text/javascript" src="http://tajs.qq.com/stats?sId=9051096" charset="UTF-8"></script> -->

	</body>

</html>