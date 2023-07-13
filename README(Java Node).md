# Java Node.js 
1. node.js 짝수 버전14.16.0(LTS:long Term Supported) / 홀수 버전 15.10.01
1. nvm(node version manager)을설치한다. github에서 nvm-sh/nvm
   1. curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
1. nvm --version확인하면 0.39.3 확인됨
1. nvm ls 실행하면  iojs->N/A(default) node->stable(->)(default)  unstable -> N/A(default)
1.  nvm install 14.16.0 인스톨후 nvm ls로 설치버전확인
1.  낮은버전설치 예) nvm install 12.21.0
1.  nvm use 12.21.0
1.  node --version
1.  필요없는 버전삭제시 nvm uninstall 12.10.0 
1.  더많은 정보를 얻어려면 nvm -help
1.  npm(Node Package Manager)
    1. https://cdn.jsdeliver... /reset.min.css" />
    1. https://fonts.googleapis.com ../..=Material+Icons">
    1. https:// ..lodash.min.js
    1. https:// .. GSAP & ScrollToPlugin..>
    1. https://.. SWIPER  .. >
    1. https:// ScrollMajic ..> 
    1. Trade-off(상충관계)발생함.
1. npm init -y하면 package.json생성됨
    1. "main": "index.js",삭제해도됨
    1. 
1.  npm install parcel-bundler -D 실행하면 node_modules와 package-lock.json생성됨 
1. package.json에서"scripts":  "devDependencies": 확인후 수정한다. 
1. npm install lodash 로다시를 인스톨시킨다. 
1. node_modules삭제후 다시 npm install또는 npm i (실제페케지를 삭제하더라도 설치가능하다다
    1.  npm install -D parcel-bundler(개발용의존성 패키지로 개발시에만 사용하고폐기)
    1.  npm instll lodash(일반 의존성으로실제 웹프라우저에서 실제사용가능하다)
1. parcel index.html실행한다. 이때 package.json수정한다.
    1. "test": "echo \"Error: no test specified\" && exit 1"삭제후 
    1. "dev":"parcel index.html"추가한다.  
1. npm run dev 실행한다. -> Server running at http://localhost:1234 Built in 874ms. 만약"abc"면 npm run abc실행한다.  
1. main.js에 입력한다. import _ from 'lodash';
    1. "build":"parcel build index.html"
1. npm run build 확인 dist/main.f.. 37ms dist/index.html ..613ms
    1. dist 폴더생성됨
1. node --version 에서 확인 v14.16.0
1. node_modules, dist,삭제하고 
1. npm i 설치하고    
1. npm run build 
1. .gitignore화일을 설치하고 내용에 .cache/ dist/  node_modules/ 버전관리안하겠다고 설정한다. 
1. git 버전관리를 시작한다.
   1. git init
   1. git status(빨강색으로 추정되지않는 화일화일)
   1. git add .(초록색으로 추정된어 변한다.) 
   1. git remote add origin https://github.com/kchair777/mac-test.git
   1. git push origin master 
   1. git rm --cached 

1. npm run dev 실행하여 http://localhost:1234확인한다. 





