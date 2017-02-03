/*
     function g_validate() {
	$("#signupForm").validate({
		rules : {					
                    txtPassword: {
                        required: true,
                        minlength:6  
                    },
                    txtRepeat: {
                        required: true,
                        minlength:6,
                        equalTo:"#txtPassword" 
                    }
                   
		},
		messages : {
			txtPassword:{
				required: "不能为空！",
                minlength:"密码至少6位！" 
			},
			txtRepeat:{
				required: "不能为空！",
                minlength:"密码至少6位！" ,
                equalTo:"密码不一致！"
			}

		},
		errorElement : "em",
		errorPlacement : function(error, element) {
			// Add the `help-block` class to the error element
			error.addClass("help-block1");
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
}*/




