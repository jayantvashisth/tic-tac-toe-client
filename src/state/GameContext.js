import { createContext } from "react";
import { useState } from "react";

const GameContext = createContext({
    roomID: '',
    user: '',
    setroomID: () => { },
    setuser: () => { }
});

export const GameProvider = ({ children }) => {
    const [roomID, setroomID] = useState()
    const [user, setuser] = useState()

    const changeRoomId = (date) => {
        setroomID(date)
    }
    const changeUser = (date) => {
        setuser(date)
    }

    const context = {
        roomID: roomID,
        user: user,
        setroomID: changeRoomId,
        setuser: changeUser
    }

    return (
        <GameContext.Provider value={context}>{children}</GameContext.Provider>
    )
}


export default GameContext;