<%@page pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
	<title>红包支付</title>
	<style  type="text/css">
 		#bodyBackground {
 			background-size: 100% 100%;
 		    -o-background-size: 100% 100%;
 		    -moz-background-size: 100% 100%;
 		    -webkit-background-size: 100% 100%;
		 }
</style>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport"
		content="width=device-width, initial-scale=1, user-scalable=no">
	
	<meta name="description"
		content="Write an awesome description for your new site here. You can edit this line in _config.yml. It will appear in your document head meta (for Google search results) and in your feed.xml site description.">

	<link rel="stylesheet" href="front/wui/css/weui.min.css">
	<link rel="stylesheet" href="front/wui/css/jquery-weui.css">
	<link rel="stylesheet" href="front/wui/css/demos.css">
	<style>

	</style>
</head>

<body  id="bodyBackground" background="front/images/redbag_get4.png"  ontouchstart>

	<div class="weui_msg">
		<div class="weui_icon_area">
			
		</div>
		<div class="weui_text_area">
			<p class="weui_msg_desc" style="">&nbsp</p>
			<p class="weui_msg_desc" style="">&nbsp</p>
			<p class="weui_msg_desc" style="">&nbsp</p>
			
			
			<p class="weui_msg_desc"><font id="num" color="#ffffff">可用红包金额:25元</font> </p>
			<p class="weui_msg_desc"><font id="pay" color="#ffffff">支付红包金额:15元</font> </p>
		</div>
		<div class="weui_opr_area">
			<p class="weui_btn_area">
				<a href="javascript:;" id='show-toast' class="weui_btn weui_btn_warn">红包支付</a>
				<a href="javascript:;" id='show-toast-a' class="weui_btn weui_btn_warn">正在支付请稍后...</a>
			</p>
		</div>
	</div>

	<script src="front/wui/js/jquery-2.1.4.js"></script>
	<script src="front/wui/js/jquery-weui.js"></script>
	
	<script src="front/front/common.js" charset="UTF-8"></script>
	<script src="front/mobile/pay_redbag.js" charset="UTF-8"></script>
	
	
	<script type="text/javascript" charset="UTF-8">
		
	</script>
</body>
</html>
