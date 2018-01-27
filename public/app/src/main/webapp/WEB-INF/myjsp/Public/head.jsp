<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
    <title>中文 MAdmin | Index </title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="cache-control" content="no-cache">
    <meta http-equiv="expires" content="Thu, 19 Nov 1900 08:52:00 GMT">
    <link rel="shortcut icon" href="/images/icons/favicon.ico">
    <link rel="apple-touch-icon" href="/images/icons/favicon.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/images/icons/favicon-72x72.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/images/icons/favicon-114x114.png">
    <link type="text/css" rel="stylesheet" href="/vendors/jquery-ui-1.10.4.custom/css/ui-lightness/jquery-ui-1.10.4.custom.min.css">
    <link type="text/css" rel="stylesheet" href="/vendors/font-awesome/css/font-awesome.min.css">
    <link type="text/css" rel="stylesheet" href="/vendors/bootstrap/css/bootstrap.min.css">
    <link type="text/css" rel="stylesheet" href="/vendors/jplist/html/css/jplist-custom.css">
    <link type="text/css" rel="stylesheet" href="/vendors/animate.css/animate.css">
    <link type="text/css" rel="stylesheet" href="/vendors/jquery-pace/pace.css">
<link type="text/css" rel="stylesheet" href="/appjqcss/icheck/skins/all.css">


<%--<link type="text/css" rel="stylesheet" href="/appjqcss/icheck/skins/minimal/_all.css">--%>

    <link type="text/css" rel="stylesheet" href="/vendors/bootstrap-daterangepicker/daterangepicker-bs3.css">
    <!--Loading style-->
    <link type="text/css" rel="stylesheet" href="/jscss/css/themes/style1/orange-blue.css" class="default-style">
    <link type="text/css" rel="stylesheet" href="/jscss/css/themes/style1/orange-blue.css" id="theme-change" class="style-change color-change">
    <link type="text/css" rel="stylesheet" href="/jscss/css/style-responsive.css">

    <link type="text/css" rel="stylesheet" href="/appjqcss/common.css">
    <link type="text/css" rel="stylesheet" href="/appjqcss/Tipso/css/tipso.css">
    <script src="/jscss/jquery-1.10.2.min.js"></script>
    <script src="/jscss/jquery-migrate-1.2.1.min.js"></script>
    <script src="/jscss/jquery-ui.js"></script>

    <script src="/jscss/bootstrap/js/bootstrap.min.js"></script>
    <script src="/vendors/bootstrap-hover-dropdown/bootstrap-hover-dropdown.js"></script>

    <script src="/js/html5shiv.js"></script>
    <script src="/js/respond.min.js"></script>
    <script src="/vendors/metisMenu/jquery.metisMenu.js"></script>
    <script src="/vendors/slimScroll/jquery.slimscroll.js"></script>
    <script src="/vendors/jquery-cookie/jquery.cookie.js"></script>
    <script src="/appjqcss/icheck/icheck.js"></script>


    <script src="/vendors/jquery-notific8/jquery.notific8.min.js"></script>
    <script src="/vendors/jquery-highcharts/highcharts.js"></script>
    <script src="/js/jquery.menu.js"></script>
    <script src="/vendors/jquery-pace/pace.min.js"></script>
    <script src="/vendors/holder/holder.js"></script>
    <script src="/vendors/responsive-tabs/responsive-tabs.js"></script>
    <script src="/vendors/jquery-news-ticker/jquery.newsTicker.min.js"></script>
    <script src="/vendors/moment/moment.js"></script>

    <script src="/vendors/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
    <script src="/vendors/bootstrap-daterangepicker/daterangepicker.js"></script>
    <script src="/vendors/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
    <script src="/vendors/bootstrap-daterangepicker/daterangepicker.js"></script>

<!--TODO:装载右侧的公共常用插件-->
<link type="text/css" rel="stylesheet" href="/appjqcss/sco.message/sco.message.css">
<script src="/appjqcss/sco.message/sco.message.js"></script>
<script src="/appjqcss/Tipso/js/tipso.js"></script>
    <script src="/appjqcss/Layouts/main.js"></script>
    <script src="/appjqcss/test.js"></script>

   <link href="/appjqcss/kindeditor-4.1.10/themes/default/default.css" type="text/css" rel="stylesheet">
   <script type="text/javascript" charset="utf-8" src="/appjqcss/kindeditor-4.1.10/kindeditor-all-min.js"></script>
    <script type="text/javascript" charset="utf-8" src="/appjqcss/kindeditor-4.1.10/lang/zh_CN.js"></script>
    <link type="text/css" rel="stylesheet" href="/appjqcss/Layouts/CatenewTree_append.css">
    <script src="/appjqcss/Layouts/validate/jquery.validate.js"></script>
    <script src="/appjqcss/Layouts/validate/jquery.form.js"></script>
    <link type="text/css" rel="stylesheet" href="/appjqcss/bootstrap-datetimepicker/bootstrap-datetimepicker.css">
   <script src="/appjqcss/bootstrap-datetimepicker/bootstrap-datetimepicker.js"></script>

<!--TODO:装载右侧的自写的插件-->


    <script src="/appjqcss/Layouts/myPlugin.js"></script><%-- TODO:公用函数--%>
    <script src="/appjqcss/Layouts/myDate/myDatePlugin.js"></script><%-- TODO:时间函数--%>
    <script src="/appjqcss/Layouts/myprice/mypricePlugin.js"></script><%-- TODO:价格 函数 --%>

    <script src="/appjqcss/Layouts/LoadPage/LoadPage.js"></script><%-- TODO:click 点左加载右内容 函数--%>
    <%--TODO:公用 js --%>
    <script src="/appjqcss/Layouts/myCommon/MyjQeryValidatePlugin.js"></script><%--TODO：jquery表单验证 函数--%>
    <script src="/appjqcss/Layouts/validate/MyFunctionValidatePlugin.js"></script><%--TODO：MY 函数 验证 函数--%>
    <script src="/appjqcss/Layouts/myCommon/DomHtml.js"></script><%--TODO:所有静态HTML JS 调用 函数--%>
    <script src="/appjqcss/Layouts/myCommon/myKindEditorPlugin.js"></script><%--TODO：文本编辑器 函数--%>
    <script src="/appjqcss/Layouts/myCommon/TreeParamPlugin.js"></script><%--TODO：TREE 栏目树JS发函数--%>
    <script src="/appjqcss/Layouts/myCommon/AppRightFromPlugin.js"></script><%--TODO：右侧表表单 函数--%>
    <script src="/appjqcss/Layouts/myCommon/MySubmit.js"></script><%--TODO：右侧表单提交按钮 函数--%>

    <script src="/appjqcss/Layouts/myCommon/CommonTableList.js"></script><%--TODO：右侧公共列表 函数--%>


    <script src="/appjqcss/Layouts/myCommon/AppRight.js"></script><%--TODO：右侧公共总 JS 调用 函数--%>








<script type="text/javascript">
    var mvcbatis =
      {
        'APP': 'http://mvcbatis.app.com/',
      };
</script>

