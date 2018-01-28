// JavaScript Document
//alert("d")
$(function () {
  //TODO;列表处理
  var RightPublicList = function (ele, opt) {
    this.defaults = {
      id: "",
      //请求url
      url: null,                   //TODO:列表 URL
      catlisturl: null,                 //TODO:栏目列表 URL
      paramsaveUrl:null,            //TODO：添加规格参数 URL
      itemsaveUrl:null,             //TODO:添加商品 URL
      itemEditUrl:null,             //TODO:添加itemEditUrl URL
      itemDescUrl:null,             //TODO:添加 itemDescUrl URL
      //表头格式列数据格式 (含 表头与 data 数据)
      columns: null,
      //是否隔行变色
      isoddcolor: false,
      pageinfo: null,               //TODO：分页列表说明是否显示
      right_selectfrom: null,       //TODO：查询表单是否显示
      navigatepageNums:null,        //TODO:是否显示页码号
      page_navigatepageNums:null,  //TODO:是否显示页码号和 上一页 下一页 第一页 上一页 末页 下一页
      addEdit:null,                //TODO：是否显示 添加修改表单
      RightListDom:null,              //TODO:是否显示列表


      cat: null,
      frommodel:"",                 //TODO:表单模型
      catdata:null,                //TODO:关键 是否返回栏目的一级 pid = 0 数据 默认不返回
      itemparam:null,              //TODO:关键 是否返回商品规格参模板 默认不返回
      //pageindex: 1,
    }//TODO：初始定义的定值
    this.settings = $.extend({}, this.defaults, opt);
  }
    RightPublicList.prototype = {
    appright_Id:null,
    frommodel:null,//TODO:表单模型
    mythis:null, //TODO：全局 this
    init: function ()
    {
      this.appright_Id=this.settings.id;// 调用的ID appright_Id
      this.frommodel=this.settings.frommodel;// TODO:表单模型
      mythis=this;                          //TODO:返回初始定义的 defaults 值 和 settings 最终返回的值
      mythis['parms'] = {};                //TODO:这是 AJAX data 参数；默认是不传 在 java 端指定
      console.log(mythis);
      //console.log(mythis.settings.catdata);
      //TODO:公用 列表区===============================
      mythis['reghtaddeditbutton'] = jQuery("[id='" + mythis.appright_Id + "']").find('.reghtaddeditbutton');//TODO：按钮组 add  edit  del xuan
      mythis['from1'] = jQuery("[id='" + mythis.appright_Id + "']").find('#from1');//TODO:列表模板区2-查询表单区

      mythis['right_listpage'] = jQuery("[id='" + mythis.appright_Id + "']").find('.right_listpage');       //TODO：列表节点
      mythis['addEdit'] = jQuery("[id='" + mythis.appright_Id + "']").find('.addEdit');                     //TODO：表单 节点
      mythis['from2'] = jQuery("[id='" + mythis.appright_Id + "']").find('#form2');
     if(mythis.frommodel == 'tree')
     {
       mythis['from3'] = jQuery("[id='" + mythis.appright_Id + "']").find('#form3');
       if(mythis.settings.catdata == true)
       {
         TreeParamPlugin.getCatlistAjaxData(mythis.settings.catlisturl);                    //TODO：初始返回列表数据AJAX 是否返回栏目的一级 pid = 0 数据 默认不返回
       }
       //TODO:栏目 列表 可选 ===============================
       TreeParamPlugin.CatlistElement();//TODO:初始化元素
       TreeParamPlugin.CatlisTableHead();//TODO:初始化表頭遍歷
       TreeParamPlugin.CatlisTableBody();//TODO:初始化动态行
       TreeParamPlugin.eachTreeTitle(mythis,mythis['level1']);//TODO:选择栏目 click 带栏目的ID 并查出 当前商品所属栏目是否有规格参数模板
     }
     else
     {
       //TODO:初始化 公用 的列表  =======================
       this.myCommonList();                                                                                  //TODO:初始化公用的列表
       this.bindEvent();
       mythis['from2'] = jQuery("[id='" + mythis.appright_Id + "']").find('#from2');                         //TODO：表单from
       mythis['addeditsubmit'] = jQuery("[id='" + mythis.appright_Id + "']").find('.addeditsubmit');         //TODO：表单的提交
       //TODO:公用 表单  ===============================
       this.FromCommonEvent();
     }

    },
      //TODO:公用的列表
    myCommonList: function (parms) {
   // alert("3")
      mythis['reghtaddeditbutton'].empty().append(DomHtml.reghtaddeditbutton());//TODO: 列表模板区2-按钮区
      mythis['from1'].empty().append(DomHtml.SelectForm());//TODO:列表模板区2-查询表单区
      CommonTableList.getAjaxDate(mythis.settings.url, parms);//TODO：初始返回列表数据AJAX
      CommonTableList.InitializeElement(mythis['listdata']);//TODO：分页列表说明
      CommonTableList.createTableHead();//TODO:初始化表头
      CommonTableList.createTableBody(mythis['listdata']);//TODO:初始化动态行

      CommonTableList.navigatepageNumscolour(mythis['listdata']['pageNum']);//TODO:给当前页码添加颜色

      CommonTableList.selectpage_size(mythis['listdata']['pageSize']);//TODO:每页行数选中
      CommonTableList.RightListDom();

      CommonTableList.addEditDom();
      CommonTableList.pageinfo();
      CommonTableList.right_selectfrom();
      CommonTableList.navigatepageNums();
      CommonTableList.page_navigatepageNums();
   // if (this.settings.pagination) this.createTableFoot();
  },
      //TODO：按钮组 add  edit  del xuan 表单的提交
    FromCommonEvent:function ()
    {
      AppRightFromPlugin.EachReghtAddEditButton(mythis,mythis['reghtaddeditbutton'])
      MySubmit.EachAddEditSubmit(mythis,mythis['addeditsubmit'])//TODO：表单的提交
    },
      //TODO;以下没用过测试
    bindEvent: function () {
      //添加跳转事件
      this.registerSkipPage();
      //添加鼠标悬浮事件
      this.registermousehover();
      //添加隔行变色
      this.registerchangebgcolor();
      // this.nextpage();
    },
    //添加鼠标悬浮事件
    registermousehover: function () {
      //添加鼠标悬浮事件
      $("table[id='" + this.appright_Id + "'] tbody tr").mouseover(function () {
        $(this).addClass("mouseover");
      }).mouseleave(function () {
        $(this).removeClass("mouseover");
      });
    },
    //添加隔行变色事件
    registerchangebgcolor: function () {
      //console.log(this.settings.isoddcolor)
      //添加隔行变色
      if (this.settings.isoddcolor)
        $("table[id='" + this.appright_Id + "'] tr:odd").css("background-color", "#A77C7B").css("color", "#fff");
    },
    //添加页数跳转事件
    registerSkipPage: function () {
      $("table").delegate("#skippage", "click",
        function () {
          var value = $("table[id='" + this.appright_Id + "'] tfoot tr td input").val();
          if (!isNaN(parseInt(value))) {
            if (parseInt(value) <=  mythis.settings.totalpage) mythis.createTableBody(parseInt(value));
            else alert("超出页总数");
          } else alert("请输入数字");
        });
    },



  }



  $.fn.appright = function (options) {
    var appright = new RightPublicList(this, options);
    return this.each(function () {
      //console.log('2222222')
      appright.init();


    });


  }
})
$(function(){

});
