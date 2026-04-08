import React from 'react'
import { Outlet } from 'react-router'
import Navber from '../components/Navber/Navber'
import Footer from '../components/Footer/Footer'

const MainLayout = () => {
  return (
    <div>
      <Navber />
      <Outlet />
    </div>
  )
}

export default MainLayout
