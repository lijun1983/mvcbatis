package com.batis.service.impl;

import com.batis.common.utils.FtpUtil;
import com.batis.common.utils.IDUtils;
import com.batis.service.PictureService;
import org.joda.time.DateTime;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by root on 18-1-5.
 */
@Service
public class PictureServiceImpl implements PictureService
{
  //定义图片相关常量 resource/resource.properties
  @Value("${FTP_ADDRESS}")//TODO:FTP的IP地址
  private String FTP_ADDRESS;
  @Value("${FTP_PORT}")//TODO:FTP的IP端口
  private Integer FTP_PORT;
  @Value("${FTP_USERNAME}")//TODO:FTP的用户
  private String FTP_USERNAME;
  @Value("${FTP_PASSWORD}")//TODO:FTP的密码
  private String FTP_PASSWORD;
  @Value("${FTP_BASE_PATH}")//TODO:FTP的上传根路径   /home/ftpuser/www/images
  private String FTP_BASE_PATH;
  @Value("${IMAGE_BASE_URL}")//TODO:图片服务器的基础url http://10.0.0.7/images
  private String IMAGE_BASE_URL;

  /**
   * TODO:处理客户端上传上来的图片
   * 取旧文件名->生成 new 图片名->new 格式化图片名->定义 图片上传 日期 变量->调用 FtpUtil.uploadFile（定义图片相关常量 ）上传方法-》返回 resultMap : error 和 message
   * @param uploadFile
   * @return json resultMap
   */
  @Override
  public Map uploadPicture(MultipartFile uploadFile)
  {
    Map resultMap = new HashMap<>();
    try{
      //生成一个新的动态文件名

      String oldName = uploadFile.getOriginalFilename();//取旧文件名
      //生成新文件名
      //UUID.randomUUID();
      String newName = IDUtils.genImageName();//TODO: 生成 new 图片名 设用插件类 com.batis.common.utils.IDUtils

      newName = newName + oldName.substring(oldName.lastIndexOf("."));//new 格式化图片名
      //定义 图片上传 日期 变量
      String imagePath = new DateTime().toString("/yyyy/MM/dd");
      //TODO:调用 com.batis.common.utils.FtpUtil 类
      boolean result = FtpUtil.uploadFile(FTP_ADDRESS, FTP_PORT, FTP_USERNAME, FTP_PASSWORD,FTP_BASE_PATH, imagePath, newName, uploadFile.getInputStream());
      //返回结果
      if(!result)
      {
        resultMap.put("error", 1);
        resultMap.put("message", "文件上传失败");
        return resultMap;
      }
      resultMap.put("error", 0);
      resultMap.put("url", IMAGE_BASE_URL + imagePath + "/" + newName);
      //说明 http://vm.images.com/2015/09/04/hello.jpg;  IMAGE_BASE_URL 等于 http://vm.images.com  ;imagePath 等于 /2015/09/04;  newName 等于 /hello.jpg
      return resultMap;
    } catch (Exception e)
    {
      resultMap.put("error", 1);
      resultMap.put("message", "文件上传发生异常");
      return resultMap;
    }
   // return null;
  }
}
