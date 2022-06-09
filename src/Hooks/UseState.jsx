import React from 'react';
import "./style.css";

const UseState = () => {
    const [ myNum, setMyNum ] = React.useState(0);
    // let myNum = 0;
    const increament = () =>{
        setMyNum (myNum + 1);       
    }

    const decrement = () => {
        (myNum > 0 ? setMyNum (myNum - 1):setMyNum(0))
        // if(myNum > 0){
        //     setMyNum (myNum - 1)
        // }
        // else{
        //     setMyNum(0)
        // }
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
                <div className='button2' onClick={decrement} >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                   Decrement
                </div>
            </div>
        </>
    )
}

export default UseState