var myapp = MyFunctionValidatePlugin = {

  /**
   * @param intValue value 值
   * @returns {boolean|*}
   */
  isInt: function (intValue){
  var intPattern=/^0$|^[1-9]\d*$/; //整数的正则表达式 不可以是0 负数 字母 返回 true false
  result=intPattern.test(intValue);
  return result;
  }




};
$.fn.extend({
  test: function ()
  {
    //alert('test')
    console.log('test')
  },


});
