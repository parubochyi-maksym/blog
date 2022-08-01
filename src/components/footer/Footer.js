import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerLeft">
        <span className="footerLeftText">Lets Talk Blog</span>
      </div>
      <div className="footerCenter">
        <span className="footerCenterText">Contacts:</span>
        <ul className="footerCenterList">
          <li className="footerCenterItem">
            <i className="fa-solid fa-square-envelope"></i> blog@mail.com
          </li>
          <li className="footerCenterItem">
            <i className="fa-solid fa-square-phone"></i> +380473457045
          </li>
        </ul>
      </div>
      <div className="footerRight">
        <i className="footerIcon fa-brands fa-instagram-square"></i>
        <i className="footerIcon fa-brands fa-facebook-square"></i>
        <i className="footerIcon fa-brands fa-twitter-square"></i>
      </div>
    </div>
  );
}
