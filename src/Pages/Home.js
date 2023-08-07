import React from 'react'
import Header from '../Comp/Header'
import Footer from '../Comp/Footer'
import Details from './Details'
import About from './About'
import ProductData from '../Data/ProductData'
import ReviewsData from '../Data/ReviewsData'
import { Routes, Route, Link } from 'react-router-dom'
import { Carousel } from 'react-bootstrap';
function Home() {
  return (
    <>
    <div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://coolthemestores.com/wp-content/uploads/2021/05/japan-scenery-chrome-theme-wallpaper.jpg" class="d-block w-100" height={"700px"} alt="Japan"/>
      <div class="carousel-caption d-none d-md-block text-center" >
        <h1>Japan</h1>
        <h2>Finest Treasure of Asia</h2>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://www.studyandworkinaustralia.com/wp-content/uploads/2014/08/australia-scenery-city-wallpaper-1.jpg" class="d-block w-100" height={"700px"} alt="Australia"/>
      <div class="carousel-caption d-none d-md-block text-center">
        <h1>Australia</h1>
        <h2>Beautiful seas and islands</h2>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://media.nomadicmatt.com/2022/brazilsafe.jpeg" class="d-block w-100" height={"700px"} alt="Brazil"/>
      <div class="carousel-caption d-none d-md-block text-center">
        <h1>Brazil</h1>
        <h2>Land of Samba</h2>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div class="con">
  <h1>Popular Destinations</h1>
  <h5>Most popular travel destinations all around the world as demanded by our genuine customers on our site.</h5>
</div>
<div class="con row">
  {ProductData.map((product) => (
    <div class="col-sm-4 mb-3" key={product.id}>
        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', textAlign: 'center' }}>
            <div class="card">
              <img src={product.cover} class="card-img-top" alt={product.name} />
              <div class="card-body">
                <h5 class="card-title">{product.name}</h5>
                <p class="card-text">{product.price}</p>
              </div>
            </div>
        </Link>
    </div>
  ))}
</div>
<div className='con'>
  <Link to="/about"><button class="btn btn-danger">More Info</button></Link>
</div>
<div>
  <div className='mt-5'>
  <iframe width="100%" height="615" src="https://www.youtube.com/embed/f59dDEk57i0" title="YouTube video player" frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
  <div className="con row mt-5">
    <div className='col'>
      <img src='https://preview.colorlib.com/theme/travelo/img/svg_icon/1.svg'></img>
      <h4 className='mt-4'>Comfortable Journey</h4>
      <h5>A wonderful serenity has taken to the possession of my entire soul.</h5>
    </div>
    <div className='col'>
      <img src='https://preview.colorlib.com/theme/travelo/img/svg_icon/2.svg'></img>
      <h4 className='mt-4'>Luxuries Hotel</h4>
      <h5>A wonderful serenity has taken to the possession of my entire soul.</h5>
    </div>
    <div className='col'>
      <img src='https://preview.colorlib.com/theme/travelo/img/svg_icon/3.svg'></img>
      <h4 className='mt-4'>Travel Guide</h4>
      <h5>A wonderful serenity has taken to the possession of my entire soul.</h5>
    </div>
  </div>
</div>
<div className="mt-5 mb-5" style={{background :'wheat'}}>
  <div className='con'>
  <h2>Customer Reviews</h2>
  <Carousel>
    {ReviewsData.map((review, id) => (
      <Carousel.Item key={id}>
        <img src={review.pic} style={{borderRadius:'100px', width:'150px', height:'150px'}} className ="pd" ></img>
        <p>{review.review}</p>
        <p>{review.name} - {review.rating} stars</p>
        <br></br>
      </Carousel.Item>
    ))}
  </Carousel>
</div>
</div>

        <Routes>
        <Route path="/product/:id" element={<Details />} />
        <Route path="/about" element={<About />} />
</Routes>
</>
  )
}

export default Home