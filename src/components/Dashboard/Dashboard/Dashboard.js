import React, { useState } from "react";
import AppointmentsByDate from "../AppointmentsByDate/AppointmentsByDate";
import Sidebar from "../Sidebar/Sidebar";
import "./Dashboard.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);

    fetch("http://localhost:4000/appointmentByDate", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ date }),
    })
      .then((res) => res.json())
      .then((data) => {
        setAppointments(data);
      });
  };

  return (
    <section>
      <div className="container-fluid row containerStyle">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-5">
          <Calendar onChange={handleDateChange} value={new Date()} />
        </div>
        <div className="col-md-5">
          <AppointmentsByDate appointments={appointments}></AppointmentsByDate>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
