;(function () {
    //==================================================================================
    jQuery.fn.rightcommon=function(options)
    {
        var defaults = {myPlugin:'', click:'click',change:'change',
           }//默认参数与属性
        var options = $.extend(defaults,options);
        var rightdom =  {};                  //event事件；按钮层定义一个对像；
      rightdom['this'] = this;
      rightdom['myPlugin'] = options.myPlugin;
     // rightdom['myPlugin'].myicheck();//给 input checkbox radio 添加 样式
      //TODO: 设置 JSP addEdit 页面  样式
      rightdom['from2'] = rightdom['this'].find('#from2');
     // rightdom['from2'].find('.form-body pal').css('padding-top','0px !important');
      rightdom['from2'].find('.row>div').removeClass('col-md-6').addClass('col-md-2');
      rightdom['from2'].find('.row>div>div>input').css('height','25px');
      rightdom['from2'].find('.row>div>div>select').css({'height':'25px','padding':'0px'});
      rightdom['from2'].find('.row>.hot').removeClass('col-md-2').addClass('col-md-6');
      rightdom['from2'].find('.checkbox-inline').css('padding-right','23px');
      //console.log(rightdom['from2'].find('.checkbox-inline'))

      //TODO: ADD EDIT DEL FANXIANG
      rightdom['this'].find('.reghtaddeditbutton').children().each(function(index, element){
        //console.log(obj)
        //console.log(index)
        //console.log(element)
        jQuery(this).unbind("click").click(function(){
          switch(index){
            //case 0:	$(this).ClickFormDomEdit(objprent,objtext);break;           //编辑,通过对像方式objtext取行内的所有名称文字
            case 0:	jQuery(this).myadd({rightdom:rightdom,tag:'add',});break;
            case 1:	jQuery(this).myedit({rightdom:rightdom,tag:'edit',});break;
            case 2:	jQuery(this).mydel({rightdom:rightdom,tag:'del',});break;
            case 3:	jQuery(this).myfanxiang({rightdom:rightdom,tag:'fanxiang',});break;
          }
          return false;
        });
      });
      //TODO:添加表单提交
      rightdom['this'].find('.addeditsubmit').children().each(function(index, element){
        //console.log(obj)
        //console.log(index)
        //console.log(element)
        jQuery(this).unbind("click").click(function(){
          switch(index){
            case 0:	jQuery(this).Submit({rightdom:rightdom,tag:'Submit',});break; //提交
            case 1:	jQuery(this).Cancel({rightdom:rightdom,tag:'Cancel',});break;//取消

          }
          return false;
        });
      });



     //TODO： 给 INPUT radio  添加表单  icheck 样式 促销 与 不促销

      rightdom['myPlugin'].RadioifChecked(rightdom['from2']);
     /* rightdom['from2'].find("[type='radio']").on("ifChecked", function(event){
        jQuery(this).val('促销');
        jQuery(this).attr('checked',true);
        rightdom['from2'].find('.sp').show();
        rightdom['from2'].find("[type='radio']").on("ifClicked", function(event){
          jQuery(this).iCheck('uncheck');
          jQuery(this).val('不促销');
          jQuery(this).attr('checked',false);
          rightdom['from2'].find('.sp').hide();
        });
      });*/

      //console.log(rightdom['from2'].find('.row>.hot'))
      //TODO: 推荐到楼层样式
   //   rightdom['myPlugin'].IcheckboxifChecked(rightdom['from2']);
      /*rightdom['from2'].find('.row>.hot:not(".switch")').iCheck({
        checkboxClass: 'icheckbox_square-red',
        increaseArea: '20%' // optional
      });*/
      //TODO: 推荐到楼层选中与不先切换
      rightdom['myPlugin'].IcheckboxifCheckedOK(rightdom['from2']);
      /*console.log(rightdom['from2'].find('.row>.hot').find("[type='checkbox']"))
      rightdom['from2'].find('.row>.hot').find("[type='checkbox']").on('ifChanged', function(event){
        alert(event.type + ' callback');
        console.log($(this).is(':checked'))
        console.log($(this).hasClass('checked'))
        if($(this).is(':checked')){
          console.log("选中");
          jQuery(this).attr('checked',true);
          var hot = $.trim(rightdom['from2'].find('.row>.hot').attr('value'));
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

          rightdom['from2'].find('.row>.hot').attr('value',hot);
        }
        else
        {
          console.log("没 选中 ")
          var hotuncheck = $.trim(rightdom['from2'].find('.row>.hot').attr('value'));
          jQuery(this).attr('checked',false);
          if (hotuncheck.indexOf(hotuncheck + ',') == -1)
          {
            //console.log('6')
            //TODO：如果 appendstr 与 jQuery(this).val()有相同 通过replace()此函数将 appendstr 中移除对应 ？ input的值
            hotuncheck = hotuncheck.replace(jQuery(this).val() + ',', '');
            rightdom['from2'].find('.row>.hot').attr('value',hotuncheck);
          }
        }
      });*/

    };
  $.fn.extend({

    myadd:function (rightdom,tag)
  {
    console.log('add')

    if(rightdom['tag'] == 'add')
    {
      var rightdom = rightdom['rightdom'];
      rightdom['this'].find('.right_listpage').hide();//TODO:列表
      rightdom['this'].find('.addEdit').show();//TODO:添加表单
      rightdom['from2'].attr('formtype','add');//TODO:表单类型
      rightdom['from2'].find('.addeditsubmit').children(':eq(0)').attr('formtype','add')//TODO：提交类型


      console.log(rightdom)


      console.log(rightdom['this'].find('.addEdit'))
    }
  },
    myedit:function (rightdom,tag)
  {
    console.log('edit')
    if(rightdom['tag'] == 'edit')
    {
      var rightdom = rightdom['rightdom'];
      rightdom['this'].find('.right_listpage').hide();//TODO:列表
      rightdom['this'].find('.addEdit').show();//TODO:添加表单
      rightdom['from2'].attr('formtype','add');//TODO:表单类型
      rightdom['from2'].find('.addeditsubmit').children(':eq(0)').attr('formtype','add')//TODO：提交类型
      console.log(rightdom)
    }

  },
    mydel:function (rightdom,tag)
  {
    console.log('del')
    if(rightdom['tag'] == 'del')
    {
      var rightdom = rightdom['rightdom'];
      console.log(rightdom)
    }
  },
    myfanxiang:function (rightdom,tag)
  {
    console.log('fanxiang')
    if(rightdom['tag'] == 'fanxiang')
    {
      var rightdom = rightdom['rightdom'];
      console.log(rightdom)
    }
  },
    //case 0:	jQuery(this).Submit({rightdom:rightdom,tag:'Submit',});break; //提交
    //case 1:	jQuery(this).Cancel({rightdom:rightdom,tag:'Cancel',});break;//取消
  Submit:function (rightdom,tag)
  {
    console.log('Submit')
    if(rightdom['tag'] == 'Submit')
    {
      var rightdom = rightdom['rightdom'];
      console.log(rightdom)
    }
  },
  Cancel:function (rightdom,tag)
  {
    console.log('Cancel')
    if(rightdom['tag'] == 'Cancel')
    {
      var rightdom = rightdom['rightdom'];
      rightdom['this'].find('.right_listpage').show();//TODO:列表
      rightdom['this'].find('.addEdit').hide();//TODO:添加表单
      rightdom['from2'].attr('formtype','');//TODO:表单类型
      rightdom['from2'].find('.addeditsubmit').children(':eq(0)').attr('formtype','')//TODO：提交类型
      console.log(rightdom)

    }
  },
  });
})(jQuery);
$.fn.extend({


});
jQuery(function () {
    //alert('publiclist');
    //console.log(jQuery("body"))
    jQuery("#public").rightcommon({
      myPlugin:myPlugin,
    });
    $('.date_a').datetimepicker({});
    $('.date_b').datetimepicker({});
    $('.date_c').datetimepicker({});
    $('.date_d').datetimepicker({});



});
