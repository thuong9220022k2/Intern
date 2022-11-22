import React , { useEffect , useState} from "react";
import "./Contact.scss"
import messenger from "./../../../assets/Contact/icon-messenger.svg"
import phone from "./../../../assets/Contact/icon-phone.svg"
import zalo from "./../../../assets/Contact/icon-zalo.svg"
export default function Contact() {

    return (
      <div className="Contact-btn">
         <button className="btn-messenger btn-contact">
           <img src={messenger} alt="messenger"/>
         </button>
         <button className="btn-phone btn-contact">
           <img src={phone} alt="phone"/>
         </button>
         <button className="btn-messenger btn-contact">
           <img src={zalo} alt="zalo"/>
         </button>        
      </div>
    );
}