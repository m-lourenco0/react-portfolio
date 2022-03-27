import React from "react";
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.jpg';
import IMG6 from '../../assets/portfolio6.jpg';
import PortfolioItem from './PortfolioItem';


const portfolioItems = [
    {img: IMG1, title: 'This is a portfolio item title', gitLink: 'https://www.github.com/ ', bribbbleLink: 'https://bribbble.com'},
    {img: IMG2, title: 'This is a portfolio item title', gitLink: 'https://www.github.com/', bribbbleLink: 'https://bribbble.com'},
    {img: IMG3, title: 'This is a portfolio item title', gitLink: 'https://www.github.com/', bribbbleLink: 'https://bribbble.com'},
    {img: IMG4, title: 'This is a portfolio item title', gitLink: 'https://www.github.com/', bribbbleLink: 'https://bribbble.com'},
    {img: IMG5, title: 'This is a portfolio item title', gitLink: 'https://www.github.com/', bribbbleLink: 'https://bribbble.com'},
    {img: IMG6, title: 'This is a portfolio item title', gitLink: 'https://www.github.com/', bribbbleLink: 'https://bribbble.com'}
]


const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className='container portfolio__container'>
                {portfolioItems.map((item, index) => {
                    return <PortfolioItem key={index} {...item} />
                })}
            </div>
        </section>
    );
}

export default Portfolio;