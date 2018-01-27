package com.batis.service.impl;

import com.batis.common.pojo.EasyUIDateGrid;
import com.batis.common.pojo.TaotaoResult;
import com.batis.mapper.TbItemParamMapper;
import com.batis.pojo.TbItem;
import com.batis.pojo.TbItemExample;
import com.batis.pojo.TbItemParam;
import com.batis.pojo.TbItemParamExample;
import com.batis.service.ItemParamService;
import com.github.pagehelper.PageHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

/**
 * Created by root on 18-1-9.
 */
@Service
public class ItemParamServiceImpl implements ItemParamService
{
  @Autowired
  private TbItemParamMapper itemParamMapper;

  @Override
  public EasyUIDateGrid getItemParamList(int pageNum, int pageSize)
  {
    TbItemParamExample itemParamwhere = new TbItemParamExample();
    itemParamwhere.setOrderByClause("updated DESC");//DESC
    PageHelper.startPage(pageNum,pageSize);
    List<TbItemParam> list = itemParamMapper.selectByExample(itemParamwhere); //返回的列表
    return new EasyUIDateGrid<TbItemParam>(list);
  }


  @Override
  public TaotaoResult getItemParamByCid(long cid) {
    TbItemParamExample example = new TbItemParamExample();
    TbItemParamExample.Criteria criteria = example.createCriteria();
    criteria.andItemCatIdEqualTo(cid);
    List<TbItemParam> list = itemParamMapper.selectByExampleWithBLOBs(example);
    //判断是否查询到结果
    if (list != null && list.size() > 0) {
      return TaotaoResult.ok(list.get(0));
    }

    return TaotaoResult.ok();
  }

  /***
   * tb_item_param 表
   * @param itemParam   插件一个对象
   * @return
   */
  @Override
  public TaotaoResult insertItemParam(TbItemParam itemParam)
  {
    itemParam.setCreated(new Date());
    itemParam.setUpdated(new Date());
    itemParamMapper.insert(itemParam);
    return TaotaoResult.ok();
  }
}
