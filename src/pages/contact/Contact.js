import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contactLeft">
        <img
          className="contactImg"
          src="https://images.pexels.com/photos/3651577/pexels-photo-3651577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
      </div>
      <div className="contactRight">
        <div className="contactTitle">
          <span className="contactTitleText">Contact us</span>
        </div>
        <form className="contactForm">
          <label>Name</label>
          <input className="contactName" type="text" />
          <label>Email</label>
          <input className="contactEmail" type="email" />
          <label>Subject</label>
          <input className="contactsubject" type="text" />
          <label>Message</label>
          <textarea className="contactText" />
          <button type="submit" className="contactButton">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
