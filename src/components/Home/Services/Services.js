import React from "react";
import fluoride from "../../../images/furide.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../..//images/whitening.png";
import ServiceDetail from "../ServiceDetail/ServiceDetail";

const serviceData = [
  {
    name: "Fluoride Treatement",
    img: fluoride,
  },
  {
    name: "Cavity Filling",
    img: cavity,
  },
  {
    name: "Teeth Whitening",
    img: whitening,
  },
];

const Services = () => {
  return (
    <section>
      <div className="text-center">
        <h5 style={{ color: "#1cc7c1" }}>OUR SERVICES</h5>
        <h1 className="fw-bold" style={{ color: "#3a4256" }}>
          Services We Provide
        </h1>
      </div>
      <div className="d-flex justify-content-center">
        <div className="w-75 row mt-5 pt-5">
          {serviceData.map((service) => (
            <ServiceDetail service={service}></ServiceDetail>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
