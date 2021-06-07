import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Brand() {
  return (
  <div className="brands">
    <div className="small-container">
        <div className="footer-row">
            <div className="col-5">
                <img src="images/logo-godrej.png"></img>
            </div>
            <div className="col-5">
                <img src="images/logo-oppo.png"></img>
            </div>
            <div className="col-5">
                <img src="images/logo-coca-cola.png"></img>
            </div>
            <div className="col-5">
                <img src="images/logo-paypal.png"></img>
            </div>
            <div className="col-5">
                <img src="images/logo-philips.png"></img>
            </div>
        </div>
    </div>
  </div>
      
  );
}

export default Brand;
