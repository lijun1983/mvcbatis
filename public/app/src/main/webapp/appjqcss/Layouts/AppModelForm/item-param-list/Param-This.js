
jQuery(function () {
    //alert('publiclist');
    //console.log(jQuery("body"))

  jQuery("#appright_common").appright({
    id:"appright_common",

    url:"/item/param/list",
    columns: [
      {field:'ck',checkbox:true},
      { field: 'id', title: '编号',},
      { field: 'itemCatId', title: 'itemCatId',},
      { field: 'paramData', title: 'paramData',},
      { field: 'created', title: 'created',},
      { field: 'updated', title: 'updated',},
      { field: 'Plugin',title: '操作',},
    ],
   // UnixToDate("yyyy-MM-dd hh:mm:ss",new Date(obj["created"]))
    RightListDom:true,              //TODO:是否显示列表
    addEdit:false,                   //TODO：是否显示 添加修改表单
    isoddcolor:false,               //TODO：是否隔行变色
    pageinfo:true,                  //TODO：分页列表说明
    right_selectfrom: true,         //TODO：查询表单是否显示
    navigatepageNums:true,          //TODO:是否显示页码号
    page_navigatepageNums:true,     //TODO:是否显示页码号和 上一页 下一页 第一页 上一页 末页 下一页
    frommodel:'param', //TODO:关键 区分是那个模块的表单(必须)
    catdata:true, //TODO:关键 是否返回栏目的一级 pid = 0 数据 默认不返回
    itemparam:true, //TODO:关键 是否返回商品规格参模板 默认不返回
    catlisturl:"/item/cat/list",
    CatParamUrl:"/item/param/query/itemcatid/",//TODO：返回商品的规格参数模板
    paramsaveUrl:"/item/param/save/",//TODO：添加规格参数
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
});
