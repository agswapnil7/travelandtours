import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Details from '../Pages/Details'
import Cat from '../Pages/Cat'
import ThankYou from '../Pages/ThankYou'
function Header() {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="light">
  <div class="container-fluid">
  <Link class="navbar-brand" to="/">
      <img src="https://preview.colorlib.com/theme/travelo/img/logo.png" alt="Logo" width="120" height="34" class="d-inline-block align-text-top"/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
      <ul class="navbar-nav d-flex justify-content-between fs-6 fw-semibold p-2">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item ms-5">
          <Link class="nav-link" to="/about">About Us</Link>
        </li>
        <li class="nav-item ms-5">
          <Link class="nav-link" to="/contact">Contact</Link>
        </li>
        <li class="nav-item ms-5">
            <div class="btn-group">
                <button type="button" class="btn btn-danger dropdown-toggle fs-6 fw-semibold" data-bs-toggle="dropdown" aria-expanded="false">
                    Destination
                </button>
                <ul class="dropdown-menu">
                    <li><Link class="dropdown-item" to={`/cat/1`}>Asia</Link></li>
                    <li><Link class="dropdown-item" to={`/cat/2`}>Europe</Link></li>
                    <li><hr class="dropdown-divider"/></li>
                    <li><Link class="dropdown-item" to={`/cat/3`}>Other Places</Link></li>
                </ul>
            </div>
        </li>
      </ul>
    </div>
    <div className='headicon'>
    <span className='abc' style={{color:'black'}}><i class="fas fa-phone text-dark"></i> 9821473081
    </span>
    <a href='https://www.facebook.com'>
      <i class="fab fa-facebook fa-2x ms-5 text-dark"></i>
    </a>
    <a href='https://www.twitter.com'>
      <i class="fab fa-twitter fa-2x ms-3 text-dark"></i>
    </a>
    <a href='https://www.instagram.com'>
      <i class="fab fa-instagram fa-2x ms-3 text-dark"></i>
    </a>
    </div>
  </div>
</nav>
<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<Details />} />
        <Route path="/cat/:cid" element={<Cat />} />
        <Route path="/thankyou" element={<ThankYou />} />
</Routes>
</>

  )



}

export default Header