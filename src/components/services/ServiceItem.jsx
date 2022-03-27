import React from "react";
import { BiCheck } from "react-icons/bi";

const ServiceItem = ({ title, serviceList }) => {
  return (
    <article className="service">
        <div className="service__head">
            <h3>{title}</h3>
        </div>

        <ul className="service__list">
            {serviceList.map((service, index) => {
                return (
                    <li key={index}>
                        <BiCheck className="service__list-icon" />
                        <p>{service}</p>
                    </li>
                );
            })}
        </ul>
    </article>
  );
}

export default ServiceItem;
