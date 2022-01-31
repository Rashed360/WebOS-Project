import React from 'react'
import DesktopAPP from './desktopapp/DesktopAPP'

const Desktop = () => {
  return (
    <div className='desktop'>
      <div className="desktop-content">
        <DesktopAPP name="Files" icon="/images/files.png" accent="#F4BD61" />
        <DesktopAPP name="Trash" icon="/images/files.png" accent="red" />
        <DesktopAPP name="Text Editor" icon="/images/start.png" accent="grey" />
      </div>
    </div>
  )
}

export default Desktop
