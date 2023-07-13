// 비교 연산자(comparison operator)

const a = 1
const b = 3

console.log(a !== b)  /*불일치 연산자*/
console.log(a < b) 
console.log(a >= b)    /*크거나 같은지*/
console.log(a <= b)    /*작거나 같은지  주의 a => b로작성하면 error발생*/

// 논리 연산자 (logical operator)
const d = 1 === 1
const e = 'AB' === 'cAB'
const f = false
console.log(d)
console.log(e)
console.log(f)
console.log(d && e && f)
console.log('&&:    ',  d && e && f)  /* &&는 그리고 and 이다 */
console.log('||:', d || e)            /*||는 또는 or 이다*/
console.log('!:',!d)                  /*! 부정연산자 Not*/ 