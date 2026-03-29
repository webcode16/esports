import "../Contact/Contact.scss"
import { Link } from "react-router-dom";

function Contact() {
    return (
      <div className="container">
        <div className="contact-us gap-3 d-flex">
            <Link to="/terms" className="primary-button py-2 px-4 bg-white btn-outline-secondary text-black">
                    Term & Conditions
            </Link>
            <Link to="/contact" className="primary-button py-2 px-4">
                    Contact
            </Link>
        </div> 
        <div className="contact-us-bg m-5 p-4 bg-white">
                    <h1 className="heading mb-4">Contact Information</h1>
                    <h2>
                        For any queries or disputes, contact us at:
                    </h2>
                    <p>We’d love to hear from you! Whether you have a question, feedback, or just want to say hello, our team is here to help. Connecting with us is easy, and we promise a friendly response.</p>
                    <p>
                        📧 Email: info@email.com <br/>
                        🌐 Website: https://esports.com <br/>
                        📞 Phone: +1 (123) 456-7890 <br/>
                        📍 Address: 123 Innovation Drive, Tech City, USA
                    </p>
                     <h2>
                       Why Reach Out?
                    </h2>
                    <p>
                    Get personalized support tailored to your needs

                    Learn more about our products and services

                    Share your ideas or feedback — we’re all ears!

                    Stay Connected: Follow us on social media for updates, tips, and exclusive offers.

                    Let’s make something amazing together!</p>
            </div>
    </div>  
   )      
}

export default Contact