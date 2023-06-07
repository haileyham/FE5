import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import Signup from "./pages/signup/Signup.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/' element={<Login />}></Route>
          <Route path='/' element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
