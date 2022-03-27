import React from "react";
import './services.css';
import ServiceItem from "./ServiceItem";

const Services = () => {
    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <ServiceItem title="Web Development" serviceList={["HTML", "CSS", "JavaScript", "React", "React Native"]} />
                <ServiceItem title="Back-End Development" serviceList={["HTML", "CSS", "JavaScript", "React", "React Native"]} />
            </div>
        </section>
    );
}

export default Services;