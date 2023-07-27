// const express = require('express'); //common.js 방식 / express 불러옴
// const app = express(); // app으로 실행 
// const React = require('react');
// const renderToString = require('react-dom/server').renderToString; //리액트돔에 필요한 메서드들 불러오는데 주로 서버사이드 관련한거 불러옴
// const Home = require('./components/Home.js').default; //Home.js 불러옴 / default 붙여야 정상적으로 불러옴

// 코드 개선
import express from 'express';
const app = express();
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './components/Home.js';


app.use(express.static('public')); // express가 public을 static

app.get('/', (req, res) => {// 루트로 요청하면, 콜백함수 실행
    const content = renderToString(<Home />); // Home컴포넌트를 문자열로 집어넣을것임. 그리고 content에 담음

    res.send(content); //그리고 위에서의 content를 보낼 것임
});

app.listen(3000, () => {
    console.log('3000번 포트가 열렸다잉');
});