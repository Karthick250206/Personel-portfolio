import React, { useContext } from "react";
import "./Footer.scss";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const { isDark } = useContext(StyleContext);

  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Need a project done? Reach me at{" "}
          <a
            href="mailto:karthick250206@gmail.com"
            className={isDark ? "dark-mode email-link" : "email-link"}
            target="_blank"
            rel="noopener noreferrer"
          >
            karthick250206@gmail.com
          </a>
        </p>
      </div>
    </Fade>
  );
}
