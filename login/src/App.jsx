import Home from './assets/components/Home'
import Login from './assets/components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        
        
      </Routes>
    </BrowserRouter>
  
  )
}

export default App
