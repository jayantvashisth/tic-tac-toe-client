import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'
import GameContext from '../../state/GameContext';
import axios from 'axios';


function StartGame() {
    const gameContext = useContext(GameContext)
    let navigate = useNavigate();

    const [loading, setloading] = useState(false)
    const [email, setEmail] = useState("")
    const [roomid, setRoomid] = useState("")



    const beginGame = async () => {
        try {
            setloading(true)
            let token = localStorage.getItem('token')
            const res = await axios.post(`http://localhost:5000/api/game/creategame`, {
                email: email,
                token: token
            })
            console.log(res)

            if (res.data.success) {
                gameContext.setroomID(res.data.room)
                navigate("/begingame")  //create game start screen
                // setRoomid(res.data.roomId)
                // console.log("dasda", res.data.roomId)
            }

            setloading(false)

        }
        catch (error) {
            setloading(false)
        }
    }




    return (
        <div className="start-game-container">
            <div className="start-game-header">
                <svg onClick={() => { navigate('/dashboard') }} width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <span>Start a new game</span>
                <p>Whom do you want to play with?</p>
            </div>
            <div className="login-content">
                <div className="input">
                    <span>Email</span>
                    <input onChange={(e) => { setEmail(e.target.value) }} type="text" placeholder='Type their email here' />
                </div>
            </div>
            <div className="button">
                <div className="login" onClick={() => { beginGame() }}>
                    <button>Start game</button>
                </div>
            </div>
        </div>
    )
}

export default StartGame