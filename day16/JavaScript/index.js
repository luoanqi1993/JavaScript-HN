window.onload = function(){
    function $(id){
        return document.getElementById(id);
    }

    var banner = $("js_banner");    //获取最大盒子
    var pic = $("js_pic");    //滚动图片的父亲
    var imgs = pic.children;     //获取所有需要滚动图片，存为一个组；
    var btn = $("js_btn");     //获取按钮控制按钮的父盒子



    for(var i=0;i<imgs.length;i++){    //循环创建小圆点
        var span = document.createElement("span");   //创建小圆点
        span.className = "btn-icon";          //给小圆点添加样式
        span.innerHTML = imgs.length - i;        //通过倒叙的方式插入
        btn.insertBefore(span,btn.children[1]);       //可以直接用app直接插入，这里只是用一个新方法
    }
    var spans = btn.children;     //获取所有span
    spans[1].setAttribute("class","btn-icon bg-icon") ;   //给span设置样式，一个通用样式，一个蓝色样式



    //点击左边按钮，实现轮播效果
    //计算动画距离
    var scrollWidth = banner.clientWidth;   //得到大盒子的宽度，也就是后面动画走的距离
    //console.log(scrollWidth);
    for(var i = 1;i<imgs.length;i++){    // 把所有的图片丢到后面去搁着  从1开始，因为第0张（也就会第一张不计算）
        imgs[i].style.left = scrollWidth + "px";   //把除了第一张以外的所有图片全都放到后面去
    }

    //点击按钮移动图片
    var iNow = 0;  //表示索引，用来控制播放张数
    for(var key in spans){   // 循环遍历得到所有span，因为左右按钮也是span
        spans[key].onclick = function(){
            if(this.className == "left"){
                animate(imgs[iNow],{left:scrollWidth});

                --iNow<0 ? iNow = imgs.length - 1 : iNow;   //当前图片索引减减，就是上一张图片

                imgs[iNow].style.left = -scrollWidth + "px";   //让上一张图片出现在当前显示的左边，这样可以看起来是从左边出来的

                animate(imgs[iNow],{left:0});   //让上一张图片从左边到屏幕中间，实现动画效果

                setBtn();
            }else if(this.className == "right"){
                autoPlay();
            }

        }
    }



    //控制小圆点轮播的函数
    //先清除所有小圆点，然后再给想要的小圆点添加样式
    function setBtn(){
        for(var i = 1;i<spans.length-1;i++){
        //我们有六个小圆点，两个箭头按钮，都是span.但是我们只要六个小圆点就行了，所以第一个span和最后一个span不要
            spans[i].className = "btn-icon";  //清除样式，保留基本样式
        }
        spans[iNow+1].className = "btn-icon bg-icon";  //给当前小圆点添加样式
    }

    function autoPlay(){
        animate(imgs[iNow],{left:-scrollWidth}); //往左边走为负，右边则为正

        ++iNow>imgs.length-1 ? iNow = 0 : iNow;   //当前图片索引减减，就是上一张图片

        imgs[iNow].style.left = scrollWidth + "px";   //让上一张图片出现在当前显示的左边，这样可以看起来是从左边出来的

        animate(imgs[iNow],{left:0});   //让上一张图片从左边到屏幕中间，实现动画效果

        setBtn();
    }

    var timer = null;
    timer = setInterval(autoPlay,3000);

    banner.onmouseover = function(){
        animate(btn.children[0],{opacity:100});
        animate(btn.children[spans.length-1],{opacity:100});
        clearInterval(timer);
    };
    banner.onmouseout = function(){
        clearInterval(timer);
        animate(btn.children[0],{opacity:0 });
        animate(btn.children[spans.length-1],{opacity:0});
        timer = setInterval(autoPlay,3000);
    };







};