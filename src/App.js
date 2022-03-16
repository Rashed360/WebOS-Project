import { useState, useCallback } from 'react'
import Cursor from './components/cursor/Cursor'
import Context from './components/cursor/Context'
import Desktop from './pages/desktop/Desktop'
import TaskBar from './pages/taskbar/TaskBar'

const App = () => {
	const [curPos, setCurPos] = useState({ x: 0, y: 0 })
	const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 })
	const [apps, setApps] = useState([])
	const [show, setShow] = useState(false)

	const contextMenu = useCallback(
		event => {
			event.preventDefault()
			setAnchorPoint({ x: event.pageX, y: event.pageY })
			setShow(true)
		},
		[setAnchorPoint, setShow]
	)
	const handleClick = useCallback(() => (show ? setShow(false) : null), [show])

	const handleMouseMove = e => {
		const { clientX, clientY } = e
		setCurPos({ x: clientX, y: clientY })
	}

	return (
		<div className='app' onMouseMove={handleMouseMove} onContextMenu={contextMenu} onClick={handleClick}>
			<Desktop />
			<TaskBar />
			<Cursor pos={curPos} />
			{show && <Context pos={anchorPoint} />}
		</div>
	)
}

export default App
