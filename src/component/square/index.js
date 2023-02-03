import React from 'react'
import './index.css'

function Square({ val, onClick }) {
    return (
        <div className="square-container">
            <button className='sq-btn' onClick={onClick}>
                {val ? val === 'X' ? <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="9.86491" height="44.3921" rx="4.93245" transform="matrix(0.706472 0.707741 -0.706472 0.707741 32.1619 0.800232)" fill="#2C8DFF" />
                    <rect width="9.8649" height="44.3921" rx="4.93245" transform="matrix(0.706473 -0.70774 0.706473 0.70774 0.868866 7.78192)" fill="#2C8DFF" />
                </svg>
                    : <svg width="105" height="105" viewBox="0 0 105 105" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="105" height="105" fill="white" />
                        <circle cx="52.5" cy="52.5" r="23.625" stroke="#FF4F4F" stroke-width="15.75" />
                    </svg>
                    : ''}
            </button>
        </div>
    )
}

export default Square