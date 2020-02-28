import React from 'react'
import { render } from '@testing-library/react'

import TextInput from '.'

describe(`TextInput`, () => {
  it(`renders the text for the label`, () => {
    const labelText = `First name`
    const textInput = render(<TextInput />)
    const label = textInput.getByTestId('label')
    expect(label).toHaveTextContent(labelText)
  })
})
