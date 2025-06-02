import "./Ev.css";
export const EventHandling = () => {

    // function handleButtonClick() {
    //     alert("Hey I am onClick event");
    // }

    const handleButtonClick = (event) => {
        console.log(event);
        console.log(event.target);
        console.log(event.type);



        alert("Hey I am onClick event");
    }

    const handleWelcomeUser = (user) => {
        console.log(`hey ${user}, welcome`);

    }
    return (
        <>
            {/* function component with named function */}
            <button onClick={handleButtonClick}>Click Me</button>
            <br />
            <br />
            <br />
            {/* flat arrow function */}
            <button onClick={() => handleButtonClick()}>Click Me 2</button>

            {/* inline event handlers */}
            {/* <button onClick={(event) => console.log(event);
      }>Inline Function</button> */}
            <br />
            <br />
            <br />
            {/* function components with Inline arrow functions */}
            <button onClick={() => alert("Hey i am inline event function")}>Inline arr fun</button>

            <br /><br /><br />
            {/* passing arguments to event handler  */}
            <button onClick={() => handleWelcomeUser("mumtaz")}>Click Me</button>
        </>
    );
};