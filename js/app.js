

var menutrigger = document.querySelector(".menutrigger1");
var menu = document.querySelector(".menu");

menutrigger.addEventListener("click", function(){
    menu.classList.toggle("active");
    menutrigger.classList.toggle("active");
});


// second-menu script
var menutrigger2 = document.querySelector(".menutrigger2");
var secmenu = document.querySelector(".sec-menu");

menutrigger2.addEventListener("click", function(){
    secmenu.classList.toggle("active2");
    menutrigger2.classList.toggle("active2");
    
});
// Close sidebar menu when click outside


// Search Popup
var overlay =document.getElementById('search-overlay');
var searchPopup =document.getElementById('search-popup');

function openOverlay(){
  overlay.classList.add("active-overlay");
}
function closeOverlay(){
  overlay.classList.remove("active-overlay");
}


function openPopup(){
  searchPopup.classList.add("open-popup");
}

function closePopup(){
  searchPopup.classList.remove("open-popup");
}


// Swiper Slider Script
var swiper = new Swiper(".mySwiper", {


  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});


// Close sidebar menu when click outside
document.onclick = function(e){
  if(!menutrigger.contains(e.target) && !menu.contains(e.target)){
    menu.classList.remove("active");
    menutrigger.classList.remove("active");
  }
  
  if(!menutrigger2.contains(e.target) && !secmenu.contains(e.target)){
    secmenu.classList.remove("active2");
    menutrigger2.classList.remove("active2");
  }
  

}
