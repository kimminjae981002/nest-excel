## ❓ XLSX란?

- Excel 파일(.xlsx)을 읽고 쓰는 데 사용되는 라이브러리이다. Excel 파일을 쉽게 다룰 수 있는 여러 기능을 제공한다.

## 🗨 필요한 모듈

- npm install xlsx

- npm install @nestjs/platform-express

## ✍ 주요 기능

- Excel 파일 읽기: .xlsx 파일을 읽어들여 데이터를 자바스크립트 객체나 배열로 변환할 수 있다.

- Excel 파일 쓰기: 자바스크립트 객체나 배열을 사용하여 새로운 .xlsx 파일을 생성하고 저장할 수 있다.

- 시트 관리: Excle 파일 내의 여러 시트를 읽고, 수정, 추가할 수 있다.

## 🟫 사용 이유

- Excel 파일을 받아 Json 형식으로 반환하는 API를 만들어달라는 요청이 있었다.

## 🔙 다른 Excel 라이브러리

- npm install exceljs
  - 이거를 사용해서 data를 excel 파일로 다운로드 할 수 있는 API를 만든 적이 있다.
  - 링크: https://velog.io/@minjae98/nest.js-exceljs

## 🤳 사용 방법

- **포스트맨**: Body -> form-data -> Key(file) : Value(excel.xlsx)
