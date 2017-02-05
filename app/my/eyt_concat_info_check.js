//====================================================
//模块功能：个人信息页面 验证层
//模块日期：2017-01-20
//模块作者：关宇
//====================================================
// form submit 验证 return this.optional( element ) || /^[\u4e00-\u9fa5]+/.test( value );

// 姓名 
$.validator.methods.info_cn = function( value, element ) {
	 return this.optional( element ) || /^[\u4e00-\u9fa5]{0,}$/.test( value ); //中文
}
// 昵称
$.validator.methods.info_nickname = function( value, element ) {
	 return this.optional( element ) || /^[\u4e00-\u9fa5A-Za-z]{0,}$/.test( value );// 中文
}
// 企业名称
$.validator.methods.info_qiye = function( value, element ) {
	 return this.optional( element ) || /^[\u4e00-\u9fa5]{0,}$/.test( value ); //中文
}

// 部门
$.validator.methods.info_department = function( value, element ) {
	 return this.optional( element ) || /^[\u4e00-\u9fa5]{0,}$/.test( value ); //中文
}
// QQ
$.validator.methods.info_QQ = function( value, element ) {
	 return this.optional( element ) || /^[0-9]*$/.test( value );// 数字
}

// 我的信息验证
function g_validate_updateMyInfoForm() {
	$("#updateMyInfoForm").validate({
		rules : {
		
			
			info_cn : {
				required : true,
				info_cn : true
			},
			info_nickname : {
				required : true,
				info_nickname : true
			},
			info_qiye : {
				required : true,
				info_qiye : true
			},
			info_department : {
				required : true,
				info_department : true
			},
			info_QQ : {
				required : true,
				info_QQ : true
			},
			agree : "required"
		},
		messages : {
			info_cn : "请输入一个有效的姓名!",
			info_nickname : "请输入一个有效的昵称名称!",
			info_qiye : "请输入一个有效的企业!",
			info_department : "请输入一个有效的部门!",
			info_QQ : "请输入一个有效的QQ号码!",
			agree : "Please accept our policy"
		},
		errorElement : "em",
		errorPlacement : function(error, element) {
			// Add the `help-block` class to the error element
			error.addClass("help-block");
			if (element.prop("type") === "checkbox") {
				error.insertAfter(element.parent("label"));
			} else {
				error.insertAfter(element);
			}
		},
		highlight : function(element, errorClass, validClass) {
			$(element).parents(".col-sm-8").addClass("has-error").removeClass("has-success");
		},
		unhighlight : function(element, errorClass, validClass) {
			$(element).parents(".col-sm-8").addClass("has-success").removeClass("has-error");
		},
		submitHandler: function () {
			// http_updateNickname ();
			
			if(load_success == "1"){

				var new_cn = $("#info_cn").val();
				var new_nickname = $("#info_nickname").val();
				var new_qiye = $("#info_qiye").val();
				var new_department = $("#info_department").val();
				var new_QQ = $("#info_QQ").val();
				if(new_cn==load_over_cn && new_nickname==load_over_nickname && new_qiye==load_over_qiye && new_department==load_over_department && new_QQ==load_over_QQ){
					alert(您没有修改任何信息);
				}else {
					// alert("123");
					http_updateMyInfo(new_cn, new_nickname, new_qiye, new_department, new_QQ);
					// alert("发送 post");
				}
			}else {
				alert("加载用户信息失败");
			}

			// alert("验证通过");
		}
	});
}





// 昵称输入框验证
// function g_validate_updateNicknameForm() {
// 	$("#updateNicknameForm").validate({
// 		rules : {
// 			textNewNickname : {
// 				required : true,
// 				textNewNickname : true
// 			},
// 			agree : "required"
// 		},
// 		messages : {
// 			textNewNickname : "请输入一个有效的昵称名称!",
// 			agree : "Please accept our policy"
// 		},
// 		errorElement : "em",
// 		errorPlacement : function(error, element) {
// 			// Add the `help-block` class to the error element
// 			error.addClass("help-block");
// 			if (element.prop("type") === "checkbox") {
// 				error.insertAfter(element.parent("label"));
// 			} else {
// 				error.insertAfter(element);
// 			}
// 		},
// 		highlight : function(element, errorClass, validClass) {
// 			$(element).parents(".col-sm-5").addClass("has-error").removeClass("has-success");
// 		},
// 		unhighlight : function(element, errorClass, validClass) {
// 			$(element).parents(".col-sm-5").addClass("has-success").removeClass("has-error");
// 		},
// 		submitHandler: function () {
// 			http_updateNickname ();
// 		}
// 	});
// }

