import { useNavigate } from "react-router-dom";
import "./Register.css"
function Register(){
    const navigate=useNavigate();
    const navigateToRegister=()=>{
        navigate("/login");
    }
    return(
     <div className="backgroundColor">
            <div className="registerBox">
                <div className="registerBlog">Blogs</div>
                <div className="registerContent">Publish your passions,your way....</div>
                <hr/>
                <div className="register">Register</div>
                <div className="registerFeild">Name</div>
                <div>
                    <input type="text"  placeholder="Firstname Lastname" className="registerInputFeild"/>
                </div>
                <div className="registerFeild">Email-ID</div>
                <div>
                    <input type="text" placeholder="test@gmail.com" className="registerInputFeild"/>
                </div>
                <div className="registerFeild">Password</div>
                <div>
                    <input type="Password" placeholder="Password" className="registerInputFeild"/>
                </div>
                <div>
                    <button className="registerButton"onClick={navigateToRegister}>Register</button>
                </div>
            </div>
        </div>

    );
}
export  default Register;