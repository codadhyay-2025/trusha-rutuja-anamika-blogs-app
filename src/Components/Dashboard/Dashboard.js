import "./Dashboard.css"
function Dashboard() {



    return (
        <div>
            
                <div className="dashboardInnerPortion">
                    <div className="dashboardDetailsCard">
                        <div className="blogsTitle" >Blogs!</div>
                        <div className="blogsMotive">Publish your passions,your way...</div>
                        <hr />
                        <div className="buttonClass">
                            <button className="dashboardLoginButton">Login</button>
                            <button className="dashboardRegisterButton">Register</button>
                        </div>
                    </div>

                </div>
            
        </div>
    )
}
export default Dashboard;