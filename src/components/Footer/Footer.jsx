import React from 'react'
import logo from "../../assets/logo.webp";
import "./footer.scss";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className='bg-black'>
      <div className='container'>
        <div className='d-flex pt-4 justify-space-between align-items-center'>
          <div>
             <img
                      src={logo}
                      alt="Logo"
                      height="70"
                      className="footer-logo d-inline-block align-top"
                    />
              <p className='mt-4'>© 2025 Esports India All rights reserved.</p>      
          </div>
          <div className='terms-contact d-flex gap-3'>
             <Link to="/terms">
                    Terms & Conditions
              </Link>
              |
              <Link to="/contact">
                    Contact Us
              </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
