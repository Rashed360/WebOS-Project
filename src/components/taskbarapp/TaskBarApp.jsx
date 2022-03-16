import React from 'react'
import TaskbarAppIcon from '../../pages/taskbar/taskbaricon/TaskbarAppIcon'

const TaskBarApp = ({name,imgSrc,flavour,onClick,...props}) => {

  const taskbarAppAction = (name) => {
    onClick(name)
  }

  return (
    <div className={ props.active===name ? 'taskbar-app active' : 'taskbar-app'}>
      <TaskbarAppIcon size='30' color={flavour} radius='5' iconOnClick={taskbarAppAction.bind(null,name)}>
        <img src={imgSrc} alt="start" />
      </TaskbarAppIcon>
    </div>
  )
}

export default TaskBarApp
