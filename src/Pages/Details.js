import React from 'react'
import { useParams } from 'react-router-dom'
import ProductData from '../Data/ProductData'
import { Link } from 'react-router-dom'

function Details() {
  let {id} = useParams()
  let displayProduct=ProductData.find((q)=>q.id==id)

  return (
    <div className='con'>
      <div className='row'>
        <div className='col-sm-12 col-md-6'>
          <img src={displayProduct.cover} className='img-fluid' alt={displayProduct.name} />
        </div>
        <div className='col-sm-12 col-md-6'>
          <h2>{displayProduct.name}</h2>
          <h3>{displayProduct.price}</h3>
          <h4>{displayProduct.description}</h4>
          <Link to ="/contact"><button type="button" class="btn btn-danger">Select this package</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Details