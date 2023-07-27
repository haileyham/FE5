import React from "react";

const Home = () => {
    return (
        <div>
            <h1>this is Home!</h1>
            <button onClick={() => { console.log('클릭됨') }}>버튼</button>
        </div>
    )
}

export default Home;