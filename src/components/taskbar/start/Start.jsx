import React from 'react'
import Icon from '../../icon/Icon'

const Start = () => {

  const startButtonAction = () => {
    console.log('start button pressed')
  }

  return <div className='start'>
    <Icon size='34' color='#6F7275' radius='5' iconOnClick={startButtonAction}>
      <img src="/images/start.png" alt="start" />
    </Icon>
  </div>
}

export default Start
