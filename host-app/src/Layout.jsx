import React, { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./index.scss";
import MainLayout from "./components/MainLayout";
const RecentActivity = lazy(() => import("recent_activity/App"));
const TaskOverview = lazy(() => import("task_overview/App"));
const ComplianceStatus = lazy(() => import("compliance_status/App"));
const Layout = () => {
  return (

    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainLayout>
            <div><h4>Dashboard</h4></div>
          </MainLayout>} />
          <Route path="/recent-activity" element={<MainLayout>
            <RecentActivity />
          </MainLayout>} />
          <Route path="/task-overview" element={

            <MainLayout>
              <TaskOverview />
            </MainLayout>
          } />
          <Route path="/compliance-status" element={

            <MainLayout>
              <ComplianceStatus />
            </MainLayout>
          } />
        </Routes>
      </Suspense>

    </Router>


  )
}

export default Layout