// 삼항 연산자(ternary operator)

const a = 1 < 2   /*할당연산자가 a선언되어있는데 1<2보다작은지는 true이다*/
if(a) {
    console.log('참')

} else {
    console.log('거짓')
}

console.log(a ? '참' : '거짓')  /*true면 앞부분실행, false이면 뒷부분실행*/
                                /*a값이 true니,false는 물어보는상황으로 해석 */