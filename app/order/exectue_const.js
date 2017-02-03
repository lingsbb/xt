//====================================================
//模块功能：执行页面-页面变量定义
//模块日期：2017-01-20
//====================================================

// http_select_task_xiangid
// http_select_task_cnuser
// http_select_task_confirmnew
// http_select_task_form
// http_select_task_role
// http_ssearchInUsers
// http_ssearchOutUsers

/**
 * getQueryString 是否临时用户 ：时间戳：临时用户   ，字符串是注册用户
 */
var _l = getQueryString("l");
/**
 *  getQueryString 用户昵称， 刘宵的cookie
 */
var _nickname = getCookieValue("username");
/**
 *  getQueryString 任务id
 */
var _taskid = getQueryString("t");// 任务id
/**
 *  getQueryString 只读或者编辑
 */
var _p = getQueryString("p");//只读或者编辑
// ================================================================================================================================
//var _u = getQueryString("u");//外面传入的用户id
/**
 * 任务内容
 */
var $txtTaskContent; // 任务内容
/**
 * 发起人  不是状态 状态注释不对
 */
var $txtTaskLaunch; // 发起人  不是状态 状态注释不对
/**
 * 拼接file
 */
var $txtFile; // 拼接file
/**
 * 拼接表单
 */
var $txtForm; // 拼接表单
/**
 * 提交按钮
 */
var $btnCommit; // 提交按钮
/**
 * 返工按钮
 */
var $btnRework; // 返工按钮
/**
 * 发送反馈问题消息按钮
 */
var $btnSend;// 发送按钮
/**
 * 确认通过按钮
 */
var $btnAdopt;// 确认通过按钮
/**
 * 任务状态
 */
var $txtTaskDstatus;// 任务状态
/**
 * 邀请内部协同者按钮
 */
var $btnInsideAdd;//邀请内部协同者按钮
/**
 * 邀请外部协同者按钮
 */
var $btnExternalAdd;//邀请外部协同者按钮
/**
 * 外部协同者面板
 */
var $spanFollower; // 
/**
 * 内部协同者面板
 */
var $spanTaskWorker; // 
/**
 * 客户
 */
var $txtKhNum; // 
/**
 * 业务号
 */
var $txtYwNum; // 
/**
 * 任务内容
 */
var _txtTaskcn;// 
/**
 * 表单中文名称
 */
var _txtFormcn;// 
// var _xiangid;// 集装箱号txt  还在获取  感觉没必要了
/**
 * 任务状态 0进行 1完成
 */
var _status;// 任务状态
//================================== 隐藏域  一个formid 但是增加多个重复的 实际取的第一个 START ========================================================================
var _txtFormitemValue = '';// input值
var _txtFormitemId = '';// label值
var _txtFormId = '';// id input值  
//================================== 隐藏域  一个formid 但是增加多个重复的 实际取的第一个 END ========================================================================
/**
 * 邮件内容
 */
var _content;// 
/**
 * 人物角色
 * 0是发起人 1是执行人（后来编辑权限） 2是参与人(后来只读权限) 
 */
var _role_result;// 人物角色
/**
 * 邮件地址
 */
var _email;// 邮件地址
/**
 * 团队信息发送人
 */
var _nickname;// 团队信息发送人
/**
 * 团队信息发送内容
 */
var _txtTeam;// 团队信息发送内容
/**
 * 订单id
 */
var _ordid;// 订单id
/**
 * 任务本身是否需要所有人确认
 */
var _is_form_need_confirm;//是否需要确认
/**
 * 我是否已经确认过
 */
var _is_my_confirmed;//是否确认
/**
 * 查询整个任务模板和模板数据  新增加  select_task_formnew未解决
 */
var _fromj;//查询整个任务模板和模板数据  新增加  select_task_formnew未解决

//=============================可以删除了STRAT==============================================================
/**
 * 内部联系人集合
 */
var _inUsers = []; // 内部联系人集合
/**
 * 外部联系人集合
 */
var _outUsers = []; // 外部联系人集合

/**
 * cookie里id
 */
var _userId_v = getCookieValue("id");// cookie里id
/**
 * cookie里昵称
 */
var _userNickname_v = getCookieValue("username");// cookie里昵称
/**
 * cookie里邮箱
 */
var _userEmail_v = getCookieValue("useremail");// cookie里邮箱
// var _user_ziji_id="";//是否需要记录自己的账号，需要则记录，不需要就是空
//============================END getCookieValue==========================================================

//var _user_ziji_in_out="";//自己对于属于发起人来说是内部还是外部联系人
/**
 * 只读的html字符串readonly='readonly
 */
var _display_none_unbind = "";//只读的html字符串readonly='readonly
/**
 * 禁用的html字符串disabled='true
 */
var _display_unbind = "";//禁用的html字符串disabled='true
/**
 * 存储filename  查询附件的结果
 */
var filelist = ""; // 存储filename  查询附件的结果
/**
 * 所有表单项重复出现的中文
 */
var _ismuilty = [];//所有表单项重复出现的中文
/**
 * 客户值
 */
var _txtKhNum_v;//客户值
/**
 * 业务值
 */
var _txtYwNum_v; // 业务值

//============================START 20170119==========================================================

// var twoPostOver_people = ["0","0"]; // 点击 内部、外部协同者的邀请按钮 需要发送两个请求，如果2个请求都回来就show页面

// var p_hehe = "1";// 默认起始页 好像不用了

// var search_status = "1"; // 1是内部联系的查询 2是外部联系人的查询

/**
 * 莫胜男要的  关宇做的新增加的邀请人的数组 每次弹出对话框前先清空
 */
var _changed_invitate = ""; // 莫胜男要的

//============================END 20170119==========================================================
//formitemvalue1 所有动态添加到表单的表单域控件都是叫formitemvalue1