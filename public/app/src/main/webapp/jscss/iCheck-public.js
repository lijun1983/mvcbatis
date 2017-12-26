

$(function () {
//alert('2');

    //icheck复选框样式；如去除装原生复选框无样式
    if ($('#demo-checkbox-radio').length <= 0) {
        //alert(event.type);
       // alert('3')
        $('input[type="checkbox"]:not(".switch")').iCheck({
            checkboxClass: 'icheckbox_minimal-grey',
            increaseArea: '20%' // optional
        });
        $('input[type="radio"]:not(".switch")').iCheck({
            radioClass: 'iradio_minimal-grey',
            increaseArea: '20%' // optional
        });
    }


    //全选click勾选与不勾选切换
     /*************************************************
      * 1.click勾选与不勾选切换
      * 2.添加 checked=checked属性
      * 3.统计checkbox的数量且格式化去除最后一个字符；
      * 4.将格式化后的变量赋给tbody.checked_total标签元素
      *
      * */
    $('input.checkall').on('ifChecked ifUnchecked', function (event) {
    //alert(event.type);
        if (event.type == 'ifChecked') {
            $(this).closest('table').find('input[type=checkbox]').iCheck('check');//设置打勾

            $(this).closest('table').find('input[type=checkbox]').attr('checked', true);//设置checked=checked


            var allok_num = ($(this).closest('table').find('.allok'));//选择即将遍历该元素
            var _ok = '';
            //遍历总计复选框的数量
            $.each(allok_num,function (){

                _ok += $(this).attr('value') + ',';

            });
            var ok = _ok.substr(0, _ok.length - 1);// 格式化遍历出的.allok变量存到vaf ok中;且将最后一个字符删除；
            console.log(ok);
            jQuery("tbody.checked_total").attr('value', ok);//将总数量放到tbody.checked_total元素中

        } else {

            $(this).closest('table').find('input[type=checkbox]').iCheck('uncheck');
            $(this).closest('table').find('input[type=checkbox]').attr('checked', false);

            var allok_num = ($(this).closest('table').find('.allok'));
            var _ok = '';
            $.each(allok_num,function (){

                _ok += $(this).attr('value') + ',';

            });
            var ok = _ok.substr(0, _ok.length - 1);// 格式化遍历出的.allok变量存到vaf ok中;且将最后一个字符删除；
            console.log(ok);
            jQuery("tbody.checked_total").attr('value','');//将总数量放到tbody.checked_total元素中

        }
    });


    /**************************自定随意选择************************************
     * 自定随意选择
     * var _this 该方法click当前全局变量
     * var a 获取当前click的value值；
     * var b 获取即将要选中的值存放到此（b）dom元素中；
     * var c ；获取当前click的value的值
     *
     * */
    $('input.allok').on('ifChecked ifUnchecked', function (event) {
       // alert(event.type);
        var _this = $(this);
        var a = _this.attr('value');
        var b = jQuery("tbody.checked_total");

        var c = $.trim(b.attr('value'));

        if ($(this).prop("checked"))
        {
            //alert('1');
            if (c.length > 0)
            {
                //alert('2');
                _this.attr('checked', true);
                if (c.indexOf(a + ',') != -1)
                {
                //alert('3');
                    return;
                } else
                {
                 //alert('-3');
                    c += a + ',';
                }
            }
            else
            {
                //alert('-2');
                c += a + ',';
                _this.attr('checked', true);
            }
        }
        else
        {
            //alert('-1');
            if (c.indexOf(a + ',') != -1)
            {
                c = c.replace(a + ',', '');
                _this.attr('checked', false);
            }
        }

        b.attr('value', c);//将最后选中总值以,分隔放入jQuery("tbody.checked_total")；提交至TP处理


    });
    /**************************返向选择************************************
     * 返向选择
     *
     * */
    $('button#checkedtbox').click(function (event){
       //alert('1');
        //console.log($("#userlist :checkbox").length);
        //
        $("#userlist :checkbox").each(function(){
            //each()方法遍历所有的复选框
            if($(this).attr("checked")){//这里就可以判断当前是否被选择了

                $(this).iCheck('uncheck');//如果已选择，可以用iCheck取消选择

            }else{
                $(this).iCheck('check');//如果没选择，可以用iCheck美化选择

            }
        })
        $('input.checkall').iCheck('uncheck');
    });



    /********************** 列表翻页-动态追加添加-动态修改记录-复选框移入移出效果；*****************************************
     * 列表翻页-动态添加-动态修改-复选框移入移出效果
     * */
    $('div.icheckbox_minimal-grey').live('hover',function(){
        // alert('移入 !');
        $(this).toggleClass('hover');

    },function(){
        //alert(' 移出!');
        $(this).toggleClass('hover');

    });
    /********************** 列表翻页-动态追加添加-动态修改记录-复选框click选中与赋值效果；*****************************************
     * 列表翻页-动态添加-动态修改-复选框click选中与赋值效果
     * $('div.icheckbox_minimal-grey') 点击的元素
     *   var true_false  选择点击紧聆的input
     * jQuery("tbody.checked_total") 将选中的复选框的值放入该dom
     * */
    $('div.icheckbox_minimal-grey').live('click',function()
    {
        $(this).toggleClass('checked');//给当前div.icheckbox_minimal-grey元素添加如删除checked class

        var true_false = ($(this).children('input'));

        if(true_false.attr("checked"))
        {
            true_false.attr('checked', false);

            jQuery("tbody.checked_total").attr('value','');
        }
        else
        {
            var  _true  = true_false.attr('checked', true);
            var trueok = _true.attr('value')+',';

            jQuery("tbody.checked_total").attr('value',trueok);

        }
    });
    /********************** Reset重置*****************************************
     * 点击重置动作；
     * */
    $('button.Reset').on('click',function (){
        //alert('重置');

        var uid = jQuery('select[name="uid"]')[0].selectedIndex = 0;//值下拉框为0请选择

        var keyname = jQuery('input[name="keyname"]').attr('value','');
        var dateTo = jQuery('input[name="dateTo"]').attr('value','');
        var dateEnd = jQuery('input[name="dateEnd"]').attr('value','');
        return false;//这需要返回false;否则会跳转页面；

    });





});


