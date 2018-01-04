/**
 * Created by jun on 2016/1/11.
 *对像级开发
 * 对应css->List.css
 */


;(function () {
    jQuery.fn.Cate=function(options){
        var defaults = {
            LDataUrl:'',//返回数据表所有记录集URL
            PublicForm:'',//公共表单记录
            ButtonUrlAdd:'',//提交添加
            DelFindUrl:'',
            getFindurl:'',
            EditFormUrl:'',//修改URL
          Tree:'#Tree',//树状ID
            imggif:'.imggif',//
            imggifurl:'',//加载图标
            plus:'fa-plus',//i class
            minus:'fa-minus',
            ti:' .t>i',//i标签
            ParentNode:' .ParentNode',
            modal:'#modal',
            ScreeningQuery:'#ScreeningQuery',
            FormType:'FormType',//表单类型
            FormTypeNameEdit:'Edit',//表单类型名称
            FormTypeNameAdd:'Add',//表单类型名称
          hover:'hover',
          click:'click',
          change:'change',                                                                        //默认change事件
            mouseover:'mouseover',                                                                          // 默认移入参数高亮效果；如果传click会点击才出效果
            mouseout:'mouseout',
            titlename:'title',//保存待修改的行文本
            A:'id',//保存待修改的行文本
            B:'pid',//保存待修改的行文本
            C:'pinyin',//保存待修改的行文本
            D:'area',//保存待修改的行文本
            E:'ucfirst',//保存待修改的行文本
            F:'暂无',//保存待修改的行文本
            G:'status',//保存待修改的行文本
            H:'sort',//保存待修改的行文本
            I:'iconCls',//保存待修改的行文本

        }//默认参数与属性
        var options = $.extend(defaults,options);


         this.each(function(){
            var _this = $(this);
          //console.log(_this.prev().find('.form-group>label'))
             //var TreeTitleCss = _this.prev().TreeTitle = {};
             var Treeobj = _this.Treeobj = {};
             Treeobj['prev'] = _this.prev();//样式
             Treeobj['LDataUrlobj'] = _this.LDataUrlobj = {};//定义一个对像；初始化就通过对像来传送URL

             var jsonData = _this.jsonData = {};

             //=================以上是按钮层==============================

             Treeobj['prev'].TreeTitleCss();

             Treeobj['LDataUrlobj'] = { method:'get',url  :options.LDataUrl,async : 'true',dataType:  'json',
                success: function(json)
                {
                    if(json != null)
                    {

                        jsonData['json'] =json;
                        jsonData['Tree'] =jQuery(options.Tree);
                        jsonData['imggif'] =jQuery(options.imggif);
                        jsonData['imggifurl'] =options.imggifurl;
                       // console.log(jsonData)
                        jQuery(this).Ldata({jsonData : jsonData, }); //返回列表记录集


                        jQuery('.t').each(function(){jQuery(this).Title_Event(jQuery(this),Treeobj['LDataUrlobj']);});//遍历标题按钮和click展开与折垒效果铵钮
                        jQuery('.editArea').each(function(){jQuery(this).Form_Event(jQuery(this),Treeobj['LDataUrlobj']);});//遍历操作区按钮

                    }
                },
                //error  //请求失败后的回调函数
            }
            $.ajax(Treeobj['LDataUrlobj']);//返回所有数据表所有记录

             console.log(jQuery('select.eok'))
             console.log(jQuery('select.eok').length)
             jQuery('select.eok').die().live(options.change,function(){

                 alert('3')
                 //$(this).SelectSelected();
             });
        });

      $.fn.extend({
          Title_Event:function(obj,LDataUrlobj)
          {
              obj.children().each(function(index,element){
                  jQuery(this).die().live(options.click,function(){
                      switch(index){
                          //case 0:	jQuery(this).Title_Event_I_Click($(this));break;
                          case 0:	jQuery(this).Title_Event_I_Click({
                              obj:jQuery(this),
                              //obj:this,
                              plus:options.plus,
                              minus:options.minus,
                              ParentNode:options.ParentNode,
                              LDataUrl:options.LDataUrl,
                              imggif:options.imggif,
                              ti:options.ti,
                              imggifurl:options.imggifurl,
                              LDataUrlobj:LDataUrlobj,
                          });break;           //
                          //case 1:	$(this).Title_Event_I_Click($(this));break;//

                      }
                  });
              });
          },//--------------------------------------遍历标题按钮和click展开与折垒效果铵钮--------------------------

          Form_Event:function(obj,LDataUrlobj)
          {
              obj.children().each(function(index, element){
                  //console.log(index);
                  // console.log(element);//返回最近的html<span>[编辑]</span>
                  jQuery(this).SpanHove($(this));////光标移入操作区文字着色
                  //var parent = $(this).parent().parent();
                 // var goods_typeid = parent.attr('goods_typeid');


                  jQuery(this).die().live(options.click,function(){

                      if(jQuery(options.Tree).has('input').length == 0)
                      {
                          switch(index){
                              //case 0:	$(this).ClickFormDomEdit(objprent,objtext);break;           //编辑,通过对像方式objtext取行内的所有名称文字
                              case 0:	$(this).ClickFormDom({
                                  modal:options.modal,
                                  tag:'edit',
                                  FormType:options.FormType,//类型属性
                                  FormTypeNameEdit:options.FormTypeNameEdit,//类型名称
                                  PublicForm:options.PublicForm,//公共返回的记录集
                                  change:options.change,
                                  click:options.click,
                                  Tree:options.Tree,
                                  EditFormUrl:options.EditFormUrl,
                                  imggif:options.imggif,
                                  imggifurl:options.imggifurl,
                                  mouseover:options.mouseover,
                                  mouseout:options.mouseout,
                                  getFindurl:options.getFindurl,
                                  EditFormUrl:options.EditFormUrl,
                                  LDataUrlobj:LDataUrlobj,

                              });break;           //编辑,通过对像方式objtext取行内的所有名称文字

                              case 1:	jQuery(this).ClickFormDom({
                                  modal:options.modal,
                                  tag:'add',
                                  FormType:options.FormType,//类型属性
                                  FormTypeNameAdd:options.FormTypeNameAdd,//类型名称
                                  PublicForm:options.PublicForm,//公共返回的记录集
                                  change:options.change,
                                  click:options.click,
                                  Tree:options.Tree,
                                  ButtonUrlAdd:options.ButtonUrlAdd,
                                  imggif:options.imggif,
                                  imggifurl:options.imggifurl,
                                  mouseover:options.mouseover,
                                  mouseout:options.mouseout,
                                  LDataUrlobj:LDataUrlobj,

                              });break;//添加弹层表单
                              case 2:	jQuery(this).SaiXian({
                                  ScreeningQuery:options.ScreeningQuery,//弹层
                                  //parent:parent,
                                  //click:options.click,
                                 // goods_typeid:goods_typeid,

                              });break;//添加下级目录
                               case 3:	jQuery(this).SuaXin({
                                   LDataUrlobj:LDataUrlobj,//刷新URL
                               });break;//添加下级目录
                              case 4:	jQuery(this).DelFind({
                                  DelFindUrl:options.DelFindUrl
                              });break;                      //单与多可同时删除
                              //case 4:	ScreeningQuery(C1);break;//删除
                          }
                      }
                      else
                      {
                          $.scojs_message('请先取消编辑状态!', $.scojs_message.TYPE_ERROR);
                      }
                  });
              });
          },//-----------------------------------------遍历操作区----------------------------------------------------
          Btn_Default:function(modal){
              //alert('1')
              modal.find('.btn.btn-default').die().live(options.click,function(){

                  modal.find('select').get(0).selectedIndex=0
                  modal.find('select').get(0).selectedIndex=0
                  modal.find('input[name="path"]').attr('value','1-0');
                  modal.find('input[name="cat_level"]').attr('value','1');
                  modal.find('input[name="title"]').attr('value','');
                  modal.find('input[name="price_nums"]').attr('value','5');
                  modal.find('input[name="filter_attr"]').attr('value','');
                  modal.find('input[name="iconCls"]').attr('value','fa-plus');
                  modal.find('input[name="sort"]').attr('value','1');
              });//取消
          },//--------------------------------------取消-------------------------------------------------------------
          Close:function(modal){


              modal.find('.close').die().live(options.click,function(){

                  modal.find('select').get(0).selectedIndex=0
                  modal.find('input[name="path"]').attr('value','1-0');
                  modal.find('input[name="cat_level"]').attr('value','1');
                  modal.find('input[name="title"]').attr('value','');
                  modal.find('input[name="price_nums"]').attr('value','5');
                  modal.find('input[name="filter_attr"]').attr('value','');
                  modal.find('input[name="iconCls"]').attr('value','fa-plus');
                  modal.find('input[name="sort"]').attr('value','1');
              });//
          },//--------------------------------------关闭----------------------------------------------------------------
          SpanHove:function (obj){
            //var obj = obj;
          //console.log(obj)
              obj.mouseover(function(){
                 // alert('3')
                 // $(this).css({"background-color":"#bd72eb"});
                  $(this).css({"color":"#0a819c"});
              });
              obj.mouseout(function(){
                 $(this).css({"color":""});
                  //alert('-3')
                 // $(this).css({"background-color":""});
              });

        },//光标移入操作区文字着色
      });
    };



    $.fn.TreeTitleCss=function() {
        var defaults = {
           // obj:'',
        }//默认参数与属性
        var options = $.extend(defaults,options);
      //  console.log(this)
        this.css({"background-color":'#f0f2f5'});
        this.find('.form-group>label').css({"margin":'5px',"cursor":'pointer',"padding-right":'0%',"font-weight":'bold',"padding-top":'0px'});
        this.find('.form-group>label').css({"margin":'5px',"cursor":'pointer',"position:":'relative',});
        this.find('.form-group>label.Q').css({"position":'relative',"left":'0%',"font-weight":'0%',});
        this.find('.form-group>label.W').css({"position":'absolute',"left":'20.5%',"padding-left":'0%',});
        this.find('.form-group>label.E').css({"position":'absolute',"left":'23.5%',"padding-left":'0%',"padding-right":'0%',});
        this.find('.form-group>label.R').css({"position":'absolute',"left":'32%',"padding-left":'0%',});
        this.find('.form-group>label.T').css({"position":'absolute',"left":'39%',"padding-left":'0%',});
        this.find('.form-group>label.Y').css({"position":'absolute',"left":'41.5%',"padding-left":'0%',});
        this.find('.form-group>label.U').css({"position":'absolute',"left":'52%',"padding-left":'0%',});
        this.find('.form-group>label.I').css({"position":'absolute',"left":'58%',"padding-left":'0%',});
        this.find('.form-group>label.O').css({"position":'absolute',"left":'63%',"padding-left":'0%',});
        this.find('.form-group>label.QQ').css({"position":'absolute',"left":'68%',"padding-left":'0%',});
        this.find('.form-group>label.QW').css({"position":'absolute',"left":'75%',"padding-left":'0%',});
        this.find('.form-group>label.QE').css({"position":'absolute',"left":'80%',"padding-left":'0%',});
        this.find('.form-group>label.P').css({"position":'absolute',"left":'88%',"padding-left":'0%',});

    };

  jQuery.fn.Ldata= function(options) {
      var defaults = {
          /*josn:'',
          Tree:'',*/
          //imggif:'',
          //imggifurl:'',
          jsonData:'',
    }//默认参数与属性
      var options = $.extend(defaults,options);

      var jsonData = options.jsonData;
          console.log(jsonData)
      //console.log(options.imggif)
    //  console.log(jsonData['imggif'])
      var json = jsonData['json'];

      jsonData['Tree'].empty();

      var X = '';
      $.each(jsonData['json'],function (key,value)
      {
          //console.log(value['title']);'+v['id']+'fa-plus cat_level
          X += '<div class="ParentNode del" id="'+value['id']+'"goods_typeId="'+value['goods_typeId']+'" pid="'+value['pid']+'"  level="'+value['cat_level']+'" path="'+value['path']+'" title="'+value['title']+'"typename="'+value['TypeName']+'">';
          X += '<div class="t">';
          X += '<i class="fa '+value['iconCls']+'"></i>';
          X += '<span class="title">'+value['title']+'</span>';
          X += '<img class="imggif" style="display: none;" src="'+jsonData['imggifurl']+'">';
          X += '</div>';
          X += '  <ul>';
          X += '  <li class="A">'+value['id']+'</li>';
          X += '  <li class="B">'+value['pid']+'</li>';
          X += '  <li class="C" style="">'+value['path']+'</li>';
          X += '  <li class="D" style="">'+value['cat_level']+'</li>';
          X += '  <li class="E" style="">顶 级</li>';


          X += '  <li class="F" style="">'+value['TypeName']+'</li>';


          X += '  <li class="G" style="">'+value['price_nums']+'</li>';
          X += '<li class="H">'+value['filter_attr']+'</li>';
          X += '<li class="I">'+value['is_show']+'</li>';
          X += '<li class="J">'+value['iconCls']+'</li>';
          X += '<li class="K">'+value['sort']+'</li>';
          X += '  </ul>';
          X += '  <div class="ok" style="">';
          X += '  <i class="glyphicon glyphicon-remove"></i><i class="glyphicon glyphicon-ok "></i>';
          X += '  </div>';
          X += '  <div class="editArea" style="">';
          X += '  <span>[编辑]</span>';
          X += ' <span>[添加栏目]</span>';
          X += ' <span>[设置筛选]</span>';
          X += ' <span>[刷新]</span>';
          X += ' <span>[删除]</span>';
          X += ' </div>';
          X += ' </div>';

          X += ' <div class="TA" ></div>';

      });
      jsonData['Tree'].append(X)
      jsonData['Tree'].find('.ParentNode:odd').css({'color':'#5bc0de'})
      jsonData['imggif'].css({"position":"absolute","left":"50%","top":"20%",})
      //$(this).CssList();
      $.fn.extend({});
  };//返回的json数据

    jQuery.fn.Title_Event_I_Click= function(options) {
        var defaults = {
            obj:'',
            plus:'',
            minus:'',
            ParentNode:'',
            LDataUrl:'',
            imggif:'',
            imggifurl:'',
            ti:'',
            LDataUrlobj:'',//初始化第一页数据

        }//默认参数与属性
        var options = $.extend(defaults,options);
        //console.log(obj)
        var obj = options.obj;

        var LDataUrlobj = options.LDataUrlobj;

        var id = obj.parent().parent().attr('id');


        var objfind = obj.parent().parent().next();//当前节点的下一级 T A 节点

        var ThisParentNode = obj.parent().parent();//当前节点.ParentNode
        //console.log(obj.hasClass(options.plus))
        if(obj.hasClass(options.plus) == true)
        {
            ThisParentNode.siblings(options.ParentNode).find(options.ti).removeClass(options.minus).addClass(options.plus)//给当前节点添加fa-plus；移除fa-minus
            ThisParentNode.siblings(options.ParentNode).next().hide()                                                     //隐藏所有同级下一级.TA节点
            ThisParentNode.siblings(options.ParentNode).css({"background-color":""});
            obj.removeClass(options.plus).addClass(options.minus)
            objfind.show();
           // ThisParentNode.css({"background-color":"#0F2747",});//click行需要颜色开启这里
            var imggif = ThisParentNode.find(options.imggif);

           //obj.NextAjax(id,objfind,imggif);
            var data = {};
            data['id'] = id;
            //console.log(data);
            var NextAjaxObj = obj.objfind = {};
            NextAjaxObj = {method:'get',url  :options.LDataUrl,async : 'true',data :data,dataType:  'json',
                beforeSend: function (XMLHttpRequest) {
                    imggif.show();
                },
                success: function(json) {
                    setTimeout(function () {
                        imggif.hide();
                    },1500);
                   // console.log(json)
                    if(json != null)
                    {
                        //console.log(LDataUrlobj)
                        $(this).NextAjaxData(json,objfind);
                        jQuery(options.imggif).css({"position":"absolute","left":"50%","top":"20%","background":"salmon"})
                        //console.log(objfind.find('.t'))
                        //console.log(jQuery('.t'))
                        //$(this).TA_ParentNodeCss(objfind);



                        objfind.find('.t').each(function(){$(this).Title_Event($(this),LDataUrlobj)});//将刚刚加载的下级记录注册click事件；

                        objfind.find('.editArea').each(function(){$(this).Form_Event($(this),LDataUrlobj);});//将刚刚加载的下级记录注册click事件；

                    }
                },
                //error  //请求失败后的回调函数
            }
            $.ajax(NextAjaxObj);//返回所有数据表所有记录
        }
        else
        {
            obj.removeClass(options.minus).addClass(options.plus)
            objfind.hide();
            ThisParentNode.css({"background-color":""});
            //console.log(objfind.next('.TA'))
            //objfind.next('.TA').css({"display":"none"});
        }
        $.fn.extend({
            NextAjaxData:function(json,objfind){
                    objfind.empty();
                    var X = '';
                    // console.log($(this));
                    $.each(json,function (key,value)
                    {
                    //console.log(value['title']);'+v['id']+'fa-plus
                        X += '<div class="ParentNode del" id="'+value['id']+'"goods_typeId="'+value['goods_typeId']+'" pid="'+value['pid']+'"  level="'+value['cat_level']+'" path="'+value['path']+'" title="'+value['title']+'"typename="'+value['TypeName']+'">';
                        X += '<div class="t">';
                        X += '<i class="fa '+value['iconCls']+'"></i>';
                        X += '<span class="title">'+value['title']+'</span>';
                        X += '<img class="imggif" style="display: none;" src="'+options.imggifurl+'">';
                        X += '</div>';
                        X += '  <ul>';
                        X += '  <li class="A">'+value['id']+'</li>';
                        X += '  <li class="B">'+value['pid']+'</li>';
                        X += '  <li class="C" style="">'+value['path']+'</li>';
                        X += '  <li class="D" style="">'+value['cat_level']+'</li>';
                        X += '  <li class="E" style="">'+value['PidName']+'</li>';


                        X += '  <li class="F" style="">'+value['TypeName']+'</li>';


                        X += '  <li class="G" style="">'+value['price_nums']+'</li>';
                        X += '<li class="H">'+value['filter_attr']+'</li>';
                        X += '<li class="I">'+value['is_show']+'</li>';
                        X += '<li class="J">'+value['iconCls']+'</li>';
                        X += '<li class="K">'+value['sort']+'</li>';
                        X += '  </ul>';
                        X += '  <div class="ok" style="">';
                        X += '  <i class="glyphicon glyphicon-remove"></i><i class="glyphicon glyphicon-ok "></i>';
                        X += '  </div>';
                        X += '  <div class="editArea" style="">';
                        X += '  <span>[编辑]</span>';
                        X += ' <span>[添加栏目]</span>';
                        X += ' <span>[设置筛选]</span>';
                        X += ' <span>[刷新]</span>';
                        X += ' <span>[删除]</span>';
                        X += ' </div>';
                        X += ' </div>';

                        X += ' <div class="TA" ></div>';

                });
                objfind.append(X)


               /* var categoryname = ''
                $.each(jsonLevelFormatCate,function(i,n){
                    categoryname += objfind.find('select[name="catename"]').append('<option  value="'+n['id']+'"  pid="'+n['pid']+'"path="'+n['path']+'">'+n['title']+'</option>');
                });
                var GoodsTypenname = '';//栏目分类变量；遍历追加至DOM后面 typename

                $.each(jsonGoodsTypeAll,function(i,m){
                    GoodsTypenname += objfind.find('select[name="typename"]').append('<option  value="'+m['id']+'" >'+m['title']+'</option>');
                });*/
                //
                //jQuery(options.Tree).find('.ParentNode:odd').css({'color':'#47a447'})
                objfind.find('.I').css({'width':'20%'});



            },
        });
    };//点击 加号与减号 按钮


    jQuery.fn.ClickFormDom= function(options) {
        var defaults = {
            modal:'',
            tag:'',
            FormType:'',//类型属性
            FormTypeNameAdd:'',//类型名称
            FormTypeNameEdit:'',//类型名称
            PublicForm:'',
            change:'',
            ButtonUrlAdd:'',
            click:'',
            Tree:'',
            imggif:'',
            imggifurl:'',
            mouseover:'',
            mouseout:'',
            getFindurl:'',
            EditFormUrl:'',
            LDataUrlobj:'',


        }//默认参数与属性
        var options = $.extend(defaults,options);
        var $this = this;
        var modal = jQuery(options.modal);
        //alert('2')

        modal.find('.icheckbox_minimal-grey').live(options.mouseover,function(){
           $(this).addClass('hover');
        });
        modal.find('.icheckbox_minimal-grey').live(options.mouseout,function(){
            $(this).removeClass('hover');
        });

        modal.find('.iCheck-helper').die().live(options.click,function(){
          if($(this).parent().hasClass('checked'))
          {
              $(this).parent().removeClass('checked');
              $(this).prev().attr('checked',false)
          }
            else
          {
              $(this).parent().addClass('checked');
              $(this).prev().attr('checked',true)
          }



        });



        var PublicFormAjax = modal.PublicFormAjax = {};
        //console.log(PublicFormAjax)
        PublicFormAjax = { method:'get',url  :options.PublicForm,async : 'true',dataType:  'json',
            //data:Formobj,
            success: function(json)
            {
                var FormatTree = json['FormatTree'];
                var GoodsTypeAll = json['GoodsTypeAll'];
                var rec = json['rec'][0]['id'];

                if(json != null)
                {
                    jQuery('select[name="pid"]').empty();
                    jQuery('select[name="goods_typeId"]').empty();

                    jQuery('select[name="pid"]').prepend('<option value="0" pid="0" path="1-0" >请选择</option>');
                    jQuery('select[name="goods_typeId"]').prepend('<option value="0">请选择</option>');
                    //jQuery('select[name="is_show"]').prepend('<option value="0">请选择</option>');

                    $.each(FormatTree,function(index,array){
                        jQuery('select[name="pid"]').append('<option value="'+array['id']+'" pid="'+array['pid']+'" path="'+array['path']+'">'+array['title']+'</option>')
                    });
                    $.each(GoodsTypeAll,function(index,array){
                        jQuery('select[name="goods_typeId"]').append('<option value="'+array['id']+'">'+array['title']+'</option>')
                    });
                    jQuery('input[name="rec[]"]').attr('value',rec);//将推荐ID放至input供提交
                }

            },

            //error  //请求失败后的回调函数
        }
        $.ajax(PublicFormAjax);////返回pid =0的记录先；
        //$this.TagType()//
        if(options.tag == 'add')
        {
            //alert('add');
           // jQuery('select[name="pid"]')
            modal.modal({show:true,backdrop:'static',keyboard: false,});
            modal.find('#formG_ID').attr(options.FormType)
            modal.find('#formG_ID').attr(options.FormType,options.FormTypeNameAdd)
            modal.find('#Ad').attr(options.FormType)
            modal.find('#Ad').attr(options.FormType,options.FormTypeNameAdd)

            modal.find('h4').empty();
            var formtitle = ''                                                                       //弹层标题名称
            formtitle = '<b style="color: #00AAFF;font-size:20px;"gid ="">新增 栏目 Catenew 表记录&nbsp;</b>';
            modal.find('h4').prepend(formtitle);
            //console.log($(this))
            $this.Btn_Default(modal);//取消清空表单
            $this.Close(modal);//关闭清空表单


        }
        else if(options.tag == 'edit')
        {
            //alert('edit');
            //console.log(jQuery('select[name="pid"] option:selected').attr('path','1'));
            modal.modal({show:true,backdrop:'static',keyboard: false,});
            modal.find('#formG_ID').attr(options.FormType)
            modal.find('#formG_ID').attr(options.FormType,options.FormTypeNameEdit)
            modal.find('#Ad').attr(options.FormType)
            modal.find('#Ad').attr(options.FormType,options.FormTypeNameEdit)
            var title =  $this.parent().parent().attr('title')
            var data = modal.data = {};

            data['id'] = $this.parent().parent().attr('id')
            modal.find('h4').empty();
            var formtitle = ''                                                                       //弹层标题名称
            formtitle = '<b style="color: #00AAFF;font-size:20px;"gid ="'+data['id']+'">修改当前['+data['id']+'] 名称为[  '+title+'  ]栏目记录  Catenew 表记录&nbsp;</b>';
            modal.find('h4').prepend(formtitle);
            $this.Btn_Default(modal);//取消清空表单
            $this.Close(modal);//关闭清空表单
            var getFindobjAjax = modal.getFindobjAjax = {};

            getFindobjAjax ={ method:'get',url  :options.getFindurl,async : 'true',dataType:  'json',
                data:data,
                success: function(json)
                {
                    var getFind = json['getFind'];
                    if(json != null)
                    {
                       // jQuery('select[name="pid"]').empty()
                        //jQuery('select[name="pid"]').prepend('<option value="0" pid="0" path="1">请选择</option>');

                        jQuery('select[name="pid"]').attr('etype',getFind['id'])
                        jQuery('select[name="goods_typeId"]').attr('etype',getFind['goods_typeId'])
                        jQuery('select[name="is_show"]').attr('etype',getFind['is_show'])
                        jQuery('input[name="id"]').attr('value',getFind['id'])
                        jQuery('input[name="path"]').attr('value',getFind['path'])
                        jQuery('input[name="cat_level"]').attr('value',getFind['cat_level'])
                        jQuery('input[name="title"]').attr('value',getFind['title'])
                        jQuery('input[name="price_nums"]').attr('value',getFind['price_nums'])
                        jQuery('input[name="filter_attr"]').attr('value',getFind['filter_attr'])
                        jQuery('input[name="iconCls"]').attr('value',getFind['iconCls'])
                        jQuery('input[name="sort"]').attr('value',getFind['sort'])
                        //console.log(modal.find('input[type="checkbox"]'))
                        //console.log(modal)
                        var Checkboxstr = modal.find('input[type="checkbox"]');
                        //console.log(Checkboxstr)
                        jQuery(this).CheckboxOK(Checkboxstr,json['recId'])//传一个字符串与DOM对你；使复选框比较选中

                        var eokdom = jQuery('select.eok');
                        jQuery(this).EditEachSelectValue(eokdom,getFind['id']);//插件对像封装eokdon传 这个对像过去 返回与当前记录相等的选中对应的记录



                    }
                },
                //error  //请求失败后的回调函数
            }
            $.ajax(getFindobjAjax);////返回pid =0的记录先；


        }
        //var _path = '';
        /*jQuery('select[name="pid"]').die().live(options.change,function(){
            alert("3")
            $(this).SelectSelected();//当change改变时给其删除所有选中属性；给当前添加选中属性-对像插件封装

            var valuePId = jQuery(this).find('option:selected').val();
            if(valuePId == 0)
            {
                //如果val值是0说明添加的是顶级；否则针对-线计算等级
                jQuery('input[name="path"]').attr('value','1-0')//path值
                jQuery('input[name="cat_level"]').attr('value','1')//等级值
            }
            else
            {
                var _path = jQuery(this).find(':selected').attr('path')
                var path = _path+'-'+valuePId;
                jQuery('input[name="path"]').attr('value',path)//path值
                var _level_num = jQuery('input[name="path"]').attr('value')
                var level_num =  $(this).StrCountcharAt(_level_num);//统计某一个特殊字符的总数量;统计 ‘-’字符的数量-对像插件封装
                jQuery('input[name="cat_level"]').attr('value',level_num)//等级值
            }



        });
        jQuery('select[name="goods_typeId"]').die().live(options.change,function(){
            $(this).SelectSelected();//当change改变时给其删除所有选中属性；给当前添加选中属性-对像插件封装
        });
        jQuery('select[name="is_show"]').die().live(options.change,function(){
            $(this).SelectSelected();//当change改变时给其删除所有选中属性；给当前添加选中属性-对像插件封装
        });*/

//console.log(options.tag)


        modal.find('#Ad').die().live(options.click,function(){
            if($(this).attr(options.FormType) == options.FormTypeNameAdd)
            {
               // alert('添加')
                var tem = 'add';
                $(this).ButtonOkobjUrl($(this),tem);

            }
            else if($(this).attr(options.FormType) == options.FormTypeNameEdit)
            {
                //alert('修改')
                tem = 'edit';
                $(this).ButtonOkobjUrl($(this),tem);
            }
        });

           // console.log(LDataUrlobj)




        $.fn.extend({
            ButtonOkobjUrl:function(obj,tem){
                var obj = obj;
                    var data = {};
                    data['pid'] = jQuery('select[name="pid"] option:selected').val();
                    data['path'] = jQuery('input[name="path"]').val();
                    data['cat_level'] = jQuery('input[name="cat_level"]').val();
                    data['goods_typeId'] = jQuery('select[name="goods_typeId"] option:selected').val();
                    data['title'] = jQuery('input[name="title"]').val();
                    data['price_nums'] = jQuery('input[name="price_nums"]').val();
                    data['filter_attr'] = jQuery('input[name="filter_attr"]').val();
                    data['iconCls'] = jQuery('input[name="iconCls"]').val();
                    data['sort'] = jQuery('input[name="sort"]').val();
                    data['is_show'] = jQuery('select[name="is_show"] option:selected').val();
                    data['rec'] = jQuery('input[name="rec[]"][checked]').val();

                 // console.log(data)

                    var ButtonOkobj  = obj.ButtonOkobj = {};
                    ButtonOkobj = { method:'post',url  :options.ButtonUrlAdd,async : 'true',dataType:  'json',
                        data:data,
                        success: function(json)
                        {

                            jQuery(options.modal).modal('hide');
                            jQuery(this).Btn_Default(jQuery(options.modal));//取消
                            jQuery(this).Close(jQuery(options.modal));//关闭
                            jQuery(this).Save(jQuery(options.modal));//关闭
                            if(json != null)
                            {
                                console.log(json)
                                if(json['add'] == 'add')
                                {
                                    var addFind = json['addFind'];
                                    if(addFind['pid'] == 0)
                                    {
                                        jQuery(this).AddhtmlFind(addFind);

                                    }
                                    setTimeout(function () {

                                            //$.ajax(options.LDataUrlobj);
                                        $.scojs_message('成功添加记录!', $.scojs_message.TYPE_OK);
                                    },1000);
                                }
                                else if(json['save'] == 'save')
                                {
                                    var saveFindid = json['saveFindid'];

                                    if(saveFindid['pid'] == 0)
                                    {

                                        jQuery('div'+'#'+saveFindid['id']).empty();
                                        jQuery(this).saveFindid(saveFindid);
                                    }
                                    setTimeout(function () {
                                        $.ajax(options.LDataUrlobj);
                                        $.scojs_message('修改记录成功!', $.scojs_message.TYPE_OK);
                                    },1000);

                                }
                                else if(json['save'] == 'no')
                                {
                                    setTimeout(function () {
                                        //$.ajax(options.LDataUrlobj);
                                        $.scojs_message('目录不可以上级向下级更新!', $.scojs_message.TYPE_ERROR);
                                    },1000);
                                }

                            }
                        },
                        //error  //请求失败后的回调函数
                    }
                //console.log(ButtonOkobj)
                    if(tem == 'add')
                    {
                        $.ajax(ButtonOkobj);////返回pid =0的记录先；
                    }
                    else
                    {
                        data['id'] = jQuery('input[name="id"]').val();
                        ButtonOkobj['url'] = options.EditFormUrl;
                       // console.log(ButtonOkobj)
                       // console.log(data)

                        $.ajax(ButtonOkobj);////返回pid =0的记录先；

                    }



            },
            Save:function(modal){
               // alert('2')
                //console.log(modal);
                modal.find('select[name="pid"]').get(0).selectedIndex=0
                modal.find('select[name="goods_typeId"]').get(0).selectedIndex=0
                modal.find('select[name="is_show"]').get(0).selectedIndex=0
                modal.find('input[name="path"]').attr('value','1');
                modal.find('input[name="cat_level"]').attr('value','1');
                modal.find('input[name="title"]').attr('value','');
                modal.find('input[name="price_nums"]').attr('value','5');
                modal.find('input[name="filter_attr"]').attr('value','');
                modal.find('input[name="iconCls"]').attr('value','fa-plus');
                modal.find('input[name="sort"]').attr('value','1');
                modal.find('.icheckbox_minimal-grey').removeClass('checked');
                modal.find('.input[type="checkbox"]').attr('checked',false);

            },
            AddhtmlFind:function(addFind){
               // console.log(json)
                var X = '';
                X += '<div class="ParentNode del" id="'+addFind['id']+'"pid="'+addFind['pid']+'"  level="'+addFind['cat_level']+'" path="'+addFind['path']+'" title="'+addFind['title']+'"typename="'+addFind['TypeName']+'">';
                X += '<div class="t">';
                X += '<i class="fa '+addFind['iconCls']+'"></i>';
                X += '<span class="title">'+addFind['title']+'</span>';
                X += '<img class="imggif" style="display: none;" src="'+options.imggifurl+'">';
                X += '</div>';
                X += '  <ul>';
                X += '  <li class="A">'+addFind['id']+'</li>';
                X += '  <li class="B">'+addFind['pid']+'</li>';
                X += '  <li class="C" style="">'+addFind['path']+'</li>';
                X += '  <li class="D" style="">'+addFind['cat_level']+'</li>';
                X += '  <li class="E" style="">顶 级</li>';


                X += '  <li class="F" style="">'+addFind['TypeName']+'</li>';


                X += '  <li class="G" style="">'+addFind['price_nums']+'</li>';
                X += '<li class="H">'+addFind['filter_attr']+'</li>';
                X += '<li class="I">'+addFind['is_show']+'</li>';
                X += '<li class="J">'+addFind['iconCls']+'</li>';
                X += '<li class="K">'+addFind['sort']+'</li>';
                X += '  </ul>';
                X += '  <div class="ok" style="">';
                X += '  <i class="glyphicon glyphicon-remove"></i><i class="glyphicon glyphicon-ok "></i>';
                X += '  </div>';
                X += '  <div class="editArea" style="">';
                X += '  <span>[编辑]</span>';
                X += ' <span>[添加栏目]</span>';
                X += ' <span>[设置筛选]</span>';
                X += ' <span>[刷新]</span>';
                X += ' <span>[删除]</span>';
                X += ' </div>';
                X += ' </div>';

                X += ' <div class="TA" ></div>';
                jQuery(options.Tree).prepend(X);
                jQuery(options.imggif).css({"position":"absolute","left":"50%","top":"20%",})
                jQuery('div'+'#'+addFind['id']).find('.t').Title_Event(jQuery('div'+'#'+addFind['id']).find('.t'));//将刚添加的记录添加到click事件函数Title_Event
                //jQuery('div'+'#'+json['id']).find('.ok').OkRemove_Event(jQuery('div'+'#'+json['id']).find('.ok'),options.remove_edit);
                jQuery('div'+'#'+addFind['id']).find('.editArea').Form_Event(jQuery('div'+'#'+addFind['id']).find('.editArea'))//将刚添加的记录添加到click事件函数Title_Event



            },
            saveFindid:function(saveFindid){
                // console.log(json)
                var X = '';
                X += '<div class="t">';
                X += '<i class="fa '+saveFindid['iconCls']+'"></i>';
                X += '<span class="title">'+saveFindid['title']+'</span>';
                X += '<img class="imggif" style="display: none;" src="'+options.imggifurl+'">';
                X += '</div>';
                X += '  <ul>';
                X += '  <li class="A">'+saveFindid['id']+'</li>';
                X += '  <li class="B">'+saveFindid['pid']+'</li>';
                X += '  <li class="C" style="">'+saveFindid['path']+'</li>';
                X += '  <li class="D" style="">'+saveFindid['cat_level']+'</li>';
                X += '  <li class="E" style="">顶 级</li>';


                X += '  <li class="F" style="">'+saveFindid['TypeName']+'</li>';


                X += '  <li class="G" style="">'+saveFindid['price_nums']+'</li>';
                X += '<li class="H">'+saveFindid['filter_attr']+'</li>';
                X += '<li class="I">'+saveFindid['is_show']+'</li>';
                X += '<li class="J">'+saveFindid['iconCls']+'</li>';
                X += '<li class="K">'+saveFindid['sort']+'</li>';
                X += '  </ul>';
                X += '  <div class="ok" style="">';
                X += '  <i class="glyphicon glyphicon-remove"></i><i class="glyphicon glyphicon-ok "></i>';
                X += '  </div>';
                X += '  <div class="editArea" style="">';
                X += '  <span>[编辑]</span>';
                X += ' <span>[添加栏目]</span>';
                X += ' <span>[设置筛选]</span>';
                X += ' <span>[刷新]</span>';
                X += ' <span>[删除]</span>';
                X += ' </div>';



               // jQuery(options.Tree).prepend(X);
                jQuery('div'+'#'+saveFindid['id']).prepend(X);//将刚更新的记动态追加至列表；
                jQuery(options.imggif).css({"position":"absolute","left":"50%","top":"20%",})
                jQuery('div'+'#'+saveFindid['id']).find('.t').Title_Event(jQuery('div'+'#'+saveFindid['id']).find('.t'));//将刚添加的记录添加到click事件函数Title_Event
                jQuery('div'+'#'+saveFindid['id']).find('.editArea').Form_Event(jQuery('div'+'#'+saveFindid['id']).find('.editArea'))//将刚添加的记录添加到click事件函数Title_Event


            },

        });
    };//操作区按钮插件对像封装

    jQuery.fn.SelectSelected= function(options) {
        var defaults = {}//默认参数与属性
        // //当change改变时给其删除所有选中属性；给当前添加选中属性
        var options = $.extend(defaults,options);

        //console.log(this)
        this.find("option[selected='selected']").attr('selected',false)//一change改变时先将所有selected删除；
        var options = this.find("option"); // select下所有的option
        for(var i = 0;i<options.length; i++)
        {
            if(this.find("option").eq(i).val() == this.val())
            {
                this.find("option").eq(i).attr('selected',true)
                break;
            }
        }

        $.fn.extend({ });
    };////当change改变时给其删除所有选中属性；给当前添加选中属性
    jQuery.fn.StrCountcharAt= function(str) {
        var defaults = {}//默认参数与属性
       // 统计某一个特殊字符的总数量 传 个字符串 str 1-1-1-1-1
        var options = $.extend(defaults,str);

        var num = 0 ;
        var i;
        for (i = 0; i < str.length; i++)
        {
            var c = str.charAt(i);
            if (c == "-"){
                num += 1 ;
            }
        }
        return num;
        $.fn.extend({ });
    };//统计某一个特殊字符的总数量
    jQuery.fn.EditEachSelectValue= function(options,id) {
        var defaults = {
            id:'',
        }//默认参数与属性

        //var id = $id;
      //  console.log(id)
      //  alert(id)
        var options = $.extend(defaults,options);
        options.each(function(){
            $(this).val($(this).attr('etype'));
            var options = $(this).find("option"); // select下所有的option

            for(var i = 0;i<options.length; i++)
            {
                //console.log($(this).find("option").eq(i).val())
                if($(this).find("option").eq(i).val() == $(this).attr('etype'))
                {
                    $(this).find("option").eq(i).attr('selected',true)

                    break;
                }
                //console.log($(this).find("option").eq(i).attr('pid'))
                /*if($(this).find("option").eq(i).attr('pid') == id)
                {
                    $(this).find("option").eq(i).hide()//隐藏下一级目录
                    //break;
                }
                if($(this).find("option").eq(i).attr('pid') == id)
                {
                    $(this).find("option").eq(i).hide()//隐藏下一级目录
                    break;
                }*/
            }
        });////选中当前记录级名称相等的并且设置成 selected属性


        $.fn.extend({ });
    };//修改时返回当前记录并选中对应的记录
    jQuery.fn.CheckboxOK= function(obj,str) {
        var defaults = {
            //obj:'',
        }//默认参数与属性
        var options = $.extend(defaults,options);
       // console.log(obj)
        //console.log(str)
        obj.each(function(){
            if(str.indexOf($(this).val()) != -1)
            {
                //console.log($(this).parent().addClass('checked'))
                $(this).parent().addClass('checked');
                $(this).attr('checked',true);
            }

        });
        $.fn.extend({ });
    };//修改时返回当前选中与返回相同的字符串的复选框

    jQuery.fn.SaiXian= function(options) {
        var defaults = {
            ScreeningQuery:'',
           // parent:'',
            click:'click',

        }//默认参数与属性
        var options = $.extend(defaults,options);
        var parent = options.parent;
        var ScreeningQuery = jQuery(options.ScreeningQuery)
        var parent = this.parent().parent();

        var  data = parent.data = {};
        data['goods_typeid'] = parent.attr('goods_typeid');
        data['id'] = parent.attr('id');
        //console.log(data)
        var Filterajax = {};
        Filterajax = { method:'get',url  :ThinkPHP['APP'] +'/Goods/Catenew/Filter',async : 'true',data :data,dataType:  'json',
            success: function(json) {
                // console.log(json)
                ScreeningQuery.modal({show:true,backdrop:'static',keyboard: false,});
                var Dom = $(this).Dom = {};
                Dom['filter_attr'] = jQuery('select[name="filter_attr[]"]')
                Dom['filter'] = jQuery('#filter')
                if(json['type_attrvalue'].length > 0)
                {
                    var type_attrvalue = json['type_attrvalue'];
                    Dom['filter_attr'].empty();
                    Dom['filter_attr'].prepend('<option value="0">请选择</option>')
                    $.each(type_attrvalue,function(index,array){
                        Dom['filter_attr'].append('<option value="'+array["id"]+'">'+array["attr_title"]+'</option>')
                    });
                }
                else
                {
                    Dom['filter_attr'].empty();
                    Dom['filter_attr'].prepend('<option value="0">请选择</option>')
                }

                Dom['filter'].attr('categoryId',json['categoryId']);


            },
        }
        $.ajax(Filterajax);
        //console.log(Filterajax)
        console.log(data)

       // ScreeningQuery.modal({show:true,backdrop:'static',keyboard: false,});
        ScreeningQuery.each(function(){
           //console.log(this)
            var $this = $(this);
            var filter = $this.filter = {};
            filter['zenjia-filter'] = $this.find('.zenjia-filter');//复制行
            filter['remove-filter'] = $this.find('.remove-filter')//删除行
            filter['FilterUpdate'] = $this.find('.FilterUpdate')
            //console.log($this.find('.zenjia-filter'))
            filter['zenjia-filter'].die().live(options.click,function(){
                var row = $(this).parents('.tr');//当前click的tr
                row.before(row.prev().clone())
                return false;
            });
            filter['remove-filter'].die().live('click',function(){
                var _this = $(this);
                if(_this.parents('#filter').find('.tr').length == '2')
                {
                    $.scojs_message('第一行不可以删除;！', $.scojs_message.TYPE_ERROR);
                }
                else
                {
                    _this.parents('.tr').remove();//当前click的tr
                }
                return false;
            })
            filter['FilterUpdate'].die().live('click',function(){
                //  alert('FilterUpdate');
                var $this = $(this);


                var _data = [];
                var filter_attr = $('select[name="filter_attr[]"]');

                var len = filter_attr.length;
                for (var i = 0; i < len; i ++) {
                    _data[i] = filter_attr.eq(i).val();
                }
                console.log(_data);

                var data = $this.data = {};
                data['dataArray'] = _data;
                data['categoryId'] = jQuery('#filter').attr('categoryId')



                var FilterUpdate = $this.FilterUpdate = {};
                FilterUpdate = { method:'post',url  :ThinkPHP['APP'] +'/Goods/Catenew/FilterUpdate',async : 'true',data :data,dataType:  'json',
                    success: function(json) {
                        //console.log(json)
                        ScreeningQuery.modal('hide');
                        //console.log(filter)
                        $.scojs_message('更新成功!', $.scojs_message.TYPE_OK);


                    },
                }

                $.ajax(FilterUpdate);
            });

        });





       /* parent.unbind().click(function(){
            var $this = $(this);
            var  data = $this.data = {};
                  data['goods_typeid'] = $this.attr('goods_typeid');
                  data['id'] = $this.attr('id');
            //console.log(data)
            var Filterajax = $this.Filterajax = {};
                 Filterajax = { method:'get',url  :ThinkPHP['APP'] +'/Goods/Catenew/Filter',async : 'true',data :data,dataType:  'json',
                 success: function(json) {
                    // console.log(json)
                     ScreeningQuery.modal({show:true,backdrop:'static',keyboard: false,});
                     var type_attrvalue = json['type_attrvalue'];
                     jQuery('select[name="filter_attr[]"]').empty();
                     jQuery('select[name="filter_attr[]"]').prepend('<option value="0">请选择</option>')
                     $.each(type_attrvalue,function(index,array){
                             jQuery('select[name="filter_attr[]"]').append('<option value="'+array["id"]+'">'+array["attr_title"]+'</option>')
                     });
                     //categoryId
                     jQuery('#filter').attr('categoryId',json['categoryId']);


                },
            }
            $.ajax(Filterajax);
        })*/
        /*ScreeningQuery.find('.FilterUpdate').unbind().click(function(){
          //  alert('FilterUpdate');
            var $this = $(this);


            var _data = [];
            var filter_attr = $('select[name="filter_attr[]"]');

            var len = filter_attr.length;
            for (var i = 0; i < len; i ++) {
                _data[i] = filter_attr.eq(i).val();
            }
            console.log(_data);

            var data = $this.data = {};
            data['dataArray'] = _data;
            data['categoryId'] = jQuery('#filter').attr('categoryId')



            var FilterUpdate = $this.FilterUpdate = {};
            FilterUpdate = { method:'post',url  :ThinkPHP['APP'] +'/Goods/Catenew/FilterUpdate',async : 'true',data :data,dataType:  'json',
                success: function(json) {
                    //console.log(json)
                    $.scojs_message('更新成功!', $.scojs_message.TYPE_OK);

                },
            }

            $.ajax(FilterUpdate);
        });*/

     /*   ScreeningQuery.find('.zenjia-filter').die().live('click',function(){
            var row = $(this).parents('.tr');//当前click的tr
            row.before(row.prev().clone())
            return false;
        })*/
        /*ScreeningQuery.find('.remove-filter').live('click',function(){
            var _this = $(this);
            if(_this.parents('#filter').find('.tr').length == '2')
             {
             $.scojs_message('第一行不可以删除;！', $.scojs_message.TYPE_ERROR);
             }
             else
             {
             _this.parents('.tr').remove();//当前click的tr
             }

            return false;
        })*/
        //add-product
        //clone();克隆并追加一个 元素


        $.fn.extend({ });
    };//点击 商品筛选 条件
    jQuery.fn.SuaXin= function(options) {
        var defaults = {
            LDataUrlobj:'',}//默认参数与属性
        var options = $.extend(defaults,options);

        $.ajax(options.LDataUrlobj);
        $.fn.extend({ });
    };//点击 刷新 按钮
    jQuery.fn.DelFind= function(options) {
        var defaults = {
            click:'',
            DelFindUrl:'',

        }//默认参数与属性
        var options = $.extend(defaults,options);
        var $this = this.parent().parent();
        $this.find('.editArea>span:eq(4)').css({"color":"indianred"});//给当前文字添加颜色);
        //var str = '5,6,7,8,9,10,11,12,13,14,15,16,17,21',
        var id = $this.attr('id');
        // console.log(id)
        var objfind = $this.parent().find('.del');
        var DelFindUrlobj = $this.DelFindUrlobj = {};
        //console.log(id)
        DelFindUrlobj = { method:'get',url  :options.DelFindUrl,async : 'true',data :{id:id},dataType:  'json',

            success: function(json) {
                // console.log(json)
                if(json['inIdStr'] != null)
                {
                    //console.log(json['inIdStr'])
                    //console.log(objfind)
                    jQuery(this).delStrFind(json['inIdStr'],objfind);//批删除本地多行的行记录
                }
                else
                {
                    //alert('没子集')
                    //jQuery('div+"#"+ json["id"]')

                    $('div'+'#'+ id).fadeOut('slow',function(){
                        $(this).remove();//渐隐删除本地行
                    });

                }
            },
            //error  //请求失败后的回调函数
        }
        $.ajax(DelFindUrlobj);
        $.fn.extend({
            delStrFind:function(str,obj)
            {
                var _total = '';
                for(var i = 0; i<obj.length;i++)
                {
                    _total+=obj.eq(i).attr('id')+',';
                }
                var total = _total.substr(0, _total.length - 1);                          // 删除最后一个字符串
                var array1=total.split(',').sort(),array2=str.split(',').sort();//将字符串格式成数组且升序排列;
                for(var i=0;i<array1.length;i++)
                {
                    for(var j=0;j<array2.length;j++){
                        if(array1[i]==array2[j]){

                            var div = $('div'+'#'+array1[i]);
                            div.fadeOut('slow',function(){
                                $(this).remove();
                                // console.log($(this).parent())
                                //console.log($(this).parents('#Tree'))

                                //console.log($(this).parent())
                                //div.remove();
                            });

                        }
                    }
                }
                return true;
            },
        });
    };//点击 删除 按钮

    $.fn.changeFont=function() {
      this.css( "font-size", "24px" )
    };
  //=============================== 设置聚焦并使光标设置在文字最后 ================================
  $.fn.setCursorPosition = function(position){
    if(this.lengh == 0) return this;
    return $(this).setSelection(position, position);
  }

  $.fn.setSelection = function(selectionStart, selectionEnd) {
    if(this.lengh == 0) return this;
    input = this[0];

    if (input.createTextRange) {
      var range = input.createTextRange();
      range.collapse(true);
      range.moveEnd('character', selectionEnd);
      range.moveStart('character', selectionStart);
      range.select();
    } else if (input.setSelectionRange) {
      input.focus();
      input.setSelectionRange(selectionStart, selectionEnd);
    }
    return this;
  }
  $.fn.focusEnd = function(){
      //alert('1')
    this.setCursorPosition(this.val().length);
  }
  //=============================== 设置聚焦并使光标设置在文字最后END ================================

})(jQuery);

