package com.batis.controller;

import com.batis.common.pojo.EUTreeNode;
import com.batis.service.ItemCatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * Created by root on 18-1-1.
 */
@Controller
@RequestMapping("/item/cat")
public class ItemCatController
{
  @Autowired
  private ItemCatService itemCatService;

  /**
   * value = "id" 表示客户端默认传过来的 id  {id: "74"}
   * 如下是 jq 通过对像传过来的 id
   * Cat['initcatajax']['data'] = {};
   * Cat['initcatajax']['data']['id'] =  _this.closest('.ParentNode').attr('id');
   * defaultValue = "0" 表示初始化  parentId  等于 0 如果传过来就 是传过来的 id 值
   * @param parentId
   * @return  返回该 id 子 记录集
   */
  @RequestMapping("/list")
  @ResponseBody
  private List<EUTreeNode> getCatList(@RequestParam(value = "id",defaultValue = "0")Long parentId)
  {
    List<EUTreeNode> catlist = itemCatService.getCatList(parentId);
    return catlist;
  }
}
