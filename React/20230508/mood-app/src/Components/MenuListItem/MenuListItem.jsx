import React from 'react'
import './MenuListItem.css'

export default function MenuListItem(props) {


    //1. 클릭을 하면, props.mood2(menus 하나) 를 const [currentMood, setCurrentMood] = useState(""); 여기에 데이터 넣어주기(데이터변경하는 것)
    const onItemclick = () => {
        props.onClickEvt(props.mood2);
        /*
        MenuList.jsx 의 onClickEvt={props.onItemClick} 
        [= App.js 파일의 onItemClick={setCurrentMood} 
        = const [currentMood, setCurrentMood] = useState("");]에
        props.mood2 Menus를 집어넣기 
        [=MenuList.jsx파일의 mood2={moodEl}는 const menus = ["좋아요!", "정말 좋아요!", "최고에요!", "미쳤어요!!"];을 map으로 돌린것]

        >> setCurrentMood로 menus하나씩 집어넣어서 useState 변경하기
         */
    }


    //2. const [currentMood, setCurrentMood] = useState(""); 여기의 데이터와 선택한 것이 일치하면 색상 변경해주기
    const getBackgroundColor = () => {
        if (props.isSelected) {
            /*
            MenuList.jsx 파일의 isSelected={props.mood === moodEl}은
            App.js 파일의 mood={currentMood}
            즉, currentMood와 Menus의 요소가 같은지
            */
            return 'skyblue'
            // 클릭했을때 일치하면 skyblue 색상 출력
        }
    }

    return (
        <li>
            <button className='btn-item' onClick={onItemclick} style={{ backgroundColor: getBackgroundColor() }}>기분이 : {props.mood2}</button>
        </li>
    )
}
