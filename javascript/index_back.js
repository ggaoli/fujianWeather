/**
 * Created by gao li on 2016/7/4.
 */
$(function(){
    weatherInset();
    cityInset();
});


/*天气趋势图*/
$(function () {
   $('#qushi').on('click',function(){
       $('#weatherChat').highcharts({
           chart: {
               type: 'line'
           },
           title: {
               text:null
           },
           xAxis: {
               categories:weekNow
           },
           yAxis: {
               title: {
                   text: 'Temperature (°C)'
               },
               plotLines: [{
                   value: 0,
                   width: 1,
                   color: '#808080'
               }]
           },
           plotOptions: {
               line: {
                   dataLabels: {
                       enabled: true
                   }
               }
           },
           credits:{
               enabled:false
           },
           tooltip: {
               valueSuffix: '°C'
           },
           series: [{
               name: '最高气温',
               data: highTemp
           }, {
               name: '最低气温',
               data: lowTemp
           }]
       });
   });
});

/*历史天气滚动*/
$(function(){
    $('.tabliebiao').hover(function () {
        $(this).find('.slideBtn').fadeIn(300);
    },function(){
        $(this).find('.slideBtn').fadeOut(300);
    });
    var slideText=$('.tabliebiao ul');
    var slideBtn=$('.slideBtn');
    slideBtn.find('.btn-right').click(function(){
        slideText.animate({
            'left':'0'
        },300,function(){
            $('.btn-right').fadeOut();
            $('.btn-left').fadeIn();
        })
    });
    slideBtn.find('.btn-left').click(function(){
        slideText.animate({
            'left':'-386'
        },300,function(){
            $('.btn-right').fadeIn();
            $('.btn-left').fadeOut();
        })
    });
});


//天气icon图标判断
function weatherIcon(weather){
    var imgName='00';
    if ("晴"==weather) {
        imgName = "00";
    } else if ("多云"==weather) {
        imgName = "01";
    } else if ("阴"==weather) {
        imgName = "02";
    } else if ("阵雨"==weather) {
        imgName = "03";
    } else if ("雷阵雨"==weather) {
        imgName = "04";
    } else if ("雷阵雨伴有冰雹"==weather) {
        imgName = "05";
    } else if ("雨夹雪"==weather) {
        imgName = "06";
    } else if ("小雨"==weather) {
        imgName = "07";
    } else if ("中雨"==weather) {
        imgName = "08";
    } else if ("大雨"==weather) {
        imgName = "09";
    } else if ("暴雨"==weather) {
        imgName = "10";
    } else if ("大暴雨"==weather) {
        imgName = "11";
    } else if ("特大暴雨"==weather) {
        imgName = "12";
    } else if ("阵雪"==weather) {
        imgName = "13";
    } else if ("小雪"==weather) {
        imgName = "14";
    } else if ("中雪"==weather) {
        imgName = "15";
    } else if ("大雪"==weather) {
        imgName = "16";
    } else if ("暴雪"==weather) {
        imgName = "17";
    } else if ("雾"==weather) {
        imgName = "18";
    } else if ("冻雨"==weather) {
        imgName = "19";
    } else if ("沙尘暴"==weather) {
        imgName = "20";
    } else if ("小到中雨"==weather) {
        imgName = "21";
    } else if ("中到大雨"==weather) {
        imgName = "22";
    } else if ("大到暴雨"==weather) {
        imgName = "23";
    } else if ("暴雨到大暴雨"==weather) {
        imgName = "24";
    } else if ("大暴雨到特大暴雨"==weather) {
        imgName = "25";
    } else if ("小到中雪"==weather) {
        imgName = "26";
    } else if ("中到大雪"==weather) {
        imgName = "27";
    } else if ("大到暴雪"==weather) {
        imgName = "28";
    } else if ("浮尘"==weather) {
        imgName = "29";
    } else if ("扬沙"==weather) {
        imgName = "30";
    } else if ("强沙尘暴"==weather) {
        imgName = "31";
    } else if ("霾"==weather) {
        imgName = "53";
    }
    return imgName + ".png";
}

