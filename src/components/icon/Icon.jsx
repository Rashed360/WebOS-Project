import React from 'react'

const Icon = ({ size, color, radius, iconOnClick, ...props}) => {
    const iconSize = parseInt(size)
    const iconStyle = {
        backgroundColor: color,
        width: iconSize,
        height: iconSize,
        borderRadius: parseInt(radius)
    }
    return (
        <button style={iconStyle} className='icon' onClick={iconOnClick}>
            {props.children ? props.children : null}
        </button>
    )
}

export default Icon
