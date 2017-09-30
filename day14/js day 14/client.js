function client(){
	if(window.innerWidth!=null){//ie9+
		return{
			width:window.innerWidth,
			height:window.innerHeight
		}
	}else if(document.compatMode=="CSS1Compat"){//标准浏览器
		return{
			width:document.documentElement.clientWidth,
			height:document.documentElement.clientHeight
		}
	}else{
		return{
			width:document.body.clientWidth,
			height:document.body.clientHeight
		}
	}
}
