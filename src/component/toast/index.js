import React from 'react'
import './index.css'

export const Toast = (props) => {
    return (
        <div style={props.error ? { background: "#EB5757" } : {}} className="toast" onClick={props.onclick}>
            <span>{props.text}</span>
        </div>
    )
}
