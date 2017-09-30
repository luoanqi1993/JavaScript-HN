/**
 * Created by Administrator on 2017/9/13.
 */
window.onload = function(){
    function $(id){
        return document.getElementById(id);
    }
    var divs = $("box").getElementsByTagName("div");
    var arr = new Array;
    arr[0] = [50,-50];
    arr[1] = [150,-150];
    arr[2] = [250,-50];
    arr[3] = [150,50];
    $("btn_left").onclick = function(){
        var t = arr.pop();   // 删除最后一个
        arr.unshift(t);     // 添加到第一个
        //console.log(t);
        for(var i = 0;i<divs.length;i++){
            //console.log(arr[i]);    //  得到每一个数组
            //console.log(arr[i][0]);   //  得到每一个数组里的第一个值
            divs[i].style.top = arr[i][0]+"px";
            divs[i].style.marginLeft = arr[i][1]+"px";
        }
    };
    $("btn_right").onclick = function(){
        var t = arr.shift();     // 删除第一个
        arr.push(t);        //  添加到最后第一个
        //console.log(t);
        for(var i = 0;i<divs.length;i++){
            divs[i].style.top = arr[i][0]+"px";
            divs[i].style.marginLeft = arr[i][1]+"px";
        }
    }
};
