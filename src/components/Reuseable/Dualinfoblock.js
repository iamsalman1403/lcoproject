import React from 'react'
import Heading from './Heading'
import {Link} from 'gatsby'

export default function Dualinfoblock({heading, btn}) {
    return (
        <section className='bg-theme my-4 py-4'>
        <div className='container'>
        <Heading title={heading}/>
        <div className='row'>
        <div className='col-8 mx-auto'>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
        </div>
        <div className='col-4'>
        <div className="card">
  < img src = "https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  className = "card-img-top"
  alt = "error" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to='/'>{btn}</Link>
  </div>
</div>
        </div>
        </div>

        
        </div>
        </section>
    )
}
