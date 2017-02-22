
/*下拉菜单*/
$(function(){
	$(".drop").hover(function(){
		$(this).find(".drop_nav").addClass("drop_hover");
		$(this).find(".drop_nav").removeClass("arrow_down").addClass("arrow_up");
		$(this).find(".drop_con").slideDown(0);
	},function(){
		$(this).find(".drop_con").slideUp(0);
		$(this).find(".drop_nav").removeClass("drop_hover");
		$(this).find(".drop_nav").removeClass("arrow_up").addClass("arrow_down");
	});
});

/******搜索功能******/
$(function(){
   var output = [];
   var cityId = [];
   var cityPinyin = [];
   var cityArray=[];
   var input = document.getElementById('topsearch');
   $(input).attr('autocomplete','off');
   var citySearchCon = document.getElementById('citySearchCon');
   var citySortCon = document.getElementById('frame_citySortCon');
   var liSet = [];
   $('.bt').removeAttr('type').attr('id','submit-btn');
   var submitBtn=$('#submit-btn');
   var tab_a=$('#mod_tab-rec-1').find('.tab li a');
   input.onkeyup = function(e){
      e = e ? e:window.event;
      if(e.keyCode !== 38 && e.keyCode !==40){
         if($.trim(this.value).length>1||/^[\u4e00-\u9fa5]+$/.test(this.value)){
            search($.trim(this.value));
         }
         else{
            $(citySearchCon).hide();
         }
      }
   };

   input.onkeydown = function(e){
      e = e ? e:window.event;
      $(citySortCon).hide();
      if(e.keyCode === 38 || e.keyCode ===40){
         if(citySearchCon.style.display==="block"){
            for(var i = 0,len = liSet.length; i<len;i++){
               if($(liSet[i]).attr('class')=== 'on'){
                  break;
               }
            }
            if(i===len){
               $(liSet[0]).attr('class','on');
               $(input).val($(liSet[0]).attr('data-name'));
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
            if($(citySearchCon).find('li').length==0){
               window.location.href='province.html';
               return;
            }else{
               for(var i= 0,len=liSet.length;i<len;i++){
                  var windowHref='http://fj.pmp99.com/ca/2016041301000015.htm?cityName='+$(liSet[i]).attr('data-name')+'&'+'cityId='+$(liSet[i]).attr('data-id');
                  if(liSet[i].className === 'on' || liSet.length==1){
                     window.location.href=windowHref;
                  }
               }
            }
         }

      }
   };

   input.onclick=function(e){//点击文本框弹出城市分类
      if(input.value=='') {
         $(citySortCon).slideDown(200);
      }
      if(input.value!=''&&($.trim(this.value).length>1||/^[\u4e00-\u9fa5]+$/.test(this.value))) {
         search($.trim(this.value));
      }
   };

   citySearchCon.onclick = function(e){
      e = e ? e:window.event;
      var target=e.target || e.srcElement;
      if(target.nodeName.toLowerCase() === 'li'){
         input.value = $(target).attr('data-name');
      }
   };

   citySearchCon.onmouseover = function(e){
      e = e ? e:window.event;
      var target=e.target || e.srcElement;
      $(citySearchCon).find('li').attr('class','');
      if(target.nodeName.toLowerCase() === 'li')
         target.className = 'on';
   };

   document.onclick = function(e){
      e = e ? e:window.event;
      var target=e.target || e.srcElement;//ie低版本浏览器兼容
      if((target!=input&&target!=citySearchCon)){
         $(citySearchCon).hide();
      }
      if(target!=input&&target!=citySortCon&&target.nodeName!='A'&&target.nodeName!='UL'){//点击目标非城市分类时隐藏
         $(citySortCon).slideUp(200);
      }
   };

   function search(value){
      $(citySearchCon).hide();
      $(citySortCon).hide();
      output = [];
      cityId = [];
      var flag;
      // pinyinCity=[];
      var temp;
      /*$.ajax({
       type:"POST",
       url:'javascript/cityValue.json',
       dataType:'json',
       async : false,
       success: function (data){
       $.each(data,function(i,val){
       //temp=pinyin.getFullChars(val.cityname);
       if(val.cityname.indexOf(value)>=0){
       output.push(val.cityname);
       cityId.push(val.cityid);
       //cityPinyin.push(pinyin.getFullChars(temp));
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
       if($.trim($(input).val())==''){
       $(citySearchCon).hide();
       }else{
       $(citySearchCon).show();
       }
       liSet = $(citySearchCon).find('li');
       liSet.eq(0).addClass('on');
       $(liSet).each(function(){
       $(this).on('click',function(){
       window.location.href='http://fj.pmp99.com/ca/2016041301000015.htm?cityName='+$(this).text()+'&'+'cityId='+$(this).attr('data-id');
       });
       });
       //if(citySearchCon.style.display==="block"){
       //    $(citySearchCon).textSearch($(input).val(),{});
       //}
       }else{
       $(citySearchCon).hide();
       }
       },
       error:function(){
       //console.log("数据传输失败");
       }
       })*/

      //search 2
      var lis1='',tempStr;
      for(var i=0;i<cityArray.length;i++){
         //value
         flag=ismatch(cityArray[i],value);
         if(flag){
            if(flag=='1'){//中文匹配
               tempStr=' — '+cityArray[i].parent;
            }
            else if(flag=='2'){//拼音匹配
               tempStr='( '+cityArray[i].cityPinyin.toLowerCase()+' ) — '+cityArray[i].parent;
            }
            if(flag=='3'){//字母缩写
               tempStr='( '+cityArray[i].cityAb.toLowerCase()+' ) — '+cityArray[i].parent;
            }
            lis1 += '<li data-id="'+cityArray[i].cityId+'" data-name="'+cityArray[i].cityName+'">'+cityArray[i].cityName+tempStr+' </li>';
         }
      }
      if(lis1==''){
         lis1='<p class="none-s">未能找到对应城市</p>';
      }
      $(citySearchCon).html(lis1);
      liSet = $(citySearchCon).find('li');
      liSet.eq(0).addClass('on');
      $(liSet).each(function(){
         $(this).on('click',function(){
            window.location.href='http://fj.pmp99.com/ca/2016041301000015.htm?cityName='+$(this).attr('data-name')+'&'+'cityId='+$(this).attr('data-id');
         });
      });
      $(citySearchCon).show();
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
      //$(citySearchCon).find('li').eq(pos).attr('class','on');
      $(input).val($(liSet[pos]).attr('data-name'));
   }
   submitBtn.on('click',function(){
      window.location.href='province.html';
   });
   //初始化tab数据
   function initTab(){
      // 填充数据tab数据
      initPinyinCity();//初始化数据
      var charArray=sortByPinyin([72,78,84]);//eg:['A-E','F-N','O-T',U-Z]
      var rangCity=st(cityArray,charArray);//eg:rangCity[0]=[obj1,obj2.obj3]
      var tab_lis='';var tab_lion=' class="on" ';
      var ul_lis='',speiceul_lis='',id;
      var frame_sort_dttab_con='',con='',style=' style="display: block;" ';
      for(var i=0;i<charArray.length;i++){//构造tab_li
         if(i!=0){
            tab_lion='';
         }
         tab_lis+='<li><a href="#">'+charArray[i]+'</a></li>'
      }
      style=' style="display: none;" ';
      for(var i=0;i<rangCity.length;i++){//构造frame_sort_dttab_con_i
         con='';
         ul_lis='';
         for(var j=0;j<rangCity[i].length;j++)//构造每个ul的li
         {
            ul_lis+='<li data-id="'+rangCity[i][j].cityId+'" data-name="'+rangCity[i][j].cityName+'"><a>'+rangCity[i][j].cityName+'</a></li>';
            id=rangCity[i][j].cityId;
            if(id.substring(id.length-2,id.length)=='01'){
               speiceul_lis+='<li data-id="'+rangCity[i][j].cityId+'" data-name="'+rangCity[i][j].cityName+'"><a>'+rangCity[i][j].cityName+'</a></li>';
            }

         }
         con='<div id="frame_sort_dttab_con_'+(i+2)+'"'+style+'> ' +
             '<div id="data_sortCity'+(i+2)+'" class="sortCity-list"> ' +
             '<ul class="clearfix"> ' +ul_lis+
             '</ul>' +
             '</div>' +
             '</div>';
         frame_sort_dttab_con+=con;
      }
      speiceul_lis+='<li data-id="101230108" data-name="平潭"><a>平潭</a></li>';
      con='<div id="frame_sort_dttab_con_1" style="display: block"> ' +
          '<div id="data_sortCity1" class="sortCity-list"> ' +
          '<ul class="clearfix"> ' +speiceul_lis+
          '</ul>' +
          '</div>' +
          '</div>';
      frame_sort_dttab_con=con+frame_sort_dttab_con;
      tab_lis='<li class="on"><a href="#">热门</a></li>'+tab_lis;
      $(citySortCon).find('.tab #citySort').html(tab_lis);
      //添加点击事件
      $(citySortCon).find('.modcon').html(frame_sort_dttab_con);

      liSet = $(citySortCon).find('.modcon li');
      liSet.eq(0).addClass('on');
      $(liSet).each(function(){
         $(this).on('click',function(){
            window.location.href='http://fj.pmp99.com/ca/2016041301000015.htm?cityName='+$(this).attr('data-name')+'&'+'cityId='+$(this).attr('data-id');
         });
      });
   }

   //匹配中文，拼音，简写
   //参数  城市对象，值
   //返回匹配标志 1：中文匹配，2：拼音匹配，3：字母简写匹配 false:不匹配
   function ismatch(city,value){
      var cityP=city.cityPinyin.toLowerCase();
      var cityA=city.cityAb.toLowerCase();
      value=value.toLowerCase();
      if((city.cityName.indexOf(value))>=0)
      {
         return '1';
      }
      if((cityP.indexOf(value))==0)
      {
         return '2';
      }
      if((cityA.indexOf(value))==0){
         return '3'
      }
      return false;
   }

   //根据id分类数据


   //根据json数据构建数组对象并按拼音排序 cityArray为拼音有序的全局城市对象
   function initPinyinCity(){
      cityPinyin=[];

      cityArray=[];//二维数组[[obj1],[obj2],[obj3]......]obj=[cityName,cityId,cityPinyin]   //全局对象

      var temp,tempId,curParent;
      $.ajax({
         type:"POST",
         url:'javascript/cityValue.json',
         dataType:'json',
         async : false,
         success: function (data){ //填充数组数据（cityname,cityId,cityPinyin）
            $.each(data,function(i,val){
               /* output.push(val.cityname);
                cityId.push(val.cityid);*/
               temp=val.cityname;
               tempId=val.cityid;

               if(tempId.substring(tempId.length-2,tempId.length)=='01')
               {
                  curParent=val.cityname;
               }
               cityArray.push(new cityPersion(val.cityname,val.cityid,pinyin.getFullChars(temp),pinyin.getCamelChars(temp),curParent));
            });
         },
         complete:function(data){ //完成数组构建后按拼音排序
            if( cityArray.length){
               cityArray.sort(function(a,b){
                  return a.cityPinyin.localeCompare(b.cityPinyin);
               });
               var str='';//test
               /*for(var i=0;i<cityArray.length;i++){
                str+=cityArray[i].cityName+cityArray[i].cityPinyin;
                }*///test
               //alert(str);//test
            }else{
               //console.log("数据传输失败");
            }
         },
         error:function(){
            //console.log("数据传输失败");
         }
      })
   }

   //构建城市-拼音对象
   function cityPersion(cityName,cityId,cityPinyin,cityAb,parent){
      this.cityName=cityName;
      this.cityId=cityId;
      this.cityPinyin=cityPinyin;//首字母大写全拼
      this.cityAb=cityAb;//拼音简写
      this.parent=parent;//所属城市

   }

   //构造字母分类，返回数组eg:['A-E','H-I','O-T']
   function sortByPinyin(codeArray){//codeArray[大写字母anscii数组]，
      if(codeArray.length){
         codeArray.sort(function(a,b){return a-b});//防止ascii码出错,排序
         var firstC='A';
         var lastC='Z';
         var sortStr=[];//字母分类
         var tempChar,tempChar1;
         var str;
         sortStr.push(firstC+'-'+String.fromCharCode(codeArray[0]));//first
         str=firstC+'-'+String.fromCharCode(codeArray[0]);
         for(var i=0;i<codeArray.length;i++){
            if(i==codeArray.length-1){//last
               tempChar=String.fromCharCode(codeArray[i]+1); //ascii转字符
               sortStr.push(tempChar+'-'+lastC);
               str+=tempChar+'-'+lastC;//test
            }
            else{
               tempChar=String.fromCharCode(codeArray[i]+1);
               tempChar1=String.fromCharCode(codeArray[i+1]);
               sortStr.push(tempChar+'-'+tempChar1);
               str+=tempChar+'-'+tempChar1;//test
            }
         }
         //alert(str);//test
         return sortStr;
      }
      else{
         // console.log("数据传输失败");
      }
   }

   //按字母分类城市,返回分类数组[[],[]]
   function st(cityArray,charArray){
      var cityPinyin;
      var j=0,i=0;
      var sortCity=[];
      for(i=0;i<charArray.length;i++){
         var tempCityArray=[];
         for(j=0;j<cityArray.length;j++){
            cityPinyin=cityArray[j].cityPinyin;
            if(isIn(cityPinyin,charArray[i])){
               tempCityArray.push(cityArray[j]);
               //break;
               //alert(cityPinyin);
            }
         }
         sortCity.push(tempCityArray);
         //alert(i);
      }
      //alert(sortCity[0].length);//test
      return sortCity;
   }

   //判断该城市拼音是否在某范围内（如A-E）
   function isIn(cityPinyin,charRange){
      var CharRange=[];
      CharRange=charRange.split('-');

      var char=cityPinyin.substring(0,1);
      if(char>=CharRange[0]&&char<=CharRange[1])
      {
         return true;
      }
      else{
         return false;
      }
   }
   initTab();
   new o_tab().init( "citySort","li","frame_sort_dttab_con_","on","",1,"" );
   $('#topsearch').attr('placeholder','输入中文、拼音及简写');

});

//锚点点击跳转
$(function () {
   $('.smooth').click(function (e) {
      e.preventDefault();
      var href=$(this).attr('href');
      var pos=$(href).offset().top;
      $('html,body').animate({
         scrollTop:pos
      },500);
   });
});

