import React from "react";

const TestimonialItem = ({ img, name, review }) => {
    return (
        <article className="testimonial">
        <div className="client__avatar">
            <img src={img} alt={name} />
        </div>
        <h5 className="client__name">{name}</h5>
        <small className="client__review">{review}</small>
        </article>
    );
}

export default TestimonialItem;