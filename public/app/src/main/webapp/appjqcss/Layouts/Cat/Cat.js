/**
 * Created by root on 18-1-1.
 */
;(function () {
  //==================================================================================
  jQuery.fn.Cat=function(options)
  {
    var defaults = {myPlugin:'',CatPlugin:'', click:'click',change:'change',
    }//默认参数与属性
    var options = $.extend(defaults,options);
    var Cat =  {};                  //event事件；按钮层定义一个对像；
    Cat['this'] = this;
    Cat['myPlugin'] = options.myPlugin;
    Cat['CatPlugin'] = options.CatPlugin;
    Cat['Tree'] = Cat['this'].find('#Tree');
    Cat['TreeTitle'] = Cat['this'].find('#TreeTitle');
    Cat['CatPlugin'].TreeTitle({Cat:Cat});

    Cat['initcatajax'] = {};
    //console.log(jQuery('#from2').find('input[name=cid]'))
    //console.log(jQuery('#from2').find('input[name=cid]').attr('value'))
    Cat['cidinput'] =  jQuery('#from2').find('input[name=cid]')
    Cat['cid'] =  jQuery('#from2').find('input[name=cid]').attr('value')
    Cat['itemCatUrl'] =  '/item/cat/list';

    Cat['CatPlugin'].initItemCat({Cat:Cat});
    Cat['CatPlugin'].initPicUpload({Cat:Cat});




    /*Cat['initcatajax'] = { method:'get',url  :"/item/cat/list",async : 'true',dataType:  'json',
      success: function(json)
      {
        if(json.length > 0)
        {
          Cat['json'] = json;
          jQuery(this).catlistjson({Cat : Cat, }); //TODO:返回列表记录集
        }
      },
    }
    //console.log( Cat['initcatajax'])
    jQuery.ajax(Cat['initcatajax']);//返回所有数据表所有记录*/
   // console.log(Cat);
  };
  $.fn.extend({

   /* catlistjson:function (Cat)
    {
      var Cat = Cat['Cat'];
      var json = Cat['json'];
      //Cat['Tree'].empty();
      var jsonlist = '';
     // console.log(json)
      $.each(json,function (key,value)
      {
          //console.log(value['title']);'+v['id']+'fa-plus cat_level
          jsonlist += '<div class="ParentNode del" id="'+value['id']+'"goods_typeId="'+value['goods_typeId']+'" pid="'+value['pid']+'"  level="'+value['cat_level']+'" path="'+value['path']+'" title="'+value['title']+'"typename="'+value['TypeName']+'">';
          jsonlist += '<input type="checkbox" value="'+value['id']+'">';
          jsonlist += '<div class="t">';
          jsonlist += '<span class="title"><a href="#" state="'+value['state']+'">'+value['text']+'</a></span>';
          jsonlist += '</div>';
          jsonlist += '  <ul>';
          jsonlist += '  <li class="A">'+value['id']+'</li>';
          jsonlist += '  <li class="B">'+value['pid']+'</li>';
          jsonlist += '  <li class="C" style="">'+value['path']+'</li>';
          jsonlist += '  <li class="D" style="">'+value['cat_level']+'</li>';
          jsonlist += '  <li class="E" style="">顶 级</li>';
          jsonlist += '  <li class="F" style="">'+value['TypeName']+'</li>';
          jsonlist += '  <li class="G" style="">'+value['price_nums']+'</li>';
          jsonlist += '<li class="H">'+value['filter_attr']+'</li>';
          jsonlist += '<li class="I">'+value['is_show']+'</li>';
          jsonlist += '<li class="J">'+value['iconCls']+'</li>';
          jsonlist += '<li class="K">'+value['sort']+'</li>';
          jsonlist += '  </ul>';
          jsonlist += '  <div class="ok" style="">';
          jsonlist += '  <i class="glyphicon glyphicon-remove"></i><i class="glyphicon glyphicon-ok "></i>';
          jsonlist += '  </div>';
          jsonlist += '  <div class="editArea" style="">';
          jsonlist += '  <span>[编辑]</span>';
          jsonlist += ' <span>[添加栏目]</span>';
          jsonlist += ' <span>[设置筛选]</span>';
          jsonlist += ' <span>[刷新]</span>';
          jsonlist += ' <span>[删除]</span>';
          jsonlist += ' </div>';
          jsonlist += ' </div>';

          jsonlist += ' <div class="TA" ></div>';
      });

      Cat['this'].find('#Tree').append(jsonlist)
      Cat['Tree'].find('input[type=checkbox]').iCheck({
      checkboxClass: 'icheckbox_square-red',
      increaseArea: '20%' // optional
      });
      //Cat['imggif'].css({"position":"absolute","left":"50%","top":"20%",})
    }*/

  });
})(jQuery);

jQuery(function () {
  //alert('publiclist');
  //console.log(jQuery("body"))
  jQuery("#modal-full-width").Cat({
    myPlugin:myPlugin,
    CatPlugin:CatPlugin,
  });


});
