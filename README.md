# fujianWeather
福建省天气展示页面

##项目页面展示
![image](https://github.com/ggaoli/fujianWeather/raw/master/images/mdImg/fujianWeather.gif)

## 兼容性
所有主流浏览器，IE7+

## 数据
###百度接口数据

> 官网 [百度API接口][1]

 - weather.json
数据中包含有当天天气，未来四天天气数据和历史7填数据,如下所示：
![image](https://github.com/ggaoli/fujianWeather/raw/master/images/mdImg/0.jpg)
 - city.json
数据包含当前城市相关天气数据
```
{
  "errNum": 0,
  "errMsg": "success",
  "retData": {
    "city": "福州",
    "pinyin": "fuzhou",
    "citycode": "101230101",
    "date": "16-07-14",
    "time": "08:00",
    "postCode": "350000",
    "longitude": 119.303,
    "latitude": 26.071,
    "altitude": "85",
    "weather": "小雪",
    "temp": "36",
    "l_tmp": "27",
    "h_tmp": "36",
    "WD": "南风",
    "WS": "3-4级(10~17km/h)",
    "sunrise": "05:26",
    "sunset": "18:57"
  }
}
```
 - cityValue.json

数据包含福建省所有城市的编码，与百度天气接口上的城市编码一一对应
```
[
  {
    "cityname": "泉州",
    "cityid": "101230501"
  },
  {
    "cityname": "安溪",
    "cityid": "101230502"
  },
  {
    "cityname": "永春",
    "cityid": "101230504"
  },
  {
    "cityname": "德化",
    "cityid": "101230505"
  },
  {
    "cityname": "南安",
    "cityid": "101230506"
  },
  {
    "cityname": "崇武",
    "cityid": "101230507"
  },
  ...
  ...
  ]
```
### PM25.in 
> aqi指数数据接口取至PM25.in
> 官网：[PM25.in][2]

- fuzhou_aqi.json
数据包括数据发布时间和24小时的aqi值
```
{
  "result": {
    "status": {
      "code": 0,
      "msg": "Sucess"
    },
    "timestamp": "Wed Feb 08 16:55:27 +0800 2017",
    "data": [
      {
        "aqi": "40",
        "sample_time": "2017-02-08 15:00:00"
      },
      {
        "aqi": "52",
        "sample_time": "2017-02-08 14:00:00"
      },
      {
        "aqi": "62",
        "sample_time": "2017-02-08 13:00:00"
      },
     ...
     ...
    ]
  }
}
```
- fuzhou_pm2_5.json
```
[
  {
    "aqi": 22,
    "area": "福州",
    "co": 0.667,
    "co_24h": 0.517,
    "no2": 39,
    "no2_24h": 22,
    "o3": 46,
    "o3_24h": 96,
    "o3_8h": 47,
    "o3_8h_24h": 82,
    "pm10": 40,
    "pm10_24h": 38,
    "pm2_5": 12,
    "pm2_5_24h": 20,
    "quality": "优",
    "so2": 5,
    "so2_24h": 4,
    "primary_pollutant": "",
    "time_point": "2017-02-08T15:00:00Z"
  }
]
```
### 依赖文件
1. echart.js  图表组件
2. jquery.js 1.7+   js库



  [1]: http://apistore.baidu.com/
  [2]: http://www.pm25.in/api_doc
