import React from "react";
import styled from "styled-components";


const BtnOne = styled.button`
    color:white;
    border:none;
    border-radius: 10px;
    padding:10px;
    background:pink;
    cursor:pointer;
    margin:10px;
    &:hover{
      background: black;
    }
`;

const BtnTwo = styled(BtnOne)`
    background:purple;
    box-shadow: 0px 0px 5px black;
`

const BtnThree = styled(BtnTwo)`
    background:rgba(200,230,80,0.7);
    box-shadow: 0px 0px 10px 0px yellow;
    border-radius: 0;
    outline:3px dotted pink;
`

const BtnFour = styled.button`
    ${BtnOne}
    ${BtnTwo}
`

function App() {
    return (
        <div>
            <BtnOne>BBIYONG1</BtnOne>
            <BtnTwo>BBIYONG2</BtnTwo>
            <BtnThree>BBIYONG3</BtnThree>
            <BtnFour>BBIYONG4</BtnFour>
        </div>
    );
}

export default App;
