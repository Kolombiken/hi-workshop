import React from 'react'
import { Link } from 'gatsby'

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/html-exercise/">HTML Exercise</Link>
      </li>
      <li>
        <Link to="/e2e-exercise/">End-to-end Test Exercise</Link>
      </li>
      <li>
        <Link to="/unit-test-exercise/">Unit Test Exercise</Link>
      </li>
      <li>
        <Link to="/links/">Links</Link>
      </li>
    </ul>
  </nav>
)

export default Nav
