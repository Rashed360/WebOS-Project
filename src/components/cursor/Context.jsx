const Context = () => {
	return (
		<ul
			className='menu'
			style={{
				top: anchorPoint.y,
				left: anchorPoint.x,
			}}
		>
			<li>Share to..</li>
			<li>Cut</li>
			<li>Copy</li>
			<li>Paste</li>
			<li>Refresh</li>
			<li>Exit</li>
		</ul>
	)
}

export default Context
