import React from 'react'

const InputField = ({value,setValue,name,label,type='text',...rest}) => {
  return (
    <div>
      <label htmlFor={name}>
        {label}
      </label>
      <input type={type} {...rest} name={name} value={value} onChange={(event) => setValue(event.target.value)} />
     </div>
  )
}

export default InputField