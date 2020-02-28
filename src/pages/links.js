import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Nav from '../components/nav'

const SecondPage = () => (
  <Layout>
    <SEO title="Links" />
    <h2>Links</h2>
    <p>Some links to resources and the things we have worked with in the workshop.</p>
    <h3 id="Testing-Tools">Testing Tools</h3>
    <ul>
      <li>
        <a href="https://www.cypress.io/">Cypress</a>
      </li>
      <li>
        <a href="https://deque.com/axe/">aXe by Deque</a>
      </li>
      <li>
        <a href="https://www.npmjs.com/package/cypress-axe">Cypress-axe</a>
      </li>
      <li>
        <a href="https://jestjs.io/">Jest</a>
      </li>
      <li>
        <a href="https://testing-library.com/">Testing Library</a>
      </li>
      <li>
        <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y">eslint-plugin-jsx-a11y</a>
      </li>
      <li>
        <a href="https://developers.google.com/web/tools/lighthouse/">Lighthouse</a>
      </li>
      <li>
        <a href="https://developers.google.com/web/updates/2018/01/devtools#contrast">Chrome Color Contrast Debugger</a>
      </li>
    </ul>
    <h3>Nav</h3>
    <Nav />
  </Layout>
)

export default SecondPage
