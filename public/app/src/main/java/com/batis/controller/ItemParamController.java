package com.batis.controller;

import com.batis.common.pojo.EasyUIDateGrid;
import com.batis.common.pojo.TaotaoResult;
import com.batis.pojo.TbItemParam;
import com.batis.service.ItemParamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by root on 18-1-9.
 */
@Controller
@RequestMapping("/item/param")
public class ItemParamController
{
  @Autowired
  private ItemParamService itemParamService;

  /**
   *TODO:返回商品规格参数列表  tb_item_param 表
   * @param pageNum
   * @param pageSize
   * @return
   */
  @RequestMapping("/list")
  @ResponseBody
  public EasyUIDateGrid getItemParamList(@RequestParam(value = "pageNum",defaultValue = "1")int pageNum, @RequestParam(value = "pageSize",defaultValue = "5")int pageSize)
  {
    EasyUIDateGrid result = itemParamService.getItemParamList(pageNum,pageSize);
    return result;

  }
  /**
   * paramData:"[{"group":"组名1","params":["组员1","组员2"]},{"group":"组名2","params":["组员1","组员2"]},{"group":"组名3","params":["组员1","组员2","组员3","组员4"]}]"
   * [{"group":"主体","params":["品牌","型号","颜色","上市年份"]},{"group":"网络","params":["4G网络制式","3G网络制式","2G网络制式"]},{"group":"存储","params":["机身内存","储存卡类型"]}]
   * @param itemCatId
   * @return 返回 商品规格参数模板
   */
  @RequestMapping("/query/itemcatid/{itemCatId}")
  @ResponseBody
  public TaotaoResult getItemParamByCid(@PathVariable Long itemCatId) {
    TaotaoResult result = itemParamService.getItemParamByCid(itemCatId);
    return result;
  }
  @RequestMapping("/save/{cid}")
  @ResponseBody
  public TaotaoResult insertItemParam(@PathVariable Long cid, String paramData) {
    //创建pojo对象
    TbItemParam itemParam = new TbItemParam();
    itemParam.setItemCatId(cid);
    itemParam.setParamData(paramData);
    TaotaoResult result = itemParamService.insertItemParam(itemParam);
    return result;
  }
}
