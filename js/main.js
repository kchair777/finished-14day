// console.log("js")   console창에서 js확인
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input') //위에서 찾은.serch안에서 input를 찾으려면 document.quer...를 searchEl.quer..로바꿈

searchEl.addEventListener('click',function(){
    // logic
    searchInputEl.focus();
});
searchInputEl.addEventListener('focus',function(){
    searchEl.classList.add('focused');  //search focused
    searchInputEl.setAttribute('placeholder','김천호통합검색');
})
searchInputEl.addEventListener('blur',function(){
    searchEl.classList.remove('focused');  //search
    searchInputEl.setAttribute('placeholder','');  //placeholder에 빈공간
})


// 11.헤더와 드롭다운메뉴-전역배치
const badgeEl = document.querySelector('header .badges');
window.addEventListener('scroll',_.throttle(function(){  //_.throttle를 사용해서 스크롤시 부하를 주어서 억제하는장치
    console.log('window.scrollY');  //scroll대신에 window.scrollY
    if (window.scrollY > 500){
        //배치 숨기기
        //gsap.to(요소,지속시간,옵션);
        gsap.to(badgeEl, .6,{
        opacity:0,
        display:'none' //실제로 영역에서 없애야하기때문에 display:none을 추가함

        });
    }else{
        //배치 보이기 
          gsap.to(badgeEl, .6,{
        opacity:1,
        display:'block'

        });
    }
    }, 300));
     // _.throttle(함수,시간)

     // 15.순차적 애니메이션-순차적으로 요소 보이기
     const fadeEls = document.querySelectorAll('.visual .fade-in');
     fadeEls.forEach(function(fadeEl,index){
         //gsap.to(요소,지속시간,옵션); 자동화시켜주는 프로그램
        gsap.to(fadeEl, 1, {
            delay:(index + 1) * .7,  //.7,1.4,2.1,2.7초후에 에니메이션시작
            opacity:1
        });

     });
     //18.Swiper.js라이브러리 버젼확인하기
     // https://swiperjs.com/ 6version사용하기

// new Swiper(선택자,옵션)
new Swiper('.notice-line .swiper-container',{
    direction:'vertical',
    autoplay: true,
    loop:true   
});

new Swiper('.promotion .swiper-container',{
    slidesPerView:3,
    spaceBetween:10,
    centeredSlides:true,
    loop:true,
    // autoplay:{
    //     delay:4000
    // },
    pagination:{
        el:'.promotion .swiper-pagination',
        clickable:true

    },
    navigation:{
        prevEl:'.promotion .swiper-prev',
        nextEl:'.promotion .swiper-next'
    }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click',function(){
    isHidePromotion = !isHidePromotion  // 프로모션영역이 숨겨젔니
    if(isHidePromotion){
        //숨김처리
        promotionEl.classList.add('hide');
    } else{
        //보임처리
        promotionEl.classList.remove('hide');
    }
});


