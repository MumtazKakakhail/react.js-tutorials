import "../Components/Ev.css";
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
    <input type="text" placeholder="enter your name" value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}>
    </input>
    </>
    );
};

const DisplayComponent = () => {
    return <p>The current input value is:</p>
};
