/*****地图demo*****/
$(function(){

});

/*初始化颜色数据*/
function colorList(){
	var colorListDate=["#5fb4ff", "#5fb4ff", "#5fb4ff", "#5fb4ff", "#5fb4ff", "#5fb4ff", "#5fb4ff"];
	return colorListDate;
}
function innitMap(){
	var innitMapData = {
		'fuzhou': {'stateInitColor': 0, 'baifenbi': 0.236},
		'putian': {'stateInitColor': 2,'baifenbi': 0.5},
		'sanming': {'stateInitColor': 4},
		'ningde': {'stateInitColor': 3},
		'xiamen': {'stateInitColor': 5},
		'zhangzhou': {'stateInitColor': 6},
		'nanping': {'stateInitColor': 6},
		'longyan': {'stateInitColor': 1},
		'quanzhou': {'stateInitColor': 3},
		'pingtan': {'stateInitColor': 6}
	};
	return innitMapData;
}


/*返回信息提示框*/
function mapTip(str,stateData, obj){
	var strOptions = str.options;
	for(var k in strOptions ){
		if(obj.id==strOptions[k].id){
			var tipcon='<div class="tip-cart clearfix">' +				
					'<div class="branch-title"><b>'+ obj.name +'</b></div>' +										
					'<div class="count-three"><span class="count-num">' + strOptions[k].value + '</span></div></div></div>' +
					'</div>'
		}
	}
	return tipcon
}