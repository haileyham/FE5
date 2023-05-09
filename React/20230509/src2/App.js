import { useState } from "react";
import Login from './Login.jsx';
import Homepage from './Homepage.jsx'

function App(){
  const user= {
    idUser: 'jaehyun@weniv.com',
    pwUser: '1234'
  }

  const [login, setLogin] = useState(false); //기본값 false / true로 변경되면, login 됐구나하고 판단할 수 있도록.
  

  return(
      login ? <Homepage></Homepage> :
      <Login infoUser={user} setLogin={setLogin}></Login>
  )
}

export default App;