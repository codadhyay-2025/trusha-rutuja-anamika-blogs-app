import { useNavigate } from "react-router-dom";
import "./Header.css"
function Header() {
    const navigate = useNavigate();
    const navigateToDashboard = () => {
        navigate("/");
    }
    const navigateToRegister = () => {
        navigate("/register");
    }
    const navigateToLogin = () => {
        navigate("/login");
    }

    return (
        <div>
            <div className="headerSection">
                <div className="headerTitle" onClick={navigateToDashboard}>Blogs</div>
                <div className="headerRightSection">
                    <div className="headerRightLinkSection" onClick={navigateToLogin}>Login</div>
                    <div className="headerRightLinkSection" onClick={navigateToRegister}>Register</div>
                </div>

            </div>

        </div>
    )
}
export default Header;