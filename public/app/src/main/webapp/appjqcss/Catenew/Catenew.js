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
           // imggif:'.imggif',//
            //imggifurl:'',//加载图标
            //plus:'fa-plus',//i class
            //minus:'fa-minus',
            //ti:' .t>i',//i标签
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
           //  var jsonData = _this.jsonData = {};//列表返回记录集组装成对对像处理


             //=================以上是按钮层==============================
             Treeobj['prev'] = _this.prev();//样式
             Treeobj['prev'].TreeTitleCss();
             Treeobj['initURL'] = Treeobj.initURL = {};//定义一个对像；初始化就通过对像来传送URL
             Treeobj['TreejsonData'] = Treeobj.TreejsonData = {};//返回列表记录集的对像
             Treeobj['jsonDataEvent'] = Treeobj.jsonDataEvent = {};//列表返回记录集-后的事件处理
          //   Treeobj['modal'] = Treeobj.modal = {};


             //Treeobj['selectEok'] = _this.parents('#public').find('#modal').find('select.eok');

             //console.log(Treeobj['selectEok'])
             Treeobj['initURL'] = { method:'get',url  :options.LDataUrl,async : 'true',dataType:  'json',
                success: function(json)
                {
                    if(json != null)
                    {
                        var TreejsonData =  Treeobj['TreejsonData']
                        TreejsonData['json'] =json;
                        TreejsonData['Tree'] =jQuery(options.Tree);
                        TreejsonData['imggif'] =jQuery(options.imggif);
                        TreejsonData['imggifurl'] =options.imggifurl;
                       // console.log(jsonData)
                        jQuery(this).TreejsonDataList({TreejsonData : TreejsonData, }); //返回列表记录集
                        var jsonDataEvent = Treeobj['jsonDataEvent'];
                         jsonDataEvent['Treeobj'] = TreejsonData;
                        jsonDataEvent['editArea'] = jQuery('.editArea');
                        jsonDataEvent['initURL'] = Treeobj['initURL'];
                       // jsonDataEvent['Tree'] = jQuery(options.Tree);
                        jsonDataEvent['modal'] = jQuery(options.modal);
                        jsonDataEvent['PublicFormUrl'] = options.PublicForm;//公共返回的记录集
                        jsonDataEvent['ButtonUrlAddUrl'] = options.ButtonUrlAdd;
                        jsonDataEvent['imggif'] = jQuery(options.imggif);
                        jsonDataEvent['imggifurl'] = options.imggifurl;
                        jsonDataEvent['mouseover'] = options.mouseover;
                        jsonDataEvent['mouseout'] = options.mouseout;
                        jsonDataEvent['change'] = options.change;
                        jsonDataEvent['click'] = options.click;
                        jsonDataEvent['getFindurl'] = options.getFindurl;
                        //jsonDataEvent['LDataUrlobj'] = Treeobj['LDataUrlobj'];

                        //console.log(jsonDataEvent)
                       // jsonDataEvent['editArea']
                       // jQuery('.editArea')
                        jsonDataEvent['editArea'].each(function(){
                           // alert("editArea")
                            /*jQuery(this).children().each(function(index, element){
                                //console.log(index)
                                //console.log(element)
                                jQuery(this).die().live(options.click,function(){
                                    switch(index){

                                        case 0:	$(this).ClickFormDom({
                                            jsonDataEvent:jsonDataEvent,
                                            tag:'edit',
                                            FormType:options.FormType,//类型属性
                                            FormTypeNameAdd:options.FormTypeNameAdd,//类型名称


                                        });break;           //编辑,通过对像方式objtext取行内的所有名称文字
                                        case 1:	jQuery(this).ClickFormDom({
                                            jsonDataEvent:jsonDataEvent,
                                            tag:'add',
                                            FormType:options.FormType,//类型属性
                                            FormTypeNameAdd:options.FormTypeNameAdd,//类型名称

                                        });break;//添加弹层表单
                                        case 2:	jQuery(this).SaiXian({
                                            ScreeningQuery:options.ScreeningQuery,//弹层
                                        });break;//
                                        case 3:	jQuery(this).SuaXin({
                                            initURL:Treeobj['initURL'],
                                        });break;//
                                        case 4:	jQuery(this).DelFind({
                                            DelFindUrl:options.DelFindUrl
                                        });break;                      //单与多可同时删除



                                    }
                                });
                            });*///如这这样写所来添加与修改记录就不好调用之前与注册事件了





                           jQuery(this).Form_Event(jQuery(this),jsonDataEvent,Treeobj);//这样调用也可以

                        });

                        jQuery('.t').each(function(){
                            jQuery(this).Title_Event(jQuery(this),jsonDataEvent);
                        });//遍历标题按钮和click展开与折垒效果铵钮
                        //jQuery('.editArea').each(function(){jQuery(this).Form_Event(jQuery(this),Treeobj['LDataUrlobj']);});//遍历操作区按钮

                    }
                },
                //error  //请求失败后的回调函数
            }
            $.ajax(Treeobj['initURL']);//返回所有数据表所有记录
