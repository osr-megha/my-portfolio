import React from "react";
import "./footer.css";
import { FaHome, FaPhone,FaMailBulk, FaLinkedin,FaFacebook, FaGithub } from "react-icons/fa";
import {SiGmail} from 'react-icons/si'
import {FcDocument} from 'react-icons/fc'
import MeghaCV from '../../Assests/MeghaCV.pdf';


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
            <div>
              <p>Caranzalem Goa</p>
              <p>India</p>
            </div>
          </div>
          <div className="phone">
          <h4>
            <FaPhone size={20} style={{ color: "white", marginRight: "2rem" }} />
            91-9953610367
            </h4>
          </div>
          <div className="email">
          <h4>
            <FaMailBulk size={20} style={{ color: "white", marginRight: "2rem" }} />
            megha-sharma@live.com</h4>
          </div>
        </div>
        <div className="right">
        <h4>About Me</h4>
        <p>I am Megha</p>
        <p>Looking forward for discussing new projects and design challenges</p>
        <div className="social">

        <a
                  href="https://www.facebook.com/profile.php?id=100001900459463"
                  target="blank"
                  className="socialIcon github"
                >
        <FaFacebook size={30} style={{ color: "white", marginRight: "1rem" }} />
        </a>
        <a
                  href="https://www.linkedin.com/in/megha-sharma-a975354b/"
                  target="blank"
                  className="socialIcon linkedin"
                >
        <FaLinkedin size={30} style={{ color: "white", marginRight: "1rem" }} />
        </a>
        <a
                  href="https://github.com/osr-megha"
                  target="blank"
                  className="socialIcon github"
                >
        <FaGithub size={30} style={{ color: "white", marginRight: "1rem" }} />
        </a>
        <a
                  href="mailto:osr.megha@gmail.com"
                  target="blank"
                  className="socialIcon google"
                >
        <SiGmail size={30} style={{ color: "white", marginRight: "1rem" }} />
        </a>
        <a
                  href={MeghaCV}
                  download="MeghaCV.pdf"
                  className="socialIcon google"
                >
        <FcDocument size={30} style={{ color: "white", marginRight: "1rem" }} />
        </a>


        
        </div>
        
        </div>
      </div>
    </div>
  );
};

export default Footer;
