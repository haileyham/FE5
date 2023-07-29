//브라우저에서 작동하는 js 작성할거임

console.log('hi')

import React from 'react';
import ReactDom from 'react-dom';
import Home from './components/Home.js'

ReactDom.hydrate(<Home />), document.querySelector('#root'); //hydrate 일단 html 전달함. 껍데기만 브라우저에 전달되고잇는데, 우리는 react 작동시키기위해서 react code를 전달해야하는데 그 과정에 hydrate 필요(?) // 즉 껍데기에 react를 붓는 과정 / react 어플리케이션처럼 작동하도록 / SSR react에만 존재하는 명령어

