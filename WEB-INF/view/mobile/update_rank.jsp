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

    <div class="weui_cells_title">会员级别</div>
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
          <p id="r7">微商</p>
        </div>
        <div class="weui_cell_ft">
          <input type="radio" name="radio2" class="weui_check" id="x27" >
          <span class="weui_icon_checked"></span>
        </div>
      </label> 
      
    </div>

    
    <div class='demos-content-padded'>
      <a href="javascript:;" id='show-toast' class="weui_btn weui_btn_primary">修改保存</a>
      
    </div>
    
    <script src="front/wui/js/jquery-2.1.4.js"></script>
		<script src="front/wui/js/jquery-weui.js"></script>
		<script src="front/front/common.js" charset="UTF-8"></script>
		<script src="front/mobile/update_rank.js" charset="UTF-8"></script>
    <script>
    	
    </script>
  </body>
</html>
