<!--
	模块作者：关宇
	创建日期：2017-01-16
	模块功能：我的个人信息
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
		<link rel="stylesheet" type="text/css" href="../app/my/gloading/loaders.css">

	</head>

	<body class="gray-bg">

		<div class="wrapper wrapper-content animated fadeInRight">
			<div class="row">
				<div class="col-sm-12">
					<div class="ibox float-e-margins">
						<div class="ibox-title">
							<h5>个人信息</h5>
							<div class="ibox-tools">
								<!--<button id="btnUpdatePhoneInfo" name="btnUpdatePhoneInfo" class=" btn btn-info btn-xs">修改手机</button>
								<button id="btnUpdatePasswordInfo" name="btnUpdatePasswordInfo" class=" btn btn-info btn-xs">修改密码</button>-->
							</div>
						</div>
						<div class="ibox-content">
							<div class="form-horizontal m-t" id="signupForm">
								<!-- 原来是form -->
								<!--  
                            <div class="form-group">
                                <label class="col-sm-3 control-label">账号：</label>
                                <div class="col-sm-8">
                                	<input  id="info_name"  name="info_name"  class="form-control"  readonly="readonly" value="无"/>
                                </div>
                            </div>
                          -->
								<div class="form-group">
									<label class="col-sm-3 control-label">邮箱：</label>
									<div class="col-sm-8">
										<input id="info_email" name="info_email" class="form-control" readonly="readonly" value="无" />
									</div>
								</div>

								<div class="form-group">
									<label class="col-sm-3 control-label">姓名：</label>
									<div class="col-sm-8">
										<input id="info_cn" name="info_cn" class="form-control" readonly="readonly" value="无" />
									</div>
									<button id="btnUpdateCn" name="btnUpdateCn" class="btn btn-info">修改</button>
								</div>

								<div class="form-group">
									<label class="col-sm-3 control-label">昵称：</label>
									<div class="col-sm-8">
										<input id="info_nickname" name="info_nickname" class="form-control" readonly="readonly" value="无" />
									</div>
									<button id="btnUpdateNickname" name="btnUpdateNickname" class="btn btn-info">修改</button>
								</div>

								<div class="form-group">
									<label class="col-sm-3 control-label">手机：</label>
									<div class="col-sm-8">
										<input id="info_phone" name="info_phone" class="form-control" readonly="readonly" value="无" />
									</div>

								</div>

								<div class="form-group">
									<label class="col-sm-3 control-label">企业：</label>
									<div class="col-sm-8">
										<input id="info_qiye" name="info_qiye" class="form-control" readonly="readonly" value="无" />
									</div>
									<button id="btnUpdateQiye" name="btnUpdateQiye" class="btn btn-info">修改</button>
								</div>

								<div class="form-group">
									<label class="col-sm-3 control-label">部门：</label>
									<div class="col-sm-8">
										<input id="info_department" name="info_department" class="form-control" readonly="readonly" value="无" />
									</div>
									<button id="btnUpdateDepartment" name="btnUpdateDepartment" class="btn btn-info">修改</button>
								</div>

								<div class="form-group">
									<label class="col-sm-3 control-label">QQ：</label>
									<div class="col-sm-8">
										<input id="info_QQ" name="info_QQ" class="form-control" readonly="readonly" value="无" />
									</div>
									<a id="btnUpdateQQ" name="btnUpdateQQ" class="btn btn-info">修改</a>

								</div>

								<div class="form-group">
									<div class="col-sm-8 col-sm-offset-3">

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- dialog -->

		<div class="modal inmodal fade" id="newNickname" tabindex="-1" role="dialog">
			<div class="modal-dialog ">
				<div class="modal-content">
					<div class="modal-header" style="height: 40px;padding-top: 10px;">
						<button type="button" class="close" data-dismiss="modal">
							<span aria-hidden="true">&times;</span>
							<span class="sr-only">Close</span>
						</button>
						<span class="modal-title" style="font-size: 17px;font-weight: bold;">修改昵称</span>
					</div>
					<div class="modal-body">
						<form id="updateNicknameForm" method="post" class="form-horizontal" action="">
							<div class="form-group">
								<label class="col-sm-4 control-label" for="textNewNickname">新昵称：</label>
								<div class="col-sm-5">
									<!-- <label for="email">	请输入正确的邮箱格式！</label>-->
									<input type="text" class="form-control" id="textNewNickname" name="textNewNickname" placeholder="请输入昵称" required/>
								</div>
							</div>
							<div class="form-group">
								<div class="col-sm-9 col-sm-offset-4">
									<button type="submit" class="btn btn-danger" id="btnUpdateNewNickname" name="btnUpdateNewNickname">确定</button>
									<button type="button" class="btn btn-success" data-dismiss="modal">取消</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>

			<div class="modal inmodal fade" id="newQQ" tabindex="-1" role="dialog">
				<div class="modal-dialog ">
					<div class="modal-content">
						<div class="modal-header" style="height: 40px;padding-top: 10px;">
							<button type="button" class="close" data-dismiss="modal">
							<span aria-hidden="true">&times;</span>
							<span class="sr-only">Close</span>
						</button>
							<span class="modal-title" style="font-size: 17px;font-weight: bold;">修改QQ号码</span>
						</div>
						<div class="modal-body">
							<form id="updateQQForm" method="post" class="form-horizontal" action="">
								<div class="form-group">
									<label class="col-sm-4 control-label" for="textNewQQ">新QQ号码：</label>
									<div class="col-sm-5">
										<!--  
									<label for="email">	请输入正确的邮箱格式！</label>-->
										<input type="text" class="form-control" id="textNewQQ" name="textNewQQ" placeholder="请输入QQ号码" required/>
									</div>
								</div>
								<div class="form-group">
									<div class="col-sm-9 col-sm-offset-4">
										<button type="submit" class="btn btn-danger" id="btnUpdateNewQQ" name="btnUpdateNewQQ">确定</button>
										<button type="button" class="btn btn-success" data-dismiss="modal">取消</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>

				<div class="modal inmodal fade" id="newCn" tabindex="-1" role="dialog">
					<div class="modal-dialog ">
						<div class="modal-content">
							<div class="modal-header" style="height: 40px;padding-top: 10px;">
								<button type="button" class="close" data-dismiss="modal">
							<span aria-hidden="true">&times;</span>
							<span class="sr-only">Close</span>
						</button>
								<span class="modal-title" style="font-size: 17px;font-weight: bold;">修改姓名</span>
							</div>
							<div class="modal-body">
								<form id="updateCnForm" method="post" class="form-horizontal" action="">
									<div class="form-group">
										<label class="col-sm-4 control-label" for="textNewCn">新姓名：</label>
										<div class="col-sm-5">
											<!-- <label for="email">	请输入正确的邮箱格式！</label>-->
											<input type="text" class="form-control" id="textNewCn" name="textNewCn" placeholder="请输入姓名" required/>
										</div>
									</div>
									<div class="form-group">
										<div class="col-sm-9 col-sm-offset-4">
											<button type="submit" class="btn btn-danger" id="btnUpdateNewCn" name="btnUpdateNewCn">确定</button>
											<button type="button" class="btn btn-success" data-dismiss="modal">取消</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>

					<div class="modal inmodal fade" id="newQiye" tabindex="-1" role="dialog">
						<div class="modal-dialog ">
							<div class="modal-content">
								<div class="modal-header" style="height: 40px;padding-top: 10px;">
									<button type="button" class="close" data-dismiss="modal">
							<span aria-hidden="true">&times;</span>
							<span class="sr-only">Close</span>
						</button>
									<span class="modal-title" style="font-size: 17px;font-weight: bold;">修改企业名称</span>
								</div>
								<div class="modal-body">
									<form id="updateQiyeForm" method="post" class="form-horizontal" action="">
										<div class="form-group">
											<label class="col-sm-4 control-label" for="textNewQiye">新企业名称：</label>
											<div class="col-sm-5">
												<!--  
									<label for="email">	请输入正确的邮箱格式！</label>-->
												<input type="text" class="form-control" id="textNewQiye" name="textNewQiye" placeholder="请输入企业名称" required/>
											</div>
										</div>
										<div class="form-group">
											<div class="col-sm-9 col-sm-offset-4">
												<button type="submit" class="btn btn-danger" id="btnUpdateNewQiye" name="btnUpdateNewQiye">确定</button>
												<button type="button" class="btn btn-success" data-dismiss="modal">取消</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>

						<div class="modal inmodal fade" id="newDepartment" tabindex="-1" role="dialog">
							<div class="modal-dialog ">
								<div class="modal-content">
									<div class="modal-header" style="height: 40px;padding-top: 10px;">
										<button type="button" class="close" data-dismiss="modal">
							<span aria-hidden="true">&times;</span>
							<span class="sr-only">Close</span>
						</button>
										<span class="modal-title" style="font-size: 17px;font-weight: bold;">修改部门</span>
									</div>
									<div class="modal-body">
										<form id="updateDepartmentForm" method="post" class="form-horizontal" action="">
											<div class="form-group">
												<label class="col-sm-4 control-label" for="textNewDepartment">新部门：</label>
												<div class="col-sm-5">
													<!-- <label for="email">	请输入正确的邮箱格式！</label>-->
													<input type="text" class="form-control" id="textNewDepartment" name="textNewDepartment" placeholder="请输入部门" required/>
												</div>
											</div>
											<div class="form-group">
												<div class="col-sm-9 col-sm-offset-4">
													<button type="submit" class="btn btn-danger" id="btnUpdateNewDepartment" name="btnUpdateNewDepartment">确定</button>
													<button type="button" class="btn btn-success" data-dismiss="modal">取消</button>
												</div>
											</div>
										</form>
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

							<script type="text/javascript" src="../app/my/eyt_concat_info_c.js"></script>
							<script type="text/javascript" src="../app/my/eyt_concat_info_check.js"></script>
							<script type="text/javascript" src="../app/my/eyt_concat_info_m.js"></script>
							<script type="text/javascript" src="../app/my/eyt_concat_info_v.js"></script>

	</body>

</html>