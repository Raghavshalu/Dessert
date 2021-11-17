import { BsFillTelephoneFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { MdLocationPin } from "react-icons/md";
const Contact=()=>{
return(
    <div className="touchin">
        <h2 style={{fontFamily:'cursive'}}>GET N TOUCH</h2>
        <p><BsFillTelephoneFill className="check" size="15"/>Phone: 011 4004 1611</p>
        <p style={{fontFamily:'sans-serif'}}><FiMail className="check" size="15"/>
        Email: <span style={{color:'red'}}>shalinirag.1126@gmail.com</span></p>
        <p style={{fontFamily:'monospace'}}><MdLocationPin className="check" size="15"/>Address:1-b, Khan Market, Rabindra Nagar, New Delhi, Delhi 110003</p>
        <hr style={{size:'1',width:'90%',color:'black'}}/>
        <h3>HAVE SOME QUESTIONS?</h3>
        <form className="touch">
        <input type="text" placeholder="First Name" className="input"/>
        <input type="text" placeholder="Last Name" className="input"/>
        <input type="email" placeholder="What's your email?" className="input"/>
        <textarea cols="50" rows="10" placeholder="Message" className="para"/>
        <div>
        <button className="button1">Send Message</button>
        </div>
        </form>
    </div>
)
}
export default Contact;