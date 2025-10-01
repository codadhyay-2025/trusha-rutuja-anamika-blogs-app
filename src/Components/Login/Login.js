import "./Login.css"
import { useNavigate } from "react-router-dom";

function Login(){
    const navigate = useNavigate();
    const navigateToBlogs = () => {
        navigate("/blogs")
    }

    
    return(
     <div className="backgroundColor">
            <div className="loginBox">
                <div className="loginBlog">Blogs</div>
                <div className="loginContent">Publish your passions,your way....</div>
                <hr/>
                <div className="login">Login</div>
                <div className="loginFeild">Email id</div>
                <div>
                    <input type="text" placeholder="test@gmail.com" className="loginInputFeild"/>
                </div>
                <div className="loginFeild">Password</div>
                <div>
                    <input type="Password" placeholder="Password" className="loginInputFeild"/>
                </div>
                <div>
                    <button className="loginButton" onClick={navigateToBlogs}>Login</button>
                </div>
            </div>
        </div>

    );
}
export  default Login;