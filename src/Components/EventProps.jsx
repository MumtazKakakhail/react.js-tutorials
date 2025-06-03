export const EventProps = () => {

    const HandleWelcomeUser = (user) => {
alert(`hey , ${user}`);
    }

    const handleHover = () => {
        alert(`hey, thanks for hovering me!`)
    }
    return (
<>
<WelcomeUser onClick = {() => HandleWelcomeUser("wali")} 
    onMouseEnter={handleHover}/>

</>

    );
};

const WelcomeUser = (props) => {

const handleGreeting = () => {
    console.log(`hey user, welcome`);
    props.onClick();
    
}
    return (
<>
<button onClick={props.onClick}>Click Me</button>
<br /><br /><br />
<button onMouseEnter={props.onMouseEnter}>Hover Me</button>
<br /><br /><br />
<button onClick={handleGreeting}>Greeting</button>

</>

    )
} 