import React, { useContext, useEffect, useRef, useState } from 'react'
import Square from '../square'
import './index.css'
import logic from '../../logic'
import GameContext from '../../state/GameContext';
import { socket } from '../../socket'


function Board() {
    const gameContext = useContext(GameContext)
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    const xIsNext = useRef(true);
    const Chance = useRef(1);
    const Player = useRef('');

    const [user, setuser] = useState()
    const [room, setroom] = useState()



    useEffect(() => {
        // console.log("yiipii", gameContext)
        socket.emit('join', gameContext.roomID)
        setuser(gameContext?.user)
        setroom(gameContext.roomID)
    }, [])


    socket.on('squareClickedReceived', click => {
        const i = click.i;
        console.log("hellooooooooooo")
        console.log("oye", i);
        squares[i] = xIsNext.current ? 'X' : 'O';
        xIsNext.current = !xIsNext.current;
        setSquares(squares);

        Player.current = click.gameContext?.user;

        if (Chance.current === 2) Chance.current = 1;
        if (Chance.current === -1) Chance.current = 2;
        console.log(squares);
        forceUpdate();
    })




    const handleClick = (i) => {

        if ( Chance.current === -1 || logic(squares) || squares[i]) {
            return;
        }

        console.log('emitting', i);
        console.log(user)
        const click = {
            i: i,
            name: user,
            userId: 1234,
            roomId: room
            // hello:"burrah"
        };
        socket.emit('squareClicked', click);
        Chance.current = -1;
    }


    const renderSquare = (i) => {
        // squares[i] = x;
        return <Square
            val={squares[i]}
            onClick={() => handleClick(i)}
        />;
    }

    return (
        <div className="board-container">
            <div className="board-title">
                <span>Your move</span>
            </div>
            <div className="board-pieces">
                <div className="row">
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div className="row">
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div className="row">
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>
            </div>
        </div>
    )
}

export default Board