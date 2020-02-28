import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Nav from '../components/nav'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Hi everyone</h2>
    <p>Lets work with accessible and inclusive code!</p>
    <Nav />
  </Layout>
)

export default IndexPage
