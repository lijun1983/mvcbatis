var myapp = CatPlugin = {
  //TODO:目录行标题样式
  TreeTitle:function (Cat)
  {
    //alert('3')
    var Cat = Cat['Cat'];
    Cat['TreeTitle'].css({"background-color":'#f0f2f5'});
    Cat['TreeTitle'].find('.form-group').css({"margin-bottom":'5px'});
    Cat['TreeTitle'].find('.form-group>label').css({"margin":'5px',"cursor":'pointer',"padding-right":'0%',"font-weight":'bold',"padding-top":'0px'});
    Cat['TreeTitle'].find('.form-group>label').css({"margin":'5px',"cursor":'pointer',"position:":'relative',});
    Cat['TreeTitle'].find('.form-group>label.Q').css({"position":'relative',"left":'0%',"font-weight":'0%',});
    Cat['TreeTitle'].find('.form-group>label.W').css({"position":'absolute',"left":'20.5%',"padding-left":'0%',});
    Cat['TreeTitle'].find('.form-group>label.E').css({"position":'absolute',"left":'23.5%',"padding-left":'0%',"padding-right":'0%',});
    Cat['TreeTitle'].find('.form-group>label.R').css({"position":'absolute',"left":'32%',"padding-left":'0%',});
    Cat['TreeTitle'].find('.form-group>label.T').css({"position":'absolute',"left":'39%',"padding-left":'0%',});
    Cat['TreeTitle'].find('.form-group>label.Y').css({"position":'absolute',"left":'41.5%',"padding-left":'0%',});
    Cat['TreeTitle'].find('.form-group>label.U').css({"position":'absolute',"left":'52%',"padding-left":'0%',});
    Cat['TreeTitle'].find('.form-group>label.I').css({"position":'absolute',"left":'58%',"padding-left":'0%',});
    Cat['TreeTitle'].find('.form-group>label.O').css({"position":'absolute',"left":'63%',"padding-left":'0%',});
    Cat['TreeTitle'].find('.form-group>label.QQ').css({"position":'absolute',"left":'68%',"padding-left":'0%',});
    Cat['TreeTitle'].find('.form-group>label.QW').css({"position":'absolute',"left":'75%',"padding-left":'0%',});
    Cat['TreeTitle'].find('.form-group>label.QE').css({"position":'absolute',"left":'80%',"padding-left":'0%',});
    Cat['TreeTitle'].find('.form-group>label.P').css({"position":'absolute',"left":'90%',"padding-left":'0%',});
  },
  //TODO:初始化商品分类树
  /***
   *
   * @param Cat  对象
   * @returns {boolean}
   */
  initItemCat:function (Cat)
  {
    var Cat = Cat['Cat'];
    //console.log(Cat)
    if(Cat['cid'] != '')
    {
      console.log('cat有数据')
      Cat['cidinput'].attr('value',Cat['cid']);
      Cat['cidinput'].attr('title',Cat['text']);
    }
    else
    {
      console.log('cat没有数据')
      Cat['initcatajax'] = { method:'get',url  :Cat['itemCatUrl'],async : 'true',dataType:  'json',
        success: function(json)
        {
          if(json.length > 0)
          {
            Cat['json'] = json;
            //TODO： 返回列表记录集 放 DOM 中
            Cat['this'].find('#Tree').append(CatPlugin.catlistjson({Cat : Cat}))
            //TODO：给INPUT 添加 iCheck样式
            CatPlugin.treeiCheck(Cat['Tree']);
            //TODO:默认 禁用 input 复选框
            CatPlugin.iCheckuncheck(Cat['Tree'].find('.t>span'))
            //TODO：遍历可见 标题 按钮 和 click展开与折垒效果铵钮
           Cat['Tree'].find('.t>span').each(function(){
              CatPlugin.eachTreeTitle(jQuery(this),Cat);
            });
          }
        },
      }
      jQuery.ajax(Cat['initcatajax']);//返回所有数据表所有记录
    }
    //CatPlugin.clickTitleName(Cat['Tree'].find('.t>span'));
    //return false;
  },
  //TODO：初始返回 PID 等于 0 的记录集
  catlistjson:function (Cat,json)
  {
    var Cat = Cat['Cat'];
    var json = Cat['json'];
    //console.log(Cat['Tree'])
    Cat['Tree'].empty()
    var jsonlist = '';
    var created =''; //13位时间戳函格式化
    var updated =''; //13位时间戳函格式化
    $.each(json,function (key,value)
    {
      created = Cat['myPlugin'].UnixToDate("yyyy-MM-dd hh:mm:ss",new Date(value["created"]));
      updated = Cat['myPlugin'].UnixToDate("yyyy-MM-dd hh:mm:ss",new Date(value["updated"]));
      jsonlist += '<div class="ParentNode del" id="'+value['id']+'" pid="'+value['parentId']+'" goods_typeId="'+value['goods_typeId']+'"   level="'+value['cat_level']+'" path="'+value['path']+'" title="'+value['text']+'"typename="'+value['TypeName']+'">';
      jsonlist += '<input type="checkbox" value="'+value['id']+'">';
      jsonlist += '<div class="t">';
      jsonlist += '<span class="title" state="'+value['state']+'">'+value['text']+'</span>';
      //jsonlist += '<span class="title"><a href="#" state="'+value['state']+'">'+value['text']+'</a></span>';
      jsonlist += '</div>';
      jsonlist += '  <ul>';
      jsonlist += '  <li class="A">'+value['id']+'</li>';
      jsonlist += '  <li class="B">'+value['parentId']+'</li>';
      jsonlist += '  <li class="C" style="">'+created+'</li>';
      jsonlist += '  <li class="D" style="">NO</li>';
      jsonlist += '  <li class="E" style="">NO</li>';
      jsonlist += '  <li class="F" style="">NO</li>';
      jsonlist += '  <li class="G" style="">NO</li>';
      jsonlist += '<li class="H">NO</li>';
      jsonlist += '<li class="I">NO</li>';
      jsonlist += '<li class="J">'+updated+'</li>';
      jsonlist += '<li class="K">'+value['sort_order']+'</li>';
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
    return jsonlist;
  },
  //TODO:添加 iCheck 样式
  treeiCheck:function (obj)
  {
    obj.find('input[type=checkbox]').iCheck({
      checkboxClass: 'icheckbox_square-red',
      increaseArea: '20%' // optional
    });
  },
  //TODO:遍历所有目录的标题 铵钮
  eachTreeTitle:function (obj,Cat)
  {
    obj.each(function(index,element){
      jQuery(this).unbind('click').click(function (){
      //jQuery(this).die().live("click",function (){
        switch(index){
          case 0:	CatPlugin.ClickTreeTitle(jQuery(this),Cat);break;
        }
        return false;
      });
    });
  },
  //TODO: Click 二级三。。。级的目录 ajax java
  //TODO: open 表示 无子节点； closed 表示有子节点
  ClickTreeTitle:function (obj,Cat)
  {
   //TODO: open 表示 无子节点； closed 表示有子节点
   if(obj.attr('state') == 'open')
   {
     console.log('没有下级了')
     //checked
     //TODO: click open 标题 勾选 当前行 前 的 input 的值赋给表单===========================
     //TODO：设置当前 click 标题父级 下的所有 .icheckbox_square-red  添加 removeClass checked class
     obj.closest('.TA').find('.icheckbox_square-red').removeClass('checked')
     //TODO：设置当前 click 标题父级 下的所有 checkbox  添加 checked false
     obj.closest('.TA').find('input[type=checkbox]').attr('checked',false);
     //TODO：设置当前 click 标题 行前面的 div 添加 checked class
     obj.closest('.ParentNode').children('.icheckbox_square-red').addClass('checked');
     //TODO：设置当前 click 标题 行前面的 checkbox 添加 checked 属性
     obj.closest('.ParentNode').find('input[type=checkbox]').attr('checked',true);
     //TODO：取当前 click 标题 行前面的 checkbox 值
     Cat['cid'] = obj.closest('.ParentNode').find('input[type=checkbox]').attr('value');
     Cat['cidname'] = obj.text();
     //TODO:将 Cat['cid'] 赋给表单中  name=cid input
     Cat['this'].closest('#public').find('input[name=cid]').attr('value',Cat['cid']);
     Cat['this'].closest('#public').find('input[name=cid]').attr('title',Cat['cidname']);
     //TODO:当click 选中 复选框 即时关闭弹层事件
     Cat['this'].find('button:eq(0)').click();
     return false;
   }
   else if(obj.attr('state') == 'closed')
   {
     //TODO:禁用 input 复选框 ==============================================
     CatPlugin.iCheckuncheck(Cat['Tree'].find('.t>span'))
     //TODO: //TODO:第一层下的所有 .TA节点  第一层下的当前 .TA  siblings 表示除当前节点外的所有节点操作
     Cat['fadeOut'] = obj.closest('.ParentNode').siblings('.ParentNode').next()//TODO:第一层下的所有 .TA  fadeOut
     Cat['next'] = obj.closest('.ParentNode').next();//TODO:第一层下的当前 .TA  fadeIn
     //TODO:第一层下的所有 .TA  fadeOut===第一层下的当前 .TA  fadeIn============
     Cat['fadeOut'].fadeOut(1000);
     Cat['next'].fadeIn(2000);
     //TODO: click 一层 显示二层 AJAX=========================================
     Cat['initcatajax']['data'] = {};
     Cat['initcatajax']['data']['id'] =  obj.closest('.ParentNode').attr('id');
     Cat['initcatajax']['success'] = function (json) {
       if(json.length>0)
       {

         Cat['publicjson'] = json;
         Cat['next'].addClass('tanone') //先添加 hide 样式
         Cat['next'].empty().append(CatPlugin.nextTitleListPublic({Cat:Cat}))//TODO： 返回列表记录集 放 DOM 中
         CatPlugin.treeiCheck(Cat['Tree']);//给INPUT 添加 iCheck样式
         setTimeout(function () {Cat['next'].removeClass('tanone')},Cat['next'].fadeIn(2000));//移除 hide 添加 fadeIn 渐显示
         //TODO:将所有目录标题注册 eachTreeTitle 函数===========================
         Cat['Tree'].find('.t>span').each(function(){
           CatPlugin.eachTreeTitle(jQuery(this),Cat);
         });//TODO：在次-遍历标题按钮和click展开与折垒效果铵钮
         Cat['Tree'].find('.TA').find('.icheckbox_square-red').css({"margin-left":"10px"});
       }

     },
       jQuery.ajax(Cat['initcatajax']);
   }
  },
  //TODO:tree 二级 公共的列表 记录集
  nextTitleListPublic:function (Cat)
  {
    var Cat = Cat['Cat'];
    var json = Cat['publicjson'];
    var jsonlist = '';

    if(json.length != '')
    {
      var created =''; //13位时间戳函格式化
      var updated =''; //13位时间戳函格式化
      $.each(json,function (key,value)
      {
        created = Cat['myPlugin'].UnixToDate("yyyy-MM-dd hh:mm:ss",new Date(value["created"]));
        updated = Cat['myPlugin'].UnixToDate("yyyy-MM-dd hh:mm:ss",new Date(value["updated"]));
        jsonlist += '<div class="ParentNode del" id="'+value['id']+'"goods_typeId="'+value['goods_typeId']+'" pid="'+value['parentId']+'"  level="'+value['cat_level']+'" path="'+value['path']+'" title="'+value['text']+'"typename="'+value['TypeName']+'">';
        jsonlist += '<input type="checkbox" value="'+value['id']+'">';
        jsonlist += '<div class="t">';
        /*jsonlist += '<span class="title"><a href="#"  state="'+value['state']+'">'+value['text']+'</a></span>';*/
        jsonlist += '<span class="title" state="'+value['state']+'">'+value['text']+'</span>';
        jsonlist += '</div>';
        jsonlist += '  <ul>';
        jsonlist += '  <li class="A">'+value['id']+'</li>';
        jsonlist += '  <li class="B">'+value['parentId']+'</li>';
        jsonlist += '  <li class="C" style="">'+created+'</li>';
        jsonlist += '  <li class="D" style="">NO</li>';
        jsonlist += '  <li class="E" style="">NO</li>';
        jsonlist += '  <li class="F" style="">NO</li>';
        jsonlist += '  <li class="G" style="">NO</li>';
        jsonlist += '<li class="H">NO</li>';
        jsonlist += '<li class="I">NO</li>';
        jsonlist += '<li class="J">'+updated+'</li>';
        jsonlist += '<li class="K">'+value['sort_order']+'</li>';
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

      return jsonlist;
    }
    else
    {
      console.log('没有数据! 这如何判断呢？ 没数据也不报错:暂先用吧')
    }


  },
  iCheckuncheck:function (obj)
  {
    if(obj.attr('state') == 'closed')
    {
      //TODO:设置一二级复选框禁用
      obj.closest('.t').prev().attr('disabled','disabled');
      obj.closest('.t').prev().children('input[type=checkbox]').attr('disabled','disabled');
    }
  },
  //TODO: initItemCat==================END
  //TODO: initPicUpload==================STARTS
  initPicUpload:function ()
  {

  },


};
$.fn.extend({
  test:function ()
  {
    //alert('test')
    console.log('test')
  },


});