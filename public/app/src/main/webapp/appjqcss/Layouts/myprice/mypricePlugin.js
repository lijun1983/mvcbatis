
var myapp = mypricePlugin = {
  //TODO:价格格式化===========================
  /**
   * TODO:将数值四舍五入(保留2位小数)后格式化成金额形式
   *
   * @param num 数值(Number或者String)
   * @return 金额格式的字符串,如'1,234,567.45'
   * @type String
   */
  formatCurrency:function(num)
  {
    num = num.toString().replace(/\$|\,/g,'');
    if(isNaN(num))
      num = "0";
    sign = (num == (num = Math.abs(num)));
    num = Math.floor(num*100+0.50000000001);
    cents = num%100;
    num = Math.floor(num/100).toString();
    if(cents<10)
      cents = "0" + cents;
    for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
      num = num.substring(0,num.length-(4*i+3))+','+
        num.substring(num.length-(4*i+3));
    return (((sign)?'':'-') + num + '.' + cents);
  },
  /**
   * TODO:将数值四舍五入(保留1位小数)后格式化成金额形式
   *
   * @param num 数值(Number或者String)
   * @return 金额格式的字符串,如'1,234,567.4'
   * @type String
   */
  formatCurrencyTenThou:function(num) {
    //alert('dd')
    num = num.toString().replace(/\$|\,/g,'');
    if(isNaN(num))
      num = "0";
    sign = (num == (num = Math.abs(num)));
    num = Math.floor(num*10+0.50000000001);
    cents = num%10;
    num = Math.floor(num/10).toString();
    for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
      num = num.substring(0,num.length-(4*i+3))+','+
        num.substring(num.length-(4*i+3));
    return (((sign)?'':'-') + num + '.' + cents);
  },
//测试1
  foo:function(obj) {
    console.log('fooo');
    //console.log(obj);
    //alert('foo')
  },


};
$.fn.extend({
  test:function ()
  {
    //alert('test')
   // console.log('test')
  },
  /*initlist:function (obj)
  {
    console.log(obj['obj']);
  },*/


});