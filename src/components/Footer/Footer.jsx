import React from 'react'
import logo from "../../assets/logo.webp";
function Footer() {
  return (
    <div className='bg-black'>
      <div className='container'>
        <div className='d-flex pt-4 justify-space-between align-items-center'>
          <div>
             <img
                      src={logo}
                      alt="Logo"
                      height="70"
                      className="d-inline-block align-top"
                    />
              <p className='mt-4'>© 2025 Esports India All rights reserved.</p>      
          </div>
          <div>
            Terms & Conditions | Contact Us
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
