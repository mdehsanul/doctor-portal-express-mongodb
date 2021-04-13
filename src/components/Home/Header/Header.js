import React from "react";
import "./Header.css";
import HeaderMain from "../HeaderMain/HeaderMain";
import Navbar from "../../Shared/Navbar/Navbar";
import BusinesInfo from "../BusinesInfo/BusinesInfo";

const Header = () => {
  return (
    <div className="headerContainer">
      <Navbar></Navbar>
      <HeaderMain></HeaderMain>
      <BusinesInfo></BusinesInfo>
    </div>
  );
};

export default Header;
