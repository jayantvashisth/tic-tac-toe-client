import React, { useContext } from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom';
import { socket } from '../../socket'
import GameContext from '../../state/GameContext';


function GameCard(props) {
    const gameContext = useContext(GameContext)
    let navigate = useNavigate()

    const joinRoom = () => {
        socket.emit('join', props.roomId);
        gameContext.setroomID(props.roomId)
        navigate('/begingame')
    }

    return (
        <div className="game-card-container">
            <div className="title">
                <span>Game with {props.name}</span>
            </div>
            <div className="match-info">
                <span>{props.name} just made their move! It’s your turn to play now.</span>
            </div>
            <div className="time">
                <span>{props.roomId}</span>
            </div>
            <div className="play-button">
                <button onClick={() => { joinRoom() }}>Play!</button>
            </div>
        </div>
    )
}

export default GameCard