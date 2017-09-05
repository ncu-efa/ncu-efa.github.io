var banners = ["images/首页循环/1.jpg",
			   "images/首页循环/2.jpg",
			   "images/首页循环/3.jpg",
			   "images/首页循环/4.jpeg",
			   "images/首页循环/5.jpeg",
			   "images/首页循环/6.jpeg",
			   "images/首页循环/7.jpeg"]; // 图片地址
var counter = 0;
function left_control(argument) {
	counter--;
	if (counter >= 0) {
		document.getElementById("banner").src = banners[counter];
	} else {
		counter = 6;
		document.getElementById("banner").src = banners[counter];
	}
}
function right_control(argument) {
	counter++;
	if (counter <= 6) {
		document.getElementById("banner").src = banners[counter];
	} else {
		counter = 0;
		document.getElementById("banner").src = banners[counter];
	}
}