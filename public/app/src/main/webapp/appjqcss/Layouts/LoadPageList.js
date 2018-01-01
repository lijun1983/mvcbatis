//TODO: 后台首页左侧模块 分页 插件 click 左 显示  右 功能 并默认读出 右侧列表 数据
;(function () {
  jQuery.fn.LoadPageList=function(options)
  {
    var defaults = {myPlugin:'', pageNum:'1',pageSize:'5',}//默认参数与属性
    var options = $.extend(defaults,options);
    var LoadPageList =  {};                  //event事件；按钮层定义一个对像；
    LoadPageList['this'] = this;
    LoadPageList['myPlugin'] = options.myPlugin;
    //LoadPageList['myPlugin'].foo();
    //LoadPageList['myPlugin'].bar('测试调用公共插件对像方法');
   // console.log(LoadPageList['this'].find('div.addEdit'))
   // LoadPageList['this'].find('.addEdit').hide();
    LoadPageList['side-menu'] = LoadPageList['this'].find('#side-menu');
    LoadPageList['li'] = LoadPageList['side-menu'].children("li:gt(1)").find('li > a');
    //TODO: 右侧公共导航 模块 分页   标签选择
    LoadPageList['modulename'] = LoadPageList['this'].find('.modulename')
    LoadPageList['pagename'] = LoadPageList['this'].find('.pagename');
    // TODO: 右侧公共 dome
    LoadPageList['public']  = LoadPageList['this'].find('#public')
    //TODO : Click 左侧将模块名与功能分页赋值给右侧；开发送 url 至 java 服务端 返回 json 数据
    LoadPageList['li'].on("click",function ()
    {
      //alert('click init')
      var _this = jQuery(this);
      // TODO : click 左侧模块分页 删除之前已添加 1 2 li 级标签 active 属性 并 给 当前 1 2 级 li 标签 添加  active class 属性
      if(_this.parent('li').hasClass("active") == false )
      {
        _this.closest('#side-menu').find('li').removeClass('active');
        _this.parent('li').addClass('active');
        _this.parent('li').parent('ul').parent('li').addClass('active');
      }
      // TODO:将模块与模块分页 名称赋值给右侧 导航菜单 .text()
      LoadPageList['modulename'].text(_this.parent().parent().parent().children('a').children('span:eq(0)').text());
      LoadPageList['pagename'].text(_this.children('span').text());
      LoadPageList['public'].empty();
      LoadPageList['public'].load(_this.attr('pageurl'));

      LoadPageList['javaurl'] = _this.attr('javaurl');//java 服务器地址
      LoadPageList['initdata'] = {};
      LoadPageList['initdata']['pageNum'] = options.pageNum;
      LoadPageList['initdata']['pageSize'] = options.pageSize;

      LoadPageList['ajaxPageList'] = {};
      LoadPageList['ajaxPageList'] = { method:'get',url  :LoadPageList['javaurl'],async : 'true',dataType:  'json',
        data:LoadPageList['initdata'],
        success: function(json,result)
        {
          // console.log(json);
          LoadPageList['json'] = json;
          //   console.log(obj);
          if(json['size'] > 0)
          {
            //myPlugin.ItmeListData(json);//返回的列表
            jQuery(this).initlist({LoadPageList:LoadPageList}); //列表
            //TODO:参考 gd.js 521行
            LoadPageList['buttonClick'] = LoadPageList['this'].find('.buttonClick');
            LoadPageList['buttonClick'].each(function(){
              jQuery(this).buttonClick({LoadPageList:LoadPageList});
            });
            LoadPageList['myPlugin'].tooltip();// 列表字段 sellPoint  Bootstrap 提示工具（popover）插件 click 显示；click 隐藏
            LoadPageList['myPlugin'].tipso();// 列表字段 sellPoint  Bootstrap 提示工具（popover）插件 click 显示；click 隐藏
            LoadPageList['myPlugin'].myicheck();//给 input checkbox radio 添加 样式
            LoadPageList['myPlugin'].QuanxianCheckbox(jQuery('.thead_List>tr>th>div>ins')); //全选
            LoadPageList['myPlugin'].MyCheckbox(jQuery('.tablelist').find("[type='checkbox']")); //自定义 checkbox 并赋值
          }
        },

      }
      jQuery.ajax(LoadPageList['ajaxPageList']);//返回所有数据表所有记录
      console.log('1')
    });

  };
  $.fn.extend({
    initlist:function (LoadPageList){
      var LoadPageList = LoadPageList['LoadPageList'];
      //TODO：分页列表行头
      var dataTitle = '';
      dataTitle += '<tr><th width="1%"><input type="checkbox"></th>';
      dataTitle += '<th width="4%">id #</th><th width="40%">Title</th><th width="3%">Cid</th><th width="4%">num</th>';
      dataTitle += '<th width="5%">price</th><th width="5%">sellPoint</th><th width="10%">created</th><th width="10%">updated</th><th width="2%">status</th>';
      dataTitle += '<th width="auto">操 作 </th></tr>';
      jQuery(".thead_List").empty();
      jQuery(".thead_List").append(dataTitle);
      //TODO：分页列表说明
      var json = LoadPageList['json'];
      //console.log(json)
      var pagesuomi = '';
      pagesuomi += 'Page &nbsp;&nbsp;';
      pagesuomi += '<a href="#" class="btn btn-sm btn-default btn-prev selecpage" prePage="' + json['prePage'] + '"><i class="fa fa-angle-left"></i></a>';
      pagesuomi += '<input type="text" maxlenght="5" value="' + json['pageNum'] + '" class="pagination-panel-input form-control input-mini input-inline input-sm text-center" style="height:29px;padding: 5px; 10px; margin-left:5px;margin-right: 5px;" />';
      pagesuomi += '<a href="#" class="btn btn-sm btn-default btn-prev selecpage " nextPage="' + json['nextPage'] + '"><i class="fa fa-angle-right"></i></a>&nbsp; View &nbsp;';
      pagesuomi += '<select class="form-control input-xsmall input-sm input-inline SelectPageSelect" name="page_size">';
      pagesuomi += '<option value="5">5</option><option value="10">10</option><option value="20">20</option> <option value="50">50</option> <option value="100">100</option> <option value="150">150</option> ';
      /*<option value="-1">All</option>*/
      pagesuomi += '</select>';
      pagesuomi += '<label class="pageSize">&nbsp;&nbsp;每页显示 ' + json['pageSize'] + ' 条记录 |&nbsp;&nbsp;</label>';
      pagesuomi += '<label class="startRow">&nbsp;&nbsp;当前显示  第 ' + json['startRow'] + '  TO&nbsp;&nbsp;</label>';
      pagesuomi += '<label class="endRow">' + json['endRow'] + ' 条记录|&nbsp;&nbsp;</label>';
      pagesuomi += '<label class="total">共 ' + json['total'] + ' 条记录|&nbsp;&nbsp;</label>';
      pagesuomi += '<label class="pages">合计：' + json['pages'] + ' 页&nbsp;&nbsp;</label>';
      jQuery(".pagination-panel").empty();
      jQuery(".pagination-panel").append(pagesuomi);
      var rows = LoadPageList['json']['rows'];
      if(rows.length > 0)
      {
        var  data = '';
        var created =''; //13位时间戳函格式化
        var updated =''; //13位时间戳函格式化
        var replace_html ='';
        $.each(rows,function(index,obj){
          replace_html = LoadPageList['myPlugin'].replace_htmlRemove(obj["sellPoint"]);//TODO:通过js去掉所有的html标签，得到HTML标签中的所有内容
          //console.log(replace_html)
          created = LoadPageList['myPlugin'].UnixToDate("yyyy-MM-dd hh:mm:ss",new Date(obj["created"]));
          updated = LoadPageList['myPlugin'].UnixToDate("yyyy-MM-dd hh:mm:ss",new Date(obj["updated"]));
          data += '<tr>';
          data += '<td><input type="checkbox" value="'+ obj["id"] +'"></td>';
          data += '<td>'+ obj["id"] +'</td>';
          data += '<td>'+ obj["title"] +'</td>';
          data += '<td>'+ obj["cid"] +'</td>';
          data += '<td>'+ obj["num"] +'</td>';
          data += '<td>'+ obj["price"] +'</td>';//'+ obj["sellPoint"] +'
          //data += '<td><button type="button" data-toggle="tooltip" data-placement="left" class="btn btn-default mbs" title='+replace_html+'>Tooltip on left</button></td>';
          data += '<td><span  data-tipso="'+replace_html+'" class="tipso_style tip2">广告词</span></td>';
          data += '<td>'+ created +'</td>';
          data += '<td>'+ updated +'</td>';
          data += '<td><span class="label label-sm label-success">'+ obj["status"] +'</span> </td>';
          data += '<td class="buttonClick"> <button type="button" class="btn btn-default btn-xs"><i class="fa fa-edit"></i>&nbsp; Edit </button>&nbsp; <button type="button" class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i>&nbsp; Delete </button> </td>';
          data += '</tr>';
        });
        jQuery(".tablelist").empty().append(data);
        jQuery(".tablelist").find('td').css({"line-height":"30.8px","vertical-align":"baseline"});
        //TODO: 页吗列表

        var navigatepageNums = json['navigatepageNums'];
        var navpage = '';

        navpage += '<ul class="pager" style="margin:10px 0px;">';

        navpage += '<li class="paginate_button previous  "><a href="#"  class="selecpage" first="1">第一页</a></li>';
        navpage += '<li class="paginate_button previous  " ><a href="#"  class="selecpage" prePage="'+json['prePage']+'">上 一页</a></li>';
        $.each(navigatepageNums,function(index,pagename){
          navpage += '<li class="paginate_button "><a href="#" data-page='+pagename+' class="clickpage">'+pagename+'</a></li>';
        });
        navpage += '<li class="paginate_button next "><a href="#" class="selecpage" pages="'+json['pages']+'">末 页</a></li>';
        navpage += '<li class="paginate_button next "><a href="#" class="selecpage" nextPage="'+json['nextPage']+'">下 一页</a></li>';
        navpage += '</ul>';
        jQuery('#page_List').empty();
        jQuery('#page_List').append(navpage);

      }
      //TODO: 给当前页添加颜色 class = colour
      jQuery('.pager>li>a.clickpage').each(function (index)
      {
        $this = $(this);
        if($this.attr('data-page') == json['pageNum'])
        {
          $this.addClass('colour');
        }
      });
      //TODO:每页行数选中
      LoadPageList['this'].find('select[name="page_size"] option').each(function(index)
      {
        $(this).find("option[selected='selected']").attr('selected',false)//先将所有selected属性删除；
        if($(this).val() == LoadPageList['json']['size'])
        {
          $(this).attr('selected',true);
          $(this).attr('selected','selected');
        }
      });
      //TODO:选中select每页显示多少条记录数
      LoadPageList['this'].find('.SelectPageSelect').click('change',function ()
      {
        //alert("change")
        console.log('2')
        jQuery('#page_List').attr('typenaem','change');
        if(jQuery('#page_List').attr('typenaem') == 'change')
        {
          LoadPageList['ajaxPageList']['data']['pageSize'] = parseInt(jQuery('select[name="page_size"] option:selected').val());
          $.ajax(LoadPageList['ajaxPageList']);//下拉框控制每页显示多少条记录
        }
        return false;
      });
      //TODO:cleck当前分页
      jQuery('.pager>li>a.clickpage').click(function (){
        console.log(jQuery('#page_List'))
        jQuery('#page_List').attr('typenaem','navigatepageNums');
        var $this = jQuery(this);
        LoadPageList['ajaxPageList']['data']['pageNum'] = $this.text();
        if (jQuery('#page_List').attr('typenaem') == 'navigatepageNums')
        {
          jQuery.ajax(LoadPageList['ajaxPageList']);
        }
        console.log('3')
        return false;
      });
      //TODO: 前 下 末 第一 页
      LoadPageList['this'].find('.selecpage').each(function (index, element)
      {
        //console.log(index)
        //console.log(element)
        jQuery(this).unbind("click").click(function ()
        {
          //alert('3')
          switch (index){
            case 0:jQuery(this).select({LoadPageList:LoadPageList,tag:'select',});break;     //查询
            case 1:jQuery(this).Reset({LoadPageList:LoadPageList,tag:'Reset',});break;     //重置
            case 2:jQuery(this).prePage({LoadPageList:LoadPageList,tag:'prePage',});break;     //上一页
            case 3:jQuery(this).nextpage({LoadPageList:LoadPageList,tag:'nextpage',});break;   //下一页
            case 4:jQuery(this).firstpage({LoadPageList:LoadPageList,tag:'firstpage',});break; //第一页
            case 5:jQuery(this).prePage({LoadPageList:LoadPageList,tag:'prePage',});break;     //上一页
            case 6:jQuery(this).lastpage({LoadPageList:LoadPageList,tag:'lastpage',});break;   //末页
            case 7:jQuery(this).nextpage({LoadPageList:LoadPageList,tag:'nextpage',});break;   //下一页
          }
          return false;
        })

      });
    },
    //TODO:查询
    select:function (LoadPageList,tag)
    {
     // console.log(LoadPageList['tag'])
      if(LoadPageList['tag'] == 'select')
      {
        var LoadPageList = LoadPageList['LoadPageList'];
        jQuery('#page_List').attr('typenaem','select');
        console.log('java 服务端没做这个关键字查询')
        if (jQuery('#page_List').attr('typenaem') == 'select')
        {
         // LoadPageList['ajaxPageList']['data']['pageNum'] = '1';
          //LoadPageList['ajaxPageList']['data']['pageSize'] = '5';
          console.log(LoadPageList['ajaxPageList'])
          //jQuery.ajax(LoadPageList['ajaxPageList']);

        }
      }
    },
    //TODO:重置
    Reset:function (LoadPageList,tag)
    {
      if(LoadPageList['tag'] == 'Reset')
      {
        var LoadPageList = LoadPageList['LoadPageList'];
        jQuery('#page_List').attr('typenaem','Reset');

        if (jQuery('#page_List').attr('typenaem') == 'Reset')
        {
          LoadPageList['ajaxPageList']['data']['pageNum'] = '1';
          LoadPageList['ajaxPageList']['data']['pageSize'] = '5';
          //console.log(LoadPageList['ajaxPageList'])
          jQuery.ajax(LoadPageList['ajaxPageList']);

        }
      }
    },

    //TODO:上一页
    prePage:function (LoadPageList,tag)
    {

      //alert('prepage')
      if(LoadPageList['tag'] == 'prePage')
      {
        var LoadPageList = LoadPageList['LoadPageList'];
        jQuery('#page_List').attr('typenaem','prePage');
        //if(jQuery(this).attr('prepage') == '0')  这样也可以
        if(LoadPageList['json']['hasPreviousPage'] == false)
        {
          LoadPageList['ajaxPageList']['data']['pageNum'] = '1';

        }else {
          LoadPageList['ajaxPageList']['data']['pageNum'] = jQuery(this).attr('prepage');
        }

        // console.log(mylist)
        jQuery.ajax(LoadPageList['ajaxPageList']);
      }


    },
    //TODO:下一页
    nextpage:function (LoadPageList,tag)
    {
      //alert('nextpage')
      if(LoadPageList['tag'] == 'nextpage')
      {
        var LoadPageList = LoadPageList['LoadPageList'];
        jQuery('#page_List').attr('typenaem','nextpage');
        // console.log(obj['json']['hasNextPage'])
        if(LoadPageList['json']['hasNextPage'] == false)
        {
          LoadPageList['ajaxPageList']['data']['pageNum'] = LoadPageList['json']['lastPage'];
        }else {
          LoadPageList['ajaxPageList']['data']['pageNum'] = jQuery(this).attr('nextpage');
        }
        $.ajax(LoadPageList['ajaxPageList']);
      }
    },
    //TODO:第一页
    firstpage:function (LoadPageList,tag)
    {
      if(LoadPageList['tag'] == 'firstpage')
      {
        var LoadPageList = LoadPageList['LoadPageList'];
        jQuery('#page_List').attr('typenaem','first');
        LoadPageList['ajaxPageList']['data']['pageNum'] = jQuery(this).attr('first');
        $.ajax(LoadPageList['ajaxPageList']);
      }
    },
    //TODO:末页
    lastpage:function (LoadPageList,tag)
    {
      if(LoadPageList['tag'] == 'lastpage')
      {
        var LoadPageList = LoadPageList['LoadPageList'];
        jQuery('#page_List').attr('typenaem','pages');
        LoadPageList['ajaxPageList']['data']['pageNum'] = jQuery(this).attr('pages');
        $.ajax(LoadPageList['ajaxPageList']);
      }

    },
    //TODO:遍历列表行内操作区按钮函数 下架-放入回收站 =查看货品规格
    buttonClick:function (LoadPageList)
    {
      //alert('ListClickButtom')
      var LoadPageList = LoadPageList['LoadPageList'];
      var objparent = LoadPageList['buttonClick'].parent();
      LoadPageList['buttonClick'].children().each(function(index, element){
        //console.log(obj)
        //console.log(index)
        //console.log(element)
        jQuery(this).unbind("click").click(function(){
          switch(index){
            //case 0:	$(this).ClickFormDomEdit(objprent,objtext);break;           //编辑,通过对像方式objtext取行内的所有名称文字
            case 0:	jQuery(this).State({objparent:objparent,tag:'State',});break;
            case 1:	jQuery(this).del({objparent:objparent,tag:'del',});break;
            case 2:	jQuery(this).spec({LoadPageList:LoadPageList,objparent:objparent,tag:'spec',});break;
          }
        });
      });
    },
    State:function (obj,tag)
    {
      console.log('State')
    },
    del:function (obj,tag)
    {
      console.log('del')
    },
    spec:function (obj,tag)
    {
      console.log('spec')
    },


  });
})(jQuery);

$(function ()
{
  var App = 'http://localhost:8080/';

  //hide 添加表单
  //addEdit

  jQuery("body").LoadPageList({
    App:App,
    myPlugin:myPlugin,
   // mylist:mylist,
    //UnixToDate:UnixToDate,
  });// TODO: 调用 AdminLoadPage 后页 click 左显示右内容 封装 js


});
