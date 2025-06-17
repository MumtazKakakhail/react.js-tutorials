import { useState } from "react";

export const LiftingState = () => {
    return (
        <>
        <InputComponent/>
        <DisplayComponent/>
        </>
    );
};

const InputComponent = () => {
    const [inputValue , setInputValue] = useState("");
    return (
    <>
    <input type="text" placeholder="enter your name" value={inputValue}></input>
    </>
    );
};

const DisplayComponent = () => {
    return <p>The current input value is:</p>
};