//大背景图判断
function weatherIndexBg(indexBg){
    var imgName='00';
    if ("晴"==indexBg) {
        imgName = "bg_01";
    } else if ("多云"==indexBg) {
        imgName = "bg_02";
    }else if("小雨"==indexBg||"中雨"==indexBg||"大雨"==indexBg||
        "暴雨"==indexBg||"大暴雨"==indexBg||"特大暴雨"==indexBg||
        "阵雨"==indexBg||"冻雨"==indexBg||"冰雹"==indexBg){
        imgName = "bg_03";
    }else if("小雪"==indexBg||"中雪"==indexBg||"大雪"==indexBg||
        "暴雪"==indexBg||"阵雪"==indexBg||"雨夹雪"==indexBg){
        imgName = "bg_04";
    }else if("雾"==indexBg){
        imgName = "bg_05";
    }else if("雾霾"==indexBg){
        imgName = "bg_06";
    }else if("阴天"==indexBg){
        imgName = "bg_07";
    }else if("闪电"==indexBg||"雷阵雨"==indexBg||"雷阵雨伴冰雹"==indexBg){
        imgName = "bg_08";
    }else if("浮沉"==indexBg||"扬沙"==indexBg||"沙城暴"==indexBg){
        imgName = "bg_09";
    }
    return imgName + ".jpg";
}


