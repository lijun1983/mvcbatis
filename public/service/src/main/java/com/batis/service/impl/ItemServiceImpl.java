package com.batis.service.impl;

import com.batis.common.pojo.EasyUIDateGrid;
import com.batis.mapper.TbItemMapper;
import com.batis.pojo.TbItem;
import com.batis.pojo.TbItemExample;
import com.batis.service.ItemService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by root on 17-12-22.
 */
@Service
public class ItemServiceImpl implements ItemService
{
  /**
   *
   */
  @Autowired
  TbItemMapper itemMapper;

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
  //TODO:返回含分页的列表记录集
  @Override
  public EasyUIDateGrid getItemList(int pageNum, int pageSize)
  {
    TbItemExample where = new TbItemExample();

    PageHelper.startPage(pageNum,pageSize);
    List<TbItem> list = itemMapper.selectByExample(where); //返回的列表
    return new EasyUIDateGrid<TbItem>(list);
  }
 /* @Override
  public EasyUIDateGrid getItemList(int page, int rows)
  {
    //查询商品列表
    TbItemExample where = new TbItemExample();
    //分页处理
    PageHelper.startPage(page,rows);
    List<TbItem> list = itemMapper.selectByExample(where); //返回的列表
    // TODO：创建一个自定义 返回值 对象 com.batis.common.pojo.EasyUIDateGrid
    EasyUIDateGrid result = new EasyUIDateGrid();
    result.setRows(list); //setRows 在 com.batis.common.pojo.EasyUIDateGrid.setRows() 方法 //每页显示的记录数
    // 取记录总条数
    PageInfo<TbItem> pageInfo = new PageInfo<TbItem>(list);
    result.setTotal(pageInfo.getTotal());//表示设自定返回类 EasyUIDateGrid.java setTotal方法 值 = pageInfo.getTotal()值
    result.setPageNum(pageInfo.getPageNum());
    result.setPageSize(pageInfo.getPageSize());
    result.setFirstPage(pageInfo.getFirstPage());
    result.setPrePage(pageInfo.getPrePage());
    result.setNextPage(pageInfo.getNextPage());
    result.setPages(pageInfo.getPages());
    result.setStartRow(pageInfo.getStartRow());
    result.setEndRow(pageInfo.getEndRow());
    result.setNavigatepageNums(pageInfo.getNavigatepageNums());
    return result;
    //navigatepageNums
    //navigatePages
  }*/
  /*@Override
  public EasyUIDateGrid getItemList(int pageNum, int pageSize)
  {
    //查询商品列表
    TbItemExample where = new TbItemExample();
    //分页处理
    PageHelper.startPage(pageNum,pageSize);
    List<TbItem> list = itemMapper.selectByExample(where); //返回的列表
    // 创建一个返回值对象
    EasyUIDateGrid result = new EasyUIDateGrid();
    result.setRows(list); //setRows 在 com.batis.common.pojo.EasyUIDateGrid.setRows() 方法
    // 取记录总条数
    PageInfo<TbItem> pageInfo = new PageInfo<TbItem>(list);
    result.setTotal(pageInfo.getTotal());
    return result;
  }*/

}
