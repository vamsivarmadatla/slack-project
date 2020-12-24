import React from 'react';

import custImg from '../img/customer-story.png';
import img1 from '../img/fox.png';
import img2 from '../img/lonelyplanet.png';
import img3 from '../img/intuit.png';
import img4 from '../img/carvana.png';
import img5 from '../img/kiva.png';
import img6 from '../img/devacurl.png';

function About(){
 return(<>
  <div className="container-fluid mt-5">  

     <div className="story">
       <h2>Over 750,000 companies use Slack to get work done</h2>
     </div> 

     <div className="about-slack">
       <div className="row">
         <div className="col mt-5 ml-5">
             <p>‘Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, in doloribus. Repudiandae exercitationem fuga a quisquam aliquam earum perferendis tenetur nulla voluptatibus. Placeat ab fugit voluptate quia, possimus recusandae aut.’</p>
             <pre><span><b>-Vamsi Varma Datla</b></span></pre>                                 
         </div>
         <div className="col mt-5">
           <img src={custImg} alt="customer-story"/>
         </div>
       </div>   
     </div> 

     <div className="story-image mt-5">
       <div className="row">
           <div className="col">
           <img src={img1} alt="Fox Image"/>
           <img src={img2} alt="lonely planet image"/>
           <img src={img3} alt="inituit image"/>
           <img src={img4} alt="carvana image"/>
           <img src={img5} alt="kiva image"/>
           <img src={img6} alt="devacurl image"/>
           </div>
       </div>   
   </div>
  </div>
 </>)

}

export default About;