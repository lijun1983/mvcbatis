<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

<%--<script src="/appjqcss/Layouts/myCommon/MyjQeryValidatePlugin.js"></script>--%>
<script src="/appjqcss/Layouts/strobjarray/strobjarray.js"></script>
<script src="/appjqcss/Layouts/AppModelForm/item/Item-This.js"></script>
<div class="row" id="appright_common">
 <%--TODO: table列表 按钮区 查询表单区- --%>
    <div class="col-lg-12 RightListDom" >
       <div class="panel right_select" style="margin-bottom: 0px;">
        <div class="panel-body">
         <%--TODO: 列表模板区2-按钮区--%>
          <div class="demo-btn reghtaddeditbutton" style="margin-top:0px;float: left;">
            <button type="button" typename="add" class="A btn btn-default btn-square" style="padding:2px 12px;"><i class="glyphicon glyphicon-check"></i>新 增 </button>
           <button type="button" typename="edit"  class="B btn btn-primary btn-square" style="padding:2px 12px"><i class="glyphicon glyphicon-check"></i>修 改 </button>
           <button type="button" typename="del"  class="C btn btn-success btn-square" style="padding:2px 12px"><i class="glyphicon glyphicon-check"></i>删 除 </button>
           <button type="button" typename="xuan"  class="F btn btn-info btn-square" style="padding:2px 12px"><i class="glyphicon glyphicon-check"></i>返 选 </button>
            <button type="button" typename="retu"  class="G btn btn-info btn-square" style="padding:2px 12px"><i class="glyphicon glyphicon-check"></i>返回列表 </button>
          </div>
          <%--TODO: 列表模板区2-查询表单区--%>
           <form action="#" id="from1" style="height: 31px;">
              <div class="">
               <div class="row">
                <div class="col-md-2" style="height: 31px;width: 13%;">
                 <div class="form-group">
                  <select name="uid" class="form-control" style="height: 25px;padding:0px;"> <option value="0">请选择..</option> </select>
                 </div>
                </div>
                <div class="col-md-2" style="height: 31px;width: 13%;">
                 <div class="form-group">
                  <div class="input-icon right">
                   <i class="fa fa-user" style="margin: 5px 2px 4px 10px;"></i>
                   <input id="s" type="text" placeholder="关键字" class="form-control" style="height: 25px;" />
                  </div>
                 </div>
                </div>
                <div class="col-md-2" style="height: 31px;">
                 <div class="form-group">
                  <div class="input-group">
                   <input type="text" name="" class="date_a form-control" placeholder="输入开始时间" style="height: 25px;" /><%--dateTo--%>
                   <span class="input-group-addon" style="padding: 0px;"> <i class="fa fa-calendar"></i> </span>
                  </div>
                 </div>
                </div>
                <div class="col-md-2" style="height: 31px;">
                 <div class="form-group">
                  <div class="input-group">
                   <input type="text" name="dateEnd" class="date_b form-control" placeholder="输入结束时间" style="height: 25px;" />
                   <span class="input-group-addon" style="padding: 0px;"> <i class="fa fa-calendar"></i> </span>
                  </div>
                 </div>
                </div>
               </div>
              </div>
              <div class="demo-btn" style="position: relative;left:90%;top:-30px;width:10%;">
               <button type="button" class="btn btn-danger btn-square selecpage" style="padding:2px 12px"><i class="glyphicon glyphicon-check "></i>查 询 </button>
               <button type="button" class="btn btn-warning btn-square selecpage" style="padding:2px 12px"><i class="glyphicon glyphicon-check "></i>重 置 </button>
              </div>
             </form>
          </div>
       </div>
      <%--TODO:列表--%>
       <div class="panel right_listpage" id="right_listpage" style=""><%--display: none--%>
         <div class="panel-body" style="padding-top: 0px;">
           <div class="col-lg-10 pageinfo">
                <div class="pagination-panel">
                 Page &nbsp;
                 <a href="#" class="btn btn-sm btn-default btn-prev"><i class="fa fa-angle-left"></i></a>&nbsp;
                 <input type="text" maxlenght="5" value="1" class="pagination-panel-input form-control input-mini input-inline input-sm text-center" style="height:29px;padding: 5px; 10px; margin-left:5px;margin-right: 5px;"/>&nbsp;
                 <a href="#" class="btn btn-sm btn-default btn-prev"><i class="fa fa-angle-right"></i></a>&nbsp; of 6 | View &nbsp;
                 <select class="form-control input-xsmall input-sm input-inline">
                   <option value="20" selected="selected">20</option> <option value="50">50</option> <option value="100">100</option> <option value="150">150</option> <option value="-1">All</option>
                 </select>
                  <label class="pageSize">每页显示 N 条记录 </label>
                  <label class="startRow">当前显示  第N  TO</label>
                  <label class="endRow">N 条记录|</label>
                  <label class="total">共 N 条记录|</label>
                  <label class="pages">合计：N 页|</label>
                  <label class="pageNum">当前是第 N 页</label>
                 <%--&nbsp; records | Found total 58 records--%>
                </div>
               </div>
           <%--TODO: 列表模板区2-table列表--%><%--table-hover table-striped table-bordered table-advanced tablesorter--%>
           <table id="mytablelist" class=" table table-hover table-striped table-bordered table-advanced tablesorter" style="margin-bottom:0px;  ">
            <thead class="thead_List">
            <tr class="thead_List">
             <%--<th width="2%">
               <input type="checkbox">
             </th>
             <th width="7%">id #</th>
             <th>Title</th>
             <th width="10%">Cid</th>
             <th width="10%">num</th>
             <th width="7%">price</th>
             <th width="10%">sellPoint</th>
             <th width="15%">created</th>
             <th width="15%">updated</th>
             <th width="7%">status</th>
             <th width="7%">status</th>
             <th width="7%">status</th>
             <th width="12%">操 作 </th>--%>

            </tr>
           </thead>
            <tbody class="tablelist" value="5,">
            <%--<tr>
             <td>
               <input type="checkbox" value="5">
             </td>
             <td>1</td>
             <td>Henry</td>
             <td>United States</td>
             <td> <select class="form-control"> <option>Male</option> <option>Female</option> <option>Other</option> </select> </td>
             <td> <span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input type="text" value="32" class="spinner input-mini ui-spinner-input" aria-valuenow="32" autocomplete="off"
                                                                                            role="spinbutton" /><a class="ui-spinner-button ui-spinner-up ui-corner-tr" tabindex="-1"><span
                 class="ui-icon ui-icon-triangle-1-n">▲</span></a><a class="ui-spinner-button ui-spinner-down ui-corner-br" tabindex="-1"><span class="ui-icon ui-icon-triangle-1-s">▼</span></a></span> </td>
             <td>20-05-2014</td>
             <td>
              <div data-hover="tooltip" title="" class="progress progress-xs mbs" data-original-title="75%">
               <div role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%;" class="progress-bar progress-bar-green">
                <span class="sr-only">75% Complete</span>
               </div>
              </div> </td>
             <td><span class="label label-sm label-success">Approved</span> </td>
             <td><span class="label label-sm label-success">Approved</span> </td>
             <td><span class="label label-sm label-success">Approved</span> </td>
              <td><button type="button" data-toggle="tooltip" data-placement="left" title="" class="btn btn-default mbs" data-original-title="Tooltip on left">Tooltip on left</button></td>
             <td> <button type="button" class="btn btn-default btn-xs"><i class="fa fa-edit"></i>&nbsp; Edit </button>&nbsp; <button type="button" class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i>&nbsp; Delete </button> </td>
            </tr>
            <tr>
             <td>
               <input type="checkbox" value="56">
             </td>
             <td>2</td>
             <td>John</td>
             <td>United States</td>
             <td> <select class="form-control"> <option>Male</option> <option>Female</option> <option>Other</option> </select> </td>
             <td> <span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input type="text" value="45" class="spinner input-mini ui-spinner-input" aria-valuenow="45" autocomplete="off"
                                                                                            role="spinbutton" /><a class="ui-spinner-button ui-spinner-up ui-corner-tr" tabindex="-1"><span
                 class="ui-icon ui-icon-triangle-1-n">▲</span></a><a class="ui-spinner-button ui-spinner-down ui-corner-br" tabindex="-1"><span class="ui-icon ui-icon-triangle-1-s">▼</span></a></span> </td>
             <td>20-05-2014</td>
             <td>
              <div data-hover="tooltip" title="" class="progress progress-xs mbs" data-original-title="40%">
               <div role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%;" class="progress-bar progress-bar-red six-sec-ease-in-out">
                <span class="sr-only">40% Complete</span>
               </div>
              </div> </td>
             <td><span class="label label-sm label-info">Pending</span> </td>
               <td><span class="label label-sm label-success">Approved</span> </td>
             <td><span class="label label-sm label-success">Approved</span> </td>
              <td><button type="button" data-toggle="tooltip" data-placement="left" title="" class="btn btn-default mbs" data-original-title="Tooltip on left">Tooltip on left</button></td>
             <td> <button type="button" class="btn btn-default btn-xs"><i class="fa fa-edit"></i>&nbsp; Edit </button>&nbsp; <button type="button" class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i>&nbsp; Delete </button> </td>
            </tr>
            <tr>
             <td>
               <input type="checkbox" value="88">
             </td>
             <td>2</td>
             <td>John</td>
             <td>United States</td>
             <td> <select class="form-control"> <option>Male</option> <option>Female</option> <option>Other</option> </select> </td>
             <td> <span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input type="text" value="45" class="spinner input-mini ui-spinner-input" aria-valuenow="45" autocomplete="off"
                                                                                            role="spinbutton" /><a class="ui-spinner-button ui-spinner-up ui-corner-tr" tabindex="-1"><span
                 class="ui-icon ui-icon-triangle-1-n">▲</span></a><a class="ui-spinner-button ui-spinner-down ui-corner-br" tabindex="-1"><span class="ui-icon ui-icon-triangle-1-s">▼</span></a></span> </td>
             <td>20-05-2014</td>
             <td>
              <div data-hover="tooltip" title="" class="progress progress-xs mbs" data-original-title="40%">
               <div role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%;" class="progress-bar progress-bar-red six-sec-ease-in-out">
                <span class="sr-only">40% Complete</span>
               </div>
              </div> </td>
             <td><span class="label label-sm label-info">Pending</span> </td>
               <td><span class="label label-sm label-success">Approved</span> </td>
             <td><span class="label label-sm label-success">Approved</span> </td>
              <td><button type="button" data-toggle="tooltip" data-placement="left" title="" class="btn btn-default mbs" data-original-title="Tooltip on left">Tooltip on left</button></td>
             <td> <button type="button" class="btn btn-default btn-xs"><i class="fa fa-edit"></i>&nbsp; Edit </button>&nbsp; <button type="button" class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i>&nbsp; Delete </button> </td>
            </tr>--%>
           </tbody>

           </table>
           <%--TODO：页码区--%>

          <div class="" id="page" page_type="Index">
              <div class="dataTables_paginate paging_simple_numbers page_List" id="page_List"  typenaem="Index">
               <ul class="pager" style="margin:10px 0px;">
                <li class="paginate_button previous disabled"><span>第一页</span></li>
                <li class="paginate_button previous disabled"><span>上 一页</span></li>
                <li class="paginate_button "><a href="#" data-page="1" class="B colour">1</a></li>
                <li class="paginate_button next disabled"><span>下 一页</span></li>
                <li class="paginate_button next disabled"><span>末 页</span></li>
               </ul>
              </div>
             </div>

          </div>
       </div>
     </div>
    <%--TODO: addEdit 模板--%>
    <div class="col-lg-12 addEdit" style=""><%--display: none;--%>
     <ul class="nav ul-edit nav-tabs responsive hidden-xs hidden-sm">
      <li class="active"><a href="#tab-form-actions" data-toggle="tab">基本 信息</a> </li>
       <li class=""><a href="#ya" data-toggle="tab">规格 参数</a> </li>
      <li class=""><a href="#yb" data-toggle="tab">筛选 参数</a> </li>
      <li class=""><a href="#tab-two-columns" data-toggle="tab">商品 描述</a> </li>
      <li class=""><a href="#tab-form-seperated" data-toggle="tab">会员 & 价格</a> </li>
      <li class=""><a href="#tab-form-bordered" data-toggle="tab">商品 相册</a> </li>

      <li class=""><a href="#emta" data-toggle="tab">EMTA 信息</a> </li>
     </ul>
    <%--TODO: 添加表单 TAB 内容区--%>
    <form action="#" id="from2" formtype="" class="horizontal-form" method="post">
     <div style=" margin-top: 5px !important;" class="tab-content responsive hidden-xs hidden-sm"><%--del  pan mtl mbn--%>
       <div id="tab-form-actions" class="tab-pane fade active in">
        <div class="panel-body pan">
            <div class="form-body pal" style="padding-top: 0px !important;">
              <div class="row">
               <%--TODO: 表单 --%>
               <div class="col-md-6">
                   <div class="form-group">
                       <label for="#" class="control-label">name:</label>
                       <input id="#" type="text"  placeholder="name" class="form-control " style="">
                       <span class="help-block text-danger" style="display: none;">error</span>
                   </div>
               </div>
               <div class="col-md-6">
                  <div class="form-group">
                       <label for="#" class="control-label">请选择栏目:</label><%--90--%>
                       <input id="cid" name="cid" type="text" value="" title="" placeholder="请选择栏目" class="form-control" style="">
                       <%--<button type="button" data-target="#modal-full-width" data-toggle="modal" class="btn btn-yellow" style="position: absolute;top:23px;left: 75%;height:25px;padding:0px;width: 20% !important;">选 择</button>--%>
                       <button type="button" data-target="#modal-full-width" data-toggle="modal" class="btn btn-blue" style="position: absolute;top:23px;left: 75%;height:25px;padding:0px;width: 20% !important;">选 择</button>
                    <span class="help-block text-danger" style="display: none;">error</span>
                   </div>
               </div>
               <div class="col-md-6">
                   <div class="form-group">
                       <label for="#" class="control-label">name:</label>
                       <select id="#" class="form-control">
                           <option value="">Male</option>
                           <option value="">Female</option>
                       </select>
                       <span class="help-block text-danger" style="display: none;">error</span>
                   </div>
               </div>
                <div class="col-md-6">
                   <div class="form-group">
                       <label for="#" class="control-label">name:</label>
                       <input id="#" type="text" placeholder="name" class="form-control" style="position: relative;">

                       <span class="help-block text-danger" style="display: none;">error</span>
                   </div>
               </div>
               <div class="col-md-6">
                   <div class="form-group">
                       <label for="#" class="control-label">name:</label>
                       <input id="#" type="text" placeholder="priceView" class="form-control" style="position: relative;">
                     <input type="hidden" name="price"/>
                       <span class="help-block text-danger" style="display: none;">error</span>
                   </div>
               </div>
               <div class="col-md-6">
                   <div class="form-group">
                       <label for="#" class="control-label">name:</label>
                       <input id="#" type="text" placeholder="name" class="form-control" style="position: relative;">

                       <span class="help-block text-danger"style="display: none;">error</span>
                   </div>
               </div>
               <div class="col-md-6">
                   <div class="form-group">
                       <label for="#" class="control-label">name:</label>
                       <input id="#" type="text" placeholder="name" class="form-control" style="position: relative;">
                       <span class="help-block text-danger"style="display: none;">error</span>
                   </div>
               </div>
               <div class="col-md-6">
                   <div class="form-group">
                       <label for="#" class="control-label">name:</label>
                       <input id="#" type="text" placeholder="name" class="form-control" style="position: relative;">
                       <span class="help-block text-danger"style="display: none;">error</span>
                   </div>
               </div>
               <div class="col-md-6">
                   <div class="form-group">
                       <label for="#" class="control-label">name:</label>
                       <input id="#" type="text" placeholder="name" class="form-control" style="position: relative;">
                       <select id="#" class="form-control" style="position: absolute;top:23px;right: 5%;width: 30% !important; ">
                           <option value="0">件</option>
                           <option value="1">箱</option>
                           <option value="2">个</option>
                           <option value="3">台</option>
                           <option value="4">部</option>
                           <option value="5">份</option>
                         </select>
                       <span class="help-block text-danger"style="display: none;">error</span>
                   </div>

               </div>
               <div class="col-md-2 hot">
                 <div class="form-group">
                   <label for="#" class="control-label">推荐到楼层:</label>
                   <div class="checkbox-list">
                      <label class="checkbox-inline" style="margin-right: 20px;">
                          <input id="inlineCheckbox1" type="checkbox" value="1" />&nbsp;    疯狂抢购</label>
                      <label class="checkbox-inline">
                          <input id="inlineCheckbox2" type="checkbox" value="2" />&nbsp;   热卖商品</label>
                      <label class="checkbox-inline">
                          <input id="inlineCheckbox3" type="checkbox" value="3" />&nbsp;   推荐商品</label>
                      <label class="checkbox-inline">
                          <input id="inlineCheckbox4" type="checkbox" value="4" />&nbsp;   新品上架</label>
                      <label class="checkbox-inline">
                          <input id="inlineCheckbox5" type="checkbox" value="5" />&nbsp;   猜您喜欢</label>
                      <label class="checkbox-inline">
                          <input id="inlineCheckbox6" type="checkbox" value="6" />&nbsp;   将商品推荐楼层</label>
                  </div>
                 </div>
              </div>
              </div>
              <div class="row">
                <div class="col-md-6" id="itemParamId" style="display: none;">
                   <div class="form-group">
                       <label for="#" class="control-label">itemParamId:</label>
                       <input  type="text" name="itemCatId" placeholder="itemParamId"  class="form-control" style="position: relative;">
                       <span class="help-block text-danger"style="display: none;">error</span>
                   </div>

               </div>
                <div class="col-md-6" id="itemParamsCSS"  style="display: none;">
                   <div class="form-group">
                       <label for="#" class="control-label">商品规格模板:获取 tb_item_param 表中取</label>
                       <input  type="text" name="junitemParams" placeholder="itemParams"  class="form-control" style="position: relative;">
                       <span class="help-block text-danger"style="display: none;">error</span>
                   </div>
               </div>
                <div class="col-md-6" id="itemParamsCSSnew"  style="display: none;">
                   <div class="form-group">
                       <label for="#" class="control-label">子分组项的值:存tb_item_param_item 表</label>
                       <input  type="text" name="itemParams" placeholder="itemParams"  class="form-control" style="position: relative;">
                       <span class="help-block text-danger"style="display: none;">error</span>
                   </div>
               </div>

              </div>
              <%--TODO:促销--%>
              <div class="row">
                 <div class="col-md-6" style="margin-top: 25px;">
                  <label class="radio-inline">
                    <input type="radio" value="不促销" name="gender" />&nbsp; 是否促销
                  </label>
               </div>
               <div class="col-md-2 sp" style="display: none;">
                 <div class="form-group">
                  <label for="#" class="control-label">促销价:</label>
                  <input id="#" type="text" placeholder="促销价" class="form-control" style="position: relative; height: 25px;" />
                  <span class="help-block text-danger"style="display: none;">error</span>
                 </div>
                </div>
                 <div class="col-md-2 sp" style="display: none;">
                   <div class="form-group">
                     <label for="#" class="control-label">输入开始时间:</label>
                     <input type="text" name="dateTo" class="date_c form-control" placeholder="输入开始时间" style="height: 25px;"><%--dateTo--%>
                     <span class="help-block text-danger"style="display: none;">error</span>
                   </div>
                </div>
                 <div class="col-md-2 sp" style="display: none;">
                   <div class="form-group">
                     <label for="#" class="control-label">输入END时间:</label>
                     <input type="text" name="date_d" class="date_d form-control" placeholder="输入END时间" style="height: 25px;"><%--date_d--%>
                     <span class="help-block text-danger"style="display: none;">error</span>
                   </div>
                </div>
              </div>
              <%--TODO:单图--%>
               <div class="row">
                 <div class="col-md-2 " style="position: relative;">
                  <input type="hidden" name="filePic"><%--TODO: filePic 存单图片 完整 url 地址 ;--%>
                  <span class="btn btn-success fileinput-button onePicUpload" style="position:absolute;top:15px;background-color:#0a819c;"><%--height: 25px;padding: 0px;line-height: 25px;--%>
                   <i class="glyphicon glyphicon-plus"></i>&nbsp;<span>Add 单图...</span>
                   </span>
                </div>
                <div class="col-md-2 ">
                   <div class="form-group">
                      <a href="#" class="thumbnail filePicurl" style="width: 210px; height: 80px;">
                        <%-- <img data-src="" alt="hello" style="width: 200px; height: 70px;" src="/images/img/goods_img.png" />--%>
                      </a>
                   </div>
                </div>
               </div>
            </div>

        </div>
       </div>
       <div id="ya" class="tab-pane fade">
         <div class="row">
           <div class="col-md-6">
               <div class="input-group">
                   <label for="#" class="control-label" style="color:#5bc0de;font-size:14px;font-weight:bold">分组项名称:</label>
                   <input id="#" type="text"  placeholder="name" class="form-control " style="position: relative">
                   <span class="input-group-btn" style="height: 25px;padding: 0px;">
                     <button type="button" class="btn btn-default fa fa-plus-square" style="position: absolute;top:24px;right: 2px;width: 50px; height: 25px;padding: 0px;"></button>
                   </span>
               </div>
           </div>
           <div class="col-md-6">
               <div class="input-group">
                   <label for="#" class="control-label">分组项值:</label>
                   <input id="#" type="text"  placeholder="name" class="form-control " style="position: relative">
                   <span class="input-group-btn" style="height: 25px;padding: 0px;">
                     <button type="button" class="btn btn-default fa fa-minus-square-o" style="position: absolute;top:24px;right: 2px;width: 50px; height: 25px;padding: 0px;"></button>
                   </span>
               </div>
           </div>
           <div class="col-md-6">
               <div class="input-group">
                   <label for="#" class="control-label">分组项值:</label>
                   <input id="#" type="text"  placeholder="name" class="form-control " style="position: relative">
                   <span class="input-group-btn" style="height: 25px;padding: 0px;">
                     <button type="button" class="btn btn-default fa fa-minus-square-o" style="position: absolute;top:23px;right: 2px;width: 50px; height: 25px;padding: 0px;"></button>
                   </span>
               </div>
           </div>
           <div class="col-md-6">
               <div class="input-group">
                   <label for="#" class="control-label">分组项值:</label>
                   <input id="#" type="text"  placeholder="name" class="form-control " style="position: relative">
                   <span class="input-group-btn" style="height: 25px;padding: 0px;">
                     <button type="button" class="btn btn-default fa fa-minus-square-o" style="position: absolute;top:23px;right: 2px;width: 50px; height: 25px;padding: 0px;"></button>
                   </span>
               </div>
           </div>
           <div class="col-md-6">
               <div class="input-group">
                   <label for="#" class="control-label">分组项值:</label>
                   <input id="#" type="text"  placeholder="name" class="form-control " style="position: relative">
                   <span class="input-group-btn" style="height: 25px;padding: 0px;">
                     <button type="button" class="btn btn-default fa fa-minus-square-o" style="position: absolute;top:23px;right: 2px;width: 50px; height: 25px;padding: 0px;"></button>
                   </span>
               </div>
           </div>
           <div class="col-md-6">
               <div class="input-group">
                   <label for="#" class="control-label">分组项值:</label>
                   <input id="#" type="text"  placeholder="name" class="form-control " style="position: relative">
                   <span class="input-group-btn" style="height: 25px;padding: 0px;">
                     <button type="button" class="btn btn-default fa fa-minus-square-o" style="position: absolute;top:23px;right: 2px;width: 50px; height: 25px;padding: 0px;"></button>
                   </span>
               </div>
           </div>
            <div class="col-md-6">
               <div class="input-group">
                   <label for="#" class="control-label">分组项值:</label>
                   <input id="#" type="text"  placeholder="name" class="form-control " style="position: relative">
                   <span class="input-group-btn" style="height: 25px;padding: 0px;">
                     <button type="button" class="btn btn-default fa fa-minus-square-o" style="position: absolute;top:23px;right: 2px;width: 50px; height: 25px;padding: 0px;"></button>
                   </span>
               </div>
           </div>
            <div class="col-md-6">
               <div class="input-group">
                   <label for="#" class="control-label">分组项值:</label>
                   <input id="#" type="text"  placeholder="name" class="form-control " style="position: relative">
                   <span class="input-group-btn" style="height: 25px;padding: 0px;">
                     <button type="button" class="btn btn-default fa fa-minus-square-o" style="position: absolute;top:23px;right: 2px;width: 50px; height: 25px;padding: 0px;"></button>
                   </span>
               </div>
           </div>
            <div class="col-md-6">
               <div class="input-group">
                   <label for="#" class="control-label">分组项值:</label>
                   <input id="#" type="text"  placeholder="name" class="form-control " style="position: relative">
                   <span class="input-group-btn" style="height: 25px;padding: 0px;">
                     <button type="button" class="btn btn-default fa fa-minus-square-o" style="position: absolute;top:23px;right: 2px;width: 50px; height: 25px;padding: 0px;"></button>
                   </span>
               </div>
           </div>

         </div>

         <div class="demo-btn Group_param" style="margin-top: 10px; display:none;">
              <button type="button" class="btn btn-default btn-outlined">tb_item_param 添加 规格 参数 分组</button>
              <%--<button type="button" class="btn btn-primary btn-outlined">Primary</button>
              <button type="button" class="btn btn-success btn-outlined">Success</button>
              <button type="button" class="btn btn-info btn-outlined">Info</button>
              <button type="button" class="btn btn-warning btn-outlined">Warning</button>
              <button type="button" class="btn btn-danger btn-outlined">Danger</button>--%>
          </div>
       </div>
       <div id="yb" class="tab-pane fade">
