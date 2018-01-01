<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<nav id="sidebar" role="navigation" class="navbar-default navbar-static-side" style="min-height: 100%;">
   <div class="sidebar-collapse menu-scroll" style="height: auto;">
    <ul id="side-menu" class="nav">
     <li class="user-panel">
      <div class="thumb">
       <img src="/images/128.jpg" alt="" class="img-circle" />
      </div>
      <div class="info">
       <p>John Doe</p>
       <ul class="list-inline list-unstyled">
        <li><a href="extra-profile.html" data-hover="tooltip" title="" data-original-title="Profile"><i class="fa fa-user"></i></a> </li>
        <li><a href="email-inbox.html" data-hover="tooltip" title="" data-original-title="Mail"><i class="fa fa-envelope"></i></a> </li>
        <li><a href="#" data-hover="tooltip" title="" data-toggle="modal" data-target="#modal-config" data-original-title="Setting"><i class="fa fa-cog"></i></a> </li>
        <li><a href="extra-signin.html" data-hover="tooltip" title="" data-original-title="Logout"><i class="fa fa-sign-out"></i></a> </li>
       </ul>
      </div>
      <div class="clearfix"></div> </li>
        <%----%>
     <li class="active"><a href="/"><i class="fa fa-tachometer fa-fw">
        <div class="icon-bg bg-orange"></div> </i><span class="menu-title">首 页</span></a> </li>