function weatherInset(){
    $.ajax({
        type:"GET",
        url:'javascript/weather.json',
        dataType:'json',
        beforeSend:'',
        async : false,
        success: function (weatherData) {
            if(weatherData !=null){
                /*生活指数*/
                var indexLiveData=weatherData.retData.today.index;
                if( indexLiveData !=null && indexLiveData.length==6){
                    var indexLiveHtml="";
                    $.each(indexLiveData, function (n, value) {
                        indexLiveHtml +='<li class="live clearfix">' +
                            '<div class="live-'+ (n+1) +'"> ' +
                            '<span>'+value.name+'</span> ' +
                            '<a href="javascript:void(0)" title="'+value.details+'">'+value.details+'</a> ' +
                            '</div></li>'
                    });
                    var indexLiving=  $('#indexLiving');
                    indexLiving.append(indexLiveHtml);
                    //限制字数溢出效果
                    indexLiving.find('li a').each(function(){
                        var maxWidth=40;
                        if($(this).text().length>maxWidth){
                            $(this).text($(this).text().substring(0,maxWidth));
                            $(this).html($(this).html()+'...');
                        }
                    });
                }

                /*福州最近7天的天气预报（包括历史两天、今天和未来四天）*/
                var forecastData=weatherData.retData.forecast,
                    todayData=weatherData.retData.today;
                    //historyData=weatherData.retData.history[5];
                    forecastData.unshift(weatherData.retData.history[5], weatherData.retData.history[6],todayData);
                highTemp=[];//最高气温
                lowTemp=[];//最低气温
                weekNow=[];//星期
                if(forecastData !=null){
                    var forecastHtml="";
                    $.each(forecastData,function(i,val){
                        forecastHtml +='<li>' +
                            '<div class="date">'+val.week+'&nbsp;'+val.date.slice(5)+'</div> ' +
                            '<div class="clearfix icon"> <div class="tcenter">' +
                            '<img src="images/weather_icon/icon_48/day/'+weatherIcon(val.type)+'" alt=" '+val.type+'" title=" '+val.type+'" />' +
                            '<span>'+val.type+'</span> </div> </div> ' +
                            '<div class="tem">'+ val.hightemp+'/'+val.lowtemp+'</div> ' +
                            '<div class="wind"><span>'+ val.fengxiang+'</span><span>'+val.fengli+'</span></div> ' +
                            '<div class="air-a" style="background:#76c92d">空气质量优质</div> ' +
                            '</li>';
                        //获取天气数据中最高温度、最低温度和星期天数
                        highTemp.push(parseInt(forecastData[i].hightemp.substring(0,2)));
                        lowTemp.push(parseInt(forecastData[i].lowtemp.substring(0,2)));
                        weekNow.push(forecastData[i].week+'<br>'+val.date.slice(5));
                    });
                    $('#weatherForecast').append(forecastHtml);
                }
            }
        },
        complete:function(){

        },
        error: function () {
            setTimeout(function () {
                //console.log('数据获取失败')
            },1000)
        }
    });

}
function cityInset(){
    $.ajax({
        type:"GET",
        url:'javascript/city.json',
        dataType:'json',
        success: function (cityData) {
            /*日出日落*/
            var sunriceTime=$('#sunRiceSet_c');
            sunriceTime.find('.sun_starrise').text(cityData.retData.sunrise);
            sunriceTime.find('.sun_starfall').text(cityData.retData.sunset);
            /*设置元饼图的数值区间*/
            //四舍五入日出日落小时数
            var sunriceHour=parseInt(cityData.retData.sunrise.substring(0,2)),
             sunsetHour=parseInt(cityData.retData.sunset.substring(0,2));
            var dateTime=new Date(),
                dateMinutes=dateTime.getMinutes(),
                dateHours=dateTime.getHours();
            if (dateMinutes>30){
                dateHours=dateHours+1;
            }
            if(cityData.retData.sunrise.substring(3)>30){
                sunriceHour=sunriceHour+1;
            }
            if(cityData.retData.sunset.substring(3)>30){
                sunsetHour=sunsetHour+1;
            }
            //设置data-currentpoint数值
            var currentPoint=Math.floor(((dateHours-sunriceHour)/(sunsetHour-sunriceHour))*100)/100;
            sunriceTime.attr('data-currentpoint',currentPoint);

            /*城市今日天气*/
            var cityLogData=$('#cityLogData');
            cityLogData.find('.loc').text(cityData.retData.city);
            var week=["日","一","二","三","四","五","六"];
            cityLogData.find('.date').text(cityData.retData.date+'  周'+week[new Date().getDay()]);
            cityLogData.find('.time b').text(cityData.retData.time);
            var weatherType=$('#weatherType');
            weatherType.find('span:nth-child(1)').text(cityData.retData.weather);
            weatherType.find('span:nth-child(2)').text(cityData.retData.WS);
            weatherType.find('span:nth-child(3)').text(cityData.retData.WD);
            $('#now-weather').text(cityData.retData.temp+'℃');
            var todayWeatherIcon=$('#todayWeatherIcon');
            todayWeatherIcon.append('<img src="images/weather_icon/icon_128/day/'+weatherIcon(cityData.retData.weather)+'' +
                '" alt="'+cityData.retData.weather+'" title="'+cityData.retData.weather+'" />');
            //首页大背景图
            var indexBgFile='';
            if(dateTime.getHours()<sunsetHour){
                indexBgFile='day_bg';
            }else{
                 indexBgFile='night_bg';
            }
            $('.main-bg').css({
                'background':'url(images/index_bg/'+indexBgFile+'/'+ weatherIndexBg(cityData.retData.weather)+') no-repeat 50% 100%'
            });
        },
        complete:function(){
            var rp1, starTimePercent,
                sunRiceSet = $('#sunRiceSet'), $icon_sun = $('#icon_sun'),
                blk3Offset;
            sunRiceSet.length && sunRiceSet.show(0);
            starTimePercent = $('#sunRiceSet_c').data('currentpoint');
            // 不在日出时间段
            if(starTimePercent < 0){
                return;
            }
            blk3Offset = sunRiceSet.offset();
            // 页面滚动到合适的位置再开始渲染, 假设现在开始页面不会出现顶部动画导致挪位
            $(window).add($(document.body)).on('scroll.starInit', function () {
                var wScrollTop, wViewHth;
                if(rp1){
                    $(window).add($(document.body)).off('scroll.starInit');
                    return;
                }
                wScrollTop = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
                wViewHth = Math.max(document.documentElement.clientHeight, $(window).height());
                if(wScrollTop + wViewHth > blk3Offset.top){
                    rp1 = Raphael('sunRiceSet_rp', 200, 100);
                    _drawStar(rp1, $icon_sun, starTimePercent, '#F39D12');
                }
            });
            // 圆心: 101, 94 半径: 93 直径: 186
            function _drawStar (rpCtx, $iconEle, posPercent, strokeColor) {
                // 当前时间不在日出/月出时间段
                if(Math.abs(posPercent) > 1){
                    return;
                }
                // 日出日落的两个点
                rpCtx.circle(8, 94, 5)
                    .attr({"stroke-width" : 0, fill: "white"})
                    .animate({r: 4, "fill": "#F19B12"}, 1e3);
                rpCtx.circle(194, 94, 5)
                    .attr({"stroke-width" : 0, fill: "white"})
                    .animate({r: 4, "fill": "#F19B12"}, 1e3);
                _aniStarIcon ($iconEle, posPercent);
                _drawStarBlk(rpCtx, posPercent);
            }
            // 图标移动到位置动画
            function _aniStarIcon ($iconEle, posPercent) {
                var curPercent = 0;
                var aniIconItv;
                $iconEle.show(0);
                aniIconItv = setInterval(function () {
                    if(curPercent >= posPercent){
                        curPercent = posPercent;
                        clearInterval(aniIconItv);
                        aniIconItv = null;
                    }
                    _moveStarIcon($icon_sun, curPercent);
                    curPercent += 0.01;
                }, 30);
            }
            function _moveStarIcon ($iconEle, posPercent) {
                var iconX, iconY;
                iconX = 186 * posPercent - 93;
                iconY = - Math.sqrt(93 * 93 - Math.pow(iconX, 2));
                iconX += 99;
                iconY += 130;
                $iconEle.css({
                    'left' : iconX + 'px',
                    'top' : iconY + 'px'
                });
            }
            // 绘制阴影面积
            // 圆心: 101, 94 半径: 93 直径: 186
            function _drawStarBlk (rpCtx, posPercent) {
                var startX, startY, x1, y1,
                    fillStarAni = Raphael.animation({fill: "#F19B12", opacity : '0.2'}, 500),
                    starShadow;
                startX = 101 - 93;
                startY = 94;
                x1 = 186 * posPercent - 93;
                y1 = - Math.sqrt(93 * 93 - Math.pow(x1, 2));
                x1 += 100;
                y1 += 92;
                starShadow = rpCtx.path('M' + startX + ' ' + startY + ' A93 94 0 0 1 ' + x1 + ' ' + y1 + ' L' + x1 + ' ' + '94 z')
                    .attr({"stroke-width" : 0, opacity : '0'})
                    .animate(fillStarAni.delay(2000));
                starShadow.hover(function () {
                    starShadow.animate({opacity : '0.8'}, 500);
                }, function () {
                    starShadow.animate({opacity : '0.2'}, 500);
                });
            }
        },
        error: function () {
            setTimeout(function () {
                //console.log('数据获取失败')
            },1000)
        }
    })
}


