//TODO: 后台首页左侧模块 分页 插件 click 左 显示  右 功能 并默认读出 右侧列表 数据
;(function () {
  jQuery.fn.LoadPage=function(options)
  {
    var defaults = {pageNum:'1',pageSize:'5',}//默认参数与属性
    var options = $.extend(defaults,options);
    var LoadPageList =  {};                  //event事件；按钮层定义一个对像；
    LoadPageList['this'] = this;

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
      LoadPageList['pageurl'] = _this.attr('pageurl');

      LoadPageList['javaurl'] = _this.attr('javaurl');//java 服务器地址
    });

  };
  $.fn.extend({


  });
})(jQuery);

$(function ()
{
  var App = 'http://localhost:8080/';
 jQuery("body").LoadPage({ });// TODO: 调用 AdminLoadPage 后页 click 左显示右内容 封装 js
});
