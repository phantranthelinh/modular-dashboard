import React from "react"
import { Link, NavLink } from "react-router-dom"

import {
  CalendarCheck,
  ChartPie,
  LogOut,
  SquareActivity
} from "lucide-react"

const sidebarLinks = [
  {
    link: '/task-overview',
    label: "Task Overview",
    icon: <CalendarCheck />
  },
  {
    link: '/compliance-status',
    label: "Compliance status",
    icon: <ChartPie />
  },
  {
    link: '/recent-activity',
    label: "Recent Activity",
    icon: <SquareActivity />
  },
  {
    link: "/logout",
    label: "Logout",
    icon: <LogOut />
  }
]

const Sidebar = () => {

  return (
    <>

      <aside
        className={
          "fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        }
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 ">
          <div className="flex  sm:hidden relative ">

          </div>
          <ul className="space-y-2 font-medium ">
            <li>
              <NavLink
                to="/"
                className="flex items-center  text-gray-900 rounded-lg  hover:bg-gray-100  group"
              >
                <span className="ms-2 text-3xl text-primary-700 font-semibold">
                  Dashboard
                </span>
              </NavLink>
            </li>
            <hr />
            {sidebarLinks.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.link}
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group hover:text-primary-600"
                >
                  {item.icon}
                  <span className="flex-1 ms-2 whitespace-nowrap">
                    {item.label}
                  </span>
                </Link>
              </li>
            )

            )}

          </ul>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
