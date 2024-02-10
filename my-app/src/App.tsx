import React from 'react'
import Header from '@/pages/Header/Header'
import InfoContainer from '@/Components/InfoContainer'
import '@/styles/global.css'
import { Outlet } from 'react-router-dom'
const App = () => {
  return (
<div>
      <Header/>
      {/* <InfoContainer/> */}
      <Outlet/>
    </div>
  )
}

export default App
