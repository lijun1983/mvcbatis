package com.batis.service;

import org.springframework.web.multipart.MultipartFile;

import java.util.Map;

/**
 * Created by root on 18-1-5.
 */
public interface PictureService
{
 Map uploadPicture(MultipartFile uploadFile);//生成一个新的图片  文件名
}
