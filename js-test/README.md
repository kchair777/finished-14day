# npm 시작하기
1.  붙여넣기 url -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash 설치하기  
1.  npm init -y

1.  npm install parcel-bundler --save-dev 또는 npm install parcel-bundler -D개발용으로 
1.  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },를 아래와 같이 변경한다. 
1.  "scripts": {
    "dev": "parcel index.html",
    "build": "parcel build index.html"
  },
1. index.html과 main.js만들어 연결시킨후 npm run dev

1.  server running at http://localhost:1234
    1.  built in 2.49s.

# javascript 시작하기

1. js화일선언하기  function getType(data){
    return Object.prototype.toString.call(data).slice(8,-1)
} /*수만가지의 화일에 getType함수를 선언하기는 어렵다. */
console.log(getType(false))
console.log(getType(123))

1. js화일연결하기 가져오기  import getType from './getType'