import React from 'react'
import './App.css'
import { BrowserRouter,  Route, Routes } from 'react-router-dom'
import Home from './assets/Components/Home'
import Insert from './assets/Components/Insert'
import Update from './assets/Components/Update'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/insert' element={<Insert />} />
      <Route path="/update/:id" element={<Update />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
