import { useState, useEffect } from "react";

export default function useScrollBottom() {
    const [isBottom, setIsBottom] = useState(false);
    //스크롤이 끝에 도달했을 때, API를 요청하도록. 무한 스크롤


    useEffect(() => {
        window.addEventListener("scroll", () => {
            // console.log(
            //   Math.ceil(document.documentElement.scrollTop + window.innerHeight)
            // );
            // console.log(document.documentElement.offsetHeight);
            //scrollTop은 스크롤바 이외의 남은 '윗' 영역

            // document.documentElement:  document객체에서 현재 사용자가 보고 있는 html문서가 상단에서 얼마나 스크롤 됬는지 확인
            // window.innerHeight : 현재 사용자가 보고있는 높이값
            // console.log(document.documentElement.scrollTop + window.innerHeight);


            // 현재 총 화면의 렌더링되어있는 높이값
            // console.log(document.documentElement.offsetHeight);

            // 스크롤내리다보면 잘 안됨.
            console.log(Math.ceil(document.documentElement.scrollTop + window.innerHeight));
            console.log(document.documentElement.offsetHeight);
            setIsBottom(Math.ceil(document.documentElement.scrollTop + window.innerHeight + 30) >= document.documentElement.offsetHeight);
        })
    }, []);

    return isBottom;
    // 이게 이 함수의 리턴값이자 알아내고자 했던 값. 목표
}