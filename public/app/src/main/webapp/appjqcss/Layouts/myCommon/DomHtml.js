var myapp = DomHtml = {

  itemformName: function (obj ,tag)
  {
    // console.log(obj)
   //alert(tag)
    if(tag == 'item')
    {
      obj.find('.row>div').removeClass('col-md-6').addClass('col-md-2');
      obj.find('.row>div>div>input').css('height', '25px');
      obj.find('.row>div>div>select').css({'height': '25px', 'padding': '0px'});
      obj.find('.row>.hot').removeClass('col-md-2').addClass('col-md-6');
      obj.find('.checkbox-inline').css('padding-right', '23px');
      obj.find('input[type=text]:eq(0)').prev().text('商品标题:');
      obj.find('input[type=text]:eq(0)').attr('name', 'title');
      obj.find('input[type=text]:eq(0)').attr('placeholder', '商品标题');


      obj.find('input[type=text]:eq(2)').prev().text('商品卖点:');
      obj.find('input[type=text]:eq(2)').attr('name', 'sellPoint');
      obj.find('input[type=text]:eq(2)').attr('placeholder', '商品卖点');

      obj.find('input[type=text]:eq(3)').prev().text('商品价格:');
      obj.find('input[type=text]:eq(3)').attr('name', 'priceView');
      obj.find('input[type=text]:eq(3)').attr('placeholder', '商品价格');


      obj.find('input[type=text]:eq(4)').prev().text('库存数量:');
      obj.find('input[type=text]:eq(4)').attr('name', 'num');
      obj.find('input[type=text]:eq(4)').attr('placeholder', '库存数量');

      obj.find('input[type=text]:eq(5)').prev().text('条形码:');
      obj.find('input[type=text]:eq(5)').attr('name', 'barcode');
      obj.find('input[type=text]:eq(5)').attr('placeholder', '条形码');
      if(jQuery('#cid').attr('value') != "")
      {
        mythis['from2'].find('#itemParamId').show();
        mythis['from2'].find('#itemParamsCSS').removeClass('col-md-2').addClass('col-md-10').show();
        mythis['from2'].find('#itemParamsCSSnew').removeClass('col-md-2').addClass('col-md-10').show();
      }

    }
    else if(tag == 'param')
    {
      //console.log(tag)
      obj.find('.row>div').removeClass('col-md-6').addClass('col-md-2');
      obj.find('.row>div>div>input').css('height', '25px');
      //obj.find('#cloneDom').find('.groupcss>.group>.input-group>label').text('分组项名称:');
      //obj.find('#cloneDom').find('.groupcss>.group>.input-group>label').next('input').attr('placeholder','输入 分组项名称');

      // obj.find('#cloneDom').find('.groupcss>.param>.input-group>label').text('分组 子名称:');
      //   obj.find('#cloneDom').find('.groupcss>.param>.input-group>label').next('input').attr('placeholder','输入 分组项 子名称');
    }
  },
  //TODO:显示商品规格模板
  CloneGroupDomHtml:function (mythis,data,frommodel)
  {
    var clonegroup = '';
    //console.log(data)
    if(data != null && frommodel == 'item')
    {
     // alert("3")
      //console.log(data)
      mythis['from2'].find('.ShowGroupParam').remove();
      mythis['from2'].find('#tab-form-actions').find('div.row:last').after('<div class="ShowGroupParam" id=""/>')
      var paramData = JSON.parse(data.paramData);
      for(var i in paramData)
      {
        var pd = paramData[i];
        clonegroup += '<div class="row groupcss">';
        clonegroup += '<div class="col-md-2 group">';
        clonegroup += '<div class="input-group">';
        clonegroup += '<label for="#" class="control-label" >'+pd.group+'</label>';
        clonegroup += '<input  type="text" style="display: none;" name="group" value="'+pd.group+'" placeholder="输入 分组项名称" class="form-control " >';
        clonegroup += '</div>';
        clonegroup += '</div>';
        for(var j in pd.params){
          var ps = pd.params[j];
          clonegroup += '<div class="col-md-2 param" >';
          clonegroup += '<div class="input-group">';
          clonegroup += '<label for="#" class="control-label">'+ps+'</label>';
          clonegroup += '<input  type="text" name="param"  placeholder="param" class="form-control " >';
          clonegroup += '</div>';
          clonegroup += '</div>';
        }
        clonegroup += '</div>';
      }
      mythis['from2'].find('.ShowGroupParam').empty().append(clonegroup);//TODO:显示商品规格模板
      //TODO:将商品规格参数放入表单中

      mythis['from2'].find('[name=itemCatId]').attr('value',data['itemCatId'])
      mythis['from2'].find('[name=junitemParams]').attr('value',data['paramData'])



      mythis['from2'].find('#tab-form-actions').find('.ShowGroupParam').find('input').css('height', '25px')
      mythis['from2'].find('#tab-form-actions').find('.ShowGroupParam').find('input').attr('placeholder','输入 子分组项值')

      mythis['from2'].find('#tab-form-actions').find('.ShowGroupParam>div.groupcss>div.group>div').removeClass('input-group')
      mythis['from2'].find('#tab-form-actions').find('.ShowGroupParam>div.groupcss>div.group>div').css({"text-align":"right","color":"#0a819c","font-weight":"bold"})
      mythis['from2'].find('#tab-form-actions').find('.ShowGroupParam>div.groupcss>div.param>div>label').css({"color":"#5bc0de","font-weight":"bold"})
    }
    else if(data != null && frommodel == 'param')
    {
     // alert("2")
      var paramData = JSON.parse(data.paramData);
      for(var i in paramData)
      {
        var pd = paramData[i];
        clonegroup += '<div class="row groupcss">';
        clonegroup += '<div class="col-md-2 group">';
        clonegroup += '<div class="input-group">';
        clonegroup += '<label for="#" class="control-label">'+pd.group+'</label>';
        clonegroup += '<input  type="text" name="group" value="'+pd.group+'" placeholder="输入 分组项名称" class="form-control " >';
        clonegroup += '<span class="input-group-btn">';
        clonegroup += '<button type="button " typename="param" class="btn btn-default fa fa-plus-square cloneDom" ></button>';
        clonegroup += '</span>';
        clonegroup += '</div>';
        clonegroup += '</div>';
        for(var j in pd.params)
        {
          var ps = pd.params[j];
          clonegroup += '<div class="col-md-2 param" >';
          clonegroup += '<div class="input-group">';
          clonegroup += '<label for="#" class="control-label">'+ps+'</label>';
          clonegroup += '<input  type="text" name="param" value="'+ps+'" placeholder="分组子项名称" class="form-control " >';
          clonegroup += '<span class="input-group-btn">';
          clonegroup += '<button type="button" typename="delparam" class="btn btn-default fa fa-minus-square-o cloneDom" ></button>';
          clonegroup += '</span>';
          clonegroup += '</div>';
          clonegroup += '</div>';
        }

        clonegroup += '<div class="col-md-6 cloneParam">';
        clonegroup += '<div class="input-group">';
        clonegroup += '<button type="button" typename="delgroup" class="btn cloneDom" >删除当前 分组</button>';
        clonegroup += '</div>';
        clonegroup += '</div>';
        clonegroup += '</div>';
      }
      mythis['from2'].find('.cloneDomHtml').empty().append(clonegroup);
      ParamPlugin.eachcloneDom(mythis,mythis['from2'].find('.cloneDom'))//TODO:添加规格参数 分组模板
    }
    else if(data == null && frommodel == 'param')
    {
     // alert("3")
        clonegroup += '<div class="row groupcss">';
        clonegroup += '<div class="col-md-2 group">';
        clonegroup += '<div class="input-group">';
        clonegroup += '<label for="#" class="control-label" >输入 分组项名称:</label>';
        clonegroup += '<input  type="text" name="group"  placeholder="输入 分组项名称" class="form-control " >';
        clonegroup += '<span class="input-group-btn">';
        clonegroup += '<button type="button " typename="param" class="btn btn-default fa fa-plus-square cloneDom" ></button>';
        clonegroup += '</span>';
        clonegroup += '</div>';
        clonegroup += '</div>';

          clonegroup += '<div class="col-md-2 param" >';
          clonegroup += '<div class="input-group">';
          clonegroup += '<label for="#" class="control-label">分组子项名称:</label>';
          clonegroup += '<input  type="text" name="param"  placeholder="分组子项名称" class="form-control " >';
          clonegroup += '<span class="input-group-btn">';
          clonegroup += '<button type="button" typename="delparam" class="btn btn-default fa fa-minus-square-o cloneDom"></button>';
          clonegroup += '</span>';
          clonegroup += '</div>';
          clonegroup += '</div>';


        clonegroup += '<div class="col-md-6 cloneParam">';
        clonegroup += '<div class="input-group">';
        clonegroup += '<button type="button" typename="delgroup" class="btn cloneDom" >删除当前 分组</button>';
        clonegroup += '</div>';
        clonegroup += '</div>';
        clonegroup += '</div>';


    }

    DomHtml.GroupParamCss();
      return clonegroup;
  },
  CloneParamDomHtml:function ()
  {
    var cloneparam = '';

    cloneparam += '<div class="col-md-2 param" >';
    cloneparam += '<div class="input-group">';
    cloneparam += '<label for="#" class="control-label">NEW 分组子项名称:</label>';
    cloneparam += '<input  type="text" name="param"  placeholder="NEW 分组子项名称" class="form-control " >';
    cloneparam += '<span class="input-group-btn">';
    cloneparam += '<button type="button" typename="delparam" class="btn btn-default fa fa-minus-square-o cloneDom"></button>';
    cloneparam += '</span>';
    cloneparam += '</div>';
    cloneparam += '</div>';

    return cloneparam;
  },


  GroupParamCss:function ()
  {
    //alert("d")
    //TODO:group  css
    mythis['from2'].find('.cloneDomHtml>div.groupcss>div.group').css({"margin-right":"10px","padding-left":"15px","padding-right":"0px","width":"13%",})
    mythis['from2'].find('.cloneDomHtml>div.groupcss>div.group>div.input-group').css({"width":"100%",})
    mythis['from2'].find('.cloneDomHtml>div.groupcss>div.group>div.input-group>label').css({"color":"#5bc0de","font-size":"14px","font-weight":"bold"})
    mythis['from2'].find('.cloneDomHtml>div.groupcss>div.group>div.input-group>input').css({"position":"relative","height":"25px"})
    mythis['from2'].find('.cloneDomHtml>div.groupcss>div.group>div.input-group>span>button').css({"height":"25px","width":"40px","position":"absolute","top":"25px","right":"0%","padding":"0px",})
    mythis['from2'].find('.cloneDomHtml>div.groupcss>div.group>div.input-group>span>button').css({"background-color":"#0a819c","color":"#ffffff",})

    //TODO:param css
    mythis['from2'].find('.cloneDomHtml>div.groupcss>div.param').css({"margin-right":"10px","padding-left":"15px","padding-right":"0px","width":"13%",})
    mythis['from2'].find('.cloneDomHtml>div.groupcss>div.param>div.input-group').css({"width":"100%",})
    mythis['from2'].find('.cloneDomHtml>div.groupcss>div.param>div.input-group>input').css({"position":"relative","height":"25px",})//"width":"80%"
    mythis['from2'].find('.cloneDomHtml>div.groupcss>div.param>div.input-group>span>button').css({"height":"25px","width":"40px","position":"absolute","top":"23px","right":"0%","padding":"0px",})
    mythis['from2'].find('.cloneDomHtml>div.groupcss>div.param>div.input-group>span>button').css({"background-color":"#5bc0de","color":"#ffffff",})
    //TODO:cloneParam del css
    mythis['from2'].find('.cloneDomHtml>div.groupcss>div.cloneParam').removeClass('col-md-2').addClass('col-md-1')
    mythis['from2'].find('.cloneDomHtml>div.groupcss>div.cloneParam').css({"margin-right":"0px","padding-left":"0px","padding-right":"0px"})
    mythis['from2'].find('.cloneDomHtml>div.groupcss>div.cloneParam>div.input-group').css({"margin-bottom":"0px",})//"position":"relative","top":"13px",
    mythis['from2'].find('.cloneDomHtml>div.groupcss>div.cloneParam>div.input-group>button').css({"height":"25px","width":"100px","position":"relative","top":"23px","right":"0%","padding":"0px",})
    mythis['from2'].find('.cloneDomHtml>div.groupcss>div.cloneParam>div.input-group>button').css({"background-color":"#e74c3c","color":"#ffffff",})


    mythis['from2'].find('#itemParamId').show();
   // console.log(mythis['from2'].find('#itemParamsCSS'))
    mythis['from2'].find('#itemParamsCSS').removeClass('col-md-2').addClass('col-md-10').show();
    mythis['from2'].find('#itemParamsCSSnew').removeClass('col-md-2').addClass('col-md-10').show();


  },
  PageInfoHtml:function (listdata)
  {
    var pageinfo = '';
    pageinfo += 'Page &nbsp;&nbsp;';
    pageinfo += '<a href="#" class="btn btn-sm btn-default btn-prev selecpage prePage_i" prePage="' + listdata['prePage'] + '"><i class="fa fa-angle-left"></i></a>';
    pageinfo += '<input type="text" maxlenght="5" value="' + listdata['pageNum'] + '" class="pagination-panel-input form-control input-mini input-inline input-sm text-center" style="height:29px;padding: 5px; 10px; margin-left:5px;margin-right: 5px;" />';
    pageinfo += '<a href="#" class="btn btn-sm btn-default btn-prev selecpage nextPage_i" nextPage="' + listdata['nextPage'] + '"><i class="fa fa-angle-right"></i></a>&nbsp; View &nbsp;';
    pageinfo += '<select class="form-control input-xsmall input-sm input-inline SelectPageSelect" name="page_size">';
    pageinfo += '<option value="5">5</option><option value="10">10</option><option value="20">20</option> <option value="50">50</option> <option value="100">100</option> <option value="150">150</option> ';
    /*<option value="-1">All</option>*/
    pageinfo += '</select>';
    pageinfo += '<label class="pageSize">&nbsp;&nbsp;每页显示 ' + listdata['pageSize'] + ' 条记录 |&nbsp;&nbsp;</label>';
    pageinfo += '<label class="startRow">&nbsp;&nbsp;当前显示  第 ' + listdata['startRow'] + '  TO&nbsp;&nbsp;</label>';
    pageinfo += '<label class="endRow">' + listdata['endRow'] + ' 条记录|&nbsp;&nbsp;</label>';
    pageinfo += '<label class="total">共  ' + listdata['total'] + ' 条记录|&nbsp;&nbsp;</label>';
    pageinfo += '<label class="pages">合计：' + listdata['pages'] + ' 页&nbsp;&nbsp;</label>';
    return pageinfo;
  },
  navigatepageNumsHtml:function (listdata)
  {
    var navpage = '';
    navpage += '<ul class="pager" style="margin:10px 0px;">';
    navpage += '<li class="paginate_button previous  first"><a href="#"  class="selecpage first" first="1">第一页</a></li>';
    navpage += '<li class="paginate_button previous  prePage" ><a href="#"  class="selecpage prePage" prePage="' + listdata['prePage'] + '">上 一页</a></li>';
    // navpage += '<li class="paginate_button "><a href="#" data-page= class="clickpage">1</a></li>';
    $.each(listdata['navigatepageNums'],function(index,pagename){
      navpage += '<li class="paginate_button "><a href="#" data-page='+pagename+' class="clickpage">'+pagename+'</a></li>';
    });
    navpage += '<li class="paginate_button next pages"><a href="#" class="selecpage pages" pages="' + listdata['pages'] + '">末 页</a></li>';
    navpage += '<li class="paginate_button next nextPage"><a href="#" class="selecpage nextpage" nextPage="' + listdata['nextPage'] + '">下 一页</a></li>';
    navpage += '</ul>';
    return navpage;
  },

  itemUpdateFind:function ()
  {
    //console.log(mythis)

    mythis['tablelistInputChecked'] = jQuery("[id='" + mythis.appright_Id + "']").find('tbody.tablelist>tr').find('input:checked');
    mythis['from2'].find('[name=title]').attr('value',mythis['tablelistInputChecked'].closest('tr').attr('title'))
    mythis['from2'].find('[name=cid]').attr('value',mythis['tablelistInputChecked'].closest('tr').attr('cid'))
    mythis['from2'].find('[name=num]').attr('value',mythis['tablelistInputChecked'].closest('tr').find('td:eq(5)').text())
    mythis['from2'].find('[name=priceView]').attr('value',mythis['tablelistInputChecked'].closest('tr').attr('price'))
    mythis['from2'].find('input[name=price]').val(mythis['from2'].find('input[name=priceView]').val());
    mythis['from2'].find('input[name=sellPoint]').attr('value',mythis['tablelistInputChecked'].closest('tr').find('td:eq(10)').find('span').attr('data-tipso'));
    mythis['imgaes'] = $.trim(mythis['tablelistInputChecked'].closest('tr').find('td:eq(8)').text())

    $.getJSON(mythis.settings.itemDescUrl+mythis['id'],function(_data){
      if(_data.status == 200){
        //UM.getEditor('itemeEditDescEditor').setContent(_data.data.itemDesc, false);
        mythis['itemAddEditor'].html(_data.data.itemDesc);
      }
    });
    //console.log(mythis)
  },

  ImgaesList:function (imgaesurl)
  {

    var imgaes = '';
    if(imgaesurl == "")
    {
      //alert('dddd')
      imgaes += '<div class="col-sm-6 col-md-3 xc" style="width: 278px; height: 376px;margin: 0px;">';
      imgaes += '<div class="thumbnail">';
      imgaes += '<img data-src="" alt="hello" src="/images/xc.png" style="width: 228px; height: 200px;" />';
      imgaes += '<div class="caption">';
      imgaes += '<h3>可以放商品名称</h3>';
      imgaes += '<p>可以放相册说明</p>';
      imgaes += '<p><a href="#" role="button" class="btn btn-primary">Button</a>&nbsp;<a href="#" role="button" class="btn btn-default">Button</a> </p>';
      imgaes += '</div>';
      imgaes += '</div>';
      imgaes += '</div>';
    }
    else
    {
      //alert(imgaesurl)
      for(var i in imgaesurl)
      {
        imgaes += '<div class="col-sm-6 col-md-3" style="width: 278px; height: 376px;margin: 0px;" >';
        imgaes += '<div class="thumbnail">';
        imgaes += '<img data-src="" alt="hello" src="'+imgaesurl[i]+'" style="width: 228px; height: 200px;" />';
        imgaes += '<div class="caption">';
        imgaes += '<h3>可以放商品名称</h3>';
        imgaes += '<p>可以放相册说明</p>';
        imgaes += '<p><a href="#" role="button" class="btn btn-primary">Button</a>&nbsp;<a href="#" role="button" class="btn btn-default">Button</a> </p>';
        imgaes += '</div>';
        imgaes += '</div>';
        imgaes += '</div>';
      }
    }

    return imgaes;
  },

};
$.fn.extend({


  test:function ()
  {
    //alert('test')
    console.log('test')
  },



});