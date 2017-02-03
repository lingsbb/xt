<%@page pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
  <head>
  	<title>派发红包</title>
    <meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
	
	<meta name="description" content="Write an awesome description for your new site here. You can edit this line in _config.yml. It will appear in your document head meta (for Google search results) and in your feed.xml site description.">
	
	<link rel="stylesheet" href="front/wui/css/weui.min.css">
	<link rel="stylesheet" href="front/wui/css/jquery-weui.css">
	<link rel="stylesheet" href="front/wui/css/demos.css">

  </head>

  <body ontouchstart id='mybody'>
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
        <div class="weui_cell_hd"><label class="weui_label">派发金额</label></div>
        <div class="weui_cell_bd weui_cell_primary">
          <input value="0" class="weui_input" type="number" id="num" placeholder="派发金额（元）">
        </div>
      </div>
    </div>
    <div class="weui_cells weui_cells_form">
      <div class="weui_cell weui_cell_warn">
        <div class="weui_cell_hd"><label class="weui_label">临时帐号</label></div>
        <div class="weui_cell_bd weui_cell_primary">
          <input value="" class="weui_input" id="tel" placeholder="临时帐号">
        </div>
      </div>
    </div>
    
    <div class="weui_cells_title">推荐对方会员级别</div>
    <div class="weui_cells weui_cells_radio">
    	
    	<label id='h0' class="weui_cell weui_check_label" for="x20">
        <div class="weui_cell_bd weui_cell_primary">
          <p id="r0">普通会员</p>
        </div>
        <div class="weui_cell_ft">
          <input type="radio" class="weui_check" name="radio2" id="x20" checked="checked">
          <span class="weui_icon_checked"></span>
        </div>
      </label>
      
      <label id='h1'  class="weui_cell weui_check_label" for="x21">
        <div class="weui_cell_bd weui_cell_primary">
          <p id="r1">一星级会员</p>
        </div>
        <div class="weui_cell_ft">
          <input type="radio" class="weui_check" name="radio2" id="x21" checked="checked">
          <span class="weui_icon_checked"></span>
        </div>
      </label>
      
      <label id='h2'  class="weui_cell weui_check_label" for="x22">
        <div class="weui_cell_bd weui_cell_primary">
          <p id="r2">二星级会员</p>
        </div>
        <div class="weui_cell_ft">
          <input type="radio" name="radio2" class="weui_check" id="x22" >
          <span class="weui_icon_checked"></span>
        </div>
      </label>
      
      <label id='h3'  class="weui_cell weui_check_label" for="x23">
        <div class="weui_cell_bd weui_cell_primary">
          <p id="r3">三星级会员</p>
        </div>
        <div class="weui_cell_ft">
          <input type="radio" name="radio2" class="weui_check" id="x23" >
          <span class="weui_icon_checked"></span>
        </div>
      </label>
      
      <label id='h4' class="weui_cell weui_check_label" for="x24">
        <div class="weui_cell_bd weui_cell_primary">
          <p id="r4">四星级会员</p>
        </div>
        <div class="weui_cell_ft">
          <input type="radio" name="radio2" class="weui_check" id="x24" >
          <span class="weui_icon_checked"></span>
        </div>
      </label>  
      
      <label id='h5' class="weui_cell weui_check_label" for="x25">
        <div class="weui_cell_bd weui_cell_primary">
          <p id="r5">五星级会员</p>
        </div>
        <div class="weui_cell_ft">
          <input type="radio" name="radio2" class="weui_check" id="x25" >
          <span class="weui_icon_checked"></span>
        </div>
      </label> 
        
      <label id='h6' class="weui_cell weui_check_label" for="x26">
        <div class="weui_cell_bd weui_cell_primary">
          <p id="r6">VIP会员</p>
        </div>
        <div class="weui_cell_ft">
          <input type="radio" name="radio2" class="weui_check" id="x26" >
          <span class="weui_icon_checked"></span>
        </div>
      </label> 
      
      <label id='h7' class="weui_cell weui_check_label" for="x27">
        <div class="weui_cell_bd weui_cell_primary">
          <p id="r7">代理商</p>
        </div>
        <div class="weui_cell_ft">
          <input type="radio" name="radio2" class="weui_check" id="x27" >
          <span class="weui_icon_checked"></span>
        </div>
      </label> 
      
    </div>
    
    
    
    <div class="weui_cells_title">赠送对方的祝福语</div>
    <div class="weui_cells weui_cells_radio">
      <label class="weui_cell weui_check_label" for="x11">
        <div class="weui_cell_bd weui_cell_primary">
          <p id="p1">祝您身体健康，万事如意</p>
        </div>
        <div class="weui_cell_ft">
          <input type="radio" class="weui_check" name="radio1" id="x11" checked="checked">
          <span class="weui_icon_checked"></span>
        </div>
      </label>
      
      <label class="weui_cell weui_check_label" for="x12">
        <div class="weui_cell_bd weui_cell_primary">
          <p id="p2">祝您财源滚滚、生意兴隆</p>
        </div>
        <div class="weui_cell_ft">
          <input type="radio" name="radio1" class="weui_check" id="x12" >
          <span class="weui_icon_checked"></span>
        </div>
      </label>
      
      <label class="weui_cell weui_check_label" for="x13">
        <div class="weui_cell_bd weui_cell_primary">
          <p><font color="">自定义祝福语</font> </p>
        </div>
        <div class="weui_cell_ft">
          <input type="radio" name="radio1" class="weui_check" id="x13" >
          <span class="weui_icon_checked"></span>
        </div>
      </label>      
    </div>
    
    <div id="div_words" class="weui_cells weui_cells_form" style="display:none" >
      <div class="weui_cell weui_cell_warn">
        <div class="weui_cell_hd"><label class="weui_label">输入祝福语</label></div>
        <div class="weui_cell_bd weui_cell_primary">
          <input class="weui_input" type="text" id="mywords" placeholder="">
        </div>
      </div>
    </div>
    
    <div class='demos-content-padded'>
      <a href="javascript:;" id='show-toast' class="weui_btn weui_btn_primary">派发</a>
      
    </div>
    
    <script src="front/wui/js/jquery-2.1.4.js"></script>
		<script src="front/wui/js/jquery-weui.js"></script>
		<script src="front/front/common.js" charset="UTF-8"></script>
		<script src="front/mobile/redbag_gift.js" charset="UTF-8"></script>
    <script>
    	
    </script>
  </body>
</html>
