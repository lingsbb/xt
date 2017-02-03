//====================================================
//模块功能：添加内部联系人 验证层
//模块日期：2017-01-20
//模块作者：关宇
//====================================================
// form submit 验证

/**
 * 验证逻辑
 */
function g_validate() {
	$("#signupForm").validate({
		rules : {
			email : {
				required : true,
				email : true
			},
			zh:{
				required : true,
				zh : true	
			},
			agree : "required"
		},
		messages : {
			email : "请输入一个有效的电子邮件地址!",
			agree : "Please accept our policy",
			zh:""
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
			$(element).parents(".col-sm-5").addClass("has-error").removeClass("has-success");
		},
		unhighlight : function(element, errorClass, validClass) {
			$(element).parents(".col-sm-5").addClass("has-success").removeClass("has-error");
		}
	});
}

