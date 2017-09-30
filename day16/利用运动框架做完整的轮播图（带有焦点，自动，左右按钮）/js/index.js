window.onload = function() {
	function $(id) {
		return document.getElementById(id);
	}
	var js_slider = $('js_slider'); //获取最大盒子
	var slider_main_block = $('slider_main_block'); //滚动图片的父亲
	var imgs = slider_main_block.children; //获取所有需要滚动图片，存为一个组；
	var slider_ctrl = $('slider_ctrl'); //获取按钮控制按钮的父盒子
	//	console.log(imgs,slider_ctrl)
	
	
	
	//1.创建小圆点
	for(var i = 0; i < imgs.length; i++) { //循环创建小圆点
		var span = document.createElement('span'); //创建小圆点
		span.className = 'slider-ctrl-con'; //给小圆点添加样式
		span.innerHTML = imgs.length - i; //通过倒叙的方式插入
		slider_ctrl.insertBefore(span, slider_ctrl.children[1]); //可以直接用app直接插入，这里只是用一个新方法
	}
	var spans = slider_ctrl.children; //获取所有span
	spans[1].setAttribute('class', 'slider-ctrl-con current'); //给span设置样式，一个通用样式，一个蓝色样式
		
	
	
	
	
	
	//2.点击左边按钮，实现轮播效果
	//2.1计算动画距离
	var scrollWidth = js_slider.clientWidth; //得到大耗子的快递，也就是后面动画走的距离
	//2.2把所有的图片丢到右边去搁着
	for(var i = 1; i < imgs.length; i++) { //从1开始，因为第0张（也就会第一张不计算）
		imgs[i].style.left = scrollWidth + 'px'; //把除了第一张以外的所有图片全都放到后面去
	}
	//2.3 点击移动图片
	var iNow=0;//表示索引，用来控制播放张数
	//2.3.1 循环遍历得到所有span，因为左右按钮也是span
	for(var k in spans){//k是索引号，得到span[k]，例如span[0]
		spans[k].onclick=function(){
			//2.3.2每个span添加点击事件，这里单独给左边按钮添加
			if(this.className=='slider-ctrl-prev'){//判断是否点击的上一张图片
//				alert('您点击的是左边')
				//执行动画，把当前图片放到右边去
				animate(imgs[iNow],{left:scrollWidth});
				//当前图片索引--，就是上一张图片
				--iNow<0?iNow=imgs.length-1:iNow;
				//让上一张图片出现在当前显示的左边，这样可以看起来是从左边出来的
				imgs[iNow].style.left=-scrollWidth+'px';
				//让上一张图片从左边到屏幕中间，实现动画效果
				animate(imgs[iNow],{left:0});
//				console.log(iNow);
				setSquare();
			}else if(this.className=='slider-ctrl-next'){
				autoplay();
			}
		}
	}
	
	//3. 控制小圆点轮播的函数
	function setSquare(){
		//先清除所有小圆点，然后再给想要的小圆点添加样式
		for(var i=1;i<spans.length-1;i++){//我们有六个小圆点，两个箭头按钮，都是span.但是我们只要六个小圆点就行了，所以第一个span和最后一个span不要
			spans[i].className='slider-ctrl-con';//清除蓝色样式，保留基本样式
		}
		spans[iNow+1].className='slider-ctrl-con current';//给当前小圆点添加蓝色样式
	}
	var timer=null;
	timer=setInterval(autoplay,2000);
	
	function autoplay(){
		//当我们点击的时候，当前图片，走到左边去，然后，下一张图片，快速移动到右侧，然后通过动画移动到中间
//		alert('右边')
		animate(imgs[iNow],{left:-scrollWidth});//往左边走为负，右边则为正
		++iNow>imgs.length-1?iNow=0:iNow;
		imgs[iNow].style.left=scrollWidth+'px';
		animate(imgs[iNow],{left:0});
		setSquare();
	}
	js_slider.onmouseover=function(){
		clearInterval(timer);
	}
	js_slider.onmouseout=function(){
		clearInterval(timer);
		timer =setInterval(autoplay,2000);
	}

















































}