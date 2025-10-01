import { useNavigate } from "react-router-dom";
import "./Register.css"
function Register(){
    const navigate=useNavigate();
    const navigateToRegister=()=>{
        navigate("/login");
    }
    
    const [userdata,setUserData]=useState({name:"",email:"",password:""});

  function handleNameChange(event) {
     let user={...userdata}
    user["name"]=event.target.value;
    setUserData(user)
  }
   function handleEmailChange(event) {
     let user={...userdata}
    user["email"]=event.target.value;
    setUserData(user)
  }
   function handlePasswordChange(event) {
     let user={...userdata}
    user["password"]=event.target.value;
    setUserData(user)
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
                    <input type="text"  placeholder="Firstname Lastname" className="registerInputFeild" value={userdata.name} onChange={handleNameChange} />
                </div>
                <div className="registerFeild">Email-ID</div>
                <div>
                    <input type="text" placeholder="test@gmail.com" className="registerInputFeild" value={userdata.email} onChange={handleEmailChange}/>
                </div>
                <div className="registerFeild">Password</div>
                <div>
                    <input type="Password" placeholder="Password" className="registerInputFeild" value={userdata.password} onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button className="registerButton"onClick={navigateToRegister}>Register</button>
                </div>
            </div>
        </div>

    );
}
export  default Register;