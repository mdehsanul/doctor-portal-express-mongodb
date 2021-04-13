import React from "react";
import Doctor from "../Doctor/Doctor";
import "./Doctors.css";

const Doctors = () => {
  return (
    <section className="doctors">
      <div className="container">
        <h3 className="text-center  text-primary mb-5">Our Doctors</h3>
        <div className="row">
          <Doctor />
          <Doctor />
          <Doctor />
        </div>
      </div>
    </section>
  );
};

export default Doctors;
