<!--
	模块作者：关宇
	创建日期：2017-01-16
	模块功能：我的个人信息修改密码
-->
<%@page pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>

<head>

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>运易达跨境货代协同服务平台</title>

<meta name="description"
	content="H+是一个完全响应式，基于Bootstrap3最新版本开发的扁平化主题，她采用了主流的左右两栏式布局，使用了Html5+CSS3等现代技术">

<link rel="shortcut icon" href="favicon.ico">
<link href="../css/bootstrap.min.css?v=3.3.5" rel="stylesheet">
<!--
<link href="../css/font-awesome.min.css?v=4.4.0" rel="stylesheet">-->
<link href="../css/animate.min.css" rel="stylesheet">
<link href="../css/style.min.css?v=4.0.0" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="../app/my/gloading/loaders.css">
<base target="_blank">



</head>

<body class="gray-bg">
	<!-- loading 窗口 -->
	<div class="modal fade" id="gloadingForm" tabindex="-1" role="dialog" >
  		<div class="modal-dialog">
    		<div class="modal-content">
      			<div class="modal-header">
			      	<!-- 
			        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
			       	 -->
        			<h4 class="modal-title text-center" >请稍后</h4>
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
		    </div><!-- /.modal-content -->
		  </div><!-- /.modal-dialog -->
		</div><!-- /.modal -->



	<div class="wrapper wrapper-content animated fadeInRight">
		<div class="row">
			<div class="col-sm-12">
				<div class="ibox float-e-margins">
					<div class="ibox-title">
						<h5>修改密码</h5>
						<div class="ibox-tools"></div>
					</div>
					<div class="ibox-content">

						<form  id="upPasswordForm" method="post" class="form-horizontal" action="">
							<div class="form-group">
								<label class="col-sm-4 control-label" for="oldPasswordE">请输入原密码</label>
								<div class="col-sm-5">
									<input type="text" class="form-control" id="oldPasswordE" name="oldPasswordE" placeholder="请输入原密码"  required/>
								</div>
							</div>
							<div class="form-group">
								<label class="col-sm-4 control-label" for="newPasswordE">请输入新密码</label>
								<div class="col-sm-5">
									<input type="text" class="form-control" id="newPasswordE" name="newPasswordE" placeholder="请输入新密码"  required/>
								</div>
							</div>
							<div class="form-group">
								<label class="col-sm-4 control-label" for="qrPasswordE">请输入确认密码</label>
								<div class="col-sm-5">
									<input type="text" class="form-control" id="qrPasswordE" name="qrPasswordE" placeholder="请输入确认密码"  required/>
								</div>
							</div>
							<div class="form-group">
								<div class="col-sm-9 col-sm-offset-4">
									<button type="submit" class="btn btn-info" name="signup" value="提交">修改</button>
									<a class="btn btn-primary"  href="eyt_my_info.html" target="_self">返回</a>
								</div>
								
							</div>
						</form>

					</div>
				</div>
			</div>
		</div>
	</div>


	<script src="../js/jquery.min.js?v=2.1.4"></script>
	<script src="../ie_compatibility/placeholderfriend.js"></script>
	<script src="../js/bootstrap.min.js?v=3.3.5"></script>
	<script src="../js/content.min.js?v=1.0.0"></script>
	<script type="text/javascript" src="../app/my/jquery-validation-1.15.1/dist/jquery.validate.js"></script>
	<script src="../js/plugins/validate/messages_zh.min.js"></script>
	<!-- <script src="../js/demo/form-validate-demo.min.js"></script> 

	<script type="text/javascript" src="../app/common/common.js"></script>-->
	<script src="../app/common/common.js" charset="utf-8"></script>
	<script src="../app/common/cookies.js" charset="utf-8"></script>

	<script type="text/javascript" src="../app/my/eyt_my_info_update_password_c.js"></script>
	<script type="text/javascript" src="../app/my/eyt_my_info_update_password_check.js"></script>
	<script type="text/javascript" src="../app/my/eyt_my_info_update_password_m.js"></script>
	<script type="text/javascript" src="../app/my/eyt_my_info_update_password_v.js"></script>
	



</body>

</html>