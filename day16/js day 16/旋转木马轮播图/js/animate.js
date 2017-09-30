/*获取元素属性函数*/
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return window.getComputedStyle(obj,null)[attr];
	}
}

//多属性运动框架
function animate(obj,json,fn){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var flag = true;//判断停止计时器
		for(var attr in json){
			//利用attr遍历json数组，attr就是json的属性
			var current = 0;//初始值
			if(attr=='opacity'){
				current=Math.round(parseInt(getStyle(obj,attr)*100));
			}else{
				current=parseInt(getStyle(obj,attr));
			}
			var step = (json[attr] - current)/10;//json[attr]就是我们传进来的，想要走到的位置，所以就是目标值，current就是初始值，也就是：（目标值-初始值）/10=步长
			step = step>0?Math.ceil(step):Math.floor(step);//步长取整
			if(attr=='opacity'){
				obj.style.opacity=(current+step)/100;
			}else if(attr =='zIndex'){
				obj.style.zIndex=json[attr];
			}else{
				obj.style[attr]=current+step+'px';
			}
			if(current!=json[attr]){
				flag=false;
			}
		}
		if(flag){
			clearInterval(obj.timer);
			if(fn){
				fn();
			}
		}
	},10);
}



