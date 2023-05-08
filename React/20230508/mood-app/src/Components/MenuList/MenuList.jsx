import React from 'react'
//이 코드에서는 react에서 가져오기 React'를 사용하여 React 라이브러리를 가져옴. JSX를 사용하려면 JSX 코드를 일반 JavaScript로 컴파일하는 데 필요한 API를 제공하는 React 라이브러리를 가져와야 함. 따라서 react에서 가져오기 React'는 이 구성 요소가 제대로 작동하기 위해 필요한 가져오기 문임.
import MenuListItem from '../MenuListItem/MenuListItem'
import './MenuList.css'

export default function MenuList(props) {
    const menus = ["좋아요!", "정말 좋아요!", "최고에요!", "미쳤어요!!"];

    return (
        <ul className='container-list'>
            {menus.map((moodEl) => {
                // mood : 기분의 텍스트, isSelected : 현재 사용자의 기분이 맞는지 전달, onClickEvt : 현재 기분을 변경하는 함수
                //App에서 MenuList mood={currentMood} onItemClick={setCurrentMood} 통해서 받아옴(객체로 받음). 받아오기 위해서 MenuList(props)로 받아오고 밑에서 props.mood, props.onItemClick 사용
                return <MenuListItem mood2={moodEl} isSelected={props.mood === moodEl} onClickEvt={props.onItemClick} />
            })}
        </ul>
    )
}
