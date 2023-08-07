import React from 'react'
import { Link } from 'react-router-dom'
function ThankYou() {
  return (
    <div className='con mt-5'>
        <h1>Thank You!!!</h1>
        <h4 className='mt-5'>We've been notified about your actions. We'll contact you on your E-mail for further process. Please check your E-mail</h4>
        <Link to ="/"><button type="button" class="btn btn-danger">Go to Home Page</button></Link>
    </div>
  )
}

export default ThankYou