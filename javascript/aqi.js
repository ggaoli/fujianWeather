/**
 * Created by gao li on 2017/2/6.
 */

;(function ($) {
    //dom节点缓存
    var dom={
        locCity:$('#loc-city'),
        nowTime:$('#now-time'),
        aqiValue:$('#aqi-value'),
        aqiQuality:$('#aqi-quality'),
        pm25Value:$('#pm25-value'),
        pm10Value:$('#pm10-value'),
        so2Value:$('#so2-value'),
        no2Value:$('#no2-value'),
        cityList:$('#city-list')
    };
    //数据设置
    var dataSet={
        levelTxt: ['优', '良', '轻度污染', '中度污染', '重度污染', '严重污染','暂无数据'],
        levelColor: ['#63d416', '#ffcc00', '#ff8a00', '#f7000c', '#90024c', '#600031','#000'],
        cityCode:{"fuzhou":"福州", "quanzhou":"泉州", "nanping":"南平", "ningde":"宁德", "sanming":"三明", "longyan":"龙岩", "putian":"莆田", "pingtan":"平潭", "xiamen":"厦门", "zhangzhou":"漳州"}
    };
    //公共方法
    var Util=(function () {
        //获取24小时数组
        function getHourArr() {
            var nowHour,date;
            var hourArr=[];
            date=new Date();
            nowHour=date.getHours();
            while (nowHour<24){
                hourArr.push(nowHour++);
            }
            for(var i=0;i<date.getHours();i++){
                hourArr.push(i);
            }
            return hourArr;
        }


        //aqi等级数
        function aqiLev(value) {
            var quality,color;
            if(value>0&&value<=50){
                quality=dataSet.levelTxt[0];
                color=dataSet.levelColor[0]
            }else if(value>50&&value<=100){
                quality=dataSet.levelTxt[1];
                color=dataSet.levelColor[1]
            }else if(value>100&&value<=150){
                quality=dataSet.levelTxt[2];
                color=dataSet.levelColor[2]
            }else if(value>150&&value<=200){
                quality=dataSet.levelTxt[3];
                color=dataSet.levelColor[3]
            }else if(value>200&&value<=300){
                quality=dataSet.levelTxt[4];
                color=dataSet.levelColor[4]
            }else if(value>3){
                quality=dataSet.levelTxt[5];
                color=dataSet.levelColor[5]
            }else if(value==''){
                quality=dataSet.levelTxt[6];
                color=dataSet.levelColor[6]
            }
            return {
                quality:quality,
                color:color
            }
        }

        // 城市PM相关值插入
        function pm25Inset(cityCode) {
            var url='javascript/lib/'+cityCode+'_pm2_5.json';
            $.ajax({
                type:'get',
                url:url,
                dataType:'json',
                async: false,
                success: function (aqiData) {
                    if(aqiData !=null){
                        var resData=aqiData[0];
                        dom.locCity.find('a').text(resData.area);
                        dom.aqiValue.text(resData.aqi);
                        dom.nowTime.text(resData.time_point.slice(5,10)+' '+resData.time_point.slice(11,16)+'发布');
                        dom.aqiQuality.text('/'+resData.quality);
                        dom.pm25Value.text(resData.pm2_5);
                        dom.pm10Value.text(resData.pm10_24h);
                        dom.so2Value.text(resData.so2_24h);
                        dom.no2Value.text(resData.no2_24h);
                        $('.api-num-box').css('background',Util.aqiLev(resData.aqi).color);
                    }
                },
                error: function (jqXHR) {
                    alert("发生错误:"+jqXHR.status);//200 或者400
                }
            });
        }

        //24小时aqi值数组
        function getAqiArr(cityCode) {
            var aqiArr=[];
            var url='javascript/lib/'+cityCode+'_aqi.json';
            $.ajax({
                type:'get',
                url:url,
                dataType:'json',
                async: false,
                success: function (aqiData) {
                    if(aqiData !=null){
                        var data=aqiData.result.data;
                        var item={};
                        for( var j=0;j<24;j++){
                            for(var i=0;i<data.length; i++){
                                var indexHour;
                                indexHour=data[i].sample_time.slice(11,13);//数组中的当前小时数
                                var hourArr=getHourArr();//24小时数组
                                item={};
                                 if(hourArr[j]==indexHour){
                                    item={
                                        value:data[i].aqi,
                                        // value:20,
                                        itemStyle: {
                                            normal: {
                                                color: Util.aqiLev(data[i].aqi).color
                                            }
                                        }
                                    };
                                    aqiArr.push(item);
                                }
                            }
                        }
                    }
                },
                error: function (jqXHR) {
                    alert("发生错误:"+jqXHR.status);//200 或者400
                }
            });
            return aqiArr;
        }

        //获取用户当前所在城市
        function getLocalCity() {
            $.getScript('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js',function(){
               // return remote_ip_info.city;
            });
            return '福州'
        }

        return {
            hourArr:getHourArr,
            pm25Inset:pm25Inset,
            aqiArr:getAqiArr,
            aqiLev:aqiLev,
            getLocalCity:getLocalCity
        }

    })();


    //获取所在城市的拼音
    function getPinyin(text) {
        for (var item in dataSet.cityCode){
            if(text==dataSet.cityCode[item]){
                return item;
            }
        }
    }



    //主函数入口
    function main() {
        var myChart = echarts.init($('#activation_chart')[0]);
        var cityCode=getPinyin(Util.getLocalCity());
        // 指定图表的配置项和数据
        var option= {
            tooltip : {
                trigger: 'axis',
                axisPointer : {
                    type : 'shadow'
                },
                backgroundColor:'#666'
            },
            grid: {
                left: '3%',
                right: '3%',
                bottom: '1%',
                top: '3%',
                containLabel: true
            },
            yAxis: {
                type: 'value'
            },
            xAxis: {
                type: 'category',
                splitLine: {
                    show: false
                },
                data: Util.hourArr()
            },
            series: [{
                type: 'bar',
                name:'AQI',
                barWidth: 15,
                data: Util.aqiArr(cityCode)
            }]
        };
        myChart.setOption(option);
      /* window.onresize = function(){
            myChart.resize();
        };*/

        Util.pm25Inset(cityCode);
        dom.cityList.find('li').each(function (index,value) {
            var _self=$(this);
            _self.on('click',function () {
                var targetId=_self.attr('id');
                Util.pm25Inset(targetId);
                $("html, body").animate({scrollTop:0}, 500);
                myChart.clear();
                option.series[0].data= Util.aqiArr(targetId);
                myChart.setOption(option);
                myChart.resize();
                // myChart.setOption({series: [{data: Util.aqiArr(targetId)}]});
            });

            //aqi面板
            function aqiPanel() {
                $.ajax({
                    type:'get',
                    url:'javascript/lib/'+value.id+'_pm2_5.json',
                    dataType:'json',
                    async:false,
                    success:function (data) {
                        if(data !=null){
                            var resData=data[0];
                            if(value.id==getPinyin(resData.area)){
                                _self.css('background',Util.aqiLev(resData.aqi).color);
                                _self.find('.name').text(resData.area);
                                _self.find('.value').text(resData.aqi);
                            }
                        }
                    },
                    error: function (jqXHR) {
                        alert("发生错误:"+jqXHR.status);//200 或者400
                    }
                });
            }

            aqiPanel();
            window.setInterval(function () {
                aqiPanel();
            },3000);
        });
        
        //分享
        $('.share').hover(function () {$(this).find('.share-box').show();},function () {$(this).find('.share-box').hide();});

        $('.bottom-bg').find('ul li').each(function (index,value) {
            $(value).on('mouseover',function () {
                $(value).find('.lev-detail').show();
            }).on('mouseout',function () {
                $(value).find('.lev-detail').hide();
            });
        })
    }

    return main();

})(jQuery);