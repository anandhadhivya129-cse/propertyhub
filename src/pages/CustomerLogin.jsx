import { useNavigate } from "react-router-dom";

export default function CustomerLogin() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Customer Login</h1>

      <input placeholder="Email" />
      <input type="password" placeholder="Password" />

      <button onClick={() => navigate("/customer-dashboard")}>
        Login
      </button>
    </div>
  );
}