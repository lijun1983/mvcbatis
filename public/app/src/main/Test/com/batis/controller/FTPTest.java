package com.batis.controller;

import com.batis.common.utils.FtpUtil;
import org.apache.commons.net.ftp.FTP;
import org.apache.commons.net.ftp.FTPClient;
import org.junit.Test;

import java.io.File;
import java.io.FileInputStream;

/**
 * Created by root on 18-1-5.
 * TODO:图上上传测试类
 * 需要的加载的包
 * commons-logging
 * commons-net
 */
public class FTPTest
{
  @Test
  public void testFtpClient() throws Exception{
    //TODO:创建一个 testFtpClient 对象
    FTPClient ftpClient = new FTPClient();
    //TODO:创建ftp连接。默认是21端口
    ftpClient.connect("10.0.0.7",21);
    //TODO:登录ftp服务器，使用用户名和密码
    ftpClient.login("ftpuser","root");
    //上传文件。
    //读取本地文件
    //win7 写法 D:\Documents\Pictures\images\2010101415583352_S.jpg
    FileInputStream inputStream = new FileInputStream(new File("/github/Uploads/javatestftp.jpg"));
    //TODO:设置上传的路径
    ftpClient.changeWorkingDirectory("/home/ftpuser/www/images");
    //TODO:修改上传文件的格式 否侧上传的图会损坏
    ftpClient.setFileType(FTP.BINARY_FILE_TYPE);
    //TODO：第一个参数：服务器端文档名
    //TODO：不明 ? 第二个参数：上传文档的 io 流  inputStream
    ftpClient.storeFile("hello1.jpg", inputStream);
    //关闭连接
    ftpClient.logout();
  }

  /**
   * TODO:封装成一个工具 类 供其它项目使用
   * 按日期存图片
   * @throws Exception
   */
  @Test
  public void testFtpUtil() throws Exception {
    FileInputStream inputStream = new FileInputStream(new File("/github/Uploads/javatestftp.jpg"));
    FtpUtil.uploadFile("10.0.0.7", 21, "ftpuser", "root", "/home/ftpuser/www/images", "/2015/09/04", "hello.jpg", inputStream);

  }
}
