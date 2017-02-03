<!--
	模块作者：关宇
	创建日期：2017-01-16
	模块功能：外部联系人页面
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
		<!--
	    <link href="../css/font-awesome.min.css?v=4.4.0" rel="stylesheet">-->
		<link href="../css/animate.min.css" rel="stylesheet">
		<link href="../css/style.min.css?v=4.0.0" rel="stylesheet">
		<base target="_blank">
	</head>

	<body class="gray-bg">
		<div class="wrapper wrapper-content animated fadeInRight">
			<div class="row">
				<div class="col-sm-12">
					<div class="ibox float-e-margins">
						<div class="ibox-title">
							<h5>外部通讯录 <small></small></h5>
							<div class="ibox-tools">
								<button id="btnAddConcatOut" name="btnAddConcatOut" class=" btn btn-info btn-xs">添加</button>
							</div>
						</div>
						<div class="ibox-content">
							<table class="table table-striped table-bordered table-hover dataTables-example">
								<thead>
									<tr>
										<th>序号</th>
										<th style="display:none;">outid</th>
										<th style="display:none;">uid</th>
										<th>姓名</th>
										<th>电话</th>
										<th>邮箱</th>
										<th>操作</th>
									</tr>
								</thead>
								<tbody id="tab">

								</tbody>

							</table>
							<div class="row " style="margin-top: -20px">
								<div id="div_page_count" class="col-sm-6" style="padding-top:15px">
									显示 0 到 0 项，共 0 项
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
		</div>

		<div class="modal inmodal fade" id="modForm" tabindex="-1" role="dialog">
			<div class="modal-dialog ">
				<div class="modal-content">
					<div class="modal-header" style="height: 40px;padding-top: 10px;">
						<button type="button" class="close" data-dismiss="modal">
							<span aria-hidden="true">&times;</span>
							<span class="sr-only">Close</span>
						</button>
						<span class="modal-title" style="font-size: 17px;font-weight: bold;">删除提示</span>
					</div>
					<div class="modal-body">
						<label class="col-sm-4 control-label">确定要删除<span id="span_cn" style="color:red"></span>吗？</label>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-danger" id="btnSaveForm" name="btnSaveForm">确定</button>
						<button type="button" class="btn btn-success" data-dismiss="modal">取消</button>
					</div>
				</div>
			</div>
		</div>
	</body>

</html>

<script src="../js/jquery.min.js"></script>
<script src="../ie_compatibility/placeholderfriend.js"></script>
<script src="../js/bootstrap.min.js?v=3.3.5"></script>
<script src="../js/plugins/bootstrap-paginator/bootstrap-paginator.js"></script>
<script src="../js/plugins/bootstrap-paginator/bootstrap-paginator-common.js"></script>
<script src="../app/common/common.js" charset="utf-8"></script>
<script src="../app/common/cookies.js" charset="utf-8"></script>
<script type="text/javascript" src="../app/my/eyt_concat_out_c.js"></script>
<script type="text/javascript" src="../app/my/eyt_concat_out_m.js"></script>
<script type="text/javascript" src="../app/my/eyt_concat_out_v.js"></script>
<script type="text/javascript" src="../app/my/eyt_concat_out_check.js"></script>