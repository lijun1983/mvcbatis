/**
 * myPlugin 项公用的函数
 * itemformPlugin 表单处理函数
 * @type {{myPlugin: string, itemformPlugin: string, click: string, change: string}}
 */
;(function () {
    //==================================================================================
    jQuery.fn.rightcommon=function(options)
    {
        var defaults = {myPlugin:'',itemformPlugin:'', CatPlugin:'',click:'click',change:'change',}//默认参数与属性
        var options = $.extend(defaults,options);
        var rightcommon =  {};                  //event事件；按钮层定义一个对像；
      rightcommon['this'] = this;
      rightcommon['myPlugin'] = options.myPlugin;//TODO:项目 处理公共 对象 函数
      rightcommon['itemformPlugin'] = options.itemformPlugin; //TODO:表单处理 对象 函数
      rightcommon['CatPlugin'] = options.CatPlugin;//TODO;栏目处理 对象 函数


      //TODO;添加与修改表单处理
      rightcommon['from2'] = rightcommon['this'].find('#from2');

      //TODO;栏目处理
      rightcommon['Catmodal'] = rightcommon['this'].find('#from2').siblings('div#modal-full-width');//TODO:选择栏目
      /* rightcommon['Tree'] = rightcommon['Catmodal'].find('#Tree')
      rightcommon['TreeTitle'] = rightcommon['Catmodal'].find('#TreeTitle');
      rightcommon['CatPlugin'].TreeTitle(rightcommon);
      rightcommon['initcatajax'] = {};
      rightcommon['cidinput'] =  jQuery('#from2').find('input[name=cid]')
      rightcommon['cid'] =  jQuery('#from2').find('input[name=cid]').attr('value')
      rightcommon['itemCatUrl'] =  '/item/cat/list'//TODO：返回栏目一级记录集 click 递归无限级 URL*/
      //rightcommon['CatPlugin'].initItemCat(rightcommon);



      /**
       * TODO:相册图片上传 本方法含
       * 1. 初始化如果有图片就显示 例在修改商品时
       * 2.如果没有图 就放上默认的示例图片
       * 3.如果是手动 click  上传就遍历 手动上传的图片放至指定的 dom 元素中
       * initPicUpload
       */
      /*rightcommon['picFileUpload'] = rightcommon['Catmodal'].prev('#from2').find('.picFileUpload');//TODO: CLICK 上传按钮
      rightcommon['image'] = rightcommon['Catmodal'].prev('#from2').find("[name=image]");//TODO: 存表单中相册 图片地址，以 逗 号分隔开存放在此 元素 input value 中
      rightcommon['piclist'] = rightcommon['Catmodal'].prev('#from2').find('.piclist');// TODO:上传后将图片放至此元素中
      rightcommon['imagedata'] = '';// TODO:如果默认有图片将？？？？
      rightcommon['CatPlugin'].initPicUpload(rightcommon);*/
      /**
       * TODO:单图片上传 本方法含
       * 1. 初始化如果有图片就显示 例在修改商品时
       * 2.如果没有图 就放上默认的示例图片
       * 3.如果是手动 click  上传就遍历 手动上传的图片放至指定的 dom 元素中
       * initOnePicUpload
       */
    /*  rightcommon['initOnePicUpload'] = rightcommon['Catmodal'].prev('#from2').find('.onePicUpload');//TODO: CLICK 上传按钮
      rightcommon['filePicurl'] = rightcommon['Catmodal'].prev('#from2').find('.filePicurl');// TODO:上传后将图片放至此元素中
      rightcommon['filePicdata'] = '';// TODO:如果默认有图片将？？？？
      rightcommon['CatPlugin'].initOnePicUpload(rightcommon);*/
      //TODO:商品描述 初始加截 KindEditor插件
     //rightcommon['itemAddEditor']  = KindEditor.create("#from2 [name=desc]", rightcommon['CatPlugin'].kingEditorParams);


      //TODO：设置表单的样式和 名称
     // rightcommon['itemformPlugin'].itemformName(rightcommon);

      //TODO： 给 INPUT radio  添加表单  icheck 样式 促销 与 不促销
      //rightcommon['myPlugin'].RadioifChecked(rightcommon);


      //TODO: 推荐到楼层选中与不先切换
      //rightcommon['HotCheckbox'] = rightcommon['from2'].find('.row>.hot').find("[type='checkbox']")
    // rightcommon['myPlugin'].HotCheckbox(rightcommon);

      //TODO: ADD EDIT DEL FANXIANG
      rightcommon['this'].find('.reghtaddeditbutton').children().each(function(index, element){

       // console.log(index)
        //console.log(element)
        jQuery(this).unbind("click").click(function(){
          switch(index){
            //case 0:	$(this).ClickFormDomEdit(objprent,objtext);break;           //编辑,通过对像方式objtext取行内的所有名称文字
            case 0:	jQuery(this).myadd({rightcommon:rightcommon,tag:'add',});break;
            case 1:	jQuery(this).myedit({rightcommon:rightcommon,tag:'edit',});break;
            case 2:	jQuery(this).mydel({rightcommon:rightcommon,tag:'del',});break;
            case 3:	jQuery(this).myfanxiang({rightcommon:rightcommon,tag:'fanxiang',});break;
          }
          return false;
        });
      });
      //TODO:添加表单提交
      rightcommon['this'].find('.addeditsubmit').children().each(function(index, element){
        //console.log(obj)
        //console.log(index)
        //console.log(element)
        jQuery(this).unbind("click").click(function(){
          switch(index){
            case 0:	jQuery(this).Submit({rightcommon:rightcommon,tag:'Submit',});break; //提交
            case 1:	jQuery(this).Cancel({rightcommon:rightcommon,tag:'Cancel',});break;//取消

          }
          return false;
        });
      });


     //rightcommon['itemformPlugin'].myappvalidate(rightcommon);//TODO:表单验证 validate


      /*rightcommon['from2'].find('.row>.hot').find("[type='checkbox']").on('ifChanged',function(event){
        alert(event.type + ' callback');
        console.log($(this).is(':checked'))
        console.log($(this).hasClass('checked'))

        if($(this).is(':checked')){
          console.log("选中");
          jQuery(this).attr('checked',true);
          var hot = $.trim(rightcommon['from2'].find('.row>.hot').attr('value'));
          if(hot.length>0)
          {
            console.log('1');
            //2步.如果有值时；查找过滤相同的值；如找不到相同的就将值+=到JD中
            if (hot.indexOf(jQuery(this).val() + ',') != -1)
            {
              console.log('2')
              //TODO:如果 appendstr 与 jQuery(this).val()有相同 就直截返回,仅处于选中状态；appendstr不变化
              return;
            } else
            {
              console.log('38')
              //TODO:如果 appendstr 与 jQuery(this).val()没有相同 将当前 click input的值 追加到 appendstr 字符中
              hot += jQuery(this).val() + ',';
            }
          }
          else
          {
            console.log('4')
            //TODO:1步.初始都没选时；一点就将值放入
            hot += jQuery(this).val() + ',';
          }

          rightcommon['from2'].find('.row>.hot').attr('value',hot);
        }
        else
        {
          console.log("没 选中 ")
          var hotuncheck = $.trim(rightcommon['from2'].find('.row>.hot').attr('value'));
          jQuery(this).attr('checked',false);
          if (hotuncheck.indexOf(hotuncheck + ',') == -1)
          {
            //console.log('6')
            //TODO：如果 appendstr 与 jQuery(this).val()有相同 通过replace()此函数将 appendstr 中移除对应 ？ input的值
            hotuncheck = hotuncheck.replace(jQuery(this).val() + ',', '');
            rightcommon['from2'].find('.row>.hot').attr('value',hotuncheck);
          }
        }
      });*/

    };
  $.fn.extend({


    myadd:function (rightcommon,tag)
    {
      //console.log('add')
     // console.log('add')

      console.log(rightcommon)

       //alert('add')
      if(rightcommon['tag'] == 'add')
      {
        /*var rightcommon = rightcommon['rightcommon'];
        rightcommon['this'].find('.right_listpage').hide();//TODO:列表
        rightcommon['this'].find('.addEdit').show();//TODO:添加表单
        rightcommon['from2'].attr('formtype','add');//TODO:表单类型
        rightcommon['from2'].find('.addeditsubmit').children(':eq(0)').attr('formtype','add')//TODO：提交类型*/
      }
    },
    myedit:function (rightcommon,tag)
  {
    console.log('edit')
    if(rightcommon['tag'] == 'edit')
    {
      /*var rightcommon = rightcommon['rightcommon'];
      rightcommon['this'].find('.right_listpage').hide();//TODO:列表
      rightcommon['this'].find('.addEdit').show();//TODO:添加表单
      rightcommon['from2'].attr('formtype','edit');//TODO:表单类型
      rightcommon['from2'].find('.addeditsubmit').children(':eq(0)').attr('formtype','edit')//TODO：提交类型*/

      console.log(rightcommon)
    }

  },
    mydel:function (rightcommon,tag)
  {
    console.log('del')
    if(rightcommon['tag'] == 'del')
    {
      var rightcommon = rightcommon['rightcommon'];
      console.log(rightcommon)
    }
  },
    myfanxiang:function (rightcommon,tag)
  {
    console.log('fanxiang')
    if(rightcommon['tag'] == 'fanxiang')
    {
      var rightcommon = rightcommon['rightcommon'];
      console.log(rightcommon)
    }
  },
    //TODO:表单 添加与修改时  提交时需要的 公共函数
    formpublic:function (rightcommon)
    {
      //rightcommon['from2'].find('input[name=price]').val(eval(rightcommon['from2'].find('input[name=priceView]').val()) * 100);

      rightcommon['from2'].find('input[name=price]').val(rightcommon['from2'].find('input[name=priceView]').val());
      //同步文本框中的商品描述
     rightcommon['itemAddEditor'].sync();
    },
  Submit:function (rightcommon,tag)
  {
    console.log('Submit 提交')
    var rightcommon = rightcommon['rightcommon'];
    jQuery(this).formpublic(rightcommon);//TODO:表单提交时需要的 公共函数
    rightcommon['save'] = {};

    if(rightcommon['from2'].attr('formtype') == 'add' && jQuery(this).attr('formtype') == 'add')
    {
      rightcommon['save']['dataa'] = rightcommon['from2'].serialize();
      //TODO:判断 整个表单的判断 验证是否通过
      if(rightcommon['from2'].valid() == true)
      {
        //console.log(rightcommon['save']['dataa'])


        rightcommon['save'] = { type:'POST',url  :"/item/save",dataType:'json',data:rightcommon['save']['dataa'],
          success: function(json)
          {
            //console.log(json.status)
            if(json.status == 200)
            {
              console.log(json);
              $.scojs_message('add添加成功...！', $.scojs_message.TYPE_OK);
            }

          },
        }
        jQuery.ajax(rightcommon['save']);//返回
      }
      else
      {
        console.log('表单验证没通过')
        $.scojs_message('注意：表单验证没通过...！', $.scojs_message.TYPE_ERROR);
      }
    }
    else if(rightcommon['from2'].attr('formtype') == 'edit' && jQuery(this).attr('formtype') == 'edit')
    {
      alert('edit')
      if(rightcommon['from2'].valid() == true)
      {
        $.post("/item/edit",rightcommon['from2'].serialize(), function(data){
          if(data.status == 200){
            console.log(data.status)
            $.scojs_message('edit 商品成功!' + data.status, $.scojs_message.TYPE_OK);
          }
        });
      }
      else
      {
        console.log('表单验证没通过')
        $.scojs_message('注意：表单验证没通过...！', $.scojs_message.TYPE_ERROR);
      }
    }
    //return false;
  },
  Cancel:function (rightcommon,tag)
  {
    console.log('Cancel')
    if(rightcommon['tag'] == 'Cancel')
    {
      var rightcommon = rightcommon['rightcommon'];
      rightcommon['this'].find('.right_listpage').show();//TODO:列表
      rightcommon['this'].find('.addEdit').hide();//TODO:添加表单
      rightcommon['from2'].attr('formtype','');//TODO:表单类型
      rightcommon['from2'].find('.addeditsubmit').children(':eq(0)').attr('formtype','')//TODO：提交类型
      //console.log(rightcommon)
      rightcommon['from2'].resetForm();//TODO:把前面验证的 FORM 恢复到验证前原来的状态。
      rightcommon['itemAddEditor'].html('');
    }
  },
  });
})(jQuery);
$.fn.extend({


});

