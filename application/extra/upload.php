<?php

//上传配置
return [
    /**
     * 上传地址,默认是本地上传
     */
    'uploadurl' => 'ajax/upload',
    /**
     * CDN地址
     */
    'cdnurl'    => 'https://api.alaoph.org',
    /**
     * 文件保存格式
     */
    'savekey'   => '/uploads/{year}{mon}{day}/{filemd5}{.suffix}',
    /**
     * 最大可上传大小
     */
    'maxsize'   => '1mb',
    /**
     * 可上传的文件类型
     */
    'mimetype'  => 'jpg,png,bmp,jpeg,gif,webp,zip,rar,xls,xlsx,wav,mp4,mp3,webm,pdf,apk,ipa,wgt,apk',
    /**
     * 是否支持批量上传
     */
    'multiple'  => false,
    /**
     * 是否支持分片上传
     */
    'chunking'  => false,
    /**
     * 默认分片大小
     */
    'chunksize' => 2097152,
    /**
     * 完整URL模式
     */
    'fullmode' => false,
    /**
     * 缩略图样式
     */
    'thumbstyle' => '',
];
