var banners = [ "images/首页循环/1.jpg",
				"images/首页循环/2.jpg",
				"images/首页循环/3.jpg",
				"images/首页循环/4.jpeg",
				"images/首页循环/5.jpeg",
				"images/首页循环/6.jpeg",
				"images/首页循环/7.jpeg"]; // 图片地址  
var counter = 0;  
function run(){  
    setInterval(cycle,3000);  //重复运行cycle函数，周期1000ms  
}  
function cycle(){  
    counter++;  
    if(counter == banners.length)     
            counter = 0;  
    document.getElementById("banner").src = banners[counter];  
} 