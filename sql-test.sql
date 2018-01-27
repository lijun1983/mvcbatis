
规格参数第一种方案.sql 数据库  测试查询
SELECT * FROM tb_item_param_value   WHERE item_id=855739;
返回 商品对应 规格值（param_value）
855739	1	三星（SAMSUNG）
855739	2	Galaxy S5 G9008W
855739	3	闪耀白
855739	4	2014年
855739	5	触控
855739	6	是
==============================================================
返回 商品对应 规格的 项名（param_name）-值（param_value）
SELECT * FROM tb_item_param_value  pv,  tb_item_param_key  pk  WHERE item_id=855739 and  pv.param_id=pk.id;
855739	1	三星（SAMSUNG）	1	品牌	1
855739	2	Galaxy S5 G9008W	2	型号	1
855739	3	闪耀白	3	颜色	1
855739	4	2014年	4	上市年份	1
855739	5	触控	5	输入方式	1
==============================================================
返回 商品对应 规格的 组名（group_name）-项名（param_name）-值（param_value）
SELECT * FROM tb_item_param_value  pv,   tb_item_param_key  pk, tb_item_param_group pg  WHERE item_id=855739 and  pv.param_id=pk.id and pg.id=pk.group_id;
855739	1	三星（SAMSUNG）	1	品牌	1	1	主体	560
855739	2	Galaxy S5 G9008W	2	型号	1	1	主体	560
855739	3	闪耀白	3	颜色	1	1	主体	560
855739	4	2014年	4	上市年份	1	1	主体	560
855739	5	触控	5	输入方式	1	1	主体	560
855739	6	是	6	智能机	1	1	主体	560
855739	7	安卓（Android）	7	操作系统	1	1	主体	560
855739	8	Android 4.4	8	操作系统版本	1	1	主体	560
855739	9	Qualcomm 骁龙	9	CPU品牌	1	1	主体	560
855739	10	MSM8974Pro	10	CPU型号	1	1	主体	560
855739	11	2.5GHz	11	CPU频率	1	1	主体	560
855739	12	四核	12	CPU核数	1	1	主体	560
855739	13	在机身、在开机画面、在内置应用	13	运营商标志或内容	1	1	主体	560
855739	14	移动4G(TD-LTE)	14	4G网络制式	2	2	网络	560
855739	15	支持国际联通3G漫游，不支持国内联通3G。	15	3G网络制式	2	2	网络	560
855739	16	移动2G/联通2G(GSM)	16	2G网络制式	2	2	网络	560
855739	17	TD-LTE(1900/2300/2600) TD-SCDMA(1880/2010) GSM (850/900/1800/1900 MHZ)	17	网络频率	2	2	网络	560
855739	18	双卡双待双通	18	双卡机类型	2	2	网络	560
855739	19	16GB ROM	19	机身内存	3	3	存储	560
855739	20	2GB RAM	20	运行内存	3	3	存储	560
855739	21	MicroSD(TF)	21	储存卡类型	3	3	存储	560
855739	22	128GB	22	最大存储扩展	3	3	存储	560
855739	23	操作系统和预置应用程序占用部分存储空间, 因此实际用户可用空间少于存储器标称容量。操作系统或软件版本的更新可能会导致用户可用空间发生变化。	23	可用空间	3	3	存储	560
855739	24	5.1英寸	24	屏幕尺寸	4	4	显示	560
855739	25	电容屏，多点触控	25	触摸屏	4	4	显示	560
==============================================================
返回 商品对应 规格的指定字段的 组名（group_name）-项名（param_name）-值（param_value）
SELECT  pg.group_name,pk.param_name,pv.param_value FROM tb_item_param_value  pv,   tb_item_param_key  pk, tb_item_param_group pg  WHERE item_id=855739 and  pv.param_id=pk.id and pg.id=pk.group_id;
相同的 SQL
SELECT  pg.group_name,pk.param_name,pv.param_value FROM  tb_item_param_value  pv LEFT JOIN  tb_item_param_key  pk ON  pv.param_id=pk.id LEFT JOIN  tb_item_param_group pg ON pk.group_id =pg.id WHERE  item_id=855739 ;
主体	CPU频率	2.5GHz
主体	CPU核数	四核
主体	运营商标志或内容	在机身、在开机画面、在内置应用
网络	4G网络制式	移动4G(TD-LTE)
网络	3G网络制式	支持国际联通3G漫游，不支持国内联通3G。
网络	2G网络制式	移动2G/联通2G(GSM)
网络	网络频率	TD-LTE(1900/2300/2600) TD-SCDMA(1880/2010) GSM (850/900/1800/1900 MHZ)
网络	双卡机类型	双卡双待双通
存储	机身内存	16GB ROM
存储	运行内存	2GB RAM
存储	储存卡类型	MicroSD(TF)
存储	最大存储扩展	128GB
存储	可用空间	操作系统和预置应用程序占用部分存储空间, 因此实际用户可用空间少于存储器标称容量。操作系统或软件版本的更新可能会导致用户可用空间发生变化。
显示	屏幕尺寸	5.1英寸
显示	触摸屏	电容屏，多点触控
==============================================================
1、 需要创建多张表来描述规格参数之间的关系。
2、 查询时需要复杂的sql语句查询。
3、 规格参数数据量是商品信息的几十倍，数据量十分庞大。查询时效率很低。
4、 如果要求新添加的商品规格项发生改变，之前的商品不变是不能实现的。
==============================================================


简单方法二
==============================================================
可以使用模板的思路来解决此问题。
1、 每一个商品分类对一个规格参数模板。
[
    {
        "group": "主体",  //组名称
        "params": [ // 记录规格成员
            "品牌",
            "型号",
            "颜色",
            "上市年份",
            "上市月份"
        ]
}，
{
        "group": "网络",  //组名称
        "params": [ // 记录规格成员
            "4G",
            "3G,
            "2G"
        ]
}

]

2、 使用模板
每个商品对应一唯一的规格参数。在添加商品时，可以根据规格参数的模板。生成一个表单。保存规格参数时。还可以生成规格参数的json数据。保存到数据库中。
[
    {
        "group": "主体",
        "params": [
            {
                "k": "品牌",
                "v": "苹果（Apple）"
            },
            {
                "k": "型号",
                "v": "iPhone 6 A1589"
            },
{
                "k": "智能机",
                "v": "是 "
            }

        ]
}
]
==============================================================
CREATE TABLE `tb_item_param` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `item_cat_id` bigint(20) DEFAULT NULL COMMENT '商品类目ID',
  `param_data` text COMMENT '参数数据，格式为json格式',
  `created` datetime DEFAULT NULL,
  `updated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `item_cat_id` (`item_cat_id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8 COMMENT='商品规则参数';

CREATE TABLE `tb_item_param_item` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `item_id` bigint(20) DEFAULT NULL COMMENT '商品ID',
  `param_data` text COMMENT '参数数据，格式为json格式',
  `created` datetime DEFAULT NULL,
  `updated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `item_id` (`item_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COMMENT='商品规格和商品的关系表';
==============================================================
优点：
1、不需要做多表管理。
2、如果要求新添加的商品规格项发生改变，之前的商品不变是很简单的。

缺点：
复杂的表单和json之间的转换。对js的编写要求很高。