import { useState } from 'react'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import Cross from '../../assets/cross.svg'
import Minus from '../../assets/minus.svg'

const AppWindow = props => {
	const { height, width } = useWindowDimensions()
	const leftGap = (width - 800) / 2
	const topGap = (height - 600) / 2
	const [pos, setPos] = useState({ x: leftGap, y: topGap })

	const roundUp = value => {
		if (value < 0) return 0
		return value
	}

	const STYLE = {
		left: pos.x - roundUp(leftGap),
		top: pos.y - roundUp(topGap),
	}

	const dragOver = event => {
		event.preventDefault()
	}

	const dragDrop = event => {
		event.preventDefault()
	}

	const dragEnd = event => {
		event.preventDefault()
		// let rect = event.target.getBoundingClientRect()
		const { clientX, clientY } = event
		setPos({ x: clientX-200, y: clientY-15 })
	}

	return (
		<div
			className='window'
			style={STYLE}
			draggable
			dataitem={props.id}
			onDragOver={dragOver}
			onDrop={dragDrop}
			onDragEnd={dragEnd}
		>
			<div className='title_bar'>
				<div className='title_icon'>
					<img src='/images/files.png' alt='' />
					<span>Files {leftGap + ' ' + topGap}</span>
				</div>
				<div className='title_utils'>
					<button className='min'>
						<img src={Minus} alt='' />
					</button>
					<button className='close'>
						<img src={Cross} alt='' />
					</button>
				</div>
			</div>
			<div className='action_bar'>
				<div className='action'>
					<div className='action_icon brown'></div>
					<span>New Folder</span>
				</div>
				<div className='action'>
					<div className='action_icon'></div>
					<span>New File</span>
				</div>
			</div>
			<div className='content'>{props.children}</div>
		</div>
	)
}

export default AppWindow
