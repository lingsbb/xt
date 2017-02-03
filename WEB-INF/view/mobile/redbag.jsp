<%@page pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
  <head>
  	<title>购买红包</title>
    <meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
	
	<meta name="description" content="Write an awesome description for your new site here. You can edit this line in _config.yml. It will appear in your document head meta (for Google search results) and in your feed.xml site description.">
	
	<link rel="stylesheet" href="front/wui/css/weui.min.css">
	<link rel="stylesheet" href="front/wui/css/jquery-weui.css">
	<link rel="stylesheet" href="front/wui/css/demos.css">

  </head>

  <body ontouchstart>
	<div class="bd">
      <div class="weui_cells_title">当前可派发红包金额（元）</div>
      <div class="weui_cells">
        <div class="weui_cell">
          <div class="weui_cell_bd weui_cell_primary">
            <p id='redbag'>0</p>
          </div>
          <div class="weui_cell_ft"></div>
        </div>
      </div>
    </div>
    <div class="weui_cells weui_cells_form">
      <div class="weui_cell weui_cell_warn">
        <div class="weui_cell_hd"><label class="weui_label">购买金额</label></div>
        <div class="weui_cell_bd weui_cell_primary">
          <input class="weui_input" type="number" id="num" placeholder="购买金额（元）">
        </div>
      </div>
    </div>
    <div class='demos-content-padded'>
      <a href="javascript:;" id='show-toast' class="weui_btn weui_btn_primary">购买</a>
    </div>
    
    <script src="front/wui/js/jquery-2.1.4.js"></script>
	<script src="front/wui/js/jquery-weui.js"></script>
	<script src="front/front/common.js" charset="UTF-8"></script>
	<script src="front/mobile/redbag.js" charset="UTF-8"></script>
    <script>

		

    </script>
  </body>
</html>
