import React from 'react'
import Heading from './Heading'
import {Link} from 'gatsby'

export default function infoblock({heading}) {
    return (
       <section className='bg-theme my-5 py-4'>
       <div className='container'>
       <Heading title={heading}></Heading>
       <div className='row'>
       <div className='col-10 col-sm-8 text-center mx-auto'>
       <p className='lead  mb-4 text-white'>
       mamslss smsla sjsla aalams nksps ks;
       a sswp mamslss smsla sjsla aalams nksps ks;
       a sswp mamslss smsla sjsla aalams nksps ks;
       a sswp mamslss smsla sjsla aalams nksps ks;
       a sswp mamslss smsla sjsla aalams nksps ks;
       a sswp mamslss smsla sjsla aalams nksps ks;
       a sswp
       </p>
       <Link to='./about/'>
       <button className='btn btn-warning'>{heading}</button>
       </Link>
       </div>  
       </div>
       </div>
       </section>
    )
}
