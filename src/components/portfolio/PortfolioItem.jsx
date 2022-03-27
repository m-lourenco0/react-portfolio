import React from "react";

const PortfolioItem = ({ img, alt, title, gitLink, bribbbleLink }) => {
    return (
        <article className='portfolio__item'>
            <div className='portfolio__item-image'>
                <img src={img} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
                <a href={gitLink} className='btn' target='_blank' rel='noreferrer'>Github</a>
                <a href={bribbbleLink} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
            </div>
        </article>
    );
}

export default PortfolioItem;