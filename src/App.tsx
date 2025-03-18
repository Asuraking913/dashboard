
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './page/dashboard'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Dashboard />} path='/'/>
      </Routes>
    </Router>
  )
}

export default App