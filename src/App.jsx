import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.scss'

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from "./components/Account/Login/Login";
import Signup from "./components/Account/Signup/Signup";
import Dashboard from "./components/Account/Dashboard/Dashboard";
import Contact from "./pages/Contact/Contact";
import Terms from "./pages/Terms/Terms";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
