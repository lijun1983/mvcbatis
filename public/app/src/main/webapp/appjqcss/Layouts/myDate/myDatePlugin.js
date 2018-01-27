Date.prototype.format = function(format){
  var o =  {
    "M+" : this.getMonth()+1, //month
    "d+" : this.getDate(), //day
    "h+" : this.getHours(), //hour
    "m+" : this.getMinutes(), //minute
    "s+" : this.getSeconds(), //second
    "q+" : Math.floor((this.getMonth()+3)/3), //quarter
    "S" : this.getMilliseconds() //millisecond
  };
  if(/(y+)/.test(format)){
    format = format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
  }
  for(var k in o)  {
    if(new RegExp("("+ k +")").test(format)){
      format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length));
    }
  }
  return format;
};
var myapp = myDatePlugin = {

  //TODO: 13位时间戳函格式化为日期时间  1428755918000 转成 2015-03-08 21:33:18
  UnixToDate:function (format,currDate) {
    //console.log('111')
    // console.log(currDate)
    /*
     ×调用
     * var Currdate=formatDate("yyyy-MM-dd hh:mm:ss",new Date(1425821598000));
     * console.log(Currdate);
     * TODO:本案调用 : created=myPlugin.formatDate("yyyy-MM-dd hh:mm:ss",new Date(obj["created"]));
     */
    var o = {
      "M+" :currDate.getMonth() + 1, // month
      "d+" :currDate.getDate(), // day
      "h+" :currDate.getHours(), // hour
      "m+" :currDate.getMinutes(), // minute
      "s+" :currDate.getSeconds(), // second
      "q+" :Math.floor((currDate.getMonth() + 3) / 3), // quarter
      "S" :currDate.getMilliseconds()
      // millisecond
    }
    if (/(y+)/.test(format)) {
      format = format.replace(RegExp.$1, (currDate.getFullYear() + "")
        .substr(4 - RegExp.$1.length));
    }


    for ( var k in o) {
      if (new RegExp("(" + k + ")").test(format)) {
        format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k]
          : ("00" + o[k]).substr(("" + o[k]).length));
      }
    }
    return format;
  },
  //TODO:format 和上面 这个 函数 UnixToDate 一样？
  format:function(format){
    var o =  {
      "M+" : this.getMonth()+1, //month
      "d+" : this.getDate(), //day
      "h+" : this.getHours(), //hour
      "m+" : this.getMinutes(), //minute
      "s+" : this.getSeconds(), //second
      "q+" : Math.floor((this.getMonth()+3)/3), //quarter
      "S" : this.getMilliseconds() //millisecond
    };
    if(/(y+)/.test(format)){
      format = format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    }
    for(var k in o)  {
      if(new RegExp("("+ k +")").test(format)){
        format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length));
      }
    }
    return format;
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
    console.log('test')
  },
  /*initlist:function (obj)
  {
    console.log(obj['obj']);
  },*/


});