import DesktopAPP from '../../components/desktopapp/DesktopAPP'
import AppWindow from '../../components/appWindow/AppWindow'

const Desktop = () => {
	return (
		<div className='desktop'>
			<div className='desktop-content'>
				<DesktopAPP name='Files' icon='/images/files.png' accent='#F4BD61' />
				<DesktopAPP name='Trash' icon='/images/files.png' accent='red' />
				<DesktopAPP name='Text Editor' icon='/images/start.png' accent='grey' />
			</div>
			<AppWindow id='0'>hello</AppWindow>
		</div>
	)
}

export default Desktop
