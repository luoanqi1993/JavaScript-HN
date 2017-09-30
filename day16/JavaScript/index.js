window.onload = function(){
    function $(id){
        return document.getElementById(id);
    }

    var banner = $("js_banner");    //��ȡ������
    var pic = $("js_pic");    //����ͼƬ�ĸ���
    var imgs = pic.children;     //��ȡ������Ҫ����ͼƬ����Ϊһ���飻
    var btn = $("js_btn");     //��ȡ��ť���ư�ť�ĸ�����



    for(var i=0;i<imgs.length;i++){    //ѭ������СԲ��
        var span = document.createElement("span");   //����СԲ��
        span.className = "btn-icon";          //��СԲ�������ʽ
        span.innerHTML = imgs.length - i;        //ͨ������ķ�ʽ����
        btn.insertBefore(span,btn.children[1]);       //����ֱ����appֱ�Ӳ��룬����ֻ����һ���·���
    }
    var spans = btn.children;     //��ȡ����span
    spans[1].setAttribute("class","btn-icon bg-icon") ;   //��span������ʽ��һ��ͨ����ʽ��һ����ɫ��ʽ



    //�����߰�ť��ʵ���ֲ�Ч��
    //���㶯������
    var scrollWidth = banner.clientWidth;   //�õ�����ӵĿ�ȣ�Ҳ���Ǻ��涯���ߵľ���
    //console.log(scrollWidth);
    for(var i = 1;i<imgs.length;i++){    // �����е�ͼƬ��������ȥ����  ��1��ʼ����Ϊ��0�ţ�Ҳ�ͻ��һ�Ų����㣩
        imgs[i].style.left = scrollWidth + "px";   //�ѳ��˵�һ�����������ͼƬȫ���ŵ�����ȥ
    }

    //�����ť�ƶ�ͼƬ
    var iNow = 0;  //��ʾ�������������Ʋ�������
    for(var key in spans){   // ѭ�������õ�����span����Ϊ���Ұ�ťҲ��span
        spans[key].onclick = function(){
            if(this.className == "left"){
                animate(imgs[iNow],{left:scrollWidth});

                --iNow<0 ? iNow = imgs.length - 1 : iNow;   //��ǰͼƬ����������������һ��ͼƬ

                imgs[iNow].style.left = -scrollWidth + "px";   //����һ��ͼƬ�����ڵ�ǰ��ʾ����ߣ��������Կ������Ǵ���߳�����

                animate(imgs[iNow],{left:0});   //����һ��ͼƬ����ߵ���Ļ�м䣬ʵ�ֶ���Ч��

                setBtn();
            }else if(this.className == "right"){
                autoPlay();
            }

        }
    }



    //����СԲ���ֲ��ĺ���
    //���������СԲ�㣬Ȼ���ٸ���Ҫ��СԲ�������ʽ
    function setBtn(){
        for(var i = 1;i<spans.length-1;i++){
        //����������СԲ�㣬������ͷ��ť������span.��������ֻҪ����СԲ������ˣ����Ե�һ��span�����һ��span��Ҫ
            spans[i].className = "btn-icon";  //�����ʽ������������ʽ
        }
        spans[iNow+1].className = "btn-icon bg-icon";  //����ǰСԲ�������ʽ
    }

    function autoPlay(){
        animate(imgs[iNow],{left:-scrollWidth}); //�������Ϊ�����ұ���Ϊ��

        ++iNow>imgs.length-1 ? iNow = 0 : iNow;   //��ǰͼƬ����������������һ��ͼƬ

        imgs[iNow].style.left = scrollWidth + "px";   //����һ��ͼƬ�����ڵ�ǰ��ʾ����ߣ��������Կ������Ǵ���߳�����

        animate(imgs[iNow],{left:0});   //����һ��ͼƬ����ߵ���Ļ�м䣬ʵ�ֶ���Ч��

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