import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import GameCard from '../../component/gameCard';
import GameContext from '../../state/GameContext';
import './index.css'

function Dashboard() {
    const gameContext = useContext(GameContext)
    let navigate = useNavigate();
    const [loading, setloading] = useState(false)
    const [games, setGames] = useState([])

    let arr = [1, 2, 3];

    useEffect(() => {
        getAllGames()
        // console()
    }, [])


    const getAllGames = async () => {
        try {
            setloading(true)
            console.log("hi there")
            let token = localStorage.getItem('token')
            // console.log(token)
            let res = await axios.get('https://tick-tack-toe-server-git-master-jayantvashisth.vercel.app/api/game/getallgames', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(res.data.user)
            setGames(res.data.games)
            gameContext.setuser(res.data.user)
        }
        catch (error) {
            setloading(false)
        }


    }


    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <span>Your Games</span>
            </div>

            <div className="dashboard-body" style={arr.length == 0 ? { marginTop: "175px" } : { marginTop: "24px" }}>
                {games.length === 0 ?
                    <div>
                        <div className="dashboard-title">
                            <span>No Games Found</span>
                        </div>
                        <div style={{ marginTop: "86px" }} onClick={() => { navigate('/startgame') }} className="dashboard-button">
                            <button>Start a new game</button>
                        </div>
                    </div>
                    :
                    (<div>
                        {
                            games.map((data) => {
                                return (
                                    <div style={{ padding: "16px" }}>
                                        <GameCard defender={data.defender} challenger={data.challenger} name={gameContext.user} status={data.status} date={data.date} roomId={data._id} />
                                    </div>
                                )
                            })
                        }
                    </div>)

                }


                <div className="btn" style={games.length === 0 ? { visibility: "hidden" } : {}}>
                    <button onClick={() => { navigate('/startgame') }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_6_233)">
                                <path d="M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_6_233">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        New Game
                    </button>
                </div>
            </div>
        </div >
    )
}

export default Dashboard