
import {FaPhone,FaEnvelope} from "react-icons/fa"
const Contacts=()=>{
    return (
        <>
           
           <section className="contacts">
           <h1>Contact Me</h1> 
            <ul>
                <li>
                    <a href="tel: 0792066199">
                    <FaPhone /> +254 (0) 792 066 199
                    </a>
                </li>
                <li>
                    <a href="mailto: lennyweda@gmail">
                    <FaEnvelope /> lennyweda@gmail.com
                    </a>
                </li>
            </ul>
           </section>
        </>
    );
}

export default Contacts;