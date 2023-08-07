import React from 'react';

function Footer() {
  return (
    <div>
      <footer>
        <div className='container text-center'>
          <div className='row'>
            <div className="col-md-4 col-sm-6">
              <img src='https://preview.colorlib.com/theme/travelo/img/logo.png' className='pd'></img>
              <ul>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Street Address</li>
                <li>Postal Code</li>
                <li>Email</li>
              </ul>
            </div>
            <div className="col-md-4 col-sm-6">
              <h4 className='pd'>Popular Destinations</h4>
              <ul>
                <li>Indonesia</li>
                <li>England</li>
                <li>India</li>
                <li>Italy</li>
                <li>France</li>
              </ul>
            </div>
            <div className="col-md-4 col-sm-6">
              <h4 className='pd'>Company</h4>
              <ul>
                <li>Pricing</li>
                <li>About</li>
                <li>Gallery</li>
                <li>Contact</li>
                <li>Reviews</li>
              </ul>
            </div>
          </div>
        </div>
        <hr></hr>
        <p>Register Forum Affiliate FAQ</p>
        <a href='https://www.facebook.com'>
          <i className="fab fa-facebook fa-2x ms-3 text-light"></i>
        </a>
        <a href="https://www.instagram.com">
          <i className="fab fa-instagram fa-2x text-light ms-3"></i>
        </a>
        <a href="https://www.twitter.com">
          <i className="fab fa-twitter fa-2x text-light ms-3"></i>
        </a>
        <p>&copy;2023. Travelo. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default Footer;