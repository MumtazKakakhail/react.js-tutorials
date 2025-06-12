import { useState } from "react";
import "../Ev.css";
export const State = () => {
    // let value = 0;
    // const handleButtonClick = () => {
    //     value ++;
    //     console.log(value);
        
    // }
    // let array = useState();
    // console.log(array);
    const [count, setCount] = useState(0);
    const handleButtonClick = () => {
        setCount (() => count +1);
    };
    return (
        <>
        <div className="main-div">
        <h1>{count}</h1>
        <button onClick={handleButtonClick}>Increment</button>
        </div>
        <ChildComponent/>
        </>
    );
};

function ChildComponent() {
    console.log("Child Component rendered");
    return (
    <div className="main-div">
        <h2>Child Component</h2></div>
    );
};