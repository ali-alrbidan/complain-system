// routes/AppRoutes.tsx
import { Route, Routes } from "react-router-dom";
import AdminLoginPage from "../pages/admin/AdminLoginPage";

import AdminLayout from "../components/layout/adminLayout/AdminLayout";
import IntroPage from "../pages/IntroPage";
import PageNotFound from "../pages/PageNotFound";
import EmployeeDashboard from "../pages/employee/EmployeeDashboard";
import EmployeeLoginPage from "../pages/employee/EmployeeLoginPage";

import AdminOverviewPage from "../pages/admin/AdminOverviewPage";
import AdminAnalyticsPage from "../pages/admin/AdminAnalyticsPage";
import AdminEmployeePage from "../pages/admin/AdminEmployeePage";
import AdminDepartmentPage from "../pages/admin/AdminDepartmentPage";
import AdminCategoryPage from "../pages/admin/AdminCategoryPage";
import AdminLogsPage from "../pages/admin/AdminLogsPage";
import AdminSecurityPage from "../pages/admin/AdminSecurityPage";
import AdminPerformancePage from "../pages/admin/AdminPerformancePage";
import AdminBackupPage from "../pages/admin/AdminBackupPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<IntroPage />} />
      <Route path="*" element={<PageNotFound />} />

      {/* admin routes */}
      <Route path="/admin-login" element={<AdminLoginPage />} />

      <Route path="/admin-dashboard" element={<AdminLayout />}>
        <Route index element={<AdminOverviewPage />} />
        <Route path="overview" element={<AdminOverviewPage />} />
        <Route path="analytics" element={<AdminAnalyticsPage />} />
        <Route path="employee" element={<AdminEmployeePage />} />
        <Route path="department" element={<AdminDepartmentPage />} />
        <Route path="category" element={<AdminCategoryPage />} />
        <Route path="logs" element={<AdminLogsPage />} />
        <Route path="security" element={<AdminSecurityPage />} />
        <Route path="performance" element={<AdminPerformancePage />} />
        <Route path="backup" element={<AdminBackupPage />} />
      </Route>

      {/* employee routes routes */}
      <Route path="/employee-login" element={<EmployeeLoginPage />} />
      <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
    </Routes>
  );
}

export default AppRoutes;
