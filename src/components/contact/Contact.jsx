import React, { useRef } from "react";
import './contact.css';
import ContactOption from "./ContactOption";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from 'emailjs-com';

const data = [
    { icon: <MdOutlineEmail className='contact__option-icon'/>, title: 'Email', text: 'mlourencosantos_@hotmail.com', link: 'mailto:mlourencosantos_@hotmail.com' },
    { icon: <RiMessengerLine className='contact__option-icon'/>, title: 'Messenger', text: 'mlourenco', link: 'https://www.messenger.com/t/mlourenco' },
    { icon: <BsWhatsapp className='contact__option-icon'/>, title: 'WhatsApp', text: '+55 (19) 99997-0505', link: 'https://api.whatsapp.com/send?phone=5519999970505' },

]


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_m3dk319', 'template_bef4zhn', e.target, 'F0vwpVnpZPEHJ25Lr');

        e.target.reset();
    }



    return (
        <section id='contact'>
            <h5> Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className='container contact__container'>
                <div className='contact__options'>
                    {data.map((item, index) => {
                        return <ContactOption key={index} {...item} />
                    })}
                </div>
                
                <form ref={form} onSubmit={sendEmail} className="contact__form" action="">
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
                    <button type='submit' className="btn btn-primary">Send Message</button>
                </form>
            </div>

        </section>
    );
}

export default Contact;