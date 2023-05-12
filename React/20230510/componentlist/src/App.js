import React, { useState } from "react";
import Detail from "./components/Detail";
import Question from "./components/Question";
import Review from "./components/Review";

const ContentsContainer = ({ listName }) => {
  if (listName === "detail") {
    return <Detail />;
  } else if (listName === "qa") {
    return <Question />;
  } else if (listName === "review") {
    return <Review />;
  }
};
//listName 을 가져와서 각각 비교하고 같으면 각 컴포넌트 return해주기

function NavBar() {
  const [listName, setListName] = useState("detail");
  const checkId = (e) => {
    setListName(e.target.id);
  };
//기본값은 detail로 해놓고, 클릭할 때마다 클릭한 list의 id값을 setListName(useState 변경값)으로 넣기

return (
    <>
      <nav>
        <ul>
          <li
            id="detail" //id 값
            style={
              listName === "detail" ? { color: "red" } : { color: "black" } 
            }//listName과 해당이 같아면, color색상 red, 틀리면 black
            onClick={checkId} //클릭하면 checkID 실행
          >
            상세정보
          </li>
          <li
            id="qa"
            onClick={checkId}
            style={listName === "qa" ? { color: "red" } : { color: "black" }}
          >
            Q&A
          </li>
          <li
            id="review"
            onClick={checkId}
            style={
              listName === "review" ? { color: "red" } : { color: "black" }
            }
          >
            Review
          </li>
        </ul>
      </nav>
      <ContentsContainer listName={listName} /> 
      {/* id값 조건식에 따라 각 컴포넌트 불러와주도록*/}
    </>
  );
}

export default NavBar;