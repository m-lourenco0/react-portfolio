import React from "react";

const AboutCard = ({ icon, title, text }) => {
    return (
        <article className="about__card">
            {icon}
            <h5>{title}</h5>
            <small>{text}</small>
        </article>
    );
}

export default AboutCard;