6
       </div>
       <div id="tab-two-columns" class="tab-pane fade">
       <div class="panel-body pan">
         <%--800px--%><%--300px--%>
         <%--TODO:商品描述--%>
         <textarea style="width:1550px;height:500px;visibility:hidden;" name="desc"></textarea>
       </div>
       </div>
       <div id="tab-form-seperated" class="tab-pane fade">
3
       </div>
       <div id="tab-form-bordered" class="tab-pane fade">
        <div class="row piclist">
           <div class="col-sm-6 col-md-3">
            <div class="thumbnail">
             <img data-src="" alt="hello" src="/images/xc.png" style="width: 300px; height: 200px;" />
             <div class="caption">
              <h3>可以放商品名称</h3>
              <p>可以放相册说明</p>
              <p><a href="#" role="button" class="btn btn-primary">Button</a>&nbsp;<a href="#" role="button" class="btn btn-default">Button</a> </p>
             </div>
            </div>
           </div>
          <%-- <div class="col-sm-6 col-md-3">
            <div class="thumbnail">
             <img data-src="" alt="hello" src="/images/xc.png" style="width: 300px; height: 200px;" />
             <div class="caption">
              <h3>Thumbnail label</h3>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              <p><a href="#" role="button" class="btn btn-primary">Button</a>&nbsp;<a href="#" role="button" class="btn btn-default">Button</a> </p>
             </div>
            </div>
           </div>
           <div class="col-sm-6 col-md-3">
            <div class="thumbnail">
             <img data-src="" alt="hello" src="/images/xc.png" style="width: 300px; height: 200px;" />
             <div class="caption">
              <h3>Thumbnail label</h3>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              <p><a href="#" role="button" class="btn btn-primary">Button</a>&nbsp;<a href="#" role="button" class="btn btn-default">Button</a> </p>
             </div>
            </div>
           </div>
           <div class="col-sm-6 col-md-3">
            <div class="thumbnail">
             <img data-src="" alt="hello" src="/images/xc.png" style="width: 300px; height: 200px;" />
             <div class="caption">
              <h3>Thumbnail label</h3>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              <p><a href="#" role="button" class="btn btn-primary">Button</a>&nbsp;<a href="#" role="button" class="btn btn-default">Button</a> </p>
             </div>
            </div>
           </div>
          <div class="col-sm-6 col-md-3">
            <div class="thumbnail">
             <img data-src="" alt="hello" src="/images/xc.png" style="width: 300px; height: 200px;" />
             <div class="caption">
              <h3>Thumbnail label</h3>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              <p><a href="#" role="button" class="btn btn-primary">Button</a>&nbsp;<a href="#" role="button" class="btn btn-default">Button</a> </p>
             </div>
            </div>
           </div>
          <div class="col-sm-6 col-md-3">
            <div class="thumbnail">
             <img data-src="" alt="hello" src="/images/xc.png" style="width: 300px; height: 200px;" />
             <div class="caption">
              <h3>Thumbnail label</h3>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              <p><a href="#" role="button" class="btn btn-primary">Button</a>&nbsp;<a href="#" role="button" class="btn btn-default">Button</a> </p>
             </div>
            </div>
           </div>
          <div class="col-sm-6 col-md-3">
            <div class="thumbnail">
             <img data-src="" alt="hello" src="/images/xc.png" style="width: 300px; height: 200px;" />
             <div class="caption">
              <h3>Thumbnail label</h3>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              <p><a href="#" role="button" class="btn btn-primary">Button</a>&nbsp;<a href="#" role="button" class="btn btn-default">Button</a> </p>
             </div>
            </div>
           </div>
          <div class="col-sm-6 col-md-3">
            <div class="thumbnail">
             <img data-src="" alt="hello" src="/images/xc.png" style="width: 300px; height: 200px;" />
             <div class="caption">
              <h3>Thumbnail label</h3>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              <p><a href="#" role="button" class="btn btn-primary">Button</a>&nbsp;<a href="#" role="button" class="btn btn-default">Button</a> </p>
             </div>
            </div>
           </div>--%>
          </div>
         <div class="row fileupload-buttonbar">
           <input type="hidden" name="image"><%--TODO:存图片 完整 url 地址 ;--%>
           <div class="col-lg-12" style="position: relative;">
             <span class="btn btn-success fileinput-button picFileUpload" style="position:absolute;left: 40%;bottom:-15px;">
               <i class="glyphicon glyphicon-plus"></i>&nbsp;<span>Add 相册...</span>
             </span>
           </div>
        </div>

       </div>

       <div id="emta" class="tab-pane fade">
         <div class="form-group">
            <label class="col-md-3 control-label">Fixed Width</label>
            <div class="col-md-9">
                <div class="md-editor active" id="1514245146218" style="display: table;"><div class="md-header btn-toolbar"><div class="btn-group"><button type="button" class="btn btn-default btn-sm" title="Bold" tabindex="-1" data-provider="bootstrap-markdown" data-handler="bootstrap-markdown-cmdBold"><span class="glyphicon glyphicon-bold"></span> </button><button type="button" class="btn btn-default btn-sm" title="Italic" tabindex="-1" data-provider="bootstrap-markdown" data-handler="bootstrap-markdown-cmdItalic"><span class="glyphicon glyphicon-italic"></span> </button><button type="button" class="btn btn-default btn-sm" title="Heading" tabindex="-1" data-provider="bootstrap-markdown" data-handler="bootstrap-markdown-cmdHeading"><span class="glyphicon glyphicon-header"></span> </button></div><div class="btn-group"><button type="button" class="btn btn-default btn-sm" title="URL/Link" tabindex="-1" data-provider="bootstrap-markdown" data-handler="bootstrap-markdown-cmdUrl"><span class="glyphicon glyphicon-globe"></span> </button><button type="button" class="btn btn-default btn-sm" title="Image" tabindex="-1" data-provider="bootstrap-markdown" data-handler="bootstrap-markdown-cmdImage"><span class="glyphicon glyphicon-picture"></span> </button></div><div class="btn-group"><button type="button" class="btn btn-default btn-sm" title="List" tabindex="-1" data-provider="bootstrap-markdown" data-handler="bootstrap-markdown-cmdList"><span class="glyphicon glyphicon-list"></span> </button></div><div class="btn-group"><button type="button" class="btn btn-primary btn-sm btn-default btn-sm" title="Preview" tabindex="-1" data-provider="bootstrap-markdown" data-handler="bootstrap-markdown-cmdPreview" data-toggle="button"><span class="glyphicon glyphicon-search"></span> Preview</button></div></div><textarea name="" data-provide="markdown" rows="10" data-width="400" class="form-control md-input" style="width: 400px; resize: none;"></textarea></div><span class="help-block">Custom width using <code>data-width="400"</code> attribute</span>
            </div>
        </div>
       </div>
      </div>
     <%--TODO: addEdit 提交表单--%>
      <div class="form-actions text-right pal addeditsubmit">
        <button type="submit" class="btn btn-primary" formtype="">Submit</button>&nbsp;
        <button type="button" class="btn btn-green">Cancel</button>
       </div>
     </form>
     <%--TODO: 选择栏目--%>
     <div id="modal-full-width" tabindex="-1" role="dialog" aria-labelledby="modal-full-width-label" aria-hidden="true" class="modal fade">
       <div class="modal-dialog modal-full-width">
        <div class="modal-content">
         <div class="modal-header">
          <button type="button" data-dismiss="modal" aria-hidden="true" class="close">&times;</button>
          <h4 id="modal-full-width-label" class="modal-title">Modal Full Width</h4>
         </div>
         <div class="modal-body">
           <form action="#" id="form3" class="">
             <div class="col-md-12" id="TreeTitle">
                <div class="form-group">
                    <label for="#" class="control-label Q">栏目 名称</label>
                    <label for="#" class="control-label W">I D</label>
                    <label for="#" class="control-label E">PID</label>
                    <label for="#" class="control-label R">path</label>
                    <label for="#" class="control-label T">level</label>
                    <label for="#" class="control-label Y">所属栏目</label>
                    <label for="#" class="control-label U">所属类型</label>
                    <label for="#" class="control-label I">筛选数量</label>
                    <label for="#" class="control-label O">筛选id</label>
                    <label for="#" class="control-label QQ">是否显示</label>
                    <label for="#" class="control-label QW">图标Class</label>
                    <label for="#" class="control-label QE">sort</label>
                    <label for="#" class="control-label P">操&nbsp;&nbsp;作&nbsp;&nbsp;区</label>
                </div>
            </div>
             <div id="Tree" class="col-md-12"></div>

           </form>
         </div>
         <div class="modal-footer">
          <button type="button" data-dismiss="modal" class="btn btn-default">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
         </div>
        </div>
       </div>
      </div>
   </div>
     <div class="col-lg-12">
       <div class="row">
         <div class="col-lg-12">
           <div class="alert alert-success">
             <strong>本模块说明：</strong>
             <p>1：分页是通过 ??</p>
             <strong>BUG：</strong>
             <p>A："[{"group":"组名1","params":["组员1","组员2"]},{"group":"组名2","params":["组员1","组员2"]},{"group":"组名3","params":["组员1","组员2","组员3","组员4"]}]" </p>
             <p>商品规格参数提交格式：[{"group":"主体","params":["品牌","型号","颜色","上市年份"]},{"group":"网络","params":["4G网络制式","3G网络制式","2G网络制式"]},{"group":"存储","params":["机身内存","储存卡类型"]}]" </p>
           </div>
         </div>
       </div>
     </div>
</div>
