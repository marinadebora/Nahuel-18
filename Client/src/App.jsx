import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Views from './Components/Views'

function App() {
 
  return (
    <>
    <Routes>
      <Route path='/'element={<Home />} />
      <Route path='/nahuel18082007' element={<Views />} />
    </Routes>
    </>
  )
}

export default App
