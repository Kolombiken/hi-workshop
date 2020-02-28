import React from 'react'

const TextInput = ({ labelText }) => (
  <div>
    <label data-testid="label" htmlFor="text-input">
      {labelText}
    </label>
    <input data-testid="input" type="text" id="text-input" />
  </div>
)

export default TextInput
