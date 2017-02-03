//====================================================
//模块功能：修改我的个人信息--密码 验证层
//模块日期：2017-01-20
//模块作者：关宇
//====================================================

$.validator.methods.oldPasswordE = function( value, element ) {
	 return this.optional( element ) || /^[A-Za-z0-9]+$/.test( value );
}
$.validator.methods.newPasswordE = function( value, element ) {
	 return this.optional( element ) || /^[A-Za-z0-9]+$/.test( value );
}
$.validator.methods.qrPasswordE = function( value, element ) {
	 return this.optional( element ) || /^[A-Za-z0-9]+$/.test( value );
}


function g_validate_updatePasswordForm() {
	$("#upPasswordForm").validate({
		rules : {
			oldPasswordE : {
				required : true,
				oldPasswordE : true
			},
			newPasswordE : {
				required : true,
				newPasswordE : true
			},
			qrPasswordE : {
				required : true,
				qrPasswordE : true
			},
			agree : "required"
		},
		messages : {
			oldPasswordE : "请输入正确的密码格式只能包含英文和数字!",
			newPasswordE : "请输入正确的密码格式只能包含英文和数字!",
			qrPasswordE : "请输入正确的密码格式只能包含英文和数字!",
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
			var oldPasswordE = $('#oldPasswordE').val();
			var newPasswordE = $('#newPasswordE').val();
			var qrPasswordE = $('#qrPasswordE').val();
//			alert(oldPasswordE);
//			alert(newPasswordE);
//			alert(qrPasswordE);
			if (oldPasswordE == qrPasswordE || oldPasswordE == newPasswordE) {
				alert("原密码和新密码不能一样");
			} else if(newPasswordE != qrPasswordE){
				alert("新密码和确认密码不一致");
			}  else {
				http_updatePassword (oldPasswordE, qrPasswordE);
			}
		}
	});
}