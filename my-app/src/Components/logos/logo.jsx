
import React from "react";
import "./logo.css";

import logo1 from "../../assets/logoossssss-removebg-preview.png";
import logo2 from "../../assets/logoossssss-removebg-preview.png";
import logo3 from "../../assets/logoossssss-removebg-preview.png";
import logo4 from "../../assets/logoossssss-removebg-preview.png";
import logo5 from "../../assets/logoossssss-removebg-preview.png";



const Logos = () =>{


    return(

        <div className="logo-section">
            <div className="logo-img">
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
            <img src={logo3} alt="" />
            <img src={logo4} alt="" />
            <img src={logo5} alt="" />
            </div>
        </div>
    )

}

export default Logos;