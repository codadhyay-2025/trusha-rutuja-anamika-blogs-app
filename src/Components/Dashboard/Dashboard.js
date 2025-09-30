import { useNavigate } from "react-router-dom";
import "./Dashboard.css"
function Dashboard() {
const navigate=useNavigate();
const navigateToLogin=()=>{
    navigate("/login");
}
const navigateToRegister=()=>{
    navigate("/register");
}


    return (
        <div>
            
                <div className="dashboardInnerPortion">
                    <div className="dashboardDetailsCard">
                        <div className="blogsTitle" >Blogs!</div>
                        <div className="blogsMotive">Publish your passions,your way...</div>
                        <hr />
                        <div className="buttonClass">
                            <button className="dashboardLoginButton" onClick={navigateToLogin}>Login</button>
                            <button className="dashboardRegisterButton"onClick={navigateToRegister}>Register</button>
                        </div>
                    </div>

                </div>
            
        </div>
    )
}
export default Dashboard;