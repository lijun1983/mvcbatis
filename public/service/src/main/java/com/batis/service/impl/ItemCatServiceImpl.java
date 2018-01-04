package com.batis.service.impl;

import com.batis.common.pojo.EUTreeNode;
import com.batis.mapper.TbItemCatMapper;
import com.batis.pojo.TbItemCat;
import com.batis.pojo.TbItemCatExample;
import com.batis.pojo.TbItemExample;
import com.batis.service.ItemCatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by root on 18-1-1.
 */
@Service
public class ItemCatServiceImpl implements ItemCatService
{
  @Autowired
  private TbItemCatMapper itemCatMapper;
  @Override
  public List<EUTreeNode> getCatList(long parentId)
  {
    TbItemCatExample where = new TbItemCatExample();
    TbItemCatExample.Criteria criteria = where.createCriteria();
    criteria.andParentIdEqualTo(parentId);
    List<TbItemCat> list = itemCatMapper.selectByExample(where);
    List<EUTreeNode> resultList = new ArrayList<>();
    for (TbItemCat tbItemCat : list)
    {
      EUTreeNode node = new EUTreeNode();
      node.setId(tbItemCat.getId());
      node.setText(tbItemCat.getName());
      node.setParentId(tbItemCat.getParentId());
      node.setSort_order(tbItemCat.getSortOrder());
      node.setCreated(tbItemCat.getCreated());
      node.setUpdated(tbItemCat.getUpdated());
      node.setState(tbItemCat.getIsParent()?"closed":"open");//设置返回 状态为字符串  三元表达式 ?"closed":"open"
      resultList.add(node);
    }
    return resultList;
  }
}