// 修改qq验证
// function g_validate_updateQQForm() {
// 	$("#updateQQForm").validate({
// 		rules : {
// 			textNewQQ : {
// 				required : true,
// 				textNewQQ : true
// 			},
// 			agree : "required"
// 		},
// 		messages : {
// 			textNewQQ : "请输入一个有效的QQ号码!",
// 			agree : "Please accept our policy"
// 		},
// 		errorElement : "em",
// 		errorPlacement : function(error, element) {
// 			// Add the `help-block` class to the error element
// 			error.addClass("help-block");
// 			if (element.prop("type") === "checkbox") {
// 				error.insertAfter(element.parent("label"));
// 			} else {
// 				error.insertAfter(element);
// 			}
// 		},
// 		highlight : function(element, errorClass, validClass) {
// 			$(element).parents(".col-sm-5").addClass("has-error").removeClass("has-success");
// 		},
// 		unhighlight : function(element, errorClass, validClass) {
// 			$(element).parents(".col-sm-5").addClass("has-success").removeClass("has-error");
// 		},
// 		submitHandler: function () {
// 			http_updateQQ();
// 		}
// 	});
// }

// 修改姓名验证
// function g_validate_updateCnForm() {
// 	$("#updateCnForm").validate({
// 		rules : {
// 			textNewCn : {
// 				required : true,
// 				textNewCn : true
// 			},
// 			agree : "required"
// 		},
// 		messages : {
// 			textNewCn : "请输入一个有效的姓名!",
// 			agree : "Please accept our policy"
// 		},
// 		errorElement : "em",
// 		errorPlacement : function(error, element) {
// 			// Add the `help-block` class to the error element
// 			error.addClass("help-block");
// 			if (element.prop("type") === "checkbox") {
// 				error.insertAfter(element.parent("label"));
// 			} else {
// 				error.insertAfter(element);
// 			}
// 		},
// 		highlight : function(element, errorClass, validClass) {
// 			$(element).parents(".col-sm-5").addClass("has-error").removeClass("has-success");
// 		},
// 		unhighlight : function(element, errorClass, validClass) {
// 			$(element).parents(".col-sm-5").addClass("has-success").removeClass("has-error");
// 		},
// 		submitHandler: function () {
// 			http_updateCn();
// 		}
// 	});
// }

// 修改企业验证
// function g_validate_updateQiyeForm() {
// 	$("#updateQiyeForm").validate({
// 		rules : {
// 			textNewQiye : {
// 				required : true,
// 				textNewQiye : true
// 			},
// 			agree : "required"
// 		},
// 		messages : {
// 			textNewQiye : "请输入一个有效的企业!",
// 			agree : "Please accept our policy"
// 		},
// 		errorElement : "em",
// 		errorPlacement : function(error, element) {
// 			// Add the `help-block` class to the error element
// 			error.addClass("help-block");
// 			if (element.prop("type") === "checkbox") {
// 				error.insertAfter(element.parent("label"));
// 			} else {
// 				error.insertAfter(element);
// 			}
// 		},
// 		highlight : function(element, errorClass, validClass) {
// 			$(element).parents(".col-sm-5").addClass("has-error").removeClass("has-success");
// 		},
// 		unhighlight : function(element, errorClass, validClass) {
// 			$(element).parents(".col-sm-5").addClass("has-success").removeClass("has-error");
// 		},
// 		submitHandler: function () {
// 			http_updateQiye();
// 		}
// 	});
// }

// 修改部门验证
// function g_validate_updateDepartmentForm() {
// 	$("#updateDepartmentForm").validate({
// 		rules : {
// 			textNewDepartment : {
// 				required : true,
// 				textNewDepartment : true
// 			},
// 			agree : "required"
// 		},
// 		messages : {
// 			textNewDepartment : "请输入一个有效的部门!",
// 			agree : "Please accept our policy"
// 		},
// 		errorElement : "em",
// 		errorPlacement : function(error, element) {
// 			// Add the `help-block` class to the error element
// 			error.addClass("help-block");
// 			if (element.prop("type") === "checkbox") {
// 				error.insertAfter(element.parent("label"));
// 			} else {
// 				error.insertAfter(element);
// 			}
// 		},
// 		highlight : function(element, errorClass, validClass) {
// 			$(element).parents(".col-sm-5").addClass("has-error").removeClass("has-success");
// 		},
// 		unhighlight : function(element, errorClass, validClass) {
// 			$(element).parents(".col-sm-5").addClass("has-success").removeClass("has-error");
// 		},
// 		submitHandler: function () {
// 			http_updateDepartment();
// 		}
// 	});
// }



