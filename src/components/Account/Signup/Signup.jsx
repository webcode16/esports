import { useState } from "react";
import axios from "axios";
import bgbanner from "../../../assets/account-banner.webp";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/auth/register", form);
    alert("Registered Successfully");
  };

  return (
    <div className="container">
       <div className="main-login my-5 p-5">
              <div className="banner-login rounded-4">
                <img src={bgbanner} alt="Logo" className="rounded-4"/>
              </div>
        <form onSubmit={handleSubmit} className="d-flex flex-column p-5 text-center rounded-4">
          <h2 className="heading">Register</h2>
          <p className="sub-heading">You can sign up quickly using one of our single sign-on options.</p>
          <input className="p-2 rounded-2" name="name" placeholder="Name" onChange={e => setForm({...form, name: e.target.value})} />
          <input className="p-2 rounded-2" name="email" placeholder="Email" onChange={e => setForm({...form, email: e.target.value})} />
          <input className="p-2 rounded-2" name="password" type="password" placeholder="Password" onChange={e => setForm({...form, password: e.target.value})} />
          <button className="primary-button py-2 px-4 nav-link" type="submit">Register</button>
        </form>
        </div>
    </div>
  );
}