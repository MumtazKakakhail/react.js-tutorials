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
    return (
    <>
    {/* function component with named function */}
    <button onClick={handleButtonClick}>Click Me</button>
    </>
    );
};