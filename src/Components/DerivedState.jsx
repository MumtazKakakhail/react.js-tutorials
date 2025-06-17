import "../Components/Ev.css"
const users = [
    { "name": "Alice", age: 25 },
    { "name": "Lewis", age: 30 },
    { "name": "Charlie", age: 22 },
    { "name": "Angle", age: 28 },
    { "name": "Thomas", age: 18 }
];

export const DerivedState = () => {
    return (
        <div className="main-div">
            <h1>User List</h1>
            <ul>
                {
                    users.map((curElem, index) => {
                        return (
                        
                            <li key={index}>
                                {curElem.name} - {curElem.age} year old
                            </li>
                            
                        );
                    })
                }
            </ul>
        </div>
    );
};

export default DerivedState;