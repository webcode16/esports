import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.scss'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
       <main style={{ padding: "2rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
