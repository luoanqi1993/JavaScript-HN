/**
 * Created by Administrator on 2017/9/25.
 */
function $(id){    // ��ȡ id
    return document.getElementById(id);
}


//  ��Ļ���Ϻ͵��Ҿ��루���ݣ�
function scroll(){
    if(window.pageXOffset != null){  //  ie9 +
        return  {
            left:window.pageXOffset,
            top:window.pageYOffset
        }
    }else if(document.compatMode == "CSS1Compat"){  //  ��׼ģʽ
        return {
            left:document.documentElement.scrollLeft,
            top:document.documentElement.scrollTop
        }
    }else{   //  ����ģʽ
        return {
            left:document.body.scrollLeft,
            top:document.body.scrollTop
        }
    }
}


//  ��Ļ��ߣ����ݣ�
function client(){
    if(window.innerWidth != null){     //  ie9 +
        return {
            width:window.innerWidth,
            height:window.innerHeight
        }
    }else if(document.compatMode == "CSS1Compat"){   //  ��׼ģʽ
        return {
            width:document.documentElement.clientWidth,
            height:document.documentElement.clientHeight
        }
    }else{   //  ����ģʽ
        return {
            width:document.body.clientWidth,
            height:document.body.clientHeight
        }
    }
}

//  ���ٶ��� ����
function animate1(obj,speed,target){
    obj.timer = setInterval(function(){
        if(obj.offsetLeft>target){
            clearInterval(obj.timer);
        }else{
            obj.style.left = obj.offsetLeft + speed + "px";
        }
    },50)
}



// ���ٶ����������
function animate2(obj,target){
    clearInterval(obj.timer);
    var speed = obj.offsetLeft - target < 0 ? 10 : -10;
    obj.timer = setInterval(function(){
        var run = target - obj.offsetLeft;
        if(Math.abs(run)<=10){
            clearInterval(obj.timer);
        }else{
            obj.style.left = obj.offsetLeft + speed +"px";
        }
    },30)
}


// �������Ҷ���
function animate3(obj,target){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var speed = (target - obj.offsetLeft)/10;
        console.log(speed);
        speed = speed>0?Math.ceil(speed) :Math.floor(speed);
        obj.style.left = obj.offsetLeft + speed +"px";
        if(obj.offsetLeft == target){
            clearInterval(obj.timer);
        }
    },50)
}

//  ��ȡ��ʽ���ԣ����ݣ�
function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return window.getComputedStyle(obj,null)[attr];
    }
}

//  �������� �κη���
function animate4(obj,attr,target){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var cus = parseInt(getStyle(obj,attr));
        var speed = (target - cus) /10;
        speed = speed >0 ? Math.ceil(speed) : Math.floor(speed);
        if(cus == target){
            clearInterval(obj.timer);
        }else{
            obj.style[attr] = cus + speed + "px";
        }
    },30)
}

//  ��������  ���������
function animate5(obj,json){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        for(var attr in json){
            var cus = parseInt(getStyle(obj,attr));
            var speed = (json[attr] - cus) /10;
            speed = speed >0 ? Math.ceil(speed) : Math.floor(speed);
            if(cus == json[attr]){
                clearInterval(obj.timer);
            }else{
                obj.style[attr] = cus + speed + "px";
            }
        }
    },30)
}

// ��������  ��������� + �ص�
function animate6(obj,json,fun){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var flag = true;
        for(var attr in json){
            var leader = parseInt(getStyle(obj,attr));
            var speed = (json[attr] - leader)/10;
            speed = speed >0 ? Math.ceil(speed):Math.floor(speed);
            obj.style[attr] = leader + speed + "px";
            if(leader!=json[attr]){
                flag = false;
            }
        }
        if(flag){
            clearInterval(obj.timer);
            if(fun){
                fun();
            }
        }
    },20)
}

//  ��������  ������� + �ص� + ͸���� + zindex
function animate(obj,json,fun){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var flag = true;
        for(var attr in json){
            var leader = 0;
            if(attr == "opacity"){
                leader = parseInt(getStyle(obj,attr)*100);
            }else{
                leader = parseInt(getStyle(obj,attr));
            }
            var speed = (json[attr] - leader)/10;
            speed = speed>0 ? Math.ceil(speed):Math.floor(speed);
            if(attr == "opacity"){
                obj.style.opacity = (leader + speed)/100;
            }else if(attr == "zIndex"){
                obj.style.zIndex = json[attr];
            }else{
                obj.style[attr] = leader + speed + "px";
            }
            if(leader!=json[attr]){
                flag = false;
            }
        }
        if(flag){
            clearInterval(obj.timer);
            if(fun){
                fun();
            }
        }
    },20)
}