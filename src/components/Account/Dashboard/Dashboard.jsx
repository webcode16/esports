import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
      return;
    }

    axios.get("http://localhost:5000/api/auth/me", {
      headers: { Authorization: token }
    })
    .then(res => setUser(res.data))
    .catch(() => {
      localStorage.removeItem("token");
      navigate("/");
    });

  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="container">
      <div className="main-dashboard m-5 p-5 bg-white text-black rounded-4">
        <h1>Dashboard</h1>
        {user ? (
          <>
            <h2>Welcome {user.name} 🎉</h2>
            <p>Email: {user.email}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}

        <button className="primary-button py-2 px-4 border-0" onClick={logout}>Logout</button>
      </div>
      </div>
 
  );
}