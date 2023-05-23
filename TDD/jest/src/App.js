import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [buttonColor, setButtonColor] = useState('red');
  const newColor = buttonColor === 'red' ? 'blue' : 'red'; //정반대되는 color넣어주는것

  return (
    <button 
      style={{backgroundColor: buttonColor}}//buttonColor색으로 background
      onClick={()=> setButtonColor(newColor)}//클릭하면 newColor실행되어서 buttonColor가 red였으면 blue로(각각반대 진행)
    >change to {newColor}</button> //newColor넣어서 글씨가 blue,red뜨도록
  );
}

export default App;
