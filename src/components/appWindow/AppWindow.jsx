import { useState } from 'react'
import Cross from '../../assets/cross.svg'
import Minus from '../../assets/minus.svg'

const AppWindow = props => {
	const [windowBeingDragged, setWindowBeingDragged] = useState(null)
	const [pos, setPos] = useState({
		x: 320,
		y: 10,
	})
	const STYLE = {
		left: pos.x + 'px',
		top: pos.y + 'px',
	}

	const dragStart = event => {
		setWindowBeingDragged(event.target)

		var style = window.getComputedStyle(event.target, null)

		event.dataTransfer.setData(
			'text/plain',
			parseInt(style.getPropertyValue('left'), 10) -
				event.clientX +
				',' +
				(parseInt(style.getPropertyValue('top'), 10) - event.clientY) +
				',' +
				event.target.getAttribute('data-item')
		)

		console.log('start')
	}

	const dragOver = event => {
		event.preventDefault()
		console.log('over')
		return false
	}

	const dragDrop = event => {
		event.preventDefault()

		setPos({ x: event.clientX, y: event.clientY })

		var offset = event.dataTransfer.getData('text/plain').split(',')
		// dm[parseInt(offset[2])].style.left = event.clientX + parseInt(offset[0], 10) + 'px'
		// dm[parseInt(offset[2])].style.top = event.clientY + parseInt(offset[1], 10) + 'px'

		console.log('drop', window.getComputedStyle(event.target, null))
		// return false
	}

	return (
		<div
			className='window'
			style={STYLE}
			draggable
			dataitem={props.id}
			onDragStart={dragStart}
			onDragOver={dragOver}
			onDrop={dragDrop}
		>
			<div className='title_bar'>
				<div className='title_icon'>
					<img src='/images/files.png' alt='' />
					<span>Files</span>
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
