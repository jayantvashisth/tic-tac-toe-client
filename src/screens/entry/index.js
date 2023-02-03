import React from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'

function Entry() {
    let navigate = useNavigate();


    return (
        <div className="entry">
            <div className="title">
                <span>async</span>
                <p>tic tac toe</p>
            </div>
            <div className="buttons">
                <div className="login" onClick={() => navigate('/login')}>
                    <button>Login</button>
                </div>
                <div className="register" onClick={() => navigate('/register')}>
                    <button>Register</button>
                </div>
            </div>
        </div>
    )
}

export default Entry