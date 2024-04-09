import React from 'react'

const Button = ({children}) => {
  return (
    <button className='cursor-pointer bg-button-blue-color rounded-[10px] text-white px-[25px] py-[10px]  '>{children}</button>
  )
}

export default Button
