//====================================================
//模块功能：创建新运单-创建部分 验证层
//模块日期：2017-01-20
//模块作者：莫胜男
//====================================================
/**
 * 中文英文数字和下划线
 */
jQuery.validator.addMethod("userName", function(value, element) {
    return this.optional(element) || /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/.test(value);
}, "用户名必须在5-10个字符之间"); 

/**
 * 验证中文
 */
jQuery.validator.addMethod("chs", function(value, element) {
    return this.optional(element) || /^[\u4e00-\u9fa5]+$/.test(value);
}, "用户名必须在5-10个字符之间");  


