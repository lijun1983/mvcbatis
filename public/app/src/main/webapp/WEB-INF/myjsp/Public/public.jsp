<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

<%--TODO: 右侧公共内容区--%>
<style type="text/css">
    /*.list td,
    .list th {
       box-sizing: border-box;
    }*/
</style>
<script type="text/javascript">
   function resize(){
     $(".list thead th").each(function(index){
       var width = $(this).width();
       $(".list .outer td:nth-child(" + index + ")").css("width", width);
       $(".list .leaf td:nth-child(" + index + ")").css("width", width);
     });
   }

   resize();
   $(window).resize(resize);

   $(".switch").click(function(){
     if($(this).parents(".outer").is(".open")){
       $(this).parents(".outer").removeClass("open").next(".inner").removeClass("open");
     }else{
       $(this).parents(".outer").addClass("open").next(".inner").addClass("open");
     }
   });

   $("tr.outer, tr.leaf").click(function(){
     $("tr.focus").removeClass("focus");
     $(this).addClass("focus");
   });
</script>
<div id="public" class="page-content">

   <%--<div class="row">
      <table class="table table-hover table-striped table-bordered table-advanced tablesorter">
   <thead class="TreeTitle">
    <tr>
     <th width="50px">
      <div class="icheckbox_square-blue" style="position: relative; left: 18%;">
       <input type="checkbox" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;" />
       <ins class="iCheck-helper" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins>
      </div></th>
     <th width="auto" align="left">栏目的ID</th>
     <th width="auto" align="left">parentId</th>
     <th width="auto" align="left">sort_order</th>
     <th width="auto" align="left">state</th>
     <th width="auto" align="left">created</th>
     <th width="auto" align="left">updated</th>
     <th width="auto" align="center">操作</th>

    </tr>
   </thead>
   <tbody class="cattablelist">
    <tr style="position: relative;" id="1" title="图书、音像、电子书刊" parentid="0" state="closed">
     <td width="50px" align="center">
      <div class="icheckbox_square-blue disabled" style="position: relative;">
       <input type="checkbox" value="1" disabled="disabled" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;" />
       <ins class="iCheck-helper" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins>
      </div></td>
     <td width="auto" align="left" key="栏目的ID" style="cursor: pointer;">图书、音像、电子书刊</td>
     <td width="auto" align="left" key="parentId">0</td>
     <td width="auto" align="left" key="sort_order">1</td>
     <td width="auto" align="left" key="state">closed</td>
     <td width="auto" align="left" key="created">2014-10-15 18:31:55</td>
     <td width="auto" align="left" key="updated">2014-10-15 18:31:55</td>
     <td class="buttonClick" width="auto" align="center" key="操作"><button type="button" class="btn btn-default btn-xs"><i class="fa fa-edit"></i>&nbsp; Edit </button>&nbsp; <button type="button" class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i>&nbsp; Delete </button></td>
<tbody>
       <tr class="next">
        <td></td>
        <td style="cursor: pointer;">下一级</td>
        <td>下一级</td>
        <td>下一级</td>
        <td>下一级</td>
        <td>下一级</td>
        <td>下</td>
        <td>下一级</td>
       </tr>
