import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Login/>}/>
      <Route path='/register' exact element={<Register/>}/>
      <Route path='/home' exact element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
