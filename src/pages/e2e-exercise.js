import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Nav from '../components/nav'

const SecondPage = () => (
  <Layout>
    <SEO title="End-to-End Test Exercise" />
    <h2>End-to-End Test Exercise</h2>
    <p>In this exercise we are going to try out Cypress. </p>
    <p>You can do this by going to your terminal and run: </p>{' '}
    <code>
      <pre>npm run cy:open</pre>
    </code>{' '}
    <Nav />
  </Layout>
)

export default SecondPage
