import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './assets/Components/Home';
import Front from './assets/Components/Front';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/front' element={<Front />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;