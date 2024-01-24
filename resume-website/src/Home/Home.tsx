import {useState, useEffect, useRef } from 'react';
import { format } from 'date-fns';
import Header from "../components/Header/Header"
import DefaultButton from '../components/Buttons/DefaultButton/DefaultButton';
import RoundButton from '../components/Buttons/RoundButton/RoundButton';
import SkillBox from '../components/SkillsBox/SkillBox';
import wongnung from '../assets/images/wongnung.png'
import referite from '../assets/images/referite.png'
import eggseed from '../assets/images/eggseed.png'
import gmail from '../assets/images/gmail.png'
import github from '../assets/images/github.png'
import linkedin from '../assets/images/linkedin.png'
import facebook from '../assets/images/facebook.png'
import myPic from '../assets/images/myPic.png'

import './Home.css'

export default function Home() {
    const [dateState, setDateState] = useState(new Date());

    const home = useRef<HTMLDivElement>(null);
    const about = useRef<HTMLDivElement>(null);
    const projects = useRef<HTMLDivElement>(null);
    const contact = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const intervalId = setInterval(() => setDateState(new Date()), 30000);

        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId)
    }, []);

    const formattedDate = format(dateState, 'eeee,  \xa0dd MMMM yyyy,  \xa0h:mm a');

    const skills = [
        "Python", 
        "JavaScript, TypeScript", 
        "c++", 
        "Java", 
        "HTML", 
        "CSS", 
        "Git", 
        "Markdown", 
        "npm", 
        "pip", 
        "React.js", 
        "Django",
        "Scrum", 
        "Agile"
    ]

    const scrollToHome = () => {
        if (home.current) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

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
        home: scrollToHome,
        about: scrollToAbout,
        contact: scrollToContact,
        project: scrollToProjects,
    };

    const linkToReferite = () => {
        const handleButtonClick = () => {
            window.open('https://github.com/Referite', '_blank');
        };
        handleButtonClick(); // Call the function to open the URL
    };
      
    const linkToWongNung = () => {
        const handleButtonClick = () => {
            window.open('https://github.com/WongNung/WongNung', '_blank');
        };
        handleButtonClick(); // Call the function to open the URL
    };
      
    const linkToFuiyoh = () => {
        const handleButtonClick = () => {
            window.open('https://github.com/eggceed/fuiyoh', '_blank');
        };
        handleButtonClick(); // Call the function to open the URL
    };

    const handleEmailClick = () => {
        const emailAddress = 'tanabodeeyambangyang@gmail.com'; 
        const gmailComposeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}` 

        window.location.href = gmailComposeLink;
    };

    const handleFacebookClick = () => {
        const facebookLink = 'https://www.facebook.com/profile.php?id=100007994625777'

        window.location.href = facebookLink;
    }

    const handleGitHubClick = () => {
        const gitHubLink = 'https://github.com/Tanabodee-Yambangyang'

        window.location.href = gitHubLink;
    }

    const handleLinkedInClick = () => {
        const linkInLink = 'https://www.linkedin.com/in/tanabodee-yambangyang-11a3882a2/'

        window.location.href = linkInLink;
    }

    
    return(
        <>
            <Header onLinkClick={handleLinkClick} scrollFunctions={scrollFunctions} />
            <div ref={home} className="homepage-content">
                <label> {formattedDate} </label>
                <div className="intro-container">
                    <div className="name-container"> Hi, I'm Tanabodee Yambangyang. </div>
                    <div className="role-container">
                        <p> Front-end Developer || Software Engineering </p>
                    </div>
                    <DefaultButton
                        text="See my Projects"
                        onClick={scrollToProjects}
                        className="scroll-to-project-btn"
                    />
                </div>  

                <div ref={about} className='about-container'>
                    <div className="topic-container">
                        <h1> About </h1>
                    </div>
                    
                    <div className="about-intro-container">
                        <div className='my-photo-container'>
                            <img src={myPic} className="my-photo"/>
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
                    <div className="topic-container">
                        <h1> Projects </h1>
                        <p> Here you can explore my previous projects </p>
                    </div>
                    <div className="project-content">
                        <div className='project-photo-container'>
                            <img src={referite} className="project-photo"/>
                        </div>
                        <div className='project-description'>
                            <p>
                                <h2> Referite </h2>
                                Referite is an app used to assist the Paris Organization Committee in 
                                scheduling and recording medal outcomes. It includes a referee login, 
                                real-time result tracking, data validation, and a user-friendly interface for 
                                overseeing competitions and country participation.
                            </p>
                            <DefaultButton
                                text="Github Repository"
                                onClick={linkToReferite}
                                className='github-btn'
                            />
                        </div>  
                        
                        <div className='project-photo-container'>
                            <img src={wongnung} className="project-photo"/>
                        </div> 
                        <div className='project-description'>
                            <p>
                                <h2> WongNung </h2>        
                                WongNung: a user-driven film review platform where you can post/read reviews, 
                                discover like-minded Fandoms, and explore personalized film recommendations based 
                                on your tastes.
                            </p>
                            <DefaultButton
                                text="Github Repository"
                                onClick={linkToWongNung}
                                className='github-btn'
                            />
                        </div> 
                        
                        <div className='project-photo-container'>
                            <img src={eggseed} className="project-photo"/>
                        </div>  
                        <div className='project-description'>
                            <p>
                                <h2> Fuiyoh </h2>
                                Fuiyoh is a seasoning dispenser project for the 19th Exceed Camp, 
                                Computer Engineering department, Kasetsart University that allows 
                                users to control the amount of condiments of a specific menu on 
                                a web app interface.
                            </p>  
                            <DefaultButton
                                text="Github Repository"
                                onClick={linkToFuiyoh}
                                className='github-btn'
                            />
                        </div>
                    </div>
                </div>

                <div ref={contact} className='contact-container'>
                    <div className="topic-container">
                        <h1> Contact me </h1>
                        <p> Get in Touch </p>
                    </div>
                    
                    <div className="contact-content">
                        <RoundButton
                            image={gmail}
                            className='contact-btn'
                            onClick={handleEmailClick}
                        />
                        <RoundButton
                            image={github}
                            className='contact-btn'
                            onClick={handleGitHubClick}
                        />
                        <RoundButton
                            image={linkedin}
                            className='contact-btn'
                            onClick={handleLinkedInClick}
                        />
                        <RoundButton
                            image={facebook}
                            className='contact-btn'
                            onClick={handleFacebookClick}
                        />
                    </div>
                </div>
            </div>

            
            
        </>        
    )
}