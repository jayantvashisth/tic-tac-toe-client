import React, { useContext } from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom';
import GameContext from '../../state/GameContext';


function GameCard(props) {
    const gameContext = useContext(GameContext)
    let navigate = useNavigate()

    const joinRoom = () => {
        gameContext.setChallenger(props.challenger)
        gameContext.setDefender(props.defender)
        gameContext.setroomID(props.roomId)
        navigate('/begingame')
    }

    return (
        <div className="game-card-container">
            <div className="title">
                <span>Game with {props.name === props.challenger ? props.defender : props.challenger}</span>
            </div>
            <div className="match-info">
                <span>{gameContext.user === props.status ? "You will start the game" : `${props.status} will start the game`}</span>
            </div>
            <div className="time">
                <span>{props.date}</span>
            </div>
            <div className="play-button">
                <button onClick={() => { joinRoom(); }}>Play!</button>
            </div>
        </div>
    )
}

export default GameCard