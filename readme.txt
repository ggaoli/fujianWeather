2016年8月4日
更新版本至v1.01
更改了：首页的搜索功能， province页面的table块的布局

2016年8月4日
更新版本至v1.02
更改了：调整搜索功能,以及首页的温馨提示

2016年8月12日
更新版本至v1.03
更改了：调整搜索功能；

更新文件：index.html，pinyin.js，index.js, index.css:535-606

注：index.html  1、在 id="frame_main_bg" 中添加id="frame_seach_row1"的内容；
	        2、在 id="frame_more_js" 中引入js文件pinyin.js；


AQI指数来源：
HaoService
 免费接口密钥 90f6bf81fbf24249b39ca09c540b9c44

城市数据
{
    "error_code": 0,
    "reason": "成功",
    "result": {
        "Ranking": 83,
        "CityName": "深圳市",
        "ProvinceName": "广东省",
        "AQI": 58,
        "Quality": "良",
        "PM25": "36μg/m³",
        "UpdateTime": "2014-04-27 21:00"
    }
}
地址如下：
 http://apis.haoservice.com/air/cityair?city=%E7%A6%8F%E5%BB%BA&key=90f6bf81fbf24249b39ca09c540b9c44

聚合数据 100次
密钥 64e4ca7162d958909733e80b9ed7ab8f
地址链接 https://www.juhe.cn/docs/api/id/33

接口数据地址  http://web.juhe.cn:8080/environment/air/cityair?city=fuzhou&key=64e4ca7162d958909733e80b9ed7ab8f

PM25.in 官网  http://www.pm25.in/api_doc
公共测试AppKey:5j1znBVAsnSf5xQyNQyq


json数据地址来源:

获取一个监测点的AQI数据（含详情）
fuzhou_pm2_5.json: http://www.pm25.in/api/querys/aqi_details.json?city=fuzhou&token=5j1znBVAsnSf5xQyNQyq&stations=no\


根据新浪接口数据获取
http://open.weather.sina.com.cn/api/airquality/live/43-48-30-31-30-31-30-30

http://open.weather.sina.com.cn/api/airquality/citys/

城市24小数aqi数据
http://open.weather.sina.com.cn/api/airquality/hours/43-48-32-33-30-31-30-31   （43-48-32-33-30-31-30-31 表示福州）


2017-02-10
v1.05版本更新项:
主要针对aqi.html页面的整改
1.判断当前所在城市导出相应城市数据
2.地图块去除raphael组件，支持点击城市异步传出相应空气质量数据
3.样式排版上的整改
备注:
主要更改的文件 aqi.css、 aqi.js 、aqi.html