import { Routes, Route } from "react-router-dom";

import AdminLogin from "./pages/AdminLogin";
import CustomerLogin from "./pages/CustomerLogin";
import AdminDashboard from "./pages/AdminDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home Page</h1>} />

      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/customer-login" element={<CustomerLogin />} />

      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/customer-dashboard" element={<CustomerDashboard />} />
    </Routes>
  );
}

export default App;