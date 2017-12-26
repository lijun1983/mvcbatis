package com.batis.service.impl;

import com.batis.mapper.TbItemMapper;
import com.batis.pojo.TbItem;
import com.batis.pojo.TbItemExample;
import com.batis.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by root on 17-12-22.
 */
@Service
public class ItemServiceImpl implements ItemService
{
  @Autowired
  private TbItemMapper itemMapper;

  //TODO:测试 依据ID主键返回一条记录集
  @Override
  public TbItem getItemById(long itemId)
  {
    TbItemExample where = new TbItemExample();//实例查询条件对像
    //添加查询条件
    TbItemExample.Criteria criteria = where.createCriteria();
    criteria.andIdEqualTo(itemId);
    //返回 对像 list 并判断 成立 返回 return item
    List<TbItem> list = itemMapper.selectByExample(where);
    if(list != null && list.size() > 0)
    {
      TbItem item = list.get(0);
      return item;
    }
    return null;
  }
}
