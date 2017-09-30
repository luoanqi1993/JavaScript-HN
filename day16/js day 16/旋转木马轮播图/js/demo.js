window.onload=function(){
	
	var warp = document.getElementById("warp");
	var arrow = document.getElementById("arrow");
	var slider = document.getElementById("slider");
	var lis = slider.getElementsByTagName('li');
	warp.onmouseover=function(){//鼠标经过，显示两个按钮
		animate(arrow,{opacity:100});
	}
	warp.onmouseout=function(){
		animate(arrow,{opacity:0});
	}
	
	var json=[{width:400,top:20,left:50,opacity:20,zIndex:2},//左边最上面一个
			{width:600,top:70,left:0,opacity:80,zIndex:3},//左边中间一个，也就是第二个
			{width:800,top:100,left:200,opacity:100,zIndex:4},//中间一个
			{width:600,top:70,left:600,opacity:80,zIndex:3},//右边中间一个，也就是第四个
			{width:400,top:20,left:750,opacity:20,zIndex:2}]//右边最上面一个，也就是最后一个
	console.log(json)
	change(false);
	//两个按钮点击事件
	var as=arrow.children;
	for(var k in as){
		as[k].onclick=function(){
			if(this.className == "prev"){
				change(true);
			}else{
				change(false);
			}
		}
	}
	function change(flag){
		if(flag){
			json.unshift(json.pop());
		}else{
			json.push(json.shift())
		}

		for(var i=0;i<json.length;i++){
			animate(lis[i],{
				width:json[i].width,
				top:json[i].top,
				left:json[i].left,
				opacity:json[i].opacity,
				zIndex:json[i].zIndex
			})
		}
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
