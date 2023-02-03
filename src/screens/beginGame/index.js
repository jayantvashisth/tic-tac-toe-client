import React, { useContext } from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'
import Board from '../../component/board';
import GameContext from '../../state/GameContext';

export const BeginGame = () => {
    const gameContext = useContext(GameContext)
    let navigate = useNavigate();

    return (
        <div className="begin-game-container">
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
                <Board />
            </div>

            <div className="button">
                <div className="login" onClick={() => { }}>
                    <button>Submit!</button>
                </div>
            </div>
        </div>
    )
}
