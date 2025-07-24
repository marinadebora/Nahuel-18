import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Views from './Components/Views'
import Form from './Components/Form'

function App() {
 
  return (
    <>
    <Routes>
      <Route path='/'element={<Home />} />
      <Route path='/nahuel18082007' element={<Views />} />
      <Route path='/confirmAttendance' element={<Form />}/>
    </Routes>
    </>
  )
}

export default App
