# Nextjs13
리엑트 18버전부터 서버 컴포넌트가 추가되어 nextjs에서도 가져옴
이러한 next18 재학습

## 목차
1. Build
2. Single page applicatioin
3. Server component vs Client component
5. context api 적용
6. redux
8. typescript -> 다른브랜치로
 
* 샘플 백엔드 연동(json-server)
watch옵션이 저장후에 자동으로 서버를 재시작해줌
```
npx json-server --port 9000 --watch db.json
```

## 배운내용 정리(핵심)
### 1. Build
- 빌드하는이유: 브라우저 개발자모드에서 네트워크탭을보면 리소스 용량이 확줄음(6.5mb => 300kb)
- 빌드된 내용 확인: npm run start를 하면 실서버가 열리고 빌드된 .next폴더 내용을 볼수있음!
- commit: 113517fb3fe17c1d4b7f27b586a0736c8350e6e3

### 2. SPA
원리: app폴더내 page.js가 있는지 찾는다. 찾으면 layout.js와 결합해서 연다.
a태그를 Link컴포넌트로 변경하면 싱글페이지어플리케이션가능(페이지방문시 모든내용을 매번 다운받지않고 미리 받아놈, 깜박거림 사라짐)
- 라우터를 만들고싶으면 app/라우터명/page.js
- 다이나믹링크도 가능함 app/라우터명/[id]/page.js
- commit:51b8a2d2def88b11daf98c9e07be1f7ccf724ecc

### 3. Server component vs Client component
CSR: 사용자 인터페이스, 사용자와 상호작용할때 필요(검색창, 버튼 등등) : "use client"; 선언필요. 
SSR: 정보를 단순히 보여줄때(목록) : 리액트 hook을 사용하지않고 비동기통신으로만 구현. 용량이 적음, 서버끼리 위치가 가까우면 빠르게뜸, 서버사이드에서 랜더링끝내고 HTML에 포함하여 보여주기때문에 자바스크립트를 비활성화하더라도 보여줌
