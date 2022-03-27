import React from "react";
import './about.css';
import ME from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import AboutCard from "./AboutCard";

const About = () => {
    return (
        <section id='about'>
            <h5>Get to Know</h5>
            <h2>About Me</h2>

            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={ME} alt='About Me' />
                    </div>
                </div>
                
                <div className="about__content">

                    <div className="about__cards">
                        <AboutCard icon={<FaAward className='about__icon' />} title='Experience' text='1+ Year Working' />
                        <AboutCard icon={<FiUsers className='about__icon' />} title='Clients' text='200+ Worldwide' />
                        <AboutCard icon={<VscFolderLibrary className='about__icon' />} title='Projects' text='30+ Completed' />
                    </div>

                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis vero voluptates vitae reprehenderit molestiae magnam, fuga error rem exercitationem ipsam! Deleniti eius minima ipsum? Sit est dolor iusto distinctio at.
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    );
}

export default About;