/******搜索功能******/
$(function(){
    var output = [];
    var cityId = [];
    var input = document.getElementById('topsearch');
    var citySearchCon = document.getElementById('citySearchCon');
    var liSet = [];
    var submitBtn=$('#submit-btn');

    input.onkeyup = function(e){
        e = e ? e:window.event;
        if(e.keyCode !== 38 && e.keyCode !==40){
            search( $.trim(this.value));
            if(citySearchCon.style.display==="block"){
                $(citySearchCon).textSearch($(input).val(),{});
            }
        }
    };
    input.onkeydown = function(e){
         e = e ? e:window.event;
        if(e.keyCode === 38 || e.keyCode ===40){
            if(citySearchCon.style.display==="block"){
                for(var i = 0,len = liSet.length; i<len;i++){
                    if($(liSet[i]).attr('class')=== 'on'){
                        break;
                    }
                }
                if(i===len){
                    $(liSet[0]).attr('class','on');
                    $(input).val($(liSet[0]).text());
                }
                else{
                   $(liSet[i]).attr('class','');
                    if(e.keyCode === 40){
                        i = ++i%len;
                        $(liSet[i]).attr('class','');
                        fixScrollPos(i);
                    }else{
                        i = (--i+len)%len;
                        $(liSet[i]).attr('class','on');
                        e.preventDefault();
                        fixScrollPos(i);
                    }
                }
            }else{
                if(output.length){
                    for(var i = 0,len = liSet.length; i<len;i++){
                        $(liSet[i]).attr('class','');
                    }
                   $( citySearchCon).show();
                }
            }
        }
        if(e.keyCode===13){
            if(citySearchCon.style.display==="block"){
                for(var i= 0,len=liSet.length;i<len;i++){
                    var windowHref='http://fj.pmp99.com/ca/2016041301000015.htm?cityName='+$(liSet[i]).text()+'&'+'cityId='+$(liSet[i]).attr('data-id');
                    if(liSet[i].className === 'on' || liSet.length==1){
                        window.location.href=windowHref;
                    }
                }
            }
            if(citySearchCon.style.display==="none"){
                window.location.href='province.html';
            }
        }
    };

    citySearchCon.onclick = function(e){
        e = e ? e:window.event;
        if(e.target.nodeName.toLowerCase() === 'li'){
            input.value = e.target.textContent;
        }
    };

    citySearchCon.onmouseover = function(e){
        e = e ? e:window.event;
        for(var i = 0,len = liSet.length; i<len;i++){
            liSet[i].className = '';
        }
        if(e.target.nodeName.toLowerCase() === 'li')
            e.target.className = 'on';
    };

    document.onclick = function(e){
        e = e ? e:window.event;
        if(e.target!==input&&e.target!==citySearchCon)
            $(citySearchCon).hide();
    };

    function search(value){
        $(citySearchCon).hide();
        output = [];
        cityId = [];
        $.ajax({
            type:"POST",
            url:'javascript/cityValue.json',
            dataType:'json',
            async : false,
            success: function (data){
                $.each(data,function(i,val){
                    if(val.cityname.indexOf(value)>=0){
                        output.push(val.cityname);
                        cityId.push(val.cityid);
                    }
                });
            },
            complete:function(data){
                if(output.length){
                    var i = 0,lis="";
                    while(output[i]){
                        lis += "<li data-id="+cityId[i]+">"+output[i]+"</li>";
                        i++;
                    }
                    $(citySearchCon).html(lis);
                    $(citySearchCon).show();
                    liSet = $(citySearchCon).find('li');
                    $(liSet).each(function(){
                        $(this).on('click',function(){
                            window.location.href='http://fj.pmp99.com/ca/2016041301000015.htm?cityName='+$(this).text()+'&'+'cityId='+$(this).attr('data-id');
                        });
                    });
                }else{
                    $(citySearchCon).hide();
                }
            },
            error:function(){
                //console.log("数据传输失败");
            }
        })
    }
    function fixScrollPos(pos){
        var sTop = citySearchCon.scrollTop;
        //var viewHeight = parseInt(document.defaultView.getComputedStyle(citySearchCon,null).height,10);
        var viewHeight = $(citySearchCon).height();
        var sBottom = sTop + viewHeight;
        var itemHeight = $(liSet[0]).height();
        var liPos = pos*itemHeight;
        if( liPos >= sBottom){
            citySearchCon.scrollTop = liPos - ( viewHeight - itemHeight);
        }else if( liPos < sTop){
            citySearchCon.scrollTop = liPos;
        }
        $(liSet[pos]).attr('class','on');
        $(input).val($(liSet[pos]).text());
    }

    submitBtn.on('click',function(){
        window.location.href='province.html'
    });

});