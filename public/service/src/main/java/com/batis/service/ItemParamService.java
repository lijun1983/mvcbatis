package com.batis.service;

import com.batis.common.pojo.EasyUIDateGrid;
import com.batis.common.pojo.TaotaoResult;
import com.batis.pojo.TbItemParam;

public interface ItemParamService {
	EasyUIDateGrid getItemParamList(int pageNum, int pageSize);
	TaotaoResult getItemParamByCid(long cid);
	TaotaoResult insertItemParam(TbItemParam itemParam);
}
