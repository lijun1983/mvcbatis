

;(function () {
    //==================================================================================
    jQuery.fn.publiclist=function(options)
    {
        var defaults = { click:'click',change:'change',mouseover:'mouseover',mouseout:'mouseout',navpageUrl:'',imgurl:'',
           }//默认参数与属性
        var options = $.extend(defaults,options);
        var list =  {};                  //event事件；按钮层定义一个对像；
      list['this'] = this;

      //TODO: 设置 JSP  right_select 页面  样式
      list['from1'] = list['this'].find('#from1');
     //TODO: 设置 JSP  right_listpage 页面  样式
      list['right_listpage'] = list['this'].find('table');
      //TODO： iCHeck 插件给复选框添加 样式
      if ($('#demo-checkbox-radio').length <= 0) {
        //alert(event.type);
        // alert('3')
        $('input[type="checkbox"]:not(".switch")').iCheck({
          checkboxClass: 'icheckbox_square-grey',
          increaseArea: '20%' // optional
        });
        $('input[type="radio"]:not(".switch")').iCheck({
          checkboxClass : 'icheckbox_square-blue',
          radioClass : 'iradio_square-blue',
        });


      }
      //TODO:全选 并 将 input value 遍历成 字符串 放一个 dome 中
      list['this'].find('.thead_List>tr>th>div>ins').on("click",function ()
      {
        var _ok = '';
        if($(this).parent().hasClass('checked')==false)
        {
          list['this'].find('.tablelist').attr('value','');
          list['this'].find('.tablelist>tr>td>div>ins').each(function(){
            var $this = $(this);
            $this.parent().removeClass('checked');
            $this.prev().attr('checked',false);
          });
        }
        else
        {
          list['this'].find('.tablelist').attr('value','');
          list['this'].find('.tablelist>tr>td>div>ins').each(function(){
            var $this = $(this);
            console.log($this.prev().attr('value')+',')
            _ok += $this.prev().attr('value') + ',';
            $this.parent().addClass('checked');
            $this.prev().attr('checked','checked');
          });
        // console.log(_ok);
         //var ok = _ok.substr(0, _ok.length);// 格式化遍历出的.allok变量存到vaf ok中;且将最后一个字符删除；
          //console.log(ok);
          list['this'].find('.tablelist').attr('value',_ok);
        }
      });
      //TODO: 列表单个 checkbox 复选框 自定义 选中 追 加到 .tablelist value 值中
      list['this'].find('.tablelist').find("[type='checkbox']").on('ifChanged', function(event){
        //alert(event.type + ' callback');
        if($(this).is(':checked')){
          console.log("选中");
          jQuery(this).attr('checked',true);
          var appendstr = $.trim(list['this'].find('.tablelist').attr('value'));
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

          list['this'].find('.tablelist').attr('value',appendstr);
        }
        else
        {
          console.log("没 选中 ")
          var appendstruncheck = $.trim(list['this'].find('.tablelist').attr('value'))
          jQuery(this).attr('checked',false);
          if (appendstruncheck.indexOf(appendstruncheck + ',') == -1)
          {
            //console.log('6')
            //TODO：如果 appendstr 与 jQuery(this).val()有相同 通过replace()此函数将 appendstr 中移除对应 ？ input的值
            appendstruncheck = appendstruncheck.replace(jQuery(this).val() + ',', '');
            list['this'].find('.tablelist').attr('value',appendstruncheck);
            console.log($(this).closest('.tablelist').find("[type='checkbox']:checked").length)
            if($(this).closest('.tablelist').find("[type='checkbox']:checked").length == 0)
            {
              list['this'].find('.thead_List>tr>th>div').iCheck('uncheck');
            }
          }
        }
      });

      //TODO: 设置 JSP addEdit 页面  样式
      list['from2'] = list['this'].find('#from2');
     // list['from2'].find('.form-body pal').css('padding-top','0px !important');
      list['from2'].find('.row>div').removeClass('col-md-6').addClass('col-md-2');
      list['from2'].find('.row>div>div>input').css('height','25px');
      list['from2'].find('.row>div>div>select').css({'height':'25px','padding':'0px'});
      list['from2'].find('.row>.hot').removeClass('col-md-2').addClass('col-md-6');
      list['from2'].find('.checkbox-inline').css('padding-right','23px');
      console.log(list['from2'].find('.checkbox-inline'))
     //TODO： 给 INPUT radio  添加表单  icheck 样式
      list['from2'].find("[type='radio']").on("ifChecked", function(event){
        jQuery(this).val('促销');
        jQuery(this).attr('checked',true);
        list['from2'].find('.sp').show();
        list['from2'].find("[type='radio']").on("ifClicked", function(event){
          jQuery(this).iCheck('uncheck');
          jQuery(this).val('不促销');
          jQuery(this).attr('checked',false);

          list['from2'].find('.sp').hide();

        });
      });

      console.log(list['from2'].find('.row>.hot'))
      //TODO: 推荐到楼层
      list['from2'].find('.row>.hot:not(".switch")').iCheck({
        checkboxClass: 'icheckbox_square-red',
        increaseArea: '20%' // optional
      });
      list['from2'].find('.row>.hot').find("[type='checkbox']").on('ifChanged', function(event){
        //alert(event.type + ' callback');
        if($(this).is(':checked')){
          console.log("选中");
          jQuery(this).attr('checked',true);
          var hot = $.trim(list['from2'].find('.row>.hot').attr('value'));
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

          list['from2'].find('.row>.hot').attr('value',hot);
        }
        else
        {
          console.log("没 选中 ")
          var hotuncheck = $.trim(list['from2'].find('.row>.hot').attr('value'));
          jQuery(this).attr('checked',false);
          if (hotuncheck.indexOf(hotuncheck + ',') == -1)
          {
            //console.log('6')
            //TODO：如果 appendstr 与 jQuery(this).val()有相同 通过replace()此函数将 appendstr 中移除对应 ？ input的值
            hotuncheck = hotuncheck.replace(jQuery(this).val() + ',', '');
            list['from2'].find('.row>.hot').attr('value',hotuncheck);
          }
        }
      });
    console.log(list);

    };

})(jQuery);

jQuery(function () {
    //alert('publiclist');
    //console.log(jQuery("body"))
    jQuery("#public").publiclist();
    $('.date_a').datetimepicker({});
    $('.date_b').datetimepicker({});
    $('.date_c').datetimepicker({});
    $('.date_d').datetimepicker({});




});