import './App.css'
import React from "react"
import Signup from './Signup'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './Login'
import Home from '../Home'


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Signup></Signup>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
