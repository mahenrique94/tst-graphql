import React from 'react'

import './Form.css'

const Form = ({ children, onSubmit }) => <form className="form" onSubmit={onSubmit}>{ children }</form>

export default Form
