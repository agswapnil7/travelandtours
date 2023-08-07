import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import ThankYou from './ThankYou'
function Contact() {
  return (
    <>
    <div className='container'>
      <h1 className='con'>Contact Us</h1>
      <form class="row g-3 mt-5">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4" />
  </div>
  <div class="col-md-6">
    <label for="inputPhone4" class="form-label">Phone</label>
    <input type="phone" class="form-control" id="inputPhone4"/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option >Province 1</option>
      <option>Province 2</option>
      <option >Province 3</option>
      <option>Province 4</option>
      <option >Province 5</option>
      <option>Province 6</option>
      <option>Province 7</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip"/>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <Link to='/thankyou'><button class="btn btn-danger">Submit</button></Link>
  </div>
</form>
<div className='con mt-5'>
    <h2>Follow Us</h2>
    <p>Connect with us on social media:</p>

    <a href='https://www.facebook.com'>
    <i class="fab fa-facebook fa-2x text-dark"></i>
    </a>
    <a href='https://www.twitter.com'>
      <i class="fab fa-twitter fa-2x ms-3 text-dark"></i>
    </a>
    <a href='https://www.instagram.com'>
      <i class="fab fa-instagram fa-2x ms-3 text-dark"></i>
    </a>
    </div>
    </div>
    </>
  )
}

export default Contact