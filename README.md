# fujianWeather
福建省天气展示页面

##项目页面展示
![image](https://github.com/ggaoli/fujianWeather/raw/master/images/mdImg/fujianWeather.gif)

## 兼容性
所有主流浏览器，IE7+

## 数据
###百度接口数据
1. weather.json
数据中包含有当天天气，未来四天天气数据和历史7填数据,如下所示：
![image](https://github.com/ggaoli/fujianWeather/raw/master/images/mdImg/0.jpg)
2. city.json
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
3. cityValue.json
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
