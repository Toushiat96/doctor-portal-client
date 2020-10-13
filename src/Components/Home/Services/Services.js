import React from "react";
import Fluoride from '../../../images/fluoride.png';
import Cavity from '../../../images/cavity.png';
import Teath from '../../../images/tooth.png';
import ServicesDetail from "../sevicesDetail/ServicesDetail";
const serviceData = [
  {
    name: "Fluoride Treatment",
    img: Fluoride
  },
  {
    name: "Cavity Filling",
    img: Cavity
  },
  {
    name: "Teath Whitening",
    img: Teath
  },
];

const Services = () => {
  return (
    <section className="services-container mt-5">
      <div className="text-center">
        <h5 style={{ color: "#1cc7c1" }}> OUR SERVICES</h5>
        <h2> Services We Provide</h2>
      </div>
      <div className="d-flex justify-content-center">
      <div className="w-75 row mt-5 pt-5">
      
      {
      
      serviceData.map( services => <ServicesDetail services={services}></ServicesDetail>)
      }
      </div>
      
      </div>
    </section>
  );
};

export default Services;
