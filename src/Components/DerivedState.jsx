import { useState } from "react";
import "../Components/Ev.css"
// const users = [
//     { "name": "Alice", age: 25 },
//     { "name": "Lewis", age: 30 },
//     { "name": "Charlie", age: 22 },
//     { "name": "Angle", age: 28 },
//     { "name": "Thomas", age: 18 }
// ];

export const DerivedState = () => {
     const [users] = useState([
        { name: "Alice", age: 25 },
        { name: "Lewis", age: 30 },
        { name: "Charlie", age: 22 },
        { name: "Angle", age: 28 },
        { name: "Thomas", age: 18 }
    ]);
    return (
        <div className="main-div">
            <h1>User List</h1>
            <ul>
                {users.map((curElem, index) => (
                    <li key={curElem.name + index}>
                        {curElem.name} - {curElem.age} years old
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DerivedState;