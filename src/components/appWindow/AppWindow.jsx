const AppWindow = () => {
	return (
		<div className='window'>
			<div className='title_bar'>
				<div className='title_icon'>
					<img src="/images/files.png" alt="" />
					<span>Files</span>
				</div>
				<div className='title_utils'>
					<button>-</button>
					<button>X</button>
				</div>
			</div>
			<div className='content'>hello</div>
		</div>
	)
}

export default AppWindow
