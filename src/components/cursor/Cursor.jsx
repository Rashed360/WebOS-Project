import Pointer from '../../assets/cursor.svg'

const Cursor = ({ pos }) => {
	const { x, y } = pos
	return (
		<div
			className='cursor'
			style={{
				left: x,
				top: y,
				backgroundImage: `url(${Pointer})`,
			}}
		/>
	)
}

export default Cursor
