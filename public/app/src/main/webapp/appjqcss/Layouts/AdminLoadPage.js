//TODO: 后台首页左侧模块 分页 插件 click 左 显示  右 功能
;(function () {
  jQuery.fn.AdminLoadPage=function(options)
  {
    var defaults = { click:'click',change:'change',mouseover:'mouseover',mouseout:'mouseout',}//默认参数与属性
    var options = $.extend(defaults,options);
    var adminPage =  {};                  //event事件；按钮层定义一个对像；
    adminPage['this'] = this;
    adminPage['side-menu'] = adminPage['this'].find('#side-menu');
    adminPage['li'] = adminPage['side-menu'].children("li:gt(1)").find('li > a');
    //TODO: 右侧公共导航 模块 分页   标签选择
    adminPage['modulename'] = adminPage['this'].find('.modulename')
    adminPage['pagename'] = adminPage['this'].find('.pagename');
    // TODO: 右侧公共 dome
    adminPage['public']  = adminPage['this'].find('#public');
    adminPage['li'].on(options.click,function ()
    {
      //alert('li')
      var _this = jQuery(this);
      // TODO : click 左侧模块分页 删除之前已添加 1 2 li 级标签 active 属性 并 给 当前 1 2 级 li 标签 添加  active class 属性
      if(_this.parent('li').hasClass("active") == false )
      {
        _this.closest('#side-menu').find('li').removeClass('active');
        _this.parent('li').addClass('active');
        _this.parent('li').parent('ul').parent('li').addClass('active');
      }
      // TODO:将模块与模块分页 名称赋值给右侧 导航菜单
      adminPage['modulename'].text(_this.parent().parent().parent().children('a').children('span:eq(0)').text());
      adminPage['pagename'].text(_this.children('span').text());
      //console.log(_this.attr('idurl'))
      // TODO: jquery load 装载返回的 jsp 右侧内容页
      adminPage['public'].load(_this.attr('idurl'))
      return false;
    });
    //console.log(adminPage);

  };

})(jQuery);

$(function ()
{
  jQuery("body").AdminLoadPage();// TODO: 调用 AdminLoadPage 后页 click 左显示右内容 封装 js

});
