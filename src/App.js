import { useState, useEffect } from 'react'
import Desktop from './pages/desktop/Desktop'
import TaskBar from './pages/taskbar/TaskBar'

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
