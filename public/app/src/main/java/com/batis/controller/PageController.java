package com.batis.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * PageController
 * <p>Title: PageController</p>
 * <p>Description: </p>
 * <p>Company: www.xx.com</p>
 *
 * @author
 * @version 1.0
 * @date
 * @ResponseBody 返回的数据不是html标签的页面，而是其他某种格式的数据时（如json、xml等）使用；
 * TODO:后台首页
 *
 */
@Controller
public class PageController
{
  // TODO: 后台首页方法
  @RequestMapping("/")
  public String showAdminIndex()
  {
    return "index";
  }

  //TODO click 后台首页 左侧 打开右侧分页
  @RequestMapping("/{page}")
  public String showpage(@PathVariable String page)
  {
    return page;
  }

}

