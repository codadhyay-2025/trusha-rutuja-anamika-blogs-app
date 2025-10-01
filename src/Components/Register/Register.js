import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./Register.css"
function Register() {
    const navigate = useNavigate();
    // const navigateToLogin = () => {
    //     navigate("/login");
    // }

    const [userdata, setUserData] = useState({ email: "", password: "", name: "" })

    function handleEmail(event) {
        let user = { ...userdata };
        user["email"] = event.target.value
        setUserData(user)
    }
    function handlePass(event) {
        let user = { ...userdata };
        user["password"] = event.target.value
        setUserData(user)
    }
    function handleName(event) {
        let user = { ...userdata };
        user["name"] = event.target.value
        setUserData(user)
    }
    const handleRegistrationData = () => {
        axios.post("http://localhost:3001/user", userdata)
            .then((response) => {
                console.log(userdata);

                console.log("User saved:", response.data);
                navigate("/login");
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };
    return (
        <div className="backgroundColor">
            <div className="registerBox">
                <div className="registerBlog">Blogs</div>
                <div className="registerContent">Publish your passions,your way....</div>
                <hr />
                <div className="register">Register</div>
                <div className="registerFeild">Name</div>
                <div>
                    <input type="text"
                        placeholder="Firstname Lastname"
                        className="registerInputFeild"
                        value={userdata.name}
                        onChange={handleName} />
                </div>
                <div className="registerFeild">Email-ID</div>
                <div>
                    <input type="text" placeholder="test@gmail.com" className="registerInputFeild" value={userdata.email} onChange={handleEmail} />
                </div>
                <div className="registerFeild">Password</div>
                <div>
                    <input type="Password" placeholder="Password" className="registerInputFeild" value={userdata.password} onChange={handlePass} />
                </div>
                <div>
                    <button className="registerButton" onClick={handleRegistrationData}>Register</button>
                </div>
            </div>
        </div>

    );
}
export default Register;