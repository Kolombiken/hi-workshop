import React from 'react'
import './button.css'

const Button = ({ className = '', type = 'button', children }) => (
  <button type={type} className={`button ${className || ''}`}>
    {children}
  </button>
)

export default Button
