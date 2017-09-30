/**
 * Created by Administrator on 2017/9/12.
 */
window.onload = function(){
    var img = document.getElementById("img");
    function box(s){
        img.src = "img/01big.jpg";
        if(s == a2){
            img.src = "img/02big.jpg";
        }else if(s == a3){
            img.src = "img/03big.jpg";
        }else if(s == a4){
            img.src = "img/04big.jpg";
        }else if(s == a5){
            img.src = "img/05big.jpg";
        }
    }
    a1.onmousemove = function(){
        var that=this;
        box(that);
    };
    a2.onmousemove = function(){
        var that=this;
        box(that);
    };
    a3.onmousemove = function(){
        var that=this;
        box(that);
    };
    a4.onmousemove = function(){
        var that=this;
        box(that);
    };
    a5.onmousemove = function(){
        var that=this;
        box(that);
    }

};