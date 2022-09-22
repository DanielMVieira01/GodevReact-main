import React from "react";
import { ImFacebook2 } from "react-icons/im";
import { ImInstagram } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { ImMail2 } from "react-icons/im";

const Redes = () => {
  return (
    <div className="webFooter containerFooter">
      <ul>
        <h3>Redes Sociais </h3>
        <li>
          <ImFacebook2 /> Facebook
        </li>
        <li>
          <ImInstagram/> Instagram
        </li>
        <li>
          <ImTwitter/> Twitter
        </li>
        <li>
          <ImMail2/> E-Mail
        </li>
      </ul>
    </div>
  );
};
export default Redes;
