import React, { Component } from 'react'
import Heading from '../Reuseable/Heading'
import Img from 'gatsby-image'

export default class Cart extends Component {
    constructor(props){
        super(props)
        this.state={
            courses:props.courses.edges,
            mycourses:props.courses.edges,
        }
    }
    render() {
        // console.log(this.state.courses);
        
        return( 
                <section className='py-5'>
                <div className='container'>
                < Heading title = "courses" />
                <div className='row'>
                {
                    this.state.courses.map(({node})=>{
                        return(
                            <div key={node.id} className='col-11 col-md-5 d-flex mx-auto'>
<div className="card card-size mb-4">
  <Img fixed={node.image.fixed} className='card-image'/>
  <div className="card-body">
  <h5 className="card-title">{node.title}
  <h4 className='card-title text-success'>{node.price}</h4>
  <p className='card-text success'>{node.description.description}</p>
  < button className = 'btn btn-warning snipcart-add-item'
  data-item-id={node.id}
  data-item-name ={node.title}
  data-item-price ={node.price}
  data-item-image = {node.image.fixed.src}
  data-item-url = "https://salmanparkar.xyz"
  data-item-description = {node.description.description}>Join now </button>

  </h5>
  </div>
</div>
                            <div>
                            </div>
                            </div>
                        )
                    })
                }
                </div>
                </div>
                </section>
        )
    }
}
