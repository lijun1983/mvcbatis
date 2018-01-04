package com.batis.service;

import com.batis.common.pojo.EUTreeNode;

import java.util.List;

/**
 * Created by root on 18-1-1.
 */

public interface ItemCatService
{
  List<EUTreeNode> getCatList(long parentId);
}
