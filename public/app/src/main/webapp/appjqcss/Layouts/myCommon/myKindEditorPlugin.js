var myapp = myKindEditorPlugin = {

  /**
   * @param select 表示那个DOM元素
   * @returns {select}
   * 初始调用这个方法
   */
  createEditor : function(select)
  {
    //alert('createEditor')
    return KindEditor.create(select,myapp.kingEditorParams)/*,Common.kingEditorParams*/
  },

  /**
   * 编辑器参数
   * filePostName :TODO:指定上传文件参数名称
   * uploadJson :TODO:指定上传文件请求的url。
   * dir : 上传类型，TODO:分别为image、flash、media、file
   */
  kingEditorParams : {filePostName  : "uploadFile",uploadJson : "/pic/upload",dir : "image"},// TODO-编辑器参数;所有上传图的地址
  //TODO:单图
  initOnePicUpload : function()
  {
    //alert('dd')
    //var Cat = Cat['Cat'];
    var from2 = jQuery("[id='" + mythis.appright_Id + "']").find('#from2')
    //console.log(from2)
    // console.log(from2.find('.filePicurl'))
    mythis['filePicdata'] = '';
    if(mythis['filePicdata'] != '')
    {
      console.log('修改时在写这里 initOnePicUpload 方法 ')
    }
    else
    {
      from2.find('.filePicurl').empty().append('<img alt="hello" style="width: 200px; height: 70px;" src="/images/img/goods_img.png" />');
    }

    from2.find('.onePicUpload').click(function(){
      var filePic = $(this);
      KindEditor.editor(myKindEditorPlugin.kingEditorParams).loadPlugin('image', function() {
        this.plugin.imageDialog({
          showRemote : false,
          clickFn : function(url, title, width, height, border, align) {
            filePic.siblings("input").val(url);
            from2.find('.filePicurl').empty().append('<img alt="hello" style="width: 200px; height: 70px;" src="'+url+'" />');
            this.hideDialog();
          }
        });
      });
    });
  },

  //TODO:将 http://vm.images.com/2018/01/27/1517028173914044.jpg,http://vm.images.com/2018/01/27/1517028174118510.jpg 转成
  //TODO:(2) ["http://vm.images.com/2018/01/27/1517028173914044.jpg", "http://vm.images.com/2018/01/27/1517028174118510.jpg"]
  imgaesUrlTOArray:function (url)
  {return url.split(",")},


  //TODO：相册
  initPicUpload:function ()
  {
    jQuery("[id='" + mythis.appright_Id + "']").find('#from2').find('.picFileUpload').each(function(i,e){
      if(mythis['imgaes'] == "")
      {
        //alert("没图")
        jQuery("[id='" + mythis.appright_Id + "']").find('#from2').find('.piclist').empty();
        jQuery("[id='" + mythis.appright_Id + "']").find('#from2').find('.piclist').append(DomHtml.ImgaesList(mythis['imgaes']));
      }
      else
      {
        // TODO:显默认图片
        // alert('修改时 有图')
        var imgaesurl = myKindEditorPlugin.imgaesUrlTOArray(mythis['imgaes']);//TODO：转成数组
        jQuery("[id='" + mythis.appright_Id + "']").find('#from2').find('.piclist').empty().append(DomHtml.ImgaesList(imgaesurl));
        console.log('修改时在写这里 initPicUpload 方法 ')
      }
      $(e).click(function()
      {
        //alert('3')
        //  var form = $(this).parentsUntil("form").parent("form");//查最近的from
        //打开窗口
        KindEditor.editor(myKindEditorPlugin.kingEditorParams).loadPlugin('multiimage',function(){
          var editor = this;
          editor.plugin.multiImageDialog({
            clickFn : function(urlList) {
              //alert("[全部插入按钮]")//TODO:全部插入按钮事件 点击[全部插入按钮]执行下面代码 urlList表示已插件的图片对像;
              //console.log(urlList)
              // console.log(urlList.length)
              if(urlList.length > 0)
              {
                //jQuery("[id='" + mythis.appright_Id + "']").find('#from2').find('.piclist').empty();
                // Cat['image'].val('');
                mythis['imgArray'] = [];
                mythis['pushimglist'] = "";
                KindEditor.each(urlList, function(i, data)
                {
                  //java服务器处理后返回的data数据json
                  //console.log(data);
                  mythis['imgArray'].push(data.url) //分隔字串
                  // console.log(imgArray.push(data.url))
                  mythis['pushimglist'] += '<div class="col-sm-6 col-md-3" style="width: 278px; height: 376px;margin: 0px;" >';
                  mythis['pushimglist'] += '<div class="thumbnail">';
                  mythis['pushimglist'] += '<img data-src="" alt="hello" src="'+data.url+'" style="width: 228px; height: 200px;" />';
                  mythis['pushimglist'] += '<div class="caption">';
                  mythis['pushimglist'] += '<h3>可以放商品名称</h3>';
                  mythis['pushimglist'] += '<p>可以放相册说明</p>';
                  mythis['pushimglist'] += '<p><a href="#" role="button" class="btn btn-primary">Button</a>&nbsp;<a href="#" role="button" class="btn btn-default">Button</a> </p>';
                  mythis['pushimglist'] += '</div>';
                  mythis['pushimglist'] += '</div>';
                  mythis['pushimglist'] += '</div>';
                });
                jQuery("[id='" + mythis.appright_Id + "']").find('#from2').find('.xc').remove();

                jQuery("[id='" + mythis.appright_Id + "']").find('#from2').find('.piclist').append(mythis['pushimglist']);
                //console.log(imgArray)//(2) ["http://vm.images.com/2018/01/05/1515164537961271.jpg", "http://vm.images.com/2018/01/05/1515164538424300.jpg"]
                //  console.log(imgArray.join(","))//http://vm.images.com/2018/01/05/1515164537961271.jpg,http://vm.images.com/2018/01/05/1515164538424300.jpg
                //  Cat['image'].val(imgArray.join(","));
                jQuery("[id='" + mythis.appright_Id + "']").find('#from2').find("[name=image]").attr('value',mythis['imgArray'].join(","));//TODO;将数组以,号分隔成字符串数组 imgArray.join(",") 存到intpu中
                editor.hideDialog();
              }
            }
          });
        });
      });

    });
  },
};
$.fn.extend({


  test:function ()
  {
    //alert('test')
    console.log('test')
  },



});