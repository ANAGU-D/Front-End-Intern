import React from "react";
import Zuri from "../img/zuri.png"
import ingress from "../img/ingressive.png";
import '../styles/footer.css';

const Footer = ()=>{
    return(
        <div className="footer">
        <img src={Zuri} alt= "Zuri"/>
        <p>HNG Internship 9 Frontend Task</p>
        <img src={ingress} alt="ingressive"/>
        </div>
    )
}

export default Footer;