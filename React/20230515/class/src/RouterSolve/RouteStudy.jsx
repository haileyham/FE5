import { BrowserRouter, Routes, Route, Link, useLocation, Outlet } from "react-router-dom";

function RouteStudy() {
  return (
    <BrowserRouter>
      <Link to="/"> home </Link>
      {/* 직접주소창에쓰면 새로고침됨. 라우트는 클릭했을때 새로고침 안됨 */}
      <Link to="/one"> one </Link>
      <Link to="/two"> two </Link>
      <Link to="/three"> three </Link>
      {/* 라우트를 감싸줍니다. */}
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/one" element={<One name='licat' />}/>
        <Route path="/two" element={<Two />}/>
        <Route path="/three/*" element={<Outlet />}>
          {/* 
          Outlet은 라우트 안에서 작성한 컴포넌트를 빼내주는애
          * 붙이는 의미는 : 이 주소 뒤에 모든 것이 와도 된다는 뜻 
          생략해도 되긴 하지만...의미전달할 때 필요. 이 뒤에 뭐가 오든간에 Outlet을 보여주겠다. 주소에 상관없이 보여주고 싶다면 *을 달기
          */}
          <Route path="" element={<HojunIndex/>}/>
          <Route path="hojunone/" element={<HojunOne/>}/>
          {/* 라우트안에 중첩된것 
          /three/HojunOne/ 해서 들어갔을 때
          hello Hojun 1 뜨는 것은, Outlet에 HojunOne이 쏙하고 들어갔음
          메타몽처럼 Outlet이 변신함
          */}

          <Route path="hojuntwo/" element={<HojunTwo/>}/>
        </Route>
        <Route path="/blog/:id" element={<Blog />}/>
      </Routes>
    </BrowserRouter>
  );
}

function Index(){
  return <h1>hello world0</h1>
}

function One({name}){
  return <h1>{name} world1</h1>
}

function Two(){
  return <h1>hello world2</h1>
}

function Three(){
  return <h1>hello world3</h1>
}

function Blog(){
	const location = useLocation();
  console.log(location)
  return <h1>hello Blog</h1>
}

function HojunIndex(){
	const location = useLocation();
  console.log(location)
  return <h1>hello Hojun index</h1>
}

function HojunOne(){
	const location = useLocation();
  console.log(location)
  return <h1>hello Hojun 1</h1>
}

function HojunTwo(){
	const location = useLocation();
  console.log(location)
  return <h1>hello Hojun 2</h1>
}

export default RouteStudy;