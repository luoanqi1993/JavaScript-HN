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
        var t = arr.pop();   // ɾ�����һ��
        arr.unshift(t);     // ��ӵ���һ��
        //console.log(t);
        for(var i = 0;i<divs.length;i++){
            //console.log(arr[i]);    //  �õ�ÿһ������
            //console.log(arr[i][0]);   //  �õ�ÿһ��������ĵ�һ��ֵ
            divs[i].style.top = arr[i][0]+"px";
            divs[i].style.marginLeft = arr[i][1]+"px";
        }
    };
    $("btn_right").onclick = function(){
        var t = arr.shift();     // ɾ����һ��
        arr.push(t);        //  ��ӵ�����һ��
        //console.log(t);
        for(var i = 0;i<divs.length;i++){
            divs[i].style.top = arr[i][0]+"px";
            divs[i].style.marginLeft = arr[i][1]+"px";
        }
    }
};
