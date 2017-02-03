<!--
	模块功能：  提交订单
	模块日期：  2016-05-21
-->
<%@page pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="apple-mobile-web-app-capable" content="yes">
		<meta name="apple-touch-fullscreen" content="yes">
		<meta name="format-detection" content="telephone=no">
		<meta name="apple-mobile-web-app-status-bar-style" content="black">
		<meta name="format-detection" content="telephone=no">
		<meta name="msapplication-tap-highlight" content="no">
		<meta name="viewport" content="initial-scale=1,maximum-scale=1,minimum-scale=1">
		<title>确认未支付订单</title>
		<link rel="stylesheet" type="text/css" href="front/css1/base.css">
		<link rel="stylesheet" type="text/css" href="front/css1/nctouch_common.css">
		<link rel="stylesheet" type="text/css" href="front/css1/nctouch_cart.css">
	</head>

	<body>
		<header id="header" class="fixed">
			<div class="header-wrap">
				<div class="header-l">
					<a href="javascript:history.go(-1)"> <i class="back"></i> </a>
				</div>
				<div class="header-title">
					<h1>确认未支付订单</h1>
				</div>
				<div class="header-r"> <a id="header-nav" href="javascript:void(0);"><i class="more"></i><sup></sup></a> </div>
			</div>
		</header>
		<div class="nctouch-main-layout mb20">
			<div class="nctouch-cart-block">
				
			<!--正在使用的默认地址Begin-->
			<div class="nctouch-cart-add-default" onclick="add_new_address();">
				<a href="javascript:void(0);" id="list-address-valve">
				<i class="icon-add"></i>
      			<dl>
	        		<dt>收货地址：
	        			<span id="true_name"></span>
	        			<span id="mob_phone"></span>
	        		</dt>
	        		<dd>
	        			<span id="address">地址</span>
	        		</dd>
      			</dl>
      			<i class="icon-arrow"></i></a></div>
			</div>
			<!--正在使用的默认地址End-->

			<!--商品列表Begin-->
			<div id="goodslist_before" class="mt5">
				<div id="deposit">
					<div class="nctouch-cart-container">
						<dl class="nctouch-cart-store">
							<dt>
								<i class="icon-store"></i>食六计绿色食品直通车
							</dt>
						</dl>
						<div id="tab" >
						
						</div>
						<div class="nctouch-cart-subtotal" style="height: 110px;">
							<dl>
								<dt>物流配送（酒类货到付款）</dt>
								<dd>运费<em id="storeFreight1">0</em>元</dd>
							</dl>
							<dl>
								<dt>新疆、西藏地区可能不同</dt>
							</dl>							
							<div class="message">
								<input value="" type="text" placeholder="店铺订单留言：" id="storeMessage1" data-form-un="1461690683456.697">
							</div>
						</div>
					</div>
				</div>
			</div>
			<!--商品列表End-->

			<!--底部总金额固定层Begin-->
			<div class="nctouch-cart-bottom">
				<div class="total"><span id="online-total-wrapper"></span>
					<dl class="total-money">
						<dt>合计总金额：</dt>
						<dd>￥<em id="totalPrice">0.00</em></dd>
					</dl>
				</div>
				<div class="check-out"><a href="javascript:void(0);" id="ToBuyStep2" onclick='btn_ok();'>提交订单</a></div>
			</div>
			<!--底部总金额固定层End-->
			<div class="nctouch-bottom-mask">
				<div class="nctouch-bottom-mask-bg"></div>
				<div class="nctouch-bottom-mask-block">
					<div class="nctouch-bottom-mask-tip"><i></i>点击此处返回</div>
					<div class="nctouch-bottom-mask-top">
						<p class="nctouch-cart-num">本次交易需在线支付<em id="onlineTotal">0.00</em>元</p>
						<p style="display:none" id="isPayed"></p>
						<a href="javascript:void(0);" class="nctouch-bottom-mask-close"><i></i></a> </div>
					<div class="nctouch-inp-con nctouch-inp-cart">
						<ul class="form-box" id="internalPay">
							<p class="rpt_error_tip" style="display:none;color:red;"></p>
							<li class="form-item" id="wrapperUseRCBpay">
								<div class="input-box pl5">
									<label>
                <input type="checkbox" class="checkbox" id="useRCBpay" autocomplete="off">
                使用充值卡支付 <span class="power"><i></i></span> </label>
									<p>可用充值卡余额 ￥<em id="availableRcBalance"></em></p>
								</div>
							</li>
							<li class="form-item" id="wrapperUsePDpy">
								<div class="input-box pl5">
									<label>
                <input type="checkbox" class="checkbox" id="usePDpy" autocomplete="off">
                使用预存款支付 <span class="power"><i></i></span> </label>
									<p>可用预存款余额 ￥<em id="availablePredeposit"></em></p>
								</div>
							</li>
							<li class="form-item" id="wrapperPaymentPassword" style="display:none">
								<div class="input-box"> <span class="txt">输入支付密码</span>
									<input type="password" class="inp" id="paymentPassword" autocomplete="off" data-form-pw="1461690683456.697">
									<span class="input-del"></span> </div>
								<a href="front/member/member_paypwd_step1.html" class="input-box-help" style="display:none"><i>i</i>尚未设置</a> </li>
						</ul>
						<div class="nctouch-pay">
							<div class="spacing-div"><span>在线支付方式</span></div>
							<div class="pay-sel">
								<label style="display:none">
					              <input type="radio" name="payment_code" class="checkbox" id="alipay" autocomplete="off">
					              <span class="alipay">支付宝</span></label>
								<label style="display:none">
				              <input type="radio" name="payment_code" class="checkbox" id="wxpay_jsapi" autocomplete="off">
				              <span class="wxpay">微信</span></label>
							</div>
						</div>
						<div class="pay-btn"> <a href="javascript:void(0);" id="toPay" class="btn-l">确认支付</a> </div>
					</div>
				</div>
			</div>
		</div>

	
		<script src="front/js/jquery-1.4.2.min.js" charset="UTF-8" type="text/javascript"></script>
		<script src="front/front/common.js" charset="UTF-8"></script>
		<script src="front/js/mui.min.js"></script>
		<script src="front/mobile/order2.js" charset="UTF-8"></script>
		<script type="text/javascript" charset="UTF-8">

			
			
		</script>
		
	</body>

</html>