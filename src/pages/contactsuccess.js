import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import { BodyWrap } from '../helpers/common'
import styled from 'styled-components'
import { smallerScreen, mediumScreen } from '../helpers/breakpoints'
import SEO from '../components/seo'
import PageHeader from '../components/PageHeader'

const PageBody = styled.div`
  margin-top: 50px;
  text-align: center;
  ${smallerScreen} {
    padding: 0 1rem;
  }
`


const MoreLink = styled.div`
display: inline-block;
padding: 5px 20px;
margin-top: 15px;
cursor: pointer;
border-radius: 40px;
font-weight: 500;
font-size: 18px;
text-align: center;
border: 1px solid #400b46;
color: #fff;
box-shadow: 0 0px 5px 4px rgba(42, 16, 70, 0.14);
transition: background 0.3s;
${mediumScreen} {
  margin-left: 20px;
}

&:hover {
  border: 1px solid #1a051d;
}

  
.link {
    cursor: pointer;
    font-weight: 400;
	text-decoration: none;
}

.link--arrowed {
	display: inline-block;
    height: 2rem;
    line-height: 2rem;
	
	.arrow-icon {
		position: relative;
		top: -1px;
		-webkit-transition: -webkit-transform 0.3s ease;
		transition: -webkit-transform 0.3s ease;
		transition: transform 0.3s ease;
		transition: transform 0.3s ease, -webkit-transform 0.3s ease;
		vertical-align: middle;
	}
	
	.arrow-icon--circle {
		transition: stroke-dashoffset .3s ease;
		stroke-dasharray: 95;
		stroke-dashoffset: 95;
	}
	
	&:hover {
		.arrow-icon {
			transform: translate3d(5px, 0, 0);
		}
		
		.arrow-icon--circle {
			stroke-dashoffset: 0;
		}
	}
}
`

const SuccessPage = () => (
  <Layout>
    <SEO title="Contact Successful | Travelr app" />
    <PageHeader title="Thanks You!" />
    <BodyWrap>
      <PageBody>
        <h3>Thank your for contacting us. We have received your details successfully. We would get back to you very soon.</h3>

        <MoreLink>
          <Link to="/" className="link link--arrowed">
            Go To Site Home
          <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
              <g fill="none" stroke="#1a051d" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10">
                <circle className="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle>
                <path className="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
              </g>
            </svg>
          </Link>
        </MoreLink>
      </PageBody>
    </BodyWrap>
  </Layout>
)

export default SuccessPage
