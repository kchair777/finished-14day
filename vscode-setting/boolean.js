"use strict";
let isDone = false;
isDone = true;
console.log(typeof isDone); // 'boolean' 컴파일하기위하여 npx tsc시 boolean.ts->boolean.js생성됨  node boolean.js실행하면 boolean생성 
let idOk = true;
let isNotOk = new Boolean(true);
