import React from "react";
import './experience.css';
import ExperienceDetails from "./ExperienceDetails";

const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className='container experience__container'>
                <div className='experience__frontent'>
                    <h3>Front-End Development</h3>
                    <div className="experience__content">
                        <ExperienceDetails tech="HTML" level="Intermediate" />
                        <ExperienceDetails tech="CSS" level="Basic" />
                        <ExperienceDetails tech="JavaScript" level="Basic" />
                        <ExperienceDetails tech="React" level="Basic" />
                        <ExperienceDetails tech="React Native" level="Basic" />
                    </div>
                </div>
                
                <div className='experience__backend'>
                <h3>Back-End Development</h3>
                    <div className="experience__content">
                        <ExperienceDetails tech="Node JS" level="Basic" />
                        <ExperienceDetails tech="MongoDB" level="Basic" />
                        <ExperienceDetails tech="SQL Server" level="Intermediate" />
                        <ExperienceDetails tech="Python" level="Intermediate" />
                        <ExperienceDetails tech="C#" level="Basic" />
                    </div>
                </div>


            </div>
        </section>
    );
}

export default Experience;