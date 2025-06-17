import "../Components/Ev.css";
import { useState } from "react";

export const LiftingState = () => {
    const [inputValue , setInputValue] = useState("");

    return (
        <>
        <InputComponent inputValue = {inputValue} setInputValue = {setInputValue} />
        <DisplayComponent inputValue = {inputValue} />
        </>
    );
};

const InputComponent = () => {
    return (
    <>
    <input type="text" placeholder="enter your name" value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}>
    </input>
    </>
    );
};

const DisplayComponent = () => {
    return <p>The current input value is:</p>
};
