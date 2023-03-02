




new Swiper('.promotion .swiper-container',{
  slidesPerView: 3,
  spaceBetween:10,
  centeredSlides:true,
  loop:true,


  pagination:{
    el:'.promotion .swiper-pagination',
    clickable:true
  },
  navigation:{
    prevEl:'.promotion .swiper-prov',
    nextEl:'.promotion .swiper-next'
  }
});

new Swiper ('.awards .swiper-container',{
  autoplay:true,
  loop:true,
  spaceBetween:30,
  slidesPerView:5,
  navigation:{
    prevEl:'awards .swiper-prev',
    nextEl:'awards .swiper-next'
  }
});

