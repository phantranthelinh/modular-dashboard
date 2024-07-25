import React from "react"
import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
const MainLayout = () => {
  return (
    <>
      <Sidebar />
      <section className="sm:ml-64 pl-4 h-screen ">
        <Outlet />
      </section>
    </>
  )
}

export default MainLayout
