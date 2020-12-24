import React, { Component } from "react";

import newyork from "../img/newyork.png";
import india from "../img/india.png";
import mexico from "../img/mexico.png";
import uk from "../img/uk.png";

class Service extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="container-fluid mt-3 mb-3" id="services">
          <div className="row">
            <div className="col-lg-4">
              <h2>Our Branches</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="card">
                <img src={newyork} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">New York</h5>
                </div>
              </div>
              <div className="card">
                <img src={india} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">India</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="card">
                <img src={mexico} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Mexico</h5>
                </div>
              </div>
              <div className="card">
                <img src={uk} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">United Kingdom</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6">
              <p><a href="#"><span><b>PRODUCTS</b></span></a></p>       
              <p><a href="#">Features</a></p>
              <p><a href="#">Enterprise</a></p>
              <p><a href="#">Security</a></p>
              <p><a href="#">trust</a></p>
              <p><a href="#">Customer Stories</a></p>
              <p><a href="#">Pricing</a></p>
              <p><a href="#">Slack Demo</a></p>
              <p><a href="#"></a></p>
              
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6">
            <p><a href="#"><span><b>SLCAK OF TEAMS</b></span></a></p>
              <p><a href="#">Engineering</a></p>
              <p><a href="#">Financial Services</a></p>
              <p><a href="#">Sales</a></p>
              <p><a href="#">IT</a></p>
              <p><a href="#">Marketing</a></p>
              <p><a href="#">Customer Support</a></p>
              <p><a href="#">Human Resources</a></p>
              <p><a href="#">Project Management</a></p>
              <p><a href="#">Media</a></p>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6">
              <p><a href="#"><span><b>RESOURCES</b></span></a></p>
              <p><a href="#">Resources Library</a></p>
              <p><a href="#">Slack Tips</a></p>
              <p><a href="#">Blog</a></p>
              <p><a href="#">Events</a></p>
              <p><a href="#">Slack Certified Programme</a></p>
              <p><a href="#">Help Centre</a></p>
              <p><a href="#">API</a></p>
              <p><a href="#">App Directory</a></p>
              <p><a href="#">Download Slack</a></p>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6">
            <p><a href="#"><span><b>COMPANY</b></span></a></p>
              <p><a href="#">About us</a></p>
              <p><a href="#">Leadership</a></p>
              <p><a href="#">News</a></p>
              <p><a href="#">Media kit</a></p>
              <p><a href="#">Careers</a></p>
              <p><a href="#">Slack shop</a></p>
              <p><a href="#">Partners</a></p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Service;
