// 산술연산자(arithmetic operator)

console.log(1 + 2)   /* 3 나머지연산자*/
console.log( 5 - 7)  /* -2 나머지연산자*/
console.log( 3 * 4)  /* 12 나머지연산자*/
console.log( 10 / 2) /* 5 나머지연산자*/
console.log( 7%5 )   /* 2 나머지연산자*/


// 할당연산자 (assignment operator)
// const a = 2    /*=할당연산자*/
let a = 2
// a = a + 1
a += 1 
console.log(a)

// 비교연산자(comparison operator)

const b = 1
const c = 1
console.log(c === b) /*일치연산자*/

function isEqual(x,y){
    return x === y
}
console.log(isEqual(1,2))
console.log(isEqual(2,'2'))