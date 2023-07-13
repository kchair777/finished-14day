import getType from './getType'

console.log('hello world')   /* 출력하면 hello world */
console.log(typeof'김천호')   /* 출력하면 string */
console.log(123)              /* 출력하면 123 */
console.log(typeof 123)       /* 출력하면 number */
console.log(typeof true)      /* 출력하면 boolean */
console.log(typeof undefined) /*의도하지않은 비워놓은값 출력하면 undefined*/
console.log(typeof null)      /*의도해서 비워놓은값 출력하면 object*/
console.log(typeof {})        /*객체데이터 출력하면object */
console.log(typeof [])        /*배열데이터 출력하면object */


console.log(getType(123))      /* 출력하면 [Number] */
console.log(getType(false))    /* 출력하면 [Boolean] */
console.log(getType(null))     /* 출력하면  [null] */
console.log(getType({}))        /* 출력하면 [object ] */
console.log(getType([]))       /* 출력하면 [array] */