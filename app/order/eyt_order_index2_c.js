//====================================================
//模块功能：创建新运单 控制器
//模块日期：2017-01-20
//模块作者：莫胜男
//====================================================

//id
var _userId;
var p="1";
var _status;//默认为1020，查全部未处理
_status="1040";
var _power="7";
_userId=getCookieValue("id");

//界面查询控件
var $txtyewu;//业务号
var $txtxianghao;//箱号
var $txtstart;//开始时间
var $txtend;//结束时间



// var $count2;//修改中数量
// var $count3;//订舱数量
// var $count4;//报关数量
// var $count5;//运输数量
// var $count6;//完结数量

var _txtyewu_v;//业务号
var _txtxianghao_v;//箱号
var _txtstart_v;//开始时间
var _txtend_v;//结束时间

var $btnQuery;//查询按钮
var $btnCreate;//创建按钮

var isFirstEnter='0';//第一次进入系统的标志值
var isFirstCreate='1';//针对报关地的 第一次标记  以后不查了   标志第一次创建订单按钮，用户查询下拉框，，，查询一次后赋值到下拉框中，不再重复查询
var currentTab=1;

/**
 * 入口
 */
$(function(){
	firefox();//兼容火狐浏览器 则给按钮添加样式
	create_des_ctl($("#txtIn"));//创建目的地控件
	getElement();
	setEvent();
	
	// //查询生成选项卡
	// selectAllTab();
	
	//第一次默认查询
	search(p,false);//第一次默认查询
	//调用分页
	startPagebar();//调用分页
	//添加固定选项卡
	addRowTabGuding();//添加固定选项卡

	// //点击刷新时默认显示
	// $('#orderState').show();

	guide();//引导层
	check();//绑定创建对话框的校验

});

/**
 * 兼容火狐浏览器 则给按钮添加样式
 */
function firefox(){
	///兼容火狐浏览器 则给按钮添加样式
	if(isFirefox=navigator.userAgent.indexOf("Firefox")>0){  
		//如果是火狐浏览器，查询，添加按钮下调
		//alert("Firefox");  
		$("#btnQuery").addClass("firefoxbutton");
		$("#btnCreate").addClass("firefoxbutton");
	}
}

// /**
//  * 创建目的地控件
//  */
// function create_des_ctl(){
// 	////////////////////////////目的地start//////////////////////////////////////////////////////////
// 	http_select_station_code();
// 	console.log(_desCity.length);
// 	$("#txtIn").attr('data-source',JSON.stringify(_desCity));
// 	////////////////////////////目的地end//////////////////////////////////////////////////////////
// }

/**
 * 引导层
 */
function guide(){
	///////////////////////////////////////////////////////////////////引导层
	//查询是否是第一次登陆
	http_select_user_iswelcome(_userId);
	if(isFirstEnter=='1'){
		//弹出首页遮罩提示
		$('body').pagewalkthrough({ 
			name: 'introduction', 
			steps: [{ 
		
			popup: { 
				content: '#walkthrough-1', 
				type: 'modal' ,
				
			} 
			}, { 
				wrapper: '#btnCreate', 
				popup: { 
					content: '#walkthrough-2', 
					width: '200',
					type: 'tooltip', 
					position: 'left' 
				} 
			}] 
		}); 
 
		// Show the tour 
		$('body').pagewalkthrough('show'); 
	}
}

/**
 * 创建订单的验证
 */
function check(){

	////////////////////////////////////////////////////////////创建订单的验证

	//校验新订单
	$.validator.setDefaults({
		submitHandler: function() {
//		alert("提交事件!");
		addNewOrder();
		}
	});
	//创建新订单的校验
	$("#signupForm").validate({
	    rules: {

	      txtnewname: {
	        required: true,
	        userName: true
	      },
		   wlname1: {
	        required: true,
	       chs: true
	      },
		   wlname2: {
	        required: true,
	       chs: true
	      },
	      agree: "required"
	    },
	    messages: {
	      txtnewname: "请输入中文英文数字和下划线",
	      wlname1: "请输入中文",
	   	  wlname2: "请输入中文"
	    }
	});

}

/**
 * 初始化控件
 */
function getElement(){

	//4个输入控件//常规控件获取
	$txtyewu = $('#txtyewu');

	//	$txtxianghao= $('#txtIn');
	$txtxianghao = $('#txtxianghao');
	$txtstart = $('#txtstart');
	$txtend = $('#txtend');
	
	$btnQuery=$("#btnQuery");
	$btnCreate=$("#btnCreate");
	
	
}


