//==========================================
//模块功能：执行页面-记录改变的内容,插入日志并发到通知栏
//模块日期：2017-01-20
//==========================================
var _allPostOver = ["0","0","0","0","0","0","0"];//7个post请求标记初始化为0

//var _formList1 = [{"key":"任务内容", "value":"aaa"}, {"key":"状态", "value":"进行中"}]; // 加载完成后 获得的所有值
//var _formList2 = [{"key":"任务内容", "value":"zzz"}, {"key":"状态", "value":"进行中"}]; // 

/**
 * 加载完成后 获得的所有值
 */
var _formList1 = []; // 加载完成后 获得的所有值
/**
 * 点击按钮获得的所有值
 */
var _formList2 = []; // 点击按钮获得的所有值
/**
 * 比对后不一样的
 */
var _formList3 = []; // 比对后不一样的
var _form_count=7;//一个是7个post获取了页面的完整数据

/**
 * 点击提交按钮  模块入口函数
 */
function change_record_commit_click(){
	_formList2 = [];
    getformList1_formList2(_formList2);
    log_change_record(_formList1);
   	log_change_record(_formList2);
    compare();
    log_change_record(_formList3);
}

/**
 * 刚开始进入的调用 判断7个表单post是否都完成了 如果完成就获取数据 ==================金鑫原始模块内部调用此函数==================
 */
function getIsPostFinish(pos){
    
    _allPostOver[pos] = "1";
    var sum = 0;
    for (var i = 0; i<_allPostOver.length; i++) {
        if (_allPostOver[i] == "1") {
            sum++;
        }
    }
    //console.log('getIsPostFinish:',sum);
    if (sum == _form_count) {//满足要获取6个表单数据的条件了
        //console.log('满足要获取6个表单数据的条件了');
        // 代表全是1 执行获得语句
		_formList1 = [];
        getformList1_formList2(_formList1);
        // 并且把allPostOver数组在都制成0
        _allPostOver = ["0","0","0","0","0","0","0"];
    }
}

/**
 *  获取表单数据通用过程
 */
function getformList1_formList2(formList){
	/**
	 * 所有左侧标题
	 */
	var allKey = [];
	/**
	 * 所有右侧数值
	 */
	var allValue = [];
	// 获得所有label的值  7个post包括动态和静态生成的lable 都在id=signupForm  =====================业务号 客户 集装箱号 是隐藏的 =====================
    $("#signupForm").find("label").each(function(){		
		var mytag=$(this).attr("mytag");
		//console.log('mytag'+i,$(this).attr("name"),'----',mytag);
		if (mytag=='select'){//mytag='select' 是动态增加下拉框 给的标记
			var $option=$("option:selected",this);
			var it=$option.text();
			//log_change_record(it);
			allKey.push(it);
		}
		else{
            //log_change_record($(this).html());
			allKey.push($(this).html());
		}
	});

	//log_change_record("====================");

	// 任务内容
    var s1=$("#txtTaskContent").val();
    //log_change_record(s1);
	allValue.push(s1);
	
	// 业务号
	var s6=$("#txtYwNum").val();
    //log_change_record(s6);
	allValue.push(s6);

	// 客户
	var s5=$("#txtKhNum").val();
    //log_change_record(s5);
	allValue.push(s5);
	
	// 状态
    var s2=$("#txtTaskDstatus").val();
    //log_change_record(s2);
	allValue.push(s2);
	// 集装箱号
    var s3=$("#txtContainer").val();
    //log_change_record(s3);// txtTaskLaunch  spanTaskWorker   spanFollower txtFile
	allValue.push(s3);
	// 发起人
    var s4=$("#txtTaskLaunch").html();
    //log_change_record(s4);
	allValue.push(s4);

	
	var allspanTaskWorker = ""; // 内部协同者的值 最开始的可写
	// 取内部协同者的值
    $("#spanTaskWorker").find("span").each(function(){		
		var mytag=$(this).attr("mytag");
		//log_change_record('mytag'+i,$(this).attr("name"),'----',mytag);
		if (mytag=='select'){
			var $option=$("option:selected",this);
			var it=$option.text();
			//log_change_record(it);
			allspanTaskWorker += !allspanTaskWorker ? it:"-"+it;
		}
		else{
            //log_change_record($(this).html())
			allspanTaskWorker += !allspanTaskWorker ? $(this).html():"-"+$(this).html();
		}
	});
	allValue.push(allspanTaskWorker);
	allspanTaskWorker = "";


	var allspanFollower = ""; // 外部协同者的值  最开始的只读
	// 取外部协同者的值
    $("#spanFollower").find("span").each(function(){		
		var mytag=$(this).attr("mytag");
		//log_change_record('mytag'+i,$(this).attr("name"),'----',mytag);
		if (mytag=='select'){
			var $option=$("option:selected",this);
			var it=$option.text();
			//log_change_record(it);
			allspanFollower += !allspanFollower ? it:"-"+it;
		}
		else{
            //log_change_record($(this).html());
			allspanFollower += !allspanFollower ? $(this).html():"-"+$(this).html();
		}
	});
	allValue.push(allspanFollower);
	allspanFollower = ""; 


	var alltxtFile = "";// 附件的值
	// 取附件的值
    $("#txtFile").find("span").each(function(){		
		var mytag=$(this).attr("mytag");
		//log_change_record('mytag'+i,$(this).attr("name"),'----',mytag);
		if (mytag=='select'){
			var $option=$("option:selected",this);
			var it=$option.text();
			//log_change_record(it);
			alltxtFile += !alltxtFile ? it:"-"+it;
		}
		else{
            //log_change_record($(this).html());
			alltxtFile += !alltxtFile ? $(this).html():"-"+$(this).html();
		}
	});
	allValue.push(alltxtFile);
	alltxtFile = "";

	// 此处固定的值取完了 取出动态的值
	// 取下面动态出来的值
    $("#signupForm").find("[name='formitemvalue1']").each(function(){		
		var mytag=$(this).attr("mytag");
		//log_change_record('mytag'+i,$(this).attr("name"),'----',mytag);
		if (mytag=='select'){
			var $option=$("option:selected",this);
			var it=$option.text();
			//log_change_record(it);
			allValue.push(it);
			//allformitemvalue1 += allformitemvalue1 ? it:"-"+it;
		}
		else{
            //log_change_record($(this).val());
			allValue.push($(this).val());
			//allformitemvalue1 += allformitemvalue1 ? $(this).val():"-"+$(this).val();
		}
	});
	


	log_change_record(allKey);
	log_change_record(allValue);

	// 向数组添加
	for (var i = 0; i<allKey.length; i++ ){
		var item = {};
		item.key = allKey[i];
		item.value = allValue[i];
		formList.push(item);
	}

	// log_change_record(formList[0].key);
	// log_change_record(formList[1].key);
	// log_change_record(formList[0].value);
	// log_change_record(formList[1].value);

	
}


/**
 * 比较
 */
function compare() {
	_formList3 = []; 
     for (var i = 0; i<_formList1.length; i++){
        if(_formList1[i].key == _formList2[i].key){
            if(_formList1[i].value == _formList2[i].value){

            } else {
               var key = _formList1[i].key;
               _formList3.push(key);
            }
        }
    }
}

/**
 * 本模块内的debug info函数
 */
function log_change_record(s){
	console.log(s);
}