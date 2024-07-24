import React from "react"
import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
const MainLayout = () => {
  return (
    <>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <Outlet />
      </div>
    </>
  )
}

export default MainLayout
