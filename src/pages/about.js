import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reuseable/heroSection'
import Infoblock from '../components/Reuseable/infoblock'
import Dualinfoblock from '../components/Reuseable/Dualinfoblock'
import Team from '../components/About/team'
// import Courses from '../components/Cart/Coursecart'


const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" />  
    < HeroSection img = {
      data.img.childImageSharp.fluid
    }
    title = 'salman'
    subtitle = ''
    heroClass = 'about-background' >
    </HeroSection>
    <Dualinfoblock heading='Message from ceo' btn='works'/>
    <Infoblock heading='About vision'/>
    <Team/>
  
    
  </Layout>

)

export const query = graphql`
{
  img: file(relativePath: {
    eq: "about.png"
  }) {
    childImageSharp {
      fluid(maxWidth: 400, maxHeight: 250) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }


}
`

export default AboutPage

//img instread of filename in const
