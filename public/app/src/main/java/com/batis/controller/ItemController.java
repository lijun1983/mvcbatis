package com.batis.controller;

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

	//TODO:测试mvc 配置是否成功 返回一条记录集 http://127.0.0.1:8080/item/536563
	@RequestMapping("/item/{itemId}")
	@ResponseBody
	public TbItem getItemById(@PathVariable Long itemId){
    TbItem tbItem = itemService.getItemById(itemId);
		return tbItem;
	}

}
