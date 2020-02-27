import React from 'react'
import { render } from '@testing-library/react'

import Button from '.'

describe(`Button`, () => {
  it(`renders activatorText`, () => {
    const activatorText = `Hamburgers`
    const { getByText } = render(<Button activatorText={activatorText} />)

    const text = getByText(activatorText)

    expect(text).toBeInTheDocument()
  })
})
