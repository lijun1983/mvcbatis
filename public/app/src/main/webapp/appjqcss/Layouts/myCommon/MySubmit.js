var myapp = MySubmit = {
  //TODO：表单的提交
  EachAddEditSubmit:function (mythis,obj)
  {
    obj.children().each(function(index, element){
      //console.log(obj)
      //console.log(index)
      //console.log(element)
      jQuery(this).unbind("click").click(function(){
        switch(index){
          case index:	jQuery(this).ClickSubmitCancel(mythis,jQuery(this),obj.attr('formtype'));break; //提交
          //case 1:	jQuery(this).Cancel({rightcommon:rightcommon,tag:'Cancel',});break;//取消

        }
        return false;
      });
    });
  },
  //TODO:添加与修改成功返回 处理DOM
  SubmitOK:function ()
  {
    mythis['right_listpage'].show();//TODO:列表
    mythis['addEdit'].hide();//TODO:添加表单
    mythis['from2'].attr('formtype','add');//TODO:表单类型
    mythis['addeditsubmit'].find('button:eq(0)').attr('formtype','add')
    mythis['from2'].resetForm();//TODO:把前面验证的 FORM 恢复到验证前原来的状态。
    jQuery("[id='" + mythis.appright_Id + "']").find('tbody.tablelist>tr').find('input').attr('checked',false);
    jQuery("[id='" + mythis.appright_Id + "']").find('tbody.tablelist>tr').find('input').parent('div').removeClass('checked');
  },

};
$.fn.extend({

  ClickSubmitCancel:function (mythis,obj,formtype)
  {
    mythis['submit'] = {};
    console.log(obj)
    if(obj.attr('formtype') == 'add')
    {
      console.log('Submit-mythis')
      // alert('mythis')
      if(mythis.frommodel == 'item')
      {obj.ItemSavePost(mythis);}
      else if(mythis.frommodel == 'param')
      {obj.paramSavePost(mythis);}
    }else if(obj.attr('formtype') == 'edit')
    {
      console.log('edit')
      if(mythis.frommodel == 'item')
      {obj.ItemSavePost(mythis);}
      else if(mythis.frommodel == 'param')
      {obj.paramSavePost(mythis);}
    }
    else if(obj.attr('formtype') == 'Cancel')
    {
      console.log('Cancel')
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
  paramSavePost:function ()
  {
    //alert('paramSavePost')
    mythis['_group'] = mythis['from2'].find('.cloneDomHtml');
    var params = strobjarray.FromStrObjArray(mythis['_group']);
    mythis['paramData'] = JSON.stringify(params)
    console.log(mythis['paramData'])
    if(mythis['from2'].attr('formtype') == 'add')
    {
      if(mythis['from2'].find('input[name=cid]').attr('value') != "")
      {
        //alert("1")
        if(mythis['from2'].valid() == true)
        {

          //alert("2")
          var paramsaveUrl = mythis.settings.paramsaveUrl+mythis['from2'].find('input[name=cid]').attr('value');
          $.post(paramsaveUrl,{"paramData":mythis['paramData']},function(data){
            if(data.status == 200){
              MySubmit.SubmitOK();//TODO:添加与修改成功返回 处理DOM
              $.scojs_message('新增  商品 规格成功!', $.scojs_message.TYPE_OK);
              /*mythis['right_listpage'].show();//TODO:列表
              mythis['addEdit'].hide();//TODO:添加表单
              mythis['from2'].attr('formtype','add');//TODO:表单类型
              mythis['addeditsubmit'].find('button:eq(0)').attr('formtype','add')*/
            }
          });
        }
        else
          $.scojs_message('注意： 表单验证未通过...！', $.scojs_message.TYPE_ERROR);
      }
      else
        $.scojs_message('注意： 没有选择栏目...！', $.scojs_message.TYPE_ERROR);
    }
    else if(mythis['from2'].attr('formtype') == 'edit')
    {
      console.log('paramedit 没写')
      alert("修改")
      if(mythis['from2'].find('input[name=cid]').attr('value') != "")
      {


        if(mythis['from2'].valid() == true)
        {
          alert("edit paramData")

          var paramsaveUrl = mythis.settings.paramsaveUrl+mythis['from2'].find('input[name=cid]').attr('value');
          $.post(paramsaveUrl,{"paramData":mythis['paramData']},function(data){
            if(data.status == 200){
              MySubmit.SubmitOK();//TODO:添加与修改成功返回 处理DOM
              $.scojs_message('Edit 商品 规格成功!', $.scojs_message.TYPE_OK);

            }
          });
        }
        else
          $.scojs_message('注意： 表单验证未通过...！', $.scojs_message.TYPE_ERROR);
      }
      else
        $.scojs_message('注意： 没有选择栏目...！', $.scojs_message.TYPE_ERROR);

    }

  },
  ItemSavePost:function ()
  {
    mythis['from2'].find('input[name=price]').val(mythis['from2'].find('input[name=priceView]').val());
    mythis['itemAddEditor'].sync();//同步文本框中的商品描述
    mythis['_group'] = mythis['from2'].find('.ShowGroupParam');

    var params = strobjarray.FromStrObjArray(mythis['_group']);
    mythis['paramData'] = JSON.stringify(params)

    mythis['from2'].find('[name=itemParams]').attr('value',mythis['paramData'])


    if(mythis['from2'].attr('formtype') == 'add')
    {
      alert(mythis['from2'].valid())

      if(mythis['from2'].valid() == true)
      {
        var itemsaveUrl = mythis.settings.itemsaveUrl;
        mythis['submit']['data'] = mythis['from2'].serialize();
        //console.log(rightcommon['save']['dataa'])
        mythis['submit'] = {type:'POST',url  :itemsaveUrl,dataType:'json',data:mythis['submit']['data'],
          success: function(json)
          {
            //console.log(json.status)
            if(json.status == 200)
            {
              console.log(json);
              MySubmit.SubmitOK();//TODO:添加与修改成功返回 处理DOM
              $.scojs_message('add添加成功...！', $.scojs_message.TYPE_OK);
            }

          },
        }
        //console.log(mythis['submit'])
        jQuery.ajax(mythis['submit']);//返回
      }
      else
        console.log('表单验证没通过')
      $.scojs_message('注意：表单验证没通过...！', $.scojs_message.TYPE_ERROR);
    }
    else if(mythis['from2'].attr('formtype') == 'edit')
    {

      console.log('itemedit 没写')
      console.log(mythis['from2'].valid())
      if(mythis['from2'].valid() == true)
      {
        /*var itemEditUrl = mythis.settings.itemEditUrl;
         $.post(itemEditUrl,mythis['from2'].serialize(), function(data){
         if(data.status == 200){
         console.log(data.status)
         $.scojs_message('edit 商品成功!' + data.status, $.scojs_message.TYPE_OK);
         }
         });*/
      }
      else
      {
        console.log('表单验证没通过')
        $.scojs_message('注意：表单验证没通过...！', $.scojs_message.TYPE_ERROR);
      }

    }


  },

});