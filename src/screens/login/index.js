import React, { useState } from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';


function Login() {
    let navigate = useNavigate();
    const [userName, setUserName] = useState("")
    const [password, setpassword] = useState("")
    const [loading, setloading] = useState(false)

    const loginUser = async () => {
        try {
            setloading(true)

            console.log(userName, password)

            const res = await axios.post(`https://tick-tack-toe-server-git-master-jayantvashisth.vercel.app/api/auth/login`, {
                password: password,
                userName: userName
            })
            navigate("/dashboard")
            localStorage.setItem('token', res.data.token)

            console.log("hello")

            setloading(false)

        }
        catch (error) {
            setloading(false)
        }
    }

    return (
        <div className="Login-container">
            <div className="login-header">
                <svg onClick={() => navigate('/')} width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_17375_285)">
                        <path d="M16.62 2.99006C16.13 2.50006 15.34 2.50006 14.85 2.99006L6.54 11.3001C6.15 11.6901 6.15 12.3201 6.54 12.7101L14.85 21.0201C15.34 21.5101 16.13 21.5101 16.62 21.0201C17.11 20.5301 17.11 19.7401 16.62 19.2501L9.38 12.0001L16.63 4.75006C17.11 4.27006 17.11 3.47006 16.62 2.99006Z" fill="#333333" />
                    </g>
                    <defs>
                        <clipPath id="clip0_17375_285">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div className="title">
                <span>Login</span>
                <p>Please enter your details</p>
            </div>
            <div className="login-content">
                <div className="input">
                    <span>Username</span>
                    <input value={userName} onChange={(e) => { setUserName(e.target.value) }} type="text" placeholder='Type your username here' />
                </div>
                <div className="input">
                    <span>Password</span>
                    <input value={password} type="password" placeholder='Type your password here' onChange={(e) => { setpassword(e.target.value) }} />
                </div>
            </div>
            <div className="button">
                <div className="login" onClick={() => { loginUser() }}>
                    <button>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login