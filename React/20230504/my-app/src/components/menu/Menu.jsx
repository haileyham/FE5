import "./Menu.css";

function Menu() {
  return (
    <ul className="newClass" style={{backgroundColor:"pink", color:"white"}}>
      {/* class 속성은 calssName으로 표기 */}
      <li>짜장면</li>
      <li>짬뽕</li>
      <li>탕수육</li>
    </ul>
  );
}

export default Menu;
