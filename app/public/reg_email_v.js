//====================================================
//模块功能：注册以后的去邮箱激活帐号的提示页 视图层
//模块日期：2017-01-20
//模块作者：刘霄
//====================================================

function v_set_urlinfo(rows,url){
	$spnUserName.html(_spnUserName_v);
	if(rows>0){
		$divEmailUrl.show();
		$aEmailUrl.html(url);
		$aEmailUrl.attr('href',url);
	}
}
