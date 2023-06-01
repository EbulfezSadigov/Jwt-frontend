import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from './components/register'
import Login from './components/login/Login'
import Home from './components/Home'

function App() {
  const token = localStorage.getItem('token')

  return (
    <>
      <Routes>
        {token && <Route path='/' element={<Home />}></Route>}
        <Route path='/' element={<Home />}></Route>
        <Route path='/register' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </>
  )
}

export default App
