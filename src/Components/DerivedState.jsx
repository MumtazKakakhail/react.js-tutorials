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
    console.log(users);
    const userCount = users.length;
    const AverageAge = users.reduce((accum, curElem) => accum + curElem.age, 0) / userCount;

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
            <p>Total Users: {userCount}</p>
            <p>Average Age: {AverageAge}</p>
        </div>
    );
};

export default DerivedState;
