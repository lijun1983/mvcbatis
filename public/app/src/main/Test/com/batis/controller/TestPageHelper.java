package com.batis.controller;

import com.batis.mapper.TbItemMapper;
import com.batis.pojo.TbItem;
import com.batis.pojo.TbItemExample;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.util.List;

/**
 * Created by root on 17-12-27.
 */
public class TestPageHelper
{
  @Test
  public void testPageHelper()
  {
    //创建一个spring容器
    ApplicationContext applicationContext = new ClassPathXmlApplicationContext("classpath:spring/applicationContext-*.xml");
    //从spring容器中获得Mapper的代理对象
    TbItemMapper mapper = applicationContext.getBean(TbItemMapper.class);
    //TODO: 执行 条件 查询，并分页
    TbItemExample where = new TbItemExample();
    //TODO:分页处理
    PageHelper.startPage(100,2);//TODO:第一个参数是pageNum，要查第几页。第二个参数是 pageSize 每页显示的记录数 相当于 rows。
    List<TbItem> list = mapper.selectByExample(where);//返回一个 列表 结果集对像
    for(TbItem tbItem : list)
    {
      System.out.println(tbItem.getTitle());//打印记录集中的 Title 字段的值
    }
    PageInfo<TbItem> pageInfo = new PageInfo<>(list);
    long total = pageInfo.getTotal();
    System.out.println("共有商品：" + total);


  }
}
