
import User from "./User";
import UserClass from './UserClass'

const About = () => {

    return (
        <div>

            <h2>About Us</h2>
            <UserClass name={"Abhay Kumar Gupta class "} location={" Dhanbad"} />
            <User name={"Abhay Kumar Gupta "} location={" Dhanbad"} />

        </div>
    )
}

export default About;