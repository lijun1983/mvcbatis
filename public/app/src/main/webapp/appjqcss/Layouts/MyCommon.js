
Date.prototype.format = function(format){
    var o =  {
        "M+" : this.getMonth()+1, //month
        "d+" : this.getDate(), //day
        "h+" : this.getHours(), //hour
        "m+" : this.getMinutes(), //minute
        "s+" : this.getSeconds(), //second
        "q+" : Math.floor((this.getMonth()+3)/3), //quarter
        "S" : this.getMilliseconds() //millisecond
    };
    if(/(y+)/.test(format)){
        format = format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    }
    for(var k in o)  {
        if(new RegExp("("+ k +")").test(format)){
            format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length));
        }
    }
    return format;
};
//alert('TAOTAO')
//var App = 'http://manage.lijun.com';
//var CatTreeUrl = '/item/cat';
//var CatUrl = App + CatTreeUrl;
//var CatUrl = '/item/cat';
//alert('TAOTAO')

var TT = Common = {
    /**
     * @param select 表示那个DOM元素
     * @returns {select}
     */
    createEditor : function(select)
    {
        //alert('createEditor')
        return KindEditor.create(select,TT.kingEditorParams)/*,Common.kingEditorParams*/
    },
    kingEditorParams : {filePostName  : "uploadFile",uploadJson : "/pic/upload",dir : "image"},// TODO-编辑器参数;所有上传图的地址
    //TODO:点击左加载右侧时需要初始的函数
    init : function(data)
    {
        //console.log(data)
        // alert('init');
        this.initPicUpload(data);
        this.initItemCat(data);
    },
    //TODO:获取类目列表
    initItemCat:function (data) {
       // console.log(jQuery(".selectItemCat"))
        jQuery(".selectItemCat").each(function(i,e){
          //  alert('selectItemCat')

            var _ele = $(e);
            if(data && data.itemCatId)
            {
                alert('data-1')
               // _ele.siblings('span').remove();
                //_ele.after("<span style='margin-left:10px;'>"+data['itemCatId']+"</span>");
                //_ele.siblings('input').val(data['itemCatId'])
                console.log($("#cid").attr('cid',data['itemCatId']))
                console.log($("#cid").attr('value',data['text']))
            }
            else
            {
               //alert('data-2')
                //console.log(_ele)
                //console.log(_ele.parent("#showcid"))
               // _ele.parentsUntil("form").parent("form").find("tr.pics").remove();
              //  _ele.after("<span style='margin-left:10px;'>回显值</span>");
            }
            //解除绑定在绑定当前事件
            _ele.unbind('click').click(function(){

                $("<div>").css({padding:"5px"}).html("<ul id='tree_cat'>").window({ title:'选择类目',minimizable:false,width:'1100', height:"350",modal:true,closed:true,iconCls:'icon-save',
                    onOpen : function(){
                        var _win = this;//表示刚创建的$("<div>");$("ul",_win)表示在$("<div>")查找这个ul
                        $("ul",_win).tree({url:"/item/cat/list",animate:true,method:"GET",
                            onLoadSuccess : function (node, data)
                            {
                                $("#tree_cat").find('li').css({"float": "left","padding-bottom":"5px","margin":"5px","width":"200px"})
                                $("#tree_cat").find('ul').css({ "float": "left","display": "inline","color": "#ff0011",  "white-space": "nowrap", });
                                $("#tree_cat").find('ul>li').css({"float": "left", "display": "block","padding-top":"5px"});

                                $("#tree_cat").find('ul>li:gt(0)').css({"clear": "both"});//匹配所有大于给定索引值的元素添加样式
                                $("#tree_cat").find('li:eq(8)').css({"clear": "both"});//从第10个li换行
                            },
                            onClick : function(node)
                            {
                                //isLeaf 判断指定的节点是否是叶子节点，target参数是一个节点DOM对象。
                                if($(this).tree("isLeaf",node.target)){
                                    // 填写到cid中

                                    console.log($("#cid").attr('cid',node.id))
                                    console.log($("#cid").attr('value',node.text))
                                    //console.log(_ele.next())
                                    //_ele.parent().find("[name=cid]").val(node.id);//input
                                    //_ele.next().text(node.text).attr("cid",node.id);//span;同进设置text 和 id
                                    $(_win).window('close');//在闭窗口
                                    if(data && data.ClickNode){
                                        data.ClickNode.call(this,node);//TODO: 难点： call执行传入的function 不传 this 返回 undefined 取不到当前节点；
                                    }
                                }
                            }
                        });
                    },
                    onClose : function(){
                        $(this).window("destroy");
                    }
                }).window('open');
            });
        });
    },
    //TODO:加载多图上传;
    initPicUpload:function (data) {
        $(".picFileUpload").each(function(i,e){
            //console.log("开始上传")
            var imglist = jQuery("#imglist");var imgshowDom = ""; var _ele = $(e);
             if(data && data.image)
             {
                 alert('修改时 有图')
                 imglist.remove();
                 var imgs = data.image.split(",");
                 //console.log(imgs);
                 for(var i in imgs){
                 if($.trim(imgs[i]).length > 0){
                     imgshowDom += "<div id=\"imglist\"><div class=\"col-lg-1\"><a href=\"#\"  title=\"\"><img class=\"img-responsive\" src=\"assets/img/gallery/photo6.jpg\" style=\"width: 105px;\" ></a></div></div>";
                     jQuery('#imgshow').append(imgshowDom);
                     }
                 }
             }
             else
             {
                 //alert("没图")

                 console.log(imglist)
                 imglist.remove();
               //  console.log(imgshow)
                      imgshowDom += "<div id=\"imglist\"><div class=\"col-lg-1\"><a href=\"#\"  title=\"\"><img class=\"img-responsive\" src=\"assets/img/gallery/photo6.jpg\" style=\"width: 105px;\" ></a></div></div>";
                 jQuery('#imgshow').html(imgshowDom);
                 // 回显图片
             }
            $(e).click(function()
            {
                //alert('3')
              //  var form = $(this).parentsUntil("form").parent("form");//查最近的from
                //打开窗口
                KindEditor.editor(TT.kingEditorParams).loadPlugin('multiimage',function(){
                    var editor = this;
                    editor.plugin.multiImageDialog({
                        clickFn : function(urlList) {
                            alert("[全部插入按钮]")//TODO:全部插入按钮事件 点击[全部插入按钮]执行下面代码 urlList表示已插件的图片对像;
                            console.log(urlList)
                            //alert('json')
                          /*  console.log(data);
                            console.log(json);
                            console.log(json.error);*/
                            //_ele .parentsUntil("form").parent("form").find(".table4 tbody").remove();
                            if(jQuery('#imgshow').find("img").attr('src') == 'assets/img/gallery/photo6.jpg')
                            {jQuery('#imgshow').find("img").remove();}
                            var imgArray = [];
                            KindEditor.each(urlList, function(i, data)
                            {
                                //java服务器处理后返回的data数据json

                                imgArray.push(data.url);
                                //form.find(".pics ul").append("<li><a href='"+data.url+"' target='_blank'><img src='"+data.url+"' width='80' height='50' /></a></li>");
                                var imgappendDom = "";
                                imgshowDom += "<div class=\"col-lg-1\"><a href='"+data.url+"'  title=\"\"><img class=\"img-responsive\" src='"+data.url+"' style=\"width: 105px;\" ></a></div>";
                                jQuery('#imglist').append(imgshowDom);
                            });
                          //  console.log(imgArray)
                            //console.log(imgArray.join(","))
                            jQuery("#imgshow").val(imgArray.join(","));//TODO;将数组以,号分隔成字符串数组 imgArray.join(",") 存到intpu中
                            editor.hideDialog();
                        }
                    });
                });
            });
        });
    },

    //TODO:message提示信息
    bottomCenter:function (data){
        // console.log(data)
        $.messager.show({
            width:300,
            title:'My 提示信息!',
            msg:data['msg'],//"执行状态:"+
            showType:'slide',
            style:{
                right:'',
                top:'',
                bottom:-document.body.scrollTop-document.documentElement.scrollTop
            }
        });
    },
    //TODO:message加载进度信息
    progress:function (data){
        var win = $.messager.progress({
            title:'Please waiting',
            msg:'Loading data...'+data['msg']
        });
        setTimeout(function(){
            $.messager.progress('close');
        },5000)
    },

// CatTree:{App:"http://manage.lijun.com",CatModelUrl:"/rest/item/cat",},


};









$.fn.extend({




});

