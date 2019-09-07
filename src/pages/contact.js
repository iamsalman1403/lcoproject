import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reuseable/heroSection'
import Infoblock from '../components/Reuseable/infoblock'
import Dualinfoblock from '../components/Reuseable/Dualinfoblock'
import Cart from '../components/Cart/Cart'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />  
    < HeroSection img = {
      data.img.childImageSharp.fluid
    }
    title = 'salman'
    subtitle = 'salmanparkar.xyz'
    heroClass = 'hero-background' >
    </HeroSection>
    <Infoblock heading='About us'/>
    <Dualinfoblock heading='Our team' btn='works'/>
    <Cart courses={data.courses} />
  </Layout>

)

export const query = graphql`
{
  img: file(relativePath: {
    eq: "heromain.png"
  }) {
    childImageSharp {
      fluid(maxWidth: 400, maxHeight: 250) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  courses: allContentfulCourses {
    edges {
      node {
        id
        title
        price
        caegory
        description {
          description
        }
        image {
          fixed(width: 400, height: 240) {
            src
          }
        }
      }
    }
  }
}
`

export default IndexPage

//img instread of filename in con