<%--active--%>
     <li class=""> <a href="#"> <i class="fa fa-desktop fa-fw">
        <div class="icon-bg bg-pink"></div></i><span class="menu-title">商品 管理</span><span class="fa arrow"></span></a>
      <ul class="nav nav-second-level collapse " style=""><%--in--%>
       <li><a href="#" pageurl="item-list" javaurl="/item/list" pageType ="pagerows"><i class="fa fa-align-left"></i><span class="submenu-title">商品 列表</span></a> </li>
       <li><a href="#" pageurl="/Catlist" javaurl="/Catlist/list"><i class="fa fa-angle-double-left"></i><span class="submenu-title">栏目 列表</span></a> </li>
       <li><a href="#"><i class="fa fa-align-right"></i><span class="submenu-title">Right Sidebar</span></a> </li>
       <li><a href="#"><i class="fa fa-angle-double-right"></i><span class="submenu-title">Right Sidebar Collapsed</span></a> </li>
       <li><a href="#"><i class="fa fa-header"></i><span class="submenu-title">Horizontal Menu</span></a> </li>
       <li><a href="#"><i class="fa fa-h-square"></i><span class="submenu-title">Horizontal Menu &amp; Sidebar</span></a> </li>
       <li><a href="#"><i class="fa fa-magnet"></i><span class="submenu-title">Fixed Topbar</span></a> </li>
       <li><a href="#"><i class="fa fa-columns"></i><span class="submenu-title">Boxed Layout</span></a> </li>
       <li><a href="#"><i class="fa fa-eye-slash"></i><span class="submenu-title">Hidden Footer</span></a> </li>
       <li><a href="#"><i class="fa fa-paperclip"></i><span class="submenu-title">Header &amp; Topbar</span></a> </li>
       <li><a href="#"><i class="fa fa-link"></i><span class="submenu-title">Title &amp; Breadcrumb</span></a> </li>
      </ul>
     </li>
       <li class=""> <a href="#"> <i class="fa fa-desktop fa-fw">
        <div class="icon-bg bg-pink"></div></i><span class="menu-title">后台模板整理</span><span class="fa arrow"></span></a>
      <ul class="nav nav-second-level collapse " style="">
       <li><a href="#" pageurl="/navselect-list-add-table"><i class="fa fa-align-left"></i><span class="submenu-title">nav查询 列表 addEdit 表单</span></a> </li>
       <li><a href="#" pageurl="/navselect-list"><i class="fa fa-angle-double-left"></i><span class="submenu-title">nav查询 列表</span></a> </li>
       <li><a href="#"><i class="fa fa-align-right"></i><span class="submenu-title">Right Sidebar</span></a> </li>
       <li><a href="#"><i class="fa fa-angle-double-right"></i><span class="submenu-title">Right Sidebar Collapsed</span></a> </li>
       <li><a href="#"><i class="fa fa-header"></i><span class="submenu-title">Horizontal Menu</span></a> </li>
       <li><a href="#"><i class="fa fa-h-square"></i><span class="submenu-title">Horizontal Menu &amp; Sidebar</span></a> </li>
       <li><a href="#"><i class="fa fa-magnet"></i><span class="submenu-title">Fixed Topbar</span></a> </li>
       <li><a href="#"><i class="fa fa-columns"></i><span class="submenu-title">Boxed Layout</span></a> </li>
       <li><a href="#"><i class="fa fa-eye-slash"></i><span class="submenu-title">Hidden Footer</span></a> </li>
       <li><a href="#"><i class="fa fa-paperclip"></i><span class="submenu-title">Header &amp; Topbar</span></a> </li>
       <li><a href="#"><i class="fa fa-link"></i><span class="submenu-title">Title &amp; Breadcrumb</span></a> </li>
      </ul>
     </li>
       <%-- <volist name="nav" id="obj1">
                <li>
                    <a href="#">
                        <i class="fa {$obj1.iconCls}">
                            <div class="icon-bg bg-pink"></div>
                        </i>

                        <span class="menu-title">{$obj1.title}</span><span class="fa arrow"></span>
                    </a>
                    <ul class="nav nav-second-level collapse in">

                        <volist name="obj1['_child']" id="obj2">
                            <li class="publicNew"style="">
                                <a href="#" id="{$obj2.url}" clickid="{$obj2.id}">
                                    <i class="fa {$obj2.iconCls}"></i>
                                    <span class="submenu-title">{$obj2.title}</span>
                                    <div class="" style="float: right; display:none;"><!--pageloader-img-->
                                        <img src="__PUBLIC__/vendors/pageloader/images/loader9.GIF" style="max-width: 50px;">
                                    </div>
                                </a>
                            </li>
                        </volist>

                    </ul>
                </li>
            </volist>--%>
    </ul>
   </div>
  </nav>
  <div id="chat-form" class="fixed">
   <div class="chat-inner">
    <h2 class="chat-header"><a href="javascript:;" class="chat-form-close pull-right"><i class="glyphicon glyphicon-remove"></i></a><i class="fa fa-user"></i>&nbsp; Chat &nbsp;<span
        class="badge badge-info">3</span></h2>
    <div id="group-1" class="chat-group">
     <strong>Favorites</strong>
     <a href="#"><span class="user-status is-online"></span> <small>Verna Morton</small> <span class="badge badge-info">2</span></a>
     <a href="#"><span class="user-status is-online"></span> <small>Delores Blake</small> <span class="badge badge-info is-hidden">0</span></a>
     <a href="#"><span class="user-status is-busy"></span> <small>Nathaniel Morris</small> <span class="badge badge-info is-hidden">0</span></a>
     <a href="#"><span class="user-status is-idle"></span> <small>Boyd Bridges</small> <span class="badge badge-info is-hidden">0</span></a>
     <a href="#"><span class="user-status is-offline"></span> <small>Meredith Houston</small> <span class="badge badge-info is-hidden">0</span></a>
    </div>
    <div id="group-2" class="chat-group">
     <strong>Office</strong>
     <a href="#"><span class="user-status is-busy"></span> <small>Ann Scott</small> <span class="badge badge-info is-hidden">0</span></a>
     <a href="#"><span class="user-status is-offline"></span> <small>Sherman Stokes</small> <span class="badge badge-info is-hidden">0</span></a>
     <a href="#"><span class="user-status is-offline"></span> <small>Florence Pierce</small> <span class="badge badge-info">1</span></a>
    </div>
    <div id="group-3" class="chat-group">
     <strong>Friends</strong>
     <a href="#"><span class="user-status is-online"></span> <small>Willard Mckenzie</small> <span class="badge badge-info is-hidden">0</span></a>
     <a href="#"><span class="user-status is-busy"></span> <small>Jenny Frazier</small> <span class="badge badge-info is-hidden">0</span></a>
     <a href="#"><span class="user-status is-offline"></span> <small>Chris Stewart</small> <span class="badge badge-info is-hidden">0</span></a>
     <a href="#"><span class="user-status is-offline"></span> <small>Olivia Green</small> <span class="badge badge-info is-hidden">0</span></a>
    </div>
   </div>
   <div id="chat-box" style="top:400px">
    <div class="chat-box-header">
     <a href="#" class="chat-box-close pull-right"><i class="glyphicon glyphicon-remove"></i></a>
     <span class="user-status is-online"></span>
     <span class="display-name">Willard Mckenzie</span>
     <small>Online</small>
    </div>
    <div class="chat-content">
     <ul class="chat-box-body">
      <li> <p><img src="/images/128.jpg" class="avt" /><span class="user">John Doe</span><span class="time">09:33</span> </p> <p>Hi Swlabs, we have some comments for you.</p> </li>
      <li class="odd"> <p><img src="/images/48.jpg" class="avt" /><span class="user">Swlabs</span><span class="time">09:33</span> </p> <p>Hi, we're listening you...</p> </li>
     </ul>
    </div>
    <div class="chat-textarea">
     <input placeholder="Type your message" class="form-control" />
    </div>
   </div>
  </div>