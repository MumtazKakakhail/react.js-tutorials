function Profile() {
    return ( 
        <div>
            <h1>Profile Card Challenge</h1>
            <ProfileCard 
                name="Ali"
                age={25}
                greeting={
                    <div><strong>Hi Ali, have a wonderful day!</strong></div>
                }
            >
                <p>Hobbies: Reading, Fishing, Hiking</p>
                <button>Contact</button>
            </ProfileCard>

            <ProfileCard
                name="Asif"
                age={21}
                greeting={
                    <div><strong>Hello, Asif keep up the great work!</strong></div>
                }
            >
                <p>Hobbies: Reading, Fishing, Hiking</p>
                <button>Contact</button>
            </ProfileCard>
        </div>
    );
}
export default Profile;

function ProfileCard({ name, age, greeting, children }) {
    return (
        <>
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
            <div>{greeting}</div>
            <div>{children}</div>
        </>
    );
}