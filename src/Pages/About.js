import React from 'react'
import ProductData from '../Data/ProductData'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className='container'>
      <h1 className='con'>About Us</h1>
      <div className='row mt-5' >
        <div className='col'>
          <img src='https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGF0YXxlbnwwfHwwfHw%3D&w=1000&q=80' style={{height : '800px', width:'700px', borderRadius:'100px'}}></img>
        </div>
        <div className='col con'>
          <h2 className='mb-5'>Our Company</h2>
          <h4>Welcome to our company, your trusted partner for all your travel and tour needs. We are a leading travel and tours company that specializes in providing personalized and professional travel services to clients around the world.

Our team of experienced travel experts is dedicated to creating unforgettable travel experiences tailored to your specific needs and preferences. Whether you are planning a romantic getaway, a family vacation, or a corporate retreat, we have the expertise and resources to design a travel package that suits your unique requirements.

At our company, we pride ourselves on our attention to detail, and we work tirelessly to ensure that every aspect of your trip is perfectly arranged. From flights and accommodation to transportation and sightseeing tours, we take care of all the logistics so that you can focus on enjoying your travels.</h4>
        </div>
      </div>
      <div className='row mt-5' >
      <div className='col con'>
          <h4>As a travel and tours company, we understand that no two travelers are alike. That's why we offer a wide range of travel services, including adventure travel, cultural tours, luxury vacations, and more. Our team is passionate about travel and is always up-to-date with the latest travel trends and destinations, so you can be sure that you are getting the best possible travel advice and recommendations.

At our company, we are committed to providing our clients with exceptional customer service and support. We are available 24/7 to answer any questions or concerns you may have and are always ready to assist with any travel-related issues that may arise.

Thank you for considering our company for your travel and tour needs. We look forward to helping you plan your next adventure and creating memories that will last a lifetime.</h4>
        </div>
        <div className='col'>
          <img src='https://images.unsplash.com/photo-1582468546235-9bf31e5bc4a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHRlbXBsZXN8ZW58MHx8MHx8&w=1000&q=80' style={{height : '800px',width:'700px', borderRadius:'100px'}}></img>
        </div>
      </div>
      <div className='row mt-5 mb-5'>
        <div className='col'>
          <img src='https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?cs=srgb&dl=pexels-pixabay-267350.jpg&fm=jpg' style={{height : '800px', width:'700px', borderRadius:'100px'}}></img>
        </div>
        <div className='col con'>
          <h2>Join us and get to know us in different social media platforms.</h2>
          <Link to="/contact"><button class="btn btn-danger">Contact Us</button></Link>
        </div>
      </div>
    </div>
  )
}

export default About