package com.batis.service;

import com.batis.common.pojo.EasyUIDateGrid;
import com.batis.common.pojo.TaotaoResult;
import com.batis.pojo.TbItem;

/**
 * Created by Administrator on 2017/5/6.
 * TODO:抽取接口 将光标放入 ItemService 接口名-》alt+ Enter -> 选 implement interface-》回车-》自动创建 接口实现类
 */
public interface ItemService
{
    // TODO : 通过一个 物理 ID 返回一条记录 itemId表示一个 ID 字段 引入 com.mymvcbatis.pojo.TbItem
    TbItem getItemById(long itemId);
    EasyUIDateGrid getItemList(int pageNum, int pageSize);
    TaotaoResult createItem(TbItem item,String desc, String itemParam) throws Exception;
}

































