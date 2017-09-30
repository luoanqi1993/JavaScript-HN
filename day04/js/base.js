window.onload = function(){
    //第一步
    //得到计算器的输入按钮
    var num = document.getElementById("num");

    //得到计算器的显示屏
    var input = document.getElementById("input");

    //得到等于按钮
    var btn = document.getElementById("btn");

    //得到清除按钮
    var clear = document.getElementById("clear");

    //第二步
    //点击界面输入按钮
    num.onclick = function(event){
        //兼容
        var x = event.target || event.srcElement;
        if(x.value == undefined){
            //如果值等于 undefined 就什么也不输出。
        }else{
            input.value = input.value + x.value;
        }
    };

    //第三步
    //点击等于
    btn.onclick = function(){
        //如果 input 的值不为空就运算 input 里面的值
        if(input.value !="")
        input.value = eval(input.value);
    };

    //第四步
    //点击清除
    clear.onclick = function(){
        input.value = "";
    };
};

