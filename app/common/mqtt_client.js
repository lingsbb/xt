/*******************************************************************************
 * 根据IBM官方提供的paho 客户端源码修改
 * 模块作者：曾庆欣
 * 模块日期：2017-01-20
 * 
 * Copyright (c) 2015 IBM Corp.
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * and Eclipse Distribution License v1.0 which accompany this distribution.
 *
 * The Eclipse Public License is available at
 *    http://www.eclipse.org/legal/epl-v10.html
 * and the Eclipse Distribution License is available at
 *   http://www.eclipse.org/org/documents/edl-v10.php.
 *
 * Contributors:
 *    James Sutton - Initial Contribution
 *******************************************************************************/
//paho 客户端  原来叫client
var mqttClient = null;
//连接状态  原来叫connected
var mqtt_connected = false;
//重连时间初始5秒
var reconnect_time = 5 * 1000;//===============后增加代码===============
//重连次数
var reconnect_count = 0;//===============后增加代码===============
/**
 * 事件-连接成功
 */
function onConnect(context) {
  // Once a connection has been made, make a subscription and send a message.
  console.log("Client Connected");
  mqtt_connected = true;
  reconnect_time = 5*1000;//===============后增加代码===============
  reconnect_count = 0;//===============后增加代码===============
  //===============后增加代码====对所有task进行订阅===========
  $.each(window.dingyueMap,function(taskid,topic) {
	  subscribeMQTT(topic);
   });
}

/**
 * 事件-连接失败
 * @param context
 * @returns
 */
function onFail(context) {
  console.log("Failed to connect");
  showNoConnectToast();
  mqtt_connected = false;
}

/**
 * 事件-与服务器失去连接
 */
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("Connection Lost: " + responseObject.errorMessage);
  }
  mqtt_connected = false;
  //===============后增加代码===============
  console.log(reconnect_time/1000+"秒后尝试重连!")
  setTimeout(function(){
	  if(mqtt_connected){
		  return;
	  }
	  if(reconnect_count >= 5){
		  showNoConnectToast();
		  return;
	  }
	  connectMQTT();
	  reconnect_time += 5 * 1000;
	  reconnect_count++;
  },reconnect_time);

}
/**
 * 弹出右上角红色提醒信息
 */
function showNoConnectToast(){
	 toastr.error('已与消息服务器断开连接,请点我刷新页面!', '通知',{
		/*onShown : function() { 
			console.log('show');
		},
		onHidden  : function() { 
			console.log('hidden');
		},*/
		onclick  : function() { 
			//todo 刷新页面
			location.reload();
		},
		onCloseClick  : function() { 
			toastr.remove();
		},
		showEasing : 'swing',
		progressBar : false,
		timeOut: "9999999999",
		closeClass: 'toast-close-button',
		closeButton: true  
	});
}
/**
 * 事件-收到消息内容
 * @param message 消息体
 * @returns
 */
function onMessageArrived(message) {  
  var topic = message.destinationName;//收到消息的主题
  var msgBody = safe_tags_regex(message.payloadString);//收到的消息内容
  var msgTime = new Date().toISOString();//当前时间
  var qos = message.qos;//qos 等级
  console.log('收到JMS消息：'+msgBody);
  showPushMsg(msgBody);
}

function showPushMsg(str){
	//var str=message.payloadString;
	//var index = new Date().getTime();
	//_all_new_msg_list[index] = str;
	//refreshNotifyNum();
	var json=str2json(str);
	
	var s='<div class="sidebar-message">';
	if (json.type == "2"){ // 只有2能跳
		s +=  ' <a  class="J_menuItem"  onclick="onMessageClick('+json.taskid+',\''+json.createtime+'\')">'+
			'  <div class="media-body">'+json.msgtext+' '+   
			'     <br>'+
			'     <small class="text-muted">'+json.createtime+'</small>'+
			'   </div>'+
			'  </a>'+
			' </div>';
	} else if(json.type=="1" || json.type=="0"){
		// s += '  <div class="media-body">'+json.msgtext+' '+   
		//  '     <br>'+
		//  '     <small class="text-muted">'+json.createtime+'</small>'+
		//  '   </div>'+
	
		//  ' </div>';
		s +=  ' <a  class="J_menuItem"  onclick="onMessageClick('+json.taskid+',\''+json.createtime+'\')">'+
			'  <div class="media-body">'+json.msgtext+' '+   
			'     <br>'+
			'     <small class="text-muted">'+json.createtime+'</small>'+
			'   </div>'+
			'  </a>'+
			' </div>';
	} else if(json.type=="3"){
		s +=  ' <a  class="J_menuItem"  onclick="onMessageClick('+json.taskid+',\''+json.createtime+'\')">'+
			'  <div class="media-body">'+json.msgtext+' '+   
			'     <br>'+
			'     <small class="text-muted">'+json.createtime+'</small>'+
			'   </div>'+
			'  </a>'+
			' </div>';
	} else if (json.type=="-1") {
		s +=  ' <a  class="J_menuItem"  onclick="onMessageClick('+json.taskid+',\''+json.createtime+'\')">'+
			'  <div class="media-body">'+json.msgtext+' '+   
			'     <br>'+
			'     <small class="text-muted">'+json.createtime+'</small>'+
			'   </div>'+
			'  </a>'+
			' </div>';
		var iframeid_jx = $("#iframe"+json.taskid);
		if(iframeid_jx && iframeid_jx[0] && iframeid_jx[0].contentWindow && iframeid_jx[0].contentWindow.addRow){
				iframeid_jx[0].contentWindow.addRow(json.createtime,json.msgtext,json.nickname);
		}
		
//			
//			  if($("#iframe0").context.iframe0.addRow){
//			    	$("#iframe0").context.iframe0.addRow(json.createtime,json.msgtext,json.nickname);
//			   }
	}
	
	if (json.type==2) {
		$('#tab-2').prepend(s);
	} 
	else if (json.type==0 || json.type==1)
	{
		$('#tab-3').prepend(s);
	} else if (json.type==3 || json.type ==-1){
			$('#tab-1').prepend(s);
	}
	_all_new_msg_list[json.createtime] = json;
	refreshNotifyNum();
}

