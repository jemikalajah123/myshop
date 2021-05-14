import React from 'react';

function Footer() {
  return (
    <div className="footer-footer">
      <div className="footer-container">
        <div className='footer-row'>
            <div className="footer-col-1">
                <h3>Download Our App</h3>
                <p>Download App for Android and ios mobile phone.</p>
                <div className="app-logo">
                    <img src="images/play-store.png"></img>
                    <img src="images/app-store.png"></img>
                </div>
            </div>
            <div className="footer-col-2">
                <img src="images/logo-white.png"></img>
                <p>Our Purpose Is To sustainably make the Pleasure and Benefits of sports Accesible to the many. </p>
            </div>
            <div className="footer-col-3">
                <h3>Usefull Links</h3>
                <ul>
                    <li>Coupons</li>
                    <li>Blog Post</li>
                    <li>Policy</li>
                    <li>Join Affiliate</li>
                </ul>
            </div>
            <div className="footer-col-4">
                <h3>Follow us</h3>
                <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Youtube</li>
                    <li>LinkedIn</li>
                </ul>
            </div>
        </div>
        <p className="copyright">Copyright &copy; 2021 - MyShop</p>
      </div>
    </div>
  )
}

export default Footer
