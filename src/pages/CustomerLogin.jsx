import { useNavigate } from "react-router-dom";

function CustomerLogin() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-green-200">
      <div className="w-96 bg-white p-8 rounded-2xl shadow-xl">

        <h2 className="text-2xl font-bold text-center text-green-700">
          Customer Login
        </h2>

        <p className="text-center text-gray-500 text-sm mb-6">
          Find your dream property
        </p>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-3 border rounded-lg focus:outline-green-500"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-5 border rounded-lg focus:outline-green-500"
        />

        <button
          onClick={() => navigate("/customer-dashboard")}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold"
        >
          Login as Customer
        </button>
      </div>
    </div>
  );
}

export default CustomerLogin;