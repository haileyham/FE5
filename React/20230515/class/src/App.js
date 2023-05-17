// - **Home Page :** /
// - **Product Detail Page** : /products/:id
//     - ex) /products/1 , /products/2, /products/3, /products/4
// - **Product Detail Notice Page :** /products/:id/notice
//     - ex) /products/1/notice , /products/2/notice…
// - **Cart Page :** /cart
// - **Coupon Page :** /users/coupon
// - **Question Page :** /users/question
// - **Notice Page :** /users/notice
// - **User Page :** /users
import RouteStudy from "./RouterSolve/RouteStudy";
import RouteSolve from "./RouterSolve/RouteSolve";
import Counter from "./HookUseEffect/TryUseEffect";
import Time from "./HookUseEffect/Quiz2";
import TryUseRefDom from "./HookUseRef/TryUseRefDom";
import TryUseMemo from "./HookUseMeomo/TryUseMomo";

function App() {
  return (
    <div>
      {/* <RouteStudy></RouteStudy> */}
      {/* <RouteSolve></RouteSolve> */}
      {/* <Counter></Counter> */}
      {/* <Time></Time> */}
      {/* <TryUseRefDom></TryUseRefDom> */}
      <TryUseMemo></TryUseMemo>
    </div>
  );
}
export default App;
