import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Nav from '../components/nav'

const SecondPage = () => (
  <Layout>
    <SEO title="Unit Test Exercise" />
    <h2>Unit Test Exercise</h2>
    <p>
      Make sure the two unit tests for the form-control in <code>text-input.js</code> pass.
    </p>
    <p>To run unit tests go to your terminal and run: </p>{' '}
    <code>
      <pre>npm run test</pre>
    </code>{' '}
    <Nav />
  </Layout>
)

export default SecondPage
