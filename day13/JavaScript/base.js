/**
 * Created by Administrator on 2017/9/25.
 */
function $(id){    // 获取 id
    return document.getElementById(id);
}


function scroll(){
    if(window.pageXOffset != null){  //  ie9 +
        return  {
            left:window.pageXOffset,
            top:window.pageYOffset
        }
    }else if(document.compatMode == "CSS1Compat"){  //  标准模式
        return {
            left:document.documentElement.scrollLeft,
            top:document.documentElement.scrollTop
        }
    }else{   //  怪异模式
        return {
            left:document.body.scrollLeft,
            top:document.body.scrollTop
        }
    }
}


function client(){   //  屏幕宽高
    if(window.innerWidth != null){     //  ie9 +
        return {
            width:window.innerWidth,
            height:window.innerHeight
        }
    }else if(document.compatMode == "CSS1Compat"){   //  标准模式
        return {
            width:document.documentElement.clientWidth,
            height:document.documentElement.clientHeight
        }
    }else{   //  怪异模式
        return {
            width:document.body.clientWidth,
            height:document.body.clientHeight
        }
    }
}