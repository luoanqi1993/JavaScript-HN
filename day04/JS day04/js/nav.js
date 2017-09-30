window.onload=function(){
	var rotate=45;
	var normal=0;
	var vdisplay='none';
	var vhide='block';
	var sj=document.getElementById('sj');
	var videolist=document.getElementById('videolist');
	sj.onclick=function(){
		var t=rotate;
		rotate=normal;
		normal=t;
		sj.style.transform='rotate('+normal+'deg)';
		
		t=vdisplay;
		vdisplay=vhide;
		vhide=t;
		videolist.style.display=vdisplay;
	}
}
