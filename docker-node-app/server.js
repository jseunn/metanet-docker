// Express 모듈 불러오기
const express = require('express');

// Express 서버를 위한 포트 설정
const PORT = 8080;

// 새로운 express 애플리케이션 생셩
const app = express();

// 해당 경로 요청으로 "반갑습니다" 결과값 전달
app.get('/', (req,res) => {
    res.send("반갑습니다.");
})

// 해당 포트에서 애플리케이션 시작
app.listen(PORT, () => {
    console.log('애플리케이션 실행 성공!');
})