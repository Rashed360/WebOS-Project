import { useState, useEffect } from 'react'
import Desktop from './components/desktop/Desktop'
import TaskBar from './components/taskbar/TaskBar'

const App = () => {

  const [apps, setApps] = useState([])

  return (
    <div className="app">
      <Desktop />
      <TaskBar />
    </div>
  );
}

export default App;
