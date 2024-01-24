import React from 'react'
import ShowBook from './pages/ShowBook'
import EditBook from './pages/EditBook'
import CreateBooks from './pages/CreateBooks'
import Home from './pages/Home'
import DeleteBook from './pages/DeleteBook'
import {Routes, Route} from 'react-router-dom'


export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/books' element={<EditBook/>}/>
    </Routes>

  )
}
