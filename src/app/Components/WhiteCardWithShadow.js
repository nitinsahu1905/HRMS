import React from 'react'

const WhiteCardWithShadow = ({children}) => {
  return (
    <div className='bg-white  shadow-[2px_2px_4px_0_rgba(0,0,0,0.1)] rounded-[15px] h-full '>
        {children}
    </div>
  )
}

export default WhiteCardWithShadow