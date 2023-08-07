import React from 'react'
import { useParams, Link } from 'react-router-dom'
import ProductData from '../Data/ProductData'

function Cat() {
        let {cid} = useParams()
        let displayProductCat=ProductData.filter((product)=>product.cid==cid)
        return (
            <div className='con'>
                <h1>Category Products</h1>
                        
                        <div class="con row">
                        {displayProductCat.map((product) => (
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
                        
                        
            </div>
        )
}

export default Cat