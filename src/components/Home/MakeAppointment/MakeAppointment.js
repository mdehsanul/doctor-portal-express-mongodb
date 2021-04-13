import React from "react";
import "./MakeAppointment.css";
import doctor from "../../../images/doctor.png";

const MakeAppointment = () => {
  return (
    <div>
      <section className="make-appointment">
        <div className="container">
          <div className="row">
            <div className="col-md-5 d-none d-md-block">
              <img src={doctor} alt="" />
            </div>
            <div className="col-md-7 text-white py-5" style={{ zIndex: "100" }}>
              <h5 className="text-uppercase " style={{ color: "#1cc7c1" }}>
                Appointment
              </h5>
              <h1 className="my-4">
                Make an Appointment <br /> Today
              </h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
                magnam ad consequuntur assumenda saepe hic amet nemo ea facere
                a!
              </p>
              <button className="btn headerMainButton">Learn More</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MakeAppointment;
