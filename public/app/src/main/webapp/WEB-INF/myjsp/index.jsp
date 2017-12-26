<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%--<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" %>--%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html lang="en">
<head>
 <%--<include file="Public/head"/>--%>
 <%@ include file="/WEB-INF/myjsp/Public/head.jsp"%>
</head>
<body class="pace-running">
<div class="pace  pace-inactive">
<%-- <include file="Public/01"/>--%>
 <%@ include file="/WEB-INF/myjsp/Public/01.jsp"%>
</div>
<div>
 <%--<include file="Public/02"/>
 <include file="Public/top"/>--%>
 <%@ include file="/WEB-INF/myjsp/Public/02.jsp"%>
 <%@ include file="/WEB-INF/myjsp/Public/top.jsp"%>
 <div id="wrapper">
  <%--<include file="Public/Left"/>--%>
   <%@ include file="/WEB-INF/myjsp/Public/Left.jsp"%>
  <div id="page-wrapper">
   <%--<include file="Public/03"/>
   <include file="Public/public"/>--%>
   <%@ include file="/WEB-INF/myjsp/Public/03.jsp"%>
   <%@ include file="/WEB-INF/myjsp/Public/public.jsp"%>
   <!--public-->
  </div>
 </div>
</div>

<script type="text/javascript">

 (function (i, s, o, g, r, a, m) {
  i[ 'GoogleAnalyticsObject' ] = r;
  i[ r ] = i[ r ] || function () {
    (i[ r ].q = i[ r ].q || []).push(arguments)
   }, i[ r ].l = 1 * new Date ();
  a = s.createElement(o),
   m = s.getElementsByTagName(o)[ 0 ];
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m)
 }) (window, document, 'script', '', 'ga');
 ga ('create', 'UA-145464-14', 'auto');
 ga ('send', 'pageview');
</script>
</body>
</html>