var myapp = TreeParamPlugin = {

  getItemCatParamAjaxData: function (mythis,url,cid) {
   // alert(mythis['frommodel'])// && mythis['frommodel'] == 'item'
    if(cid != "")
    {
     // alert('有值')
      mythis['CatParamAjax'] = {url: url+cid,async: false,dataType:  'json',};
      mythis['CatParamAjax']['success'] = function (data)
      {
        //console.log(data)
        //console.log(data.data)
        if(data.status == 200 && data.data)
        {
          DomHtml.CloneGroupDomHtml(mythis,data.data,mythis['frommodel']);
         // $.scojs_message('该类目已经添加规格参数，请选择其他类目...！', $.scojs_message.TYPE_OK);
          //return mythis['ItemparamData'] = data.data;
          //$.scojs_message('注意：该类目(没有)添加规格参数...！', $.scojs_message.TYPE_ERROR);
        }else if(data.data == null)
        {
          mythis['from2'].find('div.cloneDomHtml').empty();
          mythis['from2'].find('.ShowGroupParam').empty();
        }

      };

      $.ajax(mythis['CatParamAjax']);
    }else
    {
      console.log('cid 无值')
     // DomHtml.CloneGroupDomHtml();
      $.scojs_message('注意： 没有 规格参数 数据...！', $.scojs_message.TYPE_ERROR);
    }

  },

  getCatlistAjaxData: function (catlisturl,Catparms)
  {
    mythis['Catajax'] = {url: catlisturl,async: false,data:Catparms};
    if(Catparms == undefined)
    {
      mythis['Catajax']['success'] = function (data)
      {
        //console.log(data);
        if(data.length>0)
        {
          mythis['childlist'] = TreeParamPlugin.fromdata(data); //TODO:格式化返回 data 字段
          //console.log(mythis['childlist'])
          return mythis['childlist'];
        }
        // console.log('没有记录!')
      };
      $.ajax(mythis['Catajax']);
    }
    else
    {
      mythis['Catajax']['success'] = function (data)
      {
        if(data.length>0)
        {
          mythis['Catlistnextdata'] = TreeParamPlugin.fromdata(data); //TODO:格式化返回 data 字段
          return mythis['Catlistnextdata'];
        }
        // console.log('没有记录!')
      };
      $.ajax(mythis['Catajax']);
    }
  },

  fromdata:function (data)
  {
    for(var i=0;i<data.length;i++)
    {
      // console.log(data[i]['ck'] = data[i]['id'])
      data[i]['ck'] = data[i]['id']
      //TODO:格式化是日期时间 价格 将数值四舍五入(保留2位小数)后格式化成金额形式
      data[i]['created'] = myDatePlugin.UnixToDate("yyyy-MM-dd hh:mm:ss",new Date(data[i]['created']));
      data[i]['updated'] = myDatePlugin.UnixToDate("yyyy-MM-dd hh:mm:ss",new Date(data[i]['updated']));
      console.log(data[i]['state'])
      if(data[i]['state'] == 'closed')
      {
        //data[i]['Plugin'] = '<button type="button" data-toggle="tooltip" data-original-title=";state=closed 不可以操作" class="btn btn-danger btn-xs "><i class="glyphicon glyphicon-minus"></i></button>&nbsp;'
        data[i]['Plugin'] = '<span   data-toggle="tooltip" data-original-title="state=closed 不可以操作" class="tipso_style tip2">說明</span>'
      }
      else {
        data[i]['Plugin']   =  DomHtml.LineButton();
      }
    }

    return data;
  },
  //初始化元素
  CatlistElement: function () {
    //TODO：分页列表说明
    //$("#"+mythis.appright_Id).find("#form3").empty().append('<table class="table table-hover table-striped table-bordered table-advanced tablesorter"><thead class="TreeTitle"><tr></tr></thead><tbody class="TreeTable"></tbody></table>');
    $("#"+mythis.appright_Id).find("#form3").empty().append(DomHtml.TreeDomHtml());
  },
  //循环添加表头
  CatlisTableHead: function () {
    //alert('d')
    var headcols = mythis.settings.cat;//返回多个对象
    for (var i = 0; i < headcols.length; i++) {
      //插个表头的 input checkbox
      if (headcols[i].field == 'ck')
        $("[id='" + mythis.appright_Id + "']").find('thead.TreeTitle>tr').append("<th width='50px'><input type='checkbox'></th>");
      else
        $("[id='" + mythis.appright_Id + "']").find('thead.TreeTitle>tr').append("<th style='"+headcols[i].style+"'>" + headcols[i].title + "</th>");
    }
    //TODO:添加 iCheck样式
    jQuery("[id='" + mythis.appright_Id + "']").find('thead.TreeTitle>tr input[type=checkbox]').iCheck({checkboxClass: 'icheckbox_square-blue',increaseArea: '20%'});
    jQuery("[id='" + mythis.appright_Id + "']").find('thead.TreeTitle>tr div').css({"left":"18%"})
  },
  //TODO:循环添加行列表数据
  CatlisTableBody: function ()
  {
    // alert("走这")
    mythis['cid'] = jQuery("[id='" + mythis.appright_Id + "']").find('input[name=cid]');
    var cat =  mythis.settings.cat;//返回所有数据对象
    mythis['tdlength'] = cat.length;
    var Catlistdata = mythis['childlist']
    var rowsdata = "";
    for (var i = 0; i < Catlistdata.length; i++)
    {
      rowsdata += "<tr class='inittr' id='"+Catlistdata[i]['id']+"' title='"+Catlistdata[i]['text']+"' parentId='"+Catlistdata[i]['parentId']+"' state='"+Catlistdata[i]['state']+"'>";
      for (var colindex = 0; colindex < cat.length; colindex++)
      {
        // console.log(cat[colindex].field)

        if (cat[colindex].field == 'ck')
        {
          rowsdata += '<td align="center"><input  type="checkbox" name="editId" value="' + Catlistdata[i][cat[colindex].field] + '"><span></span><span></span><span></span></td>'
        }
        else if(cat[colindex].field == 'Plugin')
        {
          rowsdata += '<td class="buttonClick" key="' + cat[colindex].title + '">' + Catlistdata[i][cat[colindex].field] + '</td>';
        }
        else
          rowsdata += '<td class="edit" key="' + cat[colindex].title + '"><span>' + Catlistdata[i][cat[colindex].field] + '</span><span></span><span></span></td>';
      }
      rowsdata += "</tr>";
      var newtable = DomHtml.newtable(mythis['tdlength']);
      rowsdata += newtable;
    }
    jQuery("[id='" + mythis.appright_Id + "']").find('.TreeTable').empty().append(rowsdata);
    //TODO:添加 iCheck样式
    jQuery("[id='" + mythis.appright_Id + "']").find('.TreeTable>tr.inittr input[type=checkbox]').iCheck({checkboxClass: 'icheckbox_square-blue',increaseArea: '20%'});

    jQuery("[id='" + mythis.appright_Id + "']").find('.TreeTable>tr.inittr').find('td:eq(1)').css({"cursor":"pointer"})//栏目手形样式

    //TODO;如果 state 属生 等 于 closed 禁用禁选

    if(jQuery("[id='" + mythis.appright_Id + "']").find('.TreeTable>tr.inittr').attr('state') == 'closed')
    {
      jQuery("[id='" + mythis.appright_Id + "']").find('.TreeTable>tr>td>div').addClass('disabled');
      jQuery("[id='" + mythis.appright_Id + "']").find('.TreeTable>tr>td>div>input[type=checkbox]').attr('disabled','disabled');
    }
    //TODO:去除 小于2 td 的边框
    jQuery("[id='" + mythis.appright_Id + "']").find('.TreeTable>tr').find('td:lt(2)').css({"border-style":"none"});
    mythis['level1'] = jQuery("[id='" + mythis.appright_Id + "']").find('.TreeTable>tr.inittr').find('td:eq(1)')
    myPlugin.tooltip();//行操作 提示

    //TreeParamPlugin.eachTreeTitle(mythis,mythis['level1']);//TODO:选择栏目 click 带栏目的ID 并查出 当前商品所属栏目是否有规格参数模板
  },
  CatlisTableBodyNext: function (Catlistnextdata)
  {
    if (Catlistnextdata != null)
    {
      // alert("走这")
      var cat =  mythis.settings.cat;//返回所有数据对象
      var rowsdata = "";
      for (var i = 0; i < Catlistnextdata.length; i++)
      {

        rowsdata += "<tr style='border-style:none;' class='appendinner' id='"+Catlistnextdata[i]['id']+"' title='"+Catlistnextdata[i]['text']+"' parentId='"+Catlistnextdata[i]['parentId']+"' state='"+Catlistnextdata[i]['state']+"'>";
        for (var colindex = 0; colindex < cat.length; colindex++)
        {
          if (cat[colindex].field == 'ck')
          {
            rowsdata += '<td  class="" align="center" ><input  type="checkbox" name="editId" value="' + Catlistnextdata[i][cat[colindex].field] + '"></td>'
          }
          else if(cat[colindex].field == 'Plugin')
          {
            rowsdata += '<td class="buttonClick" key="' + cat[colindex].title + '">' + Catlistnextdata[i][cat[colindex].field] + '</td>';
          }
          else
            rowsdata += '<td class="edit" key="' + cat[colindex].title + '"><span>' + Catlistnextdata[i][cat[colindex].field] + '</span><span></span><span></span></td>';
        }
        rowsdata += "</tr>";
        var newtable = DomHtml.newtable(mythis['tdlength']);
        rowsdata += newtable;
      }

      //console.log(rowsdata)
      return rowsdata;
    }
  },

  /**
   *
   * @param mythis 全局对象
   * @param obj click 当前 的对象
   */
  eachTreeTitle:function (mythis,obj)
  {
    //console.log(obj.length)
    obj.each(function(index, element){
      jQuery(element).unbind("click").click(function(){
        switch(index){
          case index:	jQuery(this).ClickTdTitle(mythis,jQuery(this));break;
        }
        return false;
      });
    });
  },
  //TODO：栏目的修改与册除按钮
  editbutton:function (mythis,obj)
  {
    obj.find('td:last').children('button').each(function (index,element)
    {
      //console.log(index)
      //console.log(element)
      jQuery(element).unbind("click").click(function(){
        switch(index){
          case index:	jQuery(this).clickeditbutton(mythis,jQuery(this));break;
        }
        return false;
      });
    })
  },
//TODO:表单处理
  FromRCcheckbox:function ()
  {
    mythis['RCcheckbox'] = jQuery("[id='" + mythis.appright_Id + "']").find('.row>.hot').find("[type='checkbox']")
    mythis['RCcheckbox'].iCheck({checkboxClass: 'icheckbox_square-blue',increaseArea: '20%'});
    mythis['RCcheckbox'].on('ifChanged',function(event)
    {
      // alert(event.type + ' callback');
     // console.log($(this).is(':checked'))
      if($(this).is(':checked'))
      {
        console.log("选中");
        jQuery(this).attr('checked',true);
        var hot = $.trim(jQuery(this).closest('#from2').find('.row>.hot').attr('value'));
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

        jQuery(this).closest('#from2').find('.row>.hot').attr('value',hot);
      }
      else
      {
        console.log("没 选中 ")
        var hotuncheck = $.trim(jQuery(this).closest('#from2').find('.row>.hot').attr('value'));
        jQuery(this).attr('checked',false);
        if (hotuncheck.indexOf(hotuncheck + ',') == -1)
        {
          //console.log('6')
          //TODO：如果 appendstr 与 jQuery(this).val()有相同 通过replace()此函数将 appendstr 中移除对应 ？ input的值
          hotuncheck = hotuncheck.replace(jQuery(this).val() + ',', '');
          jQuery(this).closest('#from2').find('.row>.hot').attr('value',hotuncheck);
        }
      }
    });

  },
  FromRadioifChecked:function ()
  {
    mythis['from2'] = jQuery("[id='" + mythis.appright_Id + "']").find('#from2')
    mythis['from2'].find("input[type=radio]").iCheck({checkboxClass: 'icheckbox_square-blue',increaseArea: '20%',radioClass : 'iradio_square-blue',});
    mythis['from2'].find("[type=radio]").on("ifChecked", function(event)
    {
      jQuery(this).val('促销');
      jQuery(this).attr('checked',true);
      mythis['from2'].find('.sp').show();
      mythis['from2'].find("[type='radio']").on("ifClicked", function(event)
      {
        jQuery(this).iCheck('uncheck');
        jQuery(this).val('不促销');
        jQuery(this).attr('checked',false);
        mythis['from2'].find('.sp').hide();
      });
    });
  },

};
$.fn.extend({
  //TODO:欄目列表行操作 按鈕 修改 取消 刪除 保存 處理  服務端未做
  clickeditbutton:function (mythis,obj)
  {
    if(obj.attr('typename') == 'edit')
    {
      console.log(obj.closest('tr').attr('id'))
      obj.closest('tr').find('td.edit:lt(4)').find('span:eq(0)').each(function (i,v)
      {
        //TODO:jQuery(this).wrap('<input  name="edit['+i+']" type="text" value="'+jQuery(this).text()+'"  class="form-control" style="margin-bottom:0px;height: 25px;" />')
        jQuery(this).wrap('<input  name="edit'+i+'" type="text" value="'+jQuery(this).text()+'"  class="form-control" style="margin-bottom:0px;height: 25px;" />')
      })
      obj.closest('tbody').find('tr>td>div').removeClass('checked').find('input[type=checkbox]').attr('checked',false); //先移除所有
      obj.closest('tr').find('td:eq(0)').find('div').addClass('checked').find('input[type=checkbox]').attr('checked',true)//再添加当前
    }
    else if(obj.attr('typename') =='cancel')
    {
      obj.closest('tr').find('td.edit:lt(4)').find('input').each(function (i,v)
      {
        jQuery(this).before('<span>'+jQuery(this).attr('value')+'</span>')
        jQuery(this).fadeOut('slow',function(){jQuery(this).remove();});
      })
      obj.closest('tbody').find('tr>td>div').removeClass('checked').find('input[type=checkbox]').attr('checked',false);; //先移除所有
    }
    else if(obj.attr('typename') =='del')
    {
      obj.closest('tr').fadeOut('slow',function(){obj.closest('tr').remove();});
    }
    else if(obj.attr('typename')== 'save')
    {

      //console.log(obj.closest('tr').find('td:lt(5)').find("input[name^='edit']").serialize())
      mythis['LineButtonEdit'] = {type:'POST',url  :'假URL LineButtonEdit',dataType:'json',data:obj.closest('tr').find('td:lt(5)').find("input[name^='edit']").serialize(),
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
      jQuery.ajax(mythis['LineButtonEdit']);//返回
    }
  },
  /**
   * @param mythis  全局对象
   * @param obj 当前 click 的对象
   * @constructor
   */
  ClickTdTitle:function (mythis,obj)
  {
    if(obj.closest('tr').attr('state') == "open")
    {
      console.log('没有下级了')
      //TODO：取当前 click 标题 行前面的 checkbox 值
      obj.closest('tbody').find('tr>td>div').removeClass('checked').find('input[type=checkbox]').addClass('checked',false); //先移除所有
      obj.closest('tr').find('td:eq(0)').find('div').addClass('checked').find('input[type=checkbox]').attr('checked',true)//再添加当前

      jQuery('#cid').attr('value',obj.closest('tr').find('td:eq(0)').find('input[type=checkbox]').attr('value'))
      jQuery('#cid').attr('title',obj.closest('tr').find('td:eq(1)').find('span:eq(0)').text())

      jQuery('#cid').prev().text(obj.closest('tr').find('td:eq(1)').find('span:eq(0)').text())

      jQuery("[id='" + mythis.appright_Id + "']").find('#modal-full-width').find('button:eq(0)').click();
      if(mythis.settings.itemparam == true)
      {
        mythis['cid'] = obj.closest('tr').find('td:eq(0)').find('input[type=checkbox]').attr('value');

        TreeParamPlugin.getItemCatParamAjaxData(mythis,mythis.settings.CatParamUrl,mythis['cid']);       //TODO:关键 是否返回商品规格参模板 默认不返回
        //TreeParamPlugin.groupParam(mythis);//显示商品的规格与参数模板
      }
    }
    else if(obj.closest('tr').attr('state') == "closed")
    {
      console.log('有下级了')
      //TODO;所有下一级的公用函数
      mythis['Catparms'] = {};                //TODO:这是 AJAX data 参数；默认是不传 在 java 端指定
      mythis['Catparms']['id'] = jQuery(this).closest('tr').attr('id');
      TreeParamPlugin.getCatlistAjaxData(mythis.settings.catlisturl,mythis['Catparms'])           //TODO:所有下一级 public ajax
      var afterData = TreeParamPlugin.CatlisTableBodyNext(mythis['Catlistnextdata'])              //TODO:所有下一级 数据 DATA
      //jQuery(this).closest('tr').after(afterData);.siblings('tr')
      obj.closest('tr').next('tr.wrap').find('td>table>tbody').empty().append(afterData);//TODO:所有下一级 数据 DATA 存放的节点  DOM
      myPlugin.tooltip();//行操作 提示
      obj.PublicNextDomDataCss(jQuery(this));                                            //TODO：设置所有下级的 样式 tr td 缩进 和 判断是否有子节点；有就禁用
      //TODO：click 点击当前节点显示与隐藏节点
      obj.closest('tr.inittr').siblings('tr.inittr').show();                             //TODO:所有一级节点 tr.inittr show

      obj.closest('tr').siblings('tr.wrap').fadeOut(100);                                //TODO:siblings 表示除当前节点外的所有节点操作 当前节点 fadeOut hide

      obj.closest('tr').fadeIn(1000);                                                    //TODO: 当前节点 fadeIn show
      obj.closest('tr').next('tr.wrap').fadeIn(1000);                                    //TODO:当前节点 fadeIn show
//console.log(obj.closest('tr').next('tr.wrap').find('td>table>tbody>tr').find("td:eq(1)"))
      obj.closest('tr').next('tr.wrap').find('td>table>tbody>tr').find("td:eq(1)").each(function(index, element){
        TreeParamPlugin.eachTreeTitle(mythis,jQuery(this));                               //TODO:绑定这个函数（注册）eachTreeTitle 所有下级公用函数
      });
      //TODO:修改行 不等於 closed
      if(mythis.frommodel == 'tree')
      {
        obj.closest('tr').next('tr.wrap').find('td>table>tbody>tr').each(function(index, element){
          TreeParamPlugin.editbutton(mythis,jQuery(this));                               //TODO:绑定这个函数（注册）eachTreeTitle 所有下级公用函数
        });
      }

      return ;
    }

  },
  /**
   * TODO：设置所有下级的 样式 tr td
   * @param thisobj
   * @constructor
   */
  PublicNextDomDataCss:function(thisobj)
  {
    //alert('PublicNextDomDataCss')
    //console.log(thisobj)

    thisobj.closest('tr').next('tr.wrap').find('td>table>tbody>tr input[type=checkbox]').iCheck({checkboxClass: 'icheckbox_square-blue',increaseArea: '20%'});
    thisobj.closest('tr').find("td").each(function (i,v)
    {
      var $this = $(this);
      thisobj.closest('tr').next('tr.wrap').find('td>table>tbody>tr').each(function ()
      {
        if($(this).attr('state') == 'closed')
        {
          //$(this).find('td>div').iCheck('uncheck');
          $(this).find('td>div').addClass('disabled');
          $(this).find('td>div>input[type=checkbox]').attr('disabled','disabled');
        }
        //console.log($(this).find('td'))
        $(this).find('td').each(function (index,value)
        {
          if(index<2)
          {
            $(this).css({"border-style":"none",});//去除连线  添加手形 不含 2 ;
          }
          if(i == index){
            $(this).outerWidth($this.outerWidth()+4);//TODO:求出 子目录 行 TR 下所有 TD 列 宽度； 计算 出等于上一行的 TR TD 的宽度
          }
          if(i == '0' && index == '0')
          {
            $(this).find('div').css({"margin-left":$this.outerWidth()-20})
            //  $(this).find('div').css({"margin-left":"100%"}) //第 0 个 INPUT 缩进 100%；
          }
          if(i == '1' && index == '1')
          {
            $(this).css({"cursor":"pointer","width":$this.outerWidth()-11}) //添加手型
            $(this).find('span:eq(0)').css({"display":"inline-block","margin-left":"0%"})//第 1 个 span  即栏目 缩进 5%；
          }

        })
      })

    });
    //console.log(thisobj.closest('tr').next('tr.wrap').find('td>table'))
    thisobj.closest('tr').next('tr.wrap').find('td>table').removeClass('table-striped table-bordered table-advanced tablesorter');
  },
  test:function ()
  {
    //alert('test')
    console.log('test')
  },



});