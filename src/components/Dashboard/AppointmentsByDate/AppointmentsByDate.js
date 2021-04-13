import React from "react";

const AppointmentsByDate = ({ appointments }) => {
  console.log(appointments);
  return (
    <div>
      <h2>Appointments: {appointments.length}</h2>
    </div>
  );
};

export default AppointmentsByDate;
