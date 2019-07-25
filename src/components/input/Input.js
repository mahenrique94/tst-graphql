import React from 'react'

import './Input.css'

const Input = ({ onChange, value, placeholder }) => <input className="input" onChange={onChange} value={value} placeholder={placeholder}/>

export default Input