//console.log(Treeobj)


        });

      $.fn.extend({
          Title_Event:function(obj,jsonDataEvent)
          {
              obj.children().each(function(index,element){
                  jQuery(this).die().live(options.click,function(){
                      switch(index){
                          //case 0:	jQuery(this).Title_Event_I_Click($(this));break;
                          case 0:	jQuery(this).Title_Event_I_Click({
                              jsonDataEvent:jsonDataEvent,
                             // obj:jQuery(this),
                              //obj:this,
                              //plus:options.plus,
                              //minus:options.minus,
                              ParentNode:options.ParentNode,
                              //LDataUrl:options.LDataUrl,
                              //imggif:options.imggif,
                              //ti:options.ti,
                              //imggifurl:options.imggifurl,
                             // LDataUrlobj:LDataUrlobj,
                          });break;           //
                          //case 1:	$(this).Title_Event_I_Click($(this));break;//

                      }
                  });
              });
          },//--------------------------------------遍历标题按钮和click展开与折垒效果铵钮--------------------------
          Form_Event:function(obj,jsonDataEvent,Treeobj)
          {
              //console.log(obj)
              //console.log(jsonDataEvent)
              obj.children().each(function(index, element){
                 // console.log(index)
                 // console.log(element)
                  jQuery(this).die().live(options.click,function(){
                      switch(index){

                          case 0:	jQuery(this).ClickFormDom({
                              jsonDataEvent:jsonDataEvent,
                              Treeobj:Treeobj,
                              tag:'edit',
                              FormType:options.FormType,//类型属性
                              FormTypeNameAdd:options.FormTypeNameAdd,//类型名称


                          });break;           //编辑,通过对像方式objtext取行内的所有名称文字
                          case 1:	jQuery(this).ClickFormDom({
                              jsonDataEvent:jsonDataEvent,
                              tag:'add',
                              FormType:options.FormType,//类型属性
                              FormTypeNameAdd:options.FormTypeNameAdd,//类型名称

                          });break;//添加弹层表单
                          case 2:	jQuery(this).SaiXian({
                              ScreeningQuery:options.ScreeningQuery,//弹层
                          });break;//
                          case 3:	jQuery(this).SuaXin({
                              jsonDataEvent:jsonDataEvent,
                          });break;//
                          case 4:	jQuery(this).DelFind({
                              DelFindUrl:options.DelFindUrl
                          });break;                      //单与多可同时删除



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

    };//列表样式



  jQuery.fn.TreejsonDataList= function(options) {
      var defaults = {
          /*josn:'',
          Tree:'',*/
          //imggif:'',
          //imggifurl:'',
          TreejsonData:'',
    }//默认参数与属性
      var options = $.extend(defaults,options);

      var TreejsonData = options.TreejsonData;

      TreejsonData['Tree'].empty();

      var X = '';
      $.each(TreejsonData['json'],function (key,value)
      {
          //console.log(value['title']);'+v['id']+'fa-plus cat_level
          X += '<div class="ParentNode del" id="'+value['id']+'"goods_typeId="'+value['goods_typeId']+'" pid="'+value['pid']+'"  level="'+value['cat_level']+'" path="'+value['path']+'" title="'+value['title']+'"typename="'+value['TypeName']+'">';
          X += '<div class="t">';
          X += '<i class="fa '+value['iconCls']+'"></i>';
          X += '<span class="title">'+value['title']+'</span>';
          X += '<img class="imggif" style="display: none;" src="'+TreejsonData['imggifurl']+'">';
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
      TreejsonData['Tree'].append(X)
      TreejsonData['Tree'].find('.ParentNode:odd').css({'color':'#5bc0de'})
      TreejsonData['imggif'].css({"position":"absolute","left":"50%","top":"20%",})
      //$(this).CssList();
      $.fn.extend({});
  };//返回的json数据

    jQuery.fn.Title_Event_I_Click= function(options) {
        var defaults = {
            plus:'fa-plus',//i class
            minus:'fa-minus',
            ti:' .t>i',//i标签
            ParentNode:' .ParentNode',
            jsonDataEvent:'',

        }//默认参数与属性
        var options = $.extend(defaults,options);
        var jsonDataEvent  = options.jsonDataEvent;
             jsonDataEvent['img']  = this.parent().parent().find('img')
             jsonDataEvent['ThisParentNode'] = this.parent().parent();
             jsonDataEvent['objfind'] = this.parent().parent().next();//当前节点的下一级 T A 节点

        if(this.hasClass(options.plus) == true)
        {
            jsonDataEvent['ThisParentNode'].siblings(options.ParentNode).find(options.ti).removeClass(options.minus).addClass(options.plus)//给当前节点添加fa-plus；移除fa-minus
            jsonDataEvent['ThisParentNode'].siblings(options.ParentNode).next().hide()                                                     //隐藏所有同级下一级.TA节点
            jsonDataEvent['ThisParentNode'].siblings(options.ParentNode).css({"background-color":""});
            this.removeClass(options.plus).addClass(options.minus)
            jsonDataEvent['objfind'].show();
           // ThisParentNode.css({"background-color":"#0F2747",});//click行需要颜色开启这里

            var data = this.data = {};
            data['id'] = this.parent().parent().attr('id');
            jsonDataEvent['initURL']['data'] = data;
            jsonDataEvent['initURL']['beforeSend'] = function (XMLHttpRequest) {
                jsonDataEvent['img'].css({"position":"absolute","left":"50%","top":"20%","background":"salmon"})
                jsonDataEvent['img'].show();
            },
            jsonDataEvent['initURL']['success'] = function (json) {
                setTimeout(function () {
                    jsonDataEvent['img'].hide();
                },1500);
                // console.log(json)
                if(json != null)
                {
                    $(this).NextAjaxData(json,jsonDataEvent['objfind']);
                  //  jsonDataEvent['img'].css({"position":"absolute","left":"50%","top":"20%","background":"salmon"})
                    jsonDataEvent['objfind'].find('.t').each(function(){$(this).Title_Event($(this),jsonDataEvent)});//将刚刚加载的下级记录注册click事件；
                    jsonDataEvent['objfind'].find('.editArea').each(function(){$(this).Form_Event($(this),jsonDataEvent);});//将刚刚加载的下级记录注册click事件；

                }
            },


           $.ajax(jsonDataEvent['initURL']);
        }
        else
        {
            this.removeClass(options.minus).addClass(options.plus)
            jsonDataEvent['objfind'].hide();
            jsonDataEvent['ThisParentNode'].css({"background-color":""});
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
                        X += '<img class="imggif" style="display: none;" src="'+jsonDataEvent['imggifurl']+'">';
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
            click:'click',
            jsonDataEvent:'',
            Treeobj:'',
            tag:'',
            FormType:'',//类型属性
            FormTypeNameAdd:'',//类型名称


        }//默认参数与属性
        var options = $.extend(defaults,options);
        var _this = this;
        var  jsonDataEvent = options.jsonDataEvent;
        var Treeobj = options.Treeobj;
       //console.log(jsonDataEvent)
      // console.log(jsonDataEvent['modal'])

       jsonDataEvent['modal'].Publicdefaults(this);

       // jsonDataEvent['modal'].modal({show:true,backdrop:'static',keyboard: false,});
        jsonDataEvent['modal'].each(function(){
            var $this = $(this);
            //var modalDom = jsonDataEvent['modal'].modalDom = {};
            var modalDom = jsonDataEvent.modalDom = {};
           // console.log($this);

                 modalDom['modalDialog'] = jsonDataEvent;
                 modalDom['form'] = $this.find('form');
                 modalDom['btn-primary'] = $this.find('button#Ad');
                 modalDom['pageloader'] = jQuery('#pageloader')
                 modalDom['btn-default'] = $this.find('.btn-default')
                 modalDom['close'] = $this.find('.close')
                 modalDom['id'] = $this.find('input[name="id"]')
                modalDom['pid'] = $this.find('select[name="pid"]')
                modalDom['pidval'] = $this.find('select[name="pid"] option:selected')
                modalDom['goods_typeId'] = $this.find('select[name="goods_typeId"]')
                modalDom['is_show'] = $this.find('select[name="is_show"]')
                modalDom['path'] = $this.find('input[name="path"]')
                modalDom['cat_level'] = $this.find('input[name="cat_level"]')
                modalDom['title'] = $this.find('input[name="title"]')
                modalDom['price_nums'] = $this.find('input[name="price_nums"]')
                modalDom['filter_attr'] = $this.find('input[name="filter_attr"]')
                modalDom['iconCls'] = $this.find('input[name="iconCls"]')
                modalDom['sort'] = $this.find('input[name="sort"]')
                modalDom['rec'] = $this.find('input[name="rec[]"]')
                modalDom['checkbox'] =$this.find('input[type="checkbox"]')
                modalDom['select_eok'] =$this.find('select.eok')
                modalDom['is_show'] =$this.find('select[name="is_show"]')
                modalDom['Ad'] =$this.find('#Ad')

            //console.log(modalDom)
            if(options.tag == 'add')
            {
                //alert('2')
                modalDom['form'].attr(options.FormType)
                modalDom['form'].attr(options.FormType)
                modalDom['form'].attr(options.FormType,options.FormTypeNameAdd)
                modalDom['btn-primary'].attr(options.FormType)
                modalDom['btn-primary'].attr(options.FormType,options.FormTypeNameAdd)
                $this.PublicFormDomEvent({
                    modalDom:modalDom,
                    tag:'add',
                });//调用公共表单数据
            }else if(options.tag == 'edit')
            {
                //alert('edit')
                modalDom['form'].attr(options.FormType)
                modalDom['form'].attr(options.FormType,options.FormTypeNameEdit)
                modalDom['btn-primary'].attr(options.FormType)
                modalDom['btn-primary'].attr(options.FormType,options.FormTypeNameEdit)
                var data = _this.data = {};

               data['id'] = _this.parent().parent().attr('id')
                //console.log(data)
                var getFindobjAjax = _this.getFindobjAjax = {};

                getFindobjAjax ={ method:'get',url  :jsonDataEvent['getFindurl'],async : 'true',dataType:  'json',
                    data:data,
                    success: function(json)
                    {
                        var getFind = json['getFind'];
                        if(json != null)
                        {
                            //console.log(json)
                            var egETjson = json;
                            $this.PublicFormDomEvent({
                                modalDom:modalDom,
                                tag:'edit',
                                egETjson:egETjson,
                            });//调用公共表单数据

                        }
                    },
                    //error  //请求失败后的回调函数
                }
               // console.log(getFindobjAjax)
                $.ajax(getFindobjAjax);////返回pid =0的记录先；
                /**/
            }

            modalDom['Ad'].die().live(options.click,function(){
               // alert('2')
                if($(this).attr(options.FormType) == options.FormTypeNameAdd)
                {
                    // alert('添加')
                    var tem = 'add';

                    $(this).ButtonAdUrl({
                        modalDom:modalDom,
                        jsonDataEvent:jsonDataEvent,
                        tem:'add',
                        //ButtonUrlAdd:options.ButtonUrlAdd,
                    });

                    //$(this).ButtonAdUrl($(this),tem);

                }
                else if($(this).attr(options.FormType) == options.FormTypeNameEdit)
                {
                    //alert('修改')
                    //tem = 'edit';
                    $(this).ButtonAdUrl({
                        modalDom:modalDom,
                        jsonDataEvent:jsonDataEvent,
                        Treeobj:Treeobj,
                        tem:'edit',
                        //EditFormUrl:options.EditFormUrl,
                    });

                   // $(this).ButtonOkobjUrl($(this),tem);
                }
            });
           // return ;

        })










        /*modal.find('#Ad').die().live(options.click,function(){
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
        });*/

           // console.log(LDataUrlobj)




        $.fn.extend({
            /*ButtonOkobjUrl:function(obj,tem){
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



            },*/


        });
    };//操作区按钮插件对像封装

    $.fn.PublicFormDomEvent=function(options) {

        var defaults = {
            modalDom:'',//弹层DOM
            egETjson:'',//
            tag:'',//
            click:'click',//
            mouseover:'mouseover',//
            mouseout:'mouseout',//
            change:'change',//
        }//默认参数与属性
        var options = $.extend(defaults,options);
        //alert("PublicFormDomJson")
        var modalDom = options.modalDom;
        var _egETjson = options.egETjson;
        var egETjson = modalDom['egETjson'] = _egETjson['getFind'];


        var $this = this;





         var PublicFormUrl = this.PublicFormUrl = {};
        if(options.tag == 'add')
        {
            $this.find('h4').empty();
            $this.find('h4').append('<b style="color: #00AAFF;font-size:20px;" id="">[新增栏目]&nbsp;</b>');

            PublicFormUrl = {method:'get',url  :ThinkPHP['APP'] +'/Goods/Catenew/PublicForm',async : 'true',dataType:  'json',
                beforeSend: function (XMLHttpRequest) {
                    $this.modal({show:true,backdrop:'static',keyboard: false,});
                   // modalDom['pageloader'].hide()
                    modalDom['form'].hide()
                    modalDom['pageloader'].show(500);
                },
                success: function(json) {
                    setTimeout(function () {
                        modalDom['pageloader'].hide()
                     modalDom['form'].fadeOut('slow',function(){
                     modalDom['form'].show(800);
                     });
                     },100);
                    if(json != false)
                    {

                        var FormatTree = modalDom['FormatTree'] = json['FormatTree'];
                        var GoodsTypeAll = modalDom['GoodsTypeAll'] = json['GoodsTypeAll'];
                        var recval = modalDom['recval'] =  json['rec'][0]['id'];

                        modalDom['pid'].empty();
                        modalDom['goods_typeId'].empty();

                        modalDom['pid'].prepend('<option value="0" pid="0" path="1-0" >请选择</option>');
                        modalDom['goods_typeId'].prepend('<option value="0">请选择</option>');
                        modalDom['path'].attr('value','1-0');
                        modalDom['cat_level'].attr('value','1');
                        modalDom['price_nums'].attr('value','5');
                        modalDom['sort'].attr('value','1');
                        //jQuery('select[name="is_show"]').prepend('<option value="0">请选择</option>');

                        $.each(FormatTree,function(index,array){
                            modalDom['pid'].append('<option value="'+array['id']+'" pid="'+array['pid']+'" path="'+array['path']+'">'+array['title']+'</option>')
                        });
                        $.each(GoodsTypeAll,function(index,array){
                            modalDom['goods_typeId'].append('<option value="'+array['id']+'">'+array['title']+'</option>')
                        });
                        modalDom['rec'].attr('value',recval);//将推荐ID放至input供提交

                    }
                },


            }
            $.ajax(PublicFormUrl);

        }
        else if(options.tag == 'edit')
        {
            $this.find('h4').empty();
            $this.find('h4').append('修改 栏目 &nbsp;&nbsp;<b style="color: #00AAFF;font-size:20px;" id="'+egETjson['id']+'">当前Id ['+egETjson['id']+']   [名称为]->&nbsp;&nbsp;'+egETjson['title']+'&nbsp;</b>');
            PublicFormUrl = {method:'get',url  :ThinkPHP['APP'] +'/Goods/Catenew/PublicForm',async : 'true',dataType:  'json',
                beforeSend: function (XMLHttpRequest) {
                    $this.modal({show:true,backdrop:'static',keyboard: false,});
                    modalDom['form'].hide()
                    modalDom['pageloader'].show(500);
                },
                success: function(json) {
                    setTimeout(function () {
                        modalDom['pageloader'].hide()
                     modalDom['form'].fadeOut('slow',function(){
                     modalDom['form'].show(800);
                     });
                     },100);
                    if(json != false)
                    {
                        var FormatTree = modalDom['FormatTree'] = json['FormatTree'];
                        var GoodsTypeAll = modalDom['GoodsTypeAll'] = json['GoodsTypeAll'];
                       // var rec = modalDom['rec'] =  json['rec'][0]['id'];
                        //var recval = modalDom['recval'] =  json['rec'][0]['id'];

                        //modalDom['pid'].empty();
                        //modalDom['goods_typeId'].empty();
                        modalDom['id'].attr('value',egETjson['id']);
                        modalDom['pid'].attr('etype',egETjson['pid'])
                        modalDom['goods_typeId'].attr('etype',egETjson['goods_typeId'])
                        modalDom['is_show'].attr('etype',egETjson['is_show'])
                        modalDom['path'].attr('value',egETjson['path'])
                        modalDom['cat_level'].attr('value',egETjson['cat_level'])
                        modalDom['title'].attr('value',egETjson['title'])
                        modalDom['price_nums'].attr('value',egETjson['price_nums'])
                        modalDom['filter_attr'].attr('value',egETjson['filter_attr'])
                        modalDom['iconCls'].attr('value',egETjson['iconCls'])
                        modalDom['sort'].attr('value',egETjson['sort'])
                        modalDom['rec'].attr('value',_egETjson['recId'])


                        //modalDom['pid'].prepend('<option value="0" pid="0" path="1-0" >请选择</option>');
                     //   modalDom['goods_typeId'].prepend('<option value="0">请选择</option>');
                        //jQuery('select[name="is_show"]').prepend('<option value="0">请选择</option>');
                        modalDom['pid'].empty();
                        modalDom['goods_typeId'].empty();
                        modalDom['pid'].prepend('<option value="0" pid="0" path="1-0" >请选择</option>');
                        modalDom['goods_typeId'].prepend('<option value="0">请选择</option>');
                        $.each(FormatTree,function(index,array){
                            modalDom['pid'].append('<option value="'+array['id']+'" pid="'+array['pid']+'" path="'+array['path']+'">'+array['title']+'</option>')
                        });
                        $.each(GoodsTypeAll,function(index,array){
                            modalDom['goods_typeId'].append('<option value="'+array['id']+'">'+array['title']+'</option>')
                        });


                        jQuery(this).CheckboxOK(modalDom['checkbox'],_egETjson['recId'])//传一个字符串与DOM对你；使复选框比较选中
                        //var eokdom = jQuery('select.eok');

                        jQuery(this).EditEachSelectValue(modalDom['select_eok'],modalDom['id']);//插件对像封装eokdon传 这个对像过去 返回与当前记录相等的选中对应的记录
                        if(egETjson['is_show'] == "")
                        {
                            modalDom['is_show'].get(0).selectedIndex=0
                        }

                    }
                },


            }
            $.ajax(PublicFormUrl);



        }

        //console.log(modalDom)
        $this.find('.icheckbox_minimal-grey').live(options.mouseover,function(){
            $(this).addClass('hover');
        });
        $this.find('.icheckbox_minimal-grey').live(options.mouseout,function(){
            $(this).removeClass('hover');
        });
        $this.find('.iCheck-helper').die().live(options.click,function(){
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

        /*jsonDataEvent['modal'].find('select.eok').die().live(options.change,function(){
            $(this).SelectSelected();
            //console.log(jQuery('select[name="pid"]').find('option:selected').val())



        });*/
       // var valuePId = modalDom['pid'].find('option:selected').val();
      /*  console.log(valuePId)
        console.log(modalDom['pid'])*/
       // console.log(jQuery('select[name="pid"]').find('option:selected').val())

        modalDom['pid'].die().live(options.change,function(){
            $(this).find("option[selected='selected']").attr('selected',false)//一change改变时先将所有selected删除；
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
                modalDom['path'].attr('value',path)//path值
                var _level_num = modalDom['path'].attr('value')
                var level_num =  $(this).StrCountcharAt(_level_num);//统计某一个特殊字符的总数量;统计 ‘-’字符的数量-对像插件封装
                modalDom['cat_level'].attr('value',level_num)//等级值
            }



        });

        modalDom['goods_typeId'].die().live(options.change,function(){
            $(this).find("option[selected='selected']").attr('selected',false)//一change改变时先将所有selected删除；
            $(this).SelectSelected();//当change改变时给其删除所有选中属性；给当前添加选中属性-对像插件封装
        });
        modalDom['is_show'].die().live(options.change,function(){
            $(this).find("option[selected='selected']").attr('selected',false)//一change改变时先将所有selected删除；
            $(this).SelectSelected();//当change改变时给其删除所有选中属性；给当前添加选中属性-对像插件封装
        });
       // alert("d")
        //console.log(modalDom['cat_level'].attr('value'))
        //console.log(modalDom['cat_level'].attr('value'))

        /*var cat_level = jQuery('input[name="cat_level"]').attr('value');
        console.log(cat_level)*/





        modalDom['close'].die().live(options.click,function(){
            $(this).Publicdefaults(this);
        });//关闭按钮
        modalDom['btn-default'].die().live(options.click,function(){
            $(this).Publicdefaults(this);
        });//取消按钮



        $.fn.extend({

        });


    };//操作区按钮 添加与修改公共表单事件与赋值处理

    jQuery.fn.ButtonAdUrl= function(options) {
        var defaults = {
            click:'click',
            modalDom:'',
            jsonDataEvent:'',
            Treeobj:'',
            //ButtonUrlAdd:'',
            //EditFormUrl:'',
            tem:'',

        }//默认参数与属性
        var options = $.extend(defaults,options);
        var modalDom = options.modalDom;
        var jsonDataEvent = options.jsonDataEvent;
        var Treeobj = options.Treeobj
        // console.log(jsonDataEvent)
        // alert("ButtonAdUrl")
        var data = modalDom['form'].data = {};
        data['pid'] = modalDom['pid'].find('option:selected').val();
        data['path'] = modalDom['path'].val();
        data['cat_level'] = modalDom['cat_level'].val();
        data['goods_typeId'] = modalDom['goods_typeId'].find('option:selected').val();
        data['title'] = modalDom['title'].val();
        data['price_nums'] = modalDom['price_nums'].val();
        //data['iconCls'] = modalDom['iconCls'].val();

        data['sort'] = modalDom['sort'].val();
        data['is_show'] = modalDom['is_show'].find('option:selected').val();
        data['rec'] = jQuery('input[name="rec[]"][checked]').val();
        if(jQuery('input[name="cat_level"]').attr('value') <= 3)
        {
            data['iconCls'] = 'fa-plus'
        }

        var ButtonAdobjUrl  = modalDom['form'].ButtonAdobjUrl = {};
        ButtonAdobjUrl = { method:'post',async : 'true',dataType:  'json',
            data:data,
            success: function(json)
            {
                modalDom['modalDialog']['modal'].modal('hide');
                jQuery(this).Btn_Default(modalDom['modalDialog']['modal']);//取消
                jQuery(this).Close(modalDom['modalDialog']['modal']);//关闭
                jQuery(this).Save(modalDom['modalDialog']['modal']);//关闭
                if(json != null)
                {
                    // console.log(json)
                    if(json['add'] == 'add')/**/
                    {
                        var addFind = json['addFind'];
                        if(addFind['pid'] == 0)
                        {
                            var modal = modalDom['modalDialog']['modal']
                            jQuery(this).AddhtmlFind(addFind);
                            var addFindId = jQuery('div'+'#'+addFind['id']).find('.editArea');
                            console.log(jsonDataEvent)
                            jQuery(this).Form_Event(jQuery('div'+'#'+addFind['id']).find('.editArea'),jsonDataEvent);
                            jQuery('div'+'#'+addFind['id']).find('.t').Title_Event(jQuery(this),jsonDataEvent);

                            //console.log(modalDom)

                        }
                        setTimeout(function () {

                            //$.ajax(options.LDataUrlobj);
                            $.scojs_message('成功添加记录!', $.scojs_message.TYPE_OK);
                        },1000);
                    }
                    else if(json['save'] == 'save')
                    {
                        var saveFindid = json['saveFindid'];
                        var childrenStr = json['childrenStr'];
                        console.log(saveFindid['id'] == data['id'])
                        if(saveFindid['pid'] == 0)
                        {
                            alert("pid ==0")
                            console.log(jsonDataEvent)
                            jQuery('div'+'#'+saveFindid['id']).fadeOut('slow',function(){ $(this).remove();});
                            jQuery(this).SaveFind0(saveFindid,jsonDataEvent['imggifurl'])
                            jQuery(this).Form_Event(jQuery('div'+'#'+saveFindid['id']).find('.editArea'),jsonDataEvent);
                            jQuery(this).Title_Event(jQuery('div'+'#'+saveFindid['id']).find('.t'),jsonDataEvent);
                        }
                        else if(saveFindid['pid'] != 0)
                        {
                            alert("pid !=0")
                            console.log(jsonDataEvent)
                            jQuery('div'+'#'+saveFindid['id']).fadeOut('slow',function(){ $(this).remove();});

                        }
                        $.ajax(jsonDataEvent['initURL'])//这里像可以不用传URL刷新了；
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
        // console.log(ButtonAdobjUrl)
        if(options.tem == 'add')
        {
            ButtonAdobjUrl['url'] = ThinkPHP['APP'] +'/Goods/Catenew/FindAppend';
            $.ajax(ButtonAdobjUrl);////返回pid =0的记录先；

        }
        else if(options.tem == 'edit')
        {
            data['id'] = jQuery('input[name="id"]').val();
            //console.log(data);
            ButtonAdobjUrl['url'] = ThinkPHP['APP'] +'/Goods/Catenew/FindUpdate';
            //console.log(ButtonAdobjUrl)
            // console.log(data)

            $.ajax(ButtonAdobjUrl);////返回pid =0的记录先；

        }


        $.fn.extend({
            /*modalDom['btn-primary'].die().live(options.click,function(){
             $(this).Publicdefaults(this);
             });//保存按钮*/
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
            SaveFind0:function(saveFindid,imggifurl){
                //alert("2")
                // console.log(json)

                var X = '';
                X += '<div class="ParentNode del" id="'+saveFindid['id']+'"pid="'+saveFindid['pid']+'"  level="'+saveFindid['cat_level']+'" path="'+saveFindid['path']+'" title="'+saveFindid['title']+'"typename="'+saveFindid['TypeName']+'">';
                X += '<div class="t">';
                X += '<i class="fa '+saveFindid['iconCls']+'"></i>';
                X += '<span class="title">'+saveFindid['title']+'</span>';
                X += '<img class="imggif" style="display: none;" src="'+imggifurl+'">';
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
                X += ' </div>';

                X += ' <div class="TA" ></div>';
                //jQuery(options.Tree).prepend(X);
                //console.log(modalDom['modalDialog']['Treeobj']['Tree'])
                jsonDataEvent['Treeobj']['Tree'].prepend(X);
                modalDom['modalDialog']['Treeobj']['imggif'].css({"position":"absolute","left":"50%","top":"20%",})
            },
            SaveFind1:function(saveFindid,imggifurl){
               /* alert("3")
                // console.log(json)
                var X = '';
                X += '<div class="TA">';
                X += '<div class="ParentNode del" id="'+saveFindid['id']+'"pid="'+saveFindid['pid']+'"  level="'+saveFindid['cat_level']+'" path="'+saveFindid['path']+'" title="'+saveFindid['title']+'"typename="'+saveFindid['TypeName']+'">';
                X += '<div class="t">';
                X += '<i class="fa '+saveFindid['iconCls']+'"></i>';
                X += '<span class="title">'+saveFindid['title']+'</span>';
                X += '<img class="imggif" style="display: none;" src="'+imggifurl+'">';
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
                X += ' </div>';

                X += ' <div class="TA" ></div>';
                X += '</TA>';*/
                //jQuery(options.Tree).prepend(X);
               //console.log(jQuery('div'+'#'+saveFindid['pid']).next('dddddddddddddddddddddddddddddd'))
             //   modalDom['modalDialog']['Treeobj']['Tree'].prepend(X);
                modalDom['modalDialog']['Treeobj']['imggif'].css({"position":"absolute","left":"50%","top":"20%",})
            },
            AddhtmlFind:function(addFind){
                // console.log(json)
                var X = '';
                X += '<div class="ParentNode del" id="'+addFind['id']+'"pid="'+addFind['pid']+'"  level="'+addFind['cat_level']+'" path="'+addFind['path']+'" title="'+addFind['title']+'"typename="'+addFind['TypeName']+'">';
                X += '<div class="t">';
                X += '<i class="fa '+addFind['iconCls']+'"></i>';
                X += '<span class="title">'+addFind['title']+'</span>';
                X += '<img class="imggif" style="display: none;" src="'+modalDom['modalDialog']['Treeobj']['imggifurl']+'">';
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
                //jQuery(options.Tree).prepend(X);
                modalDom['modalDialog']['Treeobj']['Tree'].prepend(X);

                modalDom['modalDialog']['Treeobj']['imggif'].css({"position":"absolute","left":"50%","top":"20%",})
                //              jQuery('div'+'#'+addFind['id']).find('.t').Title_Event(jQuery('div'+'#'+addFind['id']).find('.t'));//将刚添加的记录添加到click事件函数Title_Event
//console.log(jQuery('div'+'#'+addFind['id']).find('.editArea'))
                //            jQuery('div'+'#'+addFind['id']).find('.editArea').Form_Event(jQuery('div'+'#'+addFind['id']).find('.editArea'))//将刚添加的记录添加到click事件函数Title_Event
                //jQuery('div'+'#'+addFind['id']).find('.editArea').modalDom['modalDialog']['editArea'];//将刚添加的记录添加到click事件函数Title_Event



            },
            saveFindid:function(saveFindid,imggifurl){
                // console.log(json)
                alert('3')
                var X = '';
                X += '<div class="t">';
                X += '<i class="fa '+saveFindid['iconCls']+'"></i>';
                X += '<span class="title">'+saveFindid['title']+'</span>';
                X += '<img class="imggif" style="display: none;" src="'+imggifurl+'">';
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
                modalDom['modalDialog']['Treeobj']['imggif'].css({"position":"absolute","left":"50%","top":"20%",})
                // jQuery('div'+'#'+saveFindid['id']).find('.t').Title_Event(jQuery('div'+'#'+saveFindid['id']).find('.t'));//将刚添加的记录添加到click事件函数Title_Event
                //jQuery('div'+'#'+saveFindid['id']).find('.editArea').Form_Event(jQuery('div'+'#'+saveFindid['id']).find('.editArea'))//将刚添加的记录添加到click事件函数Title_Event


            },
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
    };//点击完成提交 添加与修改

    $.fn.Publicdefaults=function(options) {
        var defaults = {
            public:'#modal',

        }//默认参数与属性
        var options = $.extend(defaults,options);

        var public = jQuery(options.public);
     // console.log(public)

        // console.log(public)
        //console.log(public.find('#pageloader'))
        public.find('#pageloader').css({"display":'none'})
        public.find('#formG_ID').css({"display":'none'})
        public.find('input[type="text"]').attr('value','');
        public.find('input[name="view"]').attr('value','100');
        public.find('input[type="radio"]').attr('checked',false)
        public.find('.sp').css({"display":'none'})
        public.find('.icheckbox_minimal-grey').removeClass('checked');
        public.find('.iradio_minimal-grey').removeClass('checked');
        public.find('#list').attr('value','');

        public.find('input[type="checkbox"]').attr('checked',false)
        public.find('select').get(0).selectedIndex=0
        public.find('#TypeList_A').hide();
        //public.find('#modal').modal('hide');//模态弹层
        public.find('textarea').val('');// 重置表单
        public.find('img').attr('src','/Public/img/goods_img.png');//图片放回默认的图
        public.find('input[name="Goodspic[]"]').remove();//将图片name提交input表单也移除
        public.find('ul#generalTab').find('li');//将图片name提交input表单也移除
        public.find('ul#generalTab').find('li').removeClass('active');
        public.find('ul#generalTab').find('li:eq(0)').addClass('active');
        public.find('#generalTabContent').find('.fade').removeClass('active in');
        public.find('#generalTabContent').find('.fade:eq(0)').addClass('active in');



       public.find("select option[selected='selected']").attr('selected',false)//一change改变时先将所有selected删除；


        $.fn.extend({});
    };//模块id modal默认公共事件；多个函数调用；

    jQuery.fn.SelectSelected= function(options) {
        var defaults = {}//默认参数与属性
        // //当change改变时给其删除所有选中属性；给当前添加选中属性
        var options = $.extend(defaults,options);
//alert("change")
        //console.log(this)

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
            /*var options = $(this).find("option"); // select下所有的option

            for(var i = 0;i<options.length; i++)
            {
                //console.log($(this).find("option").eq(i).val())
                if($(this).find("option").eq(i).val() == $(this).attr('etype'))
                {
                    $(this).find("option").eq(i).attr('selected',true)

                    break;
                }

            }*/
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
            click:'click',

        }//默认参数与属性
        var options = $.extend(defaults,options);
        var parent = options.parent;
        var ScreeningQuery = jQuery(options.ScreeningQuery)
        var parent = this.parent().parent();
        var initURL = options.initURL;


        var  data = parent.data = {};
        data['goods_typeid'] = parent.attr('goods_typeid');
        data['id'] = parent.attr('id');
        //console.log(data)
        var Filterajax = {};
        jQuery('#append').empty();

        Filterajax = { method:'get',url  :ThinkPHP['APP'] +'/Goods/Catenew/Filter',async : 'true',data :data,dataType:  'json',
            success: function(json) {
                var Dom = $(this).Dom = {};
                Dom['filter_attr'] = jQuery('select[name="filter_attr[]"]')
                Dom['filter'] = jQuery('#filter')
                Dom['init'] = jQuery('#init')
                Dom['append'] = jQuery('#append')
                Dom['type_attrvalue'] = json['type_attrvalue'];//该类型下的所有参数与规格
                Dom['filter_attr_has'] = json['filter_attr_has'];//已存在的筛选ID
                Dom['append'].empty();//先清空一下

                if(jQuery('#init').find('.row.tr').length - 2)
                {
                    len = jQuery('#init').find('.row.tr').length - 2;
                    jQuery('#init').find('.row.tr:lt('+len+')').remove();//一点筛选按钮就计算总长度减去2的所有节点；注意不包含数据表返回遍历的节点哟
                }
                Dom['filter'].attr('categoryId',json['categoryId']);

                if(json['type_attrvalue'].length > 0 && json['filter_attr_has'].length == 0)
                {
                    ScreeningQuery.modal({show:true,backdrop:'static',keyboard: false,});
                    Dom['filter_attr'].empty();
                    Dom['filter_attr'].prepend('<option value="0">请选择</option>')
                    $.each(Dom['type_attrvalue'],function(index,array){
                        Dom['filter_attr'].append('<option value="'+array["id"]+'">'+array["attr_title"]+'</option>')
                    });

                }
                else if(json['type_attrvalue'].length > 0  && json['filter_attr_has'].length > 0)
                {
                   // alert('4')
                    ScreeningQuery.modal({show:true,backdrop:'static',keyboard: false,});
                    var ok ='';
                    $.each(Dom['filter_attr_has'],function(key,value){
                            ok += '';
                            ok += '<div class="row tr">';
                            ok += '<div class="col-md-6" style="margin-left: 25%; ">';
                            ok += '<div class="form-group"style="position: relative;">';
                            ok += '<label class="control-label col-md-6 remove-filter"style="position: absolute;left:-40%;top:20%;cursor:pointer;">移&nbsp;除';
                            ok += '<i class="glyphicon glyphicon-remove" style="color:#d9534f;top:2px;left:3px;"></i>';
                            ok += '</label>';
                            ok += '<select name="filter_attr[]" class="form-control ">';
                            ok += '<option value="0">请选择</option>';
                            $.each(Dom['type_attrvalue'],function(index,array){
                                if(array['id']==value){
                                    var selected = 'selected="selected"';
                                }
                                else
                                {
                                    selected = '';
                                }
                                ok += '<option value="'+array["id"]+'" '+selected+' >'+array["attr_title"]+'</option>';/*'+selected+'*/
                            });
                            ok += '</select>';
                            ok += '</div>';
                            ok += '</div>';
                            ok += '</div>';
                    });
                    Dom['append'].prepend(ok);
                    Dom['filter_attr'].empty()
                  Dom['filter_attr'].prepend('<option value="0">请选择</option>')
                        $.each(Dom['type_attrvalue'],function(index,array){
                        Dom['filter_attr'].append('<option value="'+array["id"]+'">'+array["attr_title"]+'</option>')
                    });//追加到一行到dom html中


                }
                else if(json['type_attrvalue'].length == 0)
                {
                    $.scojs_message('请先添加所属类型;！', $.scojs_message.TYPE_ERROR);
                }





            },
        }
        $.ajax(Filterajax);
        //console.log(Filterajax)
       // console.log(data)


        ScreeningQuery.each(function(){
           //console.log(this)
            var $this = $(this);
            var filter = $this.filter = {};
            filter['zenjia-filter'] = $this.find('.zenjia-filter');//复制行
            filter['remove-filter'] = $this.find('.remove-filter')//删除行
            filter['filter_change'] = $this.find('.filter_change')//删除行
            filter['FilterUpdate'] = $this.find('.FilterUpdate')
            //console.log($this.find('.zenjia-filter'))
            filter['zenjia-filter'].die().live(options.click,function(){
                var row = $(this).parents('.tr');//当前click的tr
                row.before(row.prev().clone())
                return false;
            });
            filter['remove-filter'].die().live('click',function(){
                var _this = $(this);
                if(_this.parents('#init').find('.tr').length == '2')
                {
                    $.scojs_message('第一行不可以删除;！', $.scojs_message.TYPE_ERROR);
                }
                else
                {
                    _this.parents('.tr').remove();//当前click的tr
                }
                return false;
            })
           // console.log(filter['filter_change'])
          //  console.log(filter['filter_change'].length)
            filter['filter_change'].live('change',function(){
               // var _this = $(this);

               //alert(jQuery('.filter_change').val($(this).val()).length)
               // console.log(jQuery('.filter_change[value="'+$(this).val()+'"]').length)//统计.filter_change value 值与当彰change value 值相等的个数；
            //    alert(jQuery('.filter_change[value="'+$(this).val()+'"]').length)//统计.filter_change value 值与当彰change value 值相等的个数；

            })//这里不可以；不过已在php去除了重复的了；有时间看看客户端如何控制

            filter['FilterUpdate'].die().live('click',function(){
                //  alert('FilterUpdate');
                var $this = $(this);
                var _data = [];
                var filter_attr = $('select[name="filter_attr[]"]');

                var len = filter_attr.length;
                for (var i = 0; i < len; i ++) {
                    _data[i] = filter_attr.eq(i).val();
                }
               // console.log(_data);

                var data = $this.data = {};
                data['dataArray'] = _data;
                data['categoryId'] = jQuery('#filter').attr('categoryId')
                var FilterUpdate = $this.FilterUpdate = {};
                FilterUpdate = { method:'post',url  :ThinkPHP['APP'] +'/Goods/Catenew/FilterUpdate',async : 'true',data :data,dataType:  'json',
                    success: function(json) {
                        //console.log(json)
                        //alert("3")
                        ScreeningQuery.modal('hide');
                        /*console.log(jQuery('#init').find('.tr').length)
                        if(jQuery('#init').find('.tr').length > 2)
                        {

                        }*/

                        //jQuery('#filter').empty();
                        //console.log(filter)
                        //$.ajax(initURL);
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
            jsonDataEvent:'',}//默认参数与属性
        var options = $.extend(defaults,options);
        var jsonDataEvent = options.jsonDataEvent;
           /* jsonDataEvent['SuaXinid'] = this.parent().parent().parent().prev().attr('id');
        if(jsonDataEvent['SuaXinid'] == 'TreeTitle')
        {
            jsonDataEvent['SuaXinid'] = '0';
        }
        console.log(this)
        console.log(jsonDataEvent['SuaXinid'])
        jsonDataEvent['initURL']['data']['id'] = jsonDataEvent['SuaXinid'];*/
        $.ajax(jsonDataEvent['initURL']);
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





  //=============================== 设置聚焦并使光标设置在文字最后END ================================

})(jQuery);

