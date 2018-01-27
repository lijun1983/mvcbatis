var myapp = CommonTableList = {
  //TODO：初始化添加异步ajax事件 返回 result
  getAjaxDate: function (url, parms) {
    //console.log(url)
    //console.log(parms)
    mythis['ajax'] = {url: url,async: false,data:parms};
    mythis['ajax']['success'] = function (data)
    {
      //console.log(data)
      if(data['rows'].length>0)
      {
        $.each(data['rows'],function (i,v)
        {
          //console.log(this)
          //console.log(mythis)
          v['ck'] = v['id'];
          //TODO:格式化是日期时间 价格 将数值四舍五入(保留2位小数)后格式化成金额形式
          v['created'] = myDatePlugin.UnixToDate("yyyy-MM-dd hh:mm:ss",new Date(v['created']));
          v['updated'] = myDatePlugin.UnixToDate("yyyy-MM-dd hh:mm:ss",new Date(v['updated']));
          if(v['price'])
            v['newprice'] = mypricePlugin.formatCurrency(v['price']);

          if(v['sellPoint'])
            v['sellPoint'] = myPlugin.replace_htmlRemove(v['sellPoint']);
          v['newsellPoint'] = '<span  data-tipso="'+v['sellPoint']+'" class="tipso_style tip2">广告词</span>';

          v['Plugin']   = '<button type="button" class="btn btn-default btn-xs"><i class="fa fa-edit"></i>&nbsp; Edit </button>&nbsp; <button type="button" class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i>&nbsp; Delete </button>'
        });
        //console.log(data['rows'])
        mythis['listdata'] = data; //TODO:将返回的数据赋给 定义的 全局变量 接受$post的返回值
        //result = data;
        return mythis['listdata'];
      }
      else
        console.log('没有记录!')
    };
    $.ajax(mythis['ajax']);

  },
  //TODO：分页列表说明  分页列表 页码区 HTML
  InitializeElement: function (listdata) {
    //TODO：分页列表说明
    $("#"+mythis.appright_Id).find(".pagination-panel").empty().append(DomHtml.PageInfoHtml(listdata));
    //TODO：分页列表
    $("#"+mythis.appright_Id).find("#mytablelist").empty().append("<thead class='thead_List'><tr></tr></thead><tbody class='tablelist'></tbody><tfoot></tfoot>");
    //TODO：页码区
    $("#"+mythis.appright_Id).find("#page_List").empty().append(DomHtml.navigatepageNumsHtml(listdata));
  },
  //TODO：循环添加表头
  createTableHead: function () {
    var headcols = mythis.settings.columns;//返回多个对象
    // console.log(headcols)
    for (var i = 0; i < headcols.length; i++) {
      //console.log(headcols[i].style)
      if(headcols[i].style == undefined)
        headcols[i].style = "";
      //插个表头的 input checkbox
      if (headcols[i].field == 'ck')
        $("[id='" + mythis.appright_Id + "'] thead tr").append("<th width='50px'><input name='chkall' type='checkbox'></th>");
      else
        $("[id='" + mythis.appright_Id + "'] thead tr").append("<th style='"+headcols[i].style+"'>" + headcols[i].title + "</th>");
      //width=" + headcols[i].width + " align=" + headcols[i].align + "
    }
    //TODO:添加 iCheck样式
    jQuery("[id='" + mythis.appright_Id + "'] thead tr input[type=checkbox]").iCheck({checkboxClass: 'icheckbox_square-blue',increaseArea: '20%'});
    jQuery("[id='" + mythis.appright_Id + "'] thead tr .icheckbox_square-blue").css({"left":"15%"})
  },
//TODO:循环添加行列表数据   iCheck样式 tr 的按钮 查询 重置 上一页 下一页 第一页 上一页 末页 下一页 全选 自定义追 加选择 选中select每页显示多少条记录数 cleck当前分页
  /**
   * 1.循环添加行列表数据
   * 2.tr 的按钮
   * 3.查询
   * 4.重置
   * 5.上一页 下一页 第一页 上一页 末页 下一页
   * 6.全选
   * 7.自定义追 加选择
   * 8.选中select每页显示多少条记录
   * 9.选中selectcleck当前分页每页显示多少条记录
   * @param listdata
   */
  createTableBody: function (listdata)
  {
    // console.log(pn)
    //alert("走这")
    var columns =  mythis.settings.columns;//返回所有数据对象

    var rowsdata = "";
    //console.log(columns)
    for (var i = 0; i < listdata['rows'].length; i++)
    {
      //console.log(listdata['rows'])
      //console.log(listdata['rows'][i])
      //if (i == listdata['rows'].length) break;//TODO:break 跳过遍历
      if(listdata['rows'][i]['id'] ==undefined)
        listdata['rows'][i]['id'] = ""
      if(listdata['rows'][i]['title'] ==undefined)
        listdata['rows'][i]['title'] = ""
      if(listdata['rows'][i]['cid'] ==undefined)
        listdata['rows'][i]['cid'] = ""
      if(listdata['rows'][i]['itemCatId'] ==undefined)
        listdata['rows'][i]['itemCatId'] = ""
      if(listdata['rows'][i]['price'] ==undefined)
        listdata['rows'][i]['price'] = ""

      rowsdata += "<tr id='"+listdata['rows'][i]['id']+"' title='"+listdata['rows'][i]['title']+"' cid='"+listdata['rows'][i]['cid']+"' itemCatId='"+listdata['rows'][i]['itemCatId']+"' price='"+listdata['rows'][i]['price']+"'>";

      for (var colindex = 0; colindex < columns.length; colindex++)
      {
      //  console.log(columns[colindex]['style'])
        //if(columns[colindex]['style'] ==undefined)
          //columns[colindex]['style'] == ""
        if (columns[colindex].field == 'ck')
        {
          rowsdata += '<td width="50px" align="center"><input name="chk" value=""  type="checkbox"></td>'
        }
        else if(columns[colindex].field == 'Plugin')
        {
          rowsdata += '<td class="buttonClick" key="'+columns[colindex]['title']+'">' + mythis['listdata']['rows'][i][columns[colindex].field] + '</td>';
        }
        else
          rowsdata += '<td  key="'+columns[colindex]['title']+'" style="'+columns[colindex].style+'" >' + mythis['listdata']['rows'][i][columns[colindex].field] + '</td>';
      }
      rowsdata += "</tr>";
    }
    jQuery("[id='" + mythis.appright_Id + "'] tbody").empty().append(rowsdata);
    //TODO:添加 iCheck样式
    jQuery("[id='" + mythis.appright_Id + "'] tbody tr input[type=checkbox]").iCheck({checkboxClass: 'icheckbox_square-blue',increaseArea: '20%'});
    //$("#currentpageIndex").html(pn);
    //TODO:每 一行 tr 的按钮
    jQuery("[id='" + mythis.appright_Id + "'] tbody>tr>.buttonClick").each(function(index, element){
      // AppRightFromPlugin.buttonClick(mythis,jQuery(this));
      jQuery(element).children().each(function(index, element){
        jQuery(element).unbind("click").click(function(){
          switch(index){
            case 0:	jQuery(element).Trbutton({mythis:mythis,tag:'Edit'});break;
            case 1:	jQuery(element).Trbutton({mythis:mythis,tag:'Del'});break;
          }
        });
      });
    });
    //TODO: 查询 重置 上一页 下一页 第一页 上一页 末页 下一页
    $("#"+mythis.appright_Id).find('.selecpage').each(function (index, element){
      //console.log(index)
      //console.log(element)
      jQuery(element).unbind("click").click(function ()
      {
        //alert('3')
        switch (index){
          case 0:jQuery(element).elementClickselecpage({mythis:mythis,tag:'select',});break;     //查询
          case 1:jQuery(element).elementClickselecpage({mythis:mythis,tag:'Reset',});break;     //重置
          case 2:jQuery(element).elementClickselecpage({mythis:mythis,tag:'prePage',});break;     //上一页
          case 3:jQuery(element).elementClickselecpage({mythis:mythis,tag:'nextpage',});break;   //下一页
          case 4:jQuery(element).elementClickselecpage({mythis:mythis,tag:'firstpage',});break; //第一页
          case 5:jQuery(element).elementClickselecpage({mythis:mythis,tag:'prePage',});break;     //上一页
          case 6:jQuery(element).elementClickselecpage({mythis:mythis,tag:'lastpage',});break;   //末页
          case 7:jQuery(element).elementClickselecpage({mythis:mythis,tag:'nextpage',});break;   //下一页
        }
        return false;
      })
    });
      CommonTableList.QuanxianCheckbox(mythis),//TODO:全选
      CommonTableList.MyCheckbox(mythis),//TODO:自定义追 加选择
      CommonTableList.SelectPageSelect(mythis);//TODO:选中select每页显示多少条记录数
      myPlugin.tipso();//广告词  提示
      CommonTableList.clickpage(mythis);//TODO:cleck当前分页
    //this.registermousehover();//TODO:添加鼠标悬浮事件
  },
  //TODO:添加全选全不选事件
  QuanxianCheckbox:function(){
    $("[id='" + mythis.appright_Id + "'] thead>tr>th>div>ins").on("click",function ()
    {
      var _ok = '';
      var _ok2 = '';
      //alert('QuanxianCheckbox')
      if($(this).parent().hasClass('checked')==false)
      {
        jQuery('.tablelist').attr('value','');
        jQuery('.tablelist>tr>td>div>ins').each(function(){
          var $this = $(this);
          $this.parent().removeClass('checked');

          $this.prev().attr('checked',false);
        });
      }
      else
      {
        jQuery('.tablelist').attr('value','');
        jQuery('.tablelist>tr>td>div>ins').each(function(){
          var $this = $(this);
          console.log($this.prev().attr('value')+',')

          var str = $this.parent().parent().next('td').text();
          _ok += str + ',';
          _ok2 += $this.prev().attr('value') + ',';
          $this.parent().addClass('checked');
          $this.prev().attr('checked','checked');
        });
        // console.log(_ok);
        //var ok = _ok.substr(0, _ok.length);// 格式化遍历出的.allok变量存到vaf ok中;且将最后一个字符删除；
        //console.log(ok);
        // console.log(_ok2)
        //console.log(_ok)

        jQuery('.tablelist').attr('value',_ok);
      }
    });
  },
  //TODO: 列表单个 checkbox 复选框 自定义 选中 追 加到 .tablelist value 值中
  MyCheckbox:function ()
  {
    $("[id='" + mythis.appright_Id + "'] tbody").find("[type='checkbox']").on('ifChanged', function(event){
      //alert(event.type + ' callback');
      if($(this).is(':checked')){
        console.log("选中");
        jQuery(this).attr('checked',true);
        var appendstr = $.trim(jQuery('.tablelist').attr('value'));
        if(appendstr.length>0)
        {
          console.log('1');
          //2步.如果有值时；查找过滤相同的值；如找不到相同的就将值+=到JD中
          if (appendstr.indexOf(jQuery(this).parent().parent().next('td').text() + ',') != -1)
          {
            console.log('2')
            //TODO:如果 appendstr 与 jQuery(this).val()有相同 就直截返回,仅处于选中状态；appendstr不变化
            return;
          } else
          {
            console.log('38')
            //TODO:如果 appendstr 与 jQuery(this).val()没有相同 将当前 click input的值 追加到 appendstr 字符中
            appendstr += jQuery(this).parent().parent().next('td').text() + ',';
          }
        }
        else
        {
          console.log('4')
          //TODO:1步.初始都没选时；一点就将值放入
          appendstr += jQuery(this).parent().parent().next('td').text() + ',';
        }

        jQuery('.tablelist').attr('value',appendstr);
      }
      else
      {
        console.log("没 选中 ")
        var appendstruncheck = $.trim(jQuery('.tablelist').attr('value'))
        jQuery(this).attr('checked',false);
        if (appendstruncheck.indexOf(appendstruncheck + ',') == -1)
        {
          //console.log('6')
          //TODO：如果 appendstr 与 jQuery(this).val()有相同 通过replace()此函数将 appendstr 中移除对应 ？ input的值
          appendstruncheck = appendstruncheck.replace(jQuery(this).parent().parent().next('td').text() + ',', '');
          jQuery('.tablelist').attr('value',appendstruncheck);
          // console.log($(this).closest('.tablelist').find("[type='checkbox']:checked").length)
          if($(this).closest('.tablelist').find("[type='checkbox']:checked").length == 0)
          {
            jQuery('.thead_List>tr>th>div').iCheck('uncheck');
          }
        }
      }
    });
  },
  //TODO:选中select每页显示多少条记录数
  SelectPageSelect:function ()
  {
    //console.log(obj)
    $("#"+mythis.appright_Id).find('.SelectPageSelect').on('change',function ()
    {
      //console.log($("#"+this.appright_Id).find('.SelectPageSelect'))
      //alert(jQuery('select[name="page_size"] option:selected').val());
      jQuery('#page_List').attr('typenaem','change');
      if(jQuery('#page_List').attr('typenaem') == 'change')
      {
        mythis['parms']['pageNum'] = parseInt('1');
        mythis['parms']['pageSize'] = parseInt(jQuery('select[name="page_size"] option:selected').val());

        mythis.myCommonList(mythis['parms']);
      }
      return false;
    });

  },
  //TODO:cleck当前分页
  clickpage:function ()
  {
    $("#"+mythis.appright_Id).find('.pager>li>a.clickpage').on('click',function ()
    {
      //alert("clickpage")
      jQuery('#page_List').attr('typenaem','navigatepageNums');
      if(jQuery('#page_List').attr('typenaem') == 'navigatepageNums')
      {
        mythis['parms']['pageNum'] = parseInt(jQuery(this).attr('data-page'));
        mythis['parms']['pageSize'] = parseInt(jQuery('select[name="page_size"] option:selected').val());
        mythis.myCommonList(mythis['parms']);
      }
      return false;
    });
  },
  //TODO: 给当前页添加颜色 class = colour
  navigatepageNumscolour:function (pageNum)
  {
    $("#"+mythis.appright_Id).find('.pager>li>a.clickpage').each(function (index)
    {
      $this = $(this);
      if($this.attr('data-page') == pageNum)
      {
        $this.addClass('colour');
      }
    });
  },
  //TODO:每页行数选中
  selectpage_size:function (pageSize)
  {
    $("#"+mythis.appright_Id).find('select[name="page_size"] option').each(function(index)
    {
      $(this).find("option[selected='selected']").attr('selected',false)//先将所有selected属性删除；
      // alert($(this).val())
      if($(this).val() == pageSize)
      {
        $(this).attr('selected',true);
        $(this).attr('selected','selected');
      }
    });
  },
  RightListDom:function ()
  {
    if(mythis['settings']['RightListDom'] == true)
    {
      $("#"+mythis.appright_Id).find('.RightListDom').show();
    }
    else
      $("#"+mythis.appright_Id).find('.RightListDom').hide()
  },
  addEditDom:function ()
  {
    if(mythis['settings']['addEdit'] == true)
    {
      $("#"+mythis.appright_Id).find('.addEdit').show();
    }
    else
      $("#"+mythis.appright_Id).find('.addEdit').hide()
  },
  pageinfo:function ()
  {
    // console.log(mythis['settings']['pageinfo'])

    if(mythis['settings']['pageinfo'] == true)
    {
      $("#"+mythis.appright_Id).find('.pageinfo').show();
    }
    else
      $("#"+mythis.appright_Id).find('.pageinfo').hide()
  },
  right_selectfrom:function()
  {
    if(mythis['settings']['right_selectfrom'] == true)
    {
      $("#"+mythis.appright_Id).find('.right_select').show();
    }
    else
      $("#"+mythis.appright_Id).find('.right_select').hide()
  },
  navigatepageNums:function ()
  {
    if(mythis['settings']['navigatepageNums'] == true)
    {
      $("#"+mythis.appright_Id).find('.pager>li>a.clickpage').show();
    }
    else
      $("#"+mythis.appright_Id).find('.pager>li>a.clickpage').hide()
  },
  page_navigatepageNums:function ()
  {
    if(mythis['settings']['page_navigatepageNums'] == true)
    {
      $("#"+mythis.appright_Id).find('#page').show();
    }
    else
      $("#"+mythis.appright_Id).find('#page').hide()
  },

};
$.fn.extend({
//TODO: 查询 重置 上一页 下一页 第一页 上一页 末页 下一页
  elementClickselecpage:function (mythis)
  {
    // console.log(obj)
    var tag = mythis['tag']
    var mythis = mythis['mythis']
    if(tag == 'select')
    {
      console.log(tag+"查询 java 端没有设置查询条件")
    }else if(tag == 'Reset')
    {
      console.log(tag+"重置")
      if(tag == 'Reset')
      {
        jQuery('#page_List').attr('typenaem','Reset');
        if (jQuery('#page_List').attr('typenaem') == 'Reset')
        {
          mythis.myCommonList();
        }
      }
    }else if(tag == 'prePage')
    {
      console.log(tag+"上一页")
      if(tag == 'prePage')
      {
        jQuery('#page_List').attr('typenaem','prePage');
        //if(jQuery(this).attr('prepage') == '0')  这样也可以
        if(mythis['listdata']['hasPreviousPage'] == false)
        {$.scojs_message('已经是第一页了!', $.scojs_message.TYPE_OK);}
        else
        {
          mythis['parms']['pageNum'] = jQuery(this).attr('prepage');
          mythis['parms']['pageSize'] = parseInt(jQuery('select[name="page_size"] option:selected').val());
          mythis.myCommonList(mythis['parms']);
        }

      }
    }else if(tag == 'nextpage')
    {
      console.log(tag+"下一页")
      // alert(tag+"下一页")
      if(tag == 'nextpage')
      {
        jQuery('#page_List').attr('typenaem','nextpage');
        // console.log(obj['json']['hasNextPage'])
        if(mythis['listdata']['hasNextPage'] == false)
        {
          $.scojs_message('已经是最后 一页了!', $.scojs_message.TYPE_OK);
        }else
          mythis['parms']['pageNum'] = $(this).attr('nextpage');
        mythis['parms']['pageSize'] = parseInt(jQuery('select[name="page_size"] option:selected').val());
        mythis.myCommonList(mythis['parms']);
      }
    }else if(tag == 'firstpage')
    {
      console.log(tag)
      jQuery('#page_List').attr('typenaem','first');
      mythis['parms']['pageNum'] = jQuery(this).attr('first');
      mythis['parms']['pageSize'] = parseInt(jQuery('select[name="page_size"] option:selected').val());
      mythis.myCommonList(mythis['parms']);

    }else if(tag == 'lastpage')
    {
      console.log(tag)
      jQuery('#page_List').attr('typenaem','pages');
      mythis['parms']['pageNum'] = jQuery(this).attr('pages');
      mythis['parms']['pageSize'] = parseInt(jQuery('select[name="page_size"] option:selected').val());
      console.log(mythis['parms'])

      mythis.myCommonList(mythis['parms']);
    }
  },
  //TODO:每 一行 tr 的按钮
  Trbutton:function (mythis)
  {
    var tag = mythis['tag']
    var mythis = mythis['mythis']
    //console.log(tag)
    console.log(mythis)
    if(tag == 'Edit')
    {
      console.log(tag)
      console.log(jQuery(this).closest('tr').attr('id'))
    }else if(tag == 'Del')
    {
      console.log(tag)
      console.log(jQuery(this).closest('tr').attr('id'))
    }

    // console.log('ok')
    //alert("1")
  },
  test:function ()
  {
    //alert('test')
    console.log('test')
  },



});