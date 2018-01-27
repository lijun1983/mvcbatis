<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
 <script src="/appjqcss/Layouts/item/Item-This.js"></script>
   <div class="row">
    <div class="col-lg-12">
     <%--TODO: 列表模板区1--%>
     <div class="portlet box portlet-green">
      <div class="portlet-header">
       <div class="caption">
        Media Gallery
       </div>
       <div class="tools">
        <i class="fa fa-chevron-up"></i>
        <i data-toggle="modal" data-target="#modal-config" class="fa fa-cog"></i>
        <i class="fa fa-refresh"></i>
        <i class="fa fa-times"></i>
       </div>
      </div>
      <div class="portlet-body">
       <div class="gallery-pages">
        <ul style="float: left;" class="list-filter list-unstyled">
         <li data-filter="all" class="filter active">新 增</li>
         <li data-filter=".development" class="filter">修 改</li>
         <li data-filter=".design" class="filter">删 除</li>
         <li data-filter=".photography" class="filter">返选</li>
         <%--<li data-filter=".wordpress" class="filter">Wordpress</li>
         <li data-filter=".html" class="filter">Html</li>--%>
        </ul>

        <div class="action-group btn-group pull-right">
         <button class="btn btn-primary"> <i class="fa fa-check-square-o mrs"></i>Check All</button>
         <button class="btn btn-primary"> <i class="fa fa-upload mrs"></i>Add new</button>
         <button class="btn btn-primary"> <i class="fa fa-edit mrs"></i>Edit </button>
         <button class="btn btn-primary"> <i class="fa fa-trash-o mrs"></i>Delete</button>
         <button type="button" data-toogle="dropdown" class="btn btn-primary dropdown-toogle"><i class="fa fa-share-square-o mrs"></i>Share</button>
        </div>
        <div class="clearfix"></div>
        <%--列表内容--%>
           <div class="panel panel-default">
              <div class="panel-body"><strong class="text-uppercase">Panel without Heading &amp; Footer</strong>
                  <br>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat laboris nisi ut aliquip ex ea commodo consequat.</div>
           </div>
         <table class="table table-hover table-striped table-bordered table-advanced tablesorter">
           <thead class="thead_List">
            <tr>
             <th width="2%">
              <div class="icheckbox_minimal-grey each" style="position: relative;">
               <input type="checkbox" class="Q bianhao"><ins class="iCheck-helper"></ins>
              </div>
             </th>
             <th width="7%">Record #</th>
             <th>Username</th>
             <th width="10%">Country</th>
             <th width="10%">Gender</th>
             <th width="7%">Order</th>
             <th width="10%">Date</th>
             <th width="15%">Skills</th>
             <th width="7%">Status</th>
             <th width="12%">Actions</th>
            </tr>
           </thead>
           <tbody class="tablelist">
            <tr>
             <td>
               <div class="icheckbox_minimal-grey each" style="position: relative;">
               <input type="checkbox" class="Q bianhao" value="2"><ins class="iCheck-helper"></ins>
              </div>

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
             <td> <button type="button" class="btn btn-default btn-xs"><i class="fa fa-edit"></i>&nbsp; Edit </button>&nbsp; <button type="button" class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i>&nbsp; Delete </button> </td>
            </tr>
            <tr>
             <td>
              <div class="icheckbox_minimal-grey each  " style="position: relative;">
               <input type="checkbox" class="Q bianhao" value="4"><ins class="iCheck-helper"></ins>
              </div>
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
             <td> <button type="button" class="btn btn-default btn-xs"><i class="fa fa-edit"></i>&nbsp; Edit </button>&nbsp; <button type="button" class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i>&nbsp; Delete </button> </td>
            </tr>

           </tbody>
         </table>
       </div>
      </div>
     </div>

    </div>
   </div>

