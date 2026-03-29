import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext.jsx";   
import './index.scss'
import App from './App.jsx'
import "./style/global.scss";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>   {/* 👈 wrap here */}
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)