import React from 'react';

const sbgColor = { backgroundColor: "#482147" };  
const freeBtn = { backgroundColor : "#FFFFFF" }
const saleColor = { backgroundColor: "#482147" }

function Sales(){

    return(<>
    <div className="container-fluid mt-5" style={sbgColor}>
        <div className="contact-sales text-white">
            <h2>Choose a better way to work</h2>
            <button className="btn btn-primary" id="btn-free" style={freeBtn}>try for free</button>
            <button className="btn btn-primary" id="btn-sale" style={saleColor}>contact sales</button>
        </div>
    </div>
    
    </>)
}

export default Sales;