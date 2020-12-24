import React, { Component } from 'react';
import video1 from '../videos/video1.mp4';
import video2 from '../videos/video2.mp4';



class Welcome extends Component {
    state = {  }
    render() { 
        const welStyle = { backgroundColor: "#F6EFE8" };        
        
        return ( <>
        <div class="container-fluid p-3" id="iamge-banner-main" style={welStyle}>
            <div className="row" id="iamge-banner1">
                <div className="col ml-5 mt-5">
                    <h1>Welcome to our slack world</h1>
                    <p>“Success is not final; failure is not fatal: it is the courage to continue that counts.” – <span><b>Winston Churchill</b></span> </p>
                    <button class="btn btn-primary text-white">TRY FOR FREE</button>
                </div>
                <div className="col ml-5 mt-5">
                <video src={video1} width="600" height="380" autoplay="autoplay" loop="true"></video>
                </div>
            </div>
            <div className="row mt-3" id="iamge-banner2"> 
                <div className="col ml-5 mt-5">
                <video src={video2} width="600" height="380" autoPlay loop></video>
                </div>
                <div className="col ml-5 mt-5">
                    <h1>Good time to communicate with us</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis dolor quod ea? Consequuntur, quam quasi. Numquam blanditiis voluptatum nostrum eius.</p>
                    <button class="btn btn-primary" style={{color: "#623369"}}>see all features</button>
                </div>
            </div>
            </div>
         </> );
    }
}
 
export default Welcome;

