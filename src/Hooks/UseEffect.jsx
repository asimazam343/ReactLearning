import React, { useEffect } from 'react';
import "./style.css";

const UseEffect = () => {
    const [ myNum, setMyNum ] = React.useState(0);

    useEffect(() =>{
        document.title = `😂chats(${myNum})`
    });

    const increament = () =>{
        setMyNum (myNum + 1);       
    }

    return (
        <>
            <div className="center_div">
                <p>{myNum}</p>
                <div className='button2' onClick={increament} >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Increment
                </div>
            </div>
        </>
    )
}

export default UseEffect;