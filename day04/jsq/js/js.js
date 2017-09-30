//第一步
//得到计算器的显示屏
var text1 = document.getElementById('text1');

//得到计算器的输入按钮（不是所有的按钮）
var box = document.getElementById('box');

//得到等于按钮
var zong = document.getElementById('zong');

//得到清除按钮
var clert = document.getElementById('clert');

//第二步
//点击界面的输入按钮
box.onclick = function(ev) {
	//兼容IE
	var e = event || ev;
	var t = e.srcElement || e.target;
	//判断点击的值是不是空的
	if(t.value == undefined) {
		//如果是空的什么也不做
	} else {
		//如果不是就把它的值显示在计算器的显示屏上
		text1.value += t.value;
	}
}

//第三步
//点击等于按钮
zong.onclick = function() {
	//判断显示屏的内容不为空的时候执行
	if(text1.value != "")
		//计算出里面输入的运算并显示出来
		//eval()函数可计算某个字符串，并执行其中的的 JavaScript 代码
		text1.value = eval(text1.value);
}

//第四步
//点击清除按钮
clert.onclick = function() {
	//清空显示屏
	text1.value = ""
}