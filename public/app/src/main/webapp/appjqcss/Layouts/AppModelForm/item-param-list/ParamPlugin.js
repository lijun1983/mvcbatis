var myapp = ParamPlugin = {
//测试1
  foo:function(obj) {
    console.log('fooo');
    //console.log(obj);
    //alert('foo')
  },

  eachcloneDom:function (mythis,obj)
  {
    //alert("1")
    //console.log(mythis['from2'].find('.cloneDom').length)
    obj.each(function(index, element){
      jQuery(element).unbind("click").click(function(){
        switch(index){
          case index:	jQuery(element).cloneInit(mythis,jQuery(this),jQuery(this).attr('typename'));break;
        }
        return false;
      });
    });
  },
};
$.fn.extend({
  //TODO:添加分组 - 分组项 -删除分组 项
  cloneInit:function (mythis,obj,typename)
  {
    //console.log(obj)

    if(obj.attr('typename') == 'group')
    {
      console.log('添加 分组')
      //console.log(mythis['ItemparamData'])//mythis['ItemparamData']
      //mythis['from2'].find('div.row:last').after('<div class="cloneDomHtml"/>')//创见节点
      mythis['from2'].find('.cloneDomHtml').append(DomHtml.CloneGroupDomHtml(mythis,null,mythis['frommodel']))
      DomHtml.GroupParamCss();
    }else if(obj.attr('typename') == 'param')
    {
      console.log('add分组项值')
      console.log(obj.closest('div.group').siblings('div.cloneParam'))

     obj.closest('div.group').siblings('div.cloneParam').before(DomHtml.CloneParamDomHtml())//在每个匹配的元素之前插入内容
      DomHtml.GroupParamCss();
    }else if(obj.attr('typename') == 'delparam')
    {
      console.log('删除当前 分组项值')
      //渐隐删除本地行
      obj.closest('div.param').fadeOut('slow',function(){obj.closest('div.param').remove();});
    }else if(obj.attr('typename') == 'delgroup')
    {
      console.log('删除当前 分组')
      obj.closest('div.groupcss').fadeOut('slow',function(){obj.closest('div.groupcss').remove();});
    }
    jQuery(this).closest('#from2').find('.cloneDom').each(function(index, element){
      ParamPlugin.eachcloneDom(mythis,jQuery(this))
    });
    //AppRightFromPlugin.itemformName(mythis['from2'],mythis.frommodel)//样式
  },

  test:function ()
  {
    //alert('test')
    console.log('test')
  },



});