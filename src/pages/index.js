import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Button from '../components/Button'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi everyone</h1>
    <p>Lets work with accessible and inclusive code!</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Button>Please click me!</Button>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
