import { my_projects } from "../data/my_projects";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
const Projects=()=> {
    //eslint-disable-next-line
    const [cards, setCards]=useState(my_projects);
    return (
        <>
        <section className="projects">
        <h1>Projects</h1>
        <div className="cards">
        {cards.map(({id,title,desc,github,demo,image})=>
         (
             <article key={id}>
                 <img className="photos" src={image} alt={title} />
                 <h4>{title}</h4>
                 <p>{desc}</p>
                 <ul>
                     <li><a href={github}
                     target="_blank"
                     rel="noopenner noreferrer"
                     className="github"
                     ><FaGithub />GitHub</a></li>
                 </ul>
             </article>
         ))}

        </div>

        </section>
        </>
    );
}

export default Projects;