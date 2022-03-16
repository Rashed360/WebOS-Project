import React from 'react'
import { useState, useEffect } from 'react'

const TimeDate = () => {
	const [timeDate, setTimeDate] = useState({})
	const currentTime = () => {
		var date = new Date()
		var hour = date.getHours()
		var min = date.getMinutes()
		var sec = date.getSeconds()
		setTimeout(function () {
			currentTime()
		}, 1000)
		setTimeDate({ hour, min, sec })
	}

	// useEffect(() => {
	// 	currentTime()
	// })

	return (
		<div className='time-date'>
			<div className=''>
				{timeDate.hour}:{timeDate.min}:{timeDate.sec}
			</div>
		</div>
	)
}

export default TimeDate
