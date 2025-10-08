import { useNavigate } from "react-router-dom";

import "./Header.css"
function Header() {
    const navigate = useNavigate();
    const loggedinuser = localStorage.getItem("username");

    const navigateToDashboard = () => {
        navigate("/");
    }
    const navigateToRegister = () => {
        navigate("/register");
    }
    const navigateToLogin = () => {
        navigate("/login");
    }
    function handleLogout() {
        localStorage.removeItem("username")

        navigate('/')
    }

    return (
        <div>
            <div className="headerSection">
                <div className="headerTitle" onClick={navigateToDashboard}>Blogs</div>
                <div className="headerRightSection" >


                    {loggedinuser ? (
                        <div className=" headerUserName">
                            <div> {loggedinuser}</div>
                            <div onClick={handleLogout}>Logout</div>
                        </div>
                    ) : (
                        <div className="headerUserName">
                            <div onClick={navigateToLogin}>Login</div>
                            <div onClick={navigateToRegister}>Register</div>
                        </div>
                    )}

                </div>
            </div>

        </div>
    )
}
export default Header;