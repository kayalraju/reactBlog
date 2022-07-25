import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import { Navbar } from './navbar/Navbar'
import { Home } from './pages/Home'
import { Student } from './pages/Student'
import { User } from './pages/User'
import  UserState  from '../ContexHooks/UserState'

export const Routerpath = () => {
  return (
    <div>
        <UserState>
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/user' element={<User/>}/>
                <Route path='/student' element={<Student/>}/>
            </Routes>
        </Router>
        </UserState>
    </div>
  )
}
