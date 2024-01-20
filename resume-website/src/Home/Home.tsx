import {useState, useEffect, useRef } from 'react';
import { format } from 'date-fns';
import Header from "../components/Header/Header"
import DefaultButton from '../components/Buttons/DefaultButton/DefaultButton';
import SkillBox from '../components/SkillsBox/SkillBox';
import photo_gallery from '../assets/images/photo_gallery.png'
import './Home.css'

export default function Home() {
    const [dateState, setDateState] = useState(new Date());

    const about = useRef<HTMLDivElement>(null);
    const projects = useRef<HTMLDivElement>(null);
    const contact = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const intervalId = setInterval(() => setDateState(new Date()), 30000);

        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId)
    }, []);

    const formattedDate = format(dateState, 'eeee,  \xa0dd MMMM yyyy,  \xa0h:mm a');

    const skills = ["Python", "JavaScript, TypeScript", "HTML", "CSS", "Git", "npm", "pip", "React.js", "Scrum", "Agile"]

    const scrollToAbout = () => {
        if (about.current) {
            about.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToContact = () => {
        if (contact.current) {
            contact.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToProjects = () => {
        if (projects.current) {
            projects.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleLinkClick = (link: string) => {
        // Perform actions based on the clicked link
        console.log(`Link clicked: ${link}`);
    };

    const scrollFunctions: { [key: string]: () => void } = {
        about: scrollToAbout,
        contact: scrollToContact,
        project: scrollToProjects,
    };

    return(
        <>
            <Header onLinkClick={handleLinkClick} scrollFunctions={scrollFunctions} />
            <div className="homepage-content">
                <label> {formattedDate} </label>
                <div className="intro-container">
                    <div className="name-container"> Hi, I'm Tanabodee Yambangyang. </div>
                    <p> Front-end Developer || Software Engineering </p>
                    <DefaultButton
                        text="See my Projects"
                        onClick={scrollToProjects}
                        className="scroll-to-project-btn"
                    />
                </div>  

                <div ref={about} className='about-container'>
                    <h1> About </h1>
                    <div className="about-intro-container">
                        <div className='my-photo-container'>
                            <img src={photo_gallery} className="my-photo"/>
                        </div>
                        <div className="introduction-container">
                            <p>
                                I am an aspiring software developer deeply passionate about crafting creative, visually appealing, 
                                and user-friendly interfaces. Currently in my third year  of studying Software and Knowledge 
                                Engineering at Kasetsart University. I like to study new things and improve my skills.
                            </p>
                        </div>
                    </div>
                    <div className="about-detail-section">
                        <div className="education-section">
                            <h2> Education </h2>
                            <ul>
                                <li>
                                    <p>
                                        <h4> 2021 - Current </h4>
                                        Software and Knowledge engineering
                                        <br/>At. Kasetsart University
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <h4> 2018 - 2020 </h4>
                                        Science Mathematics and Technology
                                        <br/>At. Princess Sirindhorn's College
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="skill-section">
                            <h2> Skills </h2>
                            <div className="skill-detail">
                                {skills.map((skill: string) => (
                                    <SkillBox
                                        text={skill}
                                    />
                                ))}
                            </div>
                        </div>
                        
                        
                            
                    </div>
                </div>
                
                <div ref={projects} className='project-container'>
                    <h2> Project </h2>
                </div>

                <div ref={contact} className='contact-container'>
                    <h2> Contact </h2>
                </div>

                

            </div>

            
            
        </>        
    )
}