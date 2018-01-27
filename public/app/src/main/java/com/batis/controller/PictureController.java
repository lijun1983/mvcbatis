package com.batis.controller;

import com.batis.common.utils.JsonUtils;
import com.batis.service.PictureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import java.util.Map;

/**
 * Created by root on 18-1-5.
 *TODO：KindEditor插件 图片公共提交地址 控制器
 *取旧文件名->生成 new 图片名->new 格式化图片名->定义 图片上传 日期 变量->调用 FtpUtil.uploadFile（定义图片相关常量 ）上传方法-》返回 resultMap : error 和 message
 */
@Controller
public class PictureController
{
  @Autowired
  private PictureService pictureService;

  /**
   * app pom.xml文件引入 <artifactId>commons-fileupload</artifactId> 包
   * @param uploadFile
   * @return
   */
  @RequestMapping("pic/upload")
  @ResponseBody
  public String pictureUpload(MultipartFile uploadFile)
  {
    Map result = pictureService.uploadPicture(uploadFile);
    //TODO:为了保证功能的兼容性，需要把Result转换成json格式的字符串。
    String json = JsonUtils.objectToJson(result); //TODO:调用 JsonUtils 插件类
    return json;
  }

}