jQuery(function () {
    //alert('publiclist');
    //console.log(jQuery("body"))
  jQuery("#appright_common").appright({
    id:"appright_common",
    url:"/item/list",
    columns: [
      {field:'ck',checkbox:true},
      { field: 'id', title: '编号',},
      { field: 'title', title: '名称',},
     // { field: 'sellPoint', title: '广告词', width: 'auto', align: 'left' },//移入显示功能
      { field: 'cid', title: 'cid',},
      { field: 'barcode', title: 'barcode',},
      { field: 'num', title: 'num',},
      { field: 'newprice', title: 'price',},
      { field: 'status', title: 'status',},
      { field: 'image', title: 'image',style:'display:none'},
      //{ field: 'image', title: 'image', width: 100, align: 'left' },
      { field: 'created', title: 'created',},//formatter: myPlugin.UnixToDate("yyyy-MM-dd hh:mm:ss")
      { field: 'updated', title: 'updated',},
      { field: 'newsellPoint',title: '广告词',},
      { field: 'Plugin',title: '操作',},
    ],
    RightListDom:true,              //TODO:是否显示列表
    addEdit:false,                   //TODO：是否显示 添加修改表单
    isoddcolor:false,               //TODO：是否隔行变色
    pageinfo:true,                  //TODO：分页列表说明
    right_selectfrom: true,         //TODO：查询表单是否显示
    navigatepageNums:true,          //TODO:是否显示页码号
    page_navigatepageNums:true,     //TODO:是否显示页码号和 上一页 下一页 第一页 上一页 末页 下一页
    frommodel:'item', //TODO:关键 区分是那个模块的表单(必须)
    catdata:true, //TODO:关键 是否返回栏目的一级 pid = 0 数据 默认不返回
    itemparam:true, //TODO:关键 是否返回商品规格参模板 默认不返回

    catlisturl:"/item/cat/list",//TODO：返回 栏目列表
    CatParamUrl:"/item/param/query/itemcatid/",//TODO：返回 商品的规格参数模板
    itemsaveUrl:"/item/save",//TODO：添加   商品
    itemEditUrl:"/item/update",//TODO：修改 商品
    itemDescUrl:"/rest/item/query/item/desc/",//TODO：返回  描述
    cat: [
      {field:'ck',checkbox:true},
      //{ field: 'id', title: '编号', width:'auto', align: 'left'},
      { field: 'text', title: '栏目的ID',},
      { field: 'parentId', title: 'parentId',},
      { field: 'sort_order', title: 'sort_order',},//formatter: myPlugin.UnixToDate("yyyy-MM-dd hh:mm:ss")
      { field: 'state', title: 'state',},//formatter: myPlugin.UnixToDate("yyyy-MM-dd hh:mm:ss")
      { field: 'created', title: 'created',},//formatter: myPlugin.UnixToDate("yyyy-MM-dd hh:mm:ss")
      { field: 'updated', title: 'updated',},
      //{ field: 'paramData',title: '商品规格参数模板字段', width: 'auto', align: 'center' },
      { field: 'Plugin',title: '操作',},
    ],
  });

    $('.date_a').datetimepicker({});
    $('.date_b').datetimepicker({});
    $('.date_c').datetimepicker({});
    $('.date_d').datetimepicker({});
  //jQuery("input[name=cid]").attr('value','1')
  //var ii = MyFunctionValidatePlugin.isInt(jQuery("input[name=cid]").attr('value'));
  //console.log(ii)
});
