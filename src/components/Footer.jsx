import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../components/FontAwesome";

const fcBG = { backgroundColor: "#EBEAEB" };
function Footer() {
  return (
    <>
      <div className="container-fluid" style={fcBG}>
        <div className="footer">
          <nav className="navbar navbar-expand-md  justify-content-between">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Staus
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Privacy &amp; terms
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Support
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact us - dvamsivarma619@gmail.com
                </a>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FontAwesomeIcon icon={["fab", "twitter"]} size="lg" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FontAwesomeIcon icon={["fab", "facebook"]} size="lg" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FontAwesomeIcon icon={["fab", "youtube"]} size="lg" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer-copyright">
          <p>
            &copy;Copyright 2020 Slack Technologies, Inc. All rights reserved
            <br />
            Developed by <span>-Vamsi Varma Datla</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
