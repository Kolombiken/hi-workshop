import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Nav from '../components/nav'

const SecondPage = () => (
  <Layout>
    <SEO title="HTML Exercise" />
    <h2>HTML Exercise</h2>
    <p>
      Your group will be given an image of a website. Make a plan together regarding what markup is needed for the main
      functionality on that website.
    </p>
    <p>
      Step two is to find the file <code>html-exercise.js</code> in the repo. Then write the markup where the code
      comment says it should be.
    </p>
    <div>{/* All the markup for this exercise goes here! */}</div>
    <Nav />
  </Layout>
)

export default SecondPage
