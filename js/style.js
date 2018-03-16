//导航购物车下拉
var TopbarCart = document.getElementById("J_topbar_cart");
var CartMenu = document.getElementById("J_miniCartMenu");
TopbarCart.onmousemove = function (ev) {
    CartMenu.style.display = "block";
};
TopbarCart.onmouseout = function (ev) {
    CartMenu.style.display = "none";
};
//搜索滑动
var btn = document.getElementById("J_btn");
var inp = document.getElementById("J_inp");
var form = document.getElementById("J_form");
btn.onmousemove = function (ev) {
    this.style.color = "#FFF";
    this.style.backgroundColor = "#ff6700";
};
btn.onmouseout = function (ev) {
    this.style.color = "#333";
    this.style.backgroundColor = "#fff";
};
inp.onclick = function () {
    inp.style.border = "solid 1px #ff6700";
    btn.style.border = "solid 1px #ff6700";
};
form.onmouseout = function () {
    inp.style.border = "solid 1px #e0e0e0";
    btn.style.border = "solid 1px #e0e0e0";
};
//导航栏
var NavLiPoRe = document.getElementsByClassName("J_navCategory");
var NavLiPoAb = document.getElementsByClassName("J_site-category");
var LiPoRe = document.getElementsByClassName("J_category-item");
var LiPoAb = document.getElementsByClassName("J_children-list");
function hidd(pore, poab) {
    for (var i = 0; i < pore.length; i++) {
        pore[i].index = i;
        pore[i].onmousemove = function (ev) {
            var n = Number(this.index);
            for (var j = 0; j < pore.length; j++) {
                poab[j].style.display = "none";
            }
            poab[n].style.display = "block";
            pore[n].onmouseout = function () {
                poab[n].style.display = "none"
            };
            poab[n].onmouseout = function () {
                poab[n].style.display = "none";
            };
        };
    }
}
hidd(NavLiPoRe, NavLiPoAb);
hidd(LiPoRe, LiPoAb);
for (var t = 0; t < LiPoAb.length; t++) {
    LiPoAb[t].index = t;
    LiPoAb[t].onmousemove = function (ev) {
        this.previousElementSibling.classList.add("list_color");
    };
    LiPoAb[t].onmouseout = function (ev) {
        this.previousElementSibling.classList.remove("list_color");
    };
}
//开场倒计时
function countTime() {
    //获取当前时间
    var date = new Date();
    var now = date.getTime();
    //设置截止时间
    var endDate = new Date("2018-10-01 23:23:23");
    var end = endDate.getTime();
    //时间差
    var leftTime = end - now;
    //定义变量 d,h,m,s保存倒计时的时间
    var d, h, m, s;
    if (leftTime >= 0) {
        //d = Math.floor(leftTime/1000/60/60/24);
        h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
        m = Math.floor(leftTime / 1000 / 60 % 60);
        s = Math.floor(leftTime / 1000 % 60);
    }
    //将倒计时赋值到div中
    //document.getElementById("_d").innerHTML = d+"天";
    document.getElementById("_h").innerHTML = h;
    document.getElementById("_m").innerHTML = m;
    document.getElementById("_s").innerHTML = s;
    //递归每秒调用countTime方法，显示动态时间效果
    setTimeout(countTime, 1000);
}
//box1 轮播
var box1Prev = document.getElementById("box1Prev");
var box1Next = document.getElementById("box1Next");
var box1UL = document.getElementById("box1UL");

//setInterval(box1Next.onclick = function () {
//    box1UL.style.marginLeft = "-996px"
//}, 3000);//切换时间
//main 选项卡

var more1=document.querySelectorAll("#more1>a");
var Jstimeul1=document.querySelectorAll("#Js_time_ul1>ul");
mainHidd(more1,Jstimeul1);

var more2=document.querySelectorAll("#more2>a");
var Jstimeul2=document.querySelectorAll("#Js_time_ul2>ul");
mainHidd(more2,Jstimeul2);

var more3=document.querySelectorAll("#more3>a");
var Jstimeul3=document.querySelectorAll("#Js_time_ul3>ul");
mainHidd(more3,Jstimeul3);

var more4=document.querySelectorAll("#more4>a");
var Jstimeul4=document.querySelectorAll("#Js_time_ul4>ul");
mainHidd(more4,Jstimeul4);

var more5=document.querySelectorAll("#more5>a");
var Jstimeul5=document.querySelectorAll("#Js_time_ul5>ul");
mainHidd(more5,Jstimeul5);

function mainHidd(pore1, poab1) {
    for (var i = 0; i < pore1.length; i++) {
        pore1[i].index = i;
        pore1[i].onmousemove = function (ev) {
            var n = Number(this.index);
            for (var j = 0; j < pore1.length; j++) {
                poab1[j].style.display = "none";
            }
            poab1[n].style.display = "block";
        };
    }
}