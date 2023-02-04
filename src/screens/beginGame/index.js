import React, { useContext, useEffect, useState } from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'
import Board from '../../component/board';
import GameContext from '../../state/GameContext';
import axios from 'axios';
import logic from '../../logic';

export const BeginGame = () => {
    const gameContext = useContext(GameContext)
    let navigate = useNavigate();
    const [gameData, setgameData] = useState({})
    const [loading, setloading] = useState(false)
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [newStatus, setNewStatus] = useState('')
    const [active, setActive] = useState(true)

    useEffect(() => {
        getMyGame()

    }, [])

    const getMyGame = async () => {
        try {
            setloading(true)
            let token = localStorage.getItem('token')
            let res = await axios.get(`https://tick-tack-toe-server.vercel.app/api/game/getmygame/${gameContext.roomID}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if (res.data.success) {
                setgameData(res.data.data)
                setNewStatus(res.data.data.status)
                setSquares(res.data.data.position)
                console.log("status", res.data.data.status)
                if (res.data.data.status != gameContext.user) {
                    setActive(false)
                }
            }
            setloading(false)

        } catch (error) {
            console.log(error)
            setloading(false)
        }
    }

    const onSubmit = async () => {
        try {
            setloading(true)
            let token = localStorage.getItem('token')
            let res = await axios.put(`https://tick-tack-toe-server.vercel.app/api/game/updategame/${gameContext.roomID}`, {
                token: token,
                position: squares,
                status: newStatus
            })

            setActive(false)
            getMyGame()

        } catch (error) {
            console.log(error)
            setloading(false)
        }
    }

    const updateArray = (i) => {
        setSquares(gameData.position)
        setSquares((prevArray) => {
            const newArray = [...prevArray];
            if (gameContext.user === gameContext.challenger && squares[i] == "A" && active) {
                newArray[i] = "X";
            }
            else if (gameContext.user === gameContext.defender && squares[i] == "A" && active) {
                newArray[i] = "O";
            }
            return newArray;
        });
        if (gameData.status == gameContext.challenger) {
            setNewStatus(gameContext.defender)
        }
        else if (gameData.status == gameContext.defender) {
            setNewStatus(gameContext.challenger)
        }
    }


    return (
        <div className="begin-game-container">
            <div className="login-header">
                <svg onClick={() => navigate('/dashboard')} width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <p>Game With {gameContext.user === gameContext.challenger ? gameContext.defender : gameContext.challenger}</p>
                <span>Your piece</span>{gameContext.user === gameContext.challenger ?
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="64" height="64" fill="white" />
                        <rect width="9.86491" height="44.3921" rx="4.93245" transform="matrix(0.706472 0.707741 -0.706472 0.707741 44.1619 12.8002)" fill="#2C8DFF" />
                        <rect width="9.8649" height="44.3921" rx="4.93245" transform="matrix(0.706473 -0.70774 0.706473 0.70774 12.8688 19.7819)" fill="#2C8DFF" />
                    </svg> : <svg width="64" height="64" viewBox="0 0 105 105" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="105" height="105" fill="white" />
                        <circle cx="52.5" cy="52.5" r="23.625" stroke="#FF4F4F" stroke-width="15.75" />
                    </svg>
                }
            </div>

            <div className="board">
                {!loading && < Board array={squares} status={gameData.status} markNew={(i) => { updateArray(i) }} data={gameData} />}
            </div>

            <div className="button">
                <div className="login" onClick={active ? () => { onSubmit(); } : {}}>
                    <button style={active ? { background: "#F2C94C", borderRadius: "8px" } : { background: "#E0E0E0", borderRadius: "8px" }}>Submit!</button>
                </div>
            </div>
        </div>
    )
}
