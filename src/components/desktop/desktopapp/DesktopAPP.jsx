import React from 'react'

const DesktopAPP = ({name, icon, accent}) => {
  const customStyle = {
      backgroundColor: accent,
  }
  return (
    <div className="desktop-app">
        <div className="icon" style={customStyle}>
            <img src={icon} alt="start" />
        </div>
        <div className="text">{name}</div>
    </div>
  )
}

export default DesktopAPP
