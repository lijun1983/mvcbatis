package com.batis.service.impl;

import com.batis.common.pojo.EasyUIDateGrid;
import com.batis.common.pojo.TaotaoResult;
import com.batis.common.utils.IDUtils;
import com.batis.mapper.TbItemDescMapper;
import com.batis.mapper.TbItemMapper;
import com.batis.mapper.TbItemParamItemMapper;
import com.batis.pojo.TbItem;
import com.batis.pojo.TbItemDesc;
import com.batis.pojo.TbItemExample;
import com.batis.pojo.TbItemParamItem;
import com.batis.service.ItemService;
import com.github.pagehelper.PageHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
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
  @Autowired
  private TbItemDescMapper itemDescMapper;

  @Autowired
  private TbItemParamItemMapper itemParamItemMapper;

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
    where.setOrderByClause("updated DESC");/*DESC*/
    PageHelper.startPage(pageNum,pageSize);
    List<TbItem> list = itemMapper.selectByExample(where); //返回的列表
    return new EasyUIDateGrid<TbItem>(list);
  }

  @Override
  public TaotaoResult createItem(TbItem item,String desc, String itemParam) throws Exception
  {
    Long itemId = IDUtils.genItemId();//生成一个商品的ID 为 15位的 ID 调用了IDUtils 类 genItemId 方法
    item.setId(itemId);
    // '商品状态，1-正常，2-下架，3-删除',
    item.setStatus((byte) 1);
    item.setCreated(new Date());
    item.setUpdated(new Date());
    //插入到数据库
    itemMapper.insert(item);//TODO:基本信息添加完成
    //TODO:相当一个事务多表添加数据了
    //TODO: tb_item_desc表 添加
    //添加商品描述信息
    TaotaoResult result = insertItemDesc(itemId, desc);//TODO：调用下面方法 insertItemDesc
    if (result.getStatus() != 200) {
      throw new Exception();
    }
    //TODO: tb_item_param_item 表 添加 规格与参数 TODO：调用下面方法 insertItemParamItem
    result = insertItemParamItem(itemId, itemParam);
    if (result.getStatus() != 200) {
      throw new Exception();
    }
    return TaotaoResult.ok();
  }
  /**
   * 添加商品描述
   * <p>Title: insertItemDesc</p>
   * <p>Description: </p>
   * @param desc
   */
  private TaotaoResult insertItemDesc(Long itemId, String desc) {
    TbItemDesc itemDesc = new TbItemDesc();
    itemDesc.setItemId(itemId);
    itemDesc.setItemDesc(desc);
    itemDesc.setCreated(new Date());
    itemDesc.setUpdated(new Date());
    itemDescMapper.insert(itemDesc);
    return TaotaoResult.ok();
  }
  /**
   * 添加规格参数
   * <p>Title: insertItemParamItem</p>
   * <p>Description: </p>
   * @param itemId
   * @param itemParam
   * @return
   */
  private TaotaoResult insertItemParamItem(Long itemId, String itemParam) {
    //创建一个pojo
    TbItemParamItem itemParamItem = new TbItemParamItem();
    itemParamItem.setItemId(itemId);
    itemParamItem.setParamData(itemParam);
    itemParamItem.setCreated(new Date());
    itemParamItem.setUpdated(new Date());
    //向表中插入数据
    itemParamItemMapper.insert(itemParamItem);

    return TaotaoResult.ok();

  }
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
