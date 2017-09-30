window.onload = function(){

    var banner = document.getElementById("banner");
    var slider = document.getElementById("slider");
    var lis = slider.getElementsByTagName("li");
    var btn = document.getElementById("btn");

    banner.onmouseover = function(){
        animate(btn,{opacity:100})
    };
    banner.onmouseout = function(){
        animate(btn,{opacity:0})
    };


    var json = [{width:400,top:20,left:50,opacity:20,zIndex:2},
                {width:600,top:60,left:0,opacity:60,zIndex:3},
                {width:800,top:100,left:200,opacity:100,zIndex:4},
                {width:600,top:60,left:600,opacity:60,zIndex:3},
                {width:400,top:20,left:750,opacity:20,zIndex:2}];

    change();

    var jieliu = true;

    var btns = btn.children;
    for(var key in btns){
        btns[key].onclick = function(){
            if(this.className == "left"){
                if(jieliu == true){
                    change(true);
                    jieliu = false;
                }

            }else if(this.className == "right"){
                if(jieliu == true){
                    change(false);
                    jieliu = false;
                }

            }
        }
    }


    function change(flag){
        if(flag){
            json.unshift(json.pop());
        }else{
            json.push(json.shift());
        }

        for(var i=0;i<json.length;i++){
            animate(lis[i],{
                width:json[i].width,
                top:json[i].top,
                left:json[i].left,
                opacity:json[i].opacity,
                zIndex:json[i].zIndex
            },function(){jieliu = true})
        }

    }





};