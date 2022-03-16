const Context = ({ pos }) => {
	const { x, y } = pos
	return (
		<ul
			className='menu'
			style={{
				left: x,
				top: y,
			}}
		>
			<li>Refresh</li>
			<li>Copy</li>
			<li>Cut</li>
			<li>Paste</li>
			<li>More Options</li>
		</ul>
	)
}

export default Context