</tbody>
    </tr>


    <tr style="position: relative;" id="74" title="家用电器" parentid="0" state="closed">
     <td width="50px" align="center">
      <div class="icheckbox_square-blue disabled" style="position: relative;">
       <input type="checkbox" value="74" disabled="disabled" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;" />
       <ins class="iCheck-helper" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins>
      </div></td>
     <td width="auto" align="left" key="栏目的ID" style="cursor: pointer;">家用电器</td>
     <td width="auto" align="left" key="parentId">0</td>
     <td width="auto" align="left" key="sort_order">2</td>
     <td width="auto" align="left" key="state">closed</td>
     <td width="auto" align="left" key="created">2014-10-15 18:31:55</td>
     <td width="auto" align="left" key="updated">2014-10-15 18:31:55</td>
     <td class="buttonClick" width="auto" align="center" key="操作"><button type="button" class="btn btn-default btn-xs"><i class="fa fa-edit"></i>&nbsp; Edit </button>&nbsp; <button type="button" class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i>&nbsp; Delete </button></td>
    </tr>
    <tr class="next">
     <td></td>
     <td style="cursor: pointer;">下一级</td>
     <td>下一级</td>
     <td>下一级</td>
     <td>下一级</td>
     <td>下一级</td>
     <td>下</td>
     <td>下一级</td>
    </tr>
    <tr style="position: relative;" id="161" title="电脑、办公" parentid="0" state="closed">
     <td width="50px" align="center">
      <div class="icheckbox_square-blue disabled" style="position: relative;">
       <input type="checkbox" value="161" disabled="disabled" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;" />
       <ins class="iCheck-helper" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins>
      </div></td>
     <td width="auto" align="left" key="栏目的ID" style="cursor: pointer;">电脑、办公</td>
     <td width="auto" align="left" key="parentId">0</td>
     <td width="auto" align="left" key="sort_order">3</td>
     <td width="auto" align="left" key="state">closed</td>
     <td width="auto" align="left" key="created">2014-10-15 18:31:55</td>
     <td width="auto" align="left" key="updated">2014-10-15 18:31:55</td>
     <td class="buttonClick" width="auto" align="center" key="操作"><button type="button" class="btn btn-default btn-xs"><i class="fa fa-edit"></i>&nbsp; Edit </button>&nbsp; <button type="button" class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i>&nbsp; Delete </button></td>
    </tr>
    <tr class="next">
     <td></td>
     <td style="cursor: pointer;">下一级</td>
     <td>下一级</td>
     <td>下一级</td>
     <td>下一级</td>
     <td>下一级</td>
     <td>下</td>
     <td>下一级</td>
    </tr>
    <tr style="position: relative;" id="249" title="个护化妆" parentid="0" state="closed">
     <td width="50px" align="center">
      <div class="icheckbox_square-blue disabled" style="position: relative;">
       <input type="checkbox" value="249" disabled="disabled" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;" />
       <ins class="iCheck-helper" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins>
      </div></td>
     <td width="auto" align="left" key="栏目的ID" style="cursor: pointer;">个护化妆</td>
     <td width="auto" align="left" key="parentId">0</td>
     <td width="auto" align="left" key="sort_order">4</td>
     <td width="auto" align="left" key="state">closed</td>
     <td width="auto" align="left" key="created">2014-10-15 18:31:55</td>
     <td width="auto" align="left" key="updated">2014-10-15 18:31:55</td>
     <td class="buttonClick" width="auto" align="center" key="操作"><button type="button" class="btn btn-default btn-xs"><i class="fa fa-edit"></i>&nbsp; Edit </button>&nbsp; <button type="button" class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i>&nbsp; Delete </button></td>
    </tr>
    <tr class="next">
     <td></td>
     <td style="cursor: pointer;">下一级</td>
     <td>下一级</td>
     <td>下一级</td>
     <td>下一级</td>
     <td>下一级</td>
     <td>下</td>
     <td>下一级</td>
    </tr>
    <tr style="position: relative;" id="290" title="钟表" parentid="0" state="closed">
     <td width="50px" align="center">
      <div class="icheckbox_square-blue disabled" style="position: relative;">
       <input type="checkbox" value="290" disabled="disabled" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;" />
       <ins class="iCheck-helper" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins>
      </div></td>
     <td width="auto" align="left" key="栏目的ID" style="cursor: pointer;">钟表</td>
     <td width="auto" align="left" key="parentId">0</td>
     <td width="auto" align="left" key="sort_order">5</td>
     <td width="auto" align="left" key="state">closed</td>
     <td width="auto" align="left" key="created">2014-10-15 18:31:55</td>
     <td width="auto" align="left" key="updated">2014-10-15 18:31:55</td>
     <td class="buttonClick" width="auto" align="center" key="操作"><button type="button" class="btn btn-default btn-xs"><i class="fa fa-edit"></i>&nbsp; Edit </button>&nbsp; <button type="button" class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i>&nbsp; Delete </button></td>
    </tr>
    <tr class="next">
     <td></td>
     <td style="cursor: pointer;">下一级</td>
     <td>下一级</td>
     <td>下一级</td>
     <td>下一级</td>
     <td>下一级</td>
     <td>下</td>
     <td>下一级</td>
    </tr>
    <tr style="position: relative;" id="296" title="母婴" parentid="0" state="closed">
     <td width="50px" align="center">
      <div class="icheckbox_square-blue disabled" style="position: relative;">
       <input type="checkbox" value="296" disabled="disabled" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;" />
       <ins class="iCheck-helper" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins>
      </div></td>
     <td width="auto" align="left" key="栏目的ID" style="cursor: pointer;">母婴</td>
     <td width="auto" align="left" key="parentId">0</td>
     <td width="auto" align="left" key="sort_order">6</td>
     <td width="auto" align="left" key="state">closed</td>
     <td width="auto" align="left" key="created">2014-10-15 18:31:55</td>
     <td width="auto" align="left" key="updated">2014-10-15 18:31:55</td>
     <td class="buttonClick" width="auto" align="center" key="操作"><button type="button" class="btn btn-default btn-xs"><i class="fa fa-edit"></i>&nbsp; Edit </button>&nbsp; <button type="button" class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i>&nbsp; Delete </button></td>
    </tr>
    <tr class="next">
     <td></td>
     <td style="cursor: pointer;">下一级</td>
     <td>下一级</td>
     <td>下一级</td>
     <td>下一级</td>
     <td>下一级</td>
     <td>下</td>
     <td>下一级</td>
    </tr>
    <tr style="position: relative;" id="378" title="食品饮料、保健食品" parentid="0" state="closed">
     <td width="50px" align="center">
      <div class="icheckbox_square-blue disabled" style="position: relative;">
       <input type="checkbox" value="378" disabled="disabled" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;" />
       <ins class="iCheck-helper" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins>
      </div></td>
     <td width="auto" align="left" key="栏目的ID" style="cursor: pointer;">食品饮料、保健食品</td>
     <td width="auto" align="left" key="parentId">0</td>
     <td width="auto" align="left" key="sort_order">7</td>
     <td width="auto" align="left" key="state">closed</td>
     <td width="auto" align="left" key="created">2014-10-15 18:31:55</td>
     <td width="auto" align="left" key="updated">2014-10-15 18:31:55</td>
     <td class="buttonClick" width="auto" align="center" key="操作"><button type="button" class="btn btn-default btn-xs"><i class="fa fa-edit"></i>&nbsp; Edit </button>&nbsp; <button type="button" class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i>&nbsp; Delete </button></td>
    </tr>
    <tr class="next">
     <td></td>
     <td style="cursor: pointer;">下一级</td>
     <td>下一级</td>
     <td>下一级</td>
     <td>下一级</td>
     <td>下一级</td>
     <td>下</td>
     <td>下一级</td>
    </tr>
    <tr style="position: relative;" id="438" title="汽车用品" parentid="0" state="closed">
     <td width="50px" align="center">
      <div class="icheckbox_square-blue disabled" style="position: relative;">
       <input type="checkbox" value="438" disabled="disabled" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;" />
       <ins class="iCheck-helper" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins>
      </div></td>
     <td width="auto" align="left" key="栏目的ID" style="cursor: pointer;">汽车用品</td>
     <td width="auto" align="left" key="parentId">0</td>
     <td width="auto" align="left" key="sort_order">8</td>
     <td width="auto" align="left" key="state">closed</td>
     <td width="auto" align="left" key="created">2014-10-15 18:31:55</td>
     <td width="auto" align="left" key="updated">2014-10-15 18:31:55</td>
     <td class="buttonClick" width="auto" align="center" key="操作"><button type="button" class="btn btn-default btn-xs"><i class="fa fa-edit"></i>&nbsp; Edit </button>&nbsp; <button type="button" class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i>&nbsp; Delete </button></td>
    </tr>
    <tr class="next">
     <td></td>
     <td style="cursor: pointer;">下一级</td>
     <td>下一级</td>
     <td>下一级</td>
     <td>下一级</td>
     <td>下一级</td>
     <td>下</td>
     <td>下一级</td>
    </tr>
    <tr style="position: relative;" id="495" title="玩具乐器" parentid="0" state="closed">
     <td width="50px" align="center">
      <div class="icheckbox_square-blue disabled" style="position: relative;">
       <input type="checkbox" value="495" disabled="disabled" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;" />
       <ins class="iCheck-helper" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins>
      </div></td>
     <td width="auto" align="left" key="栏目的ID" style="cursor: pointer;">玩具乐器</td>
     <td width="auto" align="left" key="parentId">0</td>
     <td width="auto" align="left" key="sort_order">9</td>
     <td width="auto" align="left" key="state">closed</td>
     <td width="auto" align="left" key="created">2014-10-15 18:31:55</td>
     <td width="auto" align="left" key="updated">2014-10-15 18:31:55</td>
     <td class="buttonClick" width="auto" align="center" key="操作"><button type="button" class="btn btn-default btn-xs"><i class="fa fa-edit"></i>&nbsp; Edit </button>&nbsp; <button type="button" class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i>&nbsp; Delete </button></td>
    </tr>
    <tr class="next">
     <td></td>
     <td style="cursor: pointer;">下一级</td>
     <td>下一级</td>
     <td>下一级</td>
     <td>下一级</td>
     <td>下一级</td>
     <td>下</td>
     <td>下一级</td>
    </tr>
    <tr style="position: relative;" id="558" title="手机" parentid="0" state="closed">
     <td width="50px" align="center">
      <div class="icheckbox_square-blue disabled" style="position: relative;">
       <input type="checkbox" value="558" disabled="disabled" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;" />
       <ins class="iCheck-helper" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins>
      </div></td>
     <td width="auto" align="left" key="栏目的ID" style="cursor: pointer;">手机</td>
     <td width="auto" align="left" key="parentId">0</td>
     <td width="auto" align="left" key="sort_order">10</td>
     <td width="auto" align="left" key="state">closed</td>
     <td width="auto" align="left" key="created">2014-10-15 18:31:55</td>
     <td width="auto" align="left" key="updated">2014-10-15 18:31:55</td>
     <td class="buttonClick" width="auto" align="center" key="操作"><button type="button" class="btn btn-default btn-xs"><i class="fa fa-edit"></i>&nbsp; Edit </button>&nbsp; <button type="button" class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i>&nbsp; Delete </button></td>
    </tr>
    <tr class="next">
     <td></td>
     <td style="cursor: pointer;">下一级</td>
     <td>下一级</td>
     <td>下一级</td>
     <td>下一级</td>
     <td>下一级</td>
     <td>下</td>
     <td>下一级</td>
    </tr>
    <tr style="position: relative;" id="580" title="数码" parentid="0" state="closed">
     <td width="50px" align="center">
      <div class="icheckbox_square-blue disabled" style="position: relative;">
       <input type="checkbox" value="580" disabled="disabled" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;" />
       <ins class="iCheck-helper" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins>
      </div></td>
     <td width="auto" align="left" key="栏目的ID" style="cursor: pointer;">数码</td>
     <td width="auto" align="left" key="parentId">0</td>
     <td width="auto" align="left" key="sort_order">11</td>
     <td width="auto" align="left" key="state">closed</td>
     <td width="auto" align="left" key="created">2014-10-15 18:31:55</td>
     <td width="auto" align="left" key="updated">2014-10-15 18:31:55</td>
     <td class="buttonClick" width="auto" align="center" key="操作"><button type="button" class="btn btn-default btn-xs"><i class="fa fa-edit"></i>&nbsp; Edit </button>&nbsp; <button type="button" class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i>&nbsp; Delete </button></td>
    </tr>
    <tr class="next">
     <td></td>
     <td style="cursor: pointer;">下一级</td>
     <td>下一级</td>
     <td>下一级</td>
     <td>下一级</td>
     <td>下一级</td>
     <td>下</td>
     <td>下一级</td>
    </tr>
    <tr style="position: relative;" id="633" title="家居家装" parentid="0" state="closed">
     <td width="50px" align="center">
      <div class="icheckbox_square-blue disabled" style="position: relative;">
       <input type="checkbox" value="633" disabled="disabled" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;" />
       <ins class="iCheck-helper" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins>
      </div></td>
     <td width="auto" align="left" key="栏目的ID" style="cursor: pointer;">家居家装</td>
     <td width="auto" align="left" key="parentId">0</td>
     <td width="auto" align="left" key="sort_order">12</td>
     <td width="auto" align="left" key="state">closed</td>
     <td width="auto" align="left" key="created">2014-10-15 18:31:55</td>
     <td width="auto" align="left" key="updated">2014-10-15 18:31:55</td>
     <td class="buttonClick" width="auto" align="center" key="操作"><button type="button" class="btn btn-default btn-xs"><i class="fa fa-edit"></i>&nbsp; Edit </button>&nbsp; <button type="button" class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i>&nbsp; Delete </button></td>
    </tr>
    <tr class="next">
     <td></td>
     <td style="cursor: pointer;">下一级</td>
     <td>下一级</td>
     <td>下一级</td>
     <td>下一级</td>
     <td>下一级</td>
     <td>下</td>
     <td>下一级</td>
    </tr>
    <tr style="position: relative;" id="699" title="厨具" parentid="0" state="closed">
     <td width="50px" align="center">
      <div class="icheckbox_square-blue disabled" style="position: relative;">
       <input type="checkbox" value="699" disabled="disabled" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;" />
       <ins class="iCheck-helper" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins>
      </div></td>
     <td width="auto" align="left" key="栏目的ID" style="cursor: pointer;">厨具</td>
     <td width="auto" align="left" key="parentId">0</td>
     <td width="auto" align="left" key="sort_order">13</td>
     <td width="auto" align="left" key="state">closed</td>
     <td width="auto" align="left" key="created">2014-10-15 18:31:55</td>
     <td width="auto" align="left" key="updated">2014-10-15 18:31:55</td>
     <td class="buttonClick" width="auto" align="center" key="操作"><button type="button" class="btn btn-default btn-xs"><i class="fa fa-edit"></i>&nbsp; Edit </button>&nbsp; <button type="button" class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i>&nbsp; Delete </button></td>
    </tr>
    <tr class="next">
     <td></td>
     <td style="cursor: pointer;">下一级</td>
     <td>下一级</td>
     <td>下一级</td>
     <td>下一级</td>
     <td>下一级</td>
     <td>下</td>
     <td>下一级</td>
    </tr>
    <tr style="position: relative;" id="749" title="服饰内衣" parentid="0" state="closed">
     <td width="50px" align="center">
      <div class="icheckbox_square-blue disabled" style="position: relative;">
       <input type="checkbox" value="749" disabled="disabled" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;" />
       <ins class="iCheck-helper" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins>
      </div></td>
     <td width="auto" align="left" key="栏目的ID" style="cursor: pointer;">服饰内衣</td>
     <td width="auto" align="left" key="parentId">0</td>
     <td width="auto" align="left" key="sort_order">14</td>
     <td width="auto" align="left" key="state">closed</td>
     <td width="auto" align="left" key="created">2014-10-15 18:31:55</td>
     <td width="auto" align="left" key="updated">2014-10-15 18:31:55</td>
     <td class="buttonClick" width="auto" align="center" key="操作"><button type="button" class="btn btn-default btn-xs"><i class="fa fa-edit"></i>&nbsp; Edit </button>&nbsp; <button type="button" class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i>&nbsp; Delete </button></td>
    </tr>
    <tr class="next">
     <td></td>
     <td style="cursor: pointer;">下一级</td>
     <td>下一级</td>
     <td>下一级</td>
     <td>下一级</td>
     <td>下一级</td>
     <td>下</td>
     <td>下一级</td>
    </tr>
    <tr style="position: relative;" id="865" title="鞋靴" parentid="0" state="closed">
     <td width="50px" align="center">
      <div class="icheckbox_square-blue disabled" style="position: relative;">
       <input type="checkbox" value="865" disabled="disabled" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;" />
       <ins class="iCheck-helper" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins>
      </div></td>
     <td width="auto" align="left" key="栏目的ID" style="cursor: pointer;">鞋靴</td>
     <td width="auto" align="left" key="parentId">0</td>
     <td width="auto" align="left" key="sort_order">15</td>
     <td width="auto" align="left" key="state">closed</td>
     <td width="auto" align="left" key="created">2014-10-15 18:31:55</td>
     <td width="auto" align="left" key="updated">2014-10-15 18:31:55</td>
     <td class="buttonClick" width="auto" align="center" key="操作"><button type="button" class="btn btn-default btn-xs"><i class="fa fa-edit"></i>&nbsp; Edit </button>&nbsp; <button type="button" class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i>&nbsp; Delete </button></td>
    </tr>
    <tr class="next">
     <td></td>
     <td style="cursor: pointer;">下一级</td>
     <td>下一级</td>
     <td>下一级</td>
     <td>下一级</td>
     <td>下一级</td>
     <td>下</td>
     <td>下一级</td>
    </tr>
    <tr style="position: relative;" id="903" title="礼品箱包" parentid="0" state="closed">
     <td width="50px" align="center">
      <div class="icheckbox_square-blue disabled" style="position: relative;">
       <input type="checkbox" value="903" disabled="disabled" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;" />
       <ins class="iCheck-helper" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins>
      </div></td>
     <td width="auto" align="left" key="栏目的ID" style="cursor: pointer;">礼品箱包</td>
     <td width="auto" align="left" key="parentId">0</td>
     <td width="auto" align="left" key="sort_order">16</td>
     <td width="auto" align="left" key="state">closed</td>
     <td width="auto" align="left" key="created">2014-10-15 18:31:55</td>
     <td width="auto" align="left" key="updated">2014-10-15 18:31:55</td>
     <td class="buttonClick" width="auto" align="center" key="操作"><button type="button" class="btn btn-default btn-xs"><i class="fa fa-edit"></i>&nbsp; Edit </button>&nbsp; <button type="button" class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i>&nbsp; Delete </button></td>
    </tr>
    <tr class="next">
     <td></td>
     <td style="cursor: pointer;">下一级</td>
     <td>下一级</td>
     <td>下一级</td>
     <td>下一级</td>
     <td>下一级</td>
     <td>下</td>
     <td>下一级</td>
    </tr>
    <tr style="position: relative;" id="963" title="珠宝" parentid="0" state="closed">
     <td width="50px" align="center">
      <div class="icheckbox_square-blue disabled" style="position: relative;">
       <input type="checkbox" value="963" disabled="disabled" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;" />
       <ins class="iCheck-helper" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins>
      </div></td>
     <td width="auto" align="left" key="栏目的ID" style="cursor: pointer;">珠宝</td>
     <td width="auto" align="left" key="parentId">0</td>
     <td width="auto" align="left" key="sort_order">17</td>
     <td width="auto" align="left" key="state">closed</td>
     <td width="auto" align="left" key="created">2014-10-15 18:31:55</td>
     <td width="auto" align="left" key="updated">2014-10-15 18:31:55</td>
     <td class="buttonClick" width="auto" align="center" key="操作"><button type="button" class="btn btn-default btn-xs"><i class="fa fa-edit"></i>&nbsp; Edit </button>&nbsp; <button type="button" class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i>&nbsp; Delete </button></td>
    </tr>
    <tr class="next">
     <td></td>
     <td style="cursor: pointer;">下一级</td>
     <td>下一级</td>
     <td>下一级</td>
     <td>下一级</td>
     <td>下一级</td>
     <td>下</td>
     <td>下一级</td>
    </tr>
    <tr style="position: relative;" id="1031" title="运动健康" parentid="0" state="closed">
     <td width="50px" align="center">
      <div class="icheckbox_square-blue disabled" style="position: relative;">
       <input type="checkbox" value="1031" disabled="disabled" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;" />
       <ins class="iCheck-helper" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins>
      </div></td>
     <td width="auto" align="left" key="栏目的ID" style="cursor: pointer;">运动健康</td>
     <td width="auto" align="left" key="parentId">0</td>
     <td width="auto" align="left" key="sort_order">18</td>
     <td width="auto" align="left" key="state">closed</td>
     <td width="auto" align="left" key="created">2014-10-15 18:31:55</td>
     <td width="auto" align="left" key="updated">2014-10-15 18:31:55</td>
     <td class="buttonClick" width="auto" align="center" key="操作"><button type="button" class="btn btn-default btn-xs"><i class="fa fa-edit"></i>&nbsp; Edit </button>&nbsp; <button type="button" class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i>&nbsp; Delete </button></td>
    </tr>
    <tr class="next">
     <td></td>
     <td style="cursor: pointer;">下一级</td>
     <td>下一级</td>
     <td>下一级</td>
     <td>下一级</td>
     <td>下一级</td>
     <td>下</td>
     <td>下一级</td>
    </tr>
    <tr style="position: relative;" id="1147" title="彩票、旅行、充值、票务" parentid="0" state="closed">
     <td width="50px" align="center">
      <div class="icheckbox_square-blue disabled" style="position: relative;">
       <input type="checkbox" value="1147" disabled="disabled" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;" />
       <ins class="iCheck-helper" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins>
      </div></td>
     <td width="auto" align="left" key="栏目的ID" style="cursor: pointer;">彩票、旅行、充值、票务</td>
     <td width="auto" align="left" key="parentId">0</td>
     <td width="auto" align="left" key="sort_order">19</td>
     <td width="auto" align="left" key="state">closed</td>
     <td width="auto" align="left" key="created">2014-10-15 18:31:55</td>
     <td width="auto" align="left" key="updated">2014-10-15 18:31:55</td>
     <td class="buttonClick" width="auto" align="center" key="操作"><button type="button" class="btn btn-default btn-xs"><i class="fa fa-edit"></i>&nbsp; Edit </button>&nbsp; <button type="button" class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i>&nbsp; Delete </button></td>
    </tr>
    <tr class="next">
     <td></td>
     <td style="cursor: pointer;">下一级</td>
     <td>下一级</td>
     <td>下一级</td>
     <td>下一级</td>
     <td>下一级</td>
     <td>下</td>
     <td>下一级</td>
    </tr>
   </tbody>
  </table>
   </div>--%>
   <div class="row">
      <table id="listTable" class="list  table table-hover table-striped table-bordered table-advanced tablesorter">
         <thead>
          <tr>
           <th>名称</th>
           <th>排序</th>
          </tr>
         </thead>
         <tbody>
          <tr class="outer">
           <td><span class="switch"></span><span class="ico"></span><span class="name">A</span></td>
           <td>1</td>
          </tr>
          <tr class="inner">
           <td colspan="2">
            <table class="list">
             <tbody>
              <tr class="outer">
               <td><span class="text-indent"></span><span class="switch"></span><span class="ico"></span><span class="name">B</span></td>
               <td>2</td>
              </tr>
              <tr class="inner">
               <td colspan="2">
                <table class="list">
                 <tbody>
                  <tr class="leaf">
                   <td><span class="text-indent"></span><span class="text-indent"></span><span class="switch"></span><span class="ico"></span><span class="name">C</span></td>
                   <td>3</td>
                  </tr>
                 </tbody>
                </table> </td>
              </tr>
             </tbody>
            </table> </td>
          </tr>
          <tr class="leaf">
           <td><span class="switch"></span><span class="ico"></span><span class="name">D</span></td>
           <td>4</td>
          </tr>
          <tr class="outer">
           <td><span class="switch"></span><span class="ico"></span><span class="name">E</span></td>
           <td>5</td>
          </tr>
          <tr class="inner">
           <td colspan="2">
            <table class="list">
             <tbody>
              <tr class="leaf">
               <td><span class="text-indent"></span><span class="switch"></span><span class="ico"></span><span class="name">F</span></td>
               <td>6</td>
              </tr>
             </tbody>
            </table> </td>
          </tr>
         </tbody>
        </table>
   </div>
</div>

