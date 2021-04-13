import React from "react";
import "./InfoCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InfoCard = ({ info }) => {
  return (
    <div className="col-md-4 text-white info-card">
      <div
        className={`d-flex justify-content-center align-items-center info-${info.background} info-container`}
      >
        <div className="me-5">
          <FontAwesomeIcon icon={info.icon} className="info-icon" />
        </div>
        <div>
          <h6>{info.title}</h6>
          <small>{info.description}</small>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
