import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./index.scss";
const RecentActivity = lazy(() => import("recent_activity/App"));
const TaskOverview = lazy(() => import("task_overview/App"));
const ComplianceStatus = lazy(() => import("compliance_status/App"));

const App = () => (
  <div className='mt-10 text-3xl mx-auto max-w-6xl'>
    <Router>
      <nav>
        <ul>
          <li>
            <Link to='/mfe1'>Micro Frontend 1</Link>
          </li>
          <li>
            <Link to='/mfe2'>Micro Frontend 2</Link>
          </li>
          <li>
            <Link to='/mfe3'>Micro Frontend 3</Link>
          </li>
        </ul>
      </nav>
      <Suspense fallback='Loading...'>
        <Switch>
          {/* <Route path='/task-overview' element={<TaskOverview />} /> */}
          <Route path='/recent-activity' component={<RecentActivity />} />
          {/* <Route path='/compliance-status' component={<ComplianceStatus />} /> */}
        </Switch>
      </Suspense>
    </Router>
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
