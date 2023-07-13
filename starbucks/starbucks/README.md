# 제목 (Header) 

# 제목 1 
## 제목 2
### 제목 3 
#### 제목 4
##### 제목 5
###### 제목 6 


#문장(prgagraph)

동해물과 백두산이 마르고 닳도록 
하느님이 보우하사 우리나라 만세 

# 줄바꿈( link breaks)

동해물과 백두산이 마르고 닳도록   
하느님이 보우하사 우리나라 만세   
무궁화 삼천리 화려강산<br/>
대한 사람 대한으로 보존하세 

#강조 (Emphasis)

_이텔릭_  
**두껍게**   
**_이텔릭 + 두껍게_**

~~취소선~~  
<u>밑줄</u>  

# 목록 (List)  

1. 순서가 필요한 목록   
1. 순서가 필요한 목록 
    1.  순서가 필요한 목록   
    1.  순서가 필요한 목록 
1. 순서가 필요한 목록   


-  순서가 필요하지 않은 목록  
-  순서가 필요하지 않은 목록   

#  링크(links)  

<a href="https://google.com">GOOGLE</a>

[GOOGLE](https://google.com)

<a href="https://naver.com" title="NAVER로이동!"
    target="_blank">NAVER</a>
[NAVER](https://naver.com "NAVER로이동!")


#  이미지 

[헤로키](http://127.0.0.1:5500/starbucks/starbucks/images/visual_title.png)

#  인용문(BlockQuote)

>남의 말이나 글에서 직접 또는 간접으로 따온 문장.  
>(네이버 국어사전)


> 인용문을 작성하세요!
>> 중첩된 인용문  
>>> 중중첩된 인용문 1  
>>> 중중첩된 인용문 2   
>>> 중중첩된 인용문 3   

# 인라인(inline)코드 강조  
css에서 `background` 혹은   
`background-image`속성으로 요소에 배경이미지를 삽일할 수있습니다. 

# 블록(block) 코드 강조 

```html
<a href="https://www.google.co.kr/" target="_blank">google</a>
```  

```css
.list > li {
    position:absolute;
    top:40px;
}
```

```javascript 
fucntion func(){
    var a = 'AAA';
    return a;
}
```

```bash
$ git commit -m 'study Markdown'
```

```plaintext 
 동해물과 백두산이 마르고 닳도록 
 하느님이 보우하사 우리나라 만세 

```

#  표 (table)  

position 속성  

값 | 의미 | 기본값
--| :--:| --: 
static | 기준없음 | 0
relative | 요소자신  | x 
absolute | 위치상 부모요소 | x
fixed | 뷰포트 | x

#  원시 HTML(Raw HTML)  

동해물과 <u>백두산</u>이 마르고 닳도록   
<span style="text-decoration: underline;">
하느님</span>이 보우하사 우리나라 만세 

#  수평선 (Horizontal rule)

--- 

***   

#  README.md를 git remote에 저장하는방법
1.  git repository생성   
1.  저장소 주소를 복사해서 vs코드로 이동한다     
1.  vscode작업한 것을 저장한후 버젼관리하겠다고 한다. 
1.  git init 
1.  git status 하면 빨강색으로 추적이 안된파일을 확인한다. 
1.  git add .  
1.  git status 하면 초록색으로 바뀐것을 확인한다. 
1.  git commit -m 'README.md생성'  creat mode ... README.md확인한후 
1.  git remote add origin https://https://github.com/kchair777/starbucks.git 연결한후 
1.  git push origin master 부쉬한다. 
1.  깃텁에서 작성한내용을 확인할수있다. 


# 노트 
1.  Node.js란 
    1. chrome V8 JavaScript엔진으로 빌드된 JavaScript런타임 

1.  npm 생태계 
    