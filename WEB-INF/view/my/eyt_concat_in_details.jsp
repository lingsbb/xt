<!--
	模块作者：关宇
	创建日期：2017-01-16
	模块功能：内部联系人详情
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
							<h5>内部联系人详情</h5>
							<div class="ibox-tools">
							</div>
						</div>
						<div class="ibox-content">
							<form class="form-horizontal m-t" id="signupForm">
								<div class="form-group">
									<label class="col-sm-3 control-label">姓名：</label>
									<div class="col-sm-8">
										<label id="in_cn" name="in_cn" class="col-sm-3 control-label">无</label>
									</div>
								</div>
								<div class="form-group">
									<label class="col-sm-3 control-label">昵称：</label>
									<div class="col-sm-8">
										<label id="in_nickname" name="in_nickname" class="col-sm-3 control-label">无</label>
									</div>
								</div>
								<div class="form-group">
									<label class="col-sm-3 control-label">邮箱：</label>
									<div class="col-sm-8">
										<label id="in_email" name="in_email" class="col-sm-3 control-label">无</label>
									</div>
								</div>
								<div class="form-group">
									<label class="col-sm-3 control-label">手机：</label>
									<div class="col-sm-8">
										<label id="in_phone" name="in_phone" class="col-sm-3 control-label">无</label>
									</div>
								</div>
								<div class="form-group">
									<label class="col-sm-3 control-label">企业：</label>
									<div class="col-sm-8">
										<label id="in_qiye" name="in_qiye" class="col-sm-3 control-label">无</label>
									</div>
								</div>
								<div class="form-group">
									<label class="col-sm-3 control-label">部门：</label>
									<div class="col-sm-8">
										<label id="in_department" name="in_department" class="col-sm-3 control-label">无</label>
									</div>
								</div>
								<div class="form-group">
									<label class="col-sm-3 control-label">QQ：</label>
									<div class="col-sm-8">
										<label id="in_QQ" name="in_QQ" class="col-sm-3 control-label">无</label>
									</div>
								</div>
								<div class="form-group">
									<label class="col-sm-3 control-label">是否离职：</label>
									<div class="col-sm-8">
										<label id="in_isout" name="in_isout" class="col-sm-3 control-label">无</label>
									</div>
								</div>
								<div class="form-group">
									<div class="col-sm-8 col-sm-offset-3">
										<a class="btn btn-primary" href="eyt_concat_in.html" target="_self">返回</a>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>

		<script src="../js/jquery.min.js"></script>
		<script src="../ie_compatibility/placeholderfriend.js"></script>
		<script src="../js/bootstrap.min.js?v=3.3.5"></script>
		<script src="../js/content.min.js?v=1.0.0"></script>
		<script src="../js/plugins/validate/jquery.validate.min.js"></script>
		<script src="../js/plugins/validate/messages_zh.min.js"></script>
		<!-- <script src="../js/demo/form-validate-demo.min.js"></script> -->

		<script type="text/javascript" src="../app/common/common.js"></script>
		<script type="text/javascript" src="../app/my/eyt_concat_in_details_c.js"></script>
		<script type="text/javascript" src="../app/my/eyt_concat_in_details_m.js"></script>
		<script type="text/javascript" src="../app/my/eyt_concat_in_details_v.js"></script>
		<script type="text/javascript" src="../app/my/eyt_concat_in_details_check.js"></script>

	</body>

</html>