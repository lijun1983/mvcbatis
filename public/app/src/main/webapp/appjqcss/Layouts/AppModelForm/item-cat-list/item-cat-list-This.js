
jQuery(function () {
    //alert('publiclist');
    //console.log(jQuery("body"))

  jQuery("#appright_common").appright({
    id:"appright_common",
    frommodel:'tree', //TODO:关键 区分是那个模块的表单(必须)
    catdata:true, //TODO:关键 是否返回栏目的一级 pid = 0 数据 默认不返回
    itemparam:false, //TODO:关键 是否返回商品规格参模板 默认不返回
    catlisturl:"/item/cat/list",
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
      { field: 'Plugin',title: '操作',style:'width:10%'},
    ],
  });
});
