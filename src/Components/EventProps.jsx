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
const {onClick, onMouseEnter} = props;
const handleGreeting = () => {
    console.log(`hey user, welcome`);
    props.onClick();
    
}
    return (
<>
<button onClick={onClick}>Click Me</button>
<br /><br /><br />
<button onMouseEnter={onMouseEnter}>Hover Me</button>
<br /><br /><br />
<button onClick={handleGreeting}>Greeting</button>

</>

    )
} 