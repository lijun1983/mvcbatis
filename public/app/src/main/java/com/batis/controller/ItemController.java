package com.batis.controller;

import com.batis.common.pojo.EasyUIDateGrid;
import com.batis.pojo.TbItem;
import com.batis.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;


/**
 * 商品管理Controller
 * <p>Title: ItemController</p>
 * <p>Description: </p>
 * <p>Company: www.itcast.com</p>
 * @author
 * @date
 * @version 1.0
 *   @ResponseBody 返回的数据不是html标签的页面，而是其他某种格式的数据时（如json、xml等）使用；
 */

@Controller
public class ItemController
{

	@Autowired
	private ItemService itemService;


	//TODO:测试mvc 配置是否成功 返回一条记录集 http://127.0.0.1:8080/item/536563; click  return tbItem 行号旁边添加断点 ； 刷新 IE 地址http://127.0.0.1:8080/item/536563 查看
	@RequestMapping("/item/{itemId}")
	@ResponseBody
	public TbItem getItemById(@PathVariable Long itemId){
    TbItem tbItem = itemService.getItemById(itemId);
		return tbItem;
	}
	//TODO: 返回商品列表
	//TODO: ? 问题 这里如何从客户端传参数过来 待解决  ； 以下 Integer pageNum,Integer pageSize 是手动设置参数
  // TODO：最好可以在 项目设置如果没传参 默认查 Integer pageNum, Integer pageSize
	//@RequestMapping("/item/item-list")
	@RequestMapping("/item/list")
	@ResponseBody
	public EasyUIDateGrid getItemList(Integer pageNum, Integer pageSize)
	{
		EasyUIDateGrid result = itemService.getItemList(pageNum,pageSize);
		return result;
	}


}
