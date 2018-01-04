/**
 * Created by jun on 2016/1/11.
 *对像级开发
 */
/*********************************************************************************************************
 * ArticleCat 调用方法
 * */
$(function(){

    var LDataUrl  = ThinkPHP['APP'] +'/Goods/Catenew/LData';              //列表记录集
    var imggifurl  = ThinkPHP['APP'] +'/Public/img/ajax-loader3.gif';              //加载图标
    var PublicForm  = ThinkPHP['APP'] +'/Goods/Catenew/PublicForm';              //列表记录集
   // var ButtonUrlAdd  = ThinkPHP['APP'] +'/Goods/Catenew/FindAppend';              //r提交添加
    var DelFindUrl  = ThinkPHP['APP'] +'/Goods/Catenew/DelFindUrl';              //单多删除记录集
    //var EditFormUrl  = ThinkPHP['APP'] +'/Goods/Catenew/FindUpdate';              //修改URL
    var getFindurl  = ThinkPHP['APP'] +'/Goods/Catenew/getFindurl';               //修改URL
   // var addFormUrl  = ThinkPHP['APP'] +'/Article/ArticleCat/addForm';              //列表记录集

    //var imggif  = ThinkPHP['APP'] +'/Public/img/ajax-loader4.gif';              //加载图标


    jQuery('#Tree').Cate({
        LDataUrl:LDataUrl,
        imggifurl:imggifurl,//加载图标
        PublicForm:PublicForm,//添加时需要表返回的记录
       // ButtonUrlAdd:ButtonUrlAdd,//提交添加
        DelFindUrl:DelFindUrl,//单多删除记录集
        getFindurl:getFindurl,//返回当前的记录
        //EditFormUrl:EditFormUrl,
        //grey:grey,
       // addFormUrl:addFormUrl,
      //

    });


});


