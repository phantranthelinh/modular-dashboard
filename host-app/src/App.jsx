import React, { lazy, Suspense } from "react"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import "./index.scss"
import MainLayout from "./layouts/MainLayout"
import { PATH } from "./constants/path"
import NotFound from "./pages/NotFound"
const RecentActivity = lazy(() => import("recent_activity/App"))
const TaskOverview = lazy(() => import("task_overview/App"))
const ComplianceStatus = lazy(() => import("compliance_status/App"))
const Layout = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route
              path="/"
              element=<div>
                <h4>Dashboard</h4>
              </div>
            />
            <Route path={PATH.RECENT_ACTIVITY} element={<RecentActivity />} />
            <Route path={PATH.TASK_OVERVIEW} element={<TaskOverview />} />
            <Route
              path={PATH.COMPLIANCE_STATUS}
              element={<ComplianceStatus />}
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default Layout
