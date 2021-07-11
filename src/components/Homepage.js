
import {FaGithub, FaLinkedin} from "react-icons/fa"

const Homepage=()=>{
    return(
        <>
            <section className="homepage">
               <div className="overlay">
               <h1>Lenny Orengo</h1>
                <p>Mechatronic Engineer | Programmer | IoT Enthusiast</p>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/lenny-weda-171287197/"
                         target="_blank"
                         rel="noopenner noreferrer">
                        <FaLinkedin />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Captain9965"
                         target="_blank"
                         rel="noopenner noreferrer">
                         <FaGithub />
                         </a>
                    </li>
                </ul>
               </div>
            </section>
        </>
    );
}
export default Homepage;