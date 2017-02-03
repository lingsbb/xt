//====================================================
//模块功能：个人信息页面 验证层
//模块日期：2017-01-20
//模块作者：关宇
//====================================================
// form submit 验证 return this.optional( element ) || /^[\u4e00-\u9fa5]+/.test( value );
// 昵称
$.validator.methods.textNewNickname = function( value, element ) {
	 return this.optional( element ) || /^[\u4e00-\u9fa5]{0,}$/.test( value );// 中文
}
// QQ
$.validator.methods.textNewQQ = function( value, element ) {
	 return this.optional( element ) || /^[0-9]*$/.test( value );// 数字
}

// 姓名
$.validator.methods.textNewCn = function( value, element ) {
	 return this.optional( element ) || /^[\u4e00-\u9fa5]{0,}$/.test( value ); //中文
}

// 企业名称
$.validator.methods.textNewQiye = function( value, element ) {
	 return this.optional( element ) || /^[\u4e00-\u9fa5]{0,}$/.test( value ); //中文
}

// 部门
$.validator.methods.textNewDepartment = function( value, element ) {
	 return this.optional( element ) || /^[\u4e00-\u9fa5]{0,}$/.test( value ); //中文
}

// 昵称输入框验证
function g_validate_updateNicknameForm() {
	$("#updateNicknameForm").validate({
		rules : {
			textNewNickname : {
				required : true,
				textNewNickname : true
			},
			agree : "required"
		},
		messages : {
			textNewNickname : "请输入一个有效的昵称名称!",
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
			$(element).parents(".col-sm-5").addClass("has-error").removeClass("has-success");
		},
		unhighlight : function(element, errorClass, validClass) {
			$(element).parents(".col-sm-5").addClass("has-success").removeClass("has-error");
		},
		submitHandler: function () {
			http_updateNickname ();
		}
	});
}

// 修改qq验证
function g_validate_updateQQForm() {
	$("#updateQQForm").validate({
		rules : {
			textNewQQ : {
				required : true,
				textNewQQ : true
			},
			agree : "required"
		},
		messages : {
			textNewQQ : "请输入一个有效的QQ号码!",
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
			$(element).parents(".col-sm-5").addClass("has-error").removeClass("has-success");
		},
		unhighlight : function(element, errorClass, validClass) {
			$(element).parents(".col-sm-5").addClass("has-success").removeClass("has-error");
		},
		submitHandler: function () {
			http_updateQQ();
		}
	});
}

// 修改姓名验证
function g_validate_updateCnForm() {
	$("#updateCnForm").validate({
		rules : {
			textNewCn : {
				required : true,
				textNewCn : true
			},
			agree : "required"
		},
		messages : {
			textNewCn : "请输入一个有效的姓名!",
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
			$(element).parents(".col-sm-5").addClass("has-error").removeClass("has-success");
		},
		unhighlight : function(element, errorClass, validClass) {
			$(element).parents(".col-sm-5").addClass("has-success").removeClass("has-error");
		},
		submitHandler: function () {
			http_updateCn();
		}
	});
}

// 修改企业验证
function g_validate_updateQiyeForm() {
	$("#updateQiyeForm").validate({
		rules : {
			textNewQiye : {
				required : true,
				textNewQiye : true
			},
			agree : "required"
		},
		messages : {
			textNewQiye : "请输入一个有效的企业!",
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
			$(element).parents(".col-sm-5").addClass("has-error").removeClass("has-success");
		},
		unhighlight : function(element, errorClass, validClass) {
			$(element).parents(".col-sm-5").addClass("has-success").removeClass("has-error");
		},
		submitHandler: function () {
			http_updateQiye();
		}
	});
}

// 修改部门验证
function g_validate_updateDepartmentForm() {
	$("#updateDepartmentForm").validate({
		rules : {
			textNewDepartment : {
				required : true,
				textNewDepartment : true
			},
			agree : "required"
		},
		messages : {
			textNewDepartment : "请输入一个有效的部门!",
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
			$(element).parents(".col-sm-5").addClass("has-error").removeClass("has-success");
		},
		unhighlight : function(element, errorClass, validClass) {
			$(element).parents(".col-sm-5").addClass("has-success").removeClass("has-error");
		},
		submitHandler: function () {
			http_updateDepartment();
		}
	});
}



