import React, { useState } from 'react';
import InputComponent from './components/InputComponent';
import SomethingComponent  from './components/SomethingComponent';


//import없이 사용하려면 밑에꺼 그냥 주석 푸셈
// function useInput() {
//   const [value, setValue] = useState('');
//   function onChange(e) {
//       setValue(e.target.value);
//   }
//   return [value, onChange];
// }

// function InputComponent() {
//   const [value, onChange] = useInput('');
//   return (
//       <>
//         <input type="text" onChange={onChange}/>
//         <div>
//           {value}
//         </div>
//       </>
//   )
// }

// function SomethingComponent() {
//   const [value, onChange] = useInput('');
//   return (
//       <>
//         <input type="text" onChange={onChange}/>
//         <div>
//           {value}가 강해졌다 돌격해!
//         </div>
//       </>
//   )
// }


function App(){
  return(
    <>
      <InputComponent/>
      <SomethingComponent/>
    </>
  )
}
export default App;