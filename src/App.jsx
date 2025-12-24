import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Sign from './components/Sign'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import LandingPage from './components/LandingPage'
import Dashboard from './components/Dashboard'
import DbNavBar from './components/DbNavBar'
import Request from './components/Request'
import AdDash from './components/AdDash'
import AdNavBar from './components/adNavBar'
import AddDonor from './components/AddDonor'
import ViewRequest from './components/ViewRequest'
import RequestStatus from './components/RequestStatus'
import UpdateDonor from './components/UpdateDonor'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    
  

    <Routes>
      <Route path='/' element={<><NavBar/><LandingPage /></>} />
      <Route path='/lo' element={<><NavBar/><Login /></>} />
       <Route path='/si' element={<><NavBar/><Sign /></>} />
       <Route path='/dashboard' element={<><DbNavBar/><Dashboard/></>} />
       <Route path='/r' element={<Request/>} />
       <Route path='/admindashboard' element={<><AdNavBar/><AdDash/></>} />
       <Route path='/add' element={<AddDonor/>} />
       <Route path='/v' element={<ViewRequest/>} />
       <Route path='/status' element={<RequestStatus/>} />
       <Route path='/updatedonor/:id' element={<UpdateDonor/>}/>
      
           </Routes> 
    
    </>
  )
}

export default App
