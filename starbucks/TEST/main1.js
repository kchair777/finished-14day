let boxEl = document.querySelector('.box');
// .box라는 클레스를 가지고 있는 요소를 찾으면 그요소를 클릭하면
// 함수가 실행되면서 click!!실행된다. 
console.log(boxEl);

boxEl.addEventListener('click',function(){   // box를 클릭하면 
  console.log('click!!');                    // click!!를 출력하고 
  boxEl.classList.add('active');             // box에 active를 추가하고 
  console.log(                               // active가 있는지 없는지 
    boxEl.classList.contains('active')       // 콘솔로 확인해보고 
  );                                         //
   boxEl.classList.remove('active');         // active를 제거하고 
   console.log(
     boxEl.classList.contains('active')      // 콘솔로그로써 active가 있는지 없는지확인한다.
    );
});

const boxEls = document.querySelectorAll('.box');
console.log(boxEls);
