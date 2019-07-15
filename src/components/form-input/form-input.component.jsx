import React from 'react'

import { FormInputGroup, FormInputContainer, FormLabel } from './form-input.styles'

const FormInput = ({handleChange, label, ...props}) => {
  return (
    <FormInputGroup>
    <FormInputContainer 
      onChange={handleChange} {...props} 
      

    />
    {label ? (
      <FormLabel
      className={
        props.value.length ? 'shrink' : ''}
     >{label}</FormLabel>
    ): null }
    </FormInputGroup>
  
  )
}

export default FormInput
