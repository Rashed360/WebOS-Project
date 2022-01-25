import React from 'react'
import Start from './start/Start'
import TaskBarApp from './taskbarapp/TaskBarApp'
import TimeDate from './timedate/TimeDate'

const TaskBar = () => {
  return <div className='taskbar'>
      <Start />
      <div className="taskbar-items">
          <div className="apps">
              <TaskBarApp />
              <TaskBarApp />
          </div>
          <TimeDate />
      </div>

  </div>
}

export default TaskBar
