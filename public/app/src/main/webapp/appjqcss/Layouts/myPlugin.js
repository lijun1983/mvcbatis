

//TODO:用命名空间函数全局函数 常用 通用的 方法 插件写这里 对像里；统一调用
var myapp = myPlugin = {

//测试1
  foo:function(obj) {
    console.log('fooo');
    //console.log(obj);
    //alert('foo')
  },
  //测试2 传参
  bar:function(param) {
    console.log('bar "' + param + '".');
  },
  barr:function(param) {
    console.log("barr")
  },
  //TODO: 给 input checkbox radio 添加 样式
  myicheck:function ()
  {
    if ($('#demo-checkbox-radio').length <= 0) {
      //alert(event.type);
      // alert('3')
      $('input[type="checkbox"]:not(".switch")').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        increaseArea: '20%' // optional
      });
      $('input[type="radio"]:not(".switch")').iCheck({
        checkboxClass : 'icheckbox_square-blue',
        radioClass : 'iradio_square-blue',
      });


    }
  },

    //TODO:通过js去掉所有的html标签，得到HTML标签中的所有内容
  //例：少量库存，抢完即止！<a  target="blank"  href="http://sale.jd.com/act/bxYeI1346g.html?erpad_source=erpad">“领券更优惠！”</a>
  //结果： 少量库存，抢完即止！“领券更优惠！”
  replace_htmlRemove:function (htmlremove)
  {
    //console.log(htmlremove)
    var htmltext=htmlremove.replace(/<\/?.+?>/g,"");
    //var dds=htmltext.replace(/ /g,"");//dds为得到后的内容
    //alert(dds);
    return htmltext.replace(/ /g,"");//dds为得到后的内容
  },

  //TODO:Bootstrap 提示工具（popover）插件 click 显示；click 隐藏
  /*<td><button type="button" data-container="body" data-toggle="popover" data-placement="left" data-content="'+ obj["sellPoint"] +'" class="btn btn-default mbs">sellPoint</button></td>*/
  //data-placement 值表示 left top right bottom
  //data-content 值表示显示内容
  popover:function ()
  {
    //alert('popover')
    $("[data-toggle='popover']").popover();
  },

  //TODO:Bootstrap 提示工具（Tooltip）插件 光标移入 显示；光标移出 隐藏
  //data-placement 值表示 left top right bottom
  // data-original-title 值表示显示内容
  /*<button type="button" data-toggle="tooltip" data-placement="left" title="" class="btn btn-default mbs" data-original-title="'+ obj["sellPoint"] +'">Tooltip on left</button>*/
  tooltip:function ()
  {
   // $( document ).tooltip();
    $("[data-toggle='tooltip']").tooltip({});
  },
  //TODO:tipso 提示工具（Tooltip）插件
  tipso:function()
  {
    //alert("tipso")
    $('.tip2').tipso({
      useTitle: false,
      position:'left'
    });
  },


  //TODO: 后加载记录集的 全选  并 将 input value 遍历成 字符串 放一个 dome 中
  QuanxianCheckbox:function (obj)
  {
    //console.log(obj)
    obj.on("click",function ()
    {
      var _ok = '';
      //alert('QuanxianCheckbox')
      if($(this).parent().hasClass('checked')==false)
      {
        jQuery('.tablelist').attr('value','');
        jQuery('.tablelist>tr>td>div>ins').each(function(){
          var $this = $(this);
          $this.parent().removeClass('checked');
          $this.prev().attr('checked',false);
        });
      }
      else
      {
        jQuery('.tablelist').attr('value','');
        jQuery('.tablelist>tr>td>div>ins').each(function(){
          var $this = $(this);
          console.log($this.prev().attr('value')+',')
          _ok += $this.prev().attr('value') + ',';
          $this.parent().addClass('checked');
          $this.prev().attr('checked','checked');
        });
        // console.log(_ok);
        //var ok = _ok.substr(0, _ok.length);// 格式化遍历出的.allok变量存到vaf ok中;且将最后一个字符删除；
        //console.log(ok);
        jQuery('.tablelist').attr('value',_ok);
      }
    });
  },
  //TODO: 列表单个 checkbox 复选框 自定义 选中 追 加到 .tablelist value 值中
  MyCheckbox:function (obj)
  {
    //console.log(obj)
    obj.on('ifChanged', function(event){
        alert(event.type + ' callback');
        if($(this).is(':checked')){
          console.log("选中");
          jQuery(this).attr('checked',true);
          var appendstr = $.trim(jQuery('.tablelist').attr('value'));
          if(appendstr.length>0)
          {
            console.log('1');
            //2步.如果有值时；查找过滤相同的值；如找不到相同的就将值+=到JD中
            if (appendstr.indexOf(jQuery(this).val() + ',') != -1)
            {
              console.log('2')
              //TODO:如果 appendstr 与 jQuery(this).val()有相同 就直截返回,仅处于选中状态；appendstr不变化
              return;
            } else
            {
              console.log('38')
              //TODO:如果 appendstr 与 jQuery(this).val()没有相同 将当前 click input的值 追加到 appendstr 字符中
              appendstr += jQuery(this).val() + ',';
            }
          }
          else
          {
            console.log('4')
            //TODO:1步.初始都没选时；一点就将值放入
            appendstr += jQuery(this).val() + ',';
          }

          jQuery('.tablelist').attr('value',appendstr);
        }
        else
        {
          console.log("没 选中 ")
          var appendstruncheck = $.trim(jQuery('.tablelist').attr('value'))
          jQuery(this).attr('checked',false);
          if (appendstruncheck.indexOf(appendstruncheck + ',') == -1)
          {
            //console.log('6')
            //TODO：如果 appendstr 与 jQuery(this).val()有相同 通过replace()此函数将 appendstr 中移除对应 ？ input的值
            appendstruncheck = appendstruncheck.replace(jQuery(this).val() + ',', '');
            jQuery('.tablelist').attr('value',appendstruncheck);
           // console.log($(this).closest('.tablelist').find("[type='checkbox']:checked").length)
            if($(this).closest('.tablelist').find("[type='checkbox']:checked").length == 0)
            {
              jQuery('.thead_List>tr>th>div').iCheck('uncheck');
            }
          }
        }
      });
  },
  //TODO: 添加表单处理=====================================================
  //TODO： 给 INPUT radio  添加表单  icheck 样式 促销 与 不促销
  RadioifChecked:function (rightcommon)
  {
    //alert(obj)
   // console.log(rightcommon)
    rightcommon['from2'].find("[type=radio]").on("ifChecked", function(event){
      jQuery(this).val('促销');
      jQuery(this).attr('checked',true);
      rightcommon['from2'].find('.sp').show();
      rightcommon['from2'].find("[type='radio']").on("ifClicked", function(event){
        jQuery(this).iCheck('uncheck');
        jQuery(this).val('不促销');
        jQuery(this).attr('checked',false);
        rightcommon['from2'].find('.sp').hide();
      });
    });
  },

  //TODO: 推荐到楼层选中与不先切换
  HotCheckbox:function (rightcommon)
  {
    rightcommon['HotCheckbox'].on('ifChanged',function(event){
     // alert(event.type + ' callback');
      console.log($(this).is(':checked'))
      //console.log($(this).hasClass('checked'))

      if($(this).is(':checked')){
        console.log("选中");
        jQuery(this).attr('checked',true);
        var hot = $.trim(rightcommon['from2'].find('.row>.hot').attr('value'));
        if(hot.length>0)
        {
          console.log('1');
          //2步.如果有值时；查找过滤相同的值；如找不到相同的就将值+=到JD中
          if (hot.indexOf(jQuery(this).val() + ',') != -1)
          {
            console.log('2')
            //TODO:如果 appendstr 与 jQuery(this).val()有相同 就直截返回,仅处于选中状态；appendstr不变化
            return;
          } else
          {
            console.log('38')
            //TODO:如果 appendstr 与 jQuery(this).val()没有相同 将当前 click input的值 追加到 appendstr 字符中
            hot += jQuery(this).val() + ',';
          }
        }
        else
        {
          console.log('4')
          //TODO:1步.初始都没选时；一点就将值放入
          hot += jQuery(this).val() + ',';
        }

        rightcommon['from2'].find('.row>.hot').attr('value',hot);
      }
      else
      {
        console.log("没 选中 ")
        var hotuncheck = $.trim(rightcommon['from2'].find('.row>.hot').attr('value'));
        jQuery(this).attr('checked',false);
        if (hotuncheck.indexOf(hotuncheck + ',') == -1)
        {
          //console.log('6')
          //TODO：如果 appendstr 与 jQuery(this).val()有相同 通过replace()此函数将 appendstr 中移除对应 ？ input的值
          hotuncheck = hotuncheck.replace(jQuery(this).val() + ',', '');
          rightcommon['from2'].find('.row>.hot').attr('value',hotuncheck);
        }
      }
    });
  },

  //未用到 的函数
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
  // 格式化时间
  formatDateTime : function(val,row){
    var now = new Date(val);
    return now.format("yyyy-MM-dd hh:mm:ss");
  },
  // 格式化连接
  formatUrl : function(val,row){
    if(val){
      return "<a href='"+val+"' target='_blank'>查看</a>";
    }
    return "";
  },
  // 格式化价格
  formatPrice : function(val,row){
    return (val/1000).toFixed(2);
  },
  // 格式化商品的状态
  formatItemStatus : function formatStatus(val,row){
    if (val == 1){
      return '正常';
    } else if(val == 2){
      return '<span style="color:red;">下架</span>';
    } else {
      return '未知';
    }
  },

  serializeObject:function ()
  {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function ()
    {
      if (o[this.name])
      {
        if (!o[this.name].push)
        {
          o[this.name] = [o[this.name]];
        }
        o[this.name].push(this.value || '');
      } else
      {
        o[this.name] = this.value || '';
      }
    });

    return o;
  },

  //TODO:字符串处理===========================

  mysubstringLength_1:function(_str) {
   //console.log(_str) //id,title,sellPoint,price,num,barcode,image,cid,status,created,updated,
    _str=_str.substring(0,_str.length-1);//TODO：去除最后一个字符
    return _str.split(",");//有下标的数据0 : "id" ["id", "title", "sellPoint", "price", "num", "barcode", "image", "cid", "status", "created", "updated"]
  },

};
$.fn.extend({
  test:function ()
  {
    //alert('test')
    console.log('test')
  },
  /*initlist:function (obj)
  {
    console.log(obj['obj']);
  },*/


});