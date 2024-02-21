var trigger = document.querySelector(".menutrigger1");
var menu = document.querySelector(".menu");

trigger.addEventListener("click", function(){
    menu.classList.toggle("active");
    this.classList.toggle("active");
});



// second-menu
var trigger2 = document.querySelector(".menutrigger2");
var secmenu = document.querySelector(".sec-menu");

trigger2.addEventListener("click", function(){
    secmenu.classList.toggle("active2");
    this.classList.toggle("active2");
});


var swiper = new Swiper(".mySwiper", {


  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  // autoplay: {
  //   delay: 4000,
  // },
});