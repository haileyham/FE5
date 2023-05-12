import React from "react";
import styled from "styled-components";

const ContentOne = styled.div`
    margin: 40px;
`;

const ContentTwo = styled.div`
    color:red;
`;

// 위의 ContentTwo css를 상속받아서 씀
// 태그 지정은 따로 못함
// 동일한 것을 만드는데 스타일만 추가 적용한다고 생각
const ContentThree = styled(ContentTwo)`
    border: 1px solid black;
`

function App() {
    return (
        <div>
            <ContentOne>hello world</ContentOne>
            <ContentTwo>hello world</ContentTwo>
            <ContentThree>hello world</ContentThree>
        </div>
    );
}

export default App;
