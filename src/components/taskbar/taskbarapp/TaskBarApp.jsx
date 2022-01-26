import React from 'react'
import Icon from '../../icon/Icon'

const TaskBarApp = ({name,imgSrc,flavour,onClick,...props}) => {

  const taskbarAppAction = (name) => {
    onClick(name)
  }

  return (
    <div className={ props.active===name ? 'taskbar-app active' : 'taskbar-app'}>
      <Icon size='30' color={flavour} radius='5' iconOnClick={taskbarAppAction.bind(null,name)}>
        <img src={imgSrc} alt="start" />
      </Icon>
    </div>
  )
}

export default TaskBarApp
