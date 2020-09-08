import { graphql, useStaticQuery, Link } from "gatsby"
import React, { Component } from "react"
import Img from "gatsby-image"

import styled from "styled-components"


const Logo = () => {
    const data = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: { eq: "product" }, name: { eq: "logo" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 250) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    // <div>
        /* <Img
          fluid={data.file.childImageSharp.fluid}
          alt="Calorfi"
        ></Img> */
        <ImageWrapper>
            <StyledImage fluid={data.file.childImageSharp.fluid} />
          </ImageWrapper>
    //</div>
    )

  }

  export default Logo

const HeaderButton = styled.button`
font-weight: 500;
font-size: 14px;
color: white;
letter-spacing: 1px;
height: 60px;
display: block;
margin-left: 8px;
text-transform: uppercase;
cursor: pointer;
white-space: nowrap;
background: ${props => props.theme.color.secondary};
border-radius: 4px;
padding: 0px 40px;
border-width: 0px;
border-style: initial;
border-color: initial;
border-image: initial;
outline: 0px;
&:hover {
  box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
}
@media (max-width: ${props => props.theme.screen.md}) {
}
@media (max-width: ${props => props.theme.screen.sm}) {
  margin-left: 0;
}
`
const ImageWrapper = styled.div`
justify-self: end;
align-self: center;
@media (max-width: ${props => props.theme.screen.md}) {
  justify-self: center;
}
@media (max-width: 768px) {
  margin:auto;
  display:block;
  }

`

// 250px works good for desktop view
const StyledImage = styled(Img)`
width: 400px;
@media (max-width: ${props => props.theme.screen.md}) {
  width: 200px;
} 
`