/**
 * 连接服务器
 * @returns
 */
function connectMQTT(){
    var hostname = g_mqtt_ip;//"192.168.1.18";//"59.110.160.193";
    var port = 61623;
    var clientId = "client"+_userId_v ;
    var path = "/";
    var user = "admin";
    var pass = "password";
    var keepAlive = 60;
    var timeout = 3;
  
    if(path.length > 0){
    	mqttClient = new Paho.MQTT.Client(hostname, Number(port), path, clientId);
    } else {
    	mqttClient = new Paho.MQTT.Client(hostname, Number(port), clientId);
    }
    //console.info('Connecting to Server: Hostname: ', hostname, '. Port: ', port, '. Path: ', path, '. Client ID: ', clientId);
    // set callback handlers
    mqttClient.onConnectionLost = onConnectionLost;
    mqttClient.onMessageArrived = onMessageArrived;


    var options = {
      invocationContext: {host : hostname, port: port, path: path, clientId: clientId},
      timeout: timeout,
      keepAliveInterval:keepAlive,
      cleanSession: true,
      useSSL: false,
      onSuccess: onConnect,
      onFailure: onFail
    };

    if(user.length > 0){
      options.userName = user;
    }

    if(pass.length > 0){
      options.password = pass;
    }

    // connect the client
    mqttClient.connect(options);

}
/**
 * 断开连接方法
 * @returns
 */
function disconnect(){
    console.info('Disconnecting from Server');
    mqttClient.disconnect();
    mqtt_connected = false;
}
/**
 * 发送消息方法
 * @param topic 订阅的主题
 * @param message 消息内容
 * @returns
 */
function publish(topic,message){
    var qos = 0;
    var retain = false;
    console.info('Publishing Message: Topic: ', topic, '. QoS: ' + qos + '. Message: ', message);
    message = new Paho.MQTT.Message(message);
    message.destinationName = topic;
    message.qos = qos;
    message.retained = retain;
    if(mqttClient){
    	mqttClient.send(message);
    }
}
/**
 * 订阅主题方法
 * @returns
 */
function subscribeMQTT(topic){
    //console.info('Subscribing to: Topic: ', topic);
    mqttClient.subscribe(topic);
}
/**
 * 取消订阅方法
 * @param topic
 * @returns
 */
function unsubscribe(topic){
    console.info('Unsubscribing from ', topic);
    mqttClient.unsubscribe(topic, {
         onSuccess: unsubscribeSuccess,
         onFailure: unsubscribeFailure,
         invocationContext: {topic : topic}
     });
}

/**
 * 取消订阅成功
 */
function unsubscribeSuccess(context){
    console.info('Successfully unsubscribed from ', context.invocationContext.topic);
}
/**
 * 取消订阅失败
 * @param context
 * @returns
 */
function unsubscribeFailure(context){
    console.info('Failed to  unsubscribe from ', context.invocationContext.topic);
}

/**
 * 过滤收到的消息内容
 * @param str
 * @returns
 */
function safe_tags_regex(str) {
   return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/**
 * 刷新右上角的数字数值
 */
function refreshNotifyNum(){//刷新 1 2 3 4 5 6
	var count=Object.getOwnPropertyNames(_all_new_msg_list).length;
	if(count){
		$('#number').show();
		$('#number').html(count);
	}else{
		$('#number').hide();
	}			
}