/**
 * 给按钮添加事件
 */
function setEvent(){
	$btnQuery.click(function(){
		//第一次默认设置为状态为2，
		query(_status,true);
	});
	
		
	$btnCreate.click(function(){
		
		btnCreateAlert();
		//添加报关城市，运输方式下拉框
		getCreateSelectOption();
	});

}

/**
 * 进入任务列表页面
 */
function btn_Details(orderid){
	window.location.href="eyt_order_task_index?orderid="+orderid;

	 //alert(id);
}


// 當前


/**
 * 查询过程
 */
function query(tab,isSearch){
	//如果切換选项卡，则取选项卡的状态值
	if(!isSearch){
		var data=tab.attributes["data"].value;
		 if(!data)return ;
		 if(data.index && data.index==currentTab)return ;
		 //重置选项卡
		 v_reload();	
		 //赋值状态
		 _status=JSON.parse(data).state;
	}
	else{
		//只点击按钮时
		_status=tab;
	}
	// //当订单为全部时，才显示订单状态
	// if(_status=="1020"||_status=="1030"||_status=="1040"){
	// 	$('#orderState').show();
	// }else{
	// 	$('#orderState').hide();
	// }
	search(p,false);
	//重新设置分页
	startPagebar();
} 


/**
 * 显示各状态订单的数量
 */
function selectStatusCount(id1){
	http_select_statusCount(id1);
}
/**
 * 先查询用户是否有企业，有显示创建订单对话框，否则跳入完善信息页
 */
function btnCreateAlert(){
	http_select_qiye_byuser(_userId);
	 /* $('#CreatOrder').window('open');*/
}

// //查询订单状态字典表，动态生成选项卡
// function selectAllTab(){
	
// 	//第一次默认查询在查询选项卡之后
// 	http_select_dic_status();
	

// }

/**
 * 发起人将订单归档
 */
function btn_File(orderid){
	http_change_orderToguidang(orderid);

}


/**
 * 创建订单 查询结果赋值到下拉框中  目的地，报关地，运输方式
 */
function getCreateSelectOption(){
	
	//添加报关地下拉框，运输方式下拉框
	if(isFirstCreate=='1'){//第一次才去查询下拉框
		http_select_bgcity();
	}
	
}



//显示修改QQ按钮
function btnUpdateQQ_click() {
	$('#newQQ').modal({backdrop: 'static', keyboard: false});
}

//////////////////////////////////////////////////////////////////目的地 start//////////////////////////////////////////////////////////////////

// var _desCity=new Array();
// var _desCities;

// function findIdByDesCity(f)
// {
// 	var a='';
// 	for(var i=0;i<_desCities.length;i++){
// 		var id=_desCities[i].id;
// 		if (id==f){
// 			a= id;
// 			break;
// 		}
// 	}
// 	return a;
// }

// /**
//  * 查询站编
//  */
// function http_select_station_code(){

// 	$.ajax({
// 		url: '../soa_user',
// 		type: 'post',
// 		data: {
// 	           fun: 'select_station_code'
// 		},
// 		async: false,
// 		timeout : 5000, 
// 		dataType:'text', 
// 		contentType: 'application/x-www-form-urlencoded; charset=utf-8', 
// 		success: function(data) {
// 			var json=str2json(data);
// 			if (json.status=="200"){
// 				_desCities=json.rs;
// 				for(var i=0;i<json.rs.length;i++)
// 				{
// 				    var result = json.rs[i].result;
// 				    _desCity.push(result);
// 				}
// 				// console.log(json.rs.length);
// 				// console.log(_desCity);
// 			}
// 			else if (json.status=="404"){

// 			}
// 	},
// 		error: function() {

// 		}
// 	});
// }
// http_select_station_code();
// console.log(_desCity.length);
// $("#txtIn").attr('data-source',JSON.stringify(_desCity));

//////////////////////////////////////////////////////////////////目的地 end//////////////////////////////////////////////////////////////////

/**
 * 新写的 调用曾庆欣的 进入我的桌面
 */
function btn_DetailsNew(orderid){
	window.parent.enterMyDesktopWithNewTab(orderid);
}


/**
 * 新写的 如果用户没有企业，进入完善信息页
 */
function enterMy(){
	window.parent.enterMyInfo();
}