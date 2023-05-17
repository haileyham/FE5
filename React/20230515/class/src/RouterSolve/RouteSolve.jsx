import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  Outlet,
  useParams,
} from "react-router-dom";
// - **Home Page :** /
// - **Product Detail Page** : /products/:id
//     - ex) /products/1 , /products/2, /products/3, /products/4
// - **Product Detail Notice Page :** /products/:id/notice
//     - ex) /products/1/notice , /products/2/notice…
// - **Cart Page :** /cart
// - **User Page :** /users
// - **Coupon Page :** /users/coupon
// - **Question Page :** /users/question
// - **Notice Page :** /users/notice

function RouteSolve() {
  const productIds = [1, 2, 3, 4, 5];
  return (
    <BrowserRouter>
      <h1>퀴즈</h1>
      <Link to="/">홈페이지</Link>
      {productIds.map((productId) => (
        <Link to={`/products/${productId}`}>상품{productId}</Link>
      ))}
      <Link to="/users">Users</Link>
      <Link to="/cart">Cart</Link>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<Products />} />
        {/* :id는 React Router에서 동적 경로 매개변수(dynamic path parameter)로 인식되며, URL 경로에서 해당 위치에 있는 값은 id라는 이름의 파라미터로 추출됩니다.

        따라서, /products/:id 경로가 매치될 경우, id라는 이름의 파라미터에 해당하는 값이 Products 컴포넌트에 전달됩니다. 이렇게 전달된 파라미터 값을 useParams()를 통해 추출하여 사용할 수 있습니다.
        
        즉 productIds 객체안의 변수 들이ID 값이 되고,
        /products/:id  :id로 들어걈 */}
        <Route path="/products/:id/notice" element={<ProductNotice />} />
        <Route path="/cart" element={<Cart name="licat" />} />
        <Route path="/users/" element={<Users />}>
          <Route path="coupon" element={<div>쿠폰</div>} />
          <Route path="question" element={<div>퀘스션</div>} />
          <Route path="notice" element={<div>노티스</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function HomePage() {
  return <h1>홈페이지</h1>;
}

function Cart({ name }) {
  return <h1>{name} world1 여기는 /cart 입니다.</h1>;
}

function Users() {
  return (
    <div>
      <Link to="/users/coupon">usersCoupon</Link>
      <br />
      <Link to="/users/notice">Notice</Link>
      <br />
      <Link to="/users/question">Question</Link>
      <br />
      <h1>여기는 Users</h1>
      <Outlet />
    </div>
  );
}

function Three() {
  return <h1>hello world3</h1>;
}

function Products() {
  const { id } = useParams();
  //https://velog.io/@nemo/useParams
  return (
    <div>
      <h1>hello Products {id}</h1>
      <Link to="./notice">Notice</Link>
      {/* // ./ 지금있는 경로를 말해줌
// ./notice 현재경로에서 notice를 붙이겠다 */}
    </div>
  );
}
function ProductNotice() {
  const { id } = useParams();
  //구조분해할당
  //ex) obj 에 담긴 id를 쓸 때 펼쳐서 가져옴
  
// React Router의 useParams()는 현재 라우팅된 경로에서 파라미터 값을 추출하는 React Hook입니다. 이 Hook은 객체를 반환하며, 객체의 속성으로 경로에 지정된 파라미터를 가져올 수 있습니다.
// {}를 사용하여 객체 디스트럭처링을 수행하면 객체에서 특정 속성을 추출할 수 있습니다. { id } = useParams()와 같이 작성하면 useParams()가 반환한 객체에서 id 속성을 추출하여 id 변수에 할당합니다.
// 따라서, useParams()를 사용하여 라우팅된 경로에서 파라미터 값을 추출할 때 {}를 사용하여 객체 디스트럭처링을 수행하고, 원하는 파라미터 값을 변수에 할당하는 것이 좋습니다.
  return <h1>hello Products {id} Notice </h1>;
}

function HojunIndex() {
  const location = useLocation();
  console.log(location);
  return <h1>hello Hojun index</h1>;
}

function HojunOne() {
  const location = useLocation();
  console.log(location);
  return <h1>hello Hojun 1</h1>;
}

function HojunTwo() {
  const location = useLocation();
  console.log(location);
  return <h1>hello Hojun 2</h1>;
}

export default RouteSolve;
