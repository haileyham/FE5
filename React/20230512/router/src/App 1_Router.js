import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* 밑에 설명 참고1 */}
      <Link to="/"> home </Link>
      <Link to="/one"> one </Link>
      <Link to="/two"> two </Link>
      <Link to="/three"> three </Link>
      {/* 라우트를 감싸줍니다. */}
      {/* Link는 화면에 나오고 Route는 안나옴 */}
      <Routes>
        <Route path="/" element={<Index />} />
        {/* Index 컴포넌트를 사용자에게 보여주겠다 */}
        <Route path="/one" element={<One name="licat" />} />
        <Route path="/two" element={<Two />} />
        <Route path="/three" element={<Three />} />
      </Routes>
    </BrowserRouter>
  );
}

function Index() {
  return <h1>hello world0</h1>;
}

function One({ name }) {
  return <h1>{name} world1</h1>;
}

function Two() {
  return <h1>hello world2</h1>;
}

function Three() {
  return <h1>hello world3</h1>;
}

export default App;

// {/* 밑에참고1 */}
//       {/* 라우트를 감싸줍니다. */}
//       {/*
//       router : 사용자에게 페이지 안내판
//       라우터를 사용하면 서버사이드랜더링이 되는것처럼 보여질수있다
//       서버사이드랜더링 https://joshua1988.github.io/vue-camp/nuxt/ssr.html
//       : 서버에서 페이지를 그려 클라이언트(브라우저)로 보낸 후 화면에 표시하는 기법을 의미

//       라우터 : 기타 검색엔진들에서 만들어진 로봇들이 사이트를 탐색하는데 URL주소가 필수적이기 때문에, 그래서 URL주소가 하나밖에 없으면 탐색할 것이 없는 것으로 판단하고 분석이 불가하게 된다. (구글 서버에 페이지 정보를 가져가지 못함. -> 구글에서 검색이 안된단 이야기^^ 접근:thumbsdown_tone3:)
//       그래서 router는 페이지 노출에 있어서 매우 중요하다. 검색 엔진 최적화 측면에서 매우 중요하다.
//       기존에 SPA로 하나로만 할 경우 한페이지만 나와서 검색이 잘 안 됨

// 💡 **<BrowserRouter vs HashRouter>**

// 둘 모두 리엑트가 URL주소에 따라 구성 요소를 매칭하여 렌더링 하기 위한 방법들로 아래와 같은 차이를 볼 수 있습니다.

// BrowserRouter는 페이지를 라우팅할 때 실제로 해당 URL에 html 파일이 존재하는것은 아니지만 URL을 통해 마치 서버의 폴더를 이동하는것 처럼 보여줍니다. www.myApp.com/pages/home/index.html

// 이는 SPA임에도 불구하고 마치 SSR처럼 보여지기 때문에 검색엔진에서 로봇으로 웹사이트를 탐색할 때 크롤링이 가능합니다.

// 또한 JS의 History API ([https://developer.mozilla.org/en-US/docs/Web/API/History_API](https://developer.mozilla.org/en-US/docs/Web/API/History_API))를 사용하기 때문에 **BrowserRouter 는 IE 9이하는 지원하지 않습니다.**

// HashRouter 는 URL주소에 #값을 넣어 표시합니다. 주소상의 #은 fragment identifier 라 불리며 컨텐츠 안에서의 특정한 위치를 나타냅니다. (대표적으로 내부링크를 예로 들 수 있습니다.) 이는 서버의 폴더구조를 이동하는것 과는 전혀 다른 모습이기 때문에 로봇을 통한 크롤링이 불가능해지고 결국 SEO에 악영향을 미칩니다.

// 하지만 HashRouter는 레거시 브라우저에서도 작동이 가능합니다.

//       라우츠 라우트 라우트돔에서 불러옴 화면에 표시는 안된다
//       패스는 경로
//       슬러시(/) 이하는  url의 상태를 의미
//       element안에는 컴포넌트가 들어간다.
//       */}
