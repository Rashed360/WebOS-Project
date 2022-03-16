import React from 'react'
import { useState, useEffect } from 'react'

const TimeDate = () => {
	const [timeDate, setTimeDate] = useState({})

	useEffect(() => {
		var date = new Date()
		var hour = date.getHours()
		var min = date.getMinutes()
		var sec = date.getSeconds()
		setTimeDate({ hour, min, sec })
	}, [])

	return (
		<div className='time-date'>
			<div className=''>
				{timeDate.hour}:{timeDate.min}:{timeDate.sec}
			</div>
		</div>
	)
}

export default TimeDate
