//导航购物车下拉
var TopbarCart=document.getElementById("J_topbar_cart");
var CartMenu=document.getElementById("J_miniCartMenu");
TopbarCart.onmousemove=function (ev) {
    CartMenu.style.display="block";
};
TopbarCart.onmouseout=function (ev) {
    CartMenu.style.display="none";
};
//logo 滑动变化
// var logo=document.querySelector(".logo>a");
// logo.onmousemove=function () {
//     logo.style.backgroundImage="url(../img/mi-home.png)";
// };
//搜索滑动
var btn=document.getElementById("J_btn");
var inp=document.getElementById("J_inp");
var form=document.getElementById("J_form");
btn.onmousemove=function (ev) {
    this.style.color="#FFF";
    this.style.backgroundColor="#ff6700";
};
btn.onmouseout=function (ev) {
    this.style.color="#333";
    this.style.backgroundColor="#fff";
};
inp.onclick=function () {
    inp.style.border="solid 1px #ff6700"  ;
    btn.style.border="solid 1px #ff6700"  ;
};
form.onmouseout=function () {
    inp.style.border="solid 1px #e0e0e0"  ;
    btn.style.border="solid 1px #e0e0e0"  ;
};
///导航栏 显示隐藏
var Jdivre=document.getElementById("J_divre");
var Jdivab=document.getElementById("J_divab");
Jdivre.onmousemove=function (ev) {
    Jdivab.style.display="block"
};
Jdivab.onmouseout=function (ev) {
    Jdivab.style.display="none"
};
Jdivre.onmouseout=function (ev) {
    Jdivab.style.display="none"
};

var NavLiPoRe=document.getElementsByClassName("J_navCategory");
var NavLiPoAb=document.getElementsByClassName("J_site-category");
var LiPoRe=document.getElementsByClassName("J_category-item");
var LiPoAb=document.getElementsByClassName("J_children-list");
function hidd(pore,poab) {
    for (var i=0;i<pore.length;i++){
        pore[i].index=i;
        pore[i].onmousemove=function (ev) {
            var n=Number(this.index);
            for(var j=0;j<pore.length;j++){
                poab[j].style.display="none";
            }
            poab[n].style.display="block";
            pore[n].onmouseout=function () {
                poab[n].style.display="none"
            };
            poab[n].onmouseout=function () {
                poab[n].style.display="none";
            };
        };
    }
}
hidd(NavLiPoRe,NavLiPoAb);
hidd(LiPoRe,LiPoAb);
for (var t=0;t<LiPoAb.length;t++){
    LiPoAb[t].index=t;
    LiPoAb[t].onmousemove=function (ev) {
       this.previousElementSibling.classList.add("list_color");
    };
    LiPoAb[t].onmouseout=function (ev) {
       this.previousElementSibling.classList.remove("list_color");
    };
}