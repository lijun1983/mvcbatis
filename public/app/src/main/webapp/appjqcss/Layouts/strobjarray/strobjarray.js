var myapp = strobjarray = {
//测试1
  foo:function(obj) {
    console.log('fooo');
    //console.log(obj);
    //alert('foo')
  },
//"[{"group":"组名1","params":["组员1","组员2"]},{"group":"组名2","params":["组员1","组员2"]},{"group":"组名3","params":["组员1","组员2","组员3","组员4"]}]"
  //"[{"group":"主体","params":["品牌","型号","颜色","上市年份"]},{"group":"网络","params":["4G网络制式","3G网络制式","2G网络制式"]},{"group":"存储","params":["机身内存","储存卡类型"]}]"
  FromStrObjArray:function (obj)
  {
    //console.log(mythis)
    //alert('mythis')
    var params = [];
   // var _group = mythis['from2'].find('.cloneDomHtml').find('[name="group"]')
    var _group = obj.find('[name="group"]')
    //console.log(_group)
    _group.each(function (i,e)
    {
      var _params = jQuery(e).closest('div.group').siblings("div.param").find('[name="param"]');
      var _ps = [];
      _params.each(function(_i,_e)
      {
        var _val = $(_e).val();
        //console.log($(_e).val())
        if($.trim(_val).length>0){
          _ps.push(_val);
        }
      });
      var _val = $(e).val();
      //console.log($(e).val())
      if($.trim(_val).length>0 && _ps.length > 0)
      {
        params.push({
          "group":_val,
          "params":_ps
        });
      }
    });
    //console.log(params)
    return params;


  },


};
$.fn.extend({


  test:function ()
  {
    //alert('test')
    console.log('test')
  },



});