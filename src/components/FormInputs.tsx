import React, { useState } from 'react'

const FormInputs = ( props: any ) => {
const { label, errorMessage, onChange, id, ...inputProps } = props
const [focused, setFocused] = useState(false)

const handleFocus = (e: any) => {
  setFocused(true)
}
  return (
    <div className='flex flex-col  '>
      <label htmlFor="">{label}</label>
      <input 
      {...inputProps} 
      onChange={onChange} 
      onBlur={handleFocus}
      focused={focused.toString()}
      onFocus={() => inputProps.name === "confirmPassword" && setFocused(true)}
      className='input h-11 py-2 px-3 outline-none  480px:w-[27rem] text-[13px] rounded-md border ' 
      />
      <span className='error-message mt-3 text-[15px] w-[27rem] text-red-500 '>{errorMessage}</span>
    </div>
  )
}

export default FormInputs
