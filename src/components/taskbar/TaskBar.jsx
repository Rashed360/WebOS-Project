import React from 'react'
import { useState } from 'react'
import Start from './start/Start'
import TaskBarApp from './taskbarapp/TaskBarApp'
import TimeDate from './timedate/TimeDate'
import StartMenu from './start/startmenu/StartMenu'

const TaskBar = () => {
  const [activeApp, setActiveApp] = useState('Text')

  return <div className='taskbar'>
      <Start />
      <div className="taskbar-items">
          <div className="apps">
              <TaskBarApp 
                name='Files' 
                imgSrc='/images/files.png' 
                flavour='#F3D159' 
                active={activeApp} 
                onClick={setActiveApp} 
              />
              <TaskBarApp 
                name='Text' 
                imgSrc='/images/files.png' 
                flavour='#FFFFFF' 
                active={activeApp} 
                onClick={setActiveApp} 
              />
          </div>
          <TimeDate />
      </div>
      <StartMenu />
  </div>
}

export default TaskBar
