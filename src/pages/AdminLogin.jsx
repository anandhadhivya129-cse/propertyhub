import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-200">
      <div className="w-96 bg-white p-8 rounded-2xl shadow-xl">
        
        <h2 className="text-2xl font-bold text-center text-blue-700">
          Admin Login
        </h2>

        <p className="text-center text-gray-500 text-sm mb-6">
          Manage properties & users
        </p>

        <input
          type="text"
          placeholder="Admin ID"
          className="w-full p-3 mb-3 border rounded-lg focus:outline-blue-500"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-5 border rounded-lg focus:outline-blue-500"
        />

        <button
          onClick={() => navigate("/admin-dashboard")}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
        >
          Login as Admin
        </button>
      </div>
    </div>
  );
}

export default AdminLogin;