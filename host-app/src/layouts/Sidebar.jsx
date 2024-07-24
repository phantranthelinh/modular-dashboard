import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"

import { cn } from "../lib/utils"
import {
  X,
  Menu,
  LogOut,
  SquareActivity,
  CalendarCheck,
  ChartPie,
  LayoutDashboard
} from "lucide-react"

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <>
      <button
        onClick={() => setShowSidebar(true)}
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <Menu size={20} className="cursor-pointer" />
      </button>
      <aside
        className={cn(
          "fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0",
          {
            "translate-x-0": showSidebar
          }
        )}
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <div className="flex  sm:hidden relative ">
            <button onClick={() => setShowSidebar(false)} className="absolute -top-px -right-[2px]">
              <X size={22} className="cursor-pointer" />
            </button>
          </div>
          <ul className="space-y-2 font-medium ">
            <li>
              <NavLink
                to="/"
                className="flex items-center  text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="ms-2 text-3xl text-primary-700 font-semibold">
                  Dashboard
                </span>
              </NavLink>
            </li>
            <hr />
            <li>
              <Link
                to="/task-overview"
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group hover:text-primary-600"
              >
                <CalendarCheck />
                <span className="flex-1 ms-2 whitespace-nowrap">
                  Task overview
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/compliance-status"
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group hover:text-primary-600"
              >
                <ChartPie />
                <span className="flex-1 ms-2 whitespace-nowrap">
                  Compliance status
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/recent-activity"
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group hover:text-primary-600"
              >
                <SquareActivity />
                <span className="flex-1 ms-2 whitespace-nowrap">
                  Recent activity
                </span>
              </Link>
            </li>
            <li>
              <NavLink
                to="/"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group hover:text-primary-600"
              >
                <LogOut />
                <span className="ms-2">Logout</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
