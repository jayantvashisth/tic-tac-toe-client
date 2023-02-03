import { createContext } from "react";
import { useState } from "react";

const GameContext = createContext({
    roomID: '',
    user: '',
    challenger: '',
    defender: '',
    setDefender: () => { },
    setroomID: () => { },
    setuser: () => { },
    setChallenger: () => { }
});

export const GameProvider = ({ children }) => {
    const [roomID, setroomID] = useState()
    const [user, setuser] = useState()
    const [challenger, setChallenger] = useState();
    const [defender, setDefender] = useState();

    const changeRoomId = (date) => {
        setroomID(date)
    }
    const changeUser = (date) => {
        setuser(date)
    }
    const changeChallenger = (data) => {
        setChallenger(data)
    }
    const changeDefender = (data) => {
        setDefender(data)
    }

    const context = {
        roomID: roomID,
        user: user,
        challenger: challenger,
        defender: defender,
        setroomID: changeRoomId,
        setuser: changeUser,
        setChallenger: changeChallenger,
        setDefender: changeDefender
    }

    return (
        <GameContext.Provider value={context}>{children}</GameContext.Provider>
    )
}


export default GameContext;