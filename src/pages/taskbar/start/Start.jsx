import React from 'react'
import TaskbarAppIcon from '../taskbaricon/TaskbarAppIcon'

const Start = () => {

  const startButtonAction = () => {
    console.log('start button pressed')
  }

  return <div className='start'>
    <TaskbarAppIcon size='34' color='#6F7275' radius='5' iconOnClick={startButtonAction}>
      <img src="/images/start.png" alt="start" />
    </TaskbarAppIcon>
  </div>
}

export default Start
