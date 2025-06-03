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

    )
}