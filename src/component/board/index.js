import React, { useContext, useEffect, useRef, useState } from 'react'
import Square from '../square'
import './index.css'
import logic from '../../logic'
import GameContext from '../../state/GameContext';


function Board(props) {
    const gameContext = useContext(GameContext)

    const [XisNext, setXisNext] = useState(true)
    const [active, setActive] = useState('')


    const [user, setuser] = useState()
    const [room, setroom] = useState()

    const [arr, setArr] = useState(props.data.position)

    useEffect(() => {
    }, [])


    const handleClick = (i) => {
        console.log("dasdasd", props.data)
        console.log(arr)
        props.markNew(i)
    }


    const renderSquare = (i) => {
       
        return <Square
            val={props?.array[i]}
            onClick={() => handleClick(i)}
        />;
    }

    return (
        <div className="board-container" style={XisNext ? { backgroundColor: "#FFE79E" } : { backgroundColor: "#DDDDDD" }}>
            <div className="board-title">
                <span>{props.status===gameContext.user?"Your Turn":"Opponents Turn"}</span>
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