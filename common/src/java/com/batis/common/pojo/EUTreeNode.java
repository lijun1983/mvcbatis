package com.batis.common.pojo;

import java.util.Date;

/**
 * easyUI树形控件节点格式
 * <p>Title: EUTreeNode</p>
 * <p>Description: </p>
 * <p>Company: www.itcast.com</p>
 * @author	入云龙
 * @date	2015年9月4日上午9:13:14
 * @version 1.0
 */
@SuppressWarnings("ALL")
public class EUTreeNode
{

	private long id;
	private String text;
	private String state;
	private long ParentId;
	/*private Integer status;
	private long sort_order;
	private long is_parent;
	private String created;
	private String updated;*/
	private int sort_order;
	private Date created;
	private Date updated;

	public Date getCreated()
	{
		return created;
	}

	public void setCreated(Date created)
	{
		this.created = created;
	}

	public Date getUpdated()
	{
		return updated;
	}

	public void setUpdated(Date updated)
	{
		this.updated = updated;
	}

	public int getSort_order()
	{
		return sort_order;
	}

	public void setSort_order(int sort_order)
	{
		this.sort_order = sort_order;
	}

	public long getParentId()
	{
		return ParentId;
	}

	public void setParentId(long parentId)
	{
		this.ParentId = parentId;
	}

	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}

}
