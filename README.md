# Nextjs13
next 신버전을 재학습

## 목차
1. Build
2. Single page applicatioin
3. SSR
4. CSR
5. context api 적용
6. redux
7. typescript -> 다른폴더?

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
- commit: