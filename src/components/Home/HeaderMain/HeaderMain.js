import React from "react";
import "./HeaderMain.css";
import chair from "../../../images/chair.png";

const HeaderMain = () => {
  return (
    <main className="row d-flex align-items-center" style={{ height: "600px" }}>
      <div className="col-md-4 offset-md-1">
        <h1 className="headerMain">
          Your New Smile <br /> Starts Here
        </h1>
        <p className="text-secondary">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, ullam
          voluptates quidem odio alias corrupti soluta veritatis placeat autem
          suscipit odit rerum voluptas dolores fuga excepturi, molestiae
          consequuntur tempora eaque fugit eos aliquid! Expedita, atque impedit.
          Quod iusto aperiam aspernatur eligendi autem, ut neque, fugit rerum
          laudantium numquam ea omnis.
        </p>
        <button className="btn headerMainButton">GET APPOINTMENT</button>
      </div>
      <div className="col-md-6">
        <img src={chair} alt="" className="img-fluid" />
      </div>
    </main>
  );
};

export default HeaderMain;
