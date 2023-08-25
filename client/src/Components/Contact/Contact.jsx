import React from 'react'
import "./Contact.scss"
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
function Contact() {
  return (
    <div className='contact'>
       <div className="wrapper">
           <span>GET IN TOUCH WITH US</span>
           <div className="mail">
              <input type="text" placeholder='Enter your e-mail' />
              <button>JOIN US</button>
           </div>

           <div className="icons">
              <FacebookIcon/>
              <InstagramIcon/>
              <GoogleIcon/>
              <TwitterIcon/>
           </div>
       </div>
    </div>
  )
}

export default Contact
