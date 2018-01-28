var myapp = AppRightFromPlugin = {

//测试1
  foo:function(obj) {
    console.log('fooo');
    //console.log(obj);
    //alert('foo')
  },
  //TODO：按钮组 add  edit  del xuan
  EachReghtAddEditButton:function (mythis,obj)
  {
    obj.children().each(function(index, element){
      jQuery(this).unbind("click").click(function(){
        switch(index){
          case index:	$(this).ClickReghtAddEditButton(mythis,jQuery(this),obj.attr('typename'));break;           //编辑,通过对像方式objtext取行内的所有名称文字
        }
        return false;
      });
    });
  },




};
$.fn.extend({


  //TODO：按钮组 add  edit  del xuan
  ClickReghtAddEditButton:function (mythis,obj,typename)
  {
    console.log('按钮组')
    //alert('按钮组')
    mythis['addeditsubmit'].find('button:eq(1)').attr('formtype','Cancel')//设置取消表单按钮类型
    if(obj.attr('typename') == 'add')
    {
      mythis['right_listpage'].hide();                                          //TODO:列表
      mythis['addEdit'].show();                                                 //TODO:添加表单
      mythis['from2'].attr('formtype','add');                                   //TODO:表单类型
      mythis['addeditsubmit'].find('button:eq(0)').attr('formtype','add')
      if(mythis.frommodel == "item")
      {
        //mythis['imgaes'] = null;
        mythis['imgaes'] = "";
        obj.ItemFromcommon();
        mythis['from2'].find('.ShowGroupParam').empty();
      }
      else if(mythis.frommodel == 'param')
      {
        mythis['from2'].find('input[name=cid]').attr('value','')               //TODO:先清空栏目input 值
        mythis['from2'].find('div.cloneDomHtml').empty();
        obj.paramFromcommon();
      }
    }
    else if(obj.attr('typename') == 'edit')
    {
      //console.log('edit')
      if(mythis.frommodel == "item")
      {
        var _trId = jQuery("[id='" + mythis.appright_Id + "']").find('tbody.tablelist>tr').find('input:checked').closest('tr').attr('id');
        var trId = MyFunctionValidatePlugin.isInt(_trId)

        if(trId == true)
        {
          mythis['right_listpage'].hide();                                    //TODO:列表
          mythis['addEdit'].show();                                           //TODO:添加表单
          mythis['from2'].attr('formtype','edit');                            //TODO:表单类型
          mythis['addeditsubmit'].find('button:eq(0)').attr('formtype','edit')

          if(mythis.settings.itemparam == true)
          {
           // mythis['cid'] = mythis['from2'].find('input[name=cid]').attr('value')
            mythis['id'] = jQuery("[id='" + mythis.appright_Id + "']").find('tbody.tablelist>tr').find('input:checked').closest('tr').attr('id');
            mythis['cid'] = jQuery("[id='" + mythis.appright_Id + "']").find('tbody.tablelist>tr').find('input:checked').closest('tr').attr('cid');
            mythis['ItemparamData'] = TreeParamPlugin.getItemCatParamAjaxData(mythis,mythis.settings.CatParamUrl,mythis['cid']);       //TODO:关键 是否返回商品规格参模板 默认不返回
            DomHtml.itemUpdateFind();
            // TODO:加载商品描述 /rest/item/query/item/desc/
            obj.ItemFromcommon();
            mythis['itemAddEditor'].sync();
          }

        }
        else
        {
          //alert('1')
          MySubmit.SubmitOK();//TODO:添加与修改成功返回 处理DOM

          $.scojs_message('注意： 请选择一条待修改的记录...！', $.scojs_message.TYPE_ERROR);
        }

      }
      else if(mythis.frommodel == 'param')
      {
        mythis['from2'].find('input[name=cid]').attr('value','')//TODO:先清空栏目input 值
        var _trId = jQuery("[id='" + mythis.appright_Id + "']").find('tbody.tablelist>tr').find('input:checked').closest('tr').attr('itemcatid');
        var trId = MyFunctionValidatePlugin.isInt(_trId)
        if(trId == true)
        {
          //alert("2")
          mythis['right_listpage'].hide();//TODO:列表
          mythis['addEdit'].show();//TODO:添加表单
          mythis['from2'].attr('formtype','edit');//TODO:表单类型
          mythis['addeditsubmit'].find('button:eq(0)').attr('formtype','edit')

          obj.paramFromcommon();
          if(mythis.settings.itemparam == true)
          {
            mythis['from2'].find('input[name=cid]').attr('value',_trId)
            mythis['cid'] = mythis['from2'].find('input[name=cid]').attr('value')
            TreeParamPlugin.getItemCatParamAjaxData(mythis,mythis.settings.CatParamUrl,mythis['cid']);       //TODO:关键 是否返回商品规格参模板 默认不返回
          }

        }
        else
        {
          //alert('1')
          MySubmit.SubmitOK();//TODO:添加与修改成功返回 处理DOM
          /*mythis['right_listpage'].show();//TODO:列表
          mythis['addEdit'].hide();//TODO:添加表单
          mythis['from2'].attr('formtype','add');//TODO:表单类型
          mythis['addeditsubmit'].find('button:eq(0)').attr('formtype','add')
          mythis['from2'].resetForm();//TODO:把前面验证的 FORM 恢复到验证前原来的状态。
          jQuery("[id='" + mythis.appright_Id + "']").find('tbody.tablelist>tr').find('input').attr('checked',false);
          jQuery("[id='" + mythis.appright_Id + "']").find('tbody.tablelist>tr').find('input').parent('div').removeClass('checked');*/
          $.scojs_message('注意： 请选择一条待修改的记录...！', $.scojs_message.TYPE_ERROR);
        }


      }
    }else if(obj.attr('typename') == 'del')
    {
      console.log('del')
    }else if(obj.attr('typename') == 'xuan')
    {
      console.log('xuan')
    }
    else if(obj.attr('typename') == 'retu')
    {
      console.log('返回列表 ')
      mythis['right_listpage'].show();//TODO:列表
      mythis['addEdit'].hide();//TODO:添加表单
      mythis['from2'].attr('formtype','add');//TODO:表单类型
      mythis['addeditsubmit'].find('button:eq(0)').attr('formtype','add')
      mythis['from2'].resetForm();//TODO:把前面验证的 FORM 恢复到验证前原来的状态。
      jQuery("[id='" + mythis.appright_Id + "']").find('tbody.tablelist>tr').find('input').attr('checked',false);
      jQuery("[id='" + mythis.appright_Id + "']").find('tbody.tablelist>tr').find('input').parent('div').removeClass('checked');
      if(mythis.frommodel == 'item')
      mythis['itemAddEditor'].html('');
    }
  },
  ItemFromcommon:function ()
  {

    DomHtml.itemformName(mythis['from2'],mythis.frommodel)                           //TODO：设置表单的样式和 名称
    MyjQeryValidatePlugin.myItemFromValidate(mythis['from2'],mythis.frommodel);                 //TODO:表单验证 validate
    if(mythis.settings.catdata == true)
    {
      TreeParamPlugin.getCatlistAjaxData(mythis.settings.catlisturl);                    //TODO：初始返回列表数据AJAX 是否返回栏目的一级 pid = 0 数据 默认不返回
    }
    //TODO:栏目 列表 可选 ===============================
    TreeParamPlugin.CatlistElement();//TODO:初始化元素
    TreeParamPlugin.CatlisTableHead();//TODO:初始化表头
    TreeParamPlugin.CatlisTableBody();//TODO:初始化动态行
    TreeParamPlugin.eachTreeTitle(mythis,mythis['level1']);//TODO:选择栏目 click 带栏目的ID 并查出 当前商品所属栏目是否有规格参数模板
    //TODO:栏目 列表 可选 ===============================END
    TreeParamPlugin.FromRCcheckbox();//TODO: 推荐到楼层:
    TreeParamPlugin.FromRadioifChecked(); //TODO： 给 INPUT radio  添加表单  icheck 样式 促销 与 不促销
    //TODO:商品描述 初始加截 KindEditor插件
    myKindEditorPlugin.createEditor();
    mythis['itemAddEditor']  = KindEditor.create("#from2 [name=desc]", myKindEditorPlugin.kingEditorParams);
    /**
     * TODO:单图片上传 本方法含
     * 1. 初始化如果有图片就显示 例在修改商品时
     * 2.如果没有图 就放上默认的示例图片
     * 3.如果是手动 click  上传就遍历 手动上传的图片放至指定的 dom 元素中
     * initOnePicUpload
     */
    myKindEditorPlugin.initOnePicUpload();
    /**
     * TODO:相册图片上传 本方法含
     * 1. 初始化如果有图片就显示 例在修改商品时
     * 2.如果没有图 就放上默认的示例图片
     * 3.如果是手动 click  上传就遍历 手动上传的图片放至指定的 dom 元素中
     * initPicUpload
     */
   // mythis['imgaes'] = "";
    myKindEditorPlugin.initPicUpload();

  },
  paramFromcommon:function()
  {
    DomHtml.itemformName(mythis['from2'],mythis.frommodel)                           //TODO：设置表单的样式和 名称
    MyjQeryValidatePlugin.myParamFromValidate(mythis['from2'],mythis.frommodel);                 //TODO:表单验证 validate
    if(mythis['from2'].find('div.cloneDomHtml').length == 0)
    {

      mythis['from2'].find('div.row:last').after('<div class="cloneDomHtml"/>')//创见节点
    }
    if(mythis.settings.catdata == true)
    {
      TreeParamPlugin.getCatlistAjaxData(mythis.settings.catlisturl);                        //TODO：初始返回列表数据AJAX 是否返回栏目的一级 pid = 0 数据 默认不返回
    }

    //TODO:栏目 列表 可选 ===============================
    TreeParamPlugin.CatlistElement();//TODO:初始化元素
    TreeParamPlugin.CatlisTableHead();//TODO:初始化表头
    TreeParamPlugin.CatlisTableBody();//TODO:初始化动态行

    TreeParamPlugin.eachTreeTitle(mythis,mythis['level1']);//TODO:选择栏目 click 带栏目的ID 并查出 当前商品所属栏目是否有规格参数模板
    //TODO:栏目 列表 可选 ===============================END
    //TODO: 规格参数 模块 param
    DomHtml.itemformName(mythis['from2'],mythis.frommodel) //样式处理

    ParamPlugin.eachcloneDom(mythis,mythis['from2'].find('.cloneDom'))//TODO:添加规格参数 分组模板
  },



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