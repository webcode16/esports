import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthContext";
import "../Login/Login.scss";
import bgbanner from "../../../assets/account-banner.webp";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);   // 👈 add this

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/auth/login", form);

    login(res.data.token);   // 👈 use context login
    navigate("/dashboard");
  };

  return (
    <div className="container">
      <div className="main-login my-5 p-5">
        <div className="banner-login rounded-4">
          <img src={bgbanner} alt="Logo" className="rounded-4"/>
        </div>

        <form onSubmit={handleSubmit} className="d-flex flex-column p-5 text-center rounded-4">
          <h1 className="heading">Login</h1>

          <input
            className="p-2 rounded-2"
            name="email"
            placeholder="Email"
            onChange={e => setForm({...form, email: e.target.value})}
          />

          <input
            className="p-2 rounded-2"
            name="password"
            type="password"
            placeholder="Password"
            onChange={e => setForm({...form, password: e.target.value})}
          />

          <button className="login-btn p-2 rounded-2 bg-black text-white b-0" type="submit">
            Login
          </button>

          <Link to="/signup" className="primary-button py-2 px-4 nav-link">
            Sign Up
          </Link>
        </form>
      </div>
    </div>
  );
}