import { useState, useEffect } from 'react'
import Cursor from './components/cursor/Cursor'
import Context from './components/cursor/Context'
import Desktop from './pages/desktop/Desktop'
import TaskBar from './pages/taskbar/TaskBar'

const App = () => {
	const [curPos, setCurPos] = useState({ x: 0, y: 0 })
	const [apps, setApps] = useState([])
	const contextMenu = e => {
		e.preventDefault()

	}

	const handleMouseMove = e => {
		const { clientX, clientY } = e
		setCurPos({ x: clientX, y: clientY })
	}

	return (
		<div className='app' onMouseMove={handleMouseMove} onContextMenu={contextMenu}>
			<Desktop />
			<TaskBar />
			<Cursor pos={curPos} />
		</div>
	)
}

export default App
