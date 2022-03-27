import React from "react";

const ContactOption = ({ icon, title, text, link }) => {
    return (
        <article className='contact__option'>
            {icon}
            <h4>{title}</h4>
            <h5>{text}</h5>
            <a href={link} target='_blank' rel="noreferrer">Send a message</a>
        </article>
    );
}

export default ContactOption;