var myapp = MyjQeryValidatePlugin = {


  myItemFromValidate: function (myFrom,from)
  {
    if(from == 'item')
    {
      //TODO：扩展对像自定义方法 appjqcss/Layouts/validate/validate-methods.js 中
      jQuery.validator.addMethod("isMobile", function (value, element)
      {
        var length = value.length;
        return this.optional(element) || (length == 11 && /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(value));
      }, "请正确填写您的手机号码。");
      myFrom.validate({
        //onsubmit:true,// 是否在提交是验证
        //onclick:true,// 是否在提交是验证
        //onfocusout:true,// 是否在获取焦点时验证
        errorElement: "span",//用什么标签标记错误，默认是 label，可以改成 em。	"label"
        errorClass: "error",//String	指定错误提示的 css 类名，可以自定义错误提示的样式。	"error" appjqcss/Layouts/item/Cat/CatenewTree_append.css:34
        //success: "valid",//意思是当验证成功的时候的class名称。
        errorPlacement: function (error, element)
        {
          //TODO:error 提示位置 error是错误提示元素span对象  element是触发错误的input对象
          $(element).css({"position": "relative",});
          $(element).siblings('span').show().text(error.text());
          $(element).siblings('span').css({"position": "absolute", "right": "6%", "top": "-5px", "color": "#097992", "display": "inline"});
        },
        success: function (element)
        {
          //TODO：验证 成功清空当前的 text()
          $(element).siblings('span').text();//成功清空 text()
          //$(element).siblings('span').text($(element).siblings('span') + '验证通过');//成功清空 text()
        },
        onfocusout: function(element){
          //TODO:光标 失去焦点时做验证
          $(element).valid();
        },
        rules: {
          title: {required: true, minlength: 2},
          cid: {required: true, digits: true,},
          sellPoint: {required: true, minlength: 2},
          priceView: {required: true, digits: true,},
          num: {required: true, digits: true,},
          //test: {isMobile: true}, //扩展对像方法调用  请正确填写您的手机号码 测试

        },
        messages: {
          title: {required: "没有输入名称", minlength: "长度是2-4个字符"},
          cid: {required: "请选择栏目",},
          sellPoint: {required: "没有输入商品卖点", minlength: "长度是2个字符"},
          priceView: {required: "没有输入 价格",},
          num: {required: "没有输入 num",},
          //test: {isMobile: "请正确填写您的手机号码",}//扩展对像方法调用  请正确填写您的手机号码 测试


        },
      });
    }else if(from == 'param')
    {

    }



  },
  myParamFromValidate: function (myFrom,from)
  {
    if(from == 'param')
    {
      myFrom.validate({
        //onsubmit:true,// 是否在提交是验证
        //onclick:true,// 是否在提交是验证
        //onfocusout:true,// 是否在获取焦点时验证
        errorElement: "span",//用什么标签标记错误，默认是 label，可以改成 em。	"label"
        errorClass: "error",//String	指定错误提示的 css 类名，可以自定义错误提示的样式。	"error" appjqcss/Layouts/item/Cat/CatenewTree_append.css:34
        //success: "valid",//意思是当验证成功的时候的class名称。
        errorPlacement: function (error, element)
        {
          //TODO:error 提示位置 error是错误提示元素span对象  element是触发错误的input对象
          $(element).css({"position": "relative",});
          $(element).siblings('span').show().text(error.text());
          $(element).siblings('span').css({"position": "absolute", "right": "6%", "top": "-5px", "color": "#097992", "display": "inline"});
        },
        success: function (element)
        {
          //TODO：验证 成功清空当前的 text()
          $(element).siblings('span').text();//成功清空 text()
          //$(element).siblings('span').text($(element).siblings('span') + '验证通过');//成功清空 text()
        },
        onfocusout: function(element){
          //TODO:光标 失去焦点时做验证
          $(element).valid();
        },
        rules: {
          cid: {required: true, digits: true,},

        },
        messages: {
          cid: {required: "请选择栏目",},
        },
      });
    }



  },


};
$.fn.extend({
  test: function ()
  {
    //alert('test')
    console.log('test')
  },


});
