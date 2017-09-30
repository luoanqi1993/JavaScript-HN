window.onload=function(){
				console.log('今天星期一');
				console.warn('今天星期一');
				console.error('今天星期一');
				//想要控制元素，首先就要找到元素
				/*document.getElementById('s1').style.background='#efefef';
				document.getElementById('d1').style.borderTop='1px solid red';*/
				var a = document.getElementById('b1');
				var s = document.getElementById('s1');
				a.onclick = function() {
					s.style.background = '#efefef';
				}
				a.ondblclick=function(){
					s.style.height = '200px';
					s.style.width = '200px';
				}
				
				
				var m1=document.getElementById('m1');
				m1.onmouseover=function(){
					m1.stop();
				}
				m1.onmouseout=function(){
					m1.start();
				}
			}