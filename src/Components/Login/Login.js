import { useEffect, useState } from "react";
import "./Login.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState(
        {
            email: "",
            password: ""
        }
    )
    function handlePasswordData(event) {
        let user = { ...loginData };
        user["password"] = event.target.value;
        setLoginData(user);
    }


    function handleEmailData(event) {
        let user = { ...loginData };
        user["email"] = event.target.value;
        setLoginData(user);
    }
    useEffect(() => {

    }, []);


    function handleLoginData() {
        if (loginData.email === "" || loginData.password === "") {
            console.log(loginData);
            alert("Please Enter Information");
        }
        
        axios.get('http://localhost:3001/user').then((Response) => {

            if (Response.status === 200) {
                console.log("Response", Response);
                const user = Response.data.find((userInfo) => {
                    console.log("user", userInfo);
                    console.log("loginData", loginData);
                    if (loginData.email == userInfo.email && loginData.password == userInfo.password) {
                        // console.log("user", user)
                        // console.log(loginData)
                        // navigate("/blogs")
                        localStorage.setItem("userEmail",loginData.email);
                        return userInfo;
                        
                    }
                })
                console.log("user", user);

                if (user) {
                    localStorage.setItem("loginData", JSON.stringify(user))
                    navigate("/blogs");
                    // console.log(user)

                }
                else {
                    alert("invalid User")
                    // console.log(user)


                }

            }


        })


    };




    // const navigateToBlogs = () => {
    //     navigate("/blogs")
    // }


    return (

        // <div className="backgroundColor">
        <div className="loginBox">
            <div className="loginBlog">Blogs</div>
            <div className="loginContent">Publish your passions,your way....</div>
            <hr />
            <div className="login">Login</div>
            <div className="loginFeild">Email id</div>
            <div>
                <input type="text"
                    placeholder="test@gmail.com"
                    value={loginData.email}
                    onChange={handleEmailData}
                    className="loginInputFeild" />
            </div>
            <div className="loginFeild">Password</div>
            <div>
                <input type="Password"
                    placeholder="Password"
                    value={loginData.password}
                    onChange={handlePasswordData}
                    className="loginInputFeild" />
            </div>
            <div>
                <button className="loginButton" onClick={handleLoginData}>Login</button>
            </div>
        </div>
        // </div>


    );
}
export default Login;