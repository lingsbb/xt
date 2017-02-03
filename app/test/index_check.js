/**
 * 验证密码
 */
$.validator.addMethod("password", function(value, element) {
	//var password = /^[a-zA-Z0-9_]*$/;
	return this.optional(element) || (__password.test(value));
}, "请使用英文字母、数字和下划线输入");
/**
 * 验证账号
 */
$.validator.addMethod("cn", function(value, element) {
	//var cn = /^[\u4E00-\u9FA5A-Za-z0-9_]+$/;
	return this.optional(element) || (__cn.test(value));
},"用户账号输入错误，请使用英文字母输入！");
/**
 * 验证通过在这里写
 */
$.validator.setDefaults({
	submitHandler: function() {
		alert("提交成功");
	}
});
/**
 * jQuery Validate通用过程
 */
function setValidate(){
	// validate signup form on keyup and submit
	$("#signupForm").validate({
		rules: {
			firstname: "required",
			lastname: "required",
			username: {
				required: true,
				minlength: 2
			},
			password: {
				required: true,
				minlength: 5
			},
			confirm_password: {
				required: true,
				minlength: 5,
				equalTo: "#password"
			},
			email: {
				required: true,
				email: true
			},
			topic: {
				required: "#newsletter:checked",
				minlength: 2
			},
			agree: "required"
		},
		messages: {
			firstname: "Please enter your firstname",
			lastname: "Please enter your lastname",
			username: {
				required: "Please enter a username",
				minlength: "Your username must consist of at least 2 characters"
			},
			password: {
				required: "Please provide a password",
				minlength: "Your password must be at least 5 characters long"
			},
			confirm_password: {
				required: "Please provide a password",
				minlength: "Your password must be at least 5 characters long",
				equalTo: "Please enter the same password as above"
			},
			email: "Please enter a valid email address",
			agree: "Please accept our policy",
			topic: "Please select at least 2 topics"
		}
	});
}

function check()
	return